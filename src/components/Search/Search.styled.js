import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  outline: 0;
  padding: 10px 18px;
  position: relative;
  width: calc(100vw - 60px);
`;

export const SearchInput = styled.input`
  background: #fff;
  border: 0;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  color: #a3a3a3;
  font: inherit;
  outline: 0;
  padding: 22px 18px;
  width: 100%;
`;

export const SearchButton = styled.button`
  background-color: hidden;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;
  font: inherit;
  outline: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 200ms ease-in;

  :hover {
    background: hidden;
  }

  :active {
    background: #7f8ff4;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;