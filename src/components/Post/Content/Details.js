import React from 'react';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

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
`;

const PostContentDetail = (props) => (
  <Wrapper>
    <span>Posted by</span>
    <a href={`/${props.author}`}>{props.author}</a>
    <span>{dayjs(props.created).fromNow()}</span>
  </Wrapper>
);

export default PostContentDetail;
