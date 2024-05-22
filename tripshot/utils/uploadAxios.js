import axios from "axios"

const uploadAxios = axios.create({
    baseURL: import.meta.env.VITE_UPLOAD_API_URL,
    headers: {
        "Content-Type" : "multipart/form-data",
      },
  });

// 요청 인터셉터 추가
uploadAxios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
export default uploadAxios;