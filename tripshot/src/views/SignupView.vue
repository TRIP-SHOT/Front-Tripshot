<script setup>
import Signup from "@/components/Signup.vue"
</script>

<template>
  <div class = "background">
    <div class = "row">
      <div class="gx-4 gx-lg-5 justify-content-center align-items-center">
                  <div class="text-center">
                      <h2 class="text-white mt-0 title">🏖️ 회원가입 🏖️</h2>
                      <hr class="divider divider-light" />
                      <p class="text-white-75 mb-4 semititle">회원가입을 해주세요!</p>
                  </div>
                  <Signup></Signup>
              </div>
    </div>
  </div>
</template>

<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 10rem 0px 7.5rem;
}

.background{
      background-image: url('@/assets/background/back11.jpg');
      background-size: cover;
      background-position: center;
      width: 100%;
}

.title{
    font-size: 2.5rem;
    font-family:'WavvePADO';
  }

  .semititle{
    font-size: 1.5rem;
    font-family:'WavvePADO';
  }
</style>
