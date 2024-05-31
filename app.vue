<template>
  <div>
    <NuxtPwaManifest/>
    <NuxtLoadingIndicator/>
    <header>
      <div>Home</div>
      <ul> 
        <li>Introduce</li>
        <li>關於我</li>
        <li>經歷</li>
        <li>技能</li>
        <li>專案</li>
      </ul>
    </header>

    <Introduce/>
    <About/>
    <SkillPanel/>
    <ProjectPanel/>
    <Thanks/>
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
  z-index: 1;
}

header ul {
  display: flex;
}

header li {
  list-style: none;
  margin: 0px 20px;
}

</style>