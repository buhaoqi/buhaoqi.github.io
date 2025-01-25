---
noteId: "ff56e720db1b11efb4297f1d586035f5"
tags: []

---

# 微信小程序开发文档

## 组件是什么

## page组件

## bindtap属性的用法

bindtap 是微信小程序中实现点击交互的基础指令，通过它可以轻松响应用户的点击行为，并执行相应的逻辑处理。

**功能描述**

bindtap 是WXML中的一个事件绑定属性，用于在用户点击元素时触发一个事件处理函数。这是微信小程序中最常用的交互方式之一。

**使用方法**

在 WXML 文件中，你可以这样使用 bindtap：

```html
<button bindtap="handleTap">点击我</button>
```

在对应的 JS 文件中，你需要定义 `handleTap` 函数来处理点击事件：

```js
Page({
  handleTap: function(event) {
    console.log('按钮被点击了！');
    // 这里可以添加更多逻辑
  }
});
```

**注意事项**

- `bindtap` 只能在真机上触发，模拟器中可能无法正常工作。
- 如果需要在点击时传递参数给事件处理函数，可以使用 `data-*` 属性来传递自定义数据。

示例：假设你想在点击按钮时显示一个提示框，可以这样做：

```html
<button bindtap="showAlert">显示提示框</button>
Page({
  showAlert: function() {
    wx.showToast({
      title: '提示',
      icon: 'none'
    });
  }
});
```

**手势系统支持**

在最新的 Skyline 渲染框架中，`bindtap` 与手势系统紧密集成，提供了更丰富的交互体验。例如，你可以使用 `worklet:ongesture` 来处理更复杂的手势事件。

## 事件

### 小程序中的事件是什么

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
- 事件对象可以携带额外信息，如 id, dataset, touches。

### 事件绑定

当事件发生时，我们需要为发生事件的组件绑定事件处理程序。如果不绑定，当事件发生时，什么也不会发生。

### 事件的使用方式

在组件中绑定一个事件处理函数。

在相应的page定义中写上相应的事件处理函数，参数是event

### 使用WXS函数响应事件

从基础库版本`2.4.4`开始，支持使用WXS函数绑定事件，WXS函数接受2个参数，第一个是event，在原有的event的基础上加了`event.instance`对象，第二个参数是`ownerInstance`，和`event.instance`一样是一个`ComponentDescriptor`对象。具体使用如下：

在组件中绑定和注册事件处理的WXS函数。

test.wxs文件实现tapName函数



如`bindtap`，当用户点击该组件的时候会在该页面对应的Page中找到相应的事件处理函数。



### 响应事件的方式



### 事件对象



### 事件分类

事件分为冒泡事件和非冒泡事件：

1. 冒泡事件：当一个组件上的事件被触发后，该事件**会向父节点传递**。
2. 非冒泡事件：当一个组件上的事件被触发后，该事件**不会向父节点传递**。

### 冒泡事件

| 类型               | 触发条件                                                     | 最低版本 |
| ------------------ | ------------------------------------------------------------ | -------- |
| touchstart         | 手指触摸动作开始                                             |          |
| touchmove          | 手指触摸后移动                                               |          |
| touchcancel        | 手指触摸动作被打断，如来电提醒，弹窗                         |          |
| touchend           | 手指触摸动作结束                                             |          |
| tap                | 手指触摸后马上离开                                           |          |
| longpress          | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 | 1.5.0    |
| longtap            | 手指触摸后，超过350ms再离开（推荐使用longpress事件代替）     |          |
| transitionend      | 会在 WXSS transition 或 wx.createAnimation 动画结束后触发    |          |
| animationstart     | 会在一个 WXSS animation 动画开始时触发                       |          |
| animationiteration | 会在一个 WXSS animation 一次迭代结束时触发                   |          |
| animationend       | 会在一个 WXSS animation 动画完成时触发                       |          |
| touchforcechange   | 在支持 3D Touch 的 iPhone 设备，重按时会触发                 | 1.9.90   |

### 非冒泡事件

**除上表之外的其他组件自定义事件如无特殊声明都是非冒泡事件，如** [**form**](https://developers.weixin.qq.com/miniprogram/dev/component/form.html) **的**`submit`事件，[input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) 的`input`事件，[scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html) 的`scroll`事件。

### 事件分类