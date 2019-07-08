<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="addName">姓名</label>
        <input type="text" v-model="formData.name" class="form-control" id="addName" placeholder="姓名"/>
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
      <select class="form-control" id="gender" v-model="formData.gender" >
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
      </div>
      <!-- button就是提交按钮 -->
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// 使用 postman测试接口
// 1.绑定文本框(下拉框)
// 2.点击按钮发送请求,添加
// 3.添加成功,跳转回列表
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  methods: {
    add() {
      // 点击按钮发送请求
      axios
        .post('',this.formData)
        .then((res) => {
          const status = res.status
          if ( status === 201 ) {
            // 添加成功 跳转回列表
            this.$router.push('/hero')
          } else {
            alert('添加失败')
          }
        })
    }
  }
};
</script>

<style>
</style>