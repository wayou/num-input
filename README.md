# num-input

微信小程序自定义组件带加减的数字输入框。

## 预览

![preview](./preview.png)

## 使用

1. 安装

```sh
$ yarn add num-input
```

2. 点击开发者工具中的菜单栏：工具 --> 构建 npm
3. 在需要使用的页面配置文件中添加引用

```
{
  "usingComponents": {
    "num-input": "num-input",
  }
}
```

更多关于小程序中使用 npm 包的信息参见官方文档 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 配置项

|属性|默认值|描述|
-|-|-
|`value`|-|输入框的值|
|`step`|1|加减点击后的步长|
|`size`|'m'|尺寸，可选值 `s|m|l` |

## 事件

|事件名|描述|
-|-
|`input`|输入框的发生变化|

## 相关资源

- [小程序自定义组件文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
- [weui 文档](https://wechat-miniprogram.github.io/weui/docs/)
- [组件样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F)
- [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

