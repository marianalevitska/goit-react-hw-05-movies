import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import FilmInfo from '../../components/FilmInfo';
import stl from './movieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from || '/';
  const goBack = () => navigate(from);
  return (
    <div className={stl.block}>
      <button type="button" className={stl.button} onClick={goBack}>
        Go Back
      </button>
      <FilmInfo id={movieId} />
      <Link
        className={stl.link}
        state={{ from }}
        to={`/movies/${movieId}/cast`}
      >
        Cast
      </Link>
      <Link
        className={stl.link}
        state={{ from }}
        to={`/movies/${movieId}/reviews`}
      >
        Reviews
      </Link>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
