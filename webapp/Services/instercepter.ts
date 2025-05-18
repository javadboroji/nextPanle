import axios, { AxiosResponse } from "axios";
import nookies from "nookies";
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = "1234";
  return config;
});
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    let errorStatus = error.response.status;
    if (errorStatus === 401) {
      window.location.href = "dashboard/login";
    }
    return Promise.reject(error);
  }
);
export default instance;