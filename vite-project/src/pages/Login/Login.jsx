import style from './Login.module.css';

const Login = () => {
  return (
    <div className="container mt-3">
            <div className="row">
              <div className="col-11 col-md-6 offset-md-3 text-center mt-5 mb-5">
                  <h1>Entre para a conversa!</h1>
                  <form className="bg-dark p-4 rounded-3 shadow-lg">
                    <h3 className='text-light'>Login</h3>
                    <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-labe text-light">Email address</label>
                        <div className={style.Email}>
                          <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Digite o seu E-mail' aria-describedby="emailHelp" />
                          <i class="d-flex align-items-center bi bi-person-fill text-light"></i>
                        </div>
                    </div>
                    <div class="mb-3">
        
                        <label for="exampleInputPassword1" class="form-label text-light">Password</label> 
                          <input type="password" class="form-control" placeholder='Digite a sua senha' id="exampleInputPassword1" />
                          <i class="bi bi-key-fill text-light"></i>
                      
                    </div>
                    <div class="mb-3 form-check d-inline-flex text-light"> 
                        <input type="checkbox" class="form-check-input me-1" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Lembre de mim</label>
                          <br />
                      </div>
                      <br />
                          <a href="#" className="text-decoration-none">Esqueci minha senha</a>
                      <hr className='text-light'/>
                      <button type="submit" class="btn btn-primary">Entrar</button>
                      <p className='text-light'>Não tem conta? <a href="#" className="text-decoration-none">Registre-se</a></p>
                </form>
              </div>
          </div>
    </div>
  )
}

export { Login };