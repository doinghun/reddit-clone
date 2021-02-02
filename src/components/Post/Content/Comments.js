import React from 'react';
import styled from 'styled-components/macro';
import { ModeComment } from '@material-ui/icons';

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
  & > span {
    color: ${(props) => props.theme.mutedText};
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
    <a href={`/${props.num_comments}`}>
      <ModeComment className="comment" />
      <span>{props.num_comments}</span>
    </a>
  </Wrapper>
);

export default PostContentComments;
