//axios 객체 관련 설정
//사용자 정의 axios 객체 생성
//baseURL, Content type....
import axios from "axios"

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_DATA_API_URL,
    headers: {
        'Content-Type': 'application/json',
      },
  });
  
// 요청 인터셉터 추가
authAxios.interceptors.request.use(
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
  
  export default authAxios;
