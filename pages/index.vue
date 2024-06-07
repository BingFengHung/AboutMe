<template>
  <div class="wrapper">
    <header class="nav-header">
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
    <main>
      <Introduce id="introduce"/>
      <About id="about"/>
      <SkillPanel id="skills"/>
      <ProjectPanel id="projects"/>
      <Thanks/>
    </main>
    <footer>
      ©BingFengHung
    </footer>
  </div>
</template>

<style>
body {
  margin: 0px;
  position: relative;
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
  height: 8vh;
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
