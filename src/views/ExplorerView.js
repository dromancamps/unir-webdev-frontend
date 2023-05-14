import React, { useState, useEffect } from "react";
import { FilmResult } from "../components/FilmResult";
import { useFetchFilmsByName } from "../hooks/useFetchFilmsByName";
import "./resultList.css"
import "./explorerView.css"

export const ExplorerView = () => {

    const [search, setSearch] = useState("");
    const [filmsResult, setFilmsResult] = useState([]);

    const result = useFetchFilmsByName(search);

    useEffect(() => {
        setFilmsResult(result
            .map((f) => {
                return <FilmResult key={f.id} film={f} />
            })
       );
    }, [result])

    return (
        <div>
        <input type="text" className="searchBar" placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
        <div className="filmList">{filmsResult}</div>
        </div>
    );
};