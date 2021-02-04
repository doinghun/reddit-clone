import React from 'react';
import { DetailWrapper } from './styledComponent';

const PostContentDetail = (props) => (
  <DetailWrapper>{props.selftext}</DetailWrapper>
);

export default PostContentDetail;
