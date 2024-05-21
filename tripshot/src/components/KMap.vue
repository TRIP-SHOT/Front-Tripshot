<template>

  <KakaoMap :lat="36.34" :lng="127.77" :level="14" :markerCluster="{ markers: markerList }" />

</template>

<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
import dataAxios from '../../utils/dataAxios';

// 로컬 스토리지에서 마커 리스트를 불러오는 함수
const loadMarkersFromLocalStorage = () => {
  const savedMarkers = localStorage.getItem('markerList');
  return savedMarkers ? JSON.parse(savedMarkers) : [];
};

// 마커 리스트를 로컬 스토리지에 저장하는 함수
const saveMarkersToLocalStorage = (markers) => {
  localStorage.setItem('markerList', JSON.stringify(markers));
};

const markerList = reactive(loadMarkersFromLocalStorage());

const fetchMarkerData = async () => {
  try {
    const response = await dataAxios.get('/boards');
    if (response.data.status === 'OK') {
      const data = response.data.data;
      // 새로운 데이터를 반영하기 전에 기존 데이터를 모두 제거
      markerList.splice(0, markerList.length);
      // 새로운 데이터를 추가
      data.forEach(post => {
        markerList.push({
          lat: post.latitude,
          lng: post.longitude,
        });
      });
      console.log("좌표:", markerList);
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

// markerList의 변화를 감시하고 로컬 스토리지에 저장
watch(markerList, (newList) => {
  saveMarkersToLocalStorage(newList);
}, { deep: true });

</script>

<style scoped>
</style>
