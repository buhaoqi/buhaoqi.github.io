---
noteId: "42f75a0067df11f09287057f7c37db9f"
tags: []

---


## **开场**  

欢迎观看本期视频。今天我们学习《浮点数类型》

---

"浮点数就是带小数点的数字，比如：
```
商品价格 19.99

圆周率 3.14159

你的身高 1.75米
```

浮点数类型是专门用于存储浮点数的数据类型。在C#中，浮点数有三种类型：

- float:单精度浮点类型
- double：双精度浮点类型
- decimal: 最高精度浮点数类型


## 双精度浮点数类型

我们可以使用`double`关键字声明一个双精度浮点数类型的变量。

```c#
double applePrice = 9.99;
```
double在这里的意思是：声明变量price为一个双精度的浮点数类型。可以存储精度特别大的小数。

把光标悬停在9.99的上方，可以看到：9.99默认被注册为了`System.Double`，也就是双精度的浮点数。

按下Ctrl + F5运行代码，即可看到打印结果。

## 单精度浮点数类型

我们可以使用`float`关键字声明一个单精度浮点数类型的变量。

```c#
float bannaPrice = 9.99;
```
9.99这里突然出现了红色波浪线，红色波浪线是语法错误，把鼠标悬停在9.99上方，在它的提示信息中描述了两点事实：

第一点：9.99 默认也被注册为`System.Double`类型，也就是双精度浮点数。这说明什么，这说明：C# 中所有带小数点的数字字面量默认都会被注册为 double 类型。

第二点：“无法将Double类型隐式转换为float类型，请使用F后缀创建此此类型。” 这说明什么？这说明：

编译器在背后想偷偷的把双精度的9.99存储到单精度的变量容器中时，编译器必须丢掉一些数字位才能把双精度的数字存储到单精度的变量容器中，这时，编译器不敢承担这个丢失精度的责任，所以马上说：还是你自己来签字吧，在数字9.99后写一个大写的F，我就可以帮你进行显式类型转换。 所以，我们在9.99后面添加一个大写的F。然后Ctrl + F5运行代码，即可看到打印结果。

单精度浮点数和双精度浮点数的区别：

就像你用尺子测量一根头发丝的直径：

- 单精度像一把普通直尺，只能精确到0.1毫米
- 双精度（double） 像一把电子游标卡尺，能精确到0.001毫米

## Decimal类型

我们可以使用`decimal`关键字声明一个高精度浮点数类型的变量。

```c#
decimal money = 9.99;
```
9.99这里也出现了红色波浪线，和刚刚的Double类型的情况相同，9.99默认也被注册为了Double类型，编译器也无法进行隐式转换，我们需要在9.99后面添加一个大写的M，这样就可以告诉编译器：进行显式转换了。

然后Ctrl + F5运行代码，即可看到打印结果。

## 浮点型范围

接下来，我们使用`double.MinValue`和`double.MaxValue`可以查看双精度浮点型的取值范围

```c#
double price = 9.99;
Console.WriteLine(price);
Console.WriteLine(double.MinValue);//-1.79769313486232E+308
Console.WriteLine(double.MaxValue);//1.79769313486232E+308
```

使用`float.MinValue`和`float.MaxValue`可以查看单精度浮点型的取值范围

```c#
float bananaPrice = 9.99F;
Console.WriteLine(bananaPrice);
Console.WriteLine(float.MinValue); //-3.402823E+38
Console.WriteLine(float.MaxValue);//3.402823E+38 
```
                                       
单精度浮点数的最大值：三点四零二八二三乘十的三十八次幂，是一个非常大的数，

最小值，是一个相同的负数。可以看到：单精度浮点数的取值范围非常大。双精度浮点数的取值范围更大。


使用`decimal.MinValue`和`decimal.MaxValue`可以查看单精度浮点型的取值范围

```c#
decimal money = 9.99M;
Console.WriteLine(bananaPrice);
Console.WriteLine(decimal.MinValue); //-3.402823E+38
Console.WriteLine(decimal.MaxValue);//3.402823E+38 
```
decimal虽然精度最高，适合金融、货币、会计等需要高精度十进制计算的场景​​，但计算速度最慢，存储空间也最大。

float适合对内存和性能要求较高，但精度要求不高的场景。

大多数情况下，​​double 是默认选择​​，计算速度比 float 稍慢，但差异通常不明显​​。

## 总结
本节课我们主要学习了：

---

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。
你的支持是我更新最大的动力！我们下节课见！

下节预告：《浮点数类型》

慢慢学，一点点进步就很好！



## 浮点数类型

**浮点型（double）**就是带有小数点的数字，小数的特点，是精打细算。比如：

```csharp
//初中时学过的圆周率π
3.1415926
//超市里的商品价格
19.99
//考试的平均分，等等这些全靠小数撑场面
85.59
//即使是整数，加上小数点也被视为浮点数
5.0

```





## **C# `float`, `double`, `decimal` 类型的常用方法**

在 C# 中，`float`、`double` 和 `decimal` 是常用的浮点数类型，分别用于不同精度的数值计算。以下是它们的常用方法、属性和操作。

---

## **1. `float`（单精度浮点数，4字节）**

### **常用静态方法**

| 方法                                | 说明                       | 示例                                                |
| ----------------------------------- | -------------------------- | --------------------------------------------------- |
| `float.Parse(string)`               | 字符串 → `float`           | `float.Parse("3.14")` → `3.14f`                     |
| `float.TryParse(string, out float)` | 安全转换字符串 → `float`   | `float.TryParse("3.14", out float num)`             |
| `float.IsNaN(float)`                | 检查是否为 `NaN`（非数字） | `float.IsNaN(float.NaN)` → `true`                   |
| `float.IsInfinity(float)`           | 检查是否为无穷大（`±∞`）   | `float.IsInfinity(float.PositiveInfinity)` → `true` |
| `float.MaxValue`                    | 最大值（约 `3.4 × 10³⁸`）  | `float.MaxValue` → `3.4028235E+38`                  |
| `float.MinValue`                    | 最小值（约 `-3.4 × 10³⁸`） | `float.MinValue` → `-3.4028235E+38`                 |
| `float.Epsilon`                     | 最小正数（接近 0）         | `float.Epsilon` → `1.401298E-45`                    |

### **常用实例方法**

| 方法               | 说明             | 示例                           |
| ------------------ | ---------------- | ------------------------------ |
| `ToString()`       | 转换为字符串     | `3.14f.ToString()` → `"3.14"`  |
| `CompareTo(float)` | 比较两个 `float` | `3.14f.CompareTo(2.71f)` → `1` |
| `Equals(float)`    | 判断是否相等     | `3.14f.Equals(3.14f)` → `true` |

---

## **2. `double`（双精度浮点数，8字节）**

### **常用静态方法**

| 方法                                  | 说明                        | 示例                                                  |
| ------------------------------------- | --------------------------- | ----------------------------------------------------- |
| `double.Parse(string)`                | 字符串 → `double`           | `double.Parse("3.1415926535")`                        |
| `double.TryParse(string, out double)` | 安全转换字符串 → `double`   | `double.TryParse("3.14", out double num)`             |
| `double.IsNaN(double)`                | 检查是否为 `NaN`            | `double.IsNaN(double.NaN)` → `true`                   |
| `double.IsInfinity(double)`           | 检查是否为无穷大            | `double.IsInfinity(double.PositiveInfinity)` → `true` |
| `double.MaxValue`                     | 最大值（约 `1.7 × 10³⁰⁸`）  | `double.MaxValue` → `1.7976931348623157E+308`         |
| `double.MinValue`                     | 最小值（约 `-1.7 × 10³⁰⁸`） | `double.MinValue` → `-1.7976931348623157E+308`        |
| `double.Epsilon`                      | 最小正数（接近 0）          | `double.Epsilon` → `4.94065645841247E-324`            |

### **常用实例方法**

| 方法                | 说明              | 示例                                         |
| ------------------- | ----------------- | -------------------------------------------- |
| `ToString()`        | 转换为字符串      | `3.1415926535.ToString()` → `"3.1415926535"` |
| `CompareTo(double)` | 比较两个 `double` | `3.14.CompareTo(2.71)` → `1`                 |
| `Equals(double)`    | 判断是否相等      | `3.14.Equals(3.14)` → `true`                 |

---

## **3. `decimal`（高精度十进制数，16字节）**

### **常用静态方法**

| 方法                                    | 说明                       | 示例                                                  |
| --------------------------------------- | -------------------------- | ----------------------------------------------------- |
| `decimal.Parse(string)`                 | 字符串 → `decimal`         | `decimal.Parse("123.456")`                            |
| `decimal.TryParse(string, out decimal)` | 安全转换字符串 → `decimal` | `decimal.TryParse("123.456", out decimal num)`        |
| `decimal.MaxValue`                      | 最大值（约 `7.9 × 10²⁸`）  | `decimal.MaxValue` → `79228162514264337593543950335`  |
| `decimal.MinValue`                      | 最小值（约 `-7.9 × 10²⁸`） | `decimal.MinValue` → `-79228162514264337593543950335` |
| `decimal.Round(decimal, int)`           | 四舍五入到指定位数         | `decimal.Round(3.14159m, 2)` → `3.14m`                |

### **常用实例方法**

| 方法                 | 说明               | 示例                                 |
| -------------------- | ------------------ | ------------------------------------ |
| `ToString()`         | 转换为字符串       | `123.456m.ToString()` → `"123.456"`  |
| `CompareTo(decimal)` | 比较两个 `decimal` | `123.456m.CompareTo(100m)` → `1`     |
| `Equals(decimal)`    | 判断是否相等       | `123.456m.Equals(123.456m)` → `true` |

---

## **4. 常用数学运算方法**

### **(1) `Math` 类（适用于 `float`, `double`, `decimal`）**

| 方法                    | 说明     | 示例                              |
| ----------------------- | -------- | --------------------------------- |
| `Math.Abs(x)`           | 取绝对值 | `Math.Abs(-3.14)` → `3.14`        |
| `Math.Ceiling(x)`       | 向上取整 | `Math.Ceiling(3.14)` → `4`        |
| `Math.Floor(x)`         | 向下取整 | `Math.Floor(3.99)` → `3`          |
| `Math.Round(x, digits)` | 四舍五入 | `Math.Round(3.14159, 2)` → `3.14` |
| `Math.Sqrt(x)`          | 平方根   | `Math.Sqrt(16)` → `4`             |
| `Math.Pow(x, y)`        | 幂运算   | `Math.Pow(2, 3)` → `8`            |
| `Math.Max(x, y)`        | 取最大值 | `Math.Max(3.14, 2.71)` → `3.14`   |
| `Math.Min(x, y)`        | 取最小值 | `Math.Min(3.14, 2.71)` → `2.71`   |

### **(2) 金融计算（推荐 `decimal`）**

```csharp
decimal price = 9.99m;
decimal tax = price * 0.08m; // 计算税费（无浮点误差）
decimal total = price + tax; // 10.7892m
decimal roundedTotal = Math.Round(total, 2); // 10.79m
```

---

## **5. 浮点数比较的注意事项**

由于浮点数精度问题，直接比较 `==` 可能不准确：

```csharp
double a = 0.1 + 0.2;
Console.WriteLine(a == 0.3); // False（实际是 0.30000000000000004）
```

✅ **正确做法**：

- 使用 `Math.Abs(a - b) < 0.0001`（误差范围内比较）

- 或用 `decimal`（适用于金融计算）：

  ```csharp
  decimal d = 0.1m + 0.2m;
  Console.WriteLine(d == 0.3m); // True
  ```

---

## **6. 总结**

| **类型**  | **精度** | **适用场景**           | **常用方法**                     |
| --------- | -------- | ---------------------- | -------------------------------- |
| `float`   | 6-9 位   | 3D 图形、高性能计算    | `Parse`, `TryParse`, `IsNaN`     |
| `double`  | 15-17 位 | 科学计算、默认浮点类型 | `Parse`, `TryParse`, `Math` 运算 |
| `decimal` | 28-29 位 | 金融计算、精确小数     | `Parse`, `TryParse`, `Round`     |

掌握这些方法后，你可以更高效地处理浮点数运算！ 😊