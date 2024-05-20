<script setup>
import Login from "@/components/Login.vue"
import Layout from "../components/layout/Layout.vue"
</script>

<template>
      <div class ="background">
      <div class = "row">
            <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">🏖️ 로그인 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-white-75 mb-4">로그인을 해주세요!</p>
                </div>
                <Login></Login>
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

.background {
  position: relative;
  background-image: url('@/assets/background/back1.jpg');
  background-size: cover;
  background-position: center;
}

</style>
