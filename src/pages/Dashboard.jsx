import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  let {id} = useParams()

  const [allData, setAllData] = useState();
  const [usuarioLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );
  const [userID, setUserID] = useState();
  const [estoque, setEstoque] = useState([]);
  const [novo, setNovo] = useState( {
    nome: '',
    razaoSocial: "",
    cnpj: '',
    qtd: ''
  });
  // Adicionar Novo Remedio
  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  // Adicionar Novo Remedio
  const handleSubmit = (e) => {
    e.preventDefault();
    estoque.push(novo)
    console.log(allData)
    fetch(`http://localhost:5001/usuarios/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    }).then(() => {
      console.log("Feito");
      // console.log(allData)
    });
  };
// Effect para pegar o estoque
  useEffect(() => {
    fetch(`http://localhost:5001/usuarios`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          // console.log(element);
          if (element.usuario == usuarioLogado.usuario) {
            setEstoque(element.estoque.remedios);
            setUserID(element.id);
            setAllData(element);
          }
        }
      });
  }, [userID]);

  const teste = () => {
    console.log(userID);
  }

  

  return (
      <div className="dashboard-container">
        <div className="modal-button">
          <button
            type="button"
            className="btn btn-primary open-modal-button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Adicionar Remedio
          </button>
          <button onClick={teste}>teste</button>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Adicionar Remedio
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="razaoSocial"
                        value={novo.razaoSocial}
                        placeholder="Nome do Fabricante"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="cnpj"
                        value={novo.cnpj}
                        placeholder="CNPJ do fabricante"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="nome"
                        value={novo.nome}
                        placeholder="Nome do medicamento"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="qtd"
                        value={novo.qtd}
                        placeholder="Quantidade do medicamento"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Adicionar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="remedios-section">
          {estoque.map((r) => {
            return (
              <div key={r.nome} className="card-remedio">
                <h1 >{r.nome}</h1>
                <h3>{r.razaoSocial}</h3>
                <h3 >{r.cnpj}</h3>
                <div className="card-quantidade">
                  <p>Quantidade no estoque</p>
                  <h1>{r.qtd}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Dashboard;
