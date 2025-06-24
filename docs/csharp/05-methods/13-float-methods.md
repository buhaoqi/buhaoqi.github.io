---
noteId: "51638d403eca11f081f2eb75db5e372e"
tags: []

---

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

