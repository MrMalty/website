// https://nuxt.com/docs/api/configuration/nuxt-config

// https://www.youtube.com/watch?v=dVcCRFVhz74

export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-11-01',
  modules: [
      '@nuxt/icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/supabase'
  ],
  runtimeConfig: {
      public: {
        stripePk: process.env.STRIPE_PK_KEY
      }
  },
  app: {
      head: {
        script: [
          { src: 'https://js.stripe.com/v3/', defer: true }
        ],
      }
    }
})
