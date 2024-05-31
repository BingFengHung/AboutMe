<template>
  <div class="container">
    <div>技能</div>
    <SkillCard :progress="wpf.progress" :title="wpf.title" :contents="wpf.contents"/>
    <SkillCard :progress="mobile.progress" :title="mobile.title" :contents="mobile.contents"/>
    <SkillCard :progress="web.progress" :title="web.title" :contents="web.contents"/>
  </div>
</template>

<script setup lang="ts">
  const wpf = reactive({
    title: 'WPF/Caliburn Micro',
    contents: [
      '開發各式控制器加值軟體，提升客戶操作效率',
      'Caliburn Micro/MVVM',
      'AutoFac',
      'NUnit/Moq'
    ],
    progress: 90
  })

  const mobile = reactive({
    title: 'Xamarin.Forms/ASP.NET',
    contents: [
      '透過手機 APP 可遠端對控制器進行操作，提升人員工作效率與操作便利性',
      'Xamarin.Forms',
      'SkiaShap',
      'ASP.NET 資料串接'
    ],
    progress: 65
  })

  const web = reactive({
    title: 'Nuxt.js/Vue.js/Node.js',
    contents: [
      '開發公司內部網站與客戶 iFactory 網頁版',
      '前後端專案分離，具備可擴充性與可測試性',
      '減少頁面載入時間，並優化前端效能'
    ],
    progress: 70
  })

</script>

<style scoped>
.container {
  background-color: #f5f5f5;
  color: #7b7267;
}
</style>