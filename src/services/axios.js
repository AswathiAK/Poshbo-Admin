import axios from "axios";

const instance = axios.create({
  baseURL: 'https://www.mollacart.online',
   withCredentials: true
});

export default instance;