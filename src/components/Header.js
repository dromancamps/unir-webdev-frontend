import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/nesflis.png";
import "./header.css"
import "./button.css"


export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const buttonDest = location.pathname === "/" ? {
        label: "My movies",
        path: "/rented"
    } : {
        label: "Browse movies",
        path: "/"
    };

    return (
        <div className="header">
            <img src={Logo} alt="Nesflis Logo" className="logo"/>
            <button className="button" onClick={() => navigate(buttonDest.path)} >
            {buttonDest.label}
            </button>
        </div>
    );
};