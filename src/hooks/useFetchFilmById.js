import { useEffect, useState } from 'react';

export const useFetchFilmById = (id) => {
    
    const [result, setResult] = useState({});
    
    console.log("ok")
    useEffect(() => {

        console.log("never");
        
        const fetchFilmsData = async () => {
            const filmsData =  await fetch("/films.json").then((response) => response.json());

            console.log("aaaa");
                        
            setResult(filmsData
                .find((f) => f.id === parseInt(id))    
            );
        }

        fetchFilmsData();

    }, [id]);

    return result;
}