<template>
  <div class="row">
    <div style="margin-bottom: 3rem;">
      <h2 class="text-center mt-0">어디로 가셨나요?</h2>
    </div>
    <div>
      <input type="text" v-model="query" placeholder="위치를 검색하세요" @keyup.enter="searchPlaces" />
      <button @click="searchPlaces">검색</button>
    </div>
    <div id="map" style="width: 100%; height: 400px; margin-top: 1rem;"></div>
    <input type="text" v-model="locationName" placeholder="상세 주소" />
    <div>{{ address }}</div>
    <input type="text" v-model="spot" placeholder="상세 위치 정보를 입력하세요. ex) 편의점 옆" />
    <button @click="nextStep">다음</button>
  </div>
</template>

  
<script setup>
import { ref, onMounted } from 'vue';
import { usePlaceStore } from '@/stores/placeStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const placeStore = usePlaceStore();
const locationName = ref('');
const spot = ref('');
const address = ref('');
const query = ref('');
let map, ps, marker, geocoder;

onMounted(() => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.5662952, 126.97794509999994),
    level: 5,
  };
  map = new kakao.maps.Map(container, options);

  marker = new kakao.maps.Marker({
    position: options.center,
    map: map,
  });

  geocoder = new kakao.maps.services.Geocoder();
  ps = new kakao.maps.services.Places();

  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    const latlng = mouseEvent.latLng;
    marker.setPosition(latlng);
    placeStore.setLatitude(latlng.getLat());
    placeStore.setLongitude(latlng.getLng());
    console.log("위도:", latlng.getLat());
    console.log("경도:", latlng.getLng());

    geocoder.coord2Address(latlng.getLng(), latlng.getLat(), function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        address.value = result[0].address.address_name;
      }
    });
  });
});

const searchPlaces = () => {
  const callback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const bounds = new kakao.maps.LatLngBounds();
      for (let i = 0; i < result.length; i++) {
        const place = result[i];
        displayMarker(place);
        bounds.extend(new kakao.maps.LatLng(place.y, place.x));
      }
      map.setBounds(bounds);
    }
  };
  ps.keywordSearch(query.value, callback);
};

const displayMarker = (place) => {
  const position = new kakao.maps.LatLng(place.y, place.x);
  const marker = new kakao.maps.Marker({
    position: position,
    map: map,
  });
  kakao.maps.event.addListener(marker, 'click', function () {
    marker.setPosition(position);
    placeStore.setLatitude(place.y);
    placeStore.setLongitude(place.x);
    address.value = place.address_name || place.road_address_name || place.place_name;
    locationName.value = place.place_name;
  });
};

const nextStep = () => {
  if (locationName.value && spot.value) {
    placeStore.setLocationName(locationName.value);
    placeStore.setSpot(spot.value);
    router.push('/dateload');
  } else if (locationName.value) {
    alert('세부 장소를 입력해주세요!');
  } else if (spot.value) {
    alert('장소를 선택해주세요!');
  } else {
    alert('장소와 세부 장소를 입력해주세요!');
  }
};
</script>


<style scoped>
.row {
  width: 77.5rem;
  margin: 0px auto;
  padding: 10rem 0px 7.5rem;
}
</style>



