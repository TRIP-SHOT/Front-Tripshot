<script setup>
</script>

<template>
  <div>
    <h4 class="mb-3 text-center">회원가입</h4>
    <div class="container">
      <div class="input-form-background row">
        <div class="input-form col-md-7 mx-auto my-auto mb-5">
          
          <form class="validation-form">
            <div class="mb-3">
              <label for="nickname">아이디</label>
              <input type="text" class="form-control" id="id" placeholder="아이디를 입력해주세요." required>
              <div class="invalid-feedback">아이디를 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="name">닉네임</label>
              <input type="text" class="form-control" id="name" placeholder="닉네임을 입력해주세요." required>
              <div class="invalid-feedback">이름을 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="password">비밀번호</label>
              <input type="password" class="form-control" id="pw"  placeholder="비밀번호를 입력해주세요." required>
              <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
            </div>
            <div class="mb-3">
              <label for="address">주소<span class="text-muted">&nbsp;</span></label>
              <input type="text" class="form-control" id="address"  placeholder="주소를 입력해주세요.">
            </div>
            <div class="mb-3">
              <label for="email">이메일</label>
              <input type="email" class="form-control" id="email"  placeholder="youremail@naver.com" required>
              <div class="invalid-feedback">이메일을 입력해주세요.</div>
            </div>
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="agreement" required>
              <label class="custom-control-label" for="agreement">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
            <div class="mb-4"></div>
            <button class="btn btn-primary btn-lg btn-block" type="submit">가입 완료</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

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
