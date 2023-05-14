import { useEffect, useState } from 'react';

export const useUpdateRentedFilms = (rented, id) => {
    
    const [result, setResult] = useState(null);

        useEffect(() => {

            const localItems = localStorage.getItem("rentedFilms");
            const localRented = localItems !== null ? localItems.split(',') : [];
            
            if (rented === true) {
                localRented.push(id);
                localStorage.setItem("rentedFilms", localRented);
        
            } else if (rented === false) {
                localStorage.setItem("rentedFilms", 
                    localRented.filter((i) => i !== id)
                );
            }

            setResult(rented);

        }, [rented, id]);

    return result;
}