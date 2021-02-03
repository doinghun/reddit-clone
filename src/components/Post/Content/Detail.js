import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding-bottom: 1px;
  font-size: 13px;
  line-height: 19px;

  .detail {
    max-height: 10em;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
  }
`;

const PostContentDetail = (props) => (
  <Wrapper>
    <h3 className="title">{props.title}</h3>
    <div className="detail">{props.selftext}</div>
  </Wrapper>
);

export default PostContentDetail;
