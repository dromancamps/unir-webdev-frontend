import { useEffect, useState } from 'react';

export const useCheckIfRentedFilm = (id) => {
    
    const [result, setResult] = useState(undefined);

    useEffect(() => {

        const fetchFilmsData = async () => {

            const localItems = localStorage.getItem("rentedFilms");
            const rentedIds = localItems !== null ? localItems.split(',').map(Number) : [];
                            
            setResult(rentedIds.includes(parseInt(id)));
        }

        fetchFilmsData();

    }, [id]);    

    return result;
}