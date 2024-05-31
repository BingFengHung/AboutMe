<template>
<div class="container">
<header>
  <Tag>關於我</Tag>
</header>
<main>
  <Card title="個人介紹.html" :contents="aboutMe">
  </Card>
  
  <div class="skills">
    <Card title=".NET 技術.cs" :contents="csSkill"></Card>
    <Card title="網頁開發.js" :contents="webSkill"></Card>
    <Card title="其他技術.sh" :contents="otherSkill"></Card>
  </div>
  
  <div class="languages">
    <LanguageCard :title="chinese.title" :level="chinese.level"></LanguageCard>
    <LanguageCard :title="english.title" :level="english.level"></LanguageCard>
  </div>
</main>
</div>
</template>

<script setup lang="ts">
  const chinese = reactive({
    title: '中文',
    level: {
      listen: 30,
      say: 50,
      read: 10,
      write: 50
    }
  })

  const english = reactive({
    title: '英文',
    level: {
      listen: 30,
      say: 50,
      read: 10,
      write: 50
    }
  })

  const aboutMe = reactive([
    "1. 軟體工作資歷達 8 年，擅長 .NET 桌面程式、前端網頁與手機 APP 開發",
    "2. 能夠站在客戶的角度思考，交付客戶滿意的軟體與最佳使用者體驗",
    "3. 具有敏銳的洞察力與思考力，以及靈活彈性的運籌能力"
  ]);
  
  const csSkill = reactive([
    "桌面程式：WPF/WinForm",
    "手機開發：Xamarin.Form",
    "伺服器：ASP.NET Core",
    "單元測試：NUnit/Moq",
    "框架：Caliburn.Micro",
  ])

  const webSkill = reactive([
    "HTML/CSS/JavaScript",
    "Vue.js/Nuxt.js/React.js",
    "Node.js Express",
    "WebSocket",
  ])
  const otherSkill = reactive([
    "容器化技術：Docker",
    "作業系統：Windows、Linux",
    "容器化技術：Docker",
    "編輯器：VIM"
  ])
</script>

<style scoped>
.container {
  background-color: #323643;
}
  
header {
  font-size: 3rem;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>