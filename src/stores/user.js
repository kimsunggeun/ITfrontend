import api from '@/api/api'
import router from '@/router/main'
import { defineStore } from 'pinia'



export const useAuthStore = defineStore('auth', {
    state: () => ({
      isAuthenticated: false,
      checked: false,
    }),
    actions: {
      async checkAuth() {
        try {
          await api.get('/auth/check')
          this.isAuthenticated = true
        } catch (e) {
          this.isAuthenticated = false
        } finally {
          this.checked = true
        }
      },
  
  // 테스트    // /
   
      async logout() {
        try {
          await api.post('/auth/logout')
        } catch (e) {
          console.error('logout error:', e)
        } finally {
          this.isAuthenticated = false
          this.checked = false
        }
      }
    },
    persist: {
      storage: sessionStorage,
      paths: ['isAuthenticated'],
    }
  })