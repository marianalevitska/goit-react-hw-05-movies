import { useState, useEffect } from 'react';

import stl from './filmInfo.module.css';
import { getMovieDetails } from '../../shared/api/movies';

function FilmInfo({ id }) {
  const [movie, setMovie] = useState({
    film: {},
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchFilmDetails = async () => {
      setMovie(prevMovie => ({
        ...prevMovie,
        isLoading: true,
        error: null,
      }));

      try {
        const result = await getMovieDetails(id);
        const genreName = result.genres.map(genre => genre.name);

        setMovie(prevMovie => ({
          ...prevMovie,
          isLoading: false,
          film: { ...result, genreName },
        }));
      } catch (error) {
        setMovie(prevMovie => ({
          ...prevMovie,
          isLoading: false,
          error,
        }));
      }
    };
    fetchFilmDetails();
  }, [id]);
  const { isLoading, error, film } = movie;
  const {
    vote_average,
    original_title,
    poster_path,
    original_name,
    genreName,
    overview,
  } = film;

  const title = original_title || original_name;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpNntacA2XFNowRfDYxO1cZOVaeSYe9ozWzpVdxdQ5T41dKiJScEvBOibqiU3KtZvNTk&usqp=CAU';

  const isInSet = Boolean(Object.values(film).length > 0);

  return (
    <div>
      {isInSet && (
        <div className={stl.info}>
          <h2 className={stl.title}>{title}</h2>
          <img src={image} alt={title} className={stl.img} />
          <p className={stl.text}>User score: {vote_average}</p>
          <h3 className={stl.chpt}>Overview</h3>
          <p className={stl.text}>{overview}</p>
          <h3 className={stl.chpt}>Genres</h3>
          <p className={stl.text}>{genreName}</p>
          {isLoading && <p>...Loading</p>}
          {error && <p>{error.message}</p>}
        </div>
      )}
    </div>
  );
}

export default FilmInfo;
