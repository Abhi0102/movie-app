import { ADD_MOVIES, ADD_SEARCH_RESULT, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SHOW_FAVOURITES, SHOW_SEARCH_RESULT } from "../actions";
import { combineReducers } from "redux";
const initialMoviesState = {
    list : [],
    favourites: [],
    showFavourites : false
}
export function movies(state = initialMoviesState, action){
    // if(action.type === ADD_MOVIES){
    //     return  {
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list : action.movies
            }

        case ADD_TO_FAVOURITE:
            return{
                ...state,
                favourites : [action.movie, ...state.favourites]
            }

        case REMOVE_FROM_FAVOURITE:
            const filteredMovies = state.favourites.filter(
                (movie) => movie.Title !== action.movie.Title
            )
            return{
                ...state,
                favourites : filteredMovies

            }
        case SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: action.showFavourites
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result :{},
    showSearchResult : false
}

export function search(state = initialSearchState, action ){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result : action.movie,
                showSearchResult : true
            }

        case SHOW_SEARCH_RESULT:
            return{
                ...state,
                showSearchResult : false
            }
        default:
            return state;
    }
}

// const initialRootState ={
//     movies: initialMoviesState,
//     search: initialSearchState
// }
// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
})