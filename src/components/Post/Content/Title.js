import React from 'react';
import { TitleWrapper } from './styledComponent';

const PostContentTitle = (props) => (
  <TitleWrapper>
    <h3>{props.title}</h3>
  </TitleWrapper>
);

export default PostContentTitle;
