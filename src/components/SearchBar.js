import React from "react";
import "./searchBar.css";

export const SearchBar = ({ setSearch }) => {

    return (
        <input type="text" className="searchBar" placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
    );
};