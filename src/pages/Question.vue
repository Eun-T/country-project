<template>
  <div class="question-container">
    <QuizCard width="600px" height="300px" />
  </div>
</template>

<script setup>
import QuizCard from '@/components/QuizCard.vue';
import { useQuizStore } from '@/stores/counter';

const quizStore = useQuizStore()


quizStore.axiosQuiz()
</script>

<style scoped lang="scss">
.question-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
