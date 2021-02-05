import React from 'react';
import { Wrapper } from './styledComponents';
import PostVote from './Vote/index';
import PostContent from './Content/index';

const Post = (props) => (
  <Wrapper>
    <PostVote {...props} />
    <PostContent {...props} />
  </Wrapper>
);

export default Post;
