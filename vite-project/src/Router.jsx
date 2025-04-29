import { Route, Routes } from "react-router-dom";

import { Inicial, Erro } from "./pages" 
import { LayoutPadrao } from "./layout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} />
                <Route path="*" element={<Erro />} />
            </Route>
        </Routes>
    );
};

export { Router };