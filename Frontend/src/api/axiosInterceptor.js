import axios from "axios";

const api = axios.create({

baseURL:import.meta.env.VITE_BASEURL
// baseURL:"https://connectify-1swz.onrender.com/api/"

});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
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