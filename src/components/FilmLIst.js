import React, { useState, useEffect } from "react";
import { FilmResult } from "./FilmResult";
import "./filmList.css"

export const FilmList = ({ films }) => {

    const [filmsResult, setFilmsResult] = useState([]);

    useEffect(() => {
        setFilmsResult(films
            .map((f) => {
                return <FilmResult key={f.id} film={f} />
            })
       );
    }, [films])

    return (
        <div className="filmList">{filmsResult}</div>
    );
};