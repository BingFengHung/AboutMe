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