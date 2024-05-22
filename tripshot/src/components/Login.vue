<template>
  <div>
    <main class="text-center">
      <div id="container">
        <div id="loginBox" class="mt-5 p-4 rounded" style="background-color: #f8f9fa;">
          <form @submit.prevent="handleLogin">
            <div id="inputBox" style="font-weight: bold;">
              <div class="input-form-box mb-3">
                <span class="fw-bold">아이디</span>
                <input type="text" class="form-control" v-model="credentials.userId" required>
              </div>
              <div class="input-form-box mb-3">
                <span class="fw-bold">비밀번호</span>
                <input type="password" class="form-control" v-model="credentials.password" required>
              </div>
            </div>
            <div class="button-login-box">
              <button type="submit" class="btn btn-primary btn-block" style="border-radius: 10px; margin: 5px;">로그인</button>
              <button type="button" class="btn btn-primary btn-block" style="border-radius: 10px; margin: 5px;" @click="goToSignup">회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const router = useRouter();
const authStore = useAuthStore();

const credentials = ref({ userId: '', password: '' });

const goToSignup = () => {
  router.push('/signup');
};

const handleLogin = async () => {
  try {
    await authStore.login(credentials.value);
    router.push('/');
  } catch (error) {
    alert('로그인 실패');
  }
};
</script>

<style scoped>
#loginBox {
  width: 50%;
  margin: 0 auto;
}

.input-form-box input {
  border-radius: 10px;
}

.button-login-box button {
  border-radius: 10px;
}
</style>
