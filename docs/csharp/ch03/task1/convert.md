---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 Convert()方法 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 Convert()方法  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 13  # 侧边栏中排在第1位
---


## 开场

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

| 方法名称 / 语法        | 语法                                    | 安全性                       | 场景                                                        |
| ---------------------- | --------------------------------------- | ---------------------------- | ----------------------------------------------------------- |
| **强制类型转换运算符** | `(目标类型)变量`                        | ⚠️ 不安全（可能丢数据）       | 基本数据类型之间的转换(最常见、最基本)                      |
| **Convert 类方法**     | `Convert.ToInt32(), Convert.ToDouble()` | ⚠️ 有一定安全性，但可能抛异常 | 通用转换，支持多种类型                                      |
| **Parse 方法**         | `int.Parse("123")`                      | ❌ 不安全（格式不对就报错）   | 字符串 → 数字，但要求格式正确(简单但不够健壮)               |
| **TryParse 方法**      | `int.TryParse("123", out int num)`      | ✅ 安全                       | 用户输入、不确定的字符串,如将字符串转为数字，失败不会抛异常 |

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




## 一、数据类型转换运算符

数据类型转换运算符用于强制转换数据类型。

核心用途： 主要用于数值类型之间的转换，特别是缩小转换，或已知兼容的引用类型向下转换。

语法

```c#

(目标类型)表达式

```

- ( ) 是强制转换运算符

- 目标类型：运算符的参数，指定要转换到的类型

- (int) 表示"转换为int类型的操作"

- (double) 表示"转换为double类型的操作

- (string) 表示"转换为string类型的操作"

- 表达式：运算符的操作数，要被转换的值

特点：

- 编译时检查，运行时可能溢出

- 一元运算符：只需要一个操作数（在它右侧的值）

- 优先级较高：在表达式中优先于大多数算术运算符

- 右结合性：从右向左运算

用法概括

```c#

// 示例1：浮点数转整数（截断小数）

double price = 19.95;

int truncatedPrice = (int)price; // 结果为 19（直接丢弃小数部分）

// 示例2：大范围类型转小范围类型（可能溢出）

long bigNumber = 5000000000; // 50亿

int smallNumber = (int)bigNumber; // 结果为 705032704（溢出）

// 示例3：字符转整数（获取ASCII码）

char letter = 'A';

int asciiValue = (int)letter; // 结果为 65

// 示例4：枚举转整数

enum Status { Active = 1, Inactive = 0 }

int statusValue = (int)Status.Active; // 结果为 1

// 示例5：向下转换（需要类型兼容）

object obj = 42;

int numberFromObject = (int)obj; // 成功，因为obj实际是int

// 会失败的情况：

// string text = "123";

// int willFail = (int)text; // 编译错误：不能直接将string转换为int

```

### (int)表达式

用途：用于强制把目标类型转换为整型

(int)整数｜实数｜字符｜枚举｜object

```c#

//场景1：大转小(截断小数 精度丢失)

double d = 5.7;

int i = (int)d; //5

//场景2：大转小(数据溢出)

uint large = 4000000000;

int signed = (int)large; // -294967296 (溢出)

//场景3：字符串转整型（编译时类型检测）

string text = "123";

int number = (int)text; // 编译错误：不能直接将string转换为int

//场景4：字符转整型（获取ASCII码）

char letter = 'A';

int ascii = (int)letter; // 65

// 场景5：枚举转整数

enum Status { Active = 1, Inactive = 0 }

int statusValue = (int)Status.Active; //1

//场景6：引用类型(拆箱)

object obj = 42;

int number = (int)obj; // 42

```

### (char)表达式

用途：用于强制把目标类型(主要是数值类型)转换为字符型

```csharp

int code1 = 65;

char letter1 = (char)code1; // 'A'

int code2 = 97;

char letter2 = (char)code2; // 'a'

//超出char范围的转换

int largeNumber = 100000;

char largeChar = (char)largeNumber; // 会截断，可能得到意外字符

// 整数转字符（ASCII码）

int asciiCode = 65;

char letter = (char)asciiCode; // 'A'

Console.WriteLine($"{asciiCode} -> '{letter}'");

// 另一个示例

int code = 97;

char lowercaseA = (char)code; // 'a'

Console.WriteLine($"{code} -> '{lowercaseA}'");

// 浮点数转字符（先截断为整数）

double pi = 3.14;

char charFromDouble = (char)pi; // ASCII 3 → 不可见字符

Console.WriteLine($"π {pi} -> 字符代码: {(int)charFromDouble}");

// 注意：超出char范围的转换

int largeNumber = 100000;

char largeChar = (char)largeNumber; // 会截断，可能得到意外字符

Console.WriteLine($"{largeNumber} -> '{(int)largeChar}'");

```

### (string)表达式(特殊)

用途：用于强制把目标类型转换为字符串型

注意：（string)实际上不能用于大多数类型到字符串的转换！这是一个常见的误解。

```c#

object obj = "hello";

string str = (string)obj;

Console.WriteLine(str);//"hello"

// 这是错误的用法（会编译错误）：

// int number = 42;

// string text = (string)number; // 编译错误！

// 正确的字符串转换应该使用：

int number = 42;

string text1 = number.ToString(); // "42"

string text2 = Convert.ToString(123); // "123"

string text3 = $"{456}"; // "456"

// (string)只能用于原本就是string类型或继承关系的对象

object obj = "Hello";

string str = (string)obj; // 正确，因为obj实际是string

// 或者用于自定义的显式转换运算符

```

### (double)表达式

用途：用于强制把目标类型转换为字符串型

```c#

// decimal → double（可能精度丢失）

decimal preciseValue = 123.4567890123456789m;

double approxValue = (double)preciseValue;

Console.WriteLine($"decimal: {preciseValue} -> double: {approxValue}");

// float → double（安全，但显式）

float floatValue = 3.14f;

double doubleValue = (double)floatValue; // 实际上可以隐式，但显式更明确

Console.WriteLine($"float: {floatValue} -> double: {doubleValue}");

// int → double（可以隐式，但显式也可用）

int wholeNumber = 42;

double asDouble = (double)wholeNumber; // 42.0

Console.WriteLine($"int: {wholeNumber} -> double: {asDouble}");

// 注意：从大范围到小范围

double bigDouble = 1.7E+308;

// float smallFloat = (float)bigDouble; // 可能溢出或精度严重丢失

```

### (float)表达式

用途：用于强制把目标类型转换为字符串型

```c#

double d = 3.14;

float f = (float)d;

Console.WriteLine(f.GetType()); // System.Single

double precise = 3.14159265358979;

float approximate = (float)precise; // 精度丢失

decimal money = 999.99m;

float moneyFloat = (float)money; // 999.99f

```

### (decimal)表达式

用途：用于强制把目标类型转换为decimal型

```c#

double d = 3.14;

decimal m = (decimal)d;

Console.WriteLine(m.GetType()); // System.Single

double d = 123.456;

decimal preciseDecimal = (decimal)d; // 123.456m

float f = 78.9f;

decimal fromFloat = (decimal)f; // 78.9m

```

### (long)表达式

用途：用于强制把目标类型转换为long型

```c#

double d = 3.14;

long l = (long)d;

Console.WriteLine(l.GetType()); // System.Single

ulong bigUnsigned = 18446744073709551615; // ulong.MaxValue

long signedLong = (long)bigUnsigned; // -1（溢出）

Console.WriteLine($"ulong: {bigUnsigned} -> long: {signedLong}");

double withFraction = 987654321.99;

long wholePart = (long)withFraction; // 987654321（截断）

```

### (byte)表达式

用途：用于强制把目标类型转换为字节整型

```c#

double d = 3.14;

byte b = (byte)d;

Console.WriteLine(b.GetType()); // System.Single

int largeNumber = 300;

byte smallByte = (byte)largeNumber; // 300 % 256 = 44

short mediumNumber = 128;

byte byteValue = (byte)mediumNumber; // 128

```

---

## 二、Parse方法

### int.Parse()

核心用途： 专门用于字符串到数值的转换，要求输入必须是严格格式化的数字字符串。

特点

- 仅用于字符串，严格格式

用法概括

```c#

Console.WriteLine();

Console.WriteLine((int)3.14);//3

Console.WriteLine(int.Parse("3"));//3

Console.WriteLine(int.Parse("-3"));//-3

// Console.WriteLine(int.Parse("3.14"));//Unhandled exception

// Console.WriteLine(.Parse("3.14"));//Unhandled exception

// 示例1：标准数字字符串

string validNumber = "123";

int parsedNumber = int.Parse(validNumber); // 成功：123

// 示例2：带空格的字符串（会自动处理前后空格）

string spacedNumber = " 456 ";

int parsedSpaced = int.Parse(spacedNumber); // 成功：456

// 示例3：会抛出异常的情况

try

{

string nullString = null;

int result1 = int.Parse(nullString); // ArgumentNullException



string invalidString = "123abc";

int result2 = int.Parse(invalidString); // FormatException



string tooBig = "9999999999";

int result3 = int.Parse(tooBig); // OverflowException

}

catch (Exception ex)

{

Console.WriteLine($"Parse失败: {ex.GetType().Name}");

}

```

---

## 三、Convert方法

特点

- 运行时检查，处理null值

### Convert.ToInt32() 方法

核心用途： 最通用的转换方法，可以处理多种输入类型，对null有默认处理。

用法概括

```c#

// 示例1：处理字符串（类似Parse）

string numberStr = "789";

int convertedNumber = Convert.ToInt32(numberStr); // 成功：789

// 示例2：处理null值（返回0）

string nullString = null;

int fromNull = Convert.ToInt32(nullString); // 结果为 0

// 示例3：处理其他基础类型

double d = 88.7;

int fromDouble = Convert.ToInt32(d); // 结果为 89（四舍五入）

bool flag = true;

int fromBool = Convert.ToInt32(flag); // 结果为 1

// 示例4：处理DBNull（数据库场景）

object dbNull = DBNull.Value;

int fromDbNull = Convert.ToInt32(dbNull); // 结果为 0

// 示例5：仍然会抛出异常的情况

try

{

string invalid = "abc123";

int result1 = Convert.ToInt32(invalid); // FormatException



decimal hugeValue = decimal.MaxValue;

int result2 = Convert.ToInt32(hugeValue); // OverflowException

}

catch (Exception ex)

{

Console.WriteLine($"Convert失败: {ex.GetType().Name}");

}

```

---

## 重要注意事项





*(string)不能用于数值转字符串** - 使.ToString()Convert.ToString()



转换可能丢失数据 - 特别是大范围到小范围的转换



引用类型转换可能失败 - 使as运算符进行安全转换



自定义转换需要显式定义 - 通explicit operator关键字



考虑使用TryParse模式 - 对于可能失败的转换更安全

