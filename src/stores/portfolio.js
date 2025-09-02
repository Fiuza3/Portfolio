import { defineStore } from "pinia";
import { personalInfo, socialLinks } from './data/personalInfo'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { experience } from './data/experience'
import { education } from './data/education'

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    personalInfo,
    socialLinks,
    skills,
    projects,
    experience,
    education
  }),

  getters: {
    featuredProjects: (state) => state.projects.slice(0, 3),
    projectsByCategory: (state) => {
      const categories = {};
      state.projects.forEach((project) => {
        if (!categories[project.category]) {
          categories[project.category] = [];
        }
        categories[project.category].push(project);
      });
      return categories;
    },
    skillsByCategory: (state) => {
      const categories = {};
      state.skills.forEach((skill) => {
        if (!categories[skill.category]) {
          categories[skill.category] = [];
        }
        categories[skill.category].push(skill);
      });
      return categories;
    },
  },
});