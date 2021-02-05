import React from 'react';
import { connect } from 'react-redux';
import { kFormatter } from 'util/number';
import { PostVoteContainer, PostVoteButton } from './styledComponents';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { increaseScore, decreaseScore } from 'state/Post/action';

const PostVote = (props) => (
  <PostVoteContainer>
    <PostVoteButton onClick={() => props.increaseScore(props.id)}>
      <ImArrowUp size={16} />
    </PostVoteButton>
    <span>{kFormatter(props.score)}</span>
    <span>{props.local_score}</span>
    <PostVoteButton onClick={() => props.decreaseScore(props.id)}>
      <ImArrowDown size={16} />
    </PostVoteButton>
  </PostVoteContainer>
);

export default connect(null, { increaseScore, decreaseScore })(PostVote);
