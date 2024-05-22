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
            <li class="nav-item" v-if="isLoggedIn"><a class="nav-link" @click="goMyPage">마이페이지</a></li>
            <li class="nav-item" v-if="isLoggedIn"><a class="nav-link" @click="goMyHeart">내 찜 목록</a></li>
            <li class="nav-item"><a class="nav-link" @click="isLoggedIn ? handleLogout() : goToLogin()">{{ isLoggedIn ? '로그아웃' : '로그인' }}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from "@/stores/auth";

  const router = useRouter();
  const authStore = useAuthStore();
  

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

  const goMyPage = () => {
    router.push('/mypage');
};

  const goMyHeart = () => {
    router.push('/myheart');
  };

  const handleLogout = () => {
    authStore.logout();
    alert("로그아웃이 완료되었습니다.");
    router.push('/');
  };

  const isLoggedIn = computed(() => !!authStore.token);

  onMounted(() => {

    authStore.initializeAuth();

    const navbarShrink = () => {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });

  });
</script>

<style scoped>

</style>
