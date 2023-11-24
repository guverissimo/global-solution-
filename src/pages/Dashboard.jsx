import { useEffect, useState } from "react";

const Dashboard = () => {
  const [allData, setAllData] = useState();
  const [usuarioLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );
  const [userID, setUserID] = useState();
  const [estoque, setEstoque] = useState([]);
  const [novo, setNovo] = useState({
    nome: "",
    razaoSocial: "",
    cnpj: "",
    qtd: "",
  });
  // Adicionar Novo Remedio
  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const goToPedido = () => {
    window.location = "/pedido"
  }

  // Adicionar Novo Remedio
  const handleSubmit = (e) => {
    e.preventDefault();
    estoque.push(novo);
    fetch(`http://localhost:5001/usuarios`, {
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

  return (
    <div className="dashboard-container">
      <div className="modal-button">
        <button
          type="button "
          className="btn btn-primary open-modal-button"
          onClick={goToPedido}
        >
          Fazer pedido
        </button>
      </div>
      
      <div className="remedios-section">
        {estoque.map((r) => {
          return (
            <div key={r.nome} className="card-remedio">
              <h1>{r.nome}</h1>
              <h3>{r.razaoSocial}</h3>
              <h3>{r.cnpj}</h3>
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
