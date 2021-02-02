import styled from 'styled-components/macro';

export const List = styled.ul`
  list-style: none;
  border: 1px solid;
  border-radius: 2px;
  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

export const Item = styled.li`
  :not(:first-child) {
    border-top: 1px solid;
  }
`;
