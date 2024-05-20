<template>
    <div>
        <!-- Services-->
        <section class="page-section" id="services">
            <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-black mt-0">🏖️ 인증샷 지도 🏖️</h2>
            <a class="btn btn-light btn-xl" @click="goToPost">더보기</a>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4">사용자들이 올린 인증샷 개수를 확인해보세요!</p>
            <div style="margin-top: 3rem;">
              <KMap></KMap>
            </div>
          </div>
        </div>
        </section>
    </div>
</template>

<script setup>
import KMap from './KMap.vue'
</script>

<style scoped>

</style>