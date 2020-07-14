<template>
  <y-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
    <i class="y-icon-upload"></i>
    <div class="y-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div class="y-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </y-upload>
</template>
