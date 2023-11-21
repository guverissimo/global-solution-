import {} from "react";
import Navegacao from "./components/Navegacao";
import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <div className="app-container">
        <Navegacao className="navegacao" />
        <Outlet className="main" />
        <Rodape className="footer" />
      </div>
    </>
  );
}

export default App;
