<template>
  <el-container>
    <el-header>
      <div class="back_a_ title_facade">
        <router-link to="/bilibiliVideo"> 返回主页 </router-link>
      </div>
    </el-header>
    <!--  -->
    <el-main class="ele_main">
      <div class="toggle_div_0">
        <el-button type="primary" @click="toggleSelection([userList[1], userList[2]])">切换第二、第三行的选中状态</el-button>
        <el-button type="primary" @click="toggleSelection()">取消选择</el-button>
      </div>
      <!--  -->
      <el-table :data="userList" style="width: 100%" border height="250" :row-class-name="tableRowClassName" ref="multipleTable" @selection-change="handleSelectionChange" tooltip-effect="dark">
        <!--  -->
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!--  -->
        <el-table-column v-for="(item,i) in tblCol" :key="i" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
        <!--  -->
        <el-table-column label="操作" v-if="showOper">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--  -->
    </el-main>
  </el-container>
</template>
<script type="text/javascript">
export default {
  name: 'AccountList',
  data() {
    return {
      multipleSelection: [],
      showOper: true,
      userList: [{
        id: "",
        username: "",
        email: '',
        mobile: ''
      }],
      tblCol: [
        { prop: "id", label: "编号", width: 180 },
        { prop: "username", label: "会员名", width: 200 },
        { prop: "email", label: "电邮地址" },
        { prop: "mobile", label: "手机号码" },
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getListData() {
      var mine = this;
      this.$axios({
        method: 'get',
        url: '/api/users/userList',
      }).then(function(response) {
        console.log(response);
        if (response.data.status == 200) {
          console.log(response.data);
          mine.userList = response.data.result;
        } else {
          mine.$alert(response.data.msg, "提示", {
            confirmButtonText: "确定"
          });
        }
      }).catch(function(error) {
        console.log(error);
      })
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.info(val);
      this.multipleSelection = val;
    },
  },
  mounted() {
    console.log(this);
    this.getListData();
  }

}

</script>
<style type="text/css" scoped="AccountList.vue">
.toggle_div_0 {
  margin: 0 0 15px 0;
}

</style>
