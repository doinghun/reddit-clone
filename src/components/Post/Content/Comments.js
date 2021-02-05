import React from 'react';
import { CommentWrapper } from './styledComponent';
import { MdComment } from 'react-icons/md';
import { TiArrowSortedUp } from 'react-icons/ti';
import { kFormatter } from 'util/number';

const PostContentComments = (props) => (
  <CommentWrapper>
    <TiArrowSortedUp size={16} className="comment" />
    <span>{kFormatter(props.score)}</span>
    <MdComment className="comment" />
    <span>{kFormatter(props.num_comments)}</span>
  </CommentWrapper>
);

export default PostContentComments;
