export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js',
    '~/plugins/db-api.js',
    '~/plugins/auth-api.js',
    '~/plugins/proxy-api.js',
    { src: '~/plugins/auth-setup.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  publicRuntimeConfig: {
    dbApiUrl: process.env.DB_API_URL,
    authApiUrl: process.env.AUTH_API_URL,
    proxyApiUrl: process.env.PROXY_API_URL,
    firebaseApiKey: process.env.FIREBASE_API_KEY
  },

  axios: {
    credentials: false
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  serverMiddleware: [
    '~/api/index.js'
  ]
}
