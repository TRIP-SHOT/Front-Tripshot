<script setup>
import Login from "@/components/Login.vue"
</script>

<template>
    <div>
      <Login></Login>
    </div>
</template>

<style scoped>
#loginBox {
  width: 50%;
  margin: 0 auto; /* 수평 중앙 정렬 */
}

.input-form-box input {
  border-radius: 10px;
}

.button-login-box button {
  border-radius: 10px;
}

</style>
