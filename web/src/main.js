import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import http from './http'

Vue.use(vueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
