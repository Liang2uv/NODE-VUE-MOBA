<template>
  <el-container>
    <el-header>
      <h3>物品管理</h3>
      <el-button @click="toAdd" type="primary">新增</el-button>
    </el-header>
    <el-main>
      <!-- 列表 -->
      <el-table :data="tableData">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="icon" label="图标" width="200px">
          <template slot-scope="scope">
            <img :src="scope.row.icon">
          </template>
        </el-table-column>
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
        <el-form-item label="名称">
          <el-input v-model="model.name" />
        </el-form-item>
        <el-form-item label="图标">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :headers="getAuthHeaders()"
            :on-success="afterUpload"
          >
            <img v-if="model.icon" :src="model.icon" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
  name: "itemList",
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
      const { data } = await this.$http.get("rest/items");
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
        await this.$http.delete(`rest/items/${id}`);
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
        await this.$http.put(`rest/items/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        await this.$http.post("rest/items", this.model);
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
      return await this.$http.get(`rest/items/${id}`);
    },
    // 上传完成之后
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>