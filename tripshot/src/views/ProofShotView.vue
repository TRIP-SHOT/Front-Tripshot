<script setup>
import KMap from '../components/KMap.vue'
</script>

<template>
    <div class="row">
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-black mt-0">🏖️ 인증샷 지도 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-black-75 mb-4">사용자들이 올린 인증샷 개수를 확인해보세요!</p>
                    <div style="margin-top: 3rem;"><KMap></KMap></div>
                    
                </div>
    </div>
</div>
</template>
  
<style scoped>
  .row{
      width: 77.5rem;
      margin: 0px auto;
      padding: 5rem 0px 7.5rem;
  }
  
  </style>
  