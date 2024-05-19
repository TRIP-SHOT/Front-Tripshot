<template>
    <div class="post-box">
      <!-- Profile -->
      <div class="profile">
        <div class="profile-img">
          <img src="../assets/img/thum0.JPG" alt="Profile">
        </div>
        <div class="profile-details">
          <p class="username">여행을떠나요</p>
          <div class="age-gender">
            <p>20대</p>
            <p>남성</p>
          </div>
        </div>
      </div>
  
      <!-- Travel Period -->
      <div class="travel-period">
        <div>
          <img src="../img/thum0.JPG" alt="Profile" class="period-img"> <!-- 이미지에 period-img 클래스 추가 -->
        </div>
        <p class="period-label">여행기간</p>
        <div class="period-details">
          <p class="duration">2일</p>
          <p class="dates">06/08 - 06/09</p>
        </div>
      </div>
  
      <!-- Description -->
      <div class="description">
        <p class="activity-period">6/9~6/10 맛집탐방 카페탐방</p>
        <p class="description-text">어디든 맛집탐방이나 카페탐방 가실분 있나요 사진 찍고 찍히는거 좋아하시는 분 선호해요</p>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .post-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .period-img {
    width: 100%; /* 이미지의 너비를 박스의 너비에 맞추기 */
    height: auto; /* 이미지의 높이를 자동으로 조정하기 */
  }
  </style>
  