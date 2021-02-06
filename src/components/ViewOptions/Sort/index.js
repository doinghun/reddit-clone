import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from 'state/Post/action';
import { Wrapper, Button } from './styledComponents';
import { subreddit_name } from 'util/constant'
function Sort({ fetchPosts }) {
  return (
    <Wrapper>
      <Button onClick={() => fetchPosts({ subreddit: subreddit_name, sortBy: 'hot'})}>Hot</Button>
      <Button onClick={() => fetchPosts({ subreddit: subreddit_name, sortBy: 'new'})}>New</Button>
      <Button onClick={() => fetchPosts({ subreddit: subreddit_name, sortBy: 'top'})}>Top</Button>
    </Wrapper>
  );
}

Sort.prototype = {
  fetchPosts: PropTypes.func,
};

export default connect(null, { fetchPosts })(Sort);
