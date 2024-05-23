<template>
  <!-- 게시글 하트 수 -->
  <span class="heart-container" @click="toggleHeart">
            <i class="bi" :class="{'bi-heart': !postState.isLike, 'bi-heart-fill': postState.isLike}"></i>
            <span class="heart-count">{{ postState.heartCount }}</span>
  </span>
  <div class="post-box" @click="goToPostDetail(post.id)">
    <!-- Profile Box-->
    <div class="profile">

      <!-- 사용자 프로필 -->
      <div class="profile-img">
        <template v-if="post.profileImgUrl">
          <img :src="post.profileImgUrl" alt="이미지 정보 없음">
        </template>
        <template v-else>
          <i class="bi bi-person-circle" style="font-size: 2rem;"></i>
        </template>
      </div>

      <div class = "profile-info">
        <div class = "profile-info-1">
          <!-- 사용자 닉네임 -->
          <div class="username">{{ post.nickname }}</div>
          <!-- 조회수 -->
          <div class="hit">조회수 {{ post.hit }}</div>
        
        </div>
        <div class = "profile-info-2">
            <!-- 촬영 일자 -->
            <div class="shotDate">{{ formatDate(post.shotDate) }}</div>
            <!-- 계절, 날씨 -->
            <div class="season">{{ post.season}}</div>
            <div class="weather">{{ post.weather}}</div>

        </div>
      </div>
    </div>

    <!-- Travel Period -->
    <div class="travel-period">
      <div class="img-container">
        <img :src="post.image || './assets/img/noimg.jpg'" alt="이미지없음" class="period-img">
      </div>
    </div>
  </div>
      
</template>

<script setup>
import { defineProps, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import authAxios from '../../utils/authAxios';

const router = useRouter();
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const goToPostDetail = (postId) => {
  router.push({ name: 'detail', params: { id: postId } });
};

const postState = reactive({
  isLike: props.post.isLike,
  heartCount: props.post.heartCount
});

function toggleHeart() {
    authAxios.post(`/boards/heart`, null,{
      params: { id: props.post.id }
      })
      .then((res) => {
        postState.isLike = !postState.isLike; // 하트 상태를 토글
        postState.heartCount += postState.isLike ? 1 : -1; // 하트 수 업데이트
        // console.log('하트 상태가 변경되었습니다.',res);
      })
      .catch((res) => {
        console.error('하트 상태 변경 error:', res);
      });

}

  function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', options);
}

</script>

<style scoped>


.post-box {
  display: flex;
  width: 300px;
  height: 300px;
  padding:5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* 프로필 컨테이너 */
.profile {
  display: flex;
  font-size: 15px;
  font-family:'WavvePADO';

}


/* 프로필 정보 */
.profile-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profile-info-1, .profile-info-2 {
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em; 
  word-spacing: 0.1em;
}
.profile-info-1{
  justify-content: space-between;
}


/* 프로필 사진 */
.profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}


/* 촬영 일자*/
.period-details{
}

.username {
  display: flex;
  justify-content: space-between;
}

/* 하트 */
.heartfill{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* 하트 카운트 */
.heart-count {
  font-size: 1rem;
  color: white;
  margin-left: 5px;
  font-size: 15px;
  font-family:'WavvePADO';
}

/* 하트 컨테이너 */
.heart-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.bi-heart-fill{
  color: red;
}

.bi-heart{
  
}




.season {
  margin: 5px;
  background-color: #ee8549;
  color:white;
  padding: 7px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  font-family:'WavvePADO';
}

.weather {
  background-color: #1d5bce;
  color:white;
  padding: 7px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 5px;
  font-size: 12px;
  font-family:'WavvePADO';
}

.hit{
  font-size: 10px;
  font-family:'WavvePADO';
}

.shotDate{
  display: flex;
  text-align: center;
  font-size: 13px;
  font-family:'WavvePADO';
}

/* 이미지 */
.period-img {
  display: flex;
  width: 270px;
  height: 180px;
  object-fit: cover; 
  border-radius: 10px; 
  transition: transform 0.5s ease; 
}

.img-container {
  overflow: hidden;
  border-radius: 10px;
}

.img-container:hover .period-img {
  transform: scale(1.2);
}

.more {
  display: flex;
  margin-top: 5%;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-radius: 10px; 
  border: none;
  font-size: 1.0rem;
  background-color: #f5f5f5;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
  font-family:'WavvePADO';
}

.more:hover {
  background-color: #e0e0e0;
  transform: scale(1.05); /* 호버 시 버튼을 약간 확대 */
}
</style>
