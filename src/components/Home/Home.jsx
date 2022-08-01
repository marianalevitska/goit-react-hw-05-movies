import { useState, useEffect } from 'react';

import { getPopularMovies } from '../../shared/api/movies';
import stl from './home.module.css';
import MoviesList from 'shared/components/MoviesList';

function Home() {
  const [movies, setMovies] = useState({
    items: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPopularMovie = async () => {
      setMovies(prevMovies => ({
        ...prevMovies,
        isLoading: true,
        error: null,
      }));

      try {
        const { result } = await getPopularMovies();
        setMovies(prevMovies => ({
          ...prevMovies,
          isLoading: false,
          items: result,
        }));
      } catch (error) {
        setMovies(prevMovies => ({
          ...prevMovies,
          isLoading: false,
          error,
        }));
      }
    };
    fetchPopularMovie();
  }, []);

  const { items, isLoading, error } = movies;
  return (
    <div>
      {Boolean(items.length) && <MoviesList items={items} />}
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
}
export default Home;
