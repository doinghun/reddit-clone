import React from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, DetailImageWrapper } from './styledComponent';
import { decoded } from 'util/api';

const PostContentDetail = ({ title, detail, preview }) =>
  preview && preview.enabled ? (
    <DetailImageWrapper>
      <img
        src={decoded(preview.images[0].source.url)}
        height={preview.images[0].source.height}
        width={preview.images[0].source.width}
        alt={title}
      />
    </DetailImageWrapper>
  ) : (
    <DetailWrapper>{detail}</DetailWrapper>
  );

PostContentDetail.propTypes = {
  title: PropTypes.string,
  detail: PropTypes.string,
  preview: PropTypes.shape({
    enabled: PropTypes.bool,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        source: PropTypes.shape({
          height: PropTypes.number,
          width: PropTypes.number,
          url: PropTypes.string,
        }),
      })
    ),
  }),
};

export default PostContentDetail;
