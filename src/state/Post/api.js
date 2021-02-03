import axios from 'util/axios';

const extractDataHelper = (arr) => {
  return arr.map(
    ({
      data: { title, author, num_comments, selftext, id, score, created, name },
    }) => ({ title, author, num_comments, selftext, id, score, created, name })
  );
};

export function getPosts(category) {
  return axios
    .get('r/' + category + '.json?limit=25')
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
    .get('r/' + category + '.json?limit=25' + '&after=' + lastPostID)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return extractDataHelper(res.data.data.children);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
