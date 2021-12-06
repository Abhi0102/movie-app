import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';


class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    })
    //API Call
    //Dispatch Action
    store.dispatch(addMovies(data));
  }
  render(){
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourites</div>
          </div>
          <div>
            {list.map((movie)=>{
              return <MovieCard movie = {movie} key={movie.imdbID}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
