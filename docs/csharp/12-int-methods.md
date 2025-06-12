---
noteId: "794a2b10460511f08a53dd9fb031ea51"
tags: []

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

### **(3) `int.MaxValue` 和 `int.MinValue`**
- **功能**：获取 `int` 的最大值（`2,147,483,647`）和最小值（`-2,147,483,648`）。
- **示例**：
  ```csharp
  Console.WriteLine(int.MaxValue); // 2147483647
  Console.WriteLine(int.MinValue); // -2147483648
  ```

### **(4) `int.Equals()`：比较两个 `int` 是否相等**
- **功能**：比较两个 `int` 值是否相同。
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