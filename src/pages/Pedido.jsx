import { useState } from "react";
import { BsSearch, BsCartCheck, BsDashCircle } from "react-icons/bs";
import img from '../assets/Mar-business_2.jpg'

const Pedido = () => {
  const [remedio, setRemedio] = useState("");
  const [result, setResult] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [valid, setValid] = useState(false);
  let [carrinho, setCarrinho] = useState(0);

  function serachDrug(e) {
    e.preventDefault();
    fetch(`https://bula.vercel.app/pesquisar?nome=${remedio}&pagina=1`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data);
        setDrugs(data.content);
        setValid(true);
      });
  }

  function addCarrinho() {
    setCarrinho(carrinho + 1);
  }

  function removeCarrinho() {
    setCarrinho(carrinho - 1);
  }

  function deleteCarrinho() {
    setCarrinho(0);
  }

  function handleChange(e) {
    setRemedio(e.target.value);
  }

  return (
    <>
      <div className="pedido">
        <div className="carrinho">
          <h1>
            {" "}
            {carrinho} <BsCartCheck />
          </h1>
          <button onClick={deleteCarrinho}>
            <BsDashCircle />
          </button>
        </div>
        <form onSubmit={serachDrug}>
          <input
            type="text"
            name="remedio"
            placeholder="Pesquise o nome de um remedio"
            value={remedio}
            onChange={handleChange}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
        <div className="api">
          {valid ? (
            <>
              <p className="sub-info">
                Resultado da busca {remedio}: <br />
                Total {result.numberOfElements}
              </p>
              <div className="drugs">
                {drugs.map((item) => {
                  return (
                    <div className="drug" key={item.idProduto}>
                      <p>ID: {item.idProduto}</p>
                      <h1>{item.nomeProduto}</h1>
                      <div className="product-owner">
                        <p>Fabricante:</p>
                        <p>{item.razaoSocial}</p>
                        <p>CNPJ: {item.cnpj}</p>
                      </div>
                      <div className="buttons">
                        <button className="add" onClick={addCarrinho}>
                          Adicionar a lista
                        </button>
                        <button className="remove" onClick={removeCarrinho}>
                          Remover da lista
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <img className="img-initial" src={img} alt=""/>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Pedido;