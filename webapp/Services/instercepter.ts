// import axios, { AxiosResponse } from "axios";
// import nookies from "nookies";
// const cookies = new Cookies();
// const token = cookies.get("_token");
// const instance = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//     accept: "application/json",
//   },
// });

// instance.interceptors.request.use((config) => {
//   config.headers.authorization = token;
//   return config;
// });
// instance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error) => {
//     let errorStatus = error.response.status;
//     if (errorStatus === 401) {
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
// export default instance;