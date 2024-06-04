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
  //const props = defineProps<{ contents: Array<string>, title: string }>();
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
}

</style>