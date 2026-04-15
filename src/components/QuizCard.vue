<template>
  <div class="quiz-card" :style="{ width, height }">
    <div class="card-container">
      <div class="quiz-image">
        <img src="../assets/images/congrats.png" alt="축하메시지" />
      </div>
      <h2 class="quiz-completed">축하합니다! 퀴즈를 완료했어요.</h2>
      <h4 class="quiz-correct">총 10문제 중 4문제를 맞혔어요.</h4>
      <OptionBtn width="250px" height="60px" />
    </div>
  </div>
</template>

<script setup>
import OptionBtn from './OptionBtn.vue';

defineProps({
  width: String,
  height: String,
});
</script>

<style scoped lang="scss">
.quiz-card {
  background-color: $color-card;
  border-radius: 30px;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
