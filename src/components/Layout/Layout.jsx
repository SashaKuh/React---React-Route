import {
  HomeLink,
  HeaderStyled,
  SearchLink,
  HeaderContainer,
  HeightHeader,
} from './Layout.styled';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <HomeLink to="/" state={{ from: location }}>
            MovieHub
          </HomeLink>
          <SearchLink
            to="/movies"
            state={{ from: location }}
          >
            Search
          </SearchLink>
        </HeaderContainer>
      </HeaderStyled>
      <HeightHeader />
      <Outlet />
    </>
  );
};