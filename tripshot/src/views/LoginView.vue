<script setup>
import Login from "@/components/Login.vue"
import Layout from "../components/layout/Layout.vue"
</script>

<template>
      <div class ="background">
      <div class = "row">
            <Login></Login>
      </div>
</div>
</template>

<style scoped>
.row{
    width: 77.5rem;
    margin: 0px auto;
    padding: 10rem 0px 7.5rem;

}

.background {
  position: relative;
  background-image: url('@/assets/background/back1.jpg');
  background-size: cover;
  background-position: center;
}

</style>
