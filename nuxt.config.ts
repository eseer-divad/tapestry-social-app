import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['nuxt-quasar-ui'],

  quasar: {
    plugins: ['Notify', 'Dialog'], // Add any Quasar plugins you need
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    },
    config: {
      brand: {
        primary: '#1976D2',
        secondary: '#26A69A',
        accent: '#9C27B0',
        dark: '#1D1D1D',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  },

  typescript: {
    strict: true
  },

  compatibilityDate: '2024-09-01'
})