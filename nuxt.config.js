const pkg = require('./package')
const nuxtVars = require('./nuxt.vars')(process.env.NODE_ENV)
module.exports = {
  mode: 'universal',
  env: {},
  /*
  ** Headers of the page
  */
  head: {
    title: '兼职赚钱',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/stylesheets/application.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/axios'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: nuxtVars.API_HOST
  },
  /*
  ** Build configuration
  */
  build: {
    styleResources: {
      scss: 'assets/stylesheets/mixins/*.scss'
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
