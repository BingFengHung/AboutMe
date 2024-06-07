<template>
  <div class="container">
    <div class="title">{{ props.ability.title }}</div>
    <ul class="skill">
      <li v-for="(content, index) in props.ability.entries" :key="index">{{ content }}</li>
    </ul>
    <div class="progress_bar" ref="progressContainer">
      <div class="progress_in" :style="{ width: progressWidth }">
        <div class="circle">
          <div class="progress_text">{{ props.ability.progress }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Ability } from '~/types/ability';
  const props = defineProps<{ ability: Ability }>();

  const progressWidth = ref('0%')
  const progressContainer = ref(null);
  

  const startAnimation = () => {
    if (progressContainer.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressInElement = entry.target.querySelector('.progress_in') as HTMLDivElement | null;
            if (progressInElement) {
              progressInElement.style.animation = 'none';
              progressInElement.offsetHeight;
              progressInElement.style.animation = '';
              progressInElement.style.width = `${props.ability.progress}%`;
              observer.disconnect();
            }
          }
        })
      });

      observer.observe(progressContainer.value);
    }
  };

  watchEffect(() => {
    if (props.ability.progress) {
      startAnimation();
    }
  });
</script>

<style scoped>
.progress_bar {
  width: 100%;
  height: 15px;
  background-color: #dadada;
  margin: 25px 0;
  border-radius: 5px;
  overflow: visible;
  position: relative;
}

.progress_in {
  background-color: #b4be13;
  height: 100%;
  border-radius: 5px;
  width: 0px;
  transition: width 2s ease;
  position: relative;
  display: flex;
  align-items: center;
}
    
.progress_text {
  color: #7b7267;
  font-weight: bold;
  font-size: 12px;
}

.circle {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  right: 0px;
  box-sizing: border-box;
  border: 3px solid #b4be13;
}

.container {
  background-color: white !important;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, .2);
}

.title {
  font-size: 1.3rem;
  margin-left: 10px;
}
    
.skill {
  font-size: 1.2rem;
  list-style-type: square;
  margin-top: 5px;
}

@media screen and (max-device-width: 480px) { 
  .container .title {
    font-size: 1.2rem;
  }
}
</style>