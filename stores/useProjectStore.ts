import { defineStore } from 'pinia';
import type { Project } from '~/types/project'; 

export const useProjectStore = defineStore('project', {
  state: () => ({
    project: null as Project | null
  }),
  actions: {
    setProject(project: Project | null) {
      this.project = project
    }
  }
})