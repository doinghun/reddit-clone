import axios from 'util/axios';

const limit = 25;

const extractDataHelper = (arr) => {
  return arr.map(
    ({
      data: { title, author, num_comments, selftext, id, score, created, name },
    }) => ({ title, author, num_comments, selftext, id, score, created, name })
  );
};

export function getPosts(state) {
  console.log(state);
  const queryParam = state.sortBy
    ? 'r/' + state.category + '/' + state.sortBy + '.json?limit=' + limit
    : 'r/' + state.category + '.json?limit=' + limit;
  console.log(queryParam);
  return axios
    .get(queryParam)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return extractDataHelper(res.data.data.children);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function getMorePosts(category, lastPostID) {
  return axios
    .get('r/' + category + '.json?limit=' + limit + '&after=' + lastPostID)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return extractDataHelper(res.data.data.children);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
