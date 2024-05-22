<template>
  <header class="masthead">
      <video autoplay muted loop class="bg-video">
      <source src="@/assets/img/view2.mp4" type="video/mp4">

      </video>
      <div class="container px-4 px-lg-5 h-100">
              <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                  <div class="col-lg-8 align-self-end">
                    <h1 class="text-white-75 font-weight-bold typing-effect" style="font-size: 5.5rem; font-family:'WavvePADO';" >
                      <span>T</span><span>r</span><span>i</span><span>p</span> <span>S</span><span>h</span><span>o</span><span>t</span>
                    </h1>
                      <hr class="divider" />
                  </div>

                  <div class="col-lg-8 align-self-baseline">
                      <p class="text-white-75 mb-5" style="font-size: 2.5rem; font-family:'WavvePADO';">여행을 사진에 담다</p>
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

<script setup>

</script>


<style scoped>

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.scroll-container {
  height: 100px; 
  overflow-y: auto; 
  color: white;
  -ms-overflow-style: none;
}
.scroll-container::-webkit-scrollbar{
  display:none;
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
    transform: translateY(-5px); 
  }
  100% {
    transform: translateY(5px); 
  }
}

.bi {
  font-size: 24px;
}

.typing-effect span {
  display: inline-block;
  opacity: 0;
  animation: typing 1s forwards;
}

.typing-effect span:nth-child(1) { animation-delay: 0s; }
.typing-effect span:nth-child(2) { animation-delay: 0.1s; }
.typing-effect span:nth-child(3) { animation-delay: 0.2s; }
.typing-effect span:nth-child(4) { animation-delay: 0.3s; }
.typing-effect span:nth-child(5) { animation-delay: 0.4s; }
.typing-effect span:nth-child(6) { animation-delay: 0.5s; }
.typing-effect span:nth-child(7) { animation-delay: 0.6s; }
.typing-effect span:nth-child(8) { animation-delay: 0.7s; }

@keyframes typing {
  0% { opacity: 0; }
  100% { opacity: 1; }
}


</style>