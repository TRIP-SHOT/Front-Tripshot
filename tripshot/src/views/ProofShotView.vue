<script setup>
import KMap from '../components/KMap.vue'
</script>

<template>
    <div class = "background">
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center justify-content-center ">
                    <h2 class="text-dark mt-0 title">🏖️ 인증샷 지도 🏖️</h2>
                    <hr class="divider divider-light"/>
                    <p class="text-dark-75 mb-4 semititle">사용자들이 올린 인증샷 개수를 확인해보세요!</p>
                    <div style="margin-top: 3rem;"><KMap></KMap></div>
                    
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
      background-image: url('@/assets/background/back13.jpg');
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
  