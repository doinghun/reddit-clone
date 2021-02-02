import React from 'react';
import { PostContentContainer } from './styledComponent';
import PostContentDetail from './Details';
import PostContentComments from './Comments';

const PostContent = (props) => (
  <PostContentContainer>
    <PostContentDetail {...props} />
    <div>{props.title}</div>
    <div>{props.text}</div>
    <PostContentComments {...props} />
  </PostContentContainer>
);

export default PostContent;
