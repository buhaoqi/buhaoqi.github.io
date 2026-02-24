---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务五 Convert 类   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务五 Convert 类   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  5  # 侧边栏中排在第1位
---

## 前置说明
`Convert`是C#中用于**类型安全转换**的静态类（位于`System`命名空间），所有方法均为静态方法，调用格式为`Convert.方法名(参数)`；
- 核心优势：相比强制类型转换，`Convert`类对不同类型的兼容性更强，且会做基础的合法性校验；
- 所有示例需先引入`using System;`。

---

## 1. Convert.ToBoolean
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为布尔值（`bool`类型，`true`/`false`）                   |
| **语法**   | `Convert.ToBoolean(待转换值)`                                        |
| **参数**   | 支持的输入类型：数值型（int/double等）、字符串、对象等       |
| **注意事项** | **⚠️ 重要修正**：<br />1. 数值型转换规则：0→`false`，非0→`true`；<br />2. 字符串转换规则：<br />   - "True"/"true"/"false"/"False"→对应布尔值（不区分大小写）；<br />   - 其他字符串抛`FormatException`；<br />3. `null`值转换返回`false`（**注意：不是抛异常**）；<br />4. ❌ **不支持从`char`类型直接转换**，`Convert.ToBoolean(char)`方法不存在，调用会引发编译错误。 |

### 用法示例（ToBoolean）
```csharp
// 示例1：数值型转换
int num0 = 0;
int num1 = 10;
Console.WriteLine(Convert.ToBoolean(num0)); // 输出：False
Console.WriteLine(Convert.ToBoolean(num1)); // 输出：True

// 示例2：字符串转换
string strTrue = "True";
string strFalse = "false";
Console.WriteLine(Convert.ToBoolean(strTrue));  // 输出：True
Console.WriteLine(Convert.ToBoolean(strFalse)); // 输出：False

// 示例3：null转换
object nullObj = null;
Console.WriteLine(Convert.ToBoolean(nullObj)); // 输出：False（返回默认值，而非异常）

// 错误示例（编译错误）
// char ch = 'a';
// Console.WriteLine(Convert.ToBoolean(ch)); // ❌ 编译错误：无法从char转换
// string errStr = "123";
// Console.WriteLine(Convert.ToBoolean(errStr)); // 运行时抛FormatException
```

---

## 2. Convert.ToChar
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为单个字符（`char`类型）                                 |
| **语法**   | `Convert.ToChar(待转换值)`                                          |
| **参数**   | 支持的输入类型：int（ASCII码/Unicode码）、string（单字符字符串）、byte、对象等 |
| **注意事项** | **⚠️ 重要修正**：<br />1. int类型：转换为对应Unicode码点的字符（如65→'A'），需在0~65535范围内，否则抛`OverflowException`；<br />2. string类型：必须是**单字符字符串**（如"A"），空字符串或长度>1抛`FormatException`；<br />3. ❌ **不支持从`bool`类型直接转换**，`Convert.ToChar(bool)`方法不存在；<br />4. `null`值转换抛`ArgumentNullException`。 |

### 用法示例（ToChar）
```csharp
// 示例1：int（Unicode码点）转换
int unicodeA = 65;
int unicode0 = 48;
Console.WriteLine(Convert.ToChar(unicodeA)); // 输出：A
Console.WriteLine(Convert.ToChar(unicode0)); // 输出：0

// 示例2：单字符字符串转换
string singleChar = "B";
Console.WriteLine(Convert.ToChar(singleChar)); // 输出：B

// 示例3：byte类型转换
byte b = 65;
Console.WriteLine(Convert.ToChar(b)); // 输出：A

// 错误示例
// bool bVal = true;
// Console.WriteLine(Convert.ToChar(bVal)); // ❌ 编译错误：无法从bool转换
// string multiChar = "AB";
// Console.WriteLine(Convert.ToChar(multiChar)); // 运行时抛FormatException
// int outRange = 70000;
// Console.WriteLine(Convert.ToChar(outRange)); // 运行时抛OverflowException
```

---

## 3. Convert.ToDateTime
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为`DateTime`类型（日期时间）                             |
| **语法**   | `Convert.ToDateTime(待转换值)`                                      |
| **参数**   | 支持的输入类型：string（日期字符串）、对象等       |
| **注意事项** | **⚠️ 重要修正**：<br />1. 字符串转换：需符合可识别的日期格式（如"2026-02-24"、"2026/2/24 15:30"），格式不合法抛`FormatException`；<br />2. 空字符串（""）转换抛`FormatException`；<br />3. `null`值转换返回`DateTime.MinValue`（**注意：不是抛异常**）；<br />4. ❌ **不支持从数值类型（如long）直接转换**，`Convert.ToDateTime(long)`方法不存在；<br />5. 推荐结合`DateTime.TryParse`使用（避免异常），`Convert.ToDateTime`更适合确定格式合法的场景。 |

### 用法示例（ToDateTime）
```csharp
// 示例1：标准格式字符串转换
string dateStr1 = "2026-02-24";
string dateStr2 = "2026/2/24 15:30:25";
Console.WriteLine(Convert.ToDateTime(dateStr1)); // 输出：2026/2/24 00:00:00
Console.WriteLine(Convert.ToDateTime(dateStr2)); // 输出：2026/2/24 15:30:25

// 示例2：null转换
object nullObj = null;
Console.WriteLine(Convert.ToDateTime(nullObj)); // 输出：0001/1/1 00:00:00 (DateTime.MinValue)

// 错误示例
// long ticks = DateTime.Now.Ticks;
// Console.WriteLine(Convert.ToDateTime(ticks)); // ❌ 编译错误：无法从long转换
// string errDate = "2026-13-01";
// Console.WriteLine(Convert.ToDateTime(errDate)); // 运行时抛FormatException
```

---

## 4. Convert.ToDecimal
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为十进制小数（`decimal`类型，高精度，适合财务计算）       |
| **语法**   | `Convert.ToDecimal(待转换值)`                                        |
| **参数**   | 支持的输入类型：int、double、string、float、对象等                   |
| **注意事项** | 1. 数值型转换：直接转换，double/float的精度损失会被保留；<br />2. 字符串转换：需符合数字格式（如"123.45"、"-67.89"），非数字字符串抛`FormatException`；<br />3. bool类型：true→1m，false→0m；<br />4. 超出decimal范围（±7.9×10²⁸）抛`OverflowException`；<br />5. `null`值转换返回`0m`（**注意：不是抛异常**）。 |

### 用法示例（ToDecimal）
```csharp
// 示例1：数值型转换
int intNum = 123;
double doubleNum = 45.6789;
Console.WriteLine(Convert.ToDecimal(intNum));    // 输出：123
Console.WriteLine(Convert.ToDecimal(doubleNum)); // 输出：45.6789

// 示例2：字符串转换
string decStr = "987.65";
Console.WriteLine(Convert.ToDecimal(decStr)); // 输出：987.65

// 示例3：bool类型转换
bool b = true;
Console.WriteLine(Convert.ToDecimal(b)); // 输出：1

// 示例4：null转换
object nullObj = null;
Console.WriteLine(Convert.ToDecimal(nullObj)); // 输出：0

// 错误示例
// string nonNumStr = "123a";
// Console.WriteLine(Convert.ToDecimal(nonNumStr)); // 抛FormatException
```

---

## 5. Convert.ToDouble
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为双精度浮点型（`double`类型）                           |
| **语法**   | `Convert.ToDouble(待转换值)`                                         |
| **参数**   | 支持的输入类型：int、decimal、string、float、对象等                   |
| **注意事项** | 1. 数值型转换：decimal转换为double可能损失精度；<br />2. 字符串转换：需符合数字格式（如"123.45"、"1e3"），非数字字符串抛`FormatException`；<br />3. bool类型：true→1.0，false→0.0；<br />4. `null`值转换返回`0.0`（**注意：不是抛异常**）；<br />5. 超出double范围返回`double.PositiveInfinity`/`double.NegativeInfinity`。 |

### 用法示例（ToDouble）
```csharp
// 示例1：数值型转换
decimal decNum = 123.456m;
float floatNum = 78.9f;
Console.WriteLine(Convert.ToDouble(decNum));  // 输出：123.456
Console.WriteLine(Convert.ToDouble(floatNum)); // 输出：78.9000015258789

// 示例2：字符串转换
string doubleStr = "1234.5678";
string sciStr = "1e3";
Console.WriteLine(Convert.ToDouble(doubleStr)); // 输出：1234.5678
Console.WriteLine(Convert.ToDouble(sciStr));    // 输出：1000

// 示例3：bool类型转换
bool b = false;
Console.WriteLine(Convert.ToDouble(b)); // 输出：0

// 示例4：null转换
object nullObj = null;
Console.WriteLine(Convert.ToDouble(nullObj)); // 输出：0
```

---

## 6. Convert.ToSingle
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为单精度浮点型（`float`类型，也写作`Single`）             |
| **语法**   | `Convert.ToSingle(待转换值)`                                         |
| **参数**   | 支持的输入类型：int、double、string、decimal、对象等                 |
| **注意事项** | 1. `ToSingle`是`float`类型的转换方法（C#中无`ToFloat`方法）；<br />2. 数值型转换：double/decimal转换为float会损失精度；<br />3. 字符串转换：需符合数字格式，非数字字符串抛`FormatException`；<br />4. bool类型：true→1.0f，false→0.0f；<br />5. `null`值转换返回`0.0f`（**注意：不是抛异常**）；<br />6. 超出float范围返回`float.PositiveInfinity`/`float.NegativeInfinity`。 |

### 用法示例（ToSingle）
```csharp
// 示例1：数值型转换
double doubleNum = 123.456789;
decimal decNum = 987.654m;
Console.WriteLine(Convert.ToSingle(doubleNum)); // 输出：123.456787
Console.WriteLine(Convert.ToSingle(decNum));   // 输出：987.654

// 示例2：字符串转换
string floatStr = "45.678";
Console.WriteLine(Convert.ToSingle(floatStr)); // 输出：45.678

// 示例3：bool类型转换
bool b = true;
Console.WriteLine(Convert.ToSingle(b)); // 输出：1

// 示例4：null转换
object nullObj = null;
Console.WriteLine(Convert.ToSingle(nullObj)); // 输出：0
```

---

## 7. Convert.ToString
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定值转换为字符串（`string`类型），是最常用的转换方法之一         |
| **语法**   | 1. `Convert.ToString(待转换值)`；<br />2. `Convert.ToString(待转换值, int toBase)`（数值转指定进制字符串） |
| **参数**   | - 待转换值：支持所有基本类型（bool、int、DateTime、char等）；<br />- toBase：进制数（2~36），仅对数值型有效 |
| **注意事项** | **⚠️ 重要修正**：<br />1. `null`值转换返回`null`（**注意：不是空字符串**），与其他Convert方法行为一致；<br />2. bool类型：返回"True"/"False"（首字母大写）；<br />3. DateTime类型：返回系统默认格式的日期字符串；<br />4. 数值转进制：toBase超出2~36范围抛`ArgumentOutOfRangeException`；<br />5. 相比直接调用`ToString()`方法，`Convert.ToString`对`null`的处理方式相同（都会返回`null`），但`Convert.ToString`是静态方法，不会引发`NullReferenceException`。 |

### 用法示例（ToString）
```csharp
// 示例1：基础类型转换
int intNum = 123;
bool b = false;
DateTime dt = new DateTime(2026, 2, 24);
char ch = 'A';
object nullObj = null;

Console.WriteLine(Convert.ToString(intNum)); // 输出：123
Console.WriteLine(Convert.ToString(b));      // 输出：False
Console.WriteLine(Convert.ToString(dt));     // 输出：2026/2/24 00:00:00
Console.WriteLine(Convert.ToString(ch));     // 输出：A
Console.WriteLine(Convert.ToString(nullObj) == null); // 输出：True（返回null）

// 示例2：数值转指定进制字符串
int num = 10;
Console.WriteLine(Convert.ToString(num, 2));  // 二进制：1010
Console.WriteLine(Convert.ToString(num, 8));  // 八进制：12
Console.WriteLine(Convert.ToString(num, 16)); // 十六进制：a

// 示例3：对比ToString()和Convert.ToString（安全调用）
string nullStr = null;
// Console.WriteLine(nullStr.ToString()); // 抛NullReferenceException
Console.WriteLine(Convert.ToString(nullStr)); // 输出空行（实际是null，Console.WriteLine处理null时空行）
```

---

## 总结（核心关键点）

| 转换方法 | null处理 | 主要异常 | 不支持的类型 |
|---------|----------|----------|------------|
| **ToBoolean** | 返回`false` | FormatException（字符串格式错误） | char |
| **ToChar** | 抛ArgumentNullException | FormatException（字符串长度≠1）、OverflowException（int超出范围） | bool |
| **ToDateTime** | 返回`DateTime.MinValue` | FormatException（日期格式错误） | 数值类型（int/long等） |
| **ToDecimal** | 返回`0m` | FormatException、OverflowException | - |
| **ToDouble** | 返回`0.0` | FormatException、OverflowException | - |
| **ToSingle** | 返回`0.0f` | FormatException、OverflowException | - |
| **ToString** | 返回`null` | ArgumentOutOfRangeException（进制参数错误） | - |

### 重要补充
1. **静态调用**：`Convert`是静态类，所有方法需通过`Convert.方法名()`调用，无需实例化；
2. **null处理差异**：除`ToChar`外，多数方法对`null`返回对应类型的默认值，而非抛异常；
3. **异常风险**：字符串转换时，格式不合法会抛`FormatException`，数值超出范围抛`OverflowException`；
4. **场景适配**：
   - 财务/高精度计算用`ToDecimal`；
   - 普通浮点计算用`ToDouble`/`ToSingle`；
   - 日期转换优先用`DateTime.TryParse`（容错），确定格式合法时用`ToDateTime`；
   - `Convert.ToString`是静态方法，调用时即使参数为`null`也不会引发`NullReferenceException`。