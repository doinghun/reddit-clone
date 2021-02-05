import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import LoadingSpinner from 'components/Spinner';
import ViewOptions from 'components/ViewOptions';
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

  // Load Initial Data
  useEffect(() => {
    const state = {
      category: 'wallstreetbets',
    };
    fetchPosts(state);
  }, [fetchPosts]);
  // Set Posts
  useEffect(() => {
    setPostList(posts);
  }, [posts]);
  // Set lastPostId to call for more
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

  // Detect Scroll To End
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

  // Load More Posts
  useEffect(() => {
    lastPostID && fetchMorePosts('wallstreetbets', lastPostID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMorePosts, page]);

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
