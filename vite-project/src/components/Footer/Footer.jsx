const Footer = () => {
    return (
    <footer className="bg-dark text-light py-4" style={{ position: "absolute", bottom: 0,left: 0, width: "100%" }}>
        <div className="container px-4">
          <div className="row">
            <div className="col-6 col-lg-4">
              <h3 className="pt-3 fw-bold">TeachSphere</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>123456789</p>
              <p>987654321</p>
            </div>
            <div className="col">
              <h4 className="pt-3">Menu</h4>
              <ul className="list-unstyled">
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
              </ul>
            </div>
            <div className="col">
              <h4 className="pt-3">More</h4>
              <ul className="list-unstyled">
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h4>Categories</h4>
              <ul className="list-unstyled">
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
                <li><a className="text-decoration-none text-light" href="">Link</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Social Media Icons</h4>
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
        <div className="d-flex justify-content-between container">
          <p>2025 © TechSphere. All Rights Reserved.</p>
          <div className="d-flex">
            <a className="text-decoration-none text-light me-4" href="">Termos de uso</a>
            <a className="text-decoration-none text-light" href="">Política de privacidade</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export { Footer };
  