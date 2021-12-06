import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';


class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;
    store.subscribe(()=>{
      console.log('Updated');
      this.forceUpdate();
    })
    //API Call
    //Dispatch Action
    store.dispatch({
      type : 'ADD_MOVIES',
      movies : data
    })

    console.log(this.props.store.getState())
  }
  render(){
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourites</div>
          </div>
          <div>
            {movies.map((movie)=>{
              return <MovieCard movie = {movie} key={movie.imdbID}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
