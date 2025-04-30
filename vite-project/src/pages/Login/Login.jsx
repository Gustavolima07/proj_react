import { useState } from 'react';
import style from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Email1] = useState("admin");
  const [Password1] = useState("admin123");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Enviando os seguintes dados: " + username + " - " + password);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === Email1 && password === Password1) {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos.");
    }
  };
  return (



    <div className="container mt-3">
            <div className="row">
              <div className="col-11 col-md-6 offset-md-3 text-center mt-5 mb-5">
                  <h1>Entre para a conversa!</h1>
                  <form onSubmit={handleSubmit} className="bg-dark p-4 rounded-3 shadow-lg">
                    <h3 className='text-light'>Login</h3>
                    <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-labe text-light">Email address</label>
                        <div className={style.Email}>
                          <input type="email" onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleInputEmail1" placeholder='Digite o seu E-mail' aria-describedby="emailHelp" />
                          <i class="d-flex align-items-center bi bi-person-fill text-light"></i>
                        </div>
                    </div>
                    <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label text-light">Password</label> 
                          <div className={style.Email}>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}  class="form-control" placeholder='Digite a sua senha' id="exampleInputPassword1" />
                            <i class=" d-flex bi bi-key-fill align-items-center text-light"></i>
                          </div>                      
                    </div>
                    <div class="mb-3 form-check d-inline-flex text-light"> 
                        <input type="checkbox" class="form-check-input me-1" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Lembre de mim</label>
                          <br />
                      </div>
                      <br />
                      <a href="#" className="text-decoration-none">Esqueci minha senha</a>
                      <hr className='text-light' />
                      <button onClick={handleLogin} type="submit" class="btn btn-primary">Entrar</button>
                      <p className='text-light'>Não tem conta? <a href="#" className="text-decoration-none">Registre-se</a></p>
                </form>
              </div>
          </div>
    </div>
  )
}

export { Login };