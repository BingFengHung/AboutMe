<template> 
    <div class="code-container" @mouseover="startAnimation" @mouseleave="stopAnimation">
        <span class="bracket">&lt; </span>
        <span class="joe">
            <span class="letter">Joe</span>
        </span>
        <span v-if="props.isEndTag">
            <span class="bracket"> /</span>
            <span class="bracket">&gt;</span>
        </span>
        <span v-else>
            <span class="bracket"> &gt;</span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    isEndTag: { 
        type: Boolean, 
        default: false 
    }
});

const letters = ref<NodeListOf<Element>>();


const startAnimation = () => {
    letters.value?.forEach((letter) => {
    letter.classList.add('running');
});
};

const stopAnimation = () => { 
    letters.value?.forEach(letter => {
    // 只在 letter 有 'running' 類時移除
    if (letter.classList.contains('running')) { 
        letter.addEventListener('animationiteration', removeAnimation); 
    }});
};

const removeAnimation = (evt: any) => {
    const letter = evt.currentTarget;
    letter.classList.remove('running');
    // letter.style.animationDelay = '';
    letter.removeEventListener('animationiteration', removeAnimation)
}

onMounted(() => { 
    letters.value = document.querySelectorAll('.letter');
});
// letters.value = document.querySelectorAll('.letter');
// console.log(letters.value)
</script>

<style scoped>
.code-container {
  font-size: 2.5rem;
}

.bracket { 
  color: #71b259;
  font-weight: 900;
}

.joe {
  display: inline-block;
}

.letter {
    display: inline-block;
    animation: bounce 2s infinite;
    animation-play-state: paused; /* 初始狀態為暫停 */
    color: #1d71fd;
    font-weight: bold;
}

.letter.running {
    animation-play-state: running; /* 當加上 'running' 類時啟動動畫 */
}


@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-15px);
    }
    60% {
        transform: translateY(-5px);
    }
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
    .code-container {
      font-size: 2rem;
    }
}
</style>