import React from "react";

class MovieCard extends React.Component{

    render(){
        const { movie } =this.props;
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movie-poster' src={movie.Poster}/>
                </div>
                <div className='right'>
                    <div><h2>{movie.Title}</h2></div>
                    <div><p>{movie.Plot}</p></div>
                    <footer><button className='fav-btn'>Favourite</button></footer>
                </div>
            </div>
        )
    }
}

export default MovieCard;