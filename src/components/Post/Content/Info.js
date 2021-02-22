import React from 'react';
import { InfoWrapper } from './styledComponent';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const PostContentInfo = ({ author, created }) => (
  <InfoWrapper>
    <span>Posted by</span>
    <a href={`/${author}`}>{author}</a>
    <span>{dayjs(created * 1000).toNow()}</span>
  </InfoWrapper>
);

export default PostContentInfo;
