<template>
  <div>
    <div class="container">
      <div class="input-form-background row">
        <div class="input-form col-md-7 mx-auto my-auto mb-5">
          <form class="validation-form" @submit="handleSignup">
            <div class="mb-3">
              <div class="mb-3">
              <label for="name">이름</label>
              <input type="name" class="form-control" id="name" v-model="name" placeholder="이름을 입력해주세요." required>
              <div class="invalid-feedback">이름을 입력해주세요.</div>
            </div>
              <label for="userId">아이디</label>
              <input type="text" class="form-control" id="userId" v-model="userId" placeholder="아이디를 입력해주세요." required>
              <div class="invalid-feedback">아이디를 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="password">비밀번호</label>
              <input type="password" class="form-control" id="password" v-model="password" placeholder="비밀번호를 입력해주세요." required>
              <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="nickname">닉네임</label>
              <input type="text" class="form-control" id="nickname" v-model="nickname" placeholder="닉네임을 입력해주세요." required>
              <div class="invalid-feedback">닉네임을 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="email">이메일 주소 (선택)</label>
              <input type="text" class="form-control" id="email" v-model="email" placeholder="my2mail@naver.com">
              <div class="invalid-feedback">이메일 주소를 입력해주세요.</div>
            </div>
            
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="agreement" v-model="agreement" required>
              <label class="custom-control-label" for="agreement"> 개인정보 수집 및 이용에 동의합니다.</label>
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
import dataAxios from "../../utils/dataAxios";

const router = useRouter();
const userId = ref('');
const nickname = ref('');
const password = ref('');
const email = ref('');
const name = ref('');
const agreement = ref(false);

const handleSignup = async (event) => {
  event.preventDefault();

  if (!userId.value || !nickname.value || !password.value || !name.value || !agreement.value) {
    alert('모든 필수 입력란을 작성하고, 개인정보 수집 및 이용에 동의해주세요.');
    return;
  }
  //로그
  console.log('회원가입 데이터:', {
    userId: userId.value,
    password: password.value,
    nickname: nickname.value,
    name: name.value,
    email: email.value
  });
 
  try {
    const response = await dataAxios.post(`/join`, {
      userId: userId.value,
      password: password.value,
      nickname: nickname.value,
      name: name.value,
      email: email.value
    });
    if (response.data.status === 'OK') {
      alert('회원가입 성공!');
      router.push('/postview');
    } else {
      alert('회원가입 실패: ' + response.data.message);
    }
  } catch (error) {
    console.error('회원가입 요청 오류:', error);
    alert('회원가입 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
};
</script>

<style scoped>
.input-form-background {
  /* background-color: #f8f9fa;  */
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
.validation-form input[type="name"] {
  border-radius: 10px;
}

.custom-checkbox {
  margin-top: 20px; 
}

.btn-primary {
  border-radius: 10px;
}
</style>