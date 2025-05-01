import { Route, Routes } from "react-router-dom";

import { Inicial, Erro, Forum, Perfil, Termos, Login, Registro } from "./pages" 
import { LayoutPadrao } from "./layout";

const Router = () => {
    return (  
            <Routes>
                <Route path="/" element={<LayoutPadrao />}>
                    <Route path="/" element={<Inicial />} />
                    <Route path="/Forum" element={<Forum />} />
                    <Route path="/Perfil" element={<Perfil />} />
                    <Route path="/Termos" element={<Termos />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Registro" element={<Registro />} />
                    <Route path="*" element={<Erro />} />
                </Route>
        </Routes>
    );
};

export { Router };