<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active">
        <a href="#/hero">
          英雄列表
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li>
        <a href="#/weapon">武器列表</a>
      </li>
      <li>
        <a href="#/equip">装备列表</a>
      </li> -->
      <router-link to="/hero" tag="li">
        <a class="act">英雄列表</a>
      </router-link>
      <router-link to="/weapon" tag="li">
        <a>武器列表</a>
      </router-link>
      <router-link to="/equip" tag="li">
        <a>装备列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>