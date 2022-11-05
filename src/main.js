import Vue from "vue";
import App from "./App.vue";
// 轮播
import EasySlider from "vue-easy-slider";
// 使用轮播
Vue.use(EasySlider);
// 引入路由
import router from "@/router";
// 引入字体图标
import "@/assets/ICONS/iconfont.css";
// 引入axios
import axios from 'axios'
// query参数加密
import base64 from '@/assets/encryption/base64.js'
Vue.prototype.$base64 = base64;
// v-html，由于任意渲染很危险，所以使用v-dompurify-html代替
import VueDOMPurifyHTML from 'vue-dompurify-html'
Vue.use(VueDOMPurifyHTML)
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  beforeCreate () {
    // 安装全局事件总线   $bus就是当前应用的vm  这里的this就是当前的new Vue()
    Vue.prototype.$bus = this
    // 安装axios
    Vue.prototype.$axios = axios
  },
  // 注册路由
  router,
}).$mount("#app");
