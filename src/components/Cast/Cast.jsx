import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../shared/api/movies';
import stl from './cast.module.css';

function Cast() {
  const [credits, setCredits] = useState({
    cast: [],
    isLoading: false,
    error: null,
  });
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCastDetails = async () => {
      setCredits(prevCredits => ({
        ...prevCredits,
        isLoading: true,
        error: null,
      }));

      try {
        const result = await getMovieCredits(movieId);
        setCredits(prevCredits => ({
          ...prevCredits,
          isLoading: false,
          cast: [...result.cast],
        }));
      } catch (error) {
        setCredits(prevCredits => ({
          ...prevCredits,
          isLoading: false,
          error,
        }));
      }
    };
    fetchCastDetails();
  }, [movieId]);
  const { isLoading, error, cast } = credits;

  const items = cast.map(({ character, id, name, profile_path }) => {
    const image = profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpNntacA2XFNowRfDYxO1cZOVaeSYe9ozWzpVdxdQ5T41dKiJScEvBOibqiU3KtZvNTk&usqp=CAU';
    return (
      <li key={id} className={stl.item}>
        <h2 className={stl.text}>{name}</h2>
        <img src={image} alt={name} className={stl.image} />
        <h3 className={stl.text}>{character}</h3>
      </li>
    );
  });
  const isRender = Boolean(cast.length > 0);
  return (
    <div>
      {isRender && <ul className={stl.list}>{items}</ul>}
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Cast;
