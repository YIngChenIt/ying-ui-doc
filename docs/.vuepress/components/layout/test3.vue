<template>
  <div>
    <y-row :gutter="20">
      <y-col :span="16">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row :gutter="20">
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row :gutter="20">
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="16">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
  </div>
</template>

<style lang="scss">
.y-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.y-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>