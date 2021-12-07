import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';


class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;
    store.subscribe(()=>{
      this.forceUpdate();
      console.log(store.getState())
    })
    //API Call
    //Dispatch Action
    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie)=>{
        const { movies } =this.props.store.getState();
        const index = movies.favourites.indexOf(movie);
        if(index!==-1){
          return true;
        }
        else{
          return false;
        }
  }

  onChangeTab = (val) =>{
    this.props.store.dispatch(setShowFavourites(val));
  }

  render(){
    const {movies, search} =this.props.store.getState();
    const { list, favourites, showFavourites } = movies;

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch = {this.props.store.dispatch} search = {search} isFavourite = {this.isMovieFavourite(search.result)}/>
        <div>
          <div className='tabs'>
            <div className={`tab ${showFavourites ? 'tab-reg': 'tab-highlight'}`} onClick = {()=> this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'tab-highlight': 'tab-reg'}`} onClick = {()=> this.onChangeTab(true)}>Favourites</div>
          </div>
          <div>
            {displayMovies.map((movie)=>{
              return <MovieCard movie = {movie} 
              key={movie.imdbID} 
              dispatch = {this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}/>
            })}
          </div>
          {displayMovies.length === 0 ? <div className='no-movie'>No movies to show!!</div>: null}
        </div>
      </div>
    );
  }
}
export default App;
