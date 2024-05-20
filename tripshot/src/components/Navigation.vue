<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.push('/');
};
const goBoard = () => {
  router.push('/postview');
};
const goRecommand = () => {
  router.push('/recommand');
};
const goToLogin = () => {
  router.push('/login');
};
const goProofShot = () => {
  router.push('/proofshot');
};
</script>

<template>
    <div id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" @click="goHome">사담(寫談)</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link" @click="goHome">홈</a></li>
                    <li class="nav-item"><a class="nav-link" @click="goProofShot">인증샷 지도</a></li>
                    <li class="nav-item"><a class="nav-link" @click="goBoard">인증샷 게시판</a></li>
                    <li class="nav-item"><a class="nav-link" @click="goRecommand">주변 관광지 추천</a></li>
                    <li class="nav-item"><a class="nav-link" @click="goToLogin">로그인</a></li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  </template>

<style scoped>

</style>