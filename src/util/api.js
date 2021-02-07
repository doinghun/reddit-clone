import axios from 'axios';

const baseURL = 'https://www.reddit.com/';

const axiosConfig = axios.create({
  baseURL,
});

const decoded = (encoded) => encoded.replace(/&amp;/g, '&');

export { axiosConfig as axios, decoded };
