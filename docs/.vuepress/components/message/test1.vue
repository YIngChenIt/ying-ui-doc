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
