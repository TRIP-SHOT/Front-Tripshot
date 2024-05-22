<template>
  <div class ="background">
    <div class="row">
      <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                  <div class="col-lg-8 text-center">
                      <h2 class="text-white mt-0 title">❣ MY PICK 인생샷 ❣</h2>
                      <hr class="divider divider-light" />
                      <p class="text-white-75 mb-4 semititle">내가 ♥한 게시물 목록</p>
                  </div>
      </div>
      <div class="col-md-3" v-for="post in displayedPosts" :key="post.id">
        <PostBox :post="post" />
      </div>
      <nav aria-label="Page navigation example" class="d-flex justify-content-center">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostBox from '../components/PostBox.vue';
import { useRouter } from 'vue-router';
import authAxios from '../../utils/authAxios';

const router = useRouter();
const displayedPosts = ref([]);
const itemsPerPage = 12; // 페이지당 표시할 게시물 수
const currentPage = ref(1);
const totalPosts = ref(0); // 전체 게시물 수
const totalPages = ref(0);

// 페이지 변경
const changePage = (page) => {
  currentPage.value = page;
  getDisplayedPosts();
};

// 이전 페이지로 이동
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    getDisplayedPosts();
  }
};

// 다음 페이지로 이동
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    getDisplayedPosts();
  }
};

// 게시물 데이터 가져오기
const getDisplayedPosts = async () => {
  try {
    const response = await authAxios.get('/boards/hearts');
    if (response.data.status === 'OK') {
      displayedPosts.value = response.data.data;
      totalPosts.value = response.data.data.length;
      totalPages.value = Math.ceil(totalPosts.value / itemsPerPage);
    } else {
      console.error("게시물 데이터를 가져오는 중 오류 발생:", response.data.message);
    }
  } catch (error) {
    console.error("게시물 데이터를 가져오는 중 오류 발생:", error);
  }
};

// 페이지 로드 시 첫 번째 페이지 게시물 가져오기
getDisplayedPosts();
</script>

<style scoped>
.row {
  width: 77.5rem;
  margin: 0px auto;
  padding: 5rem 0px 7.5rem;
}

.row > .col-md-3 {
  margin-bottom: 2rem;
}

.background{
      background-image: url('@/assets/background/back10.jpg');
      background-size: cover;
      background-position: center;
      width: 100%;
}

.title{
    font-size: 2.5rem;
    font-family:'WavvePADO';
  }

  .semititle{
    font-size: 1.5rem;
    font-family:'WavvePADO';
  }
</style>