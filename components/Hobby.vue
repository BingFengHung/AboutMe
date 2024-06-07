<template>
  <div class="container">
    <DotMark></DotMark>
    <div class="title">興趣</div>
    <!-- <font-awesome icon="cog" /> -->
    <ul class="hobby_list">
      <li v-for="(hobby, index) in hobbies" :key="index">
        {{ hobby.text }}
        <font-awesome :icon="hobby.icons"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface MyHobby {
  text: string;
  icons: string[];
} 

const hobbies: Array<MyHobby> = reactive([])

hobbies.push({ text: '研究新技術', icons: ['fas', 'book-open-reader']});
hobbies.push({ text: '音樂', icons: ['fas', 'icons']});
hobbies.push({ text: '籃球', icons: ['fas', 'basketball']});
hobbies.push({ text: '棒球', icons: ['fas', 'baseball']});
hobbies.push({ text: '騎腳踏車', icons: ['fas', 'bicycle']});


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
  display: flex;
  flex-wrap: wrap;
}

.hobby_list li {
  margin: 20px;
}
</style>