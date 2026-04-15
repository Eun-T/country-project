<template>
  <div class="home-container">
    <QuizCard width="450px" height="500px">
      <div class="quiz-image">
        <img src="../assets/images/congrats.png" alt="축하메시지" />
      </div>
      <h2 class="quiz-completed">국가 퀴즈에 오신 것을 환영합니다!</h2>
      <h4 class="quiz-correct">
        국가의 수도와 국기에 대한 지식을 테스트해보세요.
      </h4>
      <OptionBtn width="250px" height="60px" @click="goToQuiz"> 퀴즈 시작하기 </OptionBtn>
    </QuizCard>
  </div>
</template>

<script setup>
import OptionBtn from "@/components/OptionBtn.vue";
import QuizCard from "@/components/QuizCard.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const goToQuiz = () => {
  router.push('/question')
}

</script>

<style scoped>
.home-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 퀴즈 마진 */
.quiz-image {
  margin-bottom: 15px;
}
.quiz-completed {
  margin-bottom: 15px;
}
.quiz-correct {
  margin-bottom: 45px;
}
</style>
