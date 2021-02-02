import axios from 'util/axios';

export function getPosts(category) {
  return axios
    .get('r/' + category + '.json?limit=25')
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data.data.children.map(
          ({
            data: { title, author, num_comments, selftext, id, score, created },
          }) => ({ title, author, num_comments, selftext, id, score, created })
        );
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
