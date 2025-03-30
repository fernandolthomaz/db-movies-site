import {useEffect, useState} from 'react'
import Search from './components/Search.jsx'

// API - Interface de Programação de Aplicações (Application Programming Interface)
// É um conjunto de regras e definições que permite que diferentes softwares se comuniquem entre si.
// Neste projeto, usamos a API do TMDB (The Movie Database) para buscar informações sobre filmes.

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS  ={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response  =  await fetch(endpoint,  API_OPTIONS);

      if(!response.ok) {
        throw  new Error('Error fetching movies');
      }

      const data = await response.json();

      //if (data.Response ===  'False') {
      //  setErrorMessage(data.Error || 'Failed to fetch movies');
      //  setMovieList([]);
      //  return;
      //}

      setMovieList(data.results || []);
    }  catch (error) {
      console.error('Error fetching movies: ', error);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <section className= 'all-movies'>
          <h2>All Movies</h2>

          {isLoading ? (
            <p className= 'text-white'>Loading...</p>
          ) : errorMessage ? (
            <p className = 'text-red-500'>{errorMessage}</p>
          ) : (
            <ul className="movies-grid">
              {movieList.map((movie) => (
                <li key={movie.id} className="movie-card">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title}
                  />
                  <h3 className="text-white">{movie.title}</h3>
                  <p className="text-white">{movie.release_date}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App