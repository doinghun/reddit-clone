import axios from 'util/axios';

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

export function getPosts(state) {
  const queryParam = state.sortBy
    ? 'r/' + state.category + '/' + state.sortBy + '.json?limit=' + limit
    : 'r/' + state.category + '.json?limit=' + limit;
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

export function getMorePosts(category, lastPostID) {
  return axios
    .get('r/' + category + '.json?limit=' + limit + '&after=' + lastPostID)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return extractDataHelper(res.data.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
