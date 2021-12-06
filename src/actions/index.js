// Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';



// Action Creators
export function addMovies(movies){
    return{
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return{
        type : ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie){
    return{
        type : REMOVE_FROM_FAVOURITE,
        movie
    }
}


export function setShowFavourites(showFavourites){
    return{
        type : SHOW_FAVOURITES,
        showFavourites
    }
}