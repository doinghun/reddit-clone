import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from './action';

const initialState = { isLoading: false, posts: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: action.posts };
    case FETCH_POSTS_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
