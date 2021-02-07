import React from 'react';
import PropTypes from 'prop-types';
import { PostContentContainer } from './styledComponent';
import PostContentInfo from './Info';
import PostContentTitle from './Title';
import PostContentDetail from './Detail';
import PostContentComments from './Comments';

const PostContent = ({
  title,
  author,
  num_comments,
  selftext,
  score,
  created,
  name,
  preview,
}) => (
  <PostContentContainer>
    <PostContentInfo author={author} created={created} />
    <PostContentTitle title={title} />
    <PostContentDetail title={title} detail={selftext} preview={preview} />
    <PostContentComments score={score} num_comments={num_comments} />
  </PostContentContainer>
);

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  num_comments: PropTypes.number,
  selftext: PropTypes.string,
  score: PropTypes.number,
  created: PropTypes.number,
  name: PropTypes.string,
  preview: PropTypes.object,
};
export default PostContent;
