<template>
  <div class="container">
    <div class="title">技能</div>
    <SkillCard :ability="desktop" />
    <SkillCard :ability="web" />
    <SkillCard :ability="mobile" />
  </div>
</template>

<script setup lang="ts">
  import type { Ability } from '~/types/ability';
  const desktop = reactive({} as Ability)
  const web = reactive({} as Ability)
  const mobile = reactive({} as Ability)

  onMounted(async () => {
    const desktopData = await fetchAbility('desktop') as Ability
    const webData = await fetchAbility('web') as Ability
    const mobileData = await fetchAbility('mobile') as Ability
    
    Object.assign(desktop, desktopData)
    Object.assign(web, webData)
    Object.assign(mobile, mobileData)
  })
  
  const fetchAbility = async (ability: string) => { 
    const data = await queryContent('abilities', ability).only(['title', 'entries', 'progress']).find()
    return data[0]
  }

</script>

<style scoped>
.container {
  background-color: #f5f5f5;
  color: #7b7267;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>