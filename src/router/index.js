import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//引入路由组件
import Home from "@/pages/Home";


// vueRouter中的原型对象保存
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push/replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
//配置路由
export default new VueRouter({
  //配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true, showNav:true }, 
    },
    
    {
      path: "/register",
      component: () => import
      (/* webpackChunkName: "Register" */ '@/pages/Register'),
      meta: { show: false , showNav:false },
    },
    {
      path: "/message",
      component: () => import
      (/* webpackChunkName: "Message" */ '@/pages/Message'),
      meta: { show: false , showNav:false },
    },
    {
      path: "/user",
      component: () => import
      (/* webpackChunkName: "User" */ '@/pages/User'),
      meta: { show: true , showNav:false },
    },

    {
      path: "/blog",
      component: () => import
      (/* webpackChunkName: "Blog" */ '@/pages/Blog'),
      meta: { show: false , showNav:false },
    },
    {
      path: "/music",
      component: () => import
      (/* webpackChunkName: "Music" */ '@/pages/Music'),
      meta: { show: false , showNav:false },
    },
    {
      path: "/photo",
      component: () => import
      (/* webpackChunkName: "Photo" */ '@/pages/Photo'),
      meta: { show: false , showNav:false },
    },
    {
      path: "/video",
      component: () => import
      (/* webpackChunkName: "Video" */ '@/pages/Video'),
      meta: { show: false , showNav:false },
    },
    {
      path: "/search/:keyword",
      component: () => import
      (/* webpackChunkName: "Search" */ '@/pages/Search'),
      meta: { show: true , showNav:true },
      name: "search",
    },
    {
      path: "*",
      redirect: "/home",
      meta: { show: true },
    },
  ],
});
