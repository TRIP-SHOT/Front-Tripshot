<template>
  <KakaoMap 
    :lat="36.34" 
    :lng="127.77" 
    :level="14" 
    :markerCluster="{ markers: markerList }" 
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
import dataAxios from '../../utils/dataAxios';

const markerList = ref([
  {
    lat: "36.34",
    lng: "127.77"
  }
]);

const fetchMarkerData = async () => {
  try {
    const response = await dataAxios.get('/boards');
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



<style scoped>

</style>
