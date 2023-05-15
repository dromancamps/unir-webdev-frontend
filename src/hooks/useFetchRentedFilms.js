import { useEffect, useState } from 'react';

export const useFetchRentedFilms = () => {
    
    const [result, setResult] = useState([]);

    useEffect(() => {

        const fetchFilmsData = async () => {

            const localItems = localStorage.getItem("rentedFilms");
            const rentedIds = localItems? localItems.split(',').map(Number) : [];
    
            const filmsData =  await fetch("/films.json").then((response) => response.json());
                        
            setResult(rentedIds
                .map((id) => filmsData.find((f) => f.id === id))        
            );
        }

        fetchFilmsData();

    }, []);    

    return result;
}