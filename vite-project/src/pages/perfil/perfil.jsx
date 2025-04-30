import { Cards } from '../../components/Cards';
const Perfil = () => { 
    return (
        <div className="container mt-3">
            <div className="row">   
                <div className="col-11 col-md-6 offset-md-3 text-center mt-5 mb-5">
                    <h1>Bem-vindo ao Perfil!</h1>
                    <p>Esta é a perfil inicial do nosso site.</p>
                </div>
            </div>
            <div className="row">
        <div className="col-12">
          <Cards />
        </div>
      </div>
        </div>
    );
};

export { Perfil };