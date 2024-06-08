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
  import { SkillType } from '~/types/skillType'
  const projectStore = useProjectStore()
  const extension = ref('')
  const iconLink = ref('')
  
  const project = projectStore.project || projectStore.sideProject
  
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

.outer.no-scroll {
  
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
  margin: 0px 5px;
}

.proj-content {
  margin: 5px 15px;
  margin-bottom: 10px;
}

.proj-images {
  position: relative;
  margin: 5px 15px;
  display: flex;
  width: auto;
  flex-direction: column;
  height: 65%;
  text-align: center;
  overflow: auto;
}
  
.proj-images img {
  width: auto;
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
    
@media screen and (max-device-width: 480px) { 
  .proj-card {
    width: 90vw;
    height: 90vw;
    overflow: auto;
  }
  
  .proj-title .tag {
    font-size: 1rem;
  }

  .proj-title .content {
    font-size: 1rem;
  }

  .proj-images {
    position: relative;
    margin: 5px 15px;
    display: flex;
    width: auto;
    flex-direction: column;
    height: 60%;
    text-align: center;
    overflow: auto;
  }
  
  .proj-content {
    font-size: .9rem;
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
    height: 70vw;
    overflow: auto;
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
    height: 50vw;
    overflow: auto;
  }

  .proj-skill {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

}
</style>