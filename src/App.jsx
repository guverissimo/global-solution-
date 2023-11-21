import {} from "react";
import Navegacao from "./components/Navegacao";
import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape";
import "./css/style.css";

function App() {
  return (
    <>
      <div className="app-container">
        <header className="navegacao" >
          <Navegacao />
        </header>
        <section className="principal">
          <Outlet  />
        </section>
        <div className="rodape" >
          <Rodape />
        </div>
      </div>
    </>
  );
}

export default App;
