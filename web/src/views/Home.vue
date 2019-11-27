<template>
  <div>
    <!-- 轮播图 -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/c40771f542fced3e5b04c263358128f6.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/23b5791aca53e3490aeda90753da2b31.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/9cf8fa915ca4881f084f6c8c27316e72.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end 轮播图 -->
    <!-- 导航宫格 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-4">
          <i class="sprite sprite-news"></i>
          <div>爆料站</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-story"></i>
          <div>故事站</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-market"></i>
          <div>周边商城</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-test"></i>
          <div>体验服</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-new-people"></i>
          <div>新人专区</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-rongyao"></i>
          <div>荣耀·传承</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-data"></i>
          <div>模拟战资料库</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-camp"></i>
          <div>王者营地</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-account"></i>
          <div>公众号</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-camp"></i>
          <div>版本介绍</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-camp"></i>
          <div>对局环境</div>
        </div>
        <div class="nav-item mb-4">
          <i class="sprite sprite-camp"></i>
          <div>无限王者库</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-2"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end 导航宫格 -->
    <!-- 新闻资讯 -->
    <m-list-card title="新闻资讯" icon="menu" :categories="newsList">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${item._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(item, i) in category.list"
          :key="i"
        >
          <span class="text-grey-1">[{{item.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{item.title}}</span>
          <span class="text-grey-1 fs-sm">{{item.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- 英雄列表 -->
    <m-list-card title="英雄列表" icon="superhero" :categories="heroList">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/heroes/${item._id}`"
            class="text-center p-2"
            style="width: 20%;"
            v-for="(item, i) in category.herolist"
            :key="i"
          >
            <img :src="item.avatar" alt class="w-100" />
            <div>{{item.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import ListCard from "../components/ListCard";
import dayjs from "dayjs";
export default {
  name: "home",
  components: {
    "m-list-card": ListCard
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newsList: [],
      heroList: []
    };
  },
  methods: {
    // 获取新闻列表
    async fetchNewsList() {
      const { data } = await this.$http.get("/news/list");
      this.newsList = data;
    },
    // 获取英雄列表
    async fetchHeroList() {
      const { data } = await this.$http.get("/heroes/list");
      this.heroList = data;
    }
  },
  created() {
    this.fetchNewsList();
    this.fetchHeroList();
  }
};
</script>
<style lang="scss">
@import "../assets/iconfont/iconfont.css";
@import "../assets/scss/_variable.scss";

.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    background-color: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border: none;
    }
  }
}
.sprite {
  background: url("../assets/images/index.png") no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 63.546% 15.517%;
  }
  &.sprite-story {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 90.483% 15.614%;
  }
  &.sprite-market {
    width: 1.4615rem;
    height: 1.6923rem;
    background-position: 36.746% 0.924%;
  }
  &.sprite-test {
    width: 1.5385rem;
    height: 1.5385rem;
    background-position: 10.408% 15.517%;
  }
  &.sprite-new-people {
    width: 1.5385rem;
    height: 1.6154rem;
    background-position: 89.733% 1.266%;
  }
  &.sprite-rongyao {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-data {
    width: 2.3846rem;
    height: 1.9231rem;
    background-position: 9.302% 0.813%;
  }
  &.sprite-camp {
    width: 1.8462rem;
    height: 1.8462rem;
    background-position: 63.3% 0.927%;
  }
  &.sprite-account {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 0 96.207%;
  }
  &.sprite-version {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-env {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-king {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-arrow {
    width: 0.7692rem;
    height: 0.7692rem;
    background-position: 38.577% 52.076%;
  }
}
</style>
