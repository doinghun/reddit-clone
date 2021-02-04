import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_POSTS_ERROR,
} from './action';

const initialState = {
  isInitialLoading: false,
  isLoading: false,
  posts: [],
  view: 'card',
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isInitialLoading: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isInitialLoading: false,
        posts: action.posts,
      };
    case FETCH_POSTS_ERROR:
      return { ...state, isInitialLoading: false };
    case FETCH_MORE_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat(action.posts),
      };
    case FETCH_MORE_POSTS_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
