<template>
  <div class="container">
    <DotMark></DotMark>
    <div class="title">興趣</div>
    <ul class="hobby_list">
      <li v-for="(hobby, index) in hobbies" :key="index">{{ hobby }}</li>
    </ul>
  </div>
</template>

<script setup language="ts">
import { reactive } from 'vue';

const hobbies = reactive([
  "研究新技術",
  "音樂",
  "籃球",
  "棒球",
  "羽毛球"
])
</script>


<style scoped>
.container {
  background-color: #272b33 !important;
  border-radius: 5px;
  min-height: auto;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
}

.title {
  font-size: 1.5rem;
  margin: 10px;
}

.hobby_list {
  list-style: none;
  font-size: 1.2rem;
  margin: 0px;
  padding: 0px;
}

.hobby_list li {
  margin: 20px;
}
</style>