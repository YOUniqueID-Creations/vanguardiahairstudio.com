import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import router from './routes'
import {VueFire} from 'vuefire';
import {firebaseApp} from './firebase'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueFire, {firebaseApp});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
