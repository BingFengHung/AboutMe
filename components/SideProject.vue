<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ contents }}</div>
    <img :src="imageUrl"/>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: { type: String},
    contents: { type: String},
    imageUrl: { type: String}
  })
</script>

<style scoped>
</style>