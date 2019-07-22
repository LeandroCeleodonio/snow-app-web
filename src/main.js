import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VuePageTransition from 'vue-page-transition'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig.js'

firebase.initializeApp(firebaseConfig);

Vue.use(VuePageTransition);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
