import { defineStore } from 'pinia'


export const useHistoryStore = defineStore('history', {
    state: () => ({
      visitedPages: [] 
    }),
    actions: {
      addPage(page) {
        const exists = this.visitedPages.some(p => p.name === page.name)
        if (!exists) {
          this.visitedPages.push(page)
          this.visitedPages = this.visitedPages.slice(-10) 
        }
      },
      delPage(path){
        this.visitedPages = this.visitedPages.filter(p => p.name !== path)
      }
    }
  })