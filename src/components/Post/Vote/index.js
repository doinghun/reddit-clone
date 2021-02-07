import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  PostVoteContainer,
  PostUpVoteButton,
  PostDownVoteButton,
  PostVoteScore,
} from './styledComponents';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { increaseScore, decreaseScore } from 'state/Post/action';

const PostVote = ({
  increaseScore,
  decreaseScore,
  id,
  local_score,
  upVoted,
  downVoted,
}) => {
  return (
    <PostVoteContainer>
      <PostUpVoteButton onClick={() => increaseScore(id)} upVoted={upVoted}>
        <ImArrowUp size={16} />
      </PostUpVoteButton>
      <PostVoteScore upVoted={upVoted} downVoted={downVoted}>
        {local_score}
      </PostVoteScore>
      <PostDownVoteButton
        onClick={() => decreaseScore(id)}
        downVoted={downVoted}
      >
        <ImArrowDown size={16} />
      </PostDownVoteButton>
    </PostVoteContainer>
  );
};

PostVote.prototype = {
  increaseScore: PropTypes.func,
  decreaseScore: PropTypes.func,
  id: PropTypes.string,
  local_score: PropTypes.number,
  upVoted: PropTypes.bool,
  downVoted: PropTypes.bool,
};

export default connect(null, { increaseScore, decreaseScore })(PostVote);
