<script setup>
import ThumbCard from './ThumbCard.vue';
import {useRouter} from 'vue-router';
const router = useRouter()
const goToPost = () => {
    router.push('/postview');
}

const portfolioItems = [
  {
    projectName: '단풍이 정말 예쁜 화담숲',
    category: '화천',
    imageFullsize: './assets/img/portfolio/fullsize/1.jpg',
    imageThumbnail: './assets/img/thum1.JPG'
  },
  {
    projectName: '선선한 바람과 함께..',
    category: '서울 노들섬',
    imageFullsize: './assets/img/portfolio/fullsize/2.jpg',
    imageThumbnail: './assets/img/thum2.JPG'
  },
  {
    projectName: '벚꽃 인생샷!!',
    category: '대구 옥구공원',
    imageFullsize: './assets/img/portfolio/fullsize/3.jpg',
    imageThumbnail: './assets/img/thum5.JPG'
  },
  {
    projectName: '바이크를 타고..',
    category: '제주 코난해변',
    imageFullsize: './assets/img/portfolio/fullsize/4.jpg',
    imageThumbnail: './assets/img/thum4.JPG'
  },
  {
    projectName: '그냥 찍어도 인생샷',
    category: '안산 대부도',
    imageFullsize: './assets/img/portfolio/fullsize/5.jpg',
    imageThumbnail: './assets/img/thum6.jpg'
  },
  {
    projectName: '덥지만 인생샷 스팟!',
    category: '제주 오름',
    imageFullsize: './assets/img/portfolio/fullsize/6.jpg',
    imageThumbnail: './assets/img/thum3.jpg'
  }
];

</script>

<template>
<div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
    <div class="col-lg-8 text-center">
        <h2 class="text-center mt-0">🏆 급상승 인증샷 🏆</h2>
        <a class="btn btn-light btn-xl" @click="goToPost">더보기</a>
    </div>
</div>



  <hr class="divider" />
    <!-- <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <ThumbCard v-for="(item, index) in portfolioItems" :key="index" :projectName="item.projectName" :category="item.category" :imageFullsize="item.imageFullsize" :imageThumbnail="item.imageThumbnail" />
                </div>
            </div>
    </div> -->
    <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-2 col-sm-6">
                        <a class="portfolio-box" href="../assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                            <img class="img-fluid" src="../assets/img/thum1.JPG" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">화천</div>
                                <div class="project-name">단풍이 정말 예쁜 화담숲</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <a class="portfolio-box" href="../assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                            <img class="img-fluid" src="../assets/img/thum2.JPG" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">노들섬</div>
                                <div class="project-name">선선한 바람과 함께..</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <a class="portfolio-box" href="../assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                            <img class="img-fluid" src="../assets/img/thum5.JPG" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">대부도</div>
                                <div class="project-name">야경을 안주삼아</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <a class="portfolio-box" href="../assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                            <img class="img-fluid" src="../assets/img/thum4.JPG" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">코난해변</div>
                                <div class="project-name">바이크를 타고..</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <a class="portfolio-box" href="../assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                            <img class="img-fluid" src="../assets/img/thum6.jpg" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">대부도</div>
                                <div class="project-name">그냥 찍어도 인생샷</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <a class="portfolio-box" href="../assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                            <img class="img-fluid" src="../assets/img/thum3.jpg" alt="..." />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50">오름</div>
                                <div class="project-name">덥지만 인생샷 스팟!</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>
