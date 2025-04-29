import { NavLink } from 'react-router-dom';

import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div>    
            <nav className={`navbar navbar-expand-lg  navbar-dark bg-dark fixed-top ${style.NavBar}`}>
                <div class="container-fluid">
                        <NavLink to="/" className="navbar-brand">
                        <a class="navbar-brand" className={style.Logo} >Navbar</a>
                        </NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                Home
                            </NavLink>
                                </li>
                            
                            <li class="nav-item">
                                <NavLink to="/Forum" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                    Forum        
                                </NavLink>
                            </li>
                                
                                <li class="nav-item">
                                <a class="nav-link">Sobre nós</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                Apenas um texto de NavBar
                            </span>
                        </div>
                </div>
            </nav>
        </div>    
    );
};

export { NavBar };    