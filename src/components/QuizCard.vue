<template>
  <div class="quiz-card" :style="{ width, height }">
    <div class="card-container">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import OptionBtn from "./OptionBtn.vue";

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
