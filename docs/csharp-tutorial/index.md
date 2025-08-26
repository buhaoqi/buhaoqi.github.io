---
noteId: "0cb0d31062ab11f0a138bb2f2278db69"
tags: []

---

## 常用快捷键
| 快捷键                        | 功能说明               |
| -------------------------- | ------------------ |
| Ctrl + / |单行注释|
|Ctrl + K + C|注释选定内容|
|Ctrl + K + U|取消注释选定内容|
|Ctrl + K + D|格式化代码|
|Ctrl + Shift + .|放大|
|Ctrl + Shift + ,|缩小|
|Shift + Alt + .|匹配下一个|
|Shift + Alt + ;|匹配全部|
|Shift + Enter| 换行|
|Shift + Home| 行内向前全选|
|Shift + End| 行内向后全选|
|Ctrl + Shift + Home|向上全选
|Ctrl + Shift + End|向下全选
|Ctrl + Home|定位光标到首行|
|Ctrl + End|定位光标到尾行|
|Ctrl + L|删除行|
|Ctrl + D|复制行|
|Ctrl + M + M| 折叠代码｜


## **C# 编程基础与面向对象知识体系**

### 一、**C# 与 .NET 平台基础**
- 1.1 Microsoft.NET 平台简介
- 1.2 .NET 架构（公共语言运行库 + 类库）
- 1.3 C# 语言在 .NET 中的作用
- 1.4 C# 集成开发环境（如 Visual Studio.NET）
- 1.5 开发 C# 应用程序的一般步骤

---

### 二、**C# 语言基础**
- 2.1 基本语法与代码书写规则
- 2.2 数据类型
  - 2.2.1 值类型
    - 有符号整型：sbyte, short, int, long
    - 无符号整型：byte, ushort, uint, ulong
    - 浮点类型：float, double
    - 小数类型：decimal
    - 字符类型：char
    - 布尔类型：bool
    - 结构类型：struct
    - 枚举类型：enum
  - 2.2.2 引用类型
    - 类类型：class, object, string
    - 数组类型：一维/多维数组
    - 接口类型、委托类型
- 2.3 常量与变量
  - 常量表示法
  - 变量命名规则
  - 变量类型转换
  - 变量作用域
- 2.4 运算符
  - 算术、赋值、关系、逻辑运算符
  - 运算符优先级
- 2.5 表达式与语句
- 2.6 流程控制语句
  - 2.6.1 顺序结构
  - 2.6.2 条件语句：if…else、switch…case
  - 2.6.3 循环语句：for、while、do…while
  - 2.6.4 跳转语句：break、continue

---

### 三、**算法与程序设计基础**
- 3.1 算法的概念与描述方法
  - 自然语言、流程图、伪代码
- 3.2 算法的基本特性
  - 有穷性、确定性、输入、输出、可行性
- 3.3 算法的性能评价
  - 时间复杂度（基本运算次数）
  - 空间复杂度（执行过程所需存储空间）
- 3.4 典型算法
  - 排序算法：选择法、冒泡法、插入法
  - 查找算法：顺序查找、二分法查找
  - 递归算法
  - 数学算法：最大值、最小值、公约数、素数、累加、累乘、阶乘、回文数、斐波那契数列
- 3.5 程序结构
  - 顺序结构、分支结构、循环结构
  - 流程图中的处理、判断图形（矩形、菱形）
- 3.6 算法与程序的关系

---

### 四、**面向对象编程（OOP）基础**
- 4.1 面向对象的三大特性
  - 封装、继承、多态
- 4.2 类与对象
  - 类的定义
  - 对象的创建与使用
  - 类是模板，对象是实例
- 4.3 类的成员
  - 4.3.1 字段
  - 4.3.2 属性（只读、只写、读写）
  - 4.3.3 方法
  - 4.3.4 构造函数
  - 4.3.5 this 关键字（访问属性、方法、调用构造函数）
  - 4.3.6 static 关键字（静态字段、方法）
- 4.4 封装的作用与实现
- 4.5 继承的概念与语法（了解）
- 4.6 多态的实现方式（方法重写、虚方法等，了解）

---

### 五、**C# 常用类的属性与方法**
- 5.1 Math 类
  - Abs, Pow, Sqrt, Round, Ceil, Floor, Exp, Log, Max, Min, Sign, Sin, Cos
- 5.2 String 类
  - 属性：Length, Chars
  - 方法：Equals, Compare, Contains, Concat, Copy, Format, IndexOf, Insert, Remove, Replace, IsNullOrEmpty, Join, Split, ToLower, ToUpper, ToCharArray, Trim, Substring
- 5.3 DateTime 类
  - 属性：Now, Today, Year, Month, Day, Hour, Minute
- 5.4 Random 类
  - 方法：Next, NextDouble
- 5.5 类型转换方法
  - ToBoolean, ToChar, ToDateTime, ToDecimal, ToDouble, ToSingle, ToString

---

### 六、**Windows应用程序设计基础**
- 6.1 窗体（Form）
  - 属性：Name, Height, Width, Visible, BackColor, Font…
  - 方法：Show, Hide, Close, Activate
  - 事件：Load, Click, KeyPress, MouseClick, Resize…
- 6.2 常用控件
  - Label、TextBox、Button、ComboBox、ListBox、RadioButton、CheckBox
  - 滚动条（HScrollBar / VScrollBar）、Timer 控件
  - GroupBox、TabControl（了解）
  - 菜单、对话框、消息框（了解）

---

### 七、**文件与数据访问**
- 7.1 文件与文件流（FileStream）
  - 文本文件与二进制文件的读写
- 7.2 文件的概念

---

### 八、**图形操作（了解）**
- 8.1 绘图类：Graphics、Pen、Brush、Font
- 8.2 Graphics 类的常用绘图方法

---


## 思维导图（文本版）

```
C# 编程基础与面向对象知识体系
├── 一、C# 与 .NET 平台基础
│   ├── .NET 平台简介
│   ├── .NET 架构
│   ├── C# 在 .NET 中的作用
│   ├── 开发步骤
│   └── IDE 介绍
├── 二、C# 语言基础
│   ├── 基本语法
│   ├── 数据类型（值类型 / 引用类型）
│   ├── 常量与变量
│   ├── 运算符与优先级
│   ├── 表达式
│   ├── 流程控制（顺序/分支/循环/跳转）
├── 三、算法与程序基础
│   ├── 算法概念与描述
│   ├── 算法特性（有穷/确定/输入/输出）
│   ├── 时间/空间复杂度
│   ├── 排序/查找算法
│   ├── 递归/数学算法
│   └── 程序结构（流程图元素）
├── 四、面向对象编程（OOP）
│   ├── 三大特性：封装、继承、多态
│   ├── 类与对象
│   ├── 类的成员：字段、属性、方法、构造函数
│   ├── this / static
│   ├── 封装与继承（基础）
├── 五、C# 常用类
│   ├── Math 类
│   ├── String 类
│   ├── DateTime 类
│   ├── Random 类
│   └── 类型转换方法
├── 六、Windows 应用程序设计
│   ├── 窗体与控件
│   ├── 常用控件属性与事件
│   └── 菜单与对话框
├── 七、文件与数据访问
│   ├── FileStream
│   └── 文件读写
└── 八、图形操作（了解）
    ├── Graphics 类
    └── 绘图方法
```

---






