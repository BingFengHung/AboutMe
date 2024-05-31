<template>
  <div class="container">
    <div class="dot">
      <span></span>
      <span></span>
      <span></span>
    </div>
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
}

.title {
  font-size: 1.5rem;
}

.dot span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0px 5px;
}

.dot span:nth-child(1) {
  background-color: #fb6158;
}
.dot span:nth-child(2) {
  background-color: #fdbb2b;
}
.dot span:nth-child(3) {
  background-color: #29cc41;
}
          
ul {
  padding: 0px;
}

li {
  list-style-type: none;
}

</style>