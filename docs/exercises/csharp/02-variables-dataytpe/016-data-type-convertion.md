---
noteId: "1bf57ac0647111f0b3be856b16b937e6"
tags: []

---

6. **什么是隐式类型转换？哪些整数类型之间可以隐式转换？**  
7. **什么是显式类型转换（强制转换）？举例说明 `int` 转 `short` 可能存在的问题。**  
8. **`checked` 和 `unchecked` 关键字的作用是什么？如何检测整数溢出？**  
9. **`Convert.ToInt32()` 和 `int.Parse()` 有什么区别？哪个方法更安全？**  
10. **`int.TryParse()` 的返回值是什么？如何使用它安全地转换字符串？**  

11. **`int.MaxValue + 1` 的结果是什么？为什么？**  
12. **如何安全地计算两个 `int` 的和，防止溢出？**  
13. **`10 / 3` 和 `10 / 3.0` 的结果有什么区别？为什么？**  
14. **`Math.DivRem()` 方法的作用是什么？举例说明。**  
15. **如何使用位运算 `<<` 和 `>>` 进行快速乘除运算？**  




类型转换发生在赋值或操作数类型不同时。 常见的数据类型转换包括：

- 整数 → 浮点数
- 浮点数 → 整数
- 不同大小的整数之间转换

转换方式主要有：

-  隐式转换（Implicit Conversion）：就是指编译器自动转换类型。当转换不会丢失数据时，编译器会自动进行隐式转换。不需要特殊语法，不会丢失数据。
-  显式转换（Explicit Conversion）：就是指强制转换（强制转换运算符）类型。当转换可能丢失数据时，必须使用显式转换，否则编译器会报错。

## 隐式转换（自动转换）

### 1. 数值类型的隐式转换

遵循原则：从小类型向大类型转换。

```
byte → short → int → long → float → double
char → int → long → float → double
```

**示例：**
```csharp
int i = 123;
long l = i;    // 隐式转换 int → long
float f = l;   // 隐式转换 long → float
```
**示例**：（整数  → 浮点数)

```csharp
//整数可以安全转换为 `float`、`double` 或 `decimal`，因为浮点数的范围更大。
int numInt = 100;
float numFloat = numInt;    // 隐式转换 int → float
double numDouble = numInt;  // 隐式转换 int → double
decimal numDecimal = numInt; // 隐式转换 int → decimal
```

**示例**：(小范围整数 → 大范围整数)

```csharp
//`byte` → `short` → `int` → `long`
byte smallNum = 200;
int bigNum = smallNum;  // byte → int（无数据丢失）
```

## 显式转换

### 1. 强制类型转换

**(1) 浮点数 → 整数**
- 浮点数转换为整数时，**小数部分会被截断**（不四舍五入）。
- 如果浮点数超出目标整数范围，结果会溢出（可能变成负数或错误值）。
- **语法**：
  ```csharp
  (目标类型)变量或值
  ```
- **示例**：
  ```csharp
  double pi = 3.14159;
  int intPi = (int)pi;  // 显式转换 double → int，intPi = 3（小数部分丢失）
  
  float bigFloat = 1.5e10f;  // 15,000,000,000（超出 int 范围）
  int badConversion = (int)bigFloat;  // 溢出，结果不可预测！
  
  double d = 123.456;
  int i = (int)d;  // i = 123，小数部分丢失
  ```

 **(2) 大范围整数 → 小范围整数**
- 如果大整数超出小类型的范围，数据会被截断（高位丢失）。
- **示例**：
  ```csharp
  int bigNum = 300;
  byte smallByte = (byte)bigNum;  // 300 > 255，溢出！smallByte = 44（300 - 256）
  ```

### 2.使用 Convert 类

System.Convert 类提供了一系列通用显式转换工具：

Convert 方法特点：
- 提供了一整套静态方法（如 ToInt32()、ToDouble()）。
- 支持多种类型间的转换（如字符串、浮点数、日期等）。
- 对 null 的处理：
		- 输入为 null 时：
		- 转换为数值类型 → 返回 0。
		- 转换为字符串 → 返回 null。
- 会进行四舍五入（如 Convert.ToInt32(3.6) → 4）。
- 转换失败时抛出异常（如 FormatException、OverflowException）。

示例

```csharp
int i = Convert.ToInt32("123");    // 字符串转int
double d = Convert.ToDouble("123.45"); // 字符串转double
string s = Convert.ToString(123);  // int转字符串
```


| 方法                 | 说明                     |
|----------------------|--------------------------|
| `Convert.ToInt32()`  | 转换为 `int`（四舍五入） |
| `Convert.ToInt64()`  | 转换为 `long`            |
| `Convert.ToSingle()` | 转换为 `float`           |
| `Convert.ToDouble()` | 转换为 `double`          |
| `Convert.ToDecimal()`| 转换为 `decimal`         |


### 3. Parse 方法

Parse 方法用于：字符串→目标类型的显式转换

特点

- 专用于字符串到其他类型的转换（如 int.Parse("123")）。
- 对于数值类型，支持格式字符串
- 对格式要求严格：
		- 必须完全符合目标类型格式。
		- 不支持自动四舍五入（如 int.Parse("3.9") 直接抛异常）。
- 转换失败时抛出 FormatException 或 OverflowException。

示例

```csharp
int i = int.Parse("123");
double d = double.Parse("123.45");
string str = "123";
int num = int.Parse(str);  // 显式转换，可能抛异常

// 以下会抛异常：
int invalid1 = int.Parse("3.14"); // FormatException（不是整数）
int invalid2 = int.Parse("9999999999"); // OverflowException（超出int范围）
```

### 2. TryParse 方法

TryParse: 安全的格式转换

特点

- 与 Parse 功能相同，但不抛异常，而是返回 bool 表示是否成功。
- 通过 out 参数返回转换结果。
- 适合用户输入或不可信数据源。

示例

```csharp
bool success = int.TryParse("123", out int result);
if(success) {
    // 使用result
}
string input = "123";
bool success = int.TryParse(input, out int result);
if (success) {
    Console.WriteLine(result); // 转换成功
} else {
    Console.WriteLine("输入无效");
}
```


## 转换方法对比

| 转换方式 | 是否需要显式声明 | 是否可能丢失数据 | 失败时行为 |
|---------|----------------|----------------|-----------|
| 隐式转换 | 否 | 否 | 编译错误 |
| 显式转换 | 是 | 可能 | 运行时异常 |
| Convert | 是 | 可能 | 抛出异常 |
| Parse | 是 | 可能 | 抛出异常 |
| TryParse | 是 | 可能 | 返回false |

对比总结

| **特性**        | **强制转换 `(int)x`** | **`Convert` 类**   | **`Parse`** | **`TryParse`** |
| --------------- | --------------------- | ------------------ | ----------- | -------------- |
| **输入类型**    | 数值/兼容类型         | 任意类型           | 仅字符串    | 仅字符串       |
| **`null` 处理** | 编译错误              | 返回 `0` 或 `null` | 抛异常      | 返回 `false`   |
| **四舍五入**    | 截断小数              | 支持               | 不支持      | 不支持         |
| **失败行为**    | 可能溢出              | 抛异常             | 抛异常      | 返回 `false`   |
| **性能**        | 最快                  | 中等               | 中等        | 最安全         |

## 常见转换问题
**(1) 浮点数 → 整数（截断 vs 四舍五入）**
```csharp
double num = 3.9;
int truncated = (int)num;       // 3（截断）
int rounded = Convert.ToInt32(num); // 4（四舍五入）
```

**(2) `decimal` 必须显式转换**
`decimal` 不能隐式转换到 `float`/`double`，必须强制转换：
```csharp
decimal money = 100.50m;
double approx = (double)money;  // 必须显式转换
```

**(3) 字符串 → 数值**
```csharp
string input = "123";
int num = int.Parse(input);      // 方法1：Parse（失败抛异常）
int num2 = Convert.ToInt32(input); // 方法2：Convert（推荐）
bool success = int.TryParse(input, out int num3); // 方法3：安全转换
```

---

## **总结**
| 转换场景            | 推荐方式                     |
|---------------------|-----------------------------|
| **整数 → 浮点数**   | 隐式转换（自动）            |
| **浮点数 → 整数**   | `(int)` 或 `Convert.ToInt32` |
| **大整数 → 小整数** | `(byte)` 或 `checked` 检查   |
| **字符串 → 数值**   | `int.Parse` 或 `TryParse`    |

**转换方法**

| **转换类型**       | **方法**                     | **示例**                          |
|--------------------|-----------------------------|----------------------------------|
| 隐式转换（整数→浮点） | 自动转换                   | `double d = 100;`               |
| 显式转换（浮点→整数） | `(int)` 强制转换           | `int i = (int)3.14;`            |
| 四舍五入           | `Convert.ToInt32`          | `Convert.ToInt32(3.6);` → `4`   |
| 安全转换           | `TryParse`                 | `int.TryParse("123", out num);` |
| 溢出检查           | `checked`                  | `checked { int x = a + b; }`    |


## 练习(数据类型转换20道)

**1. 隐式转换 `int` → `double`**
```csharp
int num = 100;
double result = num; // 隐式转换
Console.WriteLine(result);
```
**问题**：输出结果是什么？ 
---

**2. 隐式转换 `long` → `decimal`**
```csharp
long bigNum = 9_223_372_036_854_775_807;
decimal result = bigNum;
Console.WriteLine(result);
```
**问题**：能否编译？为什么？ 
---

**3. 隐式转换 `byte` → `float`**
```csharp
byte smallNum = 255;
float result = smallNum;
Console.WriteLine(result);
```
**问题**：输出结果是什么？ 
---

**4. 混合运算（`int` + `double`）**
```csharp
int a = 10;
double b = 3.5;
double result = a + b; // 哪个类型被隐式转换？
Console.WriteLine(result);
```
**问题**：`a` 会被转换为什么类型？ 
---

**5. 隐式转换 `short` → `double`**
```csharp
short num = 32_767;
double result = num;
Console.WriteLine(result);
```
**问题**：输出结果是什么？  
---
**6. 显式转换 `double` → `int`（截断）**
```csharp
double pi = 3.14159;
int intPi = (int)pi; // 显式转换
Console.WriteLine(intPi);
```
**问题**：输出结果是什么？  
---

**7. 显式转换 `float` → `int`（溢出风险）**
```csharp
float bigNum = 1.5e10f; // 15,000,000,000
int result = (int)bigNum;
Console.WriteLine(result);
```
**问题**：会发生什么？  
---

**8. 显式转换 `decimal` → `int`**
```csharp
decimal money = 123.99m;
int result = (int)money;
Console.WriteLine(result);
```
**问题**：输出结果是什么？  

---

**9. 显式转换 `double` → `byte`**
```csharp
double num = 300.75;
byte result = (byte)num;
Console.WriteLine(result);
```
**问题**：输出结果是什么？ 
---

**10. 显式转换 `float` → `long`**
```csharp
float num = 9.9f;
long result = (long)num;
Console.WriteLine(result);
```
**问题**：输出结果是什么？  
---

**11. `Convert.ToInt32`（四舍五入）**
```csharp
double num = 3.6;
int result = Convert.ToInt32(num);
Console.WriteLine(result);
```
**问题**：输出结果是什么？ 
---

**12. `Convert.ToInt32` 对负数的作用**
```csharp
double num = -2.4;
int result = Convert.ToInt32(num);
Console.WriteLine(result);
```
**问题**：输出结果是什么？  
---

**13. `Convert.ToInt64`（`double` → `long`）**
```csharp
double bigNum = 1.5e19;
long result = Convert.ToInt64(bigNum);
Console.WriteLine(result);
```
**问题**：能否正常运行？
---

**14. `Convert.ToDecimal`（`float` → `decimal`）**
```csharp
float num = 3.14f;
decimal result = Convert.ToDecimal(num);
Console.WriteLine(result);
```
**问题**：输出结果是什么？ 
---

**15. `Convert.ToByte`（`double` → `byte`）**
```csharp
double num = 255.9;
byte result = Convert.ToByte(num);
Console.WriteLine(result);
```
**问题**：输出结果是什么？  
---

**16. `int.Parse`（字符串 → `int`）**
```csharp
string input = "123";
int result = int.Parse(input);
Console.WriteLine(result);
```
**问题**：如果 `input = "abc"`，会发生什么？ 
---

**17. `double.TryParse`（安全转换）**
```csharp
string input = "3.14";
bool success = double.TryParse(input, out double result);
Console.WriteLine(success ? result : "转换失败");
```
**问题**：如果 `input = "3.14x"`，输出是什么？ 
---

**18. `decimal.Parse`（高精度转换）**
```csharp
string input = "99.99";
decimal result = decimal.Parse(input);
Console.WriteLine(result);
```
**问题**：如果 `input = "1e10"`，能否转换？ 
---

**19. `int.TryParse` 处理用户输入**
```csharp
Console.Write("请输入一个整数：");
string input = Console.ReadLine();
if (int.TryParse(input, out int num)) {
    Console.WriteLine($"你输入的是：{num}");
} else {
    Console.WriteLine("输入无效！");
}
```
**问题**：如果用户输入 `"12.3"`，输出是什么？ 
---

**20. `checked` 检查溢出**
```csharp
int a = int.MaxValue;
int b = 2;
checked {
    int result = a + b; // 会发生什么？
    Console.WriteLine(result);
}
```
**问题**：能否正常运行？
---

## 答案(数据类型转换20道)

**1. 问题**：输出结果是什么？  

✅ **答案**：`100.0`（`int` 自动转为 `double`）  

---

**2. 问题**：能否编译？为什么？  

✅ **答案**：可以，`long` 可以隐式转为 `decimal`。  

---

**3. 问题**：输出结果是什么？  

✅ **答案**：`255.0`（`byte` 可以隐式转为 `float`）  

---

**4.问题**：`a` 会被转换为什么类型？  

✅ **答案**：`a` 隐式转为 `double`，输出 `13.5`。  

---

**5. 问题**：输出结果是什么？  

✅ **答案**：`32767.0`（`short` 可以隐式转为 `double`）  

---
**6. 问题**：输出结果是什么？  

✅ **答案**：`3`（小数部分被丢弃）  

---

**7.问题**：会发生什么？  

✅ **答案**：溢出，结果不可预测（`int` 最大值约 2.1e9）。  

---

**8. 问题**：输出结果是什么？  

✅ **答案**：`123`（小数部分被截断）  

---

**9.问题**：输出结果是什么？  

✅ **答案**：`44`（300 - 256 = 44，溢出截断）  

---

**10. 问题**：输出结果是什么？  

✅ **答案**：`9`（小数部分被丢弃）  

---

**11. 问题**：输出结果是什么？  

✅ **答案**：`4`（四舍五入）  

---

**12. 问题**：输出结果是什么？  

✅ **答案**：`-2`（向零舍入）  

---

**13. 问题**：能否正常运行？  

✅ **答案**：如果超出 `long` 范围，抛出 `OverflowException`。  

---

**14. 问题**：输出结果是什么？  

✅ **答案**：`3.14`（精确转换）  

---

**15. 问题**：输出结果是什么？  

✅ **答案**：`255`（小数部分四舍五入，但不超过 `byte` 最大值）  

---

**16. 问题**：如果 `input = "abc"`，会发生什么？  

✅ **答案**：抛出 `FormatException`。  

---

**17. 问题**：如果 `input = "3.14x"`，输出是什么？  

✅ **答案**：`"转换失败"`（`TryParse` 不会抛异常）  

---

**18.问题**：如果 `input = "1e10"`，能否转换？  

✅ **答案**：不能，`decimal.Parse` 不支持科学计数法。  

---

**19. 问题**：如果用户输入 `"12.3"`，输出是什么？  

✅ **答案**：`"输入无效！"`（`int.TryParse` 不接受小数）  

---

**20. 问题**：能否正常运行？  

✅ **答案**：抛出 `OverflowException`（`checked` 检测到溢出）  

---