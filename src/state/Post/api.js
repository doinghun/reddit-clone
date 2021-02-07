import { axios } from 'util/api';

const limit = 25;

const extractDataHelper = (dataObj) => {
  const data = dataObj.children.map(
    ({
      data: {
        title,
        author,
        num_comments,
        selftext,
        id,
        score,
        created,
        name,
        preview,
      },
    }) => ({
      title,
      author,
      num_comments,
      selftext,
      id,
      score,
      created,
      name,
      preview,
      local_score: 0,
      upVoted: false,
      downVoted: false,
    })
  );
  return {
    after: dataObj.after,
    data: data,
  };
};

export function getPosts(param) {
  const { subreddit, sortBy } = param;
  const queryParam = sortBy
    ? 'r/' + subreddit + '/' + sortBy + '.json?limit=' + limit
    : 'r/' + subreddit + '.json?limit=' + limit;
  return axios
    .get(queryParam)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return extractDataHelper(res.data.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function getMorePosts(param) {
  const { subreddit, lastPostID } = param;
  return axios
    .get('r/' + subreddit + '.json?limit=' + limit + '&after=' + lastPostID)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return extractDataHelper(res.data.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
