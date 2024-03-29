module.exports = {
  generate: {
    dir: 'docs'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | buchiya4th portfolio`
        : 'buchiya4th portfolio'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:type', property: 'og:type', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:image', property: 'og:image', content: '' },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'email=no,telephone=no,address=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'buchiya4thのポートフォリオサイト。',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Raleway:400,400i,700,700i,800,800i,900,900i',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-131097848-1',
      },
    ],
  ],
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', ssr: false }
  ],
  build: {
    vendor: [
      'vue-awesome-swiper'
    ]
  },
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/composition-api/module'],
  target: 'static',
  styleResources: {
    scss: [
      '@/assets/css/config/_color.scss',
      '@/assets/css/config/_font.scss',
      '@/assets/css/config/_size.scss',
      '@/assets/css/config/_media.scss',
      '@/assets/css/config/_utility.scss',
      '@/assets/css/components/_btn.scss',
    ],
  },
  css: [{ src: '~assets/css/style.scss', lang: 'scss' }],
}
