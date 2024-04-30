import axios from "axios";

const baseUrl = "http://localhost:3100/data";

export default {
  fetchData(category) {
    return axios.get(`${baseUrl}/${category}`);
  },
  deleteData(category, index) {
    return axios.delete(`${baseUrl}/${category}/${index}`);
  },
  deleteAllData(category) {
    return axios.delete(`${baseUrl}/${category}`);
  },
};
