import React from "react";
import { useFetchRentedFilms } from "../hooks/useFetchRentedFilms";
import { FilmList } from "../components/FilmList";
//import "./resultList.css"

export const RentedView = () => {

    const result = useFetchRentedFilms();

    return (
        <FilmList films={result} />
    );};