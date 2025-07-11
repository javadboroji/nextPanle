import axios, { AxiosResponse } from "axios";
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const errorStatus = error?.response?.status;
    if (errorStatus === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default instance;