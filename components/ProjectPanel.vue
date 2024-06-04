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

/* 
const projectss = reactive([{
    title: 'AI 刀具破損檢知',
    contents: "在加工過程中，若刀具斷裂將造成該工件無效加工；為了避免此問題，透過電流趨勢的判斷，在刀具即將斷裂前提前檢出。",
    importants: ["RaspberryPi", "Docker", "C"],
    imageUrl: './xxx.png'
  }, {
    title: '智慧化工廠系統',
    contents: "蒐集各大廠牌的機台資訊，讓管理者能方便得知當天的稼動率資訊，以此來統計產能。支援 CCD 遠端監控、加工程式傳輸與預覽、整廠機台生產率資訊、主軸電流、完工手機通報功能。",
    importants: ['Vue.js', 'BootstrapVue', 'Node.js Express', 'MySQL', 'D3.js', 'EChart.js', 'CCD RTSP'],
    imageUrl: './xxx.png'
  }, {
    title: '加工路徑優化',
    contents: "透過讀取客戶 DXF 檔案，並讓使用者選擇加工範圍，一鍵自動轉出加工程式，並針對加工程式的路徑進行優化，與一般加工工法相比，有效提升加工效率 34%",
    importants: ['GCode', 'dxf 檔案解析', 'CAD 繪製', 'WPF CoreFramework', 'Namedpipe'],
    imageUrl: './xxx.png'
  }]) */

/* const sideProjects= reactive([{
  title: 'WPFMVVMFileOpen',
  contents: '使用 Visual Studio Extension 開發一個小工具，加快程式開發的效率。方便在開發 WPF 的時候，快速的在 View 與 ViewModel 檔案之間進行快速切換',
  imageUrl: './xxx.png'
}, {
  title: 'AI Git Commit Message',
  contents: '使用 HuggingFace 上面的 narySt/codeT5p_CommitMessageGen 模型協助產生 git message，並將此功能做成一個 CLI 工具，只需要下指令，即可自動產生 Commit Message',
  imageUrl: './xxx.png'
}, {
  title: 'CodeSnippets (Visual Studio Extensions)',
  contents: '方便在 Visual Studio 中自定義常用的程式與法 (CRUD)',
  imageUrl: './xxx.png'
}, {
  title: 'VisualStudioBuildScriptGenerator',
  contents: '由於將專案加入到版本管控的時候，通常再次 Clone 下載專案下來的時候，相關的檔案連結會不見；為此，本工具主要的目的是產生一個腳本，Clone 專案下來的時候，執行腳本就能完成編譯的動作，而不會因為缺少東西導致編譯失敗。',
  imageUrl: './xxx.png'
}]) */
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
</style>
