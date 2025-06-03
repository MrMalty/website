import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        isMenuOverlay: false,
        isLoading: false,
        cart: [],
        checkout: [],
        userId: null,
    }),
    persist: true
})