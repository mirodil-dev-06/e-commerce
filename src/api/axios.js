import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {'Content-Type': 'application/json'},
  timeout: 10000
})

instance.interceptors.response.use((response) => {
    if(response) return response
},
(error) => {
  if (error?.response?.status === 401 || error?.response?.status === 403) {
      store.dispatch({type: "LOGOUT"});
  }
  return Promise.reject(error);
})

export { instance };
