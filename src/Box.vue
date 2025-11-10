<script setup lang="ts">
import { ref } from "vue";

const isGreen = ref(false);

function toggleGreen() {
  isGreen.value = !isGreen.value;
}
</script>

<template>
  <div :class="{ green: isGreen }" data-test="box" @click="toggleGreen">
    Hello
  </div>
</template>

<style scoped>
.green {
  background: green;
}

div {
  border: 1px solid black;
  height: 300px;
  width: 300px;
  user-select: none;
}

div:hover {
  cursor: pointer;
}
</style>
