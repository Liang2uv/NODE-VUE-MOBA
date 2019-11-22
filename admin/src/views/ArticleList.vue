<template>
  <el-container>
    <el-header>
      <h3>文章管理</h3>
      <el-button @click="toAdd" type="primary">新增</el-button>
    </el-header>
    <el-main>
      <!-- 列表 -->
      <el-table :data="tableData">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
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
        <el-form-item label="类型">
          <el-select v-model="model.category" multiple>
            <el-option
              v-for="item in categories"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="model.title" />
        </el-form-item>
        <el-form-item label="详情">
          <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "articleList",
  components: {
    VueEditor
  },
  data() {
    return {
      categories: [],
      tableData: [],
      model: {},
      dialogVisible: false
    };
  },
  methods: {
    // 获取列表
    async fetch() {
      const { data } = await this.$http.get("rest/articles");
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
        await this.$http.delete(`rest/articles/${id}`);
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
        await this.$http.put(`rest/articles/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        await this.$http.post("rest/articles", this.model);
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
      return await this.$http.get(`rest/articles/${id}`);
    },
    // 获取类型下拉列表
    async fetchCategories() {
      const { data } = await this.$http.get("rest/categories");
      this.categories = data;
    },
    // 富文本图片上传
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", data.url);
      resetUploader();
    }
  },

  created() {
    this.fetchCategories();
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