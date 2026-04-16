<template>
  <div class="question-container">
    <QuizCard width="500px" height="550px">
      <div class="quiz-image">
        <img src="../assets/images/congrats.png" alt="축하메시지" />
      </div>
      <h2 class="quiz-completed">축하합니다! 퀴즈를 완료했어요.</h2>
      <h4 class="quiz-correct">총 10문제 중 4문제를 맞혔어요.</h4>
      <PrimaryBtn width="250px" height="60px" @click="goToHome"> 다시 시작하기 </PrimaryBtn>
    </QuizCard>
  </div>
</template>

<script setup>
import OptionBtn from "@/components/OptionBtn.vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import QuizCard from "@/components/QuizCard.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

</script>

<style scoped lang="scss">
.question-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

// 퀴즈 마진
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
