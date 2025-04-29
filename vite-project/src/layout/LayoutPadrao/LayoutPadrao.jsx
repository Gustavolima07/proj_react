import { Outlet } from "react-router-dom";

import { NavBar, Footer, Conteudo } from "../../components";

const LayoutPadrao = () => {
    return (
        <>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            
            <main style={{ flex: 1 }}>
                <Conteudo>
                    <Outlet />
                </Conteudo>
            </main>

            <Footer />  
        </div>
        </>
    
    );
};

export { LayoutPadrao };
