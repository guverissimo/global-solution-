import {} from "react";
import Navegacao from "./components/Navegacao";
import { Outlet } from "react-router-dom";
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
      </div>
    </>
  );
}

export default App;
