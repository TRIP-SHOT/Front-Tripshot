<script setup>
import ThumbCard from "../components/ThumbCard.vue"

const portfolioItems = [
  {
    projectName: '단풍이 정말 예쁜 화담숲',
    category: '화천',
    imageFullsize: '../assets/img/portfolio/fullsize/1.jpg',
    imageThumbnail: '../assets/img/thum1.JPG'
  },
  {
    projectName: '선선한 바람과 함께..',
    category: '서울 노들섬',
    imageFullsize: '../assets/img/portfolio/fullsize/2.jpg',
    imageThumbnail: '../assets/img/thum2.JPG'
  },
  {
    projectName: '벚꽃 인생샷!!',
    category: '대구 옥구공원',
    imageFullsize: '../assets/img/portfolio/fullsize/3.jpg',
    imageThumbnail: '../assets/img/thum5.JPG'
  },
  {
    projectName: '바이크를 타고..',
    category: '제주 코난해변',
    imageFullsize: '../assets/img/portfolio/fullsize/4.jpg',
    imageThumbnail: '../assets/img/thum4.JPG'
  },
  {
    projectName: '그냥 찍어도 인생샷',
    category: '안산 대부도',
    imageFullsize: '../assets/img/portfolio/fullsize/5.jpg',
    imageThumbnail: '../assets/img/thum6.jpg'
  },
  {
    projectName: '덥지만 인생샷 스팟!',
    category: '제주 오름',
    imageFullsize: '../assets/img/portfolio/fullsize/6.jpg',
    imageThumbnail: '../assets/img/thum3.jpg'
  }
];

</script>

<template>
    <!-- Portfolio-->
    <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <ThumbCard v-for="(item, index) in portfolioItems" :key="index" :projectName="item.projectName" :category="item.category" :imageFullsize="item.imageFullsize" :imageThumbnail="item.imageThumbnail" />
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>
