import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/notnetflix.png";
import "./header.css"
import { Buttons } from "./Buttons";


export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const buttonDest = location.pathname === "/" ? [{
        label: "My movies",
        func: () => navigate("/rented")
    }] : [{
        label: "Browse movies",
        func: () => navigate("/")
    }];

    return (
        <div className="header">
            <img src={Logo} alt="Nesflis Logo" className="logo"/>
            <Buttons actions={buttonDest} />
        </div>
    );
};