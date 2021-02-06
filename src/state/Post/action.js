import { getPosts, getMorePosts } from './api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const fetchPostsRequest = { type: FETCH_POSTS_REQUEST };
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});
export const fetchPostsError = (error) => ({ type: FETCH_POSTS_ERROR, error });

export const fetchPosts = (param) => async (dispatch) => {
  dispatch(fetchPostsRequest);
  try {
    const posts = await getPosts(param);
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};

export const FETCH_MORE_POSTS_REQUEST = 'FETCH_MORE_POSTS_REQUEST';
export const FETCH_MORE_POSTS_SUCCESS = 'FETCH_MORE_POSTS_SUCCESS';
export const FETCH_MORE_POSTS_ERROR = 'FETCH_MORE_POSTS_ERROR';

export const fetchMorePostsRequest = { type: FETCH_MORE_POSTS_REQUEST };
export const fetchMorePostsSuccess = (posts) => ({
  type: FETCH_MORE_POSTS_SUCCESS,
  posts,
});
export const fetchMorePostsError = (error) => ({
  type: FETCH_MORE_POSTS_ERROR,
  error,
});

export const fetchMorePosts = (subreddit) => async (dispatch, getState) => {
  const lastPostID = getState().post.lastPostID;
  const param = {
    subreddit,
    lastPostID,
  };
  dispatch(fetchMorePostsRequest);
  try {
    const posts = await getMorePosts(param);
    dispatch(fetchMorePostsSuccess(posts));
  } catch (error) {
    dispatch(fetchMorePostsError(error));
  }
};

export const VIEW_BY_CARD = 'VIEW_BY_CARD';
export const VIEW_BY_CLASSIC = 'VIEW_BY_CLASSIC';
export const VIEW_BY_COMPACT = 'VIEW_BY_COMPACT';

export const viewByCard = { type: VIEW_BY_CARD };
export const viewByClassic = { type: VIEW_BY_CLASSIC };
export const viewByCompact = { type: VIEW_BY_COMPACT };

export const viewBy = (type) => (dispatch) => {
  switch (type) {
    case 'Card':
      dispatch(viewByCard);
      break;
    case 'Classic':
      dispatch(viewByClassic);
      break;
    case 'Compact':
      dispatch(viewByCompact);
      break;
    default:
      return type;
  }
};

export const INCREASE_SCORE = 'INCREASE_SCORE';
export const DECREASE_SCORE = 'DECREASE_SCORE';
export const increaseScore = (id) => ({
  type: INCREASE_SCORE,
  id,
});
export const decreaseScore = (id) => ({
  type: DECREASE_SCORE,
  id,
});
