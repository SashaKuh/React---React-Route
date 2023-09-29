import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout.jsx';
import { Loader } from 'components/Loader/Loader.jsx';

const Home = lazy(() => import('../page/Home/Home'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={<Navigate to={'/goit-react-hw-05-movies'} replace />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};