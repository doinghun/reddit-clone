import styled from 'styled-components/macro';

export const PostVoteButton = styled.button`
  border: 0;
  height: 22px;
  width: 22px;
  background-color: transparent;
  cursor: default;
  outline: none;
  span {
    width: 100%;
  }
`;

export const PostUpVoteButton = styled(PostVoteButton)`
  color: ${(props) => (props.upVoted ? props.theme.upvote : '#000000')};
`;

export const PostDownVoteButton = styled(PostVoteButton)`
  color: ${(props) => (props.downVoted ? props.theme.downvote : '#000000')};
`;

export const PostVoteContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.voteFlexDirection};
  align-items: center;
  justify-content: ${(props) => props.theme.voteJustifyContent};
  min-width: ${(props) => props.theme.voteMinWidth};
  padding: 4px;
  font-size: 12px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  background: #f8f9fa;
`;

export const PostVoteScore = styled.span`
  color: ${(props) =>
    props.upVoted
      ? props.theme.upvote
      : props.downVoted
      ? props.theme.downvote
      : '#000000'};
`;
