import React from "react";
import '../Test.css';
import { Outlet, Link } from "react-router-dom";
import Background from "../components/Background";

const Layout = () => {
    return (
        <>
            <Background />
            <Outlet />
        </>
    );
};

export default Layout;