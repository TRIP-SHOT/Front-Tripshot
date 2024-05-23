<template>
   <div class="background">
    <div class="row">
        
      <!-- 1단계: 이미지 업로드 -->
      <div v-if="currentStep === 1">
        <ImgLoad />
      </div>
      
      <!-- 2단계: 장소 선택 -->
      <div v-if="currentStep === 2">
        <PlaceLoad />
      </div>
      
      <!-- 3단계: 날짜 선택 -->
      <div v-if="currentStep === 3">
        <DateLoad />
      </div>
      
      <!-- 4단계: 내용 입력 -->
      <div v-if="currentStep === 4">
        <ContentLoad />
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ImgLoad from '../components/uploadStep/ImgLoad.vue';
  import PlaceLoad from '../components/uploadStep/PlaceLoad.vue';
  import DateLoad from '../components/uploadStep/DateLoad.vue';
  import ContentLoad from '../components/uploadStep/ContentLoad.vue';
  
  const currentStep = ref(1); // 현재 진행 중인 단계
  
  // 다음 단계로 이동하는 함수
  const nextStep = () => {
    currentStep.value += 1;
  };
  
  // 이전 단계로 이동하는 함수
  const prevStep = () => {
    currentStep.value -= 1;
  };
  </script>
  
  <style scoped>
  
.background {
  background-image: url('@/assets/background/back12.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-family:'WavvePADO';
}
.row {
  width: 90rem;
  margin: 0px auto;
  padding: 5rem 0px 7.5rem;
}
  </style>
  