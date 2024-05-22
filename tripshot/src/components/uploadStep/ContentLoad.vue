<template>
  <div class="row">
    <div style = "margin-bottom: 3rem;">
    <h2 class="text-center mt-0"> 추가 정보를 작성해주세요! </h2>
    </div>
    <div class="form-container">
      <input type="text" v-model="title" placeholder="제목을 입력하세요" class="input-field" />
      <textarea v-model="content" placeholder="내용을 입력하세요" class="textarea-field"></textarea>
      <button @click="submit" class="submit-btn">완료</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useContentStore } from '@/stores/contentStore';
import { useDateStore } from '@/stores/dateStore';
import { useImgStore } from '@/stores/imgStore';
import { usePlaceStore } from '@/stores/placeStore';

import { useRouter } from "vue-router";
import uploadAxios from "../../../utils/uploadAxios";

const router = useRouter(); 
const contentStore = useContentStore();
const dateStore = useDateStore();
const imgStore = useImgStore();
const placeStore = usePlaceStore();
const title = ref('');
const content = ref('');

const submit = () => {
  // Store에 제목과 내용 임시 저장
  contentStore.setTitle(title.value);
  contentStore.setContent(content.value);

  // console.log("content 저장 " + title.value + content.value)

  //FormData에 임시 저장된 값들을 담기
  const formData = new FormData();
  formData.append('userId',1);
  formData.append('title', contentStore.title);
  formData.append('weather', dateStore.weather);
  formData.append('season', dateStore.season);
  formData.append('shotDate', dateStore.shotDate);
  formData.append('content', contentStore.content);
  formData.append('spot', placeStore.spot);
  formData.append('longitude', placeStore.longitude);
  formData.append('latitude', placeStore.latitude);
  formData.append('image', imgStore.imgFile);
  formData.append('locationName', placeStore.locationName);

  //FormData 출력
  console.log(...formData);

  uploadAxios.post('', formData, {})
  .then((res) => {
    console.log("성공",res);
    alert('게시물이 등록되었습니다!');
  })
  .catch((res) => {
    console.log("실패",res);
  });

  router.push({path: '/postview'});
  
};
</script>

<style scoped>
.row {
  width: 77.5rem;
  margin: 0px auto;
  padding: 10rem 0px 7.5rem;
  display: flex;
  justify-content: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  width: 100%;
  min-height: 3rem; /* 제목 입력 필드 최소 높이 */
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.textarea-field {
  width: 100%;
  min-height: 20rem; /* 내용 입력 필드 최소 높이 */
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.submit-btn {
  padding: 0.5rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
