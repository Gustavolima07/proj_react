import styles from "../SlideBar/SlideBar.module.css";

const SlideBar = () => { 
    return (
        <aside style={{ fontSize: "1.2rem" }}>
                    <div className={styles.SlideBar}>	
                        <nav className="nav flex-column  p-3">
                            <a href="#" className="nav-link">
                                <span className="description">
                                <i class="bi bi-house">Página inical</i>
                                </span>
                            </a>

                            <a href="#" className="nav-link active">
                                <span className="icon">
                                    <i class="bi  bi-arrow-up-right-circle">Popular</i>
                                </span>
                            </a>
                            <a href="#" className="nav-link">
                                <span className="description">
                                <i class="bi bi-bell">Notificações</i>
                                </span>
                            </a>
                            
                    <a href="#" className="nav-link" data-bs-toggle="collapse"
                    data-bs-target="#sub-menu" aria-expanded="false" aria-controls="#sub-menu">
                                <span className="description"> 
                                <i class="bi bi-people"></i>
                                </span>
                                <span className="description">Grupos <i className="bi bi-caret-down"></i></span>
                            </a>
                            <hr />
                            <div className="sub-menu collapse" id="sub-menu">
                                <a href="#" className="nav-link">
                                    <span className="icon">
                                        <i class="bi bi-browser-chrome"></i>
                            </span>
                            <span className="description">Desenvolvimento Web</span>
                                </a>
                                
                                <a href="#" className="nav-link">
                                    <span className="icon">
                                        <i class="bi bi-robot"></i>
                            </span>
                            <span className="description">IA</span>
                                </a>
                                
                                <a href="#" className="nav-link">
                                    <span className="icon">
                                        <i class="bi bi-bricks"></i>
                            </span>
                            <span className="description">Segurança da Informação</span>
                                </a>
                                
                                <a href="#" className="nav-link">
                                    <span className="icon">
                                        <i class="bi bi-person-workspace"></i>
                            </span>
                            <span className="description">Dicas de carreira</span>
                                </a>
                                
                            </div>
                            
                        </nav>
                    </div>
            </aside>
        

    );
};

export { SlideBar };