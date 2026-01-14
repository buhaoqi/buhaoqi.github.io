---
noteId: "ece62cd0efa711f0b30487fa81af44a5"
tags: []

---


## 括号强转

一、语法

```c#
(类型标识符)表达式
```

- 类型标识符：就是转换的目标类型
- 表达式：可以是变量表达式、常量表达式

```c#
//变量表达式
int num1 = 100;
double d1 = (double)num1;

//常量表达式
double d2 = (double)100;
//常见转换：浮点数转整数
double d3 = 123.456;
int num2 = (int)d3; // 123
//常见转换：双精度 转 单精度
float f1 = (float)d3; //123.456f;
//常见转换: 字符转换  字符 > 整数
char c = 'A';
int num3 = (int)c; 
//常见转换：整数 > 字符
int num4 = 66;
char c2 = (char)num4;
//不允许字符串转换
string str1 = (string)123; // 报错
int num1 = (int)"123"; // 报错

if(1){
  
}
```

总结：扩号强转总是发生在数值之间。





| 方法 | 语法 | 适用场景 | 转换失败时 | 性能 | 备注 |
|------|------|----------|------------|------|------|
| **括号强转** | `(目标类型)变量` | 已知安全，数值类型间 | 抛出异常 | 最快 | 编译时检查 |
| **Parse()** | `目标类型.Parse("字符串")` | 字符串→数值 | 抛出异常 | 中等 | 必须有效字符串 |
| **Convert()** | `Convert.To目标类型(变量)` | 通用转换，类型多 | 抛出异常 | 较慢 | 功能最全 |

## 二、详细对比与实例

### **1. 括号强转 (Cast)**
```csharp
// 基本语法
目标类型 变量 = (目标类型)源变量;

// 示例
int intValue = 100;
double doubleValue = (double)intValue;  // 100.0

// 常见转换
double d = 123.45;
int i = (int)d;           // 123（截断小数）
float f = (float)d;       // 123.45f

// 字符转换
char c = 'A';
int ascii = (int)c;       // 65

// 枚举转换
enum Color { Red = 1, Green = 2 }
Color color = (Color)2;   // Green
```

#### **特点与限制**
```csharp
// ✅ 允许的转换
// 数值类型之间的转换
// 引用类型的向下转型（有继承关系）
// 枚举与数值之间的转换

// ❌ 不允许的转换
// string stringValue = (string)123;       // 编译错误！
// int num = (int)"123";                  // 编译错误！

// ⚠️ 可能丢失精度
double bigNumber = 999999999999.99;
int smallInt = (int)bigNumber;  // 溢出或截断
```

#### **转换失败示例**
```csharp
// 1. 溢出
int maxInt = int.MaxValue;
long bigLong = (long)maxInt + 1000;
// int backToInt = (int)bigLong;  // OverflowException

// 2. 无效引用类型转换
object obj = "hello";
// int num = (int)obj;  // InvalidCastException

// 3. 使用checked控制溢出检查
checked
{
    int a = 1000000;
    int b = 1000000;
    // int c = (int)(a * b);  // 抛出OverflowException
}
```


### **第一阶段：导入新课（10分钟）**

#### **情景导入**
```csharp
// 情景：小明想计算商品折扣价格
double originalPrice = 99.99;  // 原价
double discount = 0.2;         // 8折
double finalPrice = originalPrice * (1 - discount);

// 问题：收银系统需要整数分币值
// 尝试1：直接赋值（失败）
// int cents = finalPrice * 100;  // ❌ 编译错误

// 尝试2：括号强转（成功）
int cents = (int)(finalPrice * 100);  // ✅ 7999（79.99元）
Console.WriteLine($"应付金额：{cents}分");
```

#### **新课引入**
1. **提问**：为什么第一种方法会失败？
2. **引导**：double→int存在数据丢失风险，需要明确确认
3. **引出**：括号强转就是明确告诉编译器"我知道风险，请转换"

### **第二阶段：新课讲解（40分钟）**

#### **1. 括号强转基本概念**

```csharp
// 基本语法：在变量前加上(目标类型)
目标类型 变量名 = (目标类型)源变量;

// 示例
double d = 123.456;
int i = (int)d;  // 123
```

**特点**：
- 需要程序员明确写出目标类型
- 编译器不进行安全性检查
- 转换失败时抛出异常
- 性能最优的转换方式

#### **2. 数值类型间转换（核心）**

```csharp
// 案例1：浮点数→整数（丢失小数部分）
double price = 19.99;
int intPrice = (int)price;  // 19（直接截断，不是四舍五入）
Console.WriteLine($"截断后的价格：{intPrice}");

// 案例2：大整数→小整数（可能溢出）
long bigNumber = 3000000000L;  // 30亿
// int smallNumber = (int)bigNumber;  // 溢出：-1294967296
// Console.WriteLine($"溢出结果：{smallNumber}");  // 错误的结果

// 安全做法：先检查范围
if (bigNumber >= int.MinValue && bigNumber <= int.MaxValue)
{
    int safeNumber = (int)bigNumber;
    Console.WriteLine($"安全转换：{safeNumber}");
}
else
{
    Console.WriteLine($"数值{bigNumber}超出int范围");
}
```

**交互练习**：让学生编写代码，将double类型的圆周率π(3.1415926)转换为int，观察结果。

#### **3. 字符类型转换**

```csharp
// 案例3：char与数值互转
char letter = 'A';
int asciiCode = (int)letter;  // 65
Console.WriteLine($"'{letter}'的ASCII码：{asciiCode}");

// 数值转字符
int code = 66;
char character = (char)code;  // 'B'
Console.WriteLine($"ASCII码{code}对应的字符：{character}");

// 特殊：数字字符转数值
char digitChar = '7';
int digitValue = digitChar - '0';  // 7（常用技巧）
// 对比错误方法：int wrong = (int)digitChar;  // 55（ASCII码）
```

#### **4. 枚举类型转换**

```csharp
// 案例4：枚举与数值互转
enum UserLevel { Guest = 0, User = 1, VIP = 2, Admin = 9 }

// 数值→枚举
int levelValue = 2;
UserLevel level = (UserLevel)levelValue;  // VIP
Console.WriteLine($"数值{levelValue}对应的等级：{level}");

// 枚举→数值
int valueFromEnum = (int)UserLevel.Admin;  // 9
Console.WriteLine($"Admin等级对应的数值：{valueFromEnum}");

// 注意：可能得到无效枚举值
UserLevel invalid = (UserLevel)99;  // 编译通过，但运行时可能有问题
Console.WriteLine($"无效枚举值：{invalid}");  // 显示99
```

#### **5. 引用类型向下转型**

```csharp
// 案例5：父类转子类（需要显式转换）
class Animal { }
class Dog : Animal { public void Bark() => Console.WriteLine("汪汪！"); }

Animal animal = new Dog();  // 向上转型（隐式）

// 向下转型（需要显式确认）
if (animal is Dog)
{
    Dog dog = (Dog)animal;  // 安全的下转型
    dog.Bark();
}

// 对比：as运算符（更安全）
Dog safeDog = animal as Dog;  // 失败返回null，不抛异常
if (safeDog != null)
{
    safeDog.Bark();
}
```

### **第三阶段：括号强转的"能"与"不能"（20分钟）**

#### **能转什么？✅**

```csharp
// 1. 数值类型间转换（有损）
double → int, float → int, long → int 等

// 2. 枚举与数值互转
int → enum, enum → int

// 3. 引用类型向下转型
基类 → 派生类

// 4. 接口实现类转换
interface IWorker { }
class Employee : IWorker { }
IWorker worker = new Employee();
Employee emp = (Employee)worker;

// 5. 可空类型与非可空类型
int? nullableInt = 100;
int normalInt = (int)nullableInt;  // 需要.Value或强制转换
```

#### **不能转什么？❌**

```csharp
// 1. 字符串→数值 ❌
// int number = (int)"123";  // 编译错误
// 正确：int.Parse() 或 Convert.ToInt32()

// 2. 无关类型间转换 ❌
// DateTime date = (DateTime)100;  // 编译错误

// 3. 值类型与引用类型（除装箱拆箱）❌
// string str = (string)123;  // 编译错误

// 4. 数组类型（除非元素类型可转换）❌
// int[] intArray = {1, 2, 3};
// double[] doubleArray = (double[])intArray;  // 编译错误

// 5. 委托类型（除非兼容）❌
```

#### **特殊情况说明**

```csharp
// 装箱和拆箱（特殊转换）
int value = 100;
object boxed = value;          // 装箱（隐式）
int unboxed = (int)boxed;      // 拆箱（显式）

// ❌ 错误的拆箱
// string str = "hello";
// int wrong = (int)str;  // InvalidCastException

// 自定义转换运算符
class Money
{
    public decimal Amount { get; set; }
    
    // 定义显式转换运算符
    public static explicit operator int(Money money)
    {
        return (int)money.Amount;
    }
}

Money cash = new Money { Amount = 99.99m };
int cashInt = (int)cash;  // 使用自定义转换
```

### **第四阶段：实战练习与错误处理（15分钟）**

#### **练习1：温度转换中的精度处理**
```csharp
// 要求：将华氏度转换为摄氏度，并保留整数
double fahrenheit = 98.6;  // 人体正常体温
int celsius = (int)((fahrenheit - 32) * 5 / 9);
Console.WriteLine($"{fahrenheit}°F = {celsius}°C");  // 37°C

// 问题：丢失了小数部分
// 改进：使用四舍五入
int roundedCelsius = (int)Math.Round((fahrenheit - 32) * 5 / 9);
Console.WriteLine($"四舍五入后：{roundedCelsius}°C");
```

#### **练习2：安全的数据转换工具**
```csharp
class SafeConverter
{
    public static int? TryConvertToInt(object value)
    {
        if (value == null) return null;
        
        try
        {
            // 尝试各种可能的转换
            return value switch
            {
                int i => i,
                long l when l >= int.MinValue && l <= int.MaxValue => (int)l,
                double d when d >= int.MinValue && d <= int.MaxValue => (int)d,
                decimal m when m >= int.MinValue && m <= int.MaxValue => (int)m,
                string s when int.TryParse(s, out int result) => result,
                _ => null  // 其他类型不支持
            };
        }
        catch
        {
            return null;  // 转换失败返回null
        }
    }
}

// 测试
Console.WriteLine(SafeConverter.TryConvertToInt(123.45));    // 123
Console.WriteLine(SafeConverter.TryConvertToInt("999"));     // 999
Console.WriteLine(SafeConverter.TryConvertToInt("abc"));     // null
```

#### **常见错误处理**
```csharp
// 错误1：未检查的溢出
byte counter = 255;
// counter = (byte)(counter + 1);  // 变成0，逻辑错误！

// 解决方案：使用checked
checked
{
    byte b = 255;
    // b = (byte)(b + 1);  // 抛出OverflowException
}

// 错误2：混淆除法的类型转换
int a = 5, b = 2;
double wrong = (double)(a / b);   // 2.0（先整数除法，再转换）
double correct = (double)a / b;   // 2.5（先转换，再浮点除法）

// 错误3：多次转换的优先级
double x = 10.5;
int result = (int)x + 0.5;      // 10.5（(int)x先执行，得到10，然后10+0.5）
int correctResult = (int)(x + 0.5);  // 11（先加后转换）
```

### **第五阶段：总结与拓展（5分钟）**

#### **知识总结**
1. **括号强转本质**：程序员对编译器说"我知道风险，请执行"
2. **适用场景**：数值类型转换、枚举转换、向下转型
3. **注意事项**：可能丢失数据、可能溢出、需要类型兼容
4. **最佳实践**：先检查再转换、使用checked控制溢出、优先考虑安全转换方法

#### **与其他转换方法对比**
| 方法 | 括号强转 | Convert类 | Parse方法 | as运算符 |
|------|----------|-----------|-----------|----------|
| **语法** | `(T)value` | `Convert.ToT()` | `T.Parse()` | `value as T` |
| **失败时** | 异常 | 异常 | 异常 | 返回null |
| **性能** | 最快 | 中等 | 中等 | 快 |
| **适用** | 类型兼容转换 | 通用转换 | 字符串转换 | 引用类型安全转换 |

#### **课后作业**
1. 编写一个货币转换器，在不同货币间转换时正确处理小数精度
2. 实现一个安全的数据读取工具，从各种来源读取数据并转换为目标类型
3. 研究自定义转换运算符，为自定义类型实现类型转换

#### **拓展思考**
1. 在泛型编程中如何处理类型转换？
2. 如何为现有类型添加扩展转换方法？
3. 在哪些情况下应该避免使用括号强转？

## 五、教学评估

### **课堂练习**
```csharp
// 题目：计算学生平均分（正确处理各种数据类型）
// 输入：5个学生的分数（可能是int, double, string）
// 要求：计算平均分并四舍五入到整数
object[] scores = { 85, 90.5, "88", 92.0, "76.5" };

// 学生需要：
// 1. 将各种类型统一转换为double
// 2. 计算平均值
// 3. 四舍五入为整数
// 4. 处理可能的转换失败
```


## 一、三种方法概览

| 方法 | 语法 | 适用场景 | 转换失败时 | 性能 | 备注 |
|------|------|----------|------------|------|------|
| **括号强转** | `(目标类型)变量` | 已知安全，数值类型间 | 抛出异常 | 最快 | 编译时检查 |
| **Parse()** | `目标类型.Parse("字符串")` | 字符串→数值 | 抛出异常 | 中等 | 必须有效字符串 |
| **Convert()** | `Convert.To目标类型(变量)` | 通用转换，类型多 | 抛出异常 | 较慢 | 功能最全 |

## 二、详细对比与实例

### **1. 括号强转 (Cast)**
```csharp
// 基本语法
目标类型 变量 = (目标类型)源变量;

// 示例
int intValue = 100;
double doubleValue = (double)intValue;  // 100.0

// 常见转换
double d = 123.45;
int i = (int)d;           // 123（截断小数）
float f = (float)d;       // 123.45f

// 字符转换
char c = 'A';
int ascii = (int)c;       // 65

// 枚举转换
enum Color { Red = 1, Green = 2 }
Color color = (Color)2;   // Green
```

#### **特点与限制**
```csharp
// ✅ 允许的转换
// 数值类型之间的转换
// 引用类型的向下转型（有继承关系）
// 枚举与数值之间的转换

// ❌ 不允许的转换
// string stringValue = (string)123;       // 编译错误！
// int num = (int)"123";                  // 编译错误！

// ⚠️ 可能丢失精度
double bigNumber = 999999999999.99;
int smallInt = (int)bigNumber;  // 溢出或截断
```

#### **转换失败示例**
```csharp
// 1. 溢出
int maxInt = int.MaxValue;
long bigLong = (long)maxInt + 1000;
// int backToInt = (int)bigLong;  // OverflowException

// 2. 无效引用类型转换
object obj = "hello";
// int num = (int)obj;  // InvalidCastException

// 3. 使用checked控制溢出检查
checked
{
    int a = 1000000;
    int b = 1000000;
    // int c = (int)(a * b);  // 抛出OverflowException
}
```

### **2. Parse() 方法**
```csharp
// 基本语法
目标类型 变量 = 目标类型.Parse(字符串);

// 数值转换
int i = int.Parse("123");         // 123
double d = double.Parse("123.45"); // 123.45
bool b = bool.Parse("true");      // true
DateTime dt = DateTime.Parse("2024-01-01");

// 带格式转换
decimal money = decimal.Parse("¥1,234.56", 
    System.Globalization.NumberStyles.Currency);

// 使用不同区域性
double euNumber = double.Parse("123,45", 
    System.Globalization.CultureInfo.GetCultureInfo("fr-FR"));
```

#### **特点与限制**
```csharp
// ✅ 适用：字符串→其他类型
// ❌ 不适用：其他类型→字符串、类型间转换

// ⚠️ 必须有效字符串
// int.Parse("123abc");     // FormatException
// int.Parse(null);         // ArgumentNullException
// int.Parse("9999999999"); // OverflowException (太大)

// 处理空字符串
string empty = "";
// int.Parse(empty);        // FormatException
```

#### **使用建议**
```csharp
// 1. 总是验证输入
string userInput = "123";
if (!string.IsNullOrEmpty(userInput))
{
    try
    {
        int value = int.Parse(userInput);
        Console.WriteLine($"转换成功: {value}");
    }
    catch (FormatException)
    {
        Console.WriteLine("格式错误");
    }
    catch (OverflowException)
    {
        Console.WriteLine("数值太大或太小");
    }
}

// 2. 使用NumberStyles处理特殊格式
string hexString = "0x1A3F";
int hexValue = int.Parse(hexString.Substring(2), 
    System.Globalization.NumberStyles.HexNumber);

string withSpaces = "  123  ";
int spacedValue = int.Parse(withSpaces.Trim());
```

### **3. Convert 类方法**
```csharp
// 基本语法
目标类型 变量 = Convert.To目标类型(源变量);

// 1. 字符串转换（类似Parse）
int i = Convert.ToInt32("123");      // 123
bool b = Convert.ToBoolean("true");  // true

// 2. 类型间转换
double d = 123.45;
int i1 = Convert.ToInt32(d);        // 123（四舍五入）
int i2 = (int)d;                    // 123（截断）

// 3. 处理null和DBNull
object obj = null;
int nullToInt = Convert.ToInt32(obj);  // 0（默认值）
bool nullToBool = Convert.ToBoolean(obj); // false

// 数据库专用
object dbValue = DBNull.Value;
int dbToInt = Convert.ToInt32(dbValue);  // 0
```

#### **Convert的独特功能**
```csharp
// 1. Base64转换
string text = "Hello";
string base64 = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(text));
byte[] bytes = Convert.FromBase64String(base64);

// 2. 进制转换
int number = 255;
string binary = Convert.ToString(number, 2);  // "11111111"
string hex = Convert.ToString(number, 16);    // "ff"

// 3. 字符编码
char ch = 'A';
string unicode = Convert.ToString((int)ch, 16).PadLeft(4, '0'); // "0041"

// 4. 日期时间的特殊处理
DateTime now = DateTime.Now;
string isoString = Convert.ToString(now);  // 标准格式
long ticks = Convert.ToInt64(now.Ticks);
```

#### **转换失败处理**
```csharp
// Convert的默认行为
Console.WriteLine(Convert.ToInt32(null));      // 0
Console.WriteLine(Convert.ToBoolean(null));    // false
Console.WriteLine(Convert.ToDateTime(null));   // 01/01/0001 00:00:00

// 但仍然可能抛出异常
// Convert.ToInt32("abc");     // FormatException
// Convert.ToInt32(999999999999L); // OverflowException
```

## 三、详细对比表格

### **功能对比**
| 转换类型 | 括号强转 | Parse() | Convert() |
|----------|----------|---------|-----------|
| 数值→数值 | ✅ | ❌ | ✅ |
| 字符串→数值 | ❌ | ✅ | ✅ |
| 处理null | ❌ | ❌ | ✅ (返回默认值) |
| 处理DBNull | ❌ | ❌ | ✅ |
| 布尔转换 | ✅ (0/1) | ✅ | ✅ |
| 日期时间 | ❌ | ✅ | ✅ |
| 自定义格式 | ❌ | ✅ (NumberStyles) | ✅ (IFormatProvider) |
| 溢出检查 | 可选(checked) | ✅ | ✅ |
| 舍入方式 | 截断 | - | 四舍五入 |

### **性能对比**
```csharp
// 测试代码
using System.Diagnostics;

void TestPerformance()
{
    int iterations = 1000000;
    
    // 括号强转
    var sw1 = Stopwatch.StartNew();
    for (int i = 0; i < iterations; i++)
    {
        double d = 123.45;
        int result = (int)d;
    }
    sw1.Stop();
    
    // Convert
    var sw2 = Stopwatch.StartNew();
    for (int i = 0; i < iterations; i++)
    {
        double d = 123.45;
        int result = Convert.ToInt32(d);
    }
    sw2.Stop();
    
    Console.WriteLine($"括号强转: {sw1.ElapsedTicks} ticks");
    Console.WriteLine($"Convert: {sw2.ElapsedTicks} ticks");
}

// 结果：括号强转通常快2-5倍
```

### **异常处理对比**
```csharp
// 括号强转的异常
try
{
    object obj = "hello";
    int i = (int)obj;  // InvalidCastException
}
catch (InvalidCastException ex)
{
    Console.WriteLine($"类型转换失败: {ex.Message}");
}

// Parse的异常
try
{
    int i = int.Parse("123abc");  // FormatException
}
catch (FormatException ex)
{
    Console.WriteLine($"格式错误: {ex.Message}");
}
catch (OverflowException ex)
{
    Console.WriteLine($"溢出错误: {ex.Message}");
}

// Convert的异常
try
{
    int i = Convert.ToInt32("999999999999");  // OverflowException
}
catch (Exception ex)
{
    Console.WriteLine($"转换失败: {ex.GetType().Name}: {ex.Message}");
}
```

## 四、实际应用场景

### **场景1：用户输入处理**
```csharp
// 最佳实践：使用TryParse
string userInput = Console.ReadLine();

// ❌ 不好的做法
// int age = int.Parse(userInput);  // 可能崩溃

// ✅ 好的做法
if (int.TryParse(userInput, out int age))
{
    Console.WriteLine($"年龄: {age}");
}
else
{
    Console.WriteLine("请输入有效的数字");
}

// 处理小数
if (decimal.TryParse(userInput, out decimal amount))
{
    Console.WriteLine($"金额: {amount:C}");
}
```

### **场景2：数据库操作**
```csharp
// 从数据库读取（可能为DBNull）
object dbValue = GetFromDatabase();

// ✅ 使用Convert（处理DBNull）
int intValue = Convert.ToInt32(dbValue);
DateTime dateValue = Convert.ToDateTime(dbValue ?? DateTime.MinValue);
bool boolValue = Convert.ToBoolean(dbValue);

// ❌ Parse无法处理DBNull
// int.Parse(dbValue.ToString());  // 可能出错
```

### **场景3：数值计算**
```csharp
// 需要精确控制舍入时
double price = 19.99;
int quantity = 3;

// 不同的舍入方式
double total1 = price * quantity;          // 59.97
int rounded1 = (int)total1;                // 59（截断）
int rounded2 = Convert.ToInt32(total1);    // 60（四舍五入）
int rounded3 = (int)Math.Round(total1);    // 60（四舍五入）

// 金融计算用decimal
decimal precisePrice = 19.99m;
decimal preciseTotal = precisePrice * quantity;  // 59.97m
```

### **场景4：类型安全的集合**
```csharp
// 使用泛型避免转换
List<int> numbers = new List<int> { 1, 2, 3 };
// 无需转换：numbers[0] 直接是int

// 非泛型集合需要转换
ArrayList oldList = new ArrayList { 1, 2, 3 };
int first = (int)oldList[0];  // 需要显式转换

// 使用as运算符安全转换
object obj = "test";
string str = obj as string;  // 失败返回null，不抛异常
if (str != null)
{
    Console.WriteLine(str.Length);
}
```

## 五、最佳实践总结

### **选择指南**
```csharp
// 1. 字符串→数值：优先用 TryParse
string input = "123";
if (int.TryParse(input, out int result)) { /* 使用result */ }

// 2. 已知安全的数值转换：用括号强转
double source = 100.5;
int target = (int)source;  // 快

// 3. 需要处理null/DBNull：用Convert
object dbValue = GetFromDB();
int value = Convert.ToInt32(dbValue);

// 4. 需要四舍五入：用Convert或Math.Round
double d = 123.456;
int rounded = Convert.ToInt32(d);  // 123

// 5. 需要格式控制：用Parse/TryParse
string moneyStr = "$1,234.56";
if (decimal.TryParse(moneyStr, 
    System.Globalization.NumberStyles.Currency, 
    null, out decimal money))
{
    // 处理货币
}
```

### **安全转换模板**
```csharp
public static T SafeConvert<T>(object value, T defaultValue = default)
{
    if (value == null || value == DBNull.Value)
        return defaultValue;
    
    try
    {
        return (T)Convert.ChangeType(value, typeof(T));
    }
    catch
    {
        return defaultValue;
    }
}

// 使用示例
int age = SafeConvert<int>(userInput, 0);
DateTime date = SafeConvert<DateTime>(dbValue, DateTime.MinValue);
string name = SafeConvert<string>(obj, "Unknown");
```

### **性能建议**
1. **循环内部**：用括号强转
2. **用户输入**：用TryParse（避免异常开销）
3. **数据库数据**：用Convert（处理null）
4. **大量数据**：考虑使用unsafe代码或Span<T>

## 六、常见错误避免

```csharp
// ❌ 错误：未验证输入
// int age = int.Parse(Console.ReadLine());

// ✅ 正确：验证输入
string input = Console.ReadLine();
if (int.TryParse(input, out int age))
{
    // 使用age
}

// ❌ 错误：忽略文化差异
// double.Parse("123,45");  // 可能失败（依赖系统设置）

// ✅ 正确：指定文化
double.Parse("123,45", System.Globalization.CultureInfo.GetCultureInfo("fr-FR"));

// ❌ 错误：未处理溢出
// int small = (int)999999999999L;

// ✅ 正确：检查范围
long bigValue = 999999999999L;
if (bigValue >= int.MinValue && bigValue <= int.MaxValue)
{
    int safeValue = (int)bigValue;
}

// ❌ 错误：混淆舍入方式
// double d = 2.5;
// int i1 = (int)d;      // 2（截断）
// int i2 = Convert.ToInt32(d);  // 2（银行家舍入，2.5→2）

// ✅ 正确：明确舍入方式
int rounded = (int)Math.Round(d, MidpointRounding.AwayFromZero);  // 3
```

记住：**安全第一，性能第二**。在不确定的情况下，优先选择更安全的转换方式。