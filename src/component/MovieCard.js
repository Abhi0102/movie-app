import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component{

    handleFavouriteClick = () =>{
        const { movie } = this.props;
        this.props.dispatch (addFavourite(movie)); 
    }

    handleRemoveFavouriteClick = () =>{
        const { movie } =this.props;
        this.props.dispatch(removeFavourite(movie));
    }

    render(){
        const { movie, isFavourite } =this.props;
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movie-poster' src={movie.Poster}/>
                </div>
                <div className='right'>
                    <div><h2>{movie.Title}</h2></div>
                    <div><p>{movie.Plot}</p></div>
                    <footer>
                        {isFavourite ?
                        <button className='btn un-fav-btn' onClick={this.handleRemoveFavouriteClick}>Remove favourite</button>
                    : <button className='btn fav-btn' onClick={this.handleFavouriteClick}>Add to Favourite</button>}
                        {/* <button className='fav-btn' onClick={this.handleFavouriteClick}>Favourite</button> */}
                        </footer>
                </div>
            </div>
        )
    }
}

export default MovieCard;