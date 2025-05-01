const SlideBar = () => { 
    return (
        <aside className="d-flex  mt-5">
                    <div className="sidebar">
                        <nav className="nav flex-column">
                            <a href="#" className="nav-link">
                                <span className="icon">
                                    <i class="bi bi-columns-gap">Dashboard</i>
                                </span>
                            </a>
                            <a href="#" className="nav-link">
                                <span className="description">
                                <i class="bi bi-bag">Product</i>
                                </span>
                            </a>

                            <a href="#" className="nav-link">
                                <span className="description">
                                <i class="bi bi-bell">Notificações</i>
                                </span>
                            </a>
                            <a href="#" className="nav-link" data-bs-toggle="collapse" data-bs-target="#sub-menu">
                                <span className="description">
                                <i class="bi bi-person"></i>
                                </span>
                                <span className="description">Login <i className="bi bi-caret-down"></i></span>
                            </a>

                            <div className="sub-menu collapse" id="sub-menu">
                                <a href="#" className="nav-link">
                                    <span className="icon">
                                        <i class="bi bi-person-plus"></i>
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
            </aside>
        

    );
};

export { SlideBar };