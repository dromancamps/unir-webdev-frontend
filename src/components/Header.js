import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/nesflis.png";
import "./header.css"
import "./button.css"


export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="header">
            <img src={Logo} alt="Nesflis Logo" className="logo"/>
            <button className="button" onClick={() => navigate("/rented")} >
                My movies
            </button>
        </div>
    );
};