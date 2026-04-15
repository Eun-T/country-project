<template>
  <div class="btn-container" :style="{ width, height }" @click="">
    <div>
      <p>다시 시작</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  width: String,
  height: String,
});
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: $gradient-primary;
  // color: $color-text-primary;
}
</style>
