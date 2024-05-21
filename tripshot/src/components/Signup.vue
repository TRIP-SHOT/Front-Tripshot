<template>
  <div>
    <div class="container">
      <div class="input-form-background row">
        <div class="input-form col-md-7 mx-auto my-auto mb-5">
          <form class="validation-form" @submit="handleSignup">
            <div class="mb-3">
              <label for="userId">아이디</label>
              <input type="text" class="form-control" id="userId" v-model="userId" placeholder="아이디를 입력해주세요." required>
              <div class="invalid-feedback">아이디를 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="nickname">닉네임</label>
              <input type="text" class="form-control" id="nickname" v-model="nickname" placeholder="닉네임을 입력해주세요." required>
              <div class="invalid-feedback">닉네임을 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="password">비밀번호</label>
              <input type="password" class="form-control" id="password" v-model="password" placeholder="비밀번호를 입력해주세요." required>
              <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="email">이메일</label>
              <input type="email" class="form-control" id="email" v-model="email" placeholder="youremail@naver.com" required>
              <div class="invalid-feedback">이메일을 입력해주세요.</div>
            </div>
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="agreement" v-model="agreement" required>
              <label class="custom-control-label" for="agreement">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
            <div class="mb-4"></div>
            <div class="justify-content-center">
              <button class="btn btn-primary btn-lg btn-block" type="submit">가입 완료</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authAxios from "../../utils/authAxios";

const router = useRouter();
const userId = ref('');
const nickname = ref('');
const password = ref('');
const address = ref('');
const email = ref('');
const agreement = ref(false);

const handleSignup = async (event) => {
  event.preventDefault();

  if (!userId.value || !nickname.value || !password.value || !email.value || !agreement.value) {
    alert('모든 필수 입력란을 작성하고, 개인정보 수집 및 이용에 동의해주세요.');
    return;
  }

  try {
    const response = await authAxios.post(`/join`, {
      userId: userId.value,
      nickname: nickname.value,
      password: password.value,
      address: address.value,
      email: email.value,
    });

    if (response.data.status === 'OK') {
      alert('회원가입 성공!');
      router.push('/login');
    } else {
      alert('회원가입 실패: ' + response.data.message);
    }
  } catch (error) {
    console.error('회원가입 요청 오류:', error);
    alert('회원가입 요청 중 오류가 발생했습니다.');
  }
};
</script>

<style scoped>
.input-form-background {
  background-color: #f8f9fa; 
  padding: 40px; 
}

.input-form {
  border-radius: 10px; 
  background-color: white;
  padding: 30px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
}

.validation-form input[type="text"],
.validation-form input[type="password"],
.validation-form input[type="email"] {
  border-radius: 10px;
}

.custom-checkbox {
  margin-top: 20px; 
}

.btn-primary {
  border-radius: 10px;
}
</style>