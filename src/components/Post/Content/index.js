import React from 'react';
import { PostContentContainer } from './styledComponent';
import PostContentInfo from './Info';
import PostContentDetail from './Detail';
import PostContentComments from './Comments';

const PostContent = (props) => (
  <PostContentContainer>
    <PostContentInfo {...props} />
    <PostContentDetail {...props} />
    <PostContentComments {...props} />
  </PostContentContainer>
);

export default PostContent;
