<template>
<div class="container">
  <DotMark></DotMark>
  <div class="langPanel">
    <LanguageCard v-for="({title, level}, index) in languages" :key="index" 
    :title="title" 
    :level="level"></LanguageCard>
  </div>
</div>
</template>

<script setup lang="ts">
  defineProps({
    languages: {
      type: Array
    }
  })
</script>

<style scoped>
.container {
  background-color: #272b33 !important;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
}
    
.langPanel {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>