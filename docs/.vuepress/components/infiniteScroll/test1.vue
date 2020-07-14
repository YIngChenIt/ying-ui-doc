<template>
  <div id="app">
    <ul
      class="infinite-list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
      infinite-scroll-delay="delay"
      infinite-scroll-distance="distance"
      infinite-scroll-immediate="immediate"
      style="overflow:auto"
    >
      <li v-for="(i, index) in count" :key="index" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      disabled: false,
      delay: 200,
      distance: 30,
      immediate: true
    };
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>

<style lang="scss">
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
}
</style>
