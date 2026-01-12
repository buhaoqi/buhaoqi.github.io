---
noteId: "c300e630ef7a11f0b30487fa81af44a5"
tags: []

---

# C#数据类型转换方法对比详解

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