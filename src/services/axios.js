import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "https://poshbo-server.onrender.com",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const adminToken = Cookies.get("adminToken");
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
