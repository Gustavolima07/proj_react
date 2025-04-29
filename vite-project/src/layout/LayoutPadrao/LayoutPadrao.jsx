import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../../components";

const LayoutPadrao = () => {
    return (
        <>
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
                <Outlet />
        </div>
            <Footer />
        </>
    
    );
};

export { LayoutPadrao };
