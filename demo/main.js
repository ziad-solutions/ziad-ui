import Vue from 'vue';
import router from './router';
import MuseUI from '../src';
import App from './App';
Vue.use(MuseUI);

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
