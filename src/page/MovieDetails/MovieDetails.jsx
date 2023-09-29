import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getDetailsMovie } from 'api';
import {
  MovieAdditionalTitle,
  MovieDetailsSection,
  MovieDetailsTitle,
  MovieDetailsWrapper,
  MovieText,
  MovieTitle,
  SectionAdditional,
} from './MovieDetails.styled';
import { GetBackButton } from 'page/Movies/Movies.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const controllerRef = useRef();

  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const resp = await getDetailsMovie(movieId, signal, '');
        setImg(resp.poster_path);
        setTitle(resp.title);
        setScore(resp.vote_average);
        setOverview(resp.overview);
        setGenres(resp.genres);
      } catch {}
    };

    getDetails();

    return () => controllerRef.current.abort();
  }, [movieId]);

  return (
    <MovieDetailsWrapper>
        <GetBackButton to={'/'}>
          <AiOutlineArrowLeft />
        </GetBackButton>
      <MovieDetailsSection>
        <img
          width="300px"
          height="450px"
          src={
            img
              ? `https://image.tmdb.org/t/p/w300${img}`
              : `https://i.imgur.com/GhqsTtz.jpg`
          }
          alt={title}
        />
        <div>
          <MovieTitle>{title}</MovieTitle>
          <MovieText>User Score: {score} IMDb</MovieText>
          <MovieDetailsTitle>Overview</MovieDetailsTitle>
          <MovieText>{overview}</MovieText>
          <MovieDetailsTitle>Genres</MovieDetailsTitle>
          <MovieText>{genres.map(el => el.name).join(' ')}</MovieText>
        </div>
      </MovieDetailsSection>
      <SectionAdditional>
        <MovieAdditionalTitle>Additional information</MovieAdditionalTitle>
        <Link
          to={`/movies/${movieId}/cast`}
          state={{ from: location }}
        >
          Cast
        </Link>
        <Link
          to={`/movies/${movieId}/reviews`}
          state={{ from: location }}
        >
          Reviews
        </Link>
      </SectionAdditional>
      <Outlet />
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;