<template>
  <div class="post-box">
    <!-- Profile -->
    <div class="profile" @click="goToPostDetail(post.id)">
      <!-- 사용자 프로필 -->
      <div class="profile-img">
        <template v-if="post.profileImgUrl">
          <img :src="post.profileImgUrl" alt="Profile">
        </template>
        <template v-else>
          <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
        </template>
      </div>
      <div class = "profile-info">
      <!-- 사용자 닉네임 -->
      <div class="profile-details">
        <p class="username">{{ post.nickname || '닉네임없음' }}</p>
      </div>
      <!-- 게시글 하트 수 -->
      <div class="profile-details">
        <p class="username">{{ post.heart_count || '하트없음' }}</p>
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

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

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
</script>

<style scoped>
/* 프로필 컨테이너 */
.profile {
  display: flex;
}

/* 프로필 사진 */
.profile-img {
  margin-right: 10px;
}

/* 프로필 정보 */
.profile-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* 하트 */
.username {
  display: flex;
  justify-content: space-between;
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
  gap: 20px;
  padding: 20px;
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
</style>
