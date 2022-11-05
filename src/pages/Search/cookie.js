import Vue from 'vue';
import Vuex from 'vuex';
// 在页面刷新的时候，value会丢失，这是搜的解决办法，但是没看懂
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       orderList: [],
       menuList: []
   },
    mutations: {
        orderList(s, d) {
          s.orderList= d;
          window.localStorage.setItem("list",JSON.stringify(s.orderList))
        },  
        menuList(s, d) {
          s.menuList = d;
          window.localStorage.setItem("list",JSON.stringify(s.menuList))
       },
   },
//    计算属性会优先使用缓存
   computed:{
    orderList() {
        return this.$store.state.orderList
    }
 }
})



