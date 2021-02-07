import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { viewByCard, viewByClassic, viewByCompact } from 'state/Post/action';

import ViewBy from 'components/ViewOptions/ViewBy';
import {
  SelectWrapper,
  Dropdown,
} from 'components/ViewOptions/ViewBy/styledComponents';

describe('ViewBy', () => {
  const middlewares = [thunk];
  let mockStore;
  let store;
  let initialState;
  beforeAll(() => {
    mockStore = configureStore(middlewares);
    store = mockStore();
    initialState = {
      post: { view: 'card' },
    };
  });

  it('Should render Dropdown', () => {
    const store = mockStore(() => initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ViewBy />
      </Provider>
    );
    const dropdownSelect = wrapper.find(Dropdown);
    const dropdownOption = wrapper.find(SelectWrapper).find('option');

    expect(dropdownSelect.exists()).toBeTruthy();
    expect(dropdownOption.exists()).toBeTruthy();
  });
  it('Should dispatch viewByCard action on Card option click', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ViewBy />
      </Provider>
    );
    wrapper.find('select').simulate('change', { target: { value: 'card' } });
    expect(store.getActions()).toEqual([viewByCard]);
  });
  it('Should dispatch viewByClassic action on Classic option click', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ViewBy />
      </Provider>
    );
    wrapper.find('select').simulate('change', { target: { value: 'classic' } });
    expect(store.getActions()).toEqual([viewByClassic]);
  });
  it('Should send viewByCompact action on Compact option click', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ViewBy />
      </Provider>
    );
    wrapper.find('select').simulate('change', { target: { value: 'compact' } });
    expect(store.getActions()).toEqual([viewByCompact]);
  });
});
