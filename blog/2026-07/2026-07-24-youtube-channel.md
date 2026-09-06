---
slug: youtube-channels-computer
title: YouTube Channels Computer
authors: buhaoqi
tags: [design]
---
油管编程频道 TOP20
<!-- truncate -->
![Image](https://images.openai.com/static-rsc-4/UxydrvqRDnyblwtiLOoozd_bHoPZ04ch8dwDbYJXRzv6QnlQ2_AuEx6NVrxnoeEy6P1ud1vDysImoerBVnGkTeyB0Fi57GQtLU3HECYkkjeWj6p_r4tA0friirj7VSAeTG9p4bUG3sRbsga6hpJL6TvNpQCZcdxsWgSw4AcCeNa02Ay7k0L__ahlxKcmyC5a?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/9XFaeXdJ1I5z-qw2Eo7lEZwutF6AIzYsRI88zdh8u-lXBEOjQkpGR9vQ5V3_70NLafOkzOjagShgGPXaKum2nAuXSpO_Ki2L50mWXu1nE-d8aD69GiAQDwzhCqa1K4fo--ngOzS1CesBYkkZ69qMz4XknxqGPk0ANm_HHTwVc3SDxry4v514EpHLxTJJWO2y?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Dwrn5BAqXoj9qAnr6EWq4BEhZOweACrCJS_5sSLFeJ8cm9VmGTlnRR1fP0gSEN1pvuE9lGWMyeZf355-joW16ZA9qfCvl-c4aj5GnU904OTyJdNsfR6k8l-9-ZMtb03WMdxlXvr4hJWXY6ov1gzgus22M3T6wuCTFfIu8a3Gteknw82L-RFmylE6x0Dbb2F4?purpose=fullsize)

ByteByteGo 的视频动效风格非常有代表性：**不是传统动画片，而是“技术图解动画（motion infographic）”**。

它的核心思路是：

 **先设计一张高质量技术架构图，再让图里的元素按照讲解逻辑运动起来。**

这也是为什么它看起来专业、清晰，而且适合讲复杂计算机知识。

---

 1. 动效类型：二维信息图动画（Motion Graphics）

ByteByteGo 主要不是 3D 建模，而是：

* 图标
* 方框
* 箭头
* 数据流
* 文字标签
* 简单角色

组成一个动态系统。

例如讲：

"用户请求 → API Gateway → 服务 → 数据库"

静态：

```
User



API Gateway



Service



Database
```

动态：

```
User
  |
  |  request
  ↓
API Gateway
  |
  |  forward
  ↓
Service
  |
  | query
  ↓
Database
```

通过：

* 箭头移动
* 高亮
* 缩放
* 淡入淡出

让观众理解数据流。

---

# 2. 常用制作软件

这类视频一般会使用：

## Adobe After Effects（AE）★★★★★

最核心。

负责：

* 文字动画
* 路径动画
* 图标移动
* 镜头推进
* 转场

例如：

一个数据库圆柱：

先出现：

```
   ______
  /      \
 |        |
 |        |
  \______/
```

然后：

数据块从 API 飘进去。

这种就是 AE 做的。

---

## Adobe Illustrator / Figma

负责：

制作静态素材。

比如：

* 服务器图标
* 云
* 数据库
* 用户头像
* 网络节点

通常：

Figma 设计 → SVG 导出 → AE 动画。

---

## Lottie（可能使用）

很多互联网产品动画会使用：

* After Effects
* Bodymovin
* Lottie

把动画导出成网页可用格式。

---

# 3. 它的视觉风格为什么高级？

关键不是软件。

而是设计原则。

## 原则1：颜色极少

通常：

背景：

```
白色 / 深蓝 / 浅灰
```

主体：

```
蓝色
绿色
橙色
```

不会五颜六色。

---

## 原则2：一个画面只表达一个关系

例如：

讲缓存：

不会同时出现：

CPU

内存

硬盘

网络

用户

全部动画。

而是：

第一步：

CPU 请求数据

↓

第二步：

Cache 命中

↓

第三步：

返回数据

---

## 原则3：动画服务于理解

不是：

为了炫。

而是：

告诉你：

"东西从哪里来，到哪里去。"

所以大量使用：

* 移动
* 连线
* 聚焦
* 放大

---

# 4. 如果你做《秒懂计算机》，非常适合借鉴

你的课程方向：

* 进制
* CPU
* 内存
* 编译器
* CLR
* 操作系统

其实非常适合这种风格。

例如：

讲：

"变量去哪了？"

可以做：

```
C#代码

int age = 18;

       ↓

Compiler

       ↓

IL代码

       ↓

JIT

       ↓

CPU指令

       ↓

Memory
```

每一步出现动画。

这就是 ByteByteGo 的思路。

---

# 5. 我建议你的制作路线（适合个人创作者）

不用一开始追求复杂。

推荐：

## 第一阶段

工具：

* Figma
* After Effects

流程：

```
Figma设计图
        ↓
导入AE
        ↓
添加移动、缩放、路径动画
        ↓
配音
        ↓
剪辑
```

---

## 第二阶段

加入：

* 3D芯片模型
* 光效
* 粒子

工具：

* Blender
* Cinema 4D

---

# 如果按照你的“村长讲 C#”基础，我觉得《秒懂计算机》最适合的风格：

不是纯 ByteByteGo。

而是：

**ByteByteGo（技术图解）

* Branch Education（科技视觉）
* 村长 IP（人格化教学）**

例如：

画面：

左边：

村长讲解

右边：

动态计算机结构图

中间：

数据流动画

这样既专业，又不会像大学公开课那么冷。

其实你现在做的“进制三要素”“变量内存原理”，天然适合这种动效形式。你已经有内容体系，只差建立一套统一的视觉动画语言。

