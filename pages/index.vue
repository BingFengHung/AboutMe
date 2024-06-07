<template>
  <FullProjectModal v-if="selectedProject || selectedSideProject"></FullProjectModal>
  <div class="wrapper">
    <header class="nav-header">
      <div class="header-container">
        <div class="log-container">
          <NuxtLink class="log-link" v-scroll-to="'introduce'">
            <Logo />
          </NuxtLink>
        </div>

        <div class="menus">
          <div class="menu-icon">
            <input ref="menuBox" id="menu" name="menu" class="menu_check" type="checkbox">
            <label for="menu">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </label>
          </div>
        </div>
      </div>

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
      <!--
      <ProjectPanel id="projects"/>
      <Thanks/> -->
    </main>
    <footer>
      <Logo :isEndTag="true"/>
      <span>©BingFengHung</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { useProjectStore } from '~/stores/useProjectStore';
  const projectStore = useProjectStore()
  const selectedProject = computed(() => projectStore.project);
  const selectedSideProject = computed(() => projectStore.sideProject);
</script>

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

.menus {
  display: none;
}

.menu-icon {
  display: none;
  margin: 3px 5px;
  padding: 3px;
  border: 2px solid #1d7ef7;
  border-radius: 5px;
  /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .1); */
  box-shadow: 1px 2px 3px rgba(27, 159, 218, .3);
  transition: background-color 0.3s, transform 0.3s;
}

.bar1, .bar2, .bar3 {
  width: 30px;
  height: 2px;
  background-color: #1d7ef7;
  margin: 5px 0;
  transition: .4s;
}


.log-container {
  display: flex;
}

.nav {
  display: flex;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 8vh;
  padding: 0px 5px;
  background-color: #282828;
}

footer span {
  color: white;
  text-align: center;
}


@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
}

@media screen and (min-width: 1024px) {
  /*STYLES*/
}

@media screen and (min-width: 768px) and (max-width: 979px) {
  /* 如果使用者之視窗寬度介於 768px ~ 979px，將會再載入這裡的 CSS。 */
}

@media screen and (max-width: 767px) {
  /* 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。*/
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
  .nav-header {
    
  }
  
  .nav-header .nav { 
    font-size: 1rem;
  }

  .menus {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .menu-icon {
    display: inline-block;
  }

  .menu_check {
    display: none;
  }
  
  .nav { 
    display: none;
  }

  .nav-header {
    display: grid; 
    grid-template-columns: 1fr;
    width: 100vw;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    margin: 0px 10px;
  }
  
  .nav-header:has(.menu-icon > input[type=checkbox]:checked) > .nav {
    position: absolute;
    top: 8vh;
    display: flex;
    flex-direction: column;
    background-color: #282828;
    margin: 0px;
    padding: 0px;
    width: 100vw;
  }
  
  .nav-link {
    color: white;
    font-size: 1.3rem;
    /* margin-bottom: 10px; */
    margin: 10px 20px;
  }
  
  header {
    padding: 0px;
  }
  
  footer {
    display: flex;
    justify-content: space-between;
  }
}

</style>
