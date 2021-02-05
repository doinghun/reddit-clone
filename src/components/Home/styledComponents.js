import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 10vw;

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

export const HomeMainSection = styled.main`
  flex: 1;
  min-width: 0;
  max-width: 900px;
`;
