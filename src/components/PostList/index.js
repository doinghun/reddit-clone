import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import { List, Item } from './styledComponents';
import { connect } from 'react-redux';
import { fetchPosts } from 'state/Post/action';
function PostList({ fetchPosts, posts, isLoading }) {
  const [_posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts('wallstreetbets');
  }, [fetchPosts]);
  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  console.log(posts);
  return (
    <List>
      {_posts.map((post, index) => (
        <Item key={index}>
          <Post {...post} />
        </Item>
      ))}
    </List>
  );
}

PostList.prototype = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
