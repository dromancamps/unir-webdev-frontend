import React, { useState, useEffect } from "react";
import { FilmResult } from "../components/FilmResult";
import { useFetchRentedFilms } from "../hooks/useFetchRentedFilms";
import "./resultList.css"

export const RentedView = () => {

    const [rentedFilms, setRentedFilms] = useState([]);

    const result = useFetchRentedFilms();

    useEffect(() => {
        setRentedFilms(result
            .map((f) => {
                return <FilmResult key={f.id} film={f} />
            })
       );
    }, [result])

    return (
        <div className="filmList">
            {rentedFilms}
        </div>
    );};