import { NavLink } from 'react-router-dom';
import { isLogado, Usuario,getUsarioLogado } from '../../context/Usuario';
import style from './NavBar.module.css';


const NavBar = () => {
    if(isLogado()){
        const data=JSON.parse(localStorage.getItem("usuario"));
        const usuario = new Usuario(
            data.nome, data.senha, data.email, data.id,true
        );
    
    }
 return (
    <div className="container-fluid">
        <div className="row">
        <div>    
            <nav className={`navbar navbar-expand-lg fixed-top ${style.NavBar}`}>
                <div class="container-fluid d-flex justify-content-between gap-3 align-items-center"> 
                        <NavLink to={isLogado() ? "/" : "/"} className="navbar-brand">
                            <span className="text-light">TechSphere <i class="bi bi-chat-dots"></i></span>
                        </NavLink>
                        <button class="navbar-toggler mx-4 border-secondary" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar "><i class="bi bi-list fs-3"></i></span>
                        </button>
                    
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                Página Inicial
                            </NavLink>
                                </li>
                            
                            <li class="nav-item">
                                <NavLink to="/Forum" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                    Fórum        
                                </NavLink>
                            </li>
                                
                            <li class="nav-item">
                            <NavLink to="/Sobre_nós" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                    Sobre nós        
                                </NavLink>
                            </li>
                        
                            </ul>

                        <div className="d-flex gap-3 align-items-center justify-content-center text-align-center">
                            <p style={{display: "contents"}} name="navNome">{getUsarioLogado()}</p> 
                            <NavLink to={getUsarioLogado() ? "/Perfil" : "/Login"} className="text-decoration-none text-light fs-2">
                                <i class="bi bi-person-circle"></i>
                            </NavLink>
                        </div>
                    </div>
                    </div>
                     </nav>
                </div>
             </div> 
         </div>
    )};

export { NavBar }; 