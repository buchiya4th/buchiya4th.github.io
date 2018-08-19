module.exports = {
  /*
  ** Headers of the page
  */
 head: {
  titleTemplate: titleChunk => {
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
      content: 'email=no,telephone=no,address=no'
    },
    { hid: 'description', name: 'description', content: 'buchiya4thのポートフォリオサイト。' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' }
  ]
},
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/css/config/_color.scss',
        '@/assets/css/config/_font.scss',
        '@/assets/css/config/_size.scss',
        '@/assets/css/config/_media.scss',
        '@/assets/css/config/_utility.scss'
      ]
    ]
  ],
  css: [
    { src: '~assets/css/style.scss', lang: 'scss' }
  ]
}

