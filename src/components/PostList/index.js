import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import LoadingSpinner from 'components/Spinner';
import ViewOptions from 'components/ViewOptions';
import { List, Item } from './styledComponents';
import { connect } from 'react-redux';
import { fetchPosts, fetchMorePosts } from 'state/Post/action';
import { subreddit_name } from 'util/constant';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
function PostList({
  fetchPosts,
  fetchMorePosts,
  posts,
  isInitialLoading,
  isLoading,
}) {
  const [postList, setPostList] = useState([]);

  // Load Initial Data
  useEffect(() => {
    fetchPosts({ subreddit: subreddit_name });
  }, [fetchPosts]);
  // Set Posts
  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const [element, setElement] = useState(null);
  const page = useInfiniteScroll(element, isLoading);

  // Load More Posts
  useEffect(() => {
    if (page > 0) {
      fetchMorePosts(subreddit_name);
    }
  }, [page, fetchMorePosts]);

  return isInitialLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <ViewOptions />
      <List>
        {postList.map((post, index) => (
          <Item key={index}>
            <Post {...post} />
          </Item>
        ))}
      </List>
      <div ref={(el) => setElement(el)}>
        <LoadingSpinner />
      </div>
    </div>
  );
}

PostList.propTypes = {
  fetchPosts: PropTypes.func,
  fetchMorePosts: PropTypes.func,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      num_comments: PropTypes.number,
      selftext: PropTypes.string,
      score: PropTypes.number,
      created: PropTypes.number,
      name: PropTypes.string,
      preview: PropTypes.object,
      local_score: PropTypes.number,
      upVoted: PropTypes.bool,
      downVoted: PropTypes.bool,
    })
  ),
  isLoading: PropTypes.bool,
  isInitialLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  isInitialLoading: state.post.isInitialLoading,
  isLoading: state.post.isLoading,
});

export default connect(mapStateToProps, { fetchPosts, fetchMorePosts })(
  PostList
);
