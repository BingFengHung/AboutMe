<template>
  <div class="container">
    <DotMark></DotMark>
    <div class="title">{{ title }}</div>  
    <div>
      <ul>
        <li v-for="(content, index) in contents" :key="index">
          {{ content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    contents: {
      type: Array,
      required: true
    }
  })
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