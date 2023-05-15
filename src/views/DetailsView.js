import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useUpdateRentedFilms } from "../hooks/useUpdateRentedFilms";
import { useCheckIfRentedFilm } from "../hooks/useCheckIfRentedFilm";
import { useFetchFilmById } from "../hooks/useFetchFilmById";
import { Buttons } from "../components/Buttons";
import { FilmInfo } from "../components/FilmInfo";

export const DetailsView = () => {

    const params = useParams();
    const navigate = useNavigate();

    const film = useFetchFilmById(params.id);

    const [rented, setRented] = useState(null);
    const [buttons, setButtons] = useState(undefined);

    const initialRented = useCheckIfRentedFilm(params.id);

    const result = useUpdateRentedFilms(rented, params.id);

    useEffect(() => {

        let buttonsAction = [];

        if (result === true || (result === null && initialRented)) {

            buttonsAction = [{
                label: "Watch movie",
                func: () => navigate("/" + params.id + "/watch")
            },{
                label: "Cancel rental",
                func: () => setRented(false)
            }];

        } else if (result === false || (result === null && initialRented === false)) {
            
            buttonsAction = [{
                label: "Rent",
                func: () => setRented(true)
            }];
        }

        setButtons(<Buttons actions={buttonsAction} />);

    }, [result, initialRented, navigate, params.id]);

    return (
        <div>
            <FilmInfo film={film} details={true} />
            {buttons}
        </div>
    );
};