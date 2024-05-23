<template>
  <div class="bg">
    <div class="row">
      <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                  <div class="col-lg-8 text-center">
                      <h2 class="text-black mt-0 title">이미지 업로드</h2>
                      <hr class="divider divider-light" />
                      <p class="text-black-75 mb-4 semititle">내 인생샷을 올려주세요!</p>
                  </div>
      </div>
      <label class="custom-file-upload">
        <input type="file" @change="handleFileUpload" accept="image/*" />
        <div class = "bi">
          <img class="bi bi-file-earmark-plus" src="@/assets/img/upload.jpg" />
        </div>
        <div>Choose File</div>
      </label>
      <div class="image-box" v-if="imageFile">
        <img :src="imageUrl" alt="Uploaded Image" class="uploaded-image" />
      </div>
      <a class="btn btn-light btn-xl" @click="nextStep">다음</a>
    </div>
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
      imgStore.setImgFile(imageFile.value);
      router.push('/placeload');
    } else {
      // 파일이 선택되지 않았을 경우 예외 처리
      alert('이미지를 선택해주세요!');
    }
  };
  </script>
  
  <style scoped>

.bg {
  background-color: #ffffff;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-family:'WavvePADO';
  border-radius: 20px;
}
  .row {
    width: 77.5rem;
    margin: 0 auto;
    padding: 10rem 0 7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bi{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
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
  .row {
  width: 77.5rem;
  margin: 0px auto;
  padding: 5rem 0px 7.5rem;
}

.row > .col-md-3 {
  margin-bottom: 2rem;
}

.title{
    font-size: 2.5rem;
    font-family:'WavvePADO';
  }

  .semititle{
    font-size: 1.5rem;
    font-family:'WavvePADO';
  }
  </style>
  