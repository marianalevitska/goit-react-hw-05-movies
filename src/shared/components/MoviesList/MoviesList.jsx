import { useLocation } from 'react-router-dom';
import { memo } from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';

import stl from './moviesList.module.css';

function MoviesList({ items }) {
  const location = useLocation();
  const elements = items.map(item => (
    <MovieItem key={item.id} {...item} from={location} />
  ));
  return <ul className={stl.list}>{elements}</ul>;
}

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ),
};

export default memo(MoviesList);
