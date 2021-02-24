import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  fetchMorePostsRequest,
  fetchMorePostsSuccess,
  fetchMorePostsError,
  FETCH_MORE_POSTS_REQUEST,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_MORE_POSTS_ERROR,
  viewByCard,
  viewByClassic,
  viewByCompact,
  VIEW_BY_CARD,
  VIEW_BY_CLASSIC,
  VIEW_BY_COMPACT,
  increaseScore,
  decreaseScore,
  INCREASE_SCORE,
  DECREASE_SCORE,
} from 'state/Post/action';
import { post } from 'state/Post/reducer';
import { sortUp, sortDown } from 'util/sort';

describe('post reducer', () => {
  let initialState;
  let posts;
  let apiResponse;
  beforeAll(() => {
    initialState = {
      isInitialLoading: false,
      isLoading: false,
      posts: [],
      lastPostID: '',
      view: 'card',
    };
    posts = [
      {
        title: 'title1',
        author: 'author1',
        num_comments: 1,
        selftext: 'selftext1',
        id: 'id1',
        score: 1,
        created: 1612587616,
        name: 'name',
        preview: 'preview',
        local_score: 0,
        upVoted: false,
        downVoted: false,
      },
    ];
    apiResponse = {
      data: posts,
      after: 'id',
    };
  });
  describe('fetch post request', () => {
    it(`should update with ${FETCH_POSTS_REQUEST}`, () => {
      const actual = post(initialState, fetchPostsRequest);
      expect(actual).toEqual({
        isInitialLoading: true,
        isLoading: false,
        posts: [],
        lastPostID: '',
        view: 'card',
      });
    });
    it(`should update with ${FETCH_POSTS_SUCCESS}`, () => {
      const actual = post(
        { ...initialState, isInitialLoading: true },
        fetchPostsSuccess(apiResponse)
      );
      expect(actual).toEqual({
        isInitialLoading: false,
        isLoading: false,
        posts: posts,
        lastPostID: 'id',
        view: 'card',
      });
    });
    it(`should update with ${FETCH_POSTS_ERROR}`, () => {
      const error = 'Failed to fetch posts';
      const actual = post(
        { ...initialState, isInitialLoading: true },
        fetchPostsError(error)
      );
      expect(actual).toEqual({
        isInitialLoading: false,
        isLoading: false,
        posts: [],
        lastPostID: '',
        view: 'card',
      });
    });
  });
  describe('fetch more post request', () => {
    it(`should update with ${FETCH_MORE_POSTS_REQUEST}`, () => {
      const actual = post(initialState, fetchMorePostsRequest);
      expect(actual).toEqual({
        isInitialLoading: false,
        isLoading: true,
        posts: [],
        lastPostID: '',
        view: 'card',
      });
    });
    it(`should update with ${FETCH_MORE_POSTS_SUCCESS}`, () => {
      const actual = post(
        { ...initialState, isLoading: true },
        fetchMorePostsSuccess(apiResponse)
      );
      expect(actual).toEqual({
        isInitialLoading: false,
        isLoading: false,
        posts: posts,
        lastPostID: 'id',
        view: 'card',
      });
    });
    it(`should update with ${FETCH_MORE_POSTS_ERROR}`, () => {
      const error = 'Failed to fetch posts';
      const actual = post(
        { ...initialState, isLoading: true },
        fetchMorePostsError(error)
      );
      expect(actual).toEqual({
        isInitialLoading: false,
        isLoading: false,
        posts: [],
        lastPostID: '',
        view: 'card',
      });
    });
  });
  describe('view By', () => {
    it(`should update with ${VIEW_BY_CARD}`, () => {
      const actual = post(initialState, viewByCard);
      expect(actual).toEqual({
        ...initialState,
        view: 'card',
      });
    });
    it(`should update with ${VIEW_BY_CLASSIC}`, () => {
      const actual = post(initialState, viewByClassic);
      expect(actual).toEqual({
        ...initialState,
        view: 'classic',
      });
    });
    it(`should update with ${VIEW_BY_COMPACT}`, () => {
      const actual = post(initialState, viewByCompact);
      expect(actual).toEqual({
        ...initialState,
        view: 'compact',
      });
    });
  });
  describe('change Score', () => {
    it(`should update with ${INCREASE_SCORE}`, () => {
      const actual = post(
        {
          ...initialState,
          posts,
        },
        increaseScore('id1')
      );
      expect(actual).toEqual({
        ...initialState,
        posts: sortUp(
          [
            {
              ...posts[0],
              local_score: 1,
              upVoted: true,
              downVoted: false,
            },
          ],
          'id1'
        ),
      });
    });
    it(`should update with ${DECREASE_SCORE}`, () => {
      const actual = post(
        {
          ...initialState,
          posts,
        },
        decreaseScore('id1')
      );
      expect(actual).toEqual({
        ...initialState,
        posts: sortDown(
          [
            {
              ...posts[0],
              local_score: -1,
              upVoted: false,
              downVoted: true,
            },
          ],
          'id1'
        ),
      });
    });
  });
});
