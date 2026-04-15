<template>
  <button class="btn-container" :style="{ width, height }" @click="emit('click')">
    <div>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>

defineProps({
  width: String,
  height: String,
});

const emit = defineEmits(['click'])



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
