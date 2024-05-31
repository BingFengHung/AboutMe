<template>
  <div> 
    <div> {{ title }} </div>
    <img :src="imageUrl"/>  
    <div> {{ contents }} </div>
    <span v-for="(important, index) in importants" :key="index">{{ important }}</span>
  </div>
</template>
<script setup>
  defineProps({
    title :{ 
      type: String
    },
    contents: {
      type: String
    },
    importants: {
      type: Array
    },
    imageUrl: {
      type: String
    }
  })
</script>

<style scoped>
span {
  display: inline-block;
  border: 1px solid #b4be13;
  background-color: #b4be13;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 2px;
  font-size: .8rem;
}
</style>