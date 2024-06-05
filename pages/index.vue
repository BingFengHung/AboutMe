<template>
  <div>
    <header>
      <div>Home</div>
      <font-awesome icon="cog" />
      <font-awesome :icon="['fab', 'github']" size="2x"/>
      <div class="nav"> 
        <NuxtLink class="nav-link" v-scroll-to="'introduce'">
          <font-awesome :icon="['fas', 'house']"/>
          首頁
        </NuxtLink>
        <NuxtLink class="nav-link" v-scroll-to="'about'">
          <font-awesome :icon="['fas', 'address-card']"/>
          關於我
        </NuxtLink>
        <NuxtLink class="nav-link" v-scroll-to="'skills'">
          <font-awesome :icon="['fas', 'bolt']"/>
          技能
        </NuxtLink>
        <NuxtLink class="nav-link" v-scroll-to="'projects'">
          <font-awesome :icon="['fas', 'lightbulb']"/>
          專案
        </NuxtLink>
      </div>
    </header>

    <section id="introduce">
      <!-- <Introduce/> -->
      <div class="block1"></div>
    </section>

    <section id="about">
    <!-- <About/> -->
      <div class="block2"></div>
    </section>

    <section id="skills">
      <!-- <SkillPanel/> -->
      <!-- <div class="block3"></div> -->
    </section>
    
    <section id="projects">
      <!-- <ProjectPanel/> -->
      <div class="block4"></div>
    </section>

    <Thanks/>
    <footer>
      copyright BingFengHung
    </footer>
  </div>
</template>

<style>
body {
  margin: 0px;
  position: relative;
}

.block1 {
  background-color: red;
  height: 50vh;
}
.block2 {
  background-color: green;
  height: 50vh;
}
.block3 {
  background-color: yellow;
  height: 50vh;
}
.block4 {
  background-color: blue;
  height: 50vh;
}
</style>

<style scoped>
header {
  position: sticky;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  font-size: 1.5rem;
  background-color: #282828;
  color: white;
  cursor: pointer;
  z-index: 2;
}

header li {
  list-style: none;
  margin: 0px 20px;
}

.nav {
  display: flex;
  padding: 20px 0px;
}
.nav-link {
  color: white;
  text-decoration: none;
  margin: 0px 20px;
}

.nav-link:hover {
  font-weight: bold;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #dadada;
}

</style>
