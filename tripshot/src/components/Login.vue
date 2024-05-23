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
            <div class="findbtn">
            <button type="button" class="btn btn-block" style="border-radius: 10px; margin: 5px;" @click="openModal">비밀번호를 잊으셨나요?</button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <!-- 비밀번호 재설정 모달 -->
    <div class="modal fade" id="resetPasswordModal" tabindex="-1" aria-labelledby="resetPasswordModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="resetPasswordModalLabel">비밀번호 재설정</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="resetEmail" class="form-label">아이디</label>
              <input type="email" class="form-control" id="resetEmail" v-model="resetEmail" required>
            </div>
            <div class="mb-3">
              <label for="newPassword" class="form-label">새 비밀번호</label>
              <input type="password" class="form-control" id="newPassword" v-model="newPassword" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" @click="resetPassword">비밀번호 재설정</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const router = useRouter();
const authStore = useAuthStore();

const credentials = ref({ userId: '', password: '' });
const resetEmail = ref('');
const newPassword = ref('');

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

// 모달 열기 함수
const openModal = () => {
  const resetPasswordModal = new bootstrap.Modal(document.getElementById('resetPasswordModal'));
  resetPasswordModal.show();
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

.findbtn{
  display: flex;
  justify-content: right;

}

.modal-dialog{
  display: flex;
  height:100%;
  justify-content: center;
  align-items: center;
}

.modal{
   -ms-overflow-style: none;
}
.modal::-webkit-scrollbar{
  display:none;
}
</style>
