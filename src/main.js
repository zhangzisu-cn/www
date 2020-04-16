import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/gtag'
import router from '@/router'
import '@/css/main.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
