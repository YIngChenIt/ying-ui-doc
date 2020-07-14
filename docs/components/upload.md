# Upload 上传
通过点击或者拖拽上传文件

## 点击上传

<demo-block>
::: slot source
<upload-test1></upload-test1>
:::

::: slot highlight
通过 `slot` 你可以传入自定义的上传按钮类型和文字提示。可通过设置`limit`和`on-exceed`来限制上传文件的个数和定义超出限制时的行为。
```html
<template>
  <y-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <y-button size="small" type="primary">点击上传</y-button>
    <div slot="tip" class="y-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </y-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
      ]
    };
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    }
  }
};
</script>
```
:::
</demo-block>

## 上传文件列表控制
通过 `on-change` 钩子函数来对列表进行控制

<demo-block>
::: slot source
<upload-test2></upload-test2>
:::

::: slot highlight
```html
<template>
  <y-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-change="handleChange"
    :file-list="fileList"
  >
    <y-button size="small" type="primary">点击上传</y-button>
    <div slot="tip" class="y-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </y-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleChange(file) {
      console.log(file)
    }
  }
};
</script>
```
:::
</demo-block>

## 拖拽上传

<demo-block>
::: slot source
<upload-test3></upload-test3>
:::

::: slot highlight
```html
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
```
:::
</demo-block>

## Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
name|上传的文件字段名|string| - |file
action|必选参数，上传的地址|string| - | -
file-list|上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]|array|—|[]
accept|接受上传的文件类型|string| - | -
limit|最大允许上传个数|number| - | -
multiple|是否支持多选文件|boolean| - | -
on-exceed|文件超出个数限制时的钩子|function(files, fileList)| - | -
on-change|文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用|function(file)| - | -
on-success|文件上传成功时的钩子|function| - | -
on-error|文件上传失败时的钩子|function| - | -
on-progress|文件上传失文件上传时的钩子败时的钩子|function| - | -
beforeUpload|上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。|function | - | -
drag|是否启用拖拽上传|boolean| - | -