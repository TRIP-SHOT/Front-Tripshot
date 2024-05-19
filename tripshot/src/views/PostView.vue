<script setup>
import PostBox from '../components/PostBox.vue'

import { useRouter } from 'vue-router';
const router = useRouter()
const goToUpload = () => {
    router.push('/upload');
}
</script>

<template>
  <div class="row">
    <a class="btn btn-light btn-xl" @click="goToUpload">글쓰기</a>
    <div class="col-md-3" v-for="index in 10" :key="index">
      <PostBox/>
    </div>
  </div>
</template>

<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 5rem 0px 7.5rem;
}

.row > .col-md-3 {
  margin-bottom: 2rem;
}

</style>
