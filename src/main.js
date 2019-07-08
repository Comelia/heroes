// 程序的入口
// 加载vue模块 CommonJS的模块化语法
// const Vue = require('vue)

// ES6中的模块化的语法,导入模块
import Vue from 'vue'

// 根组件
import App from './App.vue'

// 导入路由对象
import router from './router.js';

// 引入外部样式
// import './'  
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';


// 提示当前处在开发模式, false 不提示
Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/heroes'

Vue.prototype.axios = axios

new Vue({
  // 配置实例选项 router 
  // router: appRouter,
  router,
  render: h => h(App),
}).$mount('#app')
