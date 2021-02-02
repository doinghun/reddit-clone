import axios from 'axios';

const baseURL = 'https://www.reddit.com/';
export default axios.create({
  baseURL,
});
