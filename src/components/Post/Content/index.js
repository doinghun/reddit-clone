import React from 'react';
import { PostContentContainer } from './styledComponent';
import PostContentInfo from './Info';
import PostContentTitle from './Title';
import PostContentDetail from './Detail';
import PostContentComments from './Comments';

const PostContent = (props) => (
  <PostContentContainer>
    <PostContentInfo {...props} />
    <PostContentTitle {...props} />
    <PostContentDetail {...props} />
    <PostContentComments {...props} />
  </PostContentContainer>
);

export default PostContent;
