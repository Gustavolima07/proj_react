import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
    <footer className="bg-dark text-light py-4" style={{ position: "",bottom: 0,left: 0, width: "100%" }}>
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-6 col-lg-4">
              <h3 className="pt-3 fw-bold">TeachSphere</h3>
              <p>Um hub colaborativo para amantes de tecnologia</p>
              <p><a class="link-opacity-100 text-decoration-none" target="_blank" href="mailto:contato@techsphere.com">✉️Email: contato@techsphere.com</a></p>
            </div>

            <div className="col">
              <h4 className="pt-3">Menu</h4>
              <ul className="list-unstyled">
                <NavLink to="/" className="text-decoration-none text-light"> 
                  <li><a className="text-decoration-none text-light">Home</a></li>
                </NavLink>
                <NavLink to="/Forum" className="text-decoration-none text-light"> 
                  <li>Forum</li>
                </NavLink>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="pt-3">Conversas</h4>
              <ul className="list-unstyled">
                <li><a className="text-decoration-none text-light" href="">Desenvolvimento Web</a></li>
                <li><a className="text-decoration-none text-light" href="">Inteligência Artificial</a></li>
                <li><a className="text-decoration-none text-light" href="">Segurança da Informação</a></li>
                <li><a className="text-decoration-none text-light" href="">Carreira em TI</a></li>
              </ul>
            </div>
            <div className="col">
              <h4 className="pt-3">Nossas Redes Sociais</h4>
              <div>
                <a href="#" class="text-light fs-2 me-3"><i class="bi bi-facebook"></i></a>
                <a href="#" class="text-light fs-2 me-3"><i class="bi bi-pinterest"></i></a>
                <a href="#" class="text-light fs-2 me-3"><i class="bi bi-instagram"></i></a>
                <a href="#" class="text-light fs-2"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between container-fluid">
          <p>2025 © TechSphere. All Rights Reserved.</p>
          <div className="d-flex">
           <NavLink to="/Termos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <a className="text-decoration-none text-light me-4" href="">Termos de uso</a>
            </NavLink>
            <a className="text-decoration-none text-light" href="">Política de privacidade</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export { Footer };
  