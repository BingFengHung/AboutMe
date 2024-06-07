import { defineStore } from 'pinia';
import type { Project } from '~/types/project'; 
import type { SideProject } from '~/types/sideProject';

export const useProjectStore = defineStore('project', {
  state: () => ({
    project: null as Project | null,
    sideProject: null as SideProject | null
  }),
  actions: {
    setProject(project: Project | null) {
      this.project = project
    },
    setSideProject(proj: SideProject | null) {
      this.sideProject = proj
    }
  }
})