import { useEffect, useState } from "react";

const Dashboard = () => {
  const [allData, setAllData] = useState()
  const [usuarioLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );
  const [userID, setUserID] = useState()
  const [estoque, setEstoque] = useState([]);
  const [novo, setNovo] = useState({ ...estoque,
    nome: '',
    qtd: ''
  })

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location = "/";
  };
  // Adicionar Novo Remedio
  const handleChange =(e)=>{
    setNovo({...novo, [e.target.name]:e.target.value});
  };

  // Adicionar Novo Remedio
  const handleSubmit =(e)=>{
    e.preventDefault();

    fetch(`http://localhost:5000/usuarios/${userID}`,{
      method:'post',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify(novo),
    }).then(()=>{
      window.location='/dashboard';
    });
  }

  useEffect(() => {
    fetch("http://localhost:5000/usuarios")
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
            setUserID(element.id)
            setAllData(element)
          }
        }
      });
  }, []);

  console.log(allData);
  return (
    <>
      <div>
        <p>
          {usuarioLogado != null ? `Cliente: ${usuarioLogado.usuario}` : ""}
        </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Adicionar Remedio
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Remedio</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div>
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
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
      </div>
      <div> 
          {estoque.map((r) => {
            return (
              <>
                <p key={r.nome}>{r.nome}</p>
              </>
            );
          })}
        </div>
    </>
  );
};

export default Dashboard;
