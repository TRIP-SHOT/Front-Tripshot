<template>
    <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
      <div class="col-lg-8 text-center">
        <h2 class="text-center mt-0">🏆 급상승 인증샷 🏆</h2>
        <a class="btn btn-light btn-xl" @click="goToPost">더보기</a>
        <hr class="divider" />
        <p class="text-black-75 mb-4">가장 조회수가 높은 인증샷을 확인해보세요!</p>
      </div>
      <div id="carouselExampleControls" class="carousel slide col-lg-8" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div v-for="(postGroup, index) in postGroups" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
            <div class="d-flex justify-content-center">
              <div class="row">
                <div v-for="(post, postIndex) in postGroup" :key="post.id" class="col-md-4 mb-3">
                  <div class="position-relative">
                    <div class="rank-badge">{{ index * 3 + postIndex + 1 }}</div>
                    <PostBox :post="post" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import dataAxios from '../../../utils/dataAxios';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import PostBox from '../PostBox.vue';
  
  const router = useRouter();
  
  const goToPost = () => {
      router.push('/postview');
  };
  
  const postGroups = ref([]);

  // 게시물 데이터 가져오기
  const getDisplayedPosts = async () => {
    try {
      const response = await dataAxios.get('/boards');
      if (response.data.status === 'OK') {
        const allPosts = response.data.data.sort((a, b) => b.hit - a.hit); // hit 기준으로 내림차순 정렬
        for (let i = 0; i < allPosts.length; i += 3) {
          postGroups.value.push(allPosts.slice(i, i + 3));
        }
      } else {
        console.error('게시물 데이터를 가져오는 중 오류 발생:', response.data.message);
      }
    } catch (error) {
      console.error('게시물 데이터를 가져오는 중 오류 발생:', error);
    }
  };
  
  onMounted(() => {
    getDisplayedPosts();
  });
  </script>
  
  <style scoped>
  .rank-badge {
    position:relative;
    top: 0;
    left: 0;
    /* background-color: rgba(245, 225, 7, 0.5); */
    /* padding: 0.25rem 0.5rem; */
    /* border-top-left-radius: 10px; */
    color : rgb(234, 197, 14);
    font-size: 3rem;
    font-weight: bold;
  }
  </style>
  