# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基本用法

<demo-block>
::: slot source
<switch-test1></switch-test1>
:::

绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。


::: slot highlight
```html
<template>
  <y-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></y-switch>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>

```
:::
</demo-block>

## 扩展的 value 类型

<demo-block>
::: slot source
<switch-test2></switch-test2>
:::

设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。


::: slot highlight
```html
<template>
  <y-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0"
  ></y-switch>
</template>

<script>
export default {
  data() {
    return {
      value: "100"
    };
  }
};
</script>
```
:::
</demo-block>

## 禁用状态

<demo-block>
::: slot source
<switch-test3></switch-test3>
:::

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。


::: slot highlight
```html
<template>
  <div>
    <y-switch v-model="value1" disabled></y-switch>
    <y-switch v-model="value2" disabled></y-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
       value1: true,
        value2: false
    };
  }
};
</script>
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
value / v-model | 绑定值 | boolean / string / number | - | -
disabled | 是否禁用 | boolean | - | false
width | switch 的宽度（像素） | number | - | 40
active-value | switch 打开时的值 | boolean / string / number | - | true
inactive-value | switch 关闭时的值 | boolean / string / number | — | false
active-color | switch 打开时的背景色 | string | — | —
inactive-color | switch 关闭时的背景色 | string | — | —