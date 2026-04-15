<template>
  <button class="btn-container" :style="{ width, height }" @click="goToQuiz">
    <div>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
  width: String,
  height: String,
});

const router = useRouter()

const goToQuiz = () => {
  router.push('/question')
}
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: $gradient-primary;
  color: $color-text-primary;
  cursor: pointer;
}
</style>
