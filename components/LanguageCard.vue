<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="levels">
      <div class="level">
        <span>聽：</span>
        <ProgressBar :progress="level.listen"></ProgressBar>
      </div>
      <div class="level"> 
        <span>說：</span> 
        <ProgressBar :progress="level.say"></ProgressBar>
      </div>
      <div class="level"> 
        <span>讀：</span> 
        <ProgressBar :progress="level.read"></ProgressBar>
      </div>
      <div class="level"> 
        <span>寫：</span> 
        <ProgressBar :progress="level.write"></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: { 
      type: String
    },
    level: {
      type: Object
    }
  })
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