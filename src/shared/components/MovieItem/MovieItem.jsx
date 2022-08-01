import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import stl from './movieItem.module.css';

function MovieItem({ original_name, original_title, id, poster_path, from }) {
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpNntacA2XFNowRfDYxO1cZOVaeSYe9ozWzpVdxdQ5T41dKiJScEvBOibqiU3KtZvNTk&usqp=CAU';
  const title = original_name || original_title;
  return (
    <li className={stl.item}>
      <Link state={{ from }} to={`/movies/${id}`}>
        <img src={image} alt={title} className={stl.image} />
        <p className={stl.title}>{title}</p>
      </Link>
    </li>
  );
}

MovieItem.propTypes = {
  original_name: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MovieItem;
