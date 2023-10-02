import { Search } from 'components/Search/Search';
import { useLocation, useNavigate } from 'react-router-dom'; // Додав useNavigate для зміни шляху
import { MoviesWrapper } from './Movies.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Використовуйте useNavigate для зміни шляху

  const handleGoBack = () => {
    // Перевірте шлях і відповідно змініть шлях назад
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <MoviesWrapper>
      {location.pathname !== '/movies' && ( // Перевірте шлях, щоб показати кнопку "назад"
        <AiOutlineArrowLeft onClick={handleGoBack} />
      )}
      <Search />
    </MoviesWrapper>
  );
};

export default Movies;
