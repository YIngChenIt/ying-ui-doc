# Popover 弹出框

## 基础用法

<demo-block>
::: slot source
<popover-test1></popover-test1>
:::

`trigger`属性用于设置何时触发 `Popover`，支持两种触发方式：`hover`，`click`。对于触发 `Popover` 的元素，有两种写法：使用 `slot="reference"` 的具名插槽。

::: slot highlight
```html
<template>
   <y-popover
        v-model="value"
        width="200"
        title="标题"
        content="内容内容，这是一个popover"
        trigger="click"
        placement="right"
      >
        <y-button type="primary" slot="reference">click</y-button>
      </y-popover>
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  }
}
</script>
```
:::
</demo-block>


## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
placement|出现位置|string|top\bottom\left\right|-|-
value|状态是否可见|Boolean| - | false
width|宽度|number|-|-
title|标题|string|-|-
content|显示的内容|string|-|-
trigger|触发方式|string|click/hover|-