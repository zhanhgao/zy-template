import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/style/index.scss' 
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'
// import VInt from '@/directives/v-int';


Vue.use(ElementUI) 
// Vue.use(VInt) 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(document.getElementById('app'))
