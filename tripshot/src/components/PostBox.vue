<template>
  <div class="post-box">
    <!-- Profile -->
    <div class="profile">
      <!-- 사용자 프로필 -->
      <div class="profile-img">
        <template v-if="post.profileImgUrl">
          <img :src="post.profileImgUrl" alt="이미지 정보 없음">
        </template>
        <template v-else>
          <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
        </template>
      </div>
      <div class = "profile-info">
      <!-- 사용자 닉네임 -->
      <p class="username">{{ post.nickname || '닉네임없음' }}</p>
      <div class="profile-side">
        
        <!-- 조회수 -->
        <p class="hit">{{ post.hit }}</p>
        
        <!-- 게시글 하트 수 -->
        <i class="bi" :class="{'bi-heart': !postState.isLike, 'bi-heart-fill': postState.isLike}" @click="toggleHeart"></i>
        <p class="heartfill">{{ postState.heartCount }} Likes </p>
      </div>
    
      <div class ="additional-info">
      <!-- 계절, 날씨 -->
      <p class="season">{{ post.season || '계절정보없음' }}</p>
      <p class="weather">{{ post.weather || '날씨정보없음' }}</p>
      </div>
      <!-- 촬영 일자 -->
      <div class="period-details">
        <p class="shotDate">{{ post.shotDate || '촬영정보없음' }}</p>
      </div>
      </div>
    </div>

    <!-- Travel Period -->
    <div class="travel-period">
      <div>
        <img :src="post.image || './assets/img/noimg.jpg'" alt="이미지없음" class="period-img">
      </div>
    </div>
    <button class = "more" @click="goToPostDetail(post.id)">
      더보기
    </button>

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



</script>

<style scoped>
/* 프로필 컨테이너 */
.profile {
  display: flex;

}

.profile-side {
  display: flex;
  justify-content: space-between;
  align-items: top;
}

/* 프로필 사진 */
.profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

/* 프로필 정보 */
.profile-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.username {
  display: flex;
  justify-content: space-between;
}

/* 하트 */
.heartfill{
  display: flex;
}

/* 날짜와 계절, 날씨 태그 */
.additional-info {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* 이미지 */
.post-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}

/* 이미지 */
.period-img {
  width: 100%;
  height: 200px; /* 이미지 고정 크기 */
  object-fit: cover; /* 이미지가 공간을 가득 채울 수 있도록 설정 */
  border-radius: 10px; /* 이미지 모서리를 둥글게 설정 */
}

.more {
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-radius: 10px; 
}
</style>
