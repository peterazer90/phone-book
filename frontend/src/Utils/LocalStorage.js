const SET = (key, val) => localStorage.setItem(key, JSON.stringify(val));
const GET = (key) => JSON.parse(localStorage.getItem(key));
const REMOVE = (key) => localStorage.removeItem(key);

export default {
  SET,
  GET,
  REMOVE,
};
