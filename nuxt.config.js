module.exports = {
  head: {
    title: 'RJ - Web Developper / Front End JS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' },
      { rel: 'stylesheet', href:'https://unpkg.com/normalize.css@8.0.0/normalize.css' },
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css", integrity:"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU", crossorigin:"anonymous" }

    ]
  },

  loading: { color: '#3B8070' },

  build: {

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

  css: [
    '@/assets/scss/main.scss'
  ],
}

