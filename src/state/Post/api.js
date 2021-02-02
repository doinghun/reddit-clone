import axios from 'util/axios';

export function getPosts(category) {
  return axios.get('r/' + category + '.json?limit=25');
}
