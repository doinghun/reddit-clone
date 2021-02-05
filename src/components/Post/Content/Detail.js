import React from 'react';
import { DetailWrapper, DetailImageWrapper } from './styledComponent';

const decoded = (encoded) => encoded.replace(/&amp;/g, '&');
const PostContentDetail = (props) =>
  props.preview && props.preview.enabled ? (
    <DetailImageWrapper>
      <img
        src={decoded(props.preview.images[0].source.url)}
        height={props.preview.images[0].source.height}
        width={props.preview.images[0].source.width}
        alt={props.title}
      />
    </DetailImageWrapper>
  ) : (
    <DetailWrapper>{props.selftext}</DetailWrapper>
  );

export default PostContentDetail;
