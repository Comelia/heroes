<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="addName">姓名</label>
        <input
          type="text"
          v-model="formData.name"
          class="form-control"
          id="addName"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- button就是提交按钮 -->
      <button @click.prevent="update" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['id'],
  data() {
    return {
      // 封装表单数据
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  // 组件加载完毕, 根据id请求英雄详情
  mounted() {
    this.getDataById()
  },
  methods: {
    // 根据id获取数据
    getDataById() {
      axios
        .get(`/${this.id}`)
        .then((res) => {
          const { data,status } = res;
          if ( status === 200 ) {
            // 获取成功
            this.formData = data
          } else {
            // 获取失败
            alert('获取数据失败')
          }
        })
    },
    // 实现修改功能
    update() {
      axios
        .put(`/${this.id}`, this.formData)
        .then((res) => {
          const status = res.status;
          if ( status === 200 ) {
            // 修改成功 跳转到列表组件
            this.$router.push('/hero')
          } else {
            // 修改失败
            alert('修改失败')
          }
        })
    }
  }

};
</script>

<style>
</style>
