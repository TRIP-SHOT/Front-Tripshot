<script setup>
import Signup from "@/components/Signup.vue"
</script>

<template>
  <div class = "background">
  <div class = "row">
    <Signup></Signup>
  </div>
</div>
</template>

<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 10rem 0px 7.5rem;
}

.background{
      background-image: url('@/assets/background/back4.jpg');
      background-size: cover;
      background-position: center;
      width: 100%;
}

</style>
