---
noteId: "33624e00791511f08f22d30e9d31a0ea"
tags: []

---

## **开场**  
“大家好！欢迎观看《C#初学者入门教程》的第16课《显式转换》。

本期视频的知识点有四个：


---

## 一、什么是显式类型转换？

C# 是**强类型语言（Strongly Typed）**，默认不允许你随意将一个类型的数据当成另一个类型使用。

显式类型转换（Explicit Type Conversion）是指：

- 存在潜在风险转换
- 编译器不能自动完成的转换
- 编译器在程序员指挥下完成的类型转换

这类转换通常发生在：

- **从“大范围/高精度”类型向“小范围/低精度”类型转换**（比如 `double → int`）
- **类型之间不兼容，无法自动转换**（比如 `string → int`）
- 转换过程中**可能丢失数据、精度或引发异常**

---

## 二、显式类型转换的主要方法

在 C# 中，进行显式类型转换，常见有以下 **几种方法**：

| 方法名称 / 语法 | 语法 | 安全性 | 场景|
|----------------|-----------|-----------|------|
| **强制类型转换运算符** |`(目标类型)变量` | ⚠️ 不安全（可能丢数据） | 基本数据类型之间的转换(最常见、最基本) |
| **Convert 类方法** | `Convert.ToInt32(), Convert.ToDouble()` | ⚠️ 有一定安全性，但可能抛异常 | 通用转换，支持多种类型 |
| **Parse 方法** | `int.Parse("123")` | ❌ 不安全（格式不对就报错） | 字符串 → 数字，但要求格式正确(简单但不够健壮) |
| **TryParse 方法** |`int.TryParse("123", out int num)` | ✅ 安全 | 用户输入、不确定的字符串,如将字符串转为数字，失败不会抛异常|

> ⚠️ 注意：**显式转换通常都有风险**，比如数据截断、溢出、异常等，所以使用时必须小心。

---

### 强制类型转换运算符

示例 1：double → int（小数部分丢弃）

```csharp
double price = 123.99;
int intPrice = (int)price; // 显式转换，直接截断小数部分

Console.WriteLine(intPrice); // 输出：123
```

> ⚠️ 注意：这里不是四舍五入，而是直接丢掉小数部分！

---

示例 2：long → int（可能溢出）

```csharp
long bigNum = 3000000000; // 超过 int 最大值（约 21 亿）
int smallNum = (int)bigNum;

Console.WriteLine(smallNum); // 可能输出错误数字（溢出）
```

> ❗ 如果 `long` 值超出了 `int` 的范围，转换后的结果是不可预测的（溢出后的垃圾值）。

---

### **Convert 类**

C# 提供了一个专门的工具类 **`System.Convert`**，它包含很多静态方法，用于在不同类型之间进行**较为通用的转换**，包括从 `string`、`object` 等转换成数字等类型。

常用方法：

- `Convert.ToInt32(value)`
- `Convert.ToDouble(value)`
- `Convert.ToString(value)`
- `Convert.ToBoolean(value)`

示例 1：string → int（使用 Convert）

```csharp
string text = "123";
int num = Convert.ToInt32(text); // ✅ 字符串转整数

Console.WriteLine(num); // 输出：123
```

示例 2：object → int

```csharp
object obj = 456;
int value = Convert.ToInt32(obj); // 从 object 转 int
Console.WriteLine(value); // 输出：456
```

> ✅ `Convert` 比强制转换 `(int)` 更通用，可以处理多种类型，但它仍然 **可能抛出异常**，比如字符串不是合法数字时。

---

### **Parse 方法**

这是针对某些类型（主要是数值类型）提供的**字符串解析方法**，比如：

- `int.Parse(string)`
- `double.Parse(string)`
- `float.Parse(string)`

⚠️ **注意：这些方法要求传入的字符串必须是合法的数字格式，否则会抛出异常！**

示例：

```csharp
string numText = "123";
int number = int.Parse(numText); // ✅ 字符串转整数

Console.WriteLine(number); // 输出：123
```

❌错误示例：

```csharp
string notNumber = "abc";
int n = int.Parse(notNumber); // ❌ 抛出 FormatException！
```

> 所以 `Parse` 方法 **不够安全**，通常不建议直接用在用户输入等不确定的场景。

---

### **TryParse 方法**

这是最安全、最推荐的字符串转数字的方法，比如：

- `int.TryParse(string, out int result)`
- `double.TryParse(...)`
- `float.TryParse(...)`

✅ **特点：不会抛异常，转换失败时返回 false，不会导致程序崩溃！**

示例：

```csharp
string input = "123";
bool success = int.TryParse(input, out int number);

if (success)
{
    Console.WriteLine($"转换成功，数字是：{number}");
}
else
{
    Console.WriteLine("无法转换为整数！");
}
```

❌ 输入非法时也不会报错：

```csharp
string badInput = "abc";
bool isValid = int.TryParse(badInput, out int num);

if (isValid)
{
    Console.WriteLine(num);
}
else
{
    Console.WriteLine("输入的不是有效数字"); // 会执行这里
}
```

> ✅ **推荐在真实项目、尤其是处理用户输入时，优先使用 `TryParse`！**

---

## 三、小贴士

- 当你看到代码中有 `(int)`、`(double)` 这种写法，它就是**显式转换**，要特别留意会不会丢失数据。
- 处理用户输入时（比如从文本框读取数字），**一定要用 `TryParse`**，不要直接用 `Parse`，否则容易程序崩溃。

