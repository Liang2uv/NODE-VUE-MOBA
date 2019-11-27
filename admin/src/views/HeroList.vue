<template>
  <el-container>
    <el-header>
      <h3>英雄管理</h3>
      <el-button @click="toAdd" type="primary">新增</el-button>
    </el-header>
    <el-main>
      <!-- 列表 -->
      <el-table :data="tableData">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="title" label="称号"></el-table-column>
        <el-table-column prop="avatar" label="头像" width="200px">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" />
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
        <el-tabs type="border-card" value="basic">
          <el-tab-pane label="基础信息" name="basic">
            <el-form-item label="名称">
              <el-input v-model="model.name" />
            </el-form-item>
            <el-form-item label="称号">
              <el-input v-model="model.title" />
            </el-form-item>
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
            <el-form-item label="难度">
              <el-rate
                style="margin-top: 0.6rem;"
                :max="9"
                show-score
                v-model="model.scores.difficult"
              />
            </el-form-item>
            <el-form-item label="技能">
              <el-rate
                style="margin-top: 0.6rem;"
                :max="9"
                show-score
                v-model="model.scores.skills"
              />
            </el-form-item>
            <el-form-item label="攻击">
              <el-rate
                style="margin-top: 0.6rem;"
                :max="9"
                show-score
                v-model="model.scores.attack"
              />
            </el-form-item>
            <el-form-item label="生存">
              <el-rate
                style="margin-top: 0.6rem;"
                :max="9"
                show-score
                v-model="model.scores.survive"
              />
            </el-form-item>
            <el-form-item label="顺风出装">
              <el-select v-model="model.items1" multiple>
                <el-option
                  v-for="item in items"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="逆风出装">
              <el-select v-model="model.items2" multiple>
                <el-option
                  v-for="item in items"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="使用技巧">
              <el-input type="textarea" v-model="model.usageTips" />
            </el-form-item>
            <el-form-item label="对抗技巧">
              <el-input type="textarea" v-model="model.battleTips" />
            </el-form-item>
            <el-form-item label="团战思路">
              <el-input type="textarea" v-model="model.teamTips" />
            </el-form-item>
            <el-form-item label="头像">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :show-file-list="false"
                :headers="getAuthHeaders()"
                :on-success="res => $set(model, 'avatar',res.url)"
              >
                <img v-if="model.avatar" :src="model.avatar" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="banner">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :show-file-list="false"
                :headers="getAuthHeaders()"
                :on-success="res => $set(model, 'banner',res.url)"
              >
                <img v-if="model.banner" :src="model.banner" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="技能" name="skills">
            <el-button size="small" @click="model.skills.push({})">
              <i class="el-icon-plus"></i>添加技能
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap;">
              <el-col :md="12" v-for="(item,index) in model.skills" :key="index">
                <el-form-item label="名称">
                  <el-input v-model="item.name" />
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="item.description" />
                </el-form-item>
                <el-form-item label="提示">
                  <el-input type="textarea" v-model="item.tips" />
                </el-form-item>
                <el-form-item label="冷却值">
                  <el-input v-model="item.delay" />
                </el-form-item>
                <el-form-item label="消耗">
                  <el-input v-model="item.cost" />
                </el-form-item>
                <el-form-item label="图标">
                  <el-upload
                    class="avatar-uploader"
                    :action="uploadUrl"
                    :headers="getAuthHeaders()"
                    :show-file-list="false"
                    :on-success="res => $set(item, 'icon',res.url)"
                  >
                    <img v-if="item.icon" :src="item.icon" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" @click="model.skills.splice(index, 1)">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="最佳搭档" name="partners">
            <el-button size="small" @click="model.partners.push({})">
              <i class="el-icon-plus"></i>添加英雄
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap;">
              <el-col :md="12" v-for="(item,index) in model.partners" :key="index">
                <el-form-item>
                  <el-select filterable v-model="item.hero">
                    <el-option
                      v-for="hero in tableData"
                      :key="hero._id"
                      :value="hero._id"
                      :label="hero.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="item.description" />
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" @click="model.partners.splice(index, 1)">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        <el-form-item>
          <el-button style="margin-top: 20px;" type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "heroList",
  data() {
    return {
      tableData: [],
      categories: [],
      items: [],
      model: { scores: {}, skills: [], partners: [] },
      dialogVisible: false
    };
  },
  methods: {
    // 获取列表
    async fetch() {
      const { data } = await this.$http.get("rest/heros");
      this.tableData = data;
    },
    // 编辑
    async toEdit(id) {
      const { data } = await this.getOne(id);
      this.model = Object.assign({}, this.model, data);
      this.dialogVisible = true;
    },
    // 删除
    toDelete(id) {
      this.$confirm("是否删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/heros/${id}`);
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
      this.model = { scores: {}, skills: [], partners: [] };
      this.dialogVisible = true;
    },
    // 保存更改
    async saveChange() {
      if (this.model._id) {
        await this.$http.put(`rest/heros/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "修改成功"
        });
      } else {
        await this.$http.post("rest/heros", this.model);
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
      return await this.$http.get(`rest/heros/${id}`);
    },
    // 获取类型下拉列表
    async fetchCategories() {
      const res = await this.$http.get("rest/categories");
      this.categories = res.data;
    },
    // 获取物品下拉列表
    async fetchItems() {
      const res = await this.$http.get("rest/items");
      this.items = res.data;
    }
  },

  created() {
    this.fetchItems();
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
  max-width: 10rem;
  /* width: 5rem; */
  /* height: 5rem; */
  line-height: 5rem;
  text-align: center;
}
.avatar {
  max-width: 10rem;
  /* width: 5rem; */
  /* height: 5rem; */
  display: block;
}
</style>