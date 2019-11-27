<template>
  <div v-if="model" class="page-hero">
    <div class="topbar bg-black py-2 px-3 d-flex text-white ai-center">
      <img src="../assets/images/logo.png" height="30" />
      <div class="d-flex px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-white ml-3">攻略站</div>
      </div>
      <router-link class="fs-xs" to="/" tag="div">更多英雄&emsp;&emsp;&gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-colum jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2 fs-sm">{{model.name}}</h2>
        <div class="fs-sm">{{model.category.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm">
            皮肤：2 &gt;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    async fetch() {
      const { data } = await this.$http.get(`heroes/${this.id}`);
      this.model = data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
<style lang="scss">
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    .scores {
      .badge {
        margin: 0 0.4rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255,255,255,0.2)
      }
    }
  }
}
</style>