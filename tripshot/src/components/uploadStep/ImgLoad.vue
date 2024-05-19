<template>
    <div class="row">
      <div style="margin-bottom: 3rem;">
        <h2 class="text-center mt-0">내 인생샷을 올려주세요!</h2>
      </div>
      <label class="custom-file-upload">
        <input type="file" @change="handleFileUpload" accept="image/*" />
        <span>Choose File</span>
        <i class="bi bi-file-earmark-plus"></i>
      </label>
      <div class="image-box" v-if="imageFile">
        <img :src="imageUrl" alt="Uploaded Image" class="uploaded-image" />
      </div>
      <button @click="nextStep">다음</button>
      <a class="btn btn-light btn-xl" @click="nextStep">다음</a>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useImgStore } from '@/stores/imgStore';
  import { useRouter } from 'vue-router';
  
  const imageFile = ref(null);
  const imageUrl = ref('');
  const imgStore = useImgStore();
  const router = useRouter();
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      imageFile.value = file; // 파일 형태로 저장
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        imageUrl.value = reader.result;
      };
    }
  };
  
  const nextStep = () => {
    if (imageFile.value) {
      imgStore.setImgFile(imageFile.value); // 파일 형태로 Store에 저장
      console.log(imageFile.value);
      router.push('/placeload');
    } else {
      // 파일이 선택되지 않았을 경우 예외 처리
      alert('이미지를 선택해주세요!');
    }
  };
  </script>
  
  <style scoped>
  .row {
    width: 77.5rem;
    margin: 0 auto;
    padding: 10rem 0 7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .custom-file-upload {
    margin-bottom: 1rem;
    border: 2px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
  
  .custom-file-upload input[type="file"] {
    display: none;
  }
  
  .custom-file-upload span {
    font-size: 16px;
    font-weight: bold;
  }
  
  .image-box {
    width: 300px;
    height: 300px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .uploaded-image {
    max-width: 100%;
  }
  
  button {
    margin-top: 1rem;
  }
  </style>
  