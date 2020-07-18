import Vue from 'vue'
import ToggleButton from 'vue-js-toggle-button';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ToggleButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
