import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LayOut = lazy(() => import('./components/LayOut'));
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPages'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
