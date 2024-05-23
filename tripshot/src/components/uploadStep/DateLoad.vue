<template>
    <div class = "row">
     <div style = "margin-bottom: 3rem;">
     <h2 class="text-center mt-0"> 언제 가셨나요? </h2>
    </div>
      <input type="date" v-model="shotDate" />
      <select v-model="season">
        <option value="">계절 선택</option>
        <option value="봄">봄</option>
        <option value="여름">여름</option>
        <option value="가을">가을</option>
        <option value="겨울">겨울</option>
      </select>
      <select v-model="weather">
        <option value="">날씨 선택</option>
        <option value="맑음">맑음</option>
        <option value="흐림">흐림</option>
        <option value="눈">눈</option>
        <option value="비">비</option>
      </select>
      <button @click="nextStep">다음</button>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useDateStore } from '@/stores/dateStore';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const dateStore = useDateStore();
  const shotDate = ref('');
  const season = ref('');
  const weather = ref('');
  
  const nextStep = () => {

  if (shotDate.value && season.value && weather.value) {
    dateStore.setShotDate(shotDate.value); 
    dateStore.setSeason(season.value);
    dateStore.setWeather(weather.value);
    // console.log("날짜 저장:", shotDate.value, "계절:", season.value, "날씨:", weather.value);
    router.push('/contentload');
  } else {
    alert('모든 정보를 입력해주세요!');
  }
};
</script>

<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 10rem 0px 7.5rem;
}

</style>

  
  