<template>
  <div class="card" ref="container"> 
    <div class="card_title"> {{ projectInfo.title }} </div>
    <img class="card_img" :src="projectInfo.images[0]"/>  
    <div class="card_content"> {{ projectInfo.content }} </div>
    <div class="card_tag"> 
      <span v-for="(tag, index) in projectInfo.tags" :key="index">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Project } from '~/types/project';
  const container = ref<HTMLElement | null>(null);

  defineProps<{ projectInfo: Project}>();

  onMounted(()=> {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && container.value) {
          container.value.classList.add('show');
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    })
    
    if (container.value) observer.observe(container.value);
  })
</script>

<style scoped>
.card {
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .2);
  box-sizing: border-box;
  transition: transform .3s ease;
  animation: drop .5s forwards;
  opacity: 0.6;
  transform: translateY(-100px);
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card:nth-child(1) {
  animation-delay: 1.5s;
}

.card:nth-child(2) {
  animation-delay: 2s;
}

.card:nth-child(3) {
  animation-delay: 2.5s;
}

@keyframes drop {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card:hover {
  transform: scale(1.05);
}

.card_title {
  font-weight: bold;
  font-size: 1.2rem;
}

.card_content {
  margin: 0px 5px;
}

.card_img {
  width: 240px;
  height: 160px;
  margin: 10px 0px;
}

.card_tag {
  margin: 10px 0px;
  align-self: self-start;
}

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