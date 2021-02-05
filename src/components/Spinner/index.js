import React from 'react';
import { Wrapper, SpinnerContainer, SpinnerCircle } from './styledComponents';

const LoadingSpinner = () => (
  <Wrapper>
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  </Wrapper>
);

export default LoadingSpinner;
