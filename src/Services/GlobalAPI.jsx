import axios from "axios";

const BASE_URL = 'http://localhost:1337/api';

const getPost = () => {
  return axios.get(BASE_URL + '/blogs?populate=*');
};

export default {
  getPost,
};
