import React from 'react';
import { CommentWrapper } from './styledComponent';
import { MdComment } from 'react-icons/md';
import { kFormatter } from 'util/number';

const PostContentComments = (props) => (
  <CommentWrapper>
    <a href={`/`}>
      <MdComment className="comment" />
      <span>{kFormatter(props.num_comments)}</span>
    </a>
  </CommentWrapper>
);

export default PostContentComments;
