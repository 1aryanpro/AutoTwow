import { config } from 'dotenv';
config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AutoTwow',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    /*[
      '@nuxtjs/firebase',
      {
        config: {
          appId: process.env.VUE_APP_FIREBASE_APP_ID,
          apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
          authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
          storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
          databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
          messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
        },
        services: {
          auth: true,
          firestore: true,
        },
        firestore: {
          enablePersistence: true,
          emulatorPort: 8080,
          emulatorHost: 'localhost',
        },
      },
    ],*/,
    '@nuxtjs/axios'
  ],

  env: {
    DISCORD_SECRET: process.env.DISCORD_SECRET
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
