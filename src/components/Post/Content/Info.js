import React from 'react';
import { InfoWrapper } from './styledComponent';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

const PostContentInfo = ({ author, created }) => (
  <InfoWrapper>
    <span>Posted by</span>
    <a href={`/${author}`}>{author}</a>
    <span>{dayjs.utc(created * 1000).fromNow()}</span>
  </InfoWrapper>
);

export default PostContentInfo;
