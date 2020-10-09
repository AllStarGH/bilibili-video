<template>
  <el-container>
    <el-header>
      <div class="back_a_ title_facade">
        <router-link to="/bilibiliVideo"> 返回主页 </router-link>
      </div>
    </el-header>
    <!--  -->
    <el-main class="ele_main">
      <div class="toggle_div_">
        <el-form :model="dirPaths" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="视频缓存所处目录路径" prop="srcPath" class="_input_item">
            <el-input placeholder="请输入视频缓存所处目录路径" prefix-icon="el-icon-search" v-model="dirPaths.srcPath">
            </el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="目的地目录路径" prop="targetPath" class="_input_item">
            <el-input placeholder="请输入目的地目录路径" prefix-icon="el-icon-search" v-model="dirPaths.targetPath">
            </el-input>
          </el-form-item>
          <!--  -->
          <el-form-item>
            <el-button type="primary" id="_submit_btn" @click="submitForm('ruleForm')">提交</el-button>
            <!--  -->
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <!--  -->
      </div>
    </el-main>
  </el-container>
</template>
<script type="text/javascript">
export default {
  name: 'ChooseFolder',
  data() {
    return {
      dirPaths: {
        srcPath: '/home/user/001/previous/origin',
        targetPath: '/home/user/001/previous/destination',
      },
      rules: {
        srcPath: [{ required: true, message: "请输入视频缓存所处目录路径", trigger: "blur" }],
        targetPath: [{ required: true, message: "请输入目的地目录路径", trigger: "blur" }],
      }
    }
  },
  methods: {
    submitForm(refItemName) {
      let flag = true;
      var mine = this;
      var pathData = mine.dirPaths;

      this.$refs[refItemName].validate(valid => {
        if (valid) {
          console.info('Success"s validate,vaild=>' + valid);
        } else {
          console.info('Defeat"s validate,vaild==>' + valid);
          flag = valid;
        }
      });

      if (flag == false) {
        return;
      }
      console.log(pathData);

      this.$axios({
          method: "post",
          url: "/api/bilibili/blvService",
          data: pathData,
          // `transformRequest` 允许在向服务器发送前，修改请求数据
          transformRequest: [
            function(data) {
              return JSON.stringify(data);
            }
          ],
        })
        .then(function(response) {
          console.log(response);
          if (response.data.status == 200) {
            console.log('SUCCESS');
            mine.$notify({
              title: "notify",
              message: "移动成功,三秒后关闭通知",
              duration: 3000
            });
          } else {
            mine.$alert(response.data.msg, "错误", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /* reset */
    resetForm(refItemName) {
      this.$refs[refItemName].resetFields();
    }
  },
  mounted() {
    console.info(this)
  },
}

</script>
<style type="text/css" scoped="ChooseFolder.vue">
form>input {
  width: 300px;
}

</style>
