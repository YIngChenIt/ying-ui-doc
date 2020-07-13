# Input 输入框
通过鼠标或键盘输入字符

::: tip
以上组件采用了 `flex` 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。
:::

## 基础用法

<demo-block>
::: slot source
<input-test1></input-test1>
:::

::: slot highlight
```html
<template>
  <y-input v-model="input" placeholder="请输入内容"></y-input>
</template>

<script>
export default {
  data() {
    return {
      input: ""
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
<input-test2></input-test2>
:::

通过 `disabled` 属性指定是否禁用 `input` 组件

::: slot highlight
```html
<template>
  <y-input placeholder="请输入内容" v-model="input" :disabled="true"></y-input>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
```
:::
</demo-block>

## 可清空

<demo-block>
::: slot source
<input-test3></input-test3>
:::

使用`clearable`属性即可得到一个可清空的输入框

::: slot highlight
```html
<template>
  <y-input placeholder="请输入内容" v-model="input" :disabled="true"></y-input>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
```
:::
</demo-block>

## 密码框
<demo-block>
::: slot source
<input-test4></input-test4>
:::

使用`show-password`属性即可得到一个可切换显示隐藏的密码框

::: slot highlight
```html
<template>
  <y-input placeholder="请输入密码" v-model="input" show-password></y-input>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
```
:::
</demo-block>

## 带 icon 的输入框

带有图标标记输入类型

<demo-block>
::: slot source
<input-test5></input-test5>
:::

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 `input` 组件首部和尾部增加显示图标，也可以通过 `slot` 来放置图标。

::: slot highlight
```html
<template>
  <div>
    <y-input v-model="input" type="password" placeholder="请输入内容" name="username" prefix-icon="edit"></y-input>
    <y-input v-model="input" type="password" placeholder="请输入内容" name="username" suffix-icon="edit"></y-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
```
:::
</demo-block>

## Input Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
name | 原生属性 | string | - | -
type | 类型 | string | text，textarea 和`其他 原生 input 的 type 值` | -
placeholder | 输入框占位文本 | string | - | -
value | 绑定值 | string / number | - | -
disabled | 禁用 | boolean | - | false
clearable | 是否可清空 | boolean | - | false
show-password | 是否显示切换密码图标 | boolean | - | false
prefix-icon | 输入框头部图标 | string | - | -
suffix-icon | 输入框尾部图标 | string | - | -