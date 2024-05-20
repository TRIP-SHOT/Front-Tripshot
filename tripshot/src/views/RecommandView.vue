<script setup>
import RecommandKMap from '../components/RecommandKMap.vue'
</script>

<template>
    <div class="row">
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-black mt-0">🏖️ 주변 관광지 검색 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-black-75 mb-4">내가 여행 갈 여행지의 관광지를 추천 받아보세요!</p>
                    <div style="margin-top: 3rem;"><RecommandKMap></RecommandKMap></div>
                    
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
  