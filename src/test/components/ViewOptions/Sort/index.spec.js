import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { fetchPostsRequest } from 'state/Post/action';
import Sort from 'components/ViewOptions/Sort';
import { Button } from 'components/ViewOptions/Sort/styledComponents';

describe('Sort', () => {
  const middlewares = [thunk];
  let mockStore;
  beforeEach(() => {
    mockStore = configureStore(middlewares);
  });
  it('Should render 3 SortButtons', () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    const sortButton = wrapper.find(Button);
    expect(sortButton).toHaveLength(3);
  });

  it('Should dispatch fetchPostsRequest upon clicking Hot button ', () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    const firstSortButton = wrapper.find(Button).at(0);
    const firstSortButtonText = firstSortButton.text();
    expect(firstSortButtonText).toEqual('Hot');
    firstSortButton.simulate('click');
    expect(store.getActions()).toEqual([fetchPostsRequest]);
  });

  it('Should dispatch fetchPostsRequest upon clicking New button ', () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    const secondSortButton = wrapper.find(Button).at(1);
    const secondSortButtonText = secondSortButton.text();
    expect(secondSortButtonText).toEqual('New');
    secondSortButton.simulate('click');
    expect(store.getActions()).toEqual([fetchPostsRequest]);
  });

  it('Should dispatch fetchPostsRequest upon clicking Top button ', () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    const thirdSortButton = wrapper.find(Button).at(2);
    const thirdSortButtonText = thirdSortButton.text();
    expect(thirdSortButtonText).toEqual('Top');
    thirdSortButton.simulate('click');
    expect(store.getActions()).toEqual([fetchPostsRequest]);
  });
});
