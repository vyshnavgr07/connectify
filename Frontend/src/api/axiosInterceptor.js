import axios from "axios";

const api = axios.create({
baseURL:"http://localhost:4444/api/"
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    console.log(token,"tokennennennennenne")
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; 
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;