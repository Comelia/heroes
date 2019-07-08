import Vue from 'vue';

// 1.导入路由
import VueRouter from 'vue-router';


// 导入组件
import AppList from './views/hero/AppList.vue';
import Equip from './views/equip/Equip.vue';
import Weapon from './views/weapon/Weapon.vue';
import listAdd from './views/hero/listAdd.vue';
import Editlist from './views/hero/Editlist.vue';

// 注册插件
Vue.use(VueRouter)

// 创建路由对象, 配置路由规则
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/hero'
          },
          { 
            name: 'weapon' , 
            path: '/weapon' ,
            component: Weapon
          },
          {
            name: 'equip',
            path: '/equip',
            component: Equip
          },
          {
            name: 'herolist',
            path: '/hero',
            component: AppList
          },
          {
            name: 'heroadd',
            path: '/hero/add',
            component: listAdd
          },
          {
            name: 'editlist',
            path: '/hero/edit/:id',
            component: Editlist,
            props: true
          }
    ]
});

// 导出模块 
export default router;
