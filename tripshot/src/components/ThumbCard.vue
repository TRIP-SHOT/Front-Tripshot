<script setup>
// Props
const projectName = String;
const category = String;
const imageFullsize = String;
const imageThumbnail = String;

</script>

<template>
    <div class="col-lg-2 col-sm-6">
    <a class="portfolio-box" :href="imageFullsize" :title="projectName">
      <img class="img-fluid" :src="imageThumbnail" :alt="projectName" />
      <div class="portfolio-box-caption">
        <div class="project-category text-white-50">{{ category }}</div>
        <div class="project-name">{{ projectName }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>