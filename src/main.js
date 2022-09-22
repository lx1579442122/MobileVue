import Vue from 'vue';
import App from './App.vue';
// 轮播
import EasySlider from "vue-easy-slider";
// 使用轮播
Vue.use(EasySlider);

// 引入路由
import router from '@/router'

Vue.config.productionTip = false;

new Vue({ 
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app') 
