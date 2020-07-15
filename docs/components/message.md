# Message 消息提示
常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法
从顶部出现，3 秒后自动消失。

<demo-block>
::: slot source
<message-test1></message-test1>
:::

::: slot highlight
```html
<template>
  <div>
    <y-button @click="open">打开消息提示</y-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$message({
        message: "hello world",
        duration: 30000
      });
    }
  }
};
</script>

```
:::
</demo-block>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

<demo-block>
::: slot source
<message-test2></message-test2>
:::

::: slot highlight
```html
<template>
  <div>
    <button @click="open2">成功</button>
    <button @click="open3">警告</button>
    <button @click="open1">消息</button>
    <button @click="open4">错误</button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message({
        $message: "这是一条消息提示"
      });
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    }
  }
};
</script>

```
:::
</demo-block>

## 可关闭
可以添加关闭按钮

<demo-block>
::: slot source
<message-test3></message-test3>
:::
默认的 `Message` 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用`showClose`字段。此外，和 Notification 一样，`Message` 拥有可控的`duration`，设置0为不会被自动关闭，默认为 3000 毫秒。

::: slot highlight
```html
<template>
  <div>
    <y-button @click="open2">成功</y-button>
    <y-button @click="open3">警告</y-button>
    <y-button @click="open1">消息</y-button>
    <y-button @click="open4">错误</y-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message({
        message: "这是一条消息提示",
        showClose: true,
      });
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
        showClose: true,
      });
    },
    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
        showClose: true,
      });
    },
    open4() {
      this.$message({
        message: "错了哦，这是一条错误消息",
        type: "error",
        showClose: true,
      });
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
message|消息文字|string| - |-
type| 主题 |string|success/warning/info/erro|info
duration|显示时间, 毫秒。设为 0 则不会自动关闭|number|-|3000
showClose|是否显示关闭按钮|boolean|-|false
onClose|关闭时的回调函数, 参数为被关闭的 message 实例|function|——|——