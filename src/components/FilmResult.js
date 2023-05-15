import React from "react";
import { useNavigate } from "react-router";
import "./filmResult.css"
import { Buttons } from "./Buttons";
import { FilmInfo } from "./FilmInfo";

export const FilmResult = ({ film }) => {

    const navigate = useNavigate();

    const buttonsAction = [{
        label: "Watch movie",
        func: () => navigate("/" + film.id + "/details")
    }]

    return (
        <div className="filmResult">
            <FilmInfo film={film} details={false} />
            <Buttons actions={buttonsAction} />
        </div>
    );
};