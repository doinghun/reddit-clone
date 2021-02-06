import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { increaseScore, decreaseScore } from 'state/Post/action';

import PostVote from 'components/Post/Vote';
import {
  PostUpVoteButton,
  PostDownVoteButton,
  PostVoteScore,
} from 'components/Post/Vote/styledComponents';

describe('PostVote', () => {
  const middlewares = [thunk];
  let mockStore;
  let store;
  let wrapper;
  beforeEach(() => {
    mockStore = configureStore(middlewares);
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        <PostVote />
      </Provider>
    );
  });

  it('Should render buttons & score', () => {
    const postUpVote = wrapper.find(PostUpVoteButton);
    const postScore = wrapper.find(PostVoteScore);
    const postDownVote = wrapper.find(PostDownVoteButton);
    expect(postUpVote.exists()).toBeTruthy();
    expect(postScore.exists()).toBeTruthy();
    expect(postDownVote.exists()).toBeTruthy();
  });
  it('Should dispatch Upvote action on Click', () => {
    const postUpVote = wrapper.find(PostUpVoteButton);
    postUpVote.simulate('click');
    expect(store.getActions()).toEqual([increaseScore()]);
  });
  it('Should dispatch Downvote action on Click ', () => {
    const postDownVote = wrapper.find(PostDownVoteButton);
    postDownVote.simulate('click');
    expect(store.getActions()).toEqual([decreaseScore()]);
  });
});
