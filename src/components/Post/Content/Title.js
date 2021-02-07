import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper } from './styledComponent';

const PostContentTitle = ({ title }) => (
  <TitleWrapper>
    <h3>{title}</h3>
  </TitleWrapper>
);

PostContentTitle.propTypes = {
  title: PropTypes.string,
};
export default PostContentTitle;
