<template>
    <div class="masthead">
        <!-- Services-->
        <section class="page-section bg-light" id="services">
            <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-black mt-0 title">🏖️ 인증샷 지도 🏖️</h2>
            <a class="btn btn-light btn-xl semititle" @click="goToPost">더보기</a>
            <hr class="divider divider-light" />
            <p class="text-black-75 mb-4 semititle" >사용자들이 올린 인증샷 개수를 확인해보세요!</p>
            <div class="flex-container" style="margin-top: 3rem;">
              <KMap></KMap>
            </div>
          </div>
        </div>
        </section>
    </div>
</template>

<script setup>
import KMap from '../KMap.vue'
import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const goToPost = () => {
    router.push('/proofshot');
  };
</script>

<style scoped>
  .masthead{
    background-color: white;
  }
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