---
noteId: "bff06100797d11f096197f4ef3b2c3fb"
tags: []

---


## **开场**  

> 🎙️ “大家好！欢迎观看《C#初学者实例教程》第7课《格式化输出》。
> 
> 我是张杰。
>
> 上节课我们学习了基本的输入输出数据的方法。
>
> 本节课我们进一步深入学习数据的输出，`WriteLine()` 方法提供了多种灵活的方式来格式化输出内容。接下来，我们进入讲解。

---

`WriteLine()`方法 是 C# 中最常用的输出方法之一，用于向控制台输出数据并自动添加换行符。它的基本用法有以下3种：

## 用法1:基础输出

第一种用法：向控制台输出值或变量

- 输出值(字面量)：`Console.WriteLine(值)`
- 输出变量：`Console.WriteLine(变量名)`
- 空行：`Console.WriteLine()`

## 用法2:多参数输出

第二种用法：向控制台输出多个参数

示例：向控制台输出变量a,b,c的值

```c# linenums="1"
int a = 10, b = 20, c = 30;
//把这三个值输出到控制台，作为初学者可能很自然的这样写：使用逗号分割三个变量
Console.WriteLine(a,b,c); 
```
但是，运行后程序却报错了。

这是因为`WriteLine()`方法不接受三个独立的参数，如果希望正确输出3个参数，必须在首位增加一个字符串，像这样：

```c# linenums="1"
int a = 10, b = 20, c = 30;
Console.WriteLine("a={0}，b={1},c={2}",a,b,c); 
```
在字符串中，使用花括号{}把多个参数分别插进来：

- 在花括号内填写0可以插入第一个参数
- 填写1，可以插入第二个参数
- 以此类推：数字0、1、2分别对应参数的位置

这个字符串是一个复合参数，我们称之为“格式化字符串”。

花括号在这里被称作“格式化占位符”。它的使用规则是：

- 一一对应：
- 可以省略
- 允许重复


## 用法3:数值格式化

第三种用法：对数据进行格式化再输出

格式化数据的语法如下

```c# linenums="1"
格式项语法：{索引[,对齐][:格式说明符]}
```

关键组成部分

|部分|	示例	|说明|
|--|--|--|
|固定文本|	"结果: {0}"	|直接输出的文字内容|
|索引占位符|{0}	|对应方法的第一个参数（索引从0开始）|
|对齐控制|	{0, -5}	|负数为左对齐，正数为右对齐，数字代表总宽度|
|格式说明符	|{0:N2}	|指定数据显示格式（如 N2 表示带2位小数的千分位格式）|


**格式说明符**：


| **格式说明符** | **语法格式**       | **含义**                     | **示例输入**       | **输出示例**         |
|----------------|--------------------|-----------------------------|--------------------|----------------------|
| **货币格式**   | `{0:C}`| 使用本地货币符号，n为小数位数 | `1234.56`          | `¥1,234.56` (中文)   |
| **小数格式符**   | `{0:F}`| 保留n位小数（默认2位）       | `3.14159` (F2)     | `3.14`               |
| **百分比格式符**     | `{0:P}`| 数值×100并添加%符号，n为小数位 | `0.123` (P1)       | `12.3%`              |
| **整数格式符**   | `{0:D5}`| 补位0，添加5位整数    | `89`  | `00089`       |


示例：编写一个控制台程序，使用 Console.WriteLine() 的复合格式化功能，输出以下格式的商品销售报表：

- 商品名称（左对齐，占15字符宽度）
- 单价（货币格式，带¥符号）
- 库存数量（5位数字，不足前面补零）
- 折扣率（百分比格式，保留2位小数）
- 折扣后价格（保留2位小数）

代码

```c# linenums="1"
string pName = "无线蓝牙耳机";
double price = 299;
int stock = 90;
double discountRate = 0.15;
double discountedPrice = price * ( 1- discountRate);

//表头
Console.WriteLine("{0}{1:C}{2:D5}{3:P0} {4:F2}", pName, price, stock, discountRate, discountedPrice);
```

## 用法4:对齐控制
第四种用法：对数据进行对齐输出

示例：对齐格式化数据后的商品销售报表：

输出结果

```bash
————————————————————————————————————————————————————————
商品名称        价格       库存     折扣率    打折后价格
————————————————————————————————————————————————————————
无线蓝牙耳机    ¥299.00   00090     15%        254.15    
————————————————————————————————————————————————————————
```


代码

```c# linenums="1"
string pName = "无线蓝牙耳机";
double price = 299;
int stock = 90;
double discountRate = 0.15;
double discountedPrice = price * ( 1- discountRate);

//表头
Console.WriteLine("———————————————————————————————————————————————————————————");
Console.WriteLine("{0,-12}{1,-9}{2,-7}{3,-7}{4,-5}","商品名称","价格","库存","折扣率","打折后价格");
Console.WriteLine("———————————————————————————————————————————————————————————");
Console.WriteLine("{0,-10}{1,-10:c}{2,-10:d5}{3,-10:P0} {4,-10:F2}", pName, price, stock, discountRate, discountedPrice);
Console.WriteLine("———————————————————————————————————————————————————————————");
```

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。感谢你的认真学习，我们下节课见！

下节预告：《字符串是什么》—— 让输出更优雅。

慢慢学，一点点进步就很好！

## 练习

### 1.格式化字符串
```csharp
// 输入圆的直径（字符串），计算周长（double）
Console.Write("请输入圆的直径: ");
string input = Console.ReadLine();

if (double.TryParse(input, out double diameter)) {
    double circumference = Math.PI * diameter; // 使用double计算
    Console.WriteLine($"周长: {circumference:F2}"); // 保留两位小数
} else {
    Console.WriteLine("输入的不是有效数字！");
}
```


----
在 C# 中，`Console.WriteLine()` 是一个非常基础、常用且重要的方法，用于向**控制台（Console）输出一行文本信息，并在输出后自动换行**。

它是开发控制台应用程序（Console Application）时最常用的方法之一，也是在初学 C# 时第一个接触的输出方法。

---

## 一、`Console.WriteLine()` 的作用

| 功能 | 说明 |
|------|------|
| 🖨️ **输出信息到控制台** | 将你提供的内容显示在命令行 / 终端窗口 |
| 🔄 **自动换行** | 在输出内容后，**自动换到下一行**（光标移到下一行开头） |
| 🧩 **支持多种数据类型** | 可以输出字符串、数字、布尔值、对象等，会自动调用 `.ToString()` |
| 🪄 **支持格式化输出** | 支持**插值字符串**、**占位符格式化**、**数字/日期格式化**等功能 |

---

## 二、基本语法

```csharp
Console.WriteLine(要输出的内容);
```

- 它属于 `System.Console` 类，位于 `System` 命名空间，使用前通常需要添加：

```csharp
using System;
```

但大多数控制台项目模板已经默认包含了该命名空间。

---

## 三、`Console.WriteLine()` 的详细用法与示例

---

### ✅ 示例 1：输出字符串（最基础用法）

```csharp
Console.WriteLine("Hello, World!");
```

**输出：**
```
Hello, World!
```
👉 光标会自动换行。

---

### ✅ 示例 2：输出数字、布尔值等基本类型

```csharp
int age = 25;
double price = 19.99;
bool isActive = true;

Console.WriteLine(age);       // 输出：25
Console.WriteLine(price);     // 输出：19.99
Console.WriteLine(isActive);  // 输出：True
```

> 🧠 **说明：** `Console.WriteLine()` 会自动调用这些类型的 `.ToString()` 方法，将其转换为字符串输出。

---

### ✅ 示例 3：输出多个值（使用多个参数）

```csharp
string name = "Alice";
int score = 95;

Console.WriteLine("姓名：", name);             // 错误写法 ❌ 只会输出 "姓名："，不会输出 name
Console.WriteLine("姓名：" + name);          // 正确，字符串拼接
Console.WriteLine($"姓名：{name}，分数：{score}"); // ✅ 推荐：插值字符串
Console.WriteLine("姓名：{0}，分数：{1}", name, score); // ✅ 使用占位符
```

**推荐写法：**

```csharp
// 方式1：插值字符串（推荐，C# 6.0+）
Console.WriteLine($"姓名：{name}，分数：{score}");

// 方式2：占位符格式化
Console.WriteLine("姓名：{0}，分数：{1}", name, score);
```

**输出：**
```
姓名：Alice，分数：95
```

---

## 四、`Console.WriteLine()` 的格式化输出能力

C# 提供了强大的格式化功能，允许你以**可读性强、标准化的方式输出数字、日期、对象等**。

### 1. ✅ **插值字符串（String Interpolation）** 【推荐 ✅】

语法：在字符串前加 `$`，然后使用 `{变量名}` 或 `{表达式}` 直接嵌入内容。

```csharp
string product = "苹果";
decimal price = 8.99m;
int quantity = 3;

Console.WriteLine($"商品：{product}，单价：{price:C}，数量：{quantity}，总价：{(price * quantity):F2}");
```

**可能的输出（依赖文化设置）：**
```
商品：苹果，单价：¥8.99，数量：3，总价：26.97
```

> 🎯 格式说明符：
> - `{price:C}` → 货币格式（如 ¥8.99 或 $8.99）
> - `{price:F2}` → 保留两位小数（如 8.99）
> - `{quantity:D2}` → 显示为两位数，如 03

---

### 2. ✅ **占位符格式化（Placeholders）**

语法：`Console.WriteLine("格式字符串", 参数1, 参数2, ...)`  
占位符写成 `{0}`, `{1}`, `{2}`... 按顺序对应后面的参数。

```csharp
string name = "Tom";
int age = 30;
Console.WriteLine("姓名：{0}，年龄：{1}", name, age);
```

**输出：**
```
姓名：Tom，年龄：30
```

> 🧠 占位符数字从 `{0}` 开始，按顺序对应传入参数。

你还可以控制格式，比如：

```csharp
double num = 1234.5678;
Console.WriteLine("数字：{0:F2}，货币：{1:C}，百分比：{2:P}", num, num, num / 10000);
```

---

### 3. ✅ **数字和日期格式化示例**

#### 数字格式化：

```csharp
int number = 1234;
double pi = 3.1415926;

Console.WriteLine(number.ToString("D6"));    // 001234 （6位，不足补零）
Console.WriteLine(pi.ToString("F3"));        // 3.142 （保留3位小数）
Console.WriteLine(pi.ToString("N2"));        // 3.14 （带千分位，保留两位小数）
```

#### 日期格式化：

```csharp
DateTime now = DateTime.Now;

Console.WriteLine(now.ToString("yyyy-MM-dd"));          // 如：2024-06-01
Console.WriteLine(now.ToString("yyyy/MM/dd HH:mm:ss")); // 如：2024/06/01 14:30:45
Console.WriteLine(now.ToString("dddd, MMMM dd"));       // 如：Saturday, June 01
```

---

## 五、`Console.WriteLine()` 的常见用途

| 场景 | 示例 |
|------|------|
| **输出提示信息** | `Console.WriteLine("请输入您的姓名：");` |
| **显示计算结果** | `Console.WriteLine($"结果是：{a + b}");` |
| **调试输出** | 打印变量值，用于排查问题 |
| **控制台应用交互** | 提示用户输入、显示菜单、输出结果等 |
| **日志输出（简单场景）** | 输出运行状态、错误消息等 |

---

## 六、相关常用方法

| 方法 | 说明 |
|------|------|
| **`Console.Write()`** | 输出内容，但**不会换行**（光标停留在当前行末尾） |
| **`Console.WriteLine()`** | 输出内容并**自动换行** ✅ 最常用 |
| **`Console.ReadLine()`** | 从控制台读取用户输入的一行文本 |
| **`Console.ReadKey()`** | 读取用户按下的单个按键 |
| **`Console.Error.WriteLine()`** | 输出到标准错误流（而不是标准输出） |

---

## 七、`Console.Write()` vs `Console.WriteLine()`

| 方法 | 是否换行 | 适用场景 |
|------|----------|----------|
| `Console.Write()` | ❌ 不换行 | 输出内容后光标停留在当前行，适合连续输出 |
| `Console.WriteLine()` | ✅ 自动换行 | 输出后换到下一行，适合每条信息单独一行 |

🔍 示例：

```csharp
Console.Write("Hello");
Console.Write("World");
// 输出：HelloWorld（在同一行）

Console.WriteLine("Hello");
Console.WriteLine("World");
// 输出：
// Hello
// World
```

---

## 八、总结 ✅

| 项目 | 说明 |
|------|------|
| **方法** | `Console.WriteLine(内容)` |
| **作用** | 将内容输出到控制台，并在末尾自动换行 |
| **支持类型** | 字符串、数字、布尔值、对象等（自动调用 `.ToString()`） |
| **格式化支持** | 支持插值字符串 `$""`、占位符 `{0}`、数字/日期格式化等 |
| **常用场景** | 控制台应用输出、调试信息、用户提示、结果展示等 |
| **相关方法** | `Console.Write()`（不换行）、`Console.ReadLine()`（读取输入） |

---

## ✅ 总结一句话：

> **C# 中的 `Console.WriteLine()` 是用于向控制台输出信息并自动换行的核心方法，支持多种数据类型和灵活的格式化功能，是开发控制台程序、调试和交互式应用时最常用的基础工具之一。**

---

### 🧠 想进一步学习？

- 如何格式化数字、日期、货币显示（更详细示例）
- 如何用 `Console.ReadLine()` 获取用户输入并处理
- 如何用 `Console` 制作简单的控制台菜单或小游戏
- 如何输出彩色文本（高级，通过控制台颜色 API）

欢迎继续提问！我可以为你提供详细代码示例 😊。