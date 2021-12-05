import '../App.css';
import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
        </div>
        <div>
          {data.map((movie)=>{
            return <MovieCard movie = {movie} key={movie.imdbID}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
