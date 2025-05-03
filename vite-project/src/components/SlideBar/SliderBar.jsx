import { useState } from "react";
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

                    <a href="#" className="nav-link active">
                        <span className="icon"><i className="bi bi-arrow-up-right-circle"></i></span>
                        <span className="description">Popular</span>
                    </a>

                    <a href="#" className="nav-link">
                        <span className="icon"><i className="bi bi-bell"></i></span>
                        <span className="description">Notificações</span>
                    </a>

                    <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#sub-menu"
                        aria-expanded="false"
                        aria-controls="sub-menu"
                    >
                        <span className="icon"><i className="bi bi-people"></i></span>
                        <span className="description">Grupos <i className="bi bi-caret-down"></i></span>
                    </a>

                    <hr />

                    <div className="sub-menu collapse" id="sub-menu">
                        <a href="#" className="nav-link">
                            <span className="icon"><i className="bi bi-browser-chrome"></i></span>
                            <span className="description">Desenvolvimento Web</span>
                        </a>

                        <a href="#" className="nav-link">
                            <span className="icon"><i className="bi bi-robot"></i></span>
                            <span className="description">IA</span>
                        </a>

                        <a href="#" className="nav-link">
                            <span className="icon"><i className="bi bi-bricks"></i></span>
                            <span className="description">Segurança da Informação</span>
                        </a>

                        <a href="#" className="nav-link">
                            <span className="icon"><i className="bi bi-person-workspace"></i></span>
                            <span className="description">Dicas de carreira</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export { SlideBar };