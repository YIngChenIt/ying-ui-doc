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