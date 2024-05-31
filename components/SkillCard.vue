<template>
  <div>
    {{ props.title }}
    <ul>
      <li v-for="(content, index) in props.contents" :key="index">{{ content }}</li>
    </ul>
  </div>
  <div class="progress_bar" ref="progressContainer">
    <div class="progress_in" :style="{ width: progressWidth }">
      <div class="circle">
        <div class="progress_text">{{ progress }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    progress: {
      type: Number
    },
    title: {
      type: String
    },
    contents: {
      type: Array
    }
  })
  
  const progressWidth = ref('0%')
  const progressContainer = ref(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressInElement = entry.target.querySelector('.progress_in');
          progressInElement.style.animation = 'none';
          progressInElement.offsetHeight;
          progressInElement.style.animation = null;
          progressInElement.style.width=`${props.progress}%`;
          observer.disconnect();
        }
      })
    })
    if (progressContainer.value) {
      observer.observe(progressContainer.value);
    }
  })
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
  width: 0;
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
</style>