<script setup>

</script>

<template>
    <header class="masthead">
        <video autoplay muted loop class="bg-video">
        <source src="@/assets/img/view2.mp4" type="video/mp4">
        <!-- 비디오를 지원하지 않는 경우를 대비한 대체 콘텐츠 -->   
        </video>
        <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold" style="font-size: 4.5rem">Trip Shot</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5" style="font-size: 1.5rem;">여행 곳곳을 돌아다니며 찍은 사진을 공유하며 여행지를 추천받아요!</p>
                    </div>
                    <div class="scroll-container">
                        <div class="scroll-content">
                        Scroll
                        <i class="bi bi-mouse"></i>
                        <i class="bi bi-chevron-double-down"></i>
                        </div>
                    </div>

                </div>
            </div>
    </header>
  </template>

<style scoped>

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  object-fit: cover;
  z-index: -1;
}

.scroll-container {
  height: 100px; 
  overflow-y: auto; 
  color: white;
}

.scroll-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: scrollAnimation 1.4s infinite alternate; 
}

@keyframes scrollAnimation {
  0% {
    transform: translateY(-7px); 
  }
  100% {
    transform: translateY(7px); 
  }
}

.bi {
  font-size: 24px;
}


</style>