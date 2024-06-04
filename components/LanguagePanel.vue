<template>
<div class="container">
  <DotMark></DotMark>
  <div class="langPanel">
    <LanguageCard v-for="(language, index) in languages" :key="index" 
    :language="language"></LanguageCard>
  </div>
</div>
</template>

<script setup lang="ts">
import type { Language } from '~/types/language';

defineProps({
  languages: {
    type: Array<Language>
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