import styled from 'styled-components/macro';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  :not(:first-child) {
    border-top: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
  background: white;
`;
