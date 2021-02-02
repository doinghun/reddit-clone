import React from 'react';
import styled from 'styled-components/macro';
import {
  Wrapper,
  PostContentContainer,
  PostVoteContainer,
} from './styledComponents';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

const PostVoteButton = styled.button`
  border: 0;
  border-radius: 3px;
  height: 22px;
  width: 22px;
  background-color: transparent;
  cursor: default;
  pointer-events: none;
`;

const Post = (prop) => (
  <Wrapper>
    <PostVoteContainer>
      <PostVoteButton>
        <KeyboardArrowUp />
      </PostVoteButton>
      <span>{prop.score}</span>
      <PostVoteButton>
        <KeyboardArrowDown />
      </PostVoteButton>
    </PostVoteContainer>
    <PostContentContainer>
      <div>{prop.title}</div>
      <div>{prop.author}</div>
    </PostContentContainer>
  </Wrapper>
);

export default Post;
