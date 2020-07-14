<template>
  <div id="app">
    <br />
    <y-progress :percentage="50" color="#409eff"></y-progress>
    <br />
    <y-progress :percentage="100" color="#67c23a"></y-progress>
    <br />
    <y-progress :percentage="80" :strokeWidth="20" color="#e6a23c"></y-progress>
    <br />
    <y-progress :percentage="percentage" :strokeWidth="10" color="#f56c6c"></y-progress>

    <br />

    <y-button @click="decrease">-</y-button>
    <y-button @click="increase">+</y-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 20
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
};
</script>