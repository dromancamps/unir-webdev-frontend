import React from "react";
import "./image.css";

export const Image = ({ src, alt }) => {

    return (
        <img src={"/images/"+src} alt={alt} className="filmImage"/>
        );
};