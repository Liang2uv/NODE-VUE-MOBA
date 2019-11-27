<template>
  <m-card :title="title" :icon="icon">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{active: i === active}"
        v-for="(category, i) in categories"
        :key="i"
        @click="$refs.list.swiper.slideTo(i)"
      >
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-2">
      <swiper ref="list" :options="{autoHeight: true}" @slide-change="() => active = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
import Card from "../components/Card";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    "m-card": Card
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
</style>