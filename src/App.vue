<template>
  <div id="app">
    <!-- 3.使用AppHeader.vue组件 -->
    <app-header></app-header>
     <div class="container-fluid">
       <div class="row">
        <app-silder></app-silder>
        <!-- <app-list></app-list> -->
        <!-- 标识--路由出口 -->
        <router-view></router-view>
       </div>
      </div>
  </div>
</template>

<script>
// 1.导入组件
import AppHeader from './components/AppHeader.vue'
import AppSilder from './components/AppSilder.vue'
import AppList from './views/hero/AppList.vue'

export default {
  name: 'app',
  // 2.注册局部组件
  components: {
    AppHeader,
    AppSilder,
    AppList
  }
}
</script>

<style>

</style>
