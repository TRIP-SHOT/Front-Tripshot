<template>
      <div class ="background">
      <div class = "row">
        
            <div class="gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="text-center">
                    <h2 class="text-dark mt-0 title">🏖️ 로그인 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-dark-75 mb-4 semititle">로그인을 해주세요!</p>
                </div>
                <Login></Login>
            </div>
            
      </div>
</div>
</template>

<script setup>
import Login from "@/components/Login.vue"
import Layout from "../components/layout/Layout.vue"
</script>


<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 10rem 0px 7.5rem;

}

.background {
  position: relative;
  background-image: url('@/assets/background/back9.jpg');
  background-size: cover;
  background-position: center;
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
