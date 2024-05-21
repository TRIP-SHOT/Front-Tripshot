import { defineStore } from 'pinia';
import authAxios from "../../utils/authAxios";
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null);

  const login = async (credentials) => {
    try {
      const response = await authAxios.post('/login', credentials);
        token.value = response.data.token;
        console.log("로그인 성공!")
    //   authAxios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
    } catch (error) {
      console.error('로그인 실패:', error);
      throw error;
    }
  };

  const logout = () => {
    token.value = null;
    delete authAxios.defaults.headers.common['Authorization'];
  };

  return {
    token,
    login,
    logout,
  };
});
