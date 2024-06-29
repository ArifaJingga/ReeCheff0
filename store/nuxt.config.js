// nuxt.config.js

export default {
    // Judul dan deskripsi aplikasi
    head: {
      title: 'Recipe App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Aplikasi untuk mencari dan berbagi resep masakan.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  
    // Plugins yang akan digunakan
    plugins: [
      { src: '~/plugins/firebase.js', mode: 'client' }
    ],
  
    // Variabel lingkungan
    env: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    },
  
    // Komponen-komponen dan layout halaman
    components: true,
    layouts: {
      // Pengaturan layout halaman
      // Misalnya: 'default.vue' di dalam direktori 'layouts/'
    },
  
    // Modul-modul tambahan yang diperlukan
    buildModules: [
      '@nuxtjs/tailwindcss', // Contoh modul Tailwind CSS
      '@nuxtjs/fontawesome' // Contoh modul Font Awesome
    ],
  
    // Modul-modul Nuxt.js
    modules: [
      // Misalnya: '@nuxtjs/axios'
    ],
  
    // Konfigurasi router
    router: {
      // Opsi-opsi tambahan untuk router
    },
  
    // Pengaturan server
    server: {
      // Opsi-opsi tambahan untuk server Nuxt.js
    },
  
    // Konfigurasi modul Font Awesome
    fontawesome: {
      icons: {
        // Spesifikasikan ikon-ikon yang Anda butuhkan di sini
        solid: ['faHome', 'faUser', 'faSignOutAlt'],
        regular: [],
        brands: []
      }
    }
  };
  