import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from 'util/history';
import Home from 'components/Home';
import theme from 'theme';

function App({ view }) {
  return (
    <ThemeProvider theme={theme(view)}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({ view: state.post.view });
export default connect(mapStateToProps)(App);
