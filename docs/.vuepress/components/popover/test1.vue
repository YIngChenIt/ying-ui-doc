<template>
   <y-popover
        v-model="value"
        width="200"
        title="标题"
        content="内容内容，这是一个popover"
        trigger="click"
        placement="right"
      >
        <y-button type="primary" slot="reference">click</y-button>
      </y-popover>
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  }
}
</script>