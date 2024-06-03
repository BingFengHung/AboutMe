<template>
  <div class="container">
    <div class="title">{{ languageName}}</div>
    <div class="levels">
      <div class="level">
        <span>聽：</span>
        <ProgressBar :progress="listen"></ProgressBar>
      </div>
      <div class="level"> 
        <span>說：</span> 
        <ProgressBar :progress="speak"></ProgressBar>
      </div>
      <div class="level"> 
        <span>讀：</span> 
        <ProgressBar :progress="read"></ProgressBar>
      </div>
      <div class="level"> 
        <span>寫：</span> 
        <ProgressBar :progress="write"></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import type { Language, Level } from '~/types/language';

const props = defineProps<{ language: Language }>()

const { language } = toRefs(props);
const { language: languageName, level } = toRefs(language.value);
const { listen, speak, read, write } = toRefs(level.value);

</script>

<style scoped>
.title {
  font-size: 1.5rem;
  color: white;
}

.levels {
  color: white;
}

.level {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>