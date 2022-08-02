import { useState, useCallback, useEffect } from 'react';

// import stl from './movies.module.css';
import SearchBar from './SearchBar';
import MoviesList from 'shared/components/MoviesList';

import { searchMovies } from '../../shared/api/movies';

function Movies() {
  const [movies, setMovies] = useState({
    items: [],
    isLoading: false,
    error: null,
  });

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        return;
      }
      setMovies(prevMovies => ({
        ...prevMovies,
        idLoading: true,
        error: null,
      }));

      try {
        const { results } = await searchMovies(query);
        setMovies(prevMovies => ({
          ...prevMovies,
          isLoading: false,
          items: results,
        }));
      } catch (error) {
        setMovies(prevMovies => ({
          ...prevMovies,
          isLoading: false,
          error,
        }));
      }
    };
    fetchMovies();
  }, [query]);

  const getQuery = useCallback(query => {
    setQuery(prevQuery => {
      if (!query.trim()) {
        alert('Поставлена мета повинна бути ретельно обдумана');
        return;
      }
      return query;
    });
  }, []);

  const { items, isLoading, error } = movies;
  return (
    <>
      <SearchBar onSubmit={getQuery} />
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {Boolean(items.length) && <MoviesList items={items} />}
    </>
  );
}

export default Movies;
