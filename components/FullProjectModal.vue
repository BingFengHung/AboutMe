<template>
  <div class="outer">
    <div class="inner">
      <div class="inner_title">
        <div class="proj-title">
          <span class="tag"><&nbsp;</span>
          <span class="content">{{  project?.title }}</span>
          <span class="tag">&nbsp;/></span>
        </div>
        <div class="close_btn" @click="Close">X</div>
      </div>
      <div class="proj-card">
        <header><img :src="`/AboutMe/icons/${iconLink}`"/>{{ project?.skillType }}{{ extension }}</header>
        <div class="proj-content">{{  project?.content }}</div>
        <div class="proj-images">
          <img v-for="(img, index) in project?.images" :key="index" :src="`/AboutMe/images/${img}`"/>
        </div>
        <div class="proj-skill">
          <span v-for="(skill, index) in project?.tags" :key=index>{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useProjectStore } from '#imports';
  import { SkillType } from '~/types/project'
  const projectStore = useProjectStore()
  const extension = ref('')
  const iconLink = ref('')
  
  const project = projectStore.project
  
  if (project && project.skillType) {
    switch (project.skillType) {
      case SkillType.Web:
        extension.value = '.vue'
        iconLink.value = 'vue.png'
        break;
      case SkillType.Mobile:
        extension.value = '.xaml'
        iconLink.value = 'xamarin.png'
        break;
      case SkillType.Desktop:
        extension.value = '.cpp'
        iconLink.value = 'cpp.png'
        break;
      case SkillType.AI:
        extension.value = '.py'
        iconLink.value = 'python.png'
        break;
      default:
        extension.value = '.c'
    }
  }

  const Close = () => {
    projectStore.setProject(null)
  }
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
}

.inner {
  background-color: white;
}

.inner_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inner_title .close_btn {
  margin: 0px 10px;
  background-color: #dadada;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
}

.inner header {
  background-color: #252525;
  border-radius: 5px 5px 0px 0px;
  font-size: 1rem;
  padding: 3px 5px;
}

.proj-title {
  margin: 5px;
  font-size: 1.5rem;
}

.proj-title .tag {
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
}

.proj-title .content {
  font-size: 1.3rem;
}

.proj-card {
  width: 60vw;
  height: 55vw;
  background-color: #1e1e1e;
  border-radius: 5px 5px 0px 0px;
  color: white;
  margin: 5px;
}

.proj-card header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.proj-card header img {
  width: 2.5%;
  height: 2.5%;
  margin-right: 10px;
}

.proj-content {
  margin: 5px;
  margin-bottom: 10px;
}

.proj-images {
  position: relative;
  margin: 5px;
  display: inline-block;
  overflow: auto;
  height: 65vh;
  text-align: center;
}
  
.proj-images img {
  display: inline-block;
  height: auto;
  margin-bottom: 10px;
  text-align: center;
  border: 1px solid #1b9fda;
  border-radius: 5px;
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
  
</style>