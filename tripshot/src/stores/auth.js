import { defineStore } from 'pinia';
import authAxios from "../../utils/authAxios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await authAxios.post('/login', credentials);
        console.log(response.data);
        localStorage.setItem('userId', response.data.data.userId);
        localStorage.setItem('nickName', response.data.data.nickName);
        // 헤더에서 토큰을 추출합니다. 서버에 따라 헤더 이름이 다를 수 있습니다.
        const token = response.headers['Authorization'] || response.headers['authorization'];
        if (token) {
          this.token = token;
          localStorage.setItem('token', this.token);
          authAxios.defaults.headers.common['Authorization'] = `${this.token}`;
        } else {
          throw new Error('Token not found in response headers');
        }
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('nickName');
      delete authAxios.defaults.headers.common['Authorization'];
    },
    initializeAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        authAxios.defaults.headers.common['Authorization'] = `${this.token}`;
      }
    },
  },
});
