import { useState } from 'react';

function Login() {
  //hooks
  const [usuarios, setUsuarios] = useState({
    usuario: '',
    senha: '',
  });
  // funções
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  
  const handleSubmit =async (e)=>{
    e.preventDefault();

    let user;
    try{
      const response =await fetch("  http://localhost:5000/usuarios");
      if(response.ok){
        const users = await response.json();

        //PERCORRENDO TODOS OS USUARIOS QUE ESTIVER NA LISTA DO JSON
        for (let i =0; i <users.length;i++){
          const use = users[i];
          user =use;
          //VALIDANDO OS DADOS
          if(use.usuario == usuarios.usuario && use.senha== usuarios.senha){
            user=use;
            break;
          }
        }

        if(user){
          sessionStorage.setItem('usuarioLogado',JSON.stringify(user));
          setTimeout(()=>{
            window.location ='/dashboard';
          },1000);

        }else{
        
            setTimeout(()=>{
              setUsuarios({
                usuario:"",
                senha:"",
              });
              window.location="/login";
            },1000);
        }
      }else{
        setUsuarios({
          usuario:"",
          senha:"",
        });
        window.location="/login";
      }
    }catch(error){
      console.log(error)
    }
    };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idUsuario">Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={usuarios.usuario}
            placeholder="Digite seu usuario"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="idSenha">Senha:</label>
          <input
            type="passoword"
            name="senha"
            value={usuarios.senha}
            placeholder="Digite sua senha"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Logar</button>
      </form>
    </>
  );
}

export default Login;
