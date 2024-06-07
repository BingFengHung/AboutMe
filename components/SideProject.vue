<template>
  <div class="card">
    <div class="card_title">{{ projectInfo.title }}</div>
    <img class="card_img" :src="imageLink"/>
    <div class="card_content">{{ projectInfo.content }}</div>
    <a class="card_link" v-if="projectInfo.link" :href="projectInfo.link">
      <font-awesome :icon="['fab', 'github']"/>
      Link
    </a>
  </div>
</template>

<script setup lang="ts">
  import type { SideProject } from '~/types/sideProject';
  const {projectInfo} = defineProps<{ projectInfo: SideProject}>();
  
  const imageLink = computed(() => {
    if (projectInfo && projectInfo.images && projectInfo.images.length > 0) {
      return `/AboutMe/images/${projectInfo.images[0]}`
    }
  })
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

.card_link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 3px 5px;
  margin: 1px 2px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .2);
}

.card_link:visited {
  text-decoration: none;
  color: white;
}

</style>