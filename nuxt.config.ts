// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   port: 8080,
  //   host: '0.0.0.0'
  // },
  plugins: ['~/plugins/scroll.js'],
  ssr: false,
  app: {
    head: {
      title: 'About Joe',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: 'favicon.ico' }
      ]
    },
    baseURL: '/AboutMe/'
  },
  modules: ['@vite-pwa/nuxt', "@nuxt/content", "@vesp/nuxt-fontawesome"],
  fontawesome: {
    icons: {
      solid: ['cog', 'house', 'address-card', 'bolt', 'lightbulb', 'rocket', 'blog', 'book-open-reader', 'icons', 'baseball', 'basketball', 'bicycle'],
      regular: ['comment' ],
      brands: ['github', 'twitter'],
    }
  },
  pwa: {
    manifest: {
      name: 'About Me PWA',
      short_name: 'AboutMe' ,
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ], 
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    }, 
  },
  content: {
    documentDriven: true,
    experimental:{
      clientDB: true
    }
  }
})