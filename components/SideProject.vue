<template>
  <div class="card">
    <div class="card_title">{{ projectInfo.title }}</div>
    <img class="card_img" :src="projectInfo.images[0]"/>
    <div class="card_content">{{ projectInfo.content }}</div>
  </div>
</template>

<script setup lang="ts">
  import type { SideProject } from '~/types/sideProject';
  defineProps<{ projectInfo: SideProject}>();
</script>

<style scoped>
.card {
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .2);
}

.card_title {
  font-weight: bold;
  font-size: 1.2rem;
}
    
.card_img {
  width: 240px;
  height: 160px;
  margin: 10px 0px;
}
    
.card_content {
  margin: 0px 5px;
}

</style>