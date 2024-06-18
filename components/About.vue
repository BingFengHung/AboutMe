<template>
<div class="about_container">
  <header>
    <Tag>關於我</Tag>
  </header> 
  <main>
    <Card title="個人介紹.html" :contents="aboutMe"></Card>
    
    <div class="skills">
      <SoftwareSkillCard class="skill1" :skill-info="dotNetSkill"/>
      <SoftwareSkillCard class="skill2" :skill-info="webSkill"/>
      <SoftwareSkillCard class="skill3" :skill-info="otherSkill"/>
    </div> 
    <div class="personal">
      <LanguagePanel :languages="languages"></LanguagePanel>
      <Hobby></Hobby>
    </div>
  </main>
</div>
</template>

<script setup lang="ts">
import type { Language } from '~/types/language'; 
import type { Skill } from '~/types/skill'; 

const aboutMe: string[] = reactive([])
const dotNetSkill = reactive({} as Skill)
const webSkill = reactive({} as Skill)  
const otherSkill = reactive({} as Skill)
const languages: Array<Language> = reactive([]) 

onMounted(async () => {
  const langs = await fetchLanguages()
  languages.splice(0, languages.length, ...langs);

  const me = await fetchAboutMe();
  aboutMe.splice(0, aboutMe.length, ...me)

  const csharp = await fetchSkills('csharp');
  ({ title: dotNetSkill.title, skills: dotNetSkill.skills} = csharp);

  const web = await fetchSkills('web');
  ({ title: webSkill.title, skills: webSkill.skills} = web);

  const other = await fetchSkills('other'); //await queryContent('aboutme', 'other-skill').only('entries').find()
  ({ title: otherSkill.title, skills: otherSkill.skills} = other);
})

const fetchLanguages = async () => {
  const data = await queryContent('aboutme', 'language-proficiency').only('body').find()
  const langs: Array<Language> = JSON.parse(JSON.stringify(data[0]['body']))
  return langs;
}

const fetchAboutMe = async() => {
  const me = await queryContent('aboutme', 'me').only('entries').find();
  return me[0]['entries']
}

const fetchSkills = async (skill: string): Promise<Skill> => {
  const result = await queryContent('aboutme','skills', skill).only(['title', 'skills']).find() as Skill[];
  return result[0]
}

</script>

<style scoped>
.about_container {
  background-color: #323643;
  padding: 0px 10px;
  padding-bottom: 5px;
}
  
.about_container header {
  margin-bottom: 10px;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
    
.personal {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-device-width: 480px) { 
  .skills {
    display: grid;
    grid-template-columns: 1fr;
  }
  .personal {
    display: grid; 
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 481px) {
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 定義兩列，寬度均等 */
    grid-template-rows: auto auto; /* 定義兩行，自動調整高度 */
  }
  
  .skill1 {
    grid-column: 1 / 2;;
    grid-row: 1 / 2;;
  }
  
  .skill2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  
  .skill3 {
    grid-column: 1 / 3;
    grid-row:  2/ 3;
  }
}

@media screen and (min-width: 768px) and (max-width: 979px) {
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .skill1 {
    grid-column: 1 / 2;;
    grid-row: 1 / 2;;
  }
  
  .skill2 {
    grid-column: 2 / 3;;
    grid-row: 1 / 2;;
  }
  
  .skill3 {
    grid-column: 3 / 4;;
    grid-row: 1 / 2;;
  }
}

@media screen and (min-width: 980px) { 
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .skill1 {
    grid-column: 1 / 2;;
    grid-row: 1 / 2;;
  }
  
  .skill2 {
    grid-column: 2 / 3;;
    grid-row: 1 / 2;;
  }
  
  .skill3 {
    grid-column: 3 / 4;;
    grid-row: 1 / 2;;
  }
}
</style>