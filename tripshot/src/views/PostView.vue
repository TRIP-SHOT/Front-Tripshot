<template>
  <div class="row">
    <a class="btn btn-light btn-xl" style="padding: 1.5rem; margin-bottom: 2rem;" @click="goToUpload">글쓰기</a>
    <div class="col-md-3" v-for="(post, index) in displayedPosts" :key="index">
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
</template>

<script setup>
import { ref } from 'vue';
import PostBox from '../components/PostBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const displayedPosts = ref([]);
const itemsPerPage = 12; // 페이지당 표시할 게시물 수
let currentPage = ref(1);
const totalPosts = 14; // 전체 게시물 수
const totalPages = Math.ceil(totalPosts / itemsPerPage);

// 각 페이지에 표시할 게시물
const posts = [];
for (let i = 1; i <= totalPosts; i++) {
  posts.push({ id: i, title: `Post ${i}` });
}

// 현재 페이지에 표시할 게시물 가져오기
const getDisplayedPosts = () => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  displayedPosts.value = posts.slice(startIndex, endIndex);
};

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
  if (currentPage.value < totalPages) {
    currentPage.value++;
    getDisplayedPosts();
  }
};

// 글쓰기 페이지로 이동
const goToUpload = () => {
  router.push('/upload');
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
</style>
