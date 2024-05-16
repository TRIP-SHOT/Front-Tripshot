<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToLogin = () => {
  router.push('/login');
};


</script>

<template>
    <div id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">사담(寫談)</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#about">홈</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">인증샷 게시판</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">베스트 인증샷</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">인증샷 지도</a></li>
                    <li class="nav-item"><a class="nav-link" @click="goToLogin">로그인</a></li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  </template>

<style scoped>

</style>