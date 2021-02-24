import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import LoadingSpinner from 'components/Spinner';
import PostList from 'components/PostList';
import ViewOptions from 'components/ViewOptions';
import Post from 'components/Post';
import PostContent from 'components/Post/Content';
import PostVote from 'components/Post/Vote';

describe('PostList', () => {
  let mockStore;
  let initialState;
  let posts;
  let isLoading;
  let isInitialLoading;
  beforeAll(() => {
    //Initial state
    const middlewares = [thunk];
    mockStore = configureStore(middlewares);
    posts = [
      {
        title: 'title1',
        author: 'author1',
        num_comments: 1,
        selftext: 'selftext1',
        id: 'ldh5fc',
        score: 1,
        created_utc: 1612587616,
        name: 'name',
        preview: {
          enabled: true,
          images: [
            {
              id: '12345',
              source: {
                height: 1151,
                width: 1170,
                url: 'https://preview.url',
              },
            },
          ],
        },
        local_score: 0,
        upVoted: false,
        downVoted: false,
      },
    ];
    isLoading = false;
    isInitialLoading = false;
    initialState = {
      post: {
        posts,
        isLoading,
        isInitialLoading,
      },
    };
  });
  it('should render all posts with vote and content sections', () => {
    const store = mockStore(() => initialState);
    const wrapper = mount(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
    const viewOptions = wrapper.find(ViewOptions);
    expect(viewOptions).toHaveLength(1);

    const post = wrapper.find(Post);
    expect(post).toHaveLength(1);
    expect(post.find(PostVote)).toHaveLength(1);
    expect(post.find(PostContent)).toHaveLength(1);
  });
  it('should render Spinner if loading', () => {
    const store = mockStore(() => ({
      post: {
        ...initialState.post,
        ...initialState.isLoading,
        isInitialLoading: true,
      },
    }));
    const wrapper = mount(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
    expect(wrapper.find(LoadingSpinner));
  });
});
