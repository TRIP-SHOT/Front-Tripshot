<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { KakaoMap } from 'vue3-kakao-maps';

const markerList = ref([
  {
    lat: "36.34",
    lng: "127.77"
  }
]);

const fetchMarkerData = async () => {
  try {
    const response = await axios.get('http://3.37.57.139:8080/boards');
    if (response.data.status === 'OK') {
      const data = response.data.data;
      markerList.value = data.map(post => ({
        lat: post.latitude,
        lng: post.longitude,
      }));
      console.log("Marker list updated:", markerList.value);
    } else {
      console.error('데이터를 가져오는 중 오류 발생:', response.data.message);
    }
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error);
  }
};

onMounted(() => {
  fetchMarkerData();
});

</script>

<template>
  <KakaoMap 
    :lat="36.34" 
    :lng="127.77" 
    :level="14" 
    :markerCluster="{ markers: markerList }" 
  />
</template>

<style scoped>
/* 스타일 정의 */
</style>
