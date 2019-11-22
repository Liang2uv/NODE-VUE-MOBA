<template>
  <el-container>
    <el-header>
      <h3>分类管理</h3>
      <el-button @click="toAdd" type="primary">新增</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="parent.name" label="上级" width="200"></el-table-column>
        <el-table-column prop="name" label="分类名称"></el-table-column>
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
        <el-form-item label="上级分类">
          <el-select v-model="model.parent">
            <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="model.name" />
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
  name: "categoryList",
  data() {
    return {
      tableData: [],
      model: {},
      parents: [],
      dialogVisible: false
    };
  },
  methods: {
    // 获取列表
    async fetch() {
      const { data } = await this.$http.get("rest/categories");
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
        await this.$http.delete(`rest/categories/${id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        // 重新获取列表
        this.fetch();
        // 重新获取父级选择菜单的列表
        this.fetchParents();
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
        await this.$http.put(`rest/categories/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        await this.$http.post("rest/categories", this.model);
        this.$message({
          type: "success",
          message: "添加成功"
        });
      }
      // 重新获取列表
      this.fetch();
      // 重新获取父级选择菜单的列表
      this.fetchParents();
      // 关闭弹出框
      this.dialogVisible = false;
    },
    // 获取单个
    async getOne(id) {
      return await this.$http.get(`rest/categories/${id}`);
    },
    // 获取父级菜单信息
    async fetchParents() {
      const { data } = await this.$http.get(`rest/categories`);
      this.parents = data;
    }
  },

  created() {
    this.fetch();
    this.fetchParents();
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