import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import App from '../App.js';

describe('App', () => {
  it('Should render correctly', () => {
    const initialState = {
      posts: {
        view: 'card',
        posts: [],
      },
    };
    const middlewares = [thunk];

    const mockStore = configureStore(middlewares);
    const store = mockStore(() => initialState);
    const app = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme('card')}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    const switches = app.find(Switch);
    expect(switches).toHaveLength(1);
    const routes = app.find(Route);
    expect(routes).toHaveLength(1);
  });
});
