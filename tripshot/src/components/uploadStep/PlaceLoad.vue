<template>
    <div class = "row">
        <div style = "margin-bottom: 3rem;">
        <h2 class="text-center mt-0"> 어디로 가셨나요? </h2>
        </div>
      <div id="map" style="width: 100%; height: 400px;"></div>
      <input type="text" v-model="spot" placeholder="상세 지역 정보를 입력하세요" />
      <button @click="nextStep">다음</button>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { usePlaceStore } from '@/stores/placeStore';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const placeStore = usePlaceStore();
  const spot = ref('');
  
  onMounted(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5662952, 126.97794509999994),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);
  
    const marker = new kakao.maps.Marker({
      position: options.center,
    });
  
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      const latlng = mouseEvent.latLng;
      marker.setPosition(latlng);
      placeStore.setLatitude(latlng.getLat()); // Store에 위도 임시 저장
      placeStore.setLongitude(latlng.getLng()); // Store에 경도 임시 저장
        // 위도와 경도를 console에 출력
        console.log("위도:", latlng.getLat());
        console.log("경도:", latlng.getLng());
    });
    
  });
  
  const nextStep = () => {
     // Store에 spot 값 임시 저장
    placeStore.setSpot(spot.value);
    console.log("장소 저장", spot.value)
    
    // 다음 단계로 이동
    router.push('/dateload');
  };
</script>

<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 10rem 0px 7.5rem;
}

</style>

