<template>
  <div class="container">
    <div class="dot">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="title">{{ title }}</div>
    <div class="level">
      聽: {{ level.listen }}
      說: {{ level.say }}
      讀: {{ level.read }}
      寫: {{ level.write }}
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

<style scope>
.container {
  
}
      
.title{
}
      
.level {
  
}
</style>