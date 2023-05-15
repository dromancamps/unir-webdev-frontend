import React, { useState } from "react";
import { useFetchFilmsByName } from "../hooks/useFetchFilmsByName";
import { FilmList } from "../components/FilmList";
import { SearchBar } from "../components/SearchBar";

export const ExplorerView = () => {

    const [search, setSearch] = useState("");

    const result = useFetchFilmsByName(search);

    return (
        <div>
        <SearchBar setSearch={setSearch} />
        <FilmList films={result} />
        </div>
    );
};