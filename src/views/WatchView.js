import React from "react";
import { useParams } from "react-router";
import { useFetchFilmById } from "../hooks/useFetchFilmById";

export const WatchView = () => {

    const params = useParams();

    const film = useFetchFilmById(params.id);

    return (
        <div>
            <h1>{film.title}</h1>
            <iframe width="800" height="450" src={film.url} title="YouTube video player" frameBorder="0" allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
        </div>
    );
};