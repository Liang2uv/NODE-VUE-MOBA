<template>
  <el-container>
    <el-header>
      <h3>分类管理</h3>
      <el-button @click="toAdd" type="primary">新增</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="toDelete(scope.row._id)" type="text" size="small">删除</el-button>
            <el-button @click="toEdit(scope.row._id)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!-- 对话框 -->
    <el-dialog title="详细信息" :visible.sync="dialogVisible">
      <el-form label-width="120px" @submit.native.prevent="saveChange">
        <el-form-item label="用户名">
          <el-input v-model="model.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "adminUserList",
  data() {
    return {
      tableData: [],
      model: {},
      dialogVisible: false
    };
  },
  methods: {
    // 获取列表
    async fetch() {
      const { data } = await this.$http.get("rest/adminUsers");
      this.tableData = data;
    },
    // 编辑
    async toEdit(id) {
      const { data } = await this.getOne(id);
      this.model = data;
      this.dialogVisible = true;
    },
    // 删除
    toDelete(id) {
      this.$confirm("是否删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/adminUsers/${id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        // 重新获取列表
        this.fetch();
      });
    },
    // 新增
    toAdd() {
      this.model = {};
      this.dialogVisible = true;
    },
    // 保存更改
    async saveChange() {
      if (this.model._id) {
        await this.$http.put(`rest/adminUsers/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        await this.$http.post("rest/adminUsers", this.model);
        this.$message({
          type: "success",
          message: "添加成功"
        });
      }
      // 重新获取列表
      this.fetch();
      // 关闭弹出框
      this.dialogVisible = false;
    },
    // 获取单个
    async getOne(id) {
      return await this.$http.get(`rest/adminUsers/${id}`);
    }
  },

  created() {
    this.fetch();
  }
};
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #ddd;
}
</style>