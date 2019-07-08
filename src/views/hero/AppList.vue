<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header text-left">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" :to="{ name: 'heroadd' }">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item) in list">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <a href="#/" @click.prevent="">编辑</a> -->
              <router-link :to="{ name: 'editlist', params: { id: item.id } }">编辑</router-link>
              &nbsp;&nbsp;
              <a href="#" @click.prevent="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    // 查询数据
    loadData() {
      axios.get("").then(respones => {
        // console.log( respones )
        const { status, data } = respones;
        if (status === 200) {
          // 请求成功
          this.list = data;
        }
      });
    },
    // 删除数据 1.添加点击事件 传入要删除的id值
    del(id) {
      // 先弹出确认框
      if (!confirm("您确认删除吗?")) {
        return false;
      }
      // 发送ajax请求 删除数据
      axios.delete("http://localhost:3000/heroes/" + id)
        .then(res => {
          if (res.status === 200) {
            this.loadData();
          }
        });
    }
  }
};
</script>

<style scoped>
</style>