import React from "react";
import "./buttons.css"

export const Buttons = ({ actions }) => {

    const buttons = actions !== undefined ? actions.map((a) => {
        return <button key={a.label} className="button" onClick={a.func} >
        {a.label}
        </button>
    }) : [];

    return (
        <div className="buttonDiv">
            {buttons}
        </div>
    );
};