---
title: 任务一 Math类
description: 算法与程序设计《C#》项目九 C#常用类的属性和方法 任务一 Math类 知识点总结。掌握Math类求绝对值、指数、对数、三角函数等常见方法。
keywords: [C#, Math类, 数学函数, 绝对值, 三角函数, 对数, 对口升学]
sidebar_label: 任务一 Math类
sidebar_position: 1
slug: /csharp/proj9/task1-math-class
tags: [C#, 项目九, 任务一, 对口升学]
---

## 知识点

Math类为三角函数、对数函数和其他通用数学函数提供常数和静态方法。该类属于System命名空间，是一个密封类，有两个公共字段和若干静态方法。

### 1. Math类的两个公共字段（表9-1）

| 名称 | 功能说明 | 实例 | 结果 |
|---|---|---|---|
| E | 自然对数的底，即数学常数e | `Math.E` | 2.71828182845905 |
| PI | 圆周率，即圆的周长与其直径的比值 | `Math.PI` | 3.1415926 |

### 2. Math类常见方法（表9-2）

| 方法 | 说明 |
|---|---|
| `Abs(number)` | 返回参数的绝对值 |
| `Pow(number1, number2)` | 返回指定数字的指定次幂 |
| `Sqrt(number)` | 返回指定参数的算术平方根 |
| `Ceiling(number)` | 返回大于或等于该数的最小整数 |
| `Floor(number)` | 返回小于或等于该数的最大整数 |
| `Exp(number)` | 返回e的指定次幂 |
| `Log(number1, number2)` | 返回指定数字在使用指定底时的对数 |
| `Log(number)` | 返回指定数字的自然对数（底为e） |
| `Log10(number)` | 返回指定数字以10为底的对数 |
| `Max(number1, number2)` | 返回两个数中较大的一个 |
| `Min(number1, number2)` | 返回两个数中较小的一个 |
| `Sign(number)` | 返回指定数值的符号：数值`>`0返回1；数值=0返回0；数值`<`0返回-1 |
| `Sin(number)` | 返回指定角度的正弦值 |
| `Cos(number)` | 返回指定角度的余弦值 |
| `Tan(number)` | 返回指定角度的正切值 |
| `Round(number)` 或 `Round(number1, number2)` | 将小数或双精度浮点数舍入到最接近的整数或者指定精度 |

### 3. Math公共字段示例

创建控制台应用程序，显示Math类的两个常数：

```csharp
static void Main(string[] args)
{
    Console.WriteLine(Math.PI);
    Console.WriteLine(Math.E);
    Console.ReadLine();
}
```

运行结果（图9-1）：
```
3.14159265358979
2.71828182845905
```

### 4. Abs方法（绝对值）

功能：返回参数的绝对值。

语法：`Math.Abs(number)`

示例：
```csharp
Console.WriteLine(Math.Abs(-3));
Console.WriteLine(Math.Abs(0));
Console.WriteLine(Math.Abs(3));
```
显示结果：`3`、`0`、`3`

### 5. Pow方法（幂运算）

功能：返回指定数字的指定次幂。

语法：`Pow(number1, number2)`

- number1：要乘幂的双精度浮点数
- number2：指定幂的双精度浮点数

示例：
```csharp
Console.WriteLine(Math.Pow(2, 2));
Console.WriteLine(Math.Pow(2, -2));
```
显示结果：`4`、`0.25`

### 6. Sqrt方法（开平方）

功能：返回指定参数的算术平方根。

语法：`Math.Sqrt(number)`

- number：任何有效的大于或等于0的数值表达式

示例：
```csharp
Console.WriteLine(Math.Sqrt(9));
Console.WriteLine(Math.Sqrt(0));
```
显示结果：`3`、`0`

### 7. Ceiling方法（取最大整数）

功能：返回大于或等于该指定小数的最小整数。

语法：`Math.Ceiling(number)`

示例：
```csharp
Console.WriteLine(Math.Ceiling(-5.5));
Console.WriteLine(Math.Ceiling(0.6));
Console.WriteLine(Math.Ceiling(5.5));
```
显示结果：`-5`、`1`、`6`

### 8. Floor方法（取最小整数）

功能：返回小于或等于该指定小数的最大整数。

语法：`Math.Floor(number)`

示例：
```csharp
Console.WriteLine(Math.Floor(-5.5));
Console.WriteLine(Math.Floor(0.6));
Console.WriteLine(Math.Floor(5.5));
```
显示结果：`-6`、`0`、`5`

### 9. Exp方法（e的次方）

功能：返回e的指定次幂。

语法：`Math.Exp(number)`

示例：
```csharp
Console.WriteLine(Math.Exp(-1));
Console.WriteLine(Math.Exp(0));
Console.WriteLine(Math.Exp(1));
```
显示结果：`0.367879441171442`、`1`、`2.71828182845905`

### 10. Log(number1, number2)方法（指定底对数）

功能：返回指定数字在使用指定底时的对数。

语法：`Math.Log(number1, number2)`

- number1：要查找其对数的数
- number2：对数的底

示例：
```csharp
Console.WriteLine(Math.Log(8, 2));
Console.WriteLine(Math.Log(8, 8));
Console.WriteLine(Math.Log(1, 8));
```
显示结果：`3`、`1`、`0`

### 11. Log(number)方法（自然对数）

功能：返回指定数字的自然对数（底为e）。

语法：`Math.Log(number)`

示例：
```csharp
Console.WriteLine(Math.Log(Math.E));
Console.WriteLine(Math.Log(1));
```
显示结果：`1`、`0`

### 12. Log10方法（常用对数）

功能：返回指定数字以10为底的对数。

语法：`Math.Log10(number)`

示例：
```csharp
Console.WriteLine(Math.Log10(10));
Console.WriteLine(Math.Log10(1));
Console.WriteLine(Math.Log10(0.1));
```
显示结果：`1`、`0`、`-1`

### 13. Max方法（取大）

功能：返回两个数中较大的一个。

语法：`Math.Max(number1, number2)`

示例：
```csharp
Console.WriteLine(Math.Max(10, 100));
Console.WriteLine(Math.Max(10, 10));
Console.WriteLine(Math.Max(10, -10));
```
显示结果：`100`、`10`、`10`

### 14. Min方法（取小）

功能：返回两个数中较小的一个。

语法：`Math.Min(number1, number2)`

示例：
```csharp
Console.WriteLine(Math.Min(10, 100));
Console.WriteLine(Math.Min(10, 10));
Console.WriteLine(Math.Min(10, -10));
```
显示结果：`10`、`10`、`-10`

### 15. Sign方法（数值符号）

功能：返回指定数值的符号。数值`>`0返回1；数值=0返回0；数值`<`0返回-1。

语法：`Math.Sign(number)`

示例：
```csharp
Console.WriteLine(Math.Sign(10.5));
Console.WriteLine(Math.Sign(0));
Console.WriteLine(Math.Sign(-10.5));
```
显示结果：`1`、`0`、`-1`

### 16. Sin方法（正弦函数）

功能：返回指定角度的正弦值。

语法：`Math.Sin(number)`

- number：以弧度计量的角度

示例：
```csharp
Console.WriteLine(Math.Sin(Math.PI / 6));
Console.WriteLine(Math.Sin(0));
Console.WriteLine(Math.Sin(90 * Math.PI / 180));
```
显示结果：`0.5`、`0`、`1`

> **注意**：角度需转换为弧度，公式为：弧度 = 角度 × `Math.PI` / 180

### 17. Cos方法（余弦函数）

功能：返回指定角度的余弦值。

语法：`Math.Cos(number)`

- number：以弧度计量的角度

示例：
```csharp
Console.WriteLine(Math.Cos(Math.PI / 3));
Console.WriteLine(Math.Cos(0));
Console.WriteLine(Math.Cos(90 * Math.PI / 180));
```
显示结果：`0.5`、`1`、`6.123031769E-17`（极接近0的浮点误差）

### 18. Tan方法（正切函数）

功能：返回指定角度的正切值。

语法：`Math.Tan(number)`

- number：以弧度计量的角度

示例：
```csharp
Console.WriteLine(Math.Tan(Math.PI / 4));
Console.WriteLine(Math.Tan(0));
Console.WriteLine(Math.Tan(45 * Math.PI / 180));
```
显示结果：`1`、`0`、`1`

### 19. Round方法（四舍五入）

功能：将小数舍入到最接近的整数或者指定精度。

语法：
```csharp
Round(number)
Round(number1, number2)
```

- number1：要舍入的数
- number2：要保留的小数位数
- Round采用"就近舍入"（"四舍六入五成双"）的舍入方法

示例1：
```csharp
Console.WriteLine(Math.Round(5.5));
Console.WriteLine(Math.Round(4.5));
Console.WriteLine(Math.Round(5.501));
Console.WriteLine(Math.Round(4.501));
```
显示结果：`6`、`4`、`6`、`5`

> **说明**：5.5舍入为6（五成双，6是偶数）；4.5舍入为4（五成双，4是偶数）

示例2：
```csharp
Console.WriteLine(Math.Round(5.55, 1));
Console.WriteLine(Math.Round(5.54, 1));
Console.WriteLine(Math.Round(5.56, 1));
```
显示结果：`5.6`、`5.5`、`5.6`
