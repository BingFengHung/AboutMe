<template>
  <div class="wrappers">
    <div class="background-text" :data-content="bgContent"></div>
    <div class="container">
      <h2 class="title">
        <span class="title_tag"><&nbsp;</span>
        <span class="title_hi">Hi! </span>
        <span class="title_name">I am Joe</span>
        <span class="title_tag">&nbsp;/></span>
      </h2>
      
      <img class="avatar_img" src="/avatar.png"/>
      <div class="experience">
        <h3>2016 國立勤益科技大學 工業工程與管理所 碩士</h3>
        <h3>2017 ~ 至今 協鴻工業軟體工程師</h3>
        <h3><span>{{ year }}+</span> 以上開發經驗</h3>
      </div>
      <div class="link">
        <a href="https://bingfenghung.github.io/blog">
          <font-awesome :icon="['fas', 'blog']" size="2x"/>
          Blog
        </a>
        <a href="https://github.com/BingFengHung">
          <font-awesome :icon="['fab', 'github']" size="2x"/>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
  const bgContent = ref('01 '.repeat(2000)); 
  const year = ref(0)
  const bgText = ref(''); //(new Array(100).fill('01'))
  const today = new Date()
  year.value = today.getFullYear() - 2016
  
  // const greetText = ['01'];// , 'Hello ', 'I am Joe ']
  // const rand = Math.floor(Math.random() * greetText.length)
  
  // bgText.value = new Array(100).fill(greetText[rand]).join('')
  
  const getRandomColor = () => {
    const opacity = Math.random()
    
    return `rbga(131, 148, 150, ${opacity}) !important`
  }
  
</script>

<style scoped>
* {
  color: white;
  z-index: 1;
}

.avatar_img  {
  width: 20%;
  height: auto;
  border-radius: 50%;
}

.wrappers {
  height: 92vh; /* 與 header 8vh 扣掉後的高度*/
  background-color: #002451;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  position: relative;
}

.container {
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.title {
  font-size: 3rem;
}
.title_tag {
  color: white;
}

.title_hi {
  color: #1d7ef7;
}

.title_name {
  color: #71b259;
}

/* .experience {
  font-size: 1.3rem;
} */

.experience h3{
  font-size: 1.3rem;
  text-shadow: #fc0 1px 0 10px;
  display: flex;
  align-items: center;
}

.experience h3 span {
  color: #90c31f;
  font-size: 2rem;
  margin-right: 8px
}

.link {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.link a {
  text-decoration: none;
}

.background-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
}

.background-text::before {
  content: attr(data-content);
  display: block;
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  line-height: 1.2;
  opacity: 0.08; /* 調整透明度 */
  font-size: 24px;
  font-family: 'Source Code Pro', monospace;
  color: #839496;
  overflow: hidden;
  pointer-events: none;
}

</style>