<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      if (res) {
        localStorage.setItem("token", res.data.token);
        this.$router.push("/");
        this.$message({
          type: "success",
          message: "登录成功"
        });
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 25rem;
  margin: 10rem auto;
}
</style>