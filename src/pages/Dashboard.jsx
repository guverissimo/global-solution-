import { useEffect, useState } from "react";

const Dashboard = () => {
  const [usuarioLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );

  const [estoque, setEstoque] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location = "/";
  };

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
          }
        }
      });
  }, []);

  console.log(estoque);
  for (let index = 0; index < estoque.length; index++) {
    const element = estoque[index];
    console.log(element);
  }

  return (
    <>
      <div>
        <p>
          {usuarioLogado != null ? `Cliente: ${usuarioLogado.usuario}` : ""}
        </p>
        <button onClick={handleLogout}>Logout</button>
        <div>
          {estoque.map((r) => {
            return (
              <>
                <div key={r.nome}>
                  <p>{r.nome}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
