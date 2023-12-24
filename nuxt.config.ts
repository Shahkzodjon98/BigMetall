export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxt/ui', '@pinia/nuxt', "@pinia-plugin-persistedstate/nuxt", '@nuxtjs/i18n',
],
i18n: {
  vueI18n: './i18n.config.ts' // if you are using custom path, default 
},
  postcss: {
      plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
