import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import LoadingSpinner from 'components/Spinner';
import { List, Item } from './styledComponents';
import { connect } from 'react-redux';
import { fetchPosts, fetchMorePosts } from 'state/Post/action';
function PostList({
  fetchPosts,
  fetchMorePosts,
  posts,
  isInitialLoading,
  isLoading,
}) {
  const [postList, setPostList] = useState([]);
  const [lastPostID, setLastPostID] = useState('');

  // load Data Fetch
  useEffect(() => {
    fetchPosts('wallstreetbets');
  }, [fetchPosts]);
  // set Posts & last Post Id to call for more
  useEffect(() => {
    setPostList(posts);
  }, [posts]);
  useEffect(() => {
    if (posts.length) {
      setLastPostID(posts[posts.length - 1].name);
    }
  }, [posts]);

  const [element, setElement] = useState(null);
  const [page, setPage] = useState(1);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    },
    [setPage]
  );
  const observer = useRef(
    new IntersectionObserver(handleObserver, { threshold: 1 })
  );

  // Detect scroll End
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement && !isLoading) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement && !isLoading) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element, isLoading]);

  // load More Posts
  useEffect(() => {
    lastPostID && fetchMorePosts('wallstreetbets', lastPostID);
  }, [fetchMorePosts, page]);

  return isInitialLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <List>
        {postList.map((post, index) => (
          <Item key={index}>
            <Post {...post} />
          </Item>
        ))}
      </List>
      <div ref={setElement}>
        <LoadingSpinner />
      </div>
    </div>
  );
}

PostList.prototype = {
  fetchPosts: PropTypes.func,
  fetchMorePosts: PropTypes.func,
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isInitialLoading: state.posts.isInitialLoading,
  isLoading: state.posts.isLoading,
});

export default connect(mapStateToProps, { fetchPosts, fetchMorePosts })(
  PostList
);
