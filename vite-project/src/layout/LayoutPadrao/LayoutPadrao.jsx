import { Outlet } from "react-router-dom";

import { NavBar } from "../../components";

const LayoutPadrao = () => {
    return (
        <>
            <div>
                <NavBar />
                <Outlet />
            </div>
        </>
    );
};

export { LayoutPadrao };