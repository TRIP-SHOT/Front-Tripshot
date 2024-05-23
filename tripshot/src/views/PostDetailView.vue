<template>
  <div class="background">
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
      <h2 class="text-black mt-0 title">🏖️ 인증샷 상세정보 🏖️</h2>
      <hr class="divider divider-light" />
      <p class="text-black-75 mb-4 semititle"></p>
    </div>
    <div class="writeframe">
      <a class="btn btn-light btn-xl writebtn" @click="goToUpload">글쓰기</a>
    </div>
    <!-- 게시글 내용 표시 -->
    <div v-if="postData" class="mb-3">
      <!-- Full-width image -->
      <img :src="postData.image" alt="이미지" class="img-fluid">
      <div class="row mt-3">
        <!-- Left column for post information -->
        <div class="col-md-6">
          <div class="info-box">
            <h3>기본 정보</h3>
            <p>제목: {{ postData.title }}</p>
            <p>내용: {{ postData.content }}</p>
            <p>촬영일: {{ postData.shotDate }}</p>
          </div>
          <div class="info-box">
            <h3>상세 정보</h3>
            <p>계절: {{ postData.season }}</p>
            <p>날씨: {{ postData.weather }}</p>
            <p>상세장소: {{ postData.spot }}</p>
            <p>장소: {{ postData.locationName }}</p>
          </div>
        </div>
        <!-- Right column for additional information -->
        <div class="col-md-6">
          <div class="info-box">
            <h3>통계 정보</h3>
            <p>좋아요: {{ postData.heartCount }}</p>
            <p>조회수: {{ postData.hit }}</p>
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
</script>


<style scoped>
.background {
  background: #bdbdbd;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row {
  width: 77.5rem;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.info-box {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
}

.info-box h3 {
  font-size: 1.2rem;
  font-family: 'WavvePADO', sans-serif;
  margin-bottom: 10px;
}

.info-box p {
  font-size: 1.2rem;
  font-family: 'WavvePADO', sans-serif;
  margin-bottom: 5px;
}

.title {
  font-size: 2.5rem;
  font-family: 'WavvePADO';
  text-align: center;
}

.semititle {
  font-size: 1.5rem;
  font-family: 'WavvePADO';
  text-align: center;
}

.writeframe {
  text-align: center;
  margin-bottom: 15px;
}

.btn-center {
  display: flex;
  justify-content: center;
}

.btn2 {
  margin: 0 5px;
}

</style>
