// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tejo Prabowo CV & PORTFOLIO',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Tejo Prabowo CV & PORTFOLIO',
        },
        {
          name: 'og:title',
          content: 'Tejo Prabowo CV & PORTFOLIO',
        },
        {
          name: 'og:description',
          content: 'Tejo Prabowo CV & PORTFOLIO',
        },
        {
          name: 'og:image',
          content: 'https://th.bing.com/th/id/OIP.ry0FnYNVVc6OOFGJhoPRKAHaI0?pid=ImgDet&rs=1',
        },
        {
          name: 'og:url',
          content: 'https://th.bing.com/th/id/OIP.ry0FnYNVVc6OOFGJhoPRKAHaI0?pid=ImgDet&rs=1',
        },
        {
          name: 'twitter:title',
          content: 'Tejo Prabowo CV & PORTFOLIO',
        },
        {
          name: 'twitter:description',
          content: 'Tejo Prabowo CV & PORTFOLIO',
        },
        {
          name: 'twitter:image',
          content: 'https://th.bing.com/th/id/OIP.ry0FnYNVVc6OOFGJhoPRKAHaI0?pid=ImgDet&rs=1',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'profile.png',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  modules: ['nuxt-quasar-ui', '@hypernym/nuxt-anime'],
  quasar: {
    extras: {
      fontIcons: ['material-icons'],
      animations: 'all',
    },
    plugins: ['Loading', 'Notify', 'AppFullscreen', 'Dialog'],
    config: {
      brand: {
        primary: '#c62828', // Merah tua
        secondary: '#424242', // Abu-abu
        accent: '#039be5', // Biru cerah
        dark: '#303030', // Abu-abu tua
        positive: '#43a047', // Hijau tua
        negative: '#d32f2f', // Merah gelap
        info: '#039be5', // Biru cerah (sama dengan accent)
        warning: '#fbc02d', // Kuning cerah
      },
    },
  },
  css: ['~/assets/styles/css/custom.css'],
})