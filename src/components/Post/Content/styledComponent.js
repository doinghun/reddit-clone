import styled from 'styled-components/macro';

export const PostContentContainer = styled.div`
  // display: flex;
  // flex: 1;
  // flex-direction: column;
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  grid-template-rows: ${(props) => props.theme.gridTemplateRows};
  grid-auto-flow: column;
  border-left: 1px solid;
  padding: 8px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > * {
    margin-right: 4px;
  }
  & > a {
    text-underline-position: under;
    text-decoration: none;
    color: black;
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom: 1px;
  font-size: 13px;
  line-height: 19px;
`;

export const DetailWrapper = styled.div`
  padding-bottom: 1px;
  font-size: 13px;
  line-height: 19px;
  max-height: 10em;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
  display: ${(props) => props.theme.display};
`;

export const CommentWrapper = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > * {
    margin-right: 4px;
  }
  & > a {
    text-underline-position: under;
    text-decoration: none;
    color: black;
  }
  .comment {
    vertical-align: middle;
  }
`;
