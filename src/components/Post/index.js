import React from 'react';
import styled from 'styled-components/macro';
import { Wrapper, PostVoteContainer } from './styledComponents';
import PostContent from './Content/index';
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

const Post = (props) => (
  <Wrapper>
    <PostVoteContainer>
      <PostVoteButton>
        <KeyboardArrowUp />
      </PostVoteButton>
      <span>{props.score}</span>
      <PostVoteButton>
        <KeyboardArrowDown />
      </PostVoteButton>
    </PostVoteContainer>
    <PostContent {...props} />
  </Wrapper>
);

export default Post;
