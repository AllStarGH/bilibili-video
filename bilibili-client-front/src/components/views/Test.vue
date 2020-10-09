<template>
  <el-container>
    <el-header>
      <div class="back_a_0 title_facade">
        <router-link to="/bilibiliVideo">返回主页</router-link>
      </div>
    </el-header>
    <!--  -->
    <div>
      <el-button type="primary" round @click="testSend"> Test Sends </el-button>
    </div>
    <!--  -->
    <br>
    <div>
      <el-button type="primary" round @click="testSendData"> 通过get方式发送多个参数给nodeJS后台 </el-button>
    </div>
  </el-container>
</template>
<script type="text/javascript">
export default {
  name: 'Test',
  data() {
    return {

    }
  },
  methods: {
    testSendData: function() {
      this.$axios.get('/api/users/test001', {
          params: {
            age: 15,
            lastname: 'rubies',
            job: 'teacher'
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    testSend: function() {
      this.$axios.get("/api/users/test").then((res) => {
        console.log(res)
      })
    }
  },
  mounted() {

  }
}

</script>
<style type="text/css" scoped="Test.vue">
</style>
