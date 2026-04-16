<template>
  <div class="progress-container" :class="{correct: progress.isCorrect}">
    <div>
      {{ progress.id }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  progress: Object,
});

const num = ref(0);
</script>

<style scoped lang="scss">
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: $color-button-disabled;
  padding: 20px;
}

.progress-container.correct {
  background: $gradient-primary;
}
</style>
