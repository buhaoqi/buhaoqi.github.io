---
noteId: "193133f062ab11f0a138bb2f2278db69"
tags: []

---
## **开场**  

> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第7课《数据的输入与输出》。
> 
> 我是张杰。
>
> 今天我们将迈出程序与用户“交流”的第一步，学会用 WriteLine() 和 ReadLine() 进行数据的输出与输入，让代码动起来、听得懂、也说得出。

---


## 什么是输入和输出？

数据的输入与输出是程序中最基本也是最重要的功能。

输出

> 在程序中，“输出”是把程序内的数据显示在外部的命令行窗口上，给用户看。
> 
> 可以通过`Console.WriteLine()`方法实现输出功能。

输入

> 而“输入”则是程序外部，也就是从用户那里获取数据。
> 
> 可以通过`Console.ReadLine()`方法实现输入功能。

---

## Console.WriteLine()

在 C# 中，我们通过 **Console 类** 来完成输入输出操作。`Console`类定义了一个`WriteLine()`方法，

用途

`WriteLine()`方法用于**把括号里的内容输出到控制台中，然后换行。**。

基础语法

```c#
Console.WriteLine(输出的内容);
```
示例1：字面量输出

```csharp
Console.WriteLine("Hello World!");
```
输出
```bash
Hello World!
```

示例2:变量输出

```c#
int age = 18;
Console.WriteLine("年龄是：" + age);
```

输出

```
年龄是：18
```

---

## Console.ReadLine() 

`Console`类同时也定义了一个`ReadLine()`方法。

用途

`ReadLine()`方法用于**从控制台读取用户输入的一行文本**。 

基础语法

```c#
Console.ReadLine();
```

返回值

该方法运行后，返回一个字符串类型的文本，也就是用户输入的内容。

示例1：你好张三！

我们来写一个小程序，让用户输入名字，然后打印一句问候。”

```csharp linenums="1"
Console.Write("请输入您的姓名：");
string name = Console.ReadLine();
Console.WriteLine("你好" + name + "!");
```
注意：当程序运行到 `ReadLine()` 时，会**停下来等待用户输入并按下回车键**，然后再继续执行后面的代码。

输出
```bash
你好张三!
```

> “运行后，程序会先打印提示：‘请输入你的名字：’
> 等待你在控制台输入内容，比如输入 ‘小明’，然后程序就会输出：‘你好，小明！’”

---

## 类型转换

在下面这个案例中，`Console.ReadLine()` 得到的结果永远是 `string` 类型，即使用户输入数字18，在程序内得到的也是字符串“18”。

示例: 明年多少岁

```csharp linenums="1"
Console.WriteLine("请输入你的年龄：");
string ageStr = Console.ReadLine();
Console.WriteLine("你输入的年龄是：" + ageStr + 1);
```
注意：

- 当一个字符串类型的值18 + 遇上一个数值1的时候，会发生隐式数据类型转换，数值1会被转为字符串1，最终的结果就是181。程序不会猜你是不是想算数学，它只看到两个字符串，于是就把它们连在一起了！
- 为了得到19，可以使用`int.Parse()`把用户输入的字符串“18”转为整数18。我们将在后面的课程中详细讲‘类型转换’。
- 如果用户输入的不是数字，`int.Parse()` 会报错。以后我们会讲更安全的转换方式。

```csharp linenums="1"
Console.WriteLine("请输入你的年龄：");
string ageStr = Console.ReadLine();
int age = int.Parse(ageStr);  // 将字符串转换为整数
Console.WriteLine("你输入的年龄是：" + age);
```

这段代码还可以再简练一点：

```csharp linenums="1"
Console.WriteLine("请输入你的年龄：");
int age = int.Parse(Console.ReadLine());  // 将字符串转换为整数
Console.WriteLine("你输入的年龄是：" + age);
```

---

## 总结

本课我们主要学习了：

| 方法                    | 作用                |
| --------------------- | ----------------- |
| `Console.WriteLine()` | 输出信息并换行           |
| `Console.ReadLine()`  | 获取用户输入 |
| `int.Parse()`         | 把字符串转换成整数  |


如何使用 `Console.ReadLine()` 读取用户输入时，需要注意两点：

1. 通常配合提示信息使用（提前告诉用户应该输入什么）
2. 需要使用变量接收它的返回值—— 否则输入就白读了。

---

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。感谢你的认真学习，我们下节课见！

下节预告：《字符串是什么》—— 让输出更优雅。

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

### 2. 个人信息收集
```csharp
// 收集并显示用户个人信息
Console.Write("请输入您的年龄：");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("请输入您的职业：");
string job = Console.ReadLine();

Console.WriteLine($"个人信息：\n年龄：{age}岁\n职业：{job}");
```

### 3.用户兴趣调查
```csharp
// 多步骤兴趣调查
Console.Write("您最喜欢的颜色是？");
string color = Console.ReadLine();

Console.Write("您最喜欢的食物是？");
string food = Console.ReadLine();

Console.WriteLine($"您的偏好：\n颜色：{color}\n食物：{food}");
```
### 4.字符串拼接练习

```csharp
// 组合用户输入的多个字符串
Console.Write("请输入城市：");
string city = Console.ReadLine();

Console.Write("请输入街道：");
string street = Console.ReadLine();

Console.WriteLine($"完整地址：{city}市{street}街道");
```

---