import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - عارض",
    title: "website",
    htmlAttrs: {
      lang: "ar",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
    ],
  },
  server: {
    port: 3090, // default: 3000
  },
  scrollToTop: true,
  pageTransition: {
    name: "scroll-x-transition",
    mode: "out-in",
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#f00",
    background: "white",
  },
  router: {
    middleware: ["routeChange"],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss", "@/assets/fonts/stylesheet.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/api", ssr: true },
    { src: "@/plugins/toasted.js", ssr: false },
    { src: "@/plugins/vee-validate.js", ssr: false },
    { src: "@/plugins/mixins.js", ssr: false },
    { src: "@/plugins/bootstrap.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  allowcomputed: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n", "@nuxtjs/axios", "@nuxtjs/auth"],

  axios: {
    baseUrl: "https://api.ared.sa/api/",
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: "@/plugins/vuetify.options.js",
  },

  i18n: {
    locales: [
      {
        code: "ar",
        file: "ar.json",
        name: "arabic",
        icon: "$arabicIcon",
      },
      {
        code: "en",
        file: "en.json",
        name: "english",
        icon: "$englishIcon",
      },
    ],
    defaultLocale: "ar",
    strategy: "prefix_and_default",
    langDir: "lang/",
    lazy: true,
    useCookie: true,
    cookieKey: "language",
    defaultDirection: "rtl",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "ar",
    },
  },
  auth: {
    strategies: {
      local: {
        // user: {
        //   property: 'user',
        //   autoFetch: true,
        // },
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "data.token",
          },
          logout: { url: "/logout", method: "post" },

          user: { url: "profiles", method: "get", propertyName: "data" },
          // user: {
          //   url: 'profile/show',
          //   method: 'get',
          // },
        },
      },
    },
    redirect: false,
    plugins: [{ src: "~/plugins/axios", ssr: true }],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
