# Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<el-container>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。

::: tip
以上组件采用了 `flex` 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。
:::

## 常见页面布局
<demo-block>
::: slot source
<container-test1></container-test1>
:::

::: slot highlight
```html
<template>
  <div>
    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
    </y-container>

    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>

    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-main>Main</y-main>
    </y-container>

    <y-container>
      <y-header>Header</y-header>
      <y-container>
        <y-aside width="200px">Aside</y-aside>
        <y-main>Main</y-main>
      </y-container>
    </y-container>

    <y-container>
      <y-header>Header</y-header>
      <y-container>
        <y-aside width="200px">Aside</y-aside>
        <y-container>
          <y-main>Main</y-main>
          <y-footer>Footer</y-footer>
        </y-container>
      </y-container>
    </y-container>

    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-container>
        <y-header>Header</y-header>
        <y-main>Main</y-main>
      </y-container>
    </y-container>

    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-container>
        <y-header>Header</y-header>
        <y-main>Main</y-main>
        <y-footer>Footer</y-footer>
      </y-container>
    </y-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.y-header,
.y-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.y-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.y-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .y-container {
  margin-bottom: 40px;
}

.y-container:nth-child(5) .y-aside,
.y-container:nth-child(6) .y-aside {
  line-height: 260px;
}

.y-container:nth-child(7) .y-aside {
  line-height: 320px;
}
</style>
```
:::
</demo-block>

## Header Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
height|顶栏高度|string| - | 60px

## Aside Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
width|侧边栏宽度|string| - | 300px

## Footer Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
height|底栏高度|string| - | 60px