import {} from "react";
import { Link } from "react-router-dom";

const Navegacao = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a> 
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div className="d-flex">
            <button className="btn btn-primary"><Link to='/login'>Login</Link></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navegacao;
