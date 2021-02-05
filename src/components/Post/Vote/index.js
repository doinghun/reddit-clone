import React from 'react';
import { connect } from 'react-redux';
import {
  PostVoteContainer,
  PostUpVoteButton,
  PostDownVoteButton,
  PostVoteScore,
} from './styledComponents';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { increaseScore, decreaseScore } from 'state/Post/action';

const PostVote = (props) => {
  const {
    increaseScore,
    decreaseScore,
    id,
    local_score,
    upVoted,
    downVoted,
  } = props;

  return (
    <PostVoteContainer>
      <PostUpVoteButton onClick={() => increaseScore(id)} upVoted={upVoted}>
        <ImArrowUp size={16} />
      </PostUpVoteButton>
      <PostVoteScore upVoted={upVoted} downVoted={downVoted}>
        {local_score}
      </PostVoteScore>
      <PostDownVoteButton onClick={() => decreaseScore(id)} downVoted={downVoted}>
        <ImArrowDown size={16} />
      </PostDownVoteButton>
    </PostVoteContainer>
  );
};

export default connect(null, { increaseScore, decreaseScore })(PostVote);
