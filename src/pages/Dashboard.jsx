import { useState } from "react";

const Dashboard = () => {
  const [usuarioLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.reload();
  };

  return (
    <>
      <div>
        <p>
          {usuarioLogado != null ? `Cliente: ${usuarioLogado.usuario}` : ""}
        </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      
    </>
  );
};

export default Dashboard;
