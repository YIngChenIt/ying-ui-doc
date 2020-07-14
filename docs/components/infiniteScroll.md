# InfiniteScroll 无限滚动
滚动至底部时，加载更多数据。

## 基础用法
在要实现滚动加载的列表上上添加`v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。

<demo-block>
::: slot source
<infiniteScroll-test1></infiniteScroll-test1>
:::

::: slot highlight
```html
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

```
:::
</demo-block>

## 禁用加载
<demo-block>
::: slot source
<infiniteScroll-test2></infiniteScroll-test2>
:::

::: slot highlight
```html
<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style lang="scss">
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
  overflow: auto;
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #fff6f6;
      color: #ff8484;
    }
    .list-item + .list-item {
      margin-top: 10px;
    }
  }
}
</style>

```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
infinite-scroll-disabled|是否禁用|boolean|-|false
infinite-scroll-delay|节流时延，单位为ms|number|200
infinite-scroll-distance|触发加载的距离阈值，单位为px|number|0
infinite-scroll-immediate|是否立即执行加载方法，以防初始状态下内容无法撑满容器。|boolean|-|true