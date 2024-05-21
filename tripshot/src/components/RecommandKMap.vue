<template>
  <div>
    <main class="mb-4">
      <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="text-center">
              <div class="col-md-9 mx-auto">
                <div class="alert alert-primary mt-3 text-center fw-bold"
                     role="alert"
                     style="border: none; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                  전국 관광지 정보
                </div>
                <!-- 검색창 -->
                <form class="d-flex my-3" @submit.prevent="searchAttractions" role="search">
                  <!-- 지역 선택 -->
                  <select v-model="searchArea" class="form-select me-2" style="border-radius: 10px;">
                    <option value="0" selected>검색할 지역 선택</option>
                    <option v-for="sido in displayedSidos" :key="sido.sido_code" :value="sido.sido_code">
                      {{ sido.sido_name }}
                    </option>
                  </select>
                  <select v-model="searchGugun" class="form-select me-2" style="border-radius: 10px;">
                    <option value="0" selected>검색할 구/군 선택</option>
                    <option v-for="gugun in filteredGuguns" :key="gugun.gugun_code" :value="gugun.gugun_code">
                      {{ gugun.gugun_name }}
                    </option>
                  </select>
                  <!-- 관광지 유형 선택 -->
                  <select v-model="searchContentId" class="form-select me-2" style="border-radius: 10px;">
                    <option value="0" selected>관광지 유형</option>
                    <option value="12">관광지</option>
                    <option value="14">문화시설</option>
                    <option value="15">축제공연행사</option>
                    <option value="25">여행코스</option>
                    <option value="28">레포츠</option>
                    <option value="32">숙박</option>
                    <option value="38">쇼핑</option>
                    <option value="39">음식점</option>
                  </select>
                  <!-- 검색어 선택 -->
                  <input v-model="searchKeyword" class="form-control me-2" type="search" placeholder="검색어" aria-label="검색어"
                         style="border-radius: 10px;">

                  <button id="btn-search" class="btn btn-outline-primary align-items-center"
                          type="submit" style="width: 100px; white-space: nowrap; border-radius: 10px;">
                    검색
                  </button>
                </form>

                <div id="map" class="mt-3" style="width: 100%; height: 400px;"></div>
              </div>
              <div class="row mt-3" style="max-height: 400px; overflow-y: auto;">
                <table class="table table-striped" v-if="attractions.length > 0">
                  <thead>
                    <tr>
                      <th>대표이미지</th>
                      <th>관광지명</th>
                      <th>주소</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="attraction in attractions" :key="attraction.id">
                      <td><img :src="attraction.first_image || 'src/assets/img/noimg.jpg'" width="100"></td>
                      <td>{{ attraction.title }}</td>
                      <td>{{ attraction.addr1 }}</td>
                      <!-- <td>{{ attraction.LatLng }}</td> -->
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import dataAxios from "../../utils/dataAxios";

const searchKeyword = ref('');
const searchArea = ref(0);
const searchGugun = ref(0);
const searchContentId = ref(0);
const attractions = ref([]);
let map = null;
const markers = [];

const searchAttractions = async () => {
  try {
    const response = await dataAxios.get('/search', {
      params: {
        searchArea: searchArea.value,
        searchGugun: searchGugun.value,
        searchKeyword: searchKeyword.value,
        searchContentId: searchContentId.value
      },
    });
    attractions.value = response.data.data;
    clearMarkers();
    addMarkers();
    moveMapToMarker();
  } catch (error) {
    console.error("Error searching attractions:", error);
  }
};

const displayedSidos = ref([]);
const getDisplayedSidos = async () => {
  try {
    const response = await dataAxios.get('/sido');
    if (response.data.status === 'OK') {
      displayedSidos.value = response.data.data;
    } else {
      console.error("게시물 데이터를 가져오는 중 오류 발생:", response.data.message);
    }
  } catch (error) {
    console.error("게시물 데이터를 가져오는 중 오류 발생:", error);
  }
};

const displayedGuguns = ref([]);
const getDisplayedGuguns = async () => {
  try {
    const response = await dataAxios.get('/gugun');
    if (response.data.status === 'OK') {
      displayedGuguns.value = response.data.data;
    } else {
      console.error("게시물 데이터를 가져오는 중 오류 발생:", response.data.message);
    }
  } catch (error) {
    console.error("게시물 데이터를 가져오는 중 오류 발생:", error);
  }
};

const filteredGuguns = ref([]);

watch(searchArea, (newValue) => {
  if (newValue === '0') {
    filteredGuguns.value = [];
  } else {
    filteredGuguns.value = displayedGuguns.value.filter(gugun => gugun.sido_code === newValue);
  }
});

const clearMarkers = () => {
  markers.forEach(marker => marker.setMap(null));
  markers.length = 0;
};

const moveMapToMarker = () => {
  if (markers.length === 0) return; // 마커가 없으면 함수 종료

  let bounds = new kakao.maps.LatLngBounds(); // 영역을 나타내는 객체 생성

  // 모든 마커의 좌표를 영역에 추가
  markers.forEach(marker => {
    bounds.extend(marker.getPosition());
  });

  // 마커가 하나일 때는 해당 마커의 좌표를 중심으로 이동
  if (markers.length === 1) {
    map.setCenter(bounds.getCenter());
  } else {
    // 여러 마커일 때는 모든 마커를 포함하는 영역의 중심으로 이동
    map.setBounds(bounds);
  }
};

const addMarkers = () => {
  attractions.value.forEach(attraction => {
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(attraction.latitude, attraction.longitude),
      map: map
    });
    markers.push(marker);
  });
};



onMounted(() => {
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}`;
  script.onload = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    map = new kakao.maps.Map(container, options);
  };
  document.head.appendChild(script);

  getDisplayedSidos();
  getDisplayedGuguns();
});

</script>


<style scoped>
.table td, .table th {
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
}

#map {
  width: 100%;
  height: 400px;
}

.table-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>
