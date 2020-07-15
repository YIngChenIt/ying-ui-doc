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
        message: "这是一条消息提示"
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
      this.$message({
        message: "错了哦，这是一条错误消息",
        type: "error"
      });
    }
  }
};
</script>
