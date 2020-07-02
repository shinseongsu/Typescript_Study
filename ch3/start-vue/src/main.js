import Vue from 'vue'
//import App from './App.vue'
import App1 from './App1.vue';

Vue.config.productionTip = false

new Vue({
//  render: h => h(App),
  render: h => h(App1),
}).$mount('#app')
