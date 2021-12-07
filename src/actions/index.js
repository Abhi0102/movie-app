// Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const SHOW_SEARCH_RESULT ='SHOW_SEARCH_RESULT';




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


export function handleMovieSearch(movie){
    const url= `https://www.omdbapi.com/?apikey=ab338eff&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response =>response.json())
        .then((movie)=>
        dispatch(addMovieSearchResult(movie)))
    }
}

export function addMovieSearchResult(movie){
    return{
        type : ADD_SEARCH_RESULT,
        movie
    }
}

export function showSearch(showSearchResult){
    return{
        type : SHOW_SEARCH_RESULT,
        showSearchResult
    }
}