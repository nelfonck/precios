import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Dialog from 'vue-dialog-loading'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Dialog, {
  //dialogBtnColor: '#0f0'
 })
