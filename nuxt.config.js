module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'buchiya4th-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

