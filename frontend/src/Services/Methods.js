import Axios from 'axios';

// import LocalStorage from '../Utils';

// const userData = LocalStorage.GET('userData');

Axios.defaults.baseURL = 'http://localhost:3001/';
// Axios.defaults.headers.common.Authorization = userData.AUTH_TOKEN;

const POST = (url, body) => Axios.post(url, body)
  .then((response) => response)
  .catch(({ response }) => response);

const GET = (url) => Axios.get(url)
  .then((response) => response)
  .catch(({ response }) => response);

const PUT = (url, body) => Axios.put(url, body)
  .then((response) => response)
  .catch(({ response }) => response);

const DELETE = (url) => Axios.delete(url)
  .then((response) => response)
  .catch(({ response }) => response);

export default {
  POST,
  GET,
  PUT,
  DELETE,
};
