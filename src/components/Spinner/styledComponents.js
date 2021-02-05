import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 30px;
  height: 140px;
`;

export const SpinnerCircle = styled.div`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  border: 10px solid rgba(0, 0, 0, 0.3);
  border-top-color: #000;
  animation: spin 1s infinite linear;
`;
