import React from 'react';
import { CommentWrapper } from './styledComponent';
import { MdComment } from 'react-icons/md';

const PostContentComments = (props) => (
  <CommentWrapper>
    <a href={`/`}>
      <MdComment className="comment" />
      <span>{props.num_comments}</span>
    </a>
  </CommentWrapper>
);

export default PostContentComments;
