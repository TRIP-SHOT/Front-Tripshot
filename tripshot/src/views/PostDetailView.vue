<template>
  <div class="background">
    <!-- 게시글 내용 표시 -->
    <div v-if="postData" class="content">
      <div class="row">
        <div class="gx-4 gx-lg-5 justify-content-center align-items-center text-center">
                    <h2 class="text-black mt-0 realtitle">🏖️ 인증샷 상세 정보 🏖️</h2>
                    <hr class="divider divider-light" />
     
                </div>
        <div class = "title" style = "display: flex; justify-content: right;">
          <div style = "margin: 10px;">❤ {{ postData.heartCount }}</div>
          <div style = "margin: 10px;"> ◽ </div>
          <div style = "margin: 10px;">조회수 {{ postData.hit }}</div>
          </div>
        <div class="img-container">
            <img :src="postData.image" alt="이미지" class="img-fluid">
        </div>

        <div class="col-md-6">
          <div class="title">작성자</div>
          <div class="info-box">
            <div>{{postData.nickname}}</div>
          </div>
          <div class="title">제목</div>
          <div class="info-box">
            <div>{{postData.title}}</div>
          </div>
          <div class="title">내용</div>
          <div class="info-box">
            <div>{{postData.content}}</div>
          </div>
          <div class="title">촬영일</div>
          <div class="info-box">
            <div>{{ formatDate(postData.shotDate) }}</div>
          </div>
          <div class="title">계절</div>
          <div class="info-box">
            <div>{{ postData.season }}</div>
          </div>
          <div class="title">날씨</div>
          <div class="info-box">
            <div>{{ createemoji(postData.weather) }}</div>
          </div>

        </div>
        <div class="col-md-6">
          <div class="title">장소</div>
          <div class="info-box">
            <div>{{ postData.locationName }}</div>
          </div>
          <div class="title">장소 상세 설명</div>
          <div class="info-box">
            <div>{{ postData.spot }}</div>
          </div>
          <div class = "map-container">
            <kakao-map :lat="postData.latitude" :lng="postData.longitude" :show-control="true" class = "mapmarker">
              <KakaoMapMarker :lat="postData.latitude" :lng="postData.longitude" ></KakaoMapMarker>
            </kakao-map>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="postData && isOwner(postData.userId)">
      <div class="btn-group btn-center mt-3">
        <input type="button" class="btn btn-primary btn2" value="삭제" @click="customerDelete" />
        <input type="button" class="btn btn-primary btn2" value="수정" @click="customerUpdate({title, content, shotDate, season, weather, spot, locationName})" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import uploadAxios from "../../utils/uploadAxios";
import authAxios from "../../utils/authAxios";

const router = useRouter();
const postData = ref(null);

const userId = JSON.parse(localStorage.getItem('userId'));
const userData = userId ? parseInt(userId) : null;

// 페이지 로드 시 게시글 데이터 가져오기
onMounted(async () => {
  const postId = router.currentRoute.value.params.id;
  try {
    const response = await uploadAxios.get(`/${postId}`);
    if (response.data.status === 'OK') {
      postData.value = response.data.data;
    } else {
      console.error("게시글 상세 데이터를 가져오는 중 오류 발생:", response.data.message);
    }
  } catch (error) {
    console.error("게시글 상세 데이터를 가져오는 중 오류 발생:", error);
  }
});

const isOwner = (postUserId) => {
  return userData === parseInt(postUserId);
};

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', options);
}

function customerDelete() {
  const postId = router.currentRoute.value.params.id;
  authAxios.delete(`/boards`, {
    params: { id: postId }
  })
  .then((res) => {
    alert("삭제가 완료되었습니다.");
    router.push("/postview");
  })
  .catch((error) => {
    console.error("삭제 실패:", error);
  });
}

function customerUpdate(param) {
  authAxios.put('/boards', param)
  .then((res) => {
    alert("수정이 완료되었습니다.");
    router.push("/postview");
  })
  .catch((error) => {
    console.error("수정 실패:", error);
  });
  router.push("/upload");
}

function createemoji(param) {
  if (param === "맑음") {
    return "🌞"; 
  } else if (param === "흐림") {
    return "☁";
  } else if (param === "비") {
    return "🌧"
  } else if (param === "눈") {
    return "❄" 
  }
  return "날씨 정보 없음"
  
}
</script>

<style scoped>
.background {
  background-image: url('@/assets/background/back6.jpg');
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

.content {
  background-color: white;
  width: 90rem;
  margin: 0 auto;
  border-radius: 20px;
  padding: 5rem 7rem 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.img-fluid {
  max-width: 100%;
  height: 600px;
  border-radius: 10px;
}

.mapmarker{
  border-radius: 10px;
}

.info-box {
  background-color: #e9e7e7;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 200px;
  text-align: center;
  overflow: scroll;
  -ms-overflow-style: none;
}

.info-box::-webkit-scrollbar{
  display:none;
}

.info-box p {
  font-size: 1.2rem;
}

.title{
    font-size: 1.5rem;
    color:rgb(0, 0, 0);
    font-family:'WavvePADO';
  }

.realtitle{
    font-size: 2.5rem;
    color:rgb(0, 0, 0);
    font-family:'WavvePADO';
}

.btn2 {
  margin-top: -50px; /* 원하는 만큼 위로 이동 */
  font-size: 1.2rem; /* 버튼의 글자 크기 조정 */
  padding: 10px 20px; /* 버튼 내부의 여백 조정 */
}
</style>
