import { getPosts, getMorePosts } from './api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const fetchPostsRequest = { type: FETCH_POSTS_REQUEST };
const fetchPostsSuccess = (posts) => ({ type: FETCH_POSTS_SUCCESS, posts });
const fetchPostsError = (error) => ({ type: FETCH_POSTS_ERROR, error });

export const fetchPosts = (state) => async (dispatch) => {
  dispatch(fetchPostsRequest);
  try {
    const posts = await getPosts(state);
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};

export const FETCH_MORE_POSTS_REQUEST = 'FETCH_MORE_POSTS_REQUEST';
export const FETCH_MORE_POSTS_SUCCESS = 'FETCH_MORE_POSTS_SUCCESS';
export const FETCH_MORE_POSTS_ERROR = 'FETCH_MORE_POSTS_ERROR';

const fetchMorePostsRequest = { type: FETCH_MORE_POSTS_REQUEST };
const fetchMorePostsSuccess = (posts) => ({
  type: FETCH_MORE_POSTS_SUCCESS,
  posts,
});
const fetchMorePostsError = (error) => ({
  type: FETCH_MORE_POSTS_ERROR,
  error,
});

export const fetchMorePosts = (category, lastPostID) => async (dispatch) => {
  dispatch(fetchMorePostsRequest);
  try {
    const posts = await getMorePosts(category, lastPostID);
    dispatch(fetchMorePostsSuccess(posts));
  } catch (error) {
    dispatch(fetchMorePostsError(error));
  }
};

export const VIEW_BY_CARD = 'VIEW_BY_CARD';
export const VIEW_BY_CLASSIC = 'VIEW_BY_CLASSIC';
export const VIEW_BY_COMPACT = 'VIEW_BY_COMPACT';

export const viewBy = (type) => (dispatch) => {
  switch (type) {
    case 'Card':
      dispatch({ type: VIEW_BY_CARD });
      break;
    case 'Classic':
      dispatch({ type: VIEW_BY_CLASSIC });
      break;
    case 'Compact':
      dispatch({ type: VIEW_BY_COMPACT });
      break;
    default:
      return type;
  }
};
