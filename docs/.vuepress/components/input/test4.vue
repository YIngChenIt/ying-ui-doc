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