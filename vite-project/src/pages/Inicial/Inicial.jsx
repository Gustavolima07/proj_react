import { SlideBar, CriarPost, ListaPosts} from "../../components";

const Inicial = () => { 
    return (
        <div className="container-fluid d-flex w-100 mt-5">
            <SlideBar />

            <div className="container mt-5 flex-grow-1"> 
                <div className="row d-flex justify-content-center">
                    <h1>Página Inicial</h1>
                    <CriarPost />
                    <ListaPosts />
 
            
                </div>
            </div>
        </div>
    );
};

export { Inicial };