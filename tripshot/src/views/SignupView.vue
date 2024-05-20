<script setup>
import Signup from "@/components/Signup.vue"
</script>

<template>
  <div class = "background">
  <div class = "row">
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">🏖️ 회원가입 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-white-75 mb-4">회원가입을 해주세요!</p>
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
      background-image: url('@/assets/background/back4.jpg');
      background-size: cover;
      background-position: center;
      width: 100%;
}

</style>
