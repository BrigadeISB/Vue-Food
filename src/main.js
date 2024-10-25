import Vue from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router'; // імпортуємо router

Vue.config.productionTip = false;

new Vue({
  router, // підключаємо router
  render: h => h(App),
}).$mount('#app');
