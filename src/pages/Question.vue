<template>
  <div class="question-container">
    <QuizCard width="500px" height="550px">
      <div class="quiz-image">
        <img src="../assets/images/congrats.png" alt="축하메시지" />
      </div>
      <h2 class="quiz-completed">축하합니다! 퀴즈를 완료했어요.</h2>
      <h4 class="quiz-correct">총 10문제 중 4문제를 맞혔어요.</h4>
      <OptionBtn width="250px" height="60px"> 다시 시작하기 </OptionBtn>
    </QuizCard>
  </div>
</template>

<script setup>
import OptionBtn from "@/components/OptionBtn.vue";
import QuizCard from "@/components/QuizCard.vue";
import { useQuizStore } from "@/stores/counter";
import { onMounted, reactive } from "vue";

const store = useQuizStore();
const states = reactive({
  list: [],
});

onMounted(async () => {
  const response = await store.axiosQuiz();
  states.list = response.data;
});
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
