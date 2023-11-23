import { useState } from "react";
import { BsSearch, BsCartCheck, BsDashCircle } from "react-icons/bs";

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
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Pedido;

// 'AMOXICILINA', expediente: '0772578231', razaoSocial: 'BRAINFARMA INDÚSTRIA QUÍMICA E FARMACÊUTICA S.A', …}cnpj: "05161069000110"data: "2023-07-25T16:00:26.000-0300"dataAtualizacao: "2023-11-22T18:00:27.000-0300"expediente: "0772578231"idBulaPacienteProtegido: "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMDQ5Njk3NiIsIm5iZiI6MTcwMDY5ODY4MywiZXhwIjoxNzAwNjk4OTgzfQ.1C74ZTIq0kVV9fnTycjr0O-jlkvVVPFDePZ7nBditJcfI5YMZFM7L9LaNYsWD8VMKTSIQpLKg9eMp5TgWfugzw"idBulaProfissionalProtegido: "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMDQ5Njk3NyIsIm5iZiI6MTcwMDY5ODY4MywiZXhwIjoxNzAwNjk4OTgzfQ.9XHewEAeaAanNxhOYD_z3dwlOHEAco-Y1LxKKUKVThk4GvmLdq0HoOrrsRbzRNuCTDbkpu4kyEq57KNqth5-qA"idProduto: 801733nomeProduto: "AMOXICILINA"numProcesso: "25351535160201175"numeroRegistro: "155840141"numeroTransacao: "7168512023"razaoSocial: "BRAINFARMA INDÚSTRIA QUÍMICA E FARMACÊUTICA S.A"[[Prototype]]: Object
