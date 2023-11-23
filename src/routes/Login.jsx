import { useState } from "react";

const Login = () => {
  const [usuarios, setUsuarios] = useState({
    usuario: "",
    senha: "",
  });

  

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(" http://localhost:5001/usuarios")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (
            element.usuario == usuarios.usuario &&
            element.senha == usuarios.senha
          ) {
            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarios));
            setTimeout(() => {
              window.location = "/dashboard";
            }, 1000);
            break
          }
        }
      });
  };

  

  return (
    <>
      <div className="login-container">
        <div className="header">
          <h1>Login</h1>
          <p>apenas para hospitais cadastrados</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="usuario"
              value={usuarios.usuario}
              placeholder="Digite seu usuario"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="senha"
              value={usuarios.senha}
              placeholder="Digite sua senha"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
