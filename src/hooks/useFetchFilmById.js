import { useEffect, useState } from 'react';

export const useFetchFilmById = (id) => {
    
    const [result, setResult] = useState({});
    
    useEffect(() => {

        const fetchFilmsData = async () => {
            const filmsData =  await fetch("/films.json").then((response) => response.json());
                        
            setResult(filmsData
                .find((f) => f.id === parseInt(id))    
            );
        }

        fetchFilmsData();

    }, [id]);

    return result;
}