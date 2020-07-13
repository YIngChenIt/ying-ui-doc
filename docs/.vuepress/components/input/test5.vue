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