<template>
  <el-container>
    <el-header>
      <h3>广告位管理</h3>
      <el-button @click="toAdd" type="primary">新增</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
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
        <el-form-item>
          <el-button size="small" @click="model.items.push({})">
            <i class="el-icon-plus"></i>添加广告
          </el-button>
        </el-form-item>
        <el-row type="flex" style="flex-wrap: wrap;">
          <el-col :md="12" v-for="(item,index) in model.items" :key="index">
            <el-form-item label="标题">
              <el-input v-model="item.title" />
            </el-form-item>
            <el-form-item label="链接">
              <el-input type="textarea" v-model="item.url" />
            </el-form-item>
            <el-form-item label="图片">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="res => $set(item, 'image',res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="model.items.splice(index, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "adList",
  data() {
    return {
      tableData: [],
      model: { items: [] },
      dialogVisible: false
    };
  },
  methods: {
    // 获取列表
    async fetch() {
      const { data } = await this.$http.get("rest/ads");
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
        await this.$http.delete(`rest/ads/${id}`);
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
      this.model = { items: [] };
      this.dialogVisible = true;
    },
    // 保存更改
    async saveChange() {
      if (this.model._id) {
        await this.$http.put(`rest/ads/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        await this.$http.post("rest/ads", this.model);
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
      return await this.$http.get(`rest/ads/${id}`);
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
  width: 250px;
  /* height: 178px; */
  /* line-height: 178px; */
  text-align: center;
}
.avatar {
  width: 250px;
  /* height: 178px; */
  display: block;
}
</style>