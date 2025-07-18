---
noteId: "794a2b10460511f08a53dd9fb031ea51"
tags: []

---



## int.Parse()
**用途**

`int.Parse()` 方法用于将字符串转换为int 类型。  

**语法**：
```csharp
int.Parse(string s);
int.Parse(string s, IFormatProvider provider);
int.Parse(string s, NumberStyles style);
int.Parse(string s, NumberStyles style, IFormatProvider provider);
```

**参数说明**：

| 参数 | 说明 |
|------|------|
| `string s` | 要转换的字符串（不能为 `null` 或空） |
| `IFormatProvider provider` | （可选）提供区域性特定的格式信息（如 `CultureInfo.InvariantCulture`） |
| `NumberStyles style` | （可选）指定允许的数字格式（如 `NumberStyles.AllowThousands`） |

**返回值**

- 返回32位有符号整数（`int`）

**示例**：

1.基本用法（字符串 → `int`）
```csharp
string numberStr = "123";
int number = int.Parse(numberStr);  // 输出：123
```

2.处理不同格式的数字（如千位分隔符）
```csharp
using System.Globalization;

string numberStr = "1,234";
int number = int.Parse(numberStr, NumberStyles.AllowThousands);
// 输出：1234
```

3.指定区域性（如不同小数点/千位分隔符）
```csharp
using System.Globalization;

string numberStr = "1.234"; // 某些地区用 . 作为千位分隔符
CultureInfo culture = new CultureInfo("de-DE"); // 德语（德国）格式
int number = int.Parse(numberStr, NumberStyles.AllowThousands, culture);
// 输出：1234
```

4.异常处理

如果字符串格式无效（如 `"abc"`、`null` 或超出 `int` 范围），`int.Parse()` 会抛出：

- `FormatException`（格式错误）
- `ArgumentNullException`（字符串为 `null`）
- `OverflowException`（超出 `int` 范围，如 `"9999999999"`）

**推荐替代方法**：

使用 `int.TryParse()` 安全转换，避免异常：
```csharp
string input = "123";
if (int.TryParse(input, out int result))
{
    Console.WriteLine($"转换成功: {result}");
}
else
{
    Console.WriteLine("转换失败");
}
```

**总结**：

- **`int.Parse()`** 直接转换，失败时抛出异常。  
- **`int.TryParse()`** 更安全，返回 `bool` 表示是否成功。  
- 处理特殊格式时，可结合 `NumberStyles` 和 `IFormatProvider`。


## int.TryParse()
用途

`int.TryParse()` 方法用于 **安全地** 将字符串转换为 `int` 类型，**不会抛出异常**。

---

**语法**
```csharp
public static bool TryParse(string? s, out int result);
public static bool TryParse(string? s, NumberStyles style, IFormatProvider? provider, out int result);
```

**参数说明**

| 参数 | 说明 |
|------|------|
| `string? s` | 要转换的字符串（可以是 `null`） |
| `out int result` | 转换成功时返回转换后的 `int` 值，失败时返回 `0` |
| `NumberStyles style` | （可选）指定允许的数字格式（如 `NumberStyles.AllowThousands`） |
| `IFormatProvider? provider` | （可选）提供区域性特定的格式信息（如 `CultureInfo.InvariantCulture`） |

**返回值**

返回一个 `bool` 表示转换是否成功。  

- **`true`**：转换成功，`result` 包含转换后的 `int` 值。  
- **`false`**：转换失败（如字符串格式错误、超出 `int` 范围或 `null`），`result` 返回 `0`。  

---

**示例**

**1. 基本用法（安全转换）**
```csharp
string input = "123";
if (int.TryParse(input, out int number))
{
    Console.WriteLine($"转换成功: {number}"); // 输出：123
}
else
{
    Console.WriteLine("转换失败");
}
```

**2. 处理带千位分隔符的数字（如 `"1,234"`）**
```csharp
using System.Globalization;

string input = "1,234";
if (int.TryParse(input, NumberStyles.AllowThousands, CultureInfo.InvariantCulture, out int number))
{
    Console.WriteLine($"转换成功: {number}"); // 输出：1234
}
else
{
    Console.WriteLine("转换失败");
}
```

**3. 处理不同区域性的数字格式（如德语中的 `.` 作为千位分隔符）**
```csharp
using System.Globalization;

string input = "1.234"; // 德语中 "." 是千位分隔符
CultureInfo germanCulture = new CultureInfo("de-DE");
if (int.TryParse(input, NumberStyles.AllowThousands, germanCulture, out int number))
{
    Console.WriteLine($"转换成功: {number}"); // 输出：1234
}
else
{
    Console.WriteLine("转换失败");
}
```

**4. 处理无效输入**
```csharp
string input = "abc";
if (int.TryParse(input, out int number))
{
    Console.WriteLine($"转换成功: {number}");
}
else
{
    Console.WriteLine("转换失败"); // 输出：转换失败（number = 0）
}
```

---

**与 `int.Parse()` 的区别**
| 方法 | 异常处理 | 返回值 | 适用场景 |
|------|----------|--------|----------|
| `int.Parse()` | 失败时抛出异常（`FormatException`, `OverflowException`） | 直接返回 `int` | 确定输入有效时使用 |
| `int.TryParse()` | 不会抛出异常 | 返回 `bool` + `out int` | 不确定输入是否有效时使用（更安全） |

---

**总结**

- **`int.TryParse()` 是更安全的转换方式**，适合处理用户输入或外部数据。  
- 可通过 `NumberStyles` 和 `IFormatProvider` 处理特殊格式（如千位分隔符、不同区域性）。  
- 如果转换失败，`result` 会返回 `0`，但不会导致程序崩溃。  

推荐在大多数情况下使用 `TryParse`，避免因无效输入导致程序异常！ 🚀

## int.MaxValue ｜ int.MinValue

用途

获取 `int` 的最大值（`2,147,483,647`）和最小值（`-2,147,483,648`）。

语法

```csharp
Console.WriteLine(int.MaxValue); // 2147483647
Console.WriteLine(int.MinValue); // -2147483648
```

## int.Equals()

用途

用于比较两个 `int` 值是否相等

语法


- **示例**：
  ```csharp
  int a = 10, b = 20;
  bool isEqual = int.Equals(a, b); // false
  ```

### **(5) `int.CompareTo()`：比较两个 `int` 大小**
- **功能**：返回 `-1`（小于）、`0`（等于）、`1`（大于）。
- **示例**：
  ```csharp
  int a = 5, b = 10;
  int comparison = a.CompareTo(b); // -1（a < b）
  ```

---


## INT类型的常用方法

在 C# 中，`int`（`System.Int32`）是 **32 位有符号整数** 类型，它提供了一些 **静态方法** 和 **实例方法** 用于数值转换、比较、格式化等操作。以下是常用的方法：

---

## **1. 静态方法（`int.` 调用）**
### **(1) `int.Parse()`：字符串 → `int`**
- **功能**：将字符串转换为 `int`，如果转换失败会抛出 `FormatException`。
- **示例**：
  ```csharp
  string numStr = "123";
  int num = int.Parse(numStr); // 输出 123
  ```

### **(2) `int.TryParse()`：安全转换字符串 → `int`**
- **功能**：尝试转换字符串，失败返回 `false`，不抛异常。
- **示例**：
  ```csharp
  string input = "abc";
  if (int.TryParse(input, out int result)) {
      Console.WriteLine(result);
  } else {
      Console.WriteLine("转换失败");
  }
  ```



## **2. 实例方法（`int` 变量调用）**
### **(1) `ToString()`：`int` → `string`**
- **功能**：将 `int` 转换为字符串，可指定格式。
- **示例**：
  ```csharp
  int num = 42;
  string str = num.ToString(); // "42"
  string hex = num.ToString("X"); // "2A"（16进制）
  ```

### **(2) `Equals()`：比较当前 `int` 是否等于另一个值**
- **功能**：比较当前 `int` 是否等于另一个 `int` 或对象。
- **示例**：
  ```csharp
  int a = 10;
  bool isEqual = a.Equals(10); // true
  ```

### **(3) `GetHashCode()`：获取哈希码**
- **功能**：返回 `int` 的哈希码（通常就是它本身）。
- **示例**：
  ```csharp
  int num = 100;
  int hashCode = num.GetHashCode(); // 100
  ```

---

## **3. 其他常用操作**
### **(1) 数学运算**
`int` 支持标准算术运算：
```csharp
int a = 10, b = 3;
int sum = a + b;      // 13
int difference = a - b; // 7
int product = a * b;   // 30
int quotient = a / b;  // 3（整数除法）
int remainder = a % b; // 1（取余）
```

### **(2) 类型转换**
- **隐式转换**（小范围整数 → `int`）：
  ```csharp
  short s = 100;
  int i = s; // 自动转换
  ```
- **显式转换**（`double`/`float` → `int`）：
  ```csharp
  double d = 3.14;
  int i = (int)d; // 3（截断小数）
  ```

### **(3) 位运算**
`int` 支持位运算：
```csharp
int a = 5;      // 0101
int b = 3;      // 0011
int and = a & b; // 0001（1）
int or = a | b;  // 0111（7）
int xor = a ^ b; // 0110（6）
int shiftLeft = a << 1; // 1010（10）
int shiftRight = a >> 1; // 0010（2）
```

---

## **4. 总结**
| **方法**              | **用途**                          | **示例**                          |
|-----------------------|----------------------------------|----------------------------------|
| `int.Parse()`         | 字符串 → `int`（可能抛异常）     | `int.Parse("123")`               |
| `int.TryParse()`      | 安全转换字符串 → `int`           | `int.TryParse("abc", out num)`    |
| `int.MaxValue`        | 获取 `int` 最大值                | `int.MaxValue` → `2147483647`     |
| `int.MinValue`        | 获取 `int` 最小值                | `int.MinValue` → `-2147483648`    |
| `int.Equals()`        | 比较两个 `int` 是否相等          | `int.Equals(5, 5)` → `true`       |
| `ToString()`          | `int` → `string`                 | `42.ToString()` → `"42"`          |
| `CompareTo()`         | 比较两个 `int` 大小              | `5.CompareTo(10)` → `-1`          |
| `GetHashCode()`       | 获取哈希码                       | `100.GetHashCode()` → `100`       |

这些方法涵盖了 `int` 的常见操作，适用于数值计算、数据转换、比较等场景。 😊