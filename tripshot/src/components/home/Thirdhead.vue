<template>
  <div class = "masthead">
    <section class="page-section bg-primary">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0 title">🏖️ 주변 관광지 검색 🏖️</h2>
            <a class="btn btn-light btn-xl semititle" @click="goToPost">더보기</a>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4 semititle">지도로 검색해보세요!</p>
            <div calss = "flex-container">
              <RecommandKMap></RecommandKMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </template>
  
  <script setup>
  import RecommandKMap from '../RecommandKMap.vue'
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const goToPost = () => {
    router.push('/recommand');
  };
  
  </script>
  
  <style scoped>
  .flex-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin-top: 3rem;
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
  
