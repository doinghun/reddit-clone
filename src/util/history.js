import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

export const setPath = (pathname) => {
  history.push({ pathname, search: history.location.search });
};
