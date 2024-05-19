<script setup>
import KMap from '../components/KMap.vue'
</script>

<template>
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-black mt-0">🏖️ 주변 관광지 검색 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-white-75 mb-4">지도로 검색해보세요!</p>
                    <div style="margin-top: 3rem;"><KMap></KMap></div>
                    
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
  