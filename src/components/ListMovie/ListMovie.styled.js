import styled from 'styled-components';

export const ListMovieWrapper = styled.ul`
  display: grid;
  gap: 16px;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 48px;
  width: 100%;
  @media (min-width: 712px) {
    width: 712px;
  }
  @media (min-width: 1028px) {
    width: 1028px;
  }
  @media (min-width: 1344px) {
    width: 1344px;
  }
  @media (min-width: 1660px) {
    width: 1660px;
  }
`;