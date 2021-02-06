import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_POSTS_ERROR,
  VIEW_BY_CARD,
  VIEW_BY_CLASSIC,
  VIEW_BY_COMPACT,
  INCREASE_SCORE,
  DECREASE_SCORE,
} from './action';
import { compare } from 'util/sort';

const initialState = {
  isInitialLoading: false,
  isLoading: false,
  posts: [],
  lastPostID: '',
  view: 'card',
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isInitialLoading: true };
    case FETCH_POSTS_SUCCESS:
      // const posts = { after: '', data: [] }

      return {
        ...state,
        isInitialLoading: false,
        posts: action.posts.data,
        lastPostID: action.posts.after,
      };
    case FETCH_POSTS_ERROR:
      return { ...state, isInitialLoading: false };
    case FETCH_MORE_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat(action.posts.data),
        lastPostID: action.posts.after,
      };
    case FETCH_MORE_POSTS_ERROR:
      return { ...state, isLoading: false };
    case VIEW_BY_CARD:
      return { ...state, view: 'card' };
    case VIEW_BY_CLASSIC:
      return { ...state, view: 'classic' };
    case VIEW_BY_COMPACT:
      return { ...state, view: 'compact' };
    case INCREASE_SCORE:
      return {
        ...state,
        posts: state.posts
          .map((post) => {
            return post.id === action.id
              ? {
                  ...post,
                  local_score: post.local_score + 1,
                  upVoted: true,
                  downVoted: false,
                }
              : post;
          })
          .sort(compare),
      };
    case DECREASE_SCORE:
      return {
        ...state,
        posts: state.posts
          .map((post) => {
            return post.id === action.id
              ? {
                  ...post,
                  local_score: post.local_score - 1,
                  downVoted: true,
                  upVoted: false,
                }
              : post;
          })
          .sort(compare),
      };
    default:
      return state;
  }
};
