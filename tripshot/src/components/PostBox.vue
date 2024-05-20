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
        
        <div class="profile-side">
          <!-- 사용자 닉네임 -->
          <p class="username">{{ post.nickname || '닉네임없음' }}</p>
          <!-- 조회수 -->
          <p class="username">{{ post.hit }}</p>
          
          <!-- 게시글 하트 수 -->
          <i class="bi" :class="{'bi-heart': !liked, 'bi-heart-fill': liked}" @click="toggleHeart"></i>
          <p class="username">{{ post.heart_count || '0 Likes' }}</p>
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
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


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
const liked = ref(false); // 하트 토글 상태
const toggleHeart = () => {
  // 하트 토글
  liked.value = !liked.value;
  if (liked.value) {
    console.log("!!")
  }
};
</script>

<style scoped>
/* 프로필 컨테이너 */
.profile {
  display: flex;

}

.profile-side {
  display: flex;
  justify-content: space-between;
}

/* 프로필 사진 */
.profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
