/*
 * @Author: chenwenju
 * @Date: 2021-05-11 22:57:57
 * @LastEditTime: 2021-06-22 22:16:05
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \lemon-oranges-pro\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
