import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [], //array
    addFavorites: (id) => {},
    removeFavorites: (id) => {},
}); //initial value passed in createContext(empty array and 2 functions) 

function FavoritesContextProvider({children}){

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds( (current) => [...current, id] );
        //setFavoriteMealIds will recieve current Ids and return a function that add the given id into favoriteMealIds
    }

    function removeFavorite(id) {
        setFavoriteMealIds( (current) => current.filter((mealId) => mealId !== id ));
        /*  setFavoriteMealIds will recieve current Ids and return a function that filters out the given id as
            it will iterate over each object in current and filter out where current.mealId is NOT equal to id passed in 
            boolean: (FALSE)
        */
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;