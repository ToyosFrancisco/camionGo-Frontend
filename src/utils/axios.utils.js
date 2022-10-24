import axios from "axios";


const ajax = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
  });
  
  ajax.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
  
      if (!!token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
  
    (error) => {
      return Promise.reject(error);
    }
  );
  
  ajax.interceptors.response.use((response) => {
    if (
      response.status === 401//  && response.config.url !== '/admin'
    ) {
      localStorage.removeItem('token');
      window.location = '/';
    } else if (response.status === 403) {
    } else if (response.status === 500) {
    }
  
    return response;
  });
  
  export default ajax;