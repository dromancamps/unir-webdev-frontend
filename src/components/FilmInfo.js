import React from "react";
import "./filmInfo.css";
import { Image } from "./Image";

export const FilmInfo = ({ film, details }) => {

    const title = details ? <h1 className="title">{film.title}</h1> : <h3 className="title">{film.title}</h3>;
    const sinopsis = details ? <p className="textField">{film.sinopsis}</p> : null;

    return (
        <div className="filmDetails">
            <Image src={film.image} alt={film.title} />
            {title}
            <div className={details ? "infoRow" : ""}>
                <p className="textField">{film.year} - {film.duration}</p>
                <p className="textField">{film.genres !== undefined ? film.genres.join(", ") : undefined}</p>
            </div>
            {sinopsis}
            <p className="textField"><b>Director: </b> {film.director}</p>
            <p className="textField"><b>Cast: </b>{film.genres !== undefined ? film.cast.join(", ") : undefined}</p>
        </div>
    );
}; 