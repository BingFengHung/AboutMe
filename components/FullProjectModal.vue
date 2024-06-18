<template>
  <div class="outer">
    <div class="inner">
      <div class="inner_title">
        <div class="proj-title">
          <!-- <span class="tag"><&nbsp;</span> -->
          <span>#&nbsp;</span><span class="content">{{  project?.title }}</span>
          <!-- <span class="tag">&nbsp;/></span> -->
        </div>
        <div class="close_btn" @click="Close">
          <font-awesome :icon="['fas', 'xmark']" />
        </div>
      </div>
      <div class="proj-card">
        <header><img :src="`/AboutMe/icons/${iconLink}`"/>{{ project?.skillType }}{{ extension }}</header>
        <main class="proj-card-body">
          <div class="proj-card-body-content">{{  project?.content }}</div>
          <div class="proj-card-body-images">
            <img v-for="(img, index) in project?.images" :key="index" :src="`/AboutMe/images/${img}`"/>
          </div>
        </main>
        <footer>
          <div class="proj-skill">
            <span v-for="(skill, index) in project?.tags" :key=index>{{ skill }}</span>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { useProjectStore } from '#imports';
import { SkillMapping } from '~/utils/SkillTypeExtensions'; 

const projectStore = useProjectStore()
const extension = ref('')
const iconLink = ref('')
  
const project = projectStore.project || projectStore.sideProject
  
if (project && project.skillType) {

  const value = SkillMapping.get(project.skillType)!
  extension.value = value.extension
  iconLink.value = value.iconLink
}

const Close = () => {
  projectStore.setProject(null)
  projectStore.setSideProject(null)
  enableScroll()
}

const enableScroll = () => {
  document.body.style.overflow ='';
}

const disableScroll = () => {
  document.body.style.overflow ='hidden';
}

onMounted(() => {
  disableScroll();
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.outer {
  background-color: rgba(0, 0, 0, .8);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.inner {
  background-color: white;
  border-radius: 5px 5px 0 0;
  box-sizing: border-box;
  box-shadow: 2px 3px 4px gray;
}

.inner_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inner_title .close_btn {
  margin: 0px 10px;
  background-color: #dadada;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.inner header {
  background-color: #252525;
  border-radius: 5px 5px 0px 0px;
  font-size: 1rem;
  padding: 5px 5px;
}

.proj-title {
  margin: 5px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.proj-title span:nth-child(1) {
  font-weight: 900;
  color: #1b9fda;
}

.proj-title .tag {
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
}

.proj-title .content {
  font-size: 1.3rem;
  font-weight: bold;
}

.proj-card {
  width: 80vw;
  height: 60vh;
  display: grid;
  grid-template-rows: auto auto 1fr;
  background-color: #1e1e1e;
  border-radius: 5px 5px 3px 3px;
  color: white;
  margin: 5px;
}

.proj-card header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.proj-card header img {
  width: 20px;
  height: 20px;
  margin: 0px 5px;
}

.proj-card-body  {
  overflow: auto;
  margin: 10px;
}

.proj-card-body-content { 
  margin-bottom: 15px;
}

.proj-card-body-images {
  position: relative;
  margin: auto;
  display: flex;
  width: auto;
  flex-direction: column;
  text-align: center;
}

.proj-card-body-images img {
  text-align: center;
  margin-bottom: 10px;
  border: 1px solid #1b9fda;
  border-radius: 5px;
}

.proj-content {
  margin: 5px 15px;
  margin-bottom: 10px;
}

.proj-images {
  position: relative;
  margin: auto;
  display: flex;
  width: auto;
  flex-direction: column;
  text-align: center;
}
  
.proj-card-body-images img {
  width: auto;
  max-width: 50vw;
  border: 1px solid #1b9fda;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
}
  
.proj-skill {
  display: flex;
  justify-content: center;
  align-items: center;
}

.proj-skill span {
  margin: 5px 10px;
  background-color: #b4be13;
  color: white;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 1rem;
}
    
@media screen and (max-device-width: 480px) { 
  .proj-card {
    width: 80vw;
    height: 60vh;
    /* overflow: auto; */
  }
  
  .proj-title .tag {
    font-size: 1rem;
    color: #b4be13;
    font-weight: bold;
  }

  .proj-title .content {
    font-size: 1rem;
  }

  .proj-content {
    font-size: 1rem;
  }

  .proj-skill {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 767px) {
  .proj-card {
    width: 60vw;
    height: 70vh;
    /* overflow: auto; */
  }

  .proj-skill {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 980px) {
  .proj-card {
    width: 60vw;
    height: 50vh;
    /* overflow: auto; */
  }

  .proj-skill {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 1024px) {
  /*STYLES*/
  .proj-card {
    width: 70vw;
    height: 80vh;
    /* overflow: auto; */
  }

  .proj-images img {
    text-align: center;
    margin-bottom: 10px;
    border: 1px solid #1b9fda;
    border-radius: 5px;
  }
}

</style>