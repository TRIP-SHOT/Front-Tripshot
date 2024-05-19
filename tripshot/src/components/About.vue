<script setup>
import KMap from './KMap.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const goToPost = () => {
    router.push('/postboard');
}
</script>

<template>
    <section class="page-section bg-primary" id="about">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">주변 관광지 검색</h2>
                    <a class="btn btn-light btn-xl" @click="goToPost">더보기</a>
                    <hr class="divider divider-light" />
                    <p class="text-white-75 mb-4">지도로 검색해보세요!</p>
                    <div style="margin-top: 3rem;"><KMap></KMap></div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
