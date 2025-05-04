import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';


const NavBar = () => {
    console.log(localStorage.getItem("usuario"));
 return (
    <div className="container-fluid">
        <div className="row">
        <div>    
            <nav className={`navbar navbar-expand-lg fixed-top ${style.NavBar}`}>
                <div class="container-fluid">
                        <NavLink to="/" className="navbar-brand">
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

                            <li className="nav-item">
                             <NavLink onClick={
                                () => {
                                    if(localStorage.getItem("usuario") === null){
                                        window.location.href = "/Login"
                                    }
                                    else{
                                        window.location.href = "/Perfil"
                                    }
                                }
                             }  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                    Perfil
                             </NavLink>
                             </li>
            
                            <div class="form-group has-search d-flex justify-content-center" style={{alignItems: "center"}}>
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                                <a className="text-decoration-none text-light fs-2 mx-3 me-5" href="#"><i class="bi bi-search"></i></a>
                            </div>
                        
                            </ul>

                        <div className="d-flex gap-3 align-items-center justify-content-center">
                            <p> {}</p> 
                                <NavLink to="/Login">
                                     <span className="text-decoration-none text-light fs-2 me-3"><i class="bi bi-person-circle"></i></span>
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