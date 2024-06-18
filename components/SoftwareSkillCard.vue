<template>
  <div class="container">
    <DotMark></DotMark>
    <div class="title">{{ skillInfo.title }}</div>  
    <div>
      <ul>
        <li v-for="(skill, index) in skillInfo.skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Skill } from '~/types/skill';
  defineProps<{ skillInfo: Skill}>();
</script>

<style scoped>
* {
  color: white;
  font-size: 1.2rem;
}

.container {
  background-color: #272b33 !important;
  border-radius: 5px;
  min-height: auto !important;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.title {
  font-size: 1.5rem;
}

ul {
  padding: 0px;
}

li {
  list-style-type: none;
  margin-left: 6px;
}

@media screen and (max-device-width: 480px) { 
  .title {
    font-size: 1.3rem;
  }
  
  li {
    font-size: 1.1rem;
    margin-bottom: 3px;
  }
}
</style>