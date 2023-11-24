import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import logo from '../assets/Mt_Solution__3_-removebg-preview.png'
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
      <div className='nevegacao-container'>
        <nav className="navbar">
          <div className="container-fluid ">
            <div className="links-navbar ">
            <Link className="logo" to='/'><img src={logo} alt="" /></Link>
              <Link className="link-navbar" to="/">
                Home
              </Link>
              {usuarioLogado != null ? (
                <Link className="link-navbar" to="/dashboard">
                  Dashboard
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="botao d-flex">
              {usuarioLogado != null ? (
                <button
                  className="btn myButton"
                  onClick={handleLogout}
                >
                  <p className="myBtn-link">myBtn-link</p>
                </button>
              ) : (
                <button className="btn btn-primary myButton">
                  <Link className="myBtn-link" to="/login">Login</Link>
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navegacao;
