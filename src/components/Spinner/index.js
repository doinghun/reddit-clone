import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 700px;
  text-align: center;
  font-size: 0;

  .container {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 30px;
    width: 25%;
    height: 140px;
  }
  .circle {
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 10px solid rgba(0, 0, 0, 0.3);
    border-top-color: #000;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => (
  <Wrapper>
    <div className="container">
      <div className="circle"></div>
    </div>
  </Wrapper>
);

export default LoadingSpinner;
