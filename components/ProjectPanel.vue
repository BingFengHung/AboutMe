<template>
<div>
  <div>專案項目</div> 
  <Project v-for="(project, index) in projects" :key="index" 
          :title="project.title" :contents="project.contents" :imageUrl="project.imageUrl" :importants="project.importants"></Project>
  
  <div>Side Project</div> 
  <sideProject v-for="(project, index) in sideProjects"></sideProject>
</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const projects = reactive([{
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
  }])

const sideProject= reactive([{
  
}])
</script>

<style scoped>
</style>
