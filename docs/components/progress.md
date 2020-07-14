# Progress 进度条
用于展示操作进度，告知用户当前状态和预期。

## 线形进度条
<demo-block>
::: slot source
<progress-test1></progress-test1>
:::

`Progress` 组件设置`percentage`属性即可，表示进度条对应的百分比，必填，必须在 0-100。

::: slot highlight
```html
<template>
  <div id="app">
    <br />
    <y-progress :percentage="50" color="#409eff"></y-progress>
    <br />
    <y-progress :percentage="100" color="#67c23a"></y-progress>
    <br />
    <y-progress :percentage="80" :strokeWidth="20" color="#e6a23c"></y-progress>
    <br />
    <y-progress :percentage="percentage" :strokeWidth="10" color="#f56c6c"></y-progress>

    <br />

    <y-button @click="decrease">-</y-button>
    <y-button @click="increase">+</y-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 20
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
};
</script>
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
strokeWidth|进度条宽度|number| - | -
percentage|进度百分比|number | - | -
color|进度条颜色|string|-|'blue'