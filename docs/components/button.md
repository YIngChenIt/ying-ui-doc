
# Button 组件
常用的操作按钮。
## 基础用法
基础的按钮用法。

<demo-block>
::: slot source
<button-test1></button-test1>
:::

使用type属性来定义 Button 的样式。

::: slot highlight
```html
<div>
    <y-button>默认按钮</y-button>
    <y-button type="primary">主要按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="info">信息按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="danger">危险按钮</y-button>
</div>
```
:::
</demo-block>




## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

<demo-block>
::: slot source
<button-test2></button-test2>
:::

使用type属性来定义 Button 的样式。

::: slot highlight
```html
<div>
    <y-button icon="edit">编辑</y-button>
    <y-button icon="edit"></y-button>
</div>
```
:::
</demo-block>



## 加载中

要设置为 loading 状态，只要设置loading属性为true即可。

<demo-block>
::: slot source
<button-test3></button-test3>
:::

要设置为 loading 状态，只要设置loading属性为true即可。

::: slot highlight
```html
<y-button :loading="true">加载中</y-button>
```
:::
</demo-block>


## 按钮组
以按钮组的方式出现，常用于多项类似操作。


<demo-block>
::: slot source
<button-test4></button-test4>
:::

使用`<el-button-group>`标签来嵌套你的按钮。

::: slot highlight
```html
<y-button-group>
      <y-button icon="left" position="left">上一页</y-button>
      <y-button icon="right" position="right">下一页</y-button>
</y-button-group>

<y-button-group>
    <y-button icon="edit"></y-button>
    <y-button icon="edit"></y-button>
    <y-button icon="edit"></y-button>
</y-button-group>
```
:::
</demo-block>


## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type|类型|string|primary / success / warning / danger / info |default
icon|图标类名|string | - | -
loading|是否加载中状态|boolean|-|false
position|图标位置|string | left / right | left