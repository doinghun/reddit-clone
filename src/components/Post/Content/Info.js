import React from 'react';
import { InfoWrapper } from './styledComponent';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const PostContentInfo = (props) => (
  <InfoWrapper>
    <span>Posted by</span>
    <a href={`/${props.author}`}>{props.author}</a>
    <span>{dayjs(props.created * 1000).fromNow()}</span>
  </InfoWrapper>
);

export default PostContentInfo;
