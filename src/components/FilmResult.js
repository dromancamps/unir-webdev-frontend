import React from "react";
import { useNavigate } from "react-router";
import "./filmResult.css"

export const FilmResult = ({ film }) => {

    const navigate = useNavigate();

    return (
        <div className="filmResult">
            <img src={"/images/"+film.image} alt={film.title} className="filmImage"/>
            <h3 className="title">{film.title}</h3>
            <p className="textField">{film.year + " - " + film.duration}</p>
            <p className="textField">{film.genres.join(", ")}</p>
            <p className="textField"><b>Director: </b> {film.director}</p>
            <p className="textField"><b>Cast: </b>{film.cast.join(", ")}</p>
            <div className="buttonDiv">
                <button className="button" onClick={() => navigate("/" + film.id + "/details")} >
                    Watch movie
                </button>
            </div>
        </div>
    );
};