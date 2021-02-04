import React from 'react';
import styled from 'styled-components/macro';
import { MdComment } from 'react-icons/md';

const Wrapper = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > * {
    margin-right: 4px;
  }
  & > a {
    text-underline-position: under;
    text-decoration: none;
    color: black;
  }
  .comment {
    display: inlie-block;
    height: 13px;
    width: 15px;
    vertical-align: middle;
  }
`;

const PostContentComments = (props) => (
  <Wrapper>
    <a href={`/`}>
      <MdComment className="comment" />
      <span>{props.num_comments}</span>
    </a>
  </Wrapper>
);

export default PostContentComments;
