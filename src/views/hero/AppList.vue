<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header text-left">英雄列表</h2>
    <a class="btn btn-success" href="add.html">Add</a>
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
            <tr :key="item.id" v-for="(item) in list" >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="#" @click.prevent="handleDelete(item.id)">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      list: [1,2,3]
    }
  },
  created(){
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get('http://localhost:3000/heroes')
        .then((respones) => {
          // console.log( respones )
          const { status, data } = respones;
          if ( status === 200 ) {
            // 请求成功 
            this.list = data
          }
        })
    },
  }
}
</script>

<style scoped>

</style>