
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sugestões Filmes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'google-site-verification', content: 'l7ZYTbQapWyJOwUOxkkh-RoSqVrnGafUw4qhRRrq23Y' },{ name:'robots',  content:"index, follow" },
      { name: "viewport", content:"width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "author", content:"Diego silva, Desenvolvedor front end" },
      { name: "language", content:"Portuguese" },
      { property: "og:locale", content:"pt_BR" },
      { property: "og:type", content:"website" },
      { property: "og:title", content:"Sugestões filmes aleatorios" },
      { property: "og:url", content:"http://sugestoesfilmes.com.br/" },
      { property: "og:site_name", content:"Agência Renove" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      'data-ad-client': "ca-pub-7222346133307755",
      async: true
    }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.js',
    { src: '~plugins/ga.js', mode: 'client' }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
