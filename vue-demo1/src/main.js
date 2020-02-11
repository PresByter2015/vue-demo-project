import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
/**
 * 
1，自己实现数组map函数
2.js异步方式
3. setstate是异步还是同步
4. React的生命周期
5. React的key
6. 首屏加载webpack
7. React hooks
8. React diff算法是怎么实现的
9. vue组件通讯
10. vue路由是什么样子的
11. vue自定义组件的3种方式，以哪个为主
12. vue   diff算法
13 vue 渲染过程

 */
