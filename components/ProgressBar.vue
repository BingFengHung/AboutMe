<template>
<div class="progress">
  <div class="progress_in" :style="{ width: progress + '%'}"></div>
</div>
</template>

<script setup lang="ts">
  defineProps(['progress'])
</script>

<style scoped>
.progress {
  width: 100%;
  height: 15px;
  background-color: #dadada;
  margin: 10px 0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.progress_in {
  background-color: #b4be13;
  height: 100%;
  border-radius: 5px;
}
</style>