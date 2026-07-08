import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_PARSE_BASE_URL,
  headers: {
    "X-Parse-Application-Id":
      process.env.REACT_APP_PARSE_APP_ID,
    "X-Parse-REST-API-Key":
      process.env.REACT_APP_PARSE_REST_API_KEY,
  },
});

export default api;