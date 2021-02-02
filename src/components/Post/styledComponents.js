import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  height: auto;
`;

export const PostContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid;
  padding: 8px;
  min-width: 0;
`;

export const PostVoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  font-size: 12px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
`;
