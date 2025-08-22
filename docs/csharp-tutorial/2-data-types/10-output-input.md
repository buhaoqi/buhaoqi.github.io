---
noteId: "193133f062ab11f0a138bb2f2278db69"
tags: []

---

## **开场**  
“大家好！欢迎观看《C#初学者入门教程》的第18课《数据的输出与输入》。

本期视频的知识点有四个：



今天我们将迈出程序与用户“交流”的第一步，学会用 WriteLine() 和 ReadLine() 与用户进行“对话”。
简单来说，这节课我们会学会两件事：​​如何从用户那里获取数据（输入），以及如何把程序的结果展示给用户（输出）

接下来，我们进入讲解。

---

## 什么是输入和输出？

数据的输入与输出是程序中最基本也是最重要的功能。

“输出”是把程序内的数据显示在外部的命令行窗口上，给用户看。

而“输入”则是从用户那里获取数据。比如让用户输入名字、年龄等。


## 输出的实现
首先看‘输出’

C#用 Console.WriteLine() 和 Console.Write() 把内容显示到控制台窗口（就是运行程序后弹出的黑色命令行框）

它们的区别很简单：

​​Console.WriteLine()​​：输出内容后​​自动换行​​（下一行接着显示其他内容）。
​​Console.Write()​​：输出内容后​​不换行​​（下一行内容会紧挨着显示）。

---

## Console.WriteLine() 

用途

`Console.WriteLine() `方法用于**把括号里的内容输出到控制台中，然后换行。**。

基础语法

```c#
Console.WriteLine(输出的内容);
```
在这里，**Console**是一个提前预定义好的类，它模拟了控制台对象。

示例:变量输出

```c#
int age = 18;
Console.WriteLine("年龄是：" + age);
```

输出

```
年龄是：18
```

---

## Console.Write() 

用途

`Console.Write() `方法用于**把括号里的内容输出到控制台中，但不会换行。**。

基础语法

```c#
Console.Write(输出的内容);
```

输出但不换行

```csharp
Console.Write("Hello");
Console.Write("World");
```

输出结果：

```
HelloWorld
```

两句输出紧挨在一起，因为它们之间没有换行符。

---

实际开发中，我们常把 Write() 和 WriteLine() 组合使用——比如先提示用户‘输入什么’，再显示结果。

示例：输入姓名和年龄

```csharp
Console.Write("姓名：");
Console.WriteLine("张三");

Console.Write("年龄：");
Console.WriteLine(18);
```

输出结果是：

```
姓名：张三
年龄：18
```

---

## Console.ReadLine()

Console.ReadLine()用于从控制台窗口获取一段文本数据，它的语法是：

```csharp
string name = Console.ReadLine();
```

这一行的意思是：**读取用户输入的内容，并把它保存到变量 name 中。**

注意两点​​：

- ​​一定要用变量接收返回值​​（否则输入的内容会‘丢掉’）！
- ​​通常要提前提示用户输入什么​​（比如‘请输入你的名字：’），不然用户不知道该输啥

示例：你好张三！

我们来写一个小程序，让用户输入名字，然后打印一句问候。”

```csharp
Console.Write("请输入你的名字：");
string userName = Console.ReadLine();
Console.WriteLine("你好，" + userName + "！");
```
运行后：

- 程序会先打印提示：‘请输入你的名字：
- 然后当运行到 `ReadLine()` 时，程序会停下来等待用户输入，
- 当用户输入名字并按下回车键后，ReadLine() 把‘张三’存到变量 userName 里
- 最后打印：你好，张三！。

假设用户输入：张三
输出就是：

```bash
你好张三!
```

---

## 数据类型转换

注意⚠️：**Console.ReadLine() 的返回值类型是字符串（string）！** 在遇到数值计算的时候，这会产生问题，请看示例：


```csharp linenums="1"
//首先，使用Console.WriteLine输出提示信息
Console.WriteLine("请输入你的年龄：");
//然后声明变量age存储用户输入的年龄
string age = Console.ReadLine();
//最后输出age+1的结果
Console.WriteLine("你明年的年龄是：" + age + 1 + "岁"。);
```
如果用户输入‘25’，输出会是：你明年的年龄是：251岁。

为什么？因为 age 是字符串‘25’，+ 1 和 + 岁。 都会被当成字符串拼接（就像把‘25’、‘1’、‘岁。’连在一起）。

程序不会自动猜你想算数学题——它只会按规则拼接字符串！”

正确做法是：使用`int.Parse()`转整数

“想做数学计算？先用 int.Parse() 把字符串转成整数！

```csharp linenums="1"
Console.WriteLine("请输入你的年龄：");
string age = Console.ReadLine();
// 把字符串‘25’转成整数25，再加1
int result = int.Parse(age) + 1
Console.WriteLine("你明年的年龄是：" + result  + "岁"。);
```

---

类似地，如果用户输入的是小数（比如商品价格‘9.9’），可以用 double.Parse() 转成浮点数：

示例：接收小数

```csharp
Console.Write("请输入商品价格：");
string input = Console.ReadLine();
//转成浮点数再打8折
double discount = double.Parse(input) * 0.8;
Console.WriteLine("商品八折后的价格是: " + discount);
```
注意：如果用户输入的不是数字（比如输入‘abc’），int.Parse() 会报错！后续课程我们会教更安全的转换方法（比如 TryParse）。”


---

## 总结

本课我们主要学习了：

| 方法                    | 作用                |
| --------------------- | ----------------- |
| `Console.Write()` | 提示用户输入         |
| `Console.ReadLine()`  | 获取用户输入 |
| `int.Parse()`         | 把字符串转换成整数  |
| `double.Parse()`         | 把字符串转换成浮点数  |
| `Console.WriteLine()` | 输出结果        |

---

## 结束语
本节课就到这里，这里是不好奇编程，我是张杰。

你的支持是我更新最大的动力！我们下节课见！

下节预告：《if条件语句》

慢慢学，一点点进步就很好！

## 练习

### 1.姓名与年龄

```csharp
Console.WriteLine("请输入你的姓名：");
string name = Console.ReadLine();

Console.WriteLine("请输入你的年龄：");
int age = int.Parse(Console.ReadLine());

Console.WriteLine("你好，" + name + "，你今年 " + age + " 岁了！");
```

运行结果示例：

```
请输入你的姓名：
小明
请输入你的年龄：
18
你好，小明，你今年 18 岁了！
```

1. 让用户输入他们的名字和喜欢的颜色，输出一句话：“你好，\[名字]，你喜欢的颜色是\[颜色]。”
2. 让用户输入两个数字，输出它们的和。（提示：用 `int.Parse()` 把字符串转成整数）
3. 让用户输入一句话，把这句话再原样输出。

---
### 2.价格与库存

```csharp
// 产品信息输出
string product = "笔记本电脑";
double price = 5999.99;
int stock = 42;

Console.WriteLine("┌───────────────────────┐");
Console.WriteLine($"│ 产品: {product,-12} │");
Console.WriteLine($"│ 价格: {price:C2}     │");
Console.WriteLine($"│ 库存: {stock:D4}件    │");
Console.WriteLine("└───────────────────────┘");
```

输出结果：
```
┌───────────────────────┐
│ 产品: 笔记本电脑         │
│ 价格: ¥5,999.99        │
│ 库存: 0042件           │
└───────────────────────┘
```
---

### 3. 个人信息收集
```csharp
// 收集并显示用户个人信息
Console.Write("请输入您的年龄：");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("请输入您的职业：");
string job = Console.ReadLine();

Console.WriteLine($"个人信息：\n年龄：{age}岁\n职业：{job}");
```

### 4.用户兴趣调查
```csharp
// 多步骤兴趣调查
Console.Write("您最喜欢的颜色是？");
string color = Console.ReadLine();

Console.Write("您最喜欢的食物是？");
string food = Console.ReadLine();

Console.WriteLine($"您的偏好：\n颜色：{color}\n食物：{food}");
```
### 5.字符串拼接练习

```csharp
// 组合用户输入的多个字符串
Console.Write("请输入城市：");
string city = Console.ReadLine();

Console.Write("请输入街道：");
string street = Console.ReadLine();

Console.WriteLine($"完整地址：{city}市{street}街道");
```

---


### 6.考试成绩

编写一个小程序，完成以下功能：

* 提示用户输入姓名；
* 提示用户输入年龄；
* 提示用户输入成绩；
* 最后把用户信息格式化输出到控制台：

示例输出：

```
你好，张三！
你今年 20 岁，考试成绩是 88.5 分。
```

---