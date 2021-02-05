import styled from 'styled-components/macro';

export const PostVoteButton = styled.button`
  border: 0;
  border-radius: 3px;
  height: 22px;
  width: 22px;
  background-color: transparent;
  cursor: default;

  span {
    width: 100%;
  }
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
`;
