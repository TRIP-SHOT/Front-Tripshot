<template>
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="text-center mt-0">게시글 상세 내용</h2>
        <!-- 게시글 내용 표시 -->
        <div v-if="postData" class="mb-3">
            <!-- <div class="form-group">
            <label>제목:</label> <input type="text" class="form-control" id="title" v-model="title" />
            </div>
            <div class="form-group">
            <label>내용:</label> <input type="text" class="form-control" id="content" v-model="content" />
            </div>

            <div class="form-group">
            <label>촬영일:</label> <input type="text" class="form-control" id="shotDate" v-model="shotDate" />
            </div> -->

            <img :src="postData.image" alt="이미지" class="img-fluid">
            <h2>제목: {{ postData.title }}</h2>
            <p>내용: {{ postData.content }}</p>
            <p>촬영일: {{ postData.shotDate }}</p>
            <p>계절: {{ postData.season }}</p>
            <p>날씨: {{ postData.weather }}</p>
            <p>상세장소: {{ postData.spot }}</p>
            <p>장소: {{ postData.locationName }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
        <div class="btn-group btn-center">
          <input type="button" class="btn btn-primary btn2" value="삭제" @click="customerDelete" />
          <input type="button" class="btn btn-primary btn2" value="수정" @click="customerUpdate({title,content,shotDate,season,weather,spot,locationName})" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import uploadAxios from "../../utils/uploadAxios";
  import dataAxios from "../../utils/dataAxios";
  
  const router = useRouter();
  const postData = ref(null);
  
  // 페이지 로드 시 게시글 데이터 가져오기
  onMounted(async () => {
    const postId = router.currentRoute.value.params.id;
    try {
      const response = await uploadAxios.get(`/${postId}`);
      if (response.data.status === 'OK') {
        postData.value = response.data.data;
      } else {
        console.error("게시글 상세 데이터를 가져오는 중 오류 발생:", response.data.message);
      }
    } catch (error) {
      console.error("게시글 상세 데이터를 가져오는 중 오류 발생:", error);
    }
  });

  function customerDelete() {
    const postId = router.currentRoute.value.params.id;
    console.log(postId)
    dataAxios.delete(`/boards`, {
      params: { id: postId }
      })
      .then((res) => {
          console.log("성공", res);
          alert("삭제가 완료되었습니다.");
          router.push("/postview");
      })
      .catch((res) => {
          console.log("실패",res);
      });

  }

    function customerUpdate(param) {
        dataAxios.put('/boards',
            param, 
            {
          }
        )
        .then((res) => {
            console.log("성공", res);
            alert("삭제가 완료되었습니다.");
            router.push("/postview");
        })
        .catch((res) => {
            console.log("실패",res);
        });

        router.push("/upload");

    }




  </script>
  
  <style scoped>
  .row {
    width: 77.5rem;
    margin: 0 auto;
    padding: 5rem 0 7.5rem;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>