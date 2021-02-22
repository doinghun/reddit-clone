import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styledComponents';
import PostVote from './Vote/index';
import PostContent from './Content/index';

const Post = (props) => {
  const {
    id,
    title,
    author,
    num_comments,
    selftext,
    score,
    created,
    name,
    preview,
    local_score,
    upVoted,
    downVoted,
  } = props;
  return (
    <Wrapper>
      <PostVote
        id={id}
        local_score={local_score}
        upVoted={upVoted}
        downVoted={downVoted}
      />
      <PostContent
        title={title}
        author={author}
        num_comments={num_comments}
        selftext={selftext}
        score={score}
        created={created}
        name={name}
        preview={preview}
      />
    </Wrapper>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  num_comments: PropTypes.number,
  selftext: PropTypes.string,
  score: PropTypes.number,
  created: PropTypes.number,
  name: PropTypes.string,
  preview: PropTypes.object,
  local_score: PropTypes.number,
  upVoted: PropTypes.bool,
  downVoted: PropTypes.bool,
};

export default Post;
