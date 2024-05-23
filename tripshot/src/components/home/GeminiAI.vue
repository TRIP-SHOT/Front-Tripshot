<template>
  <div class = "masthead">
    <section class="page-section bg-primary">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0 title">🏖️ 여행 AI 검색 🏖️</h2>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4 semititle">질문을 무엇이든 검색해보세요!</p>
            <div calss = "flex-container">
              <form class="mb-5" @submit.prevent="fetchAnswer">
                <div class="mb-3">
                  <textarea class="form-control custom-textarea" rows="5" v-model="question" placeholder="ex) 인증샷 잘나오는 팁 알려줘.."></textarea>
                </div>
                <button type="submit" class="btn custom-btn" :disabled="!question">
                  {{ `${isLoading ? '답변 대기중...' : '질문하기'}` }}
                </button>
              </form>
            
              <div class="answer-container" v-if="answer">
                  <AIAnswer :answer="answer" />
                </div>
              <div v-else style="display: none;"></div>   
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useGetGenerativeModelGP } from '../../../utils/useGetGenerativeModelGP'
import AIAnswer from '../AIAnswer.vue'

const question = ref('')
const answer = ref('')
const isLoading = ref(false)

const fetchAnswer = async () => {
  answer.value = ''
  isLoading.value = true

  try {
    answer.value = await useGetGenerativeModelGP(question.value)
  } catch (error) {
    console.log({ error })
  } finally {
    isLoading.value = false
    question.value = ''
  }
}
</script>

<style lang="scss" scoped>
.mb-5 {
  margin-bottom: 5rem;
}
.mb-10 {
  margin-bottom: 10rem;
}

.flex-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin-top: 3rem;
  }

  .title{
    font-size: 2.5rem;
    font-family:'WavvePADO';
  }

  .semititle{
    font-size: 1.5rem;
    font-family:'WavvePADO';
  }

  .custom-textarea {
  border-radius: 15px; /* 더 둥글게 */
  border: 2px solid #ced4da; /* 테두리 스타일 */
}
  .custom-btn {
    border-radius: 20px;
    background-color: #000000;
    color: #fff;
    transition: background-color 0.3s ease;
    font-size: 1.5rem;
    font-family:'WavvePADO';
  }

  .custom-textarea:focus {
    border-color: #4d90fe; /* 선택된 상태의 테두리 색상 변경 */
  }

  .custom-btn:hover {
  background-color: #ffffff;
  color:black;
  
}

.custom-btn:disabled {
  background-color: #b7b7b7;
  cursor: not-allowed;
}

.answer-container {
  text-align: start;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-family:'WavvePADO';
}

.answer-container::-webkit-scrollbar {
  display: none;
}
</style>