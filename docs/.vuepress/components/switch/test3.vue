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
