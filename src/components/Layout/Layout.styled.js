import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #f5f6fa;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  padding: 30px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  max-width: 1660px;
`;

export const HomeLink = styled(Link)`
  color: #7183f2;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  ::after {
    border-bottom: 12px solid transparent;
    border-left: 21px solid #7183f2;
    border-top: 12px solid transparent;
    content: '';
    display: block;
    margin-left: 8px;
    width: 0;
    height: 0;
  }
`;

export const SearchLink = styled(Link)`
  background-color: #7f8ff4;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;
  font: inherit;
  padding: 12px 36px;
  text-align: center;
  text-decoration: none;
  transition: all 200ms ease-in;

  :hover {
    background: #7183f2;
  }

  :active {
    background: #7f8ff4;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const HeightHeader = styled.div`
  height: 100px;
`;