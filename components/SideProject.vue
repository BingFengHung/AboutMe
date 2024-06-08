<template>
  <div class="card" @click="SideProjectCardClick">
    <div class="card_title">{{ projectInfo.title }}</div>
    <div class="card_img_container">
      <img class="card_img" :src="imageLink"/>
    </div>
    <div class="card_content">{{ projectInfo.content }}</div>
    <a class="card_link" v-if="projectInfo.link" :href="projectInfo.link">
      <font-awesome :icon="['fab', 'github']"/> Go
    </a>
  </div>
</template>

<script setup lang="ts">
  import type { SideProject } from '~/types/sideProject';
  import { useProjectStore } from '#imports';
  
  const { projectInfo } = defineProps<{ projectInfo: SideProject}>();
  
  const projectStore = useProjectStore()
  
  const imageLink = computed(() => {
    if (projectInfo && projectInfo.images && projectInfo.images.length > 0) {
      return `/AboutMe/images/${projectInfo.images[0]}`
    }
  })
  
  const SideProjectCardClick = () => {
    projectStore.setSideProject(projectInfo)
  }
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
  cursor: pointer;
}
.card:hover {
  transform: scale(1.03);
}

.card_title {
  font-weight: bold;
  font-size: 1.2rem;
}

.card_img_container {
  width: 240px;
  height: 160px;
  margin: 10px 0px;
  overflow: hidden;
}
    
.card_img {
  width: 240px;
  height: auto;
}
    
.card_content {
  margin: 0px 5px;
}

.card_link {
  text-decoration: none;
  color: black;
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