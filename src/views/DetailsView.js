import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useUpdateRentedFilms } from "../hooks/useUpdateRentedFilms";
import { useCheckIfRentedFilm } from "../hooks/useCheckIfRentedFilm";
import { useFetchFilmById } from "../hooks/useFetchFilmById";
import "./detailsView.css"

export const DetailsView = () => {

    const params = useParams();
    const navigate = useNavigate();

    const film = useFetchFilmById(params.id);

    const [rented, setRented] = useState(null);
    const [buttons, setButtons] = useState(undefined);

    const initialRented = useCheckIfRentedFilm(params.id);

    const result = useUpdateRentedFilms(rented, params.id);

    useEffect(() => {

        if (result === true || (result === null && initialRented)) {
            setButtons(
                <div>
                    <button className="button" onClick={() => navigate("/" + params.id + "/watch")} >
                    Watch movie
                    </button>
                    <button className="button" onClick={() => setRented(false)} >
                    Cancel rental
                    </button>
                </div>
            );
        } else if (result === false || (result === null && initialRented === false)) {
            setButtons(
                <div>
                    <button className="button" onClick={() => setRented(true)} >
                    Rent
                    </button>
                </div>
            );
        }

    }, [result, initialRented, navigate, params.id]);

    return (
        <div className="filmDetails">
            <img src={"/images/"+film.image} alt={film.title} className="filmImage" />
            <h1 className="title">{film.title}</h1>
            <div className="infoRow">
                <p className="textField">{film.year} - {film.duration}</p>
                <p className="textField">{film.genres !== undefined ? film.genres.join(", ") : undefined}</p>
            </div>
            <p className="textField">{film.sinopsis}</p>
            <p className="textField"><b>Director: </b>{film.director}</p>
            <p className="textField"><b>Cast: </b>{film.cast !== undefined ? film.cast.join(", ") : undefined}</p>
            <div className="buttonDiv">
                {buttons}
            </div>
        </div>
    );
};