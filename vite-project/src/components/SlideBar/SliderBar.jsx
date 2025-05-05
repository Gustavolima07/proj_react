import { useState } from "react";

import { NavLink } from "react-router-dom";
import styles from "../SlideBar/SlideBar.module.css";

const SlideBar = () => {
    const [MenuMobible, setMenuMobible] = useState(false);
    
    return (
        <aside style={{ fontSize: "1.2rem" }}>
            <button 
                className={`${styles.mobileToggleButton} d-lg-none`}
                onClick={() => setMenuMobible(!MenuMobible)}
            >
                <i className="bi bi-arrow-bar-right"></i>
            </button>

            <div className={`${styles.SlideBar} ${MenuMobible ? styles.mobileOpen : ''}`}>
                <nav className="nav flex-column p-3">
                    <a href="#" className="nav-link">
                        <span className="icon"><i className="bi bi-house"></i></span>
                        <span className="description">Página inicial</span>
                    </a>

                    <NavLink to="/Forum" className="nav-link">
                        <span className="icon"><i className="bi bi-arrow-up-right-circle"></i></span>
                        <span className="description">Conversas</span>
                    </NavLink>

                    <NavLink to="/Login" className="nav-link">
                        <span className="icon"><i className="bi bi-arrow-up-right-circle"></i></span>
                        <span className="description">Notificações</span>
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
};

export { SlideBar };