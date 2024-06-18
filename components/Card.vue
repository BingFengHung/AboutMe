<template>
  <div class="container">
    <DotMark></DotMark>
    <div class="title">{{ props.title }}</div>  
    <div>
      <ul>
        <li v-for="(content, index) in props.contents" :key="index">
          {{ content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ contents: Array<string>, title: string }>();
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
  margin-bottom: 5px;
  margin-left: 10px;
}

@media screen and (max-device-width: 480px) { 
  .title { 
    font-size: 1.2rem; 
  }

  li {
    list-style-type: none;
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 1rem;
  }
}
</style>