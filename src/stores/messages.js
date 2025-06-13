
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    isMessage: '',
    isColor:'',
    isShow: false
  }),

  actions: {
    add(sendMessage,sendColor) {
        this.isMessage = sendMessage
        this.isColor = sendColor
        this.isShow =  true
    },
  
  }
})