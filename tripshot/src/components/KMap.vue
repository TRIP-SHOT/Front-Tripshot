<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
const coordinate = {
  lat: 37.566826,
  lng: 126.9786567
};

const markerList = [
  {
    lat: 37.27943075229118,
    lng: 127.01763998406159
  },
  {
    lat: 37.55915668706214,
    lng: 126.92536526611102
  },
  {
    lat: 35.13854258261161,
    lng: 129.1014781294671
  },
  {
    lat: 37.55518388656961,
    lng: 126.92926237742505
  },
  {
    lat: 35.20618517638034,
    lng: 129.07944301057026
  },
  {
    lat: 37.561110808242056,
    lng: 126.9831268386891
  },
  {
    lat: 37.561110808242056,
    lng: 126.9831268386891
  },
  {
    lat: 37.561110808242056,
    lng: 126.9831268386891
  },
];
</script>

<template>
  <KakaoMap :lat="36.34" :lng="127.77" :level="14" :markerCluster="{ markers: markerList }" />
  <!-- <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
  </KakaoMap> -->
</template>