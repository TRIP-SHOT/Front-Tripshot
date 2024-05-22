<script setup>
import RecommandKMap from '../components/RecommandKMap.vue'
</script>

<template>
    <div class = "background">
        <div class="row">
            <div class="gx-4 gx-lg-25 justify-content-center align-items-center">
                <div class="text-center">
                    <h2 class="text-white mt-0 title">🏖️ 주변 관광지 검색 🏖️</h2>
                    <hr class="divider divider-light" />
                    <p class="text-white-75 mb-4 semititle">내가 여행 갈 여행지의 관광지를 추천 받아보세요!</p>
                    
                    <div style="margin-top: 2rem;"><RecommandKMap ></RecommandKMap></div>
                </div>
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
        background-image: url('@/assets/background/back6.jpg');
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
  