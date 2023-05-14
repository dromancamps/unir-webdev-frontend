import { useEffect, useState } from 'react';

export const useFetchFilmsByName = (search) => {
    
    const [result, setResult] = useState([]);

    useEffect(() => {

        const fetchFilmsData = async () => {
            const filmsData =  await fetch("/films.json").then((response) => response.json());
                        
            setResult(filmsData
                .filter((f) => {
                    return f.title.toLowerCase().includes(search.toLowerCase())
                })        
            );
        }

        fetchFilmsData();

    }, [search]);

    return result;
}