import env from './env'
const { NODE_ENV } = process.env
// const proxy = NODE_ENV !== 'prod'
const axios =
  NODE_ENV === 'prod'
    ? {
        proxy: true,
        baseURL: '/',
      }
    : { proxy: false }
const baseUrl = env[NODE_ENV].baseUrl
// console.log('nuxt.config process.env', process.env)
console.log('nuxt.config process.env.NODE_ENV', process.env.NODE_ENV)
console.log('nuxt.config env', env)
console.log('nuxt.config axios', axios)
console.log('nuxt.config baseUrl', baseUrl)

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  publicRuntimeConfig: {
    publicValue: 1,
    API_SECRET: process.env.API_SECRET,
  },

  privateRuntimeConfig: {
    privateValue: 2,
  },

  // 该配置项用于个性化定制 Nuxt.js 使用的加载组件。
  // loading: true,
  loading: {
    color: 'blue',
    height: '5px',
  },

  router: {
    mode: 'hash',
    middleware: 'auth',
  },

  // 用于设置页面切换过渡效果的默认属性值。
  transition: {
    name: 'layout',
    mode: 'out-in',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-test 我的应用',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~/assets/css/index.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/vuex-persist', ssr: false },
    '@/plugins/axios',
    '@/plugins/vue-inject.js',
    '@/plugins/ctx-inject.js',
    '@/plugins/combined-inject.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Simple usage
    '~/modules/simple',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios,
  // axios: {
  //   proxy,
  // },

  proxy: {
    // '/admin-api/watson-application-inventory': 'http://139.9.245.12:38080',
    '/admin-api/watson-application-inventory': baseUrl,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
}
