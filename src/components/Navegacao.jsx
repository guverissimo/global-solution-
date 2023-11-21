import {useState} from "react";
import { Link } from "react-router-dom";

const Navegacao = () => {

  const [usuarioLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );
  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location = "/";
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a> 
          <div>
            <Link className="link-navbar" to='/'>Home</Link>
            {usuarioLogado !=null ? <Link className="link-navbar" to='/dashboard'>Dashboard</Link> : ""}
          </div>
          <div className="d-flex">
            {usuarioLogado != null ? (<button className="btn btn-primary bg-dark" onClick={handleLogout}>Logout</button>
  ) : <button className="btn btn-primary bg-dark"><Link to='/login'>Login</Link></button>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navegacao;
