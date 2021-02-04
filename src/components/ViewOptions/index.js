import React from 'react';
import Sort from './Sort';
import ViewBy from './ViewBy';
import { Wrapper } from './styledComponents';

const ViewOptions = () => (
  <Wrapper>
    <Sort />
    <ViewBy />
  </Wrapper>
);

export default ViewOptions;
