<template>
  <div>
    <div class="container">
      <div class="input-form-background row">
        <div class="input-form col-md-7 mx-auto my-auto mb-5">
          <form class="validation-form" @submit="handleUpdate">
            
            
              <div class="mb-3">
                <label for="name">이름</label>
                <input type="name" class="form-control" id="name" v-model="name" placeholder="등록된 이름이 없습니다." required disabled>
              </div>

              <div class="mb-3">
                <label for="nickname">닉네임</label>
                <input type="text" class="form-control" id="nickname" v-model="nickname" placeholder="등록된 닉네임이 없습니다." required>
              </div>

              <div class="mb-3">
                <label for="userId">아이디</label>
                <input type="text" class="form-control" id="userId" v-model="userId" placeholder="등록된 아이디가 없습니다." required disabled>

              </div>
           
            <div class="mb-3">
              <label for="email">이메일 주소</label>
              <input type="text" class="form-control" id="email" v-model="email" placeholder="등록된 이메일 주소가 없습니다.">
            </div>

            <div class="mb-4"></div>
            
            <div style="display: flex; margin: 10px; justify-content: center;">
              <div class="signbtn">
                <button class="btn btn-primary btn-lg btn-block" type="submit">수정 완료</button>
              </div>

              <div class="signbtn">
                <button class="btn btn-primary btn-lg btn-block" type="button" @click="handleDelete">회원 탈퇴</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue';
import { useRoute,useRouter } from 'vue-router';
import authAxios from "../../utils/authAxios";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const userId = ref('');
const nickname = ref('');
const password = ref('');
const email = ref('');
const profileImage = ref("");
const name = ref('');

const route = useRoute();
const authStore = useAuthStore();

const key = route.params.num; 

authAxios.get('/users')
  .then(response => {
    const data = response.data;
    userId.value = data.data.userId || "";
    name.value = data.data.name || "";
    nickname.value = data.data.nickname || "";
    email.value = data.data.email || "";
    profileImage.value = data.data.profileImage || "";
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
  });


const handleDelete = () => {
  authAxios.delete('/users')
    .then(() => {
      alert("회원 탈퇴가 완료되었습니다.");
      handleLogout();
      router.push('/');
    })
    .catch(error => {
      console.error("Error deleting user:", error);
    });
}

const handleLogout = () => {
    authStore.logout();
};

const handleUpdate = (event) => {
  event.preventDefault();

  const updatedData = {
    nickname: nickname.value,
    email: email.value
  };

  authAxios.put('/users', updatedData)
    .then(() => {
      alert("수정이 완료되었습니다.");
    })
    .catch(error => {
      console.error("Error updating user data:", error);
    });
};


</script>

<style scoped>
.input-form-background {
  /* background-color: #f8f9fa;  */
  padding: 40px; 
}

.input-form {
  border-radius: 10px; 
  background-color: white;
  padding: 30px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
}

.validation-form input[type="text"],
.validation-form input[type="password"],
.validation-form input[type="name"] {
  border-radius: 10px;
}

.custom-checkbox {
  margin-top: 20px; 
}

.btn-primary {
  border-radius: 10px;
}

.signbtn{
  justify-content: center;
}
</style>