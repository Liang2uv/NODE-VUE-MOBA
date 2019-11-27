<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <i class="iconfont icon-fanhui text-blue"></i>
      <strong class="flex-1 text-ellipsis text-blue">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.createdAt | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="p-3">
      <div class="d-flex ai-center mb-4">
        <i class="iconfont icon-menu fs-xl"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
      <div>
        <div class="d-flex ai-center" v-for="item in model.related" :key="item._id">
          <router-link
            tag="div"
            :to="`/articles/${item._id}`"
            class="text-ellipsis fs-lg flex-1 py-1"
          >{{item.title}}</router-link>
          <div class="text-grey fs-sm">{{item.createdAt | date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-article",
  props: {
    id: {
      required: true
    }
  },
  filters: {
    date(val) {
      return val.slice(0, 10);
    }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: "fetch"
  },
  methods: {
    // 获取文章详情
    async fetch() {
      const { data } = await this.$http.get(`articles/${this.id}`);
      this.model = data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
@import "../assets/iconfont/iconfont.css";
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>