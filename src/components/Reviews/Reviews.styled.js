import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  max-height: 640px;
  overflow-y: scroll;
`;

export const ReviewEl = styled.li`
  background-color: ghostwhite;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

export const ReviewTitle = styled.h3`
  font-weight: 600;
`;