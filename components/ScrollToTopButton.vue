<template>
 <div v-show="isVisible" class="scroll-to-top-wrapper">
    <div :style="wrapperStyle" class="progress-wrapper">
      <button @click.stop="scrollToTop" class="scroll-to-top">
        <span><font-awesome :icon="['fas', 'rocket']"/></span>
        <!-- <div v-if="isAnimating" class="rocket-fire"></div> -->
        <div class="rocket-fire"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isAnimating = ref(false)
const isVisible = ref(false)
const scrollProgress = ref(0)

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (scrollTop / scrollHeight) * 100
  isVisible.value = scrollTop > 100
}

const scrollToTop = () => {
    isAnimating.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(() => {
    isAnimating.value = false;
  }, 1000);
}

const wrapperStyle = computed(() => {
  return {
    background: `conic-gradient(#4caf50 ${scrollProgress.value}%, #ddd ${scrollProgress.value}%)`,
    borderRadius: '50%',
    padding: '5px',
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
}

.scroll-to-top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  opacity: 1;
}

.scroll-to-top:hover {
  opacity: 1;
}

span {
  position: relative;
  transform: rotate(-42deg);
}

.rocket-animate {
  animation: rocketAnimation 1s ease;
}

@keyframes rocketAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.rocket-fire {
  position: absolute;
  bottom: 10px;
  left: 42%;
  transform: translateX(-50%);
  width: 8px;
  height: 10px;
  background: linear-gradient(to top, red, yellow);
  border-radius: 50% 50% 0% 0%; 
  animation: fireAnimation 0.5s infinite;
}
  
.rocket-fire::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 6px;
  background: linear-gradient(to top, yellow, red);
  /* border-radius: 50% 50% -50% -50%; */
}

@keyframes fireAnimation {
  0% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
  100% { transform: scaleY(1); }
}
</style>