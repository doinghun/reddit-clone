import React from 'react';
import styled from 'styled-components/macro';
import { Wrapper, PostVoteContainer } from './styledComponents';
import PostContent from './Content/index';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { kFormatter } from 'util/number';

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
        <MdKeyboardArrowUp />
      </PostVoteButton>
      <span>{kFormatter(props.score)}</span>
      <PostVoteButton>
        <MdKeyboardArrowDown />
      </PostVoteButton>
    </PostVoteContainer>
    <PostContent {...props} />
  </Wrapper>
);

export default Post;
