import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from 'state/Post/action';
import { Wrapper, Button } from './styledComponents';

function Sort({ fetchPosts }) {
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const state = {
      category: 'wallstreetbets',
      sortBy,
    };
    if (sortBy) {
      fetchPosts(state);
    }
  }, [fetchPosts, sortBy]);

  return (
    <Wrapper>
      <Button onClick={() => setSortBy('hot')}>Hot</Button>
      <Button onClick={() => setSortBy('new')}>New</Button>
      <Button onClick={() => setSortBy('top')}>Top</Button>
    </Wrapper>
  );
}

Sort.prototype = {
  fetchPosts: PropTypes.func,
};

export default connect(null, { fetchPosts })(Sort);
