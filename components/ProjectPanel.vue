<template>
<div class="container">
  <div class="project_container">
    <div class="project_container__title">專案項目</div> 
    <div class="project_container__body">
      <Project v-for="(project, index) in projects" :key="index" :project-info="project"></Project>
    </div>
  </div>
  
  <div class="sideProject_container">
    <div class="sideProject_container__title">Side Project</div> 
    <div class="sideProject_container__body">
      <SideProject v-for="(project, index) in sideProjects" :key="index" :project-info="project"></SideProject>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Project } from '~/types/project.ts'
import type { SideProject } from '~/types/sideProject';

const projects = reactive([] as Project[])
const sideProjects = reactive([] as SideProject[])

onMounted(async () => {
  const data = await fetchProjects()
  projects.splice(0, projects.length, ...data);

  const sideProjectData = await fetchSideProjects()

  sideProjects.splice(0, sideProjects.length, ...sideProjectData);
})

const fetchProjects = async () => {
  const data = await queryContent('projects', 'project').only('projects').find();
  return data[0]["projects"]
}

const fetchSideProjects = async() => {
  const data = await queryContent('projects', 'side-project').only('projects').find();
  return data[0]["projects"]
}
</script>

<style scoped>
.container {
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project_container {
  background-color: #dadada;
  padding: 10px;
  border-radius: 5px;
}

.sideProject_container {
  background-color: #dadada;
  padding: 10px;
  border-radius: 5px;
}

.project_container__title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.project_container__body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.sideProject_container__title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.sideProject_container__body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}


@media screen and (max-device-width: 480px) { 
  .project_container__body { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 10px; 
  }
  .sideProject_container__body {
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 10px; 
    
  }
}

@media screen and (min-width: 481px) {
  .project_container__body { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 10px; 
  }
  .sideProject_container__body {
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 10px; 
    
  }
}

@media screen and (min-width: 767px) {
  .project_container__body { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 10px; 
  }
  .sideProject_container__body {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 10px; 
    
  }
}

</style>
