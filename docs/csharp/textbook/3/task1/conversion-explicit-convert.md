---
noteId: "4d4f4460efcd11f08ac271a94bf5e46a"
tags: []

---

一、用途：将一种基本数据类型转换为另一种基本数据类型

二、语法

```c#
Convert.目标数据类型(数据类型)
```

三、能转什么

```c#
//1.字符串 => 其他基本数据类型
Convert.ToInt32("123");
Convert.ToDouble("123.45");
Convert.ToBoolean("true");
Convert.ToChar("A");
//2.实数 => 整数 （四舍五入）
Convert.ToInt32(123.456); // 123
Convert.ToInt32(123.556); // 124 四舍五入
//3. 布尔值 => 整数
Convert.ToInt32(true); // 1
Convert.ToInt32(false); // 0
Convert.ToBoolean(1); // true
Convert.ToBoolean(0); //  false
//4.任意类型 => 字符串(万能转)
Convert.ToString(true); // "true"
Convert.ToString(3.124); // "3.14"
//5.特殊
Convert.ToInt32("");

```



四、不能转什么

```c#
Convert.ToInt32("123.45"); //格式错误
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


## 一、教学目标

### **知识目标**
1. 掌握Convert类的基本概念和常用方法
2. 理解Convert类与Parse()、括号强转的区别
3. 了解Convert类的特有能力（处理null、DBNull等）
4. 学会选择合适的类型转换方法

### **能力目标**
1. 能够正确使用Convert类进行各种类型转换
2. 能够处理特殊值（null、DBNull.Value）
3. 能够实现进制转换、Base64编码等高级功能
4. 能够根据场景选择最佳转换方案

### **情感目标**
1. 培养学生系统化学习编程知识的能力
2. 增强对.NET框架类库的探索兴趣
3. 培养实际工程中的问题解决能力

## 二、教学重点与难点

### **教学重点**
1. Convert.ToXxx()系列方法的使用
2. Convert类的特殊值处理能力
3. 进制转换和编码转换

### **教学难点**
1. 理解Convert.ChangeType()的反射机制
2. 掌握IConvertible接口的实现
3. Convert与Parse的性能差异理解

## 三、教学过程

### **第一阶段：认识Convert类（15分钟）**

#### **1. Convert类是什么？**
```csharp
// Convert是System命名空间下的静态工具类
// 提供了一整套类型转换方法

// 基本语法：Convert.To目标类型(源值)
int number = Convert.ToInt32("123");
bool flag = Convert.ToBoolean("true");
DateTime date = Convert.ToDateTime("2024-01-15");
```

#### **2. Convert类的设计哲学**
```csharp
// Convert类设计为"尽力而为"的转换器
// 特点：宽容、功能全面、支持更多场景

// 对比三种转换方式：
string input = "123";

// 1. 括号强转：严格，只支持类型兼容
// int value = (int)input;  // ❌ 编译错误

// 2. Parse()：严格，只接受有效字符串
// int value = int.Parse(null);  // ❌ 抛出异常

// 3. Convert：宽容，尝试各种可能
int value1 = Convert.ToInt32(input);    // ✅ 123
int value2 = Convert.ToInt32(null);     // ✅ 0（返回默认值）
int value3 = Convert.ToInt32("");       // ✅ 0（返回默认值）
```

### **第二阶段：Convert类详解（40分钟）**

#### **1. Convert的基本转换方法**

```csharp
// 1.1 字符串→各种类型（类似Parse，但更宽容）
int intVal = Convert.ToInt32("123");
long longVal = Convert.ToInt64("123456789012");
float floatVal = Convert.ToSingle("123.45");    // Single就是float
double doubleVal = Convert.ToDouble("123.456");
decimal decimalVal = Convert.ToDecimal("123.4567");
bool boolVal = Convert.ToBoolean("true");
char charVal = Convert.ToChar("A");
DateTime dateVal = Convert.ToDateTime("2024-01-15");
string stringVal = Convert.ToString(123);  // 反向转换

// 1.2 数值类型间转换（类似括号强转，但四舍五入）
double d = 123.456;
int i1 = (int)d;                   // 123（截断）
int i2 = Convert.ToInt32(d);       // 123（四舍五入）
int i3 = Convert.ToInt32(123.5);   // 124（四舍五入）
int i4 = Convert.ToInt32(123.4);   // 123

// 演示舍入规则
Console.WriteLine("Convert舍入示例：");
double[] testValues = { 123.4, 123.5, 123.6, 124.5 };
foreach (double val in testValues)
{
    Console.WriteLine($"{val} → {Convert.ToInt32(val)}");
}
```

#### **2. Convert的特殊能力**

```csharp
// 2.1 处理null和空字符串
Console.WriteLine("处理特殊值：");
Console.WriteLine($"Convert.ToInt32(null) = {Convert.ToInt32(null)}");      // 0
Console.WriteLine($"Convert.ToInt32(\"\") = {Convert.ToInt32("")}");         // 0
Console.WriteLine($"Convert.ToBoolean(null) = {Convert.ToBoolean(null)}");  // false
Console.WriteLine($"Convert.ToDateTime(null) = {Convert.ToDateTime(null)}");// 0001/1/1 0:00:00

// 2.2 处理DBNull.Value（数据库专用）
object dbValue = DBNull.Value;
Console.WriteLine($"Convert.ToInt32(DBNull.Value) = {Convert.ToInt32(dbValue)}");  // 0
Console.WriteLine($"Convert.ToString(DBNull.Value) = {Convert.ToString(dbValue)}");// ""

// 2.3 布尔值转换的多样性
Console.WriteLine("\n布尔值转换多样性：");
Console.WriteLine($"Convert.ToBoolean(1) = {Convert.ToBoolean(1)}");        // true
Console.WriteLine($"Convert.ToBoolean(0) = {Convert.ToBoolean(0)}");        // false
Console.WriteLine($"Convert.ToBoolean(-1) = {Convert.ToBoolean(-1)}");      // true
Console.WriteLine($"Convert.ToBoolean(\"yes\") = {Convert.ToBoolean("yes")}");// FormatException
Console.WriteLine($"Convert.ToBoolean(\"True\") = {Convert.ToBoolean("True")}");// true
```

#### **3. Convert的高级功能**

```csharp
// 3.1 进制转换
Console.WriteLine("\n进制转换：");
int number = 255;
string binary = Convert.ToString(number, 2);     // 二进制: "11111111"
string octal = Convert.ToString(number, 8);      // 八进制: "377"
string hex = Convert.ToString(number, 16);       // 十六进制: "ff"
string hexUpper = Convert.ToString(number, 16).ToUpper(); // "FF"

Console.WriteLine($"{number} 的二进制: {binary}");
Console.WriteLine($"{number} 的八进制: {octal}");
Console.WriteLine($"{number} 的十六进制: {hex}");

// 字符串到数值（指定进制）
string binaryStr = "11111111";
int fromBinary = Convert.ToInt32(binaryStr, 2);  // 255
string hexStr = "FF";
int fromHex = Convert.ToInt32(hexStr, 16);       // 255

// 3.2 Base64编码解码
Console.WriteLine("\nBase64编码解码：");
string text = "Hello, C#!";
byte[] bytes = Encoding.UTF8.GetBytes(text);
string base64 = Convert.ToBase64String(bytes);
Console.WriteLine($"原文: {text}");
Console.WriteLine($"Base64: {base64}");

byte[] decodedBytes = Convert.FromBase64String(base64);
string decodedText = Encoding.UTF8.GetString(decodedBytes);
Console.WriteLine($"解码后: {decodedText}");

// 3.3 Unicode字符编码
Console.WriteLine("\nUnicode字符编码：");
char ch = '中';
int codePoint = Convert.ToInt32(ch);
Console.WriteLine($"字符 '{ch}' 的Unicode码点: U+{codePoint:X4}");

string unicodeStr = "\\u" + Convert.ToString(codePoint, 16).PadLeft(4, '0');
Console.WriteLine($"Unicode转义序列: {unicodeStr}");
```

#### **4. Convert.ChangeType() - 通用转换器**

```csharp
// 4.1 ChangeType的基本使用
object value = "123";
Type targetType = typeof(int);
object converted = Convert.ChangeType(value, targetType);
int result = (int)converted;  // 123
Console.WriteLine($"ChangeType转换: {value} → {result} ({result.GetType()})");

// 4.2 处理多种类型转换
object[] values = { "123", 123.45, true, DateTime.Now };
Type[] types = { typeof(int), typeof(string), typeof(int), typeof(string) };

for (int i = 0; i < values.Length; i++)
{
    try
    {
        object convertedValue = Convert.ChangeType(values[i], types[i]);
        Console.WriteLine($"{values[i]} ({values[i].GetType()}) → {convertedValue} ({types[i]})");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"{values[i]} → {types[i].Name} 失败: {ex.Message}");
    }
}

// 4.3 配合泛型使用
public static T ConvertTo<T>(object value)
{
    if (value == null)
        return default(T);
    
    Type targetType = typeof(T);
    
    // 处理可空类型
    if (Nullable.GetUnderlyingType(targetType) != null)
    {
        if (value == null || Convert.IsDBNull(value))
            return default(T);
        
        targetType = Nullable.GetUnderlyingType(targetType);
    }
    
    return (T)Convert.ChangeType(value, targetType);
}

// 使用示例
int intResult = ConvertTo<int>("123");          // 123
int? nullableResult = ConvertTo<int?>(null);    // null
DateTime dateResult = ConvertTo<DateTime>("2024-01-15");
```

### **第三阶段：Convert的"能"与"不能"（20分钟）**

#### **能转什么？✅**

```csharp
// 1. 字符串→所有基础类型 ✅
Convert.ToInt32("123");
Convert.ToDouble("123.45");
Convert.ToBoolean("true");
Convert.ToDateTime("2024-01-15");
Convert.ToChar("A");

// 2. 数值类型间转换 ✅（四舍五入）
Convert.ToInt32(123.456);    // 123
Convert.ToInt32(123.5);      // 124
Convert.ToInt64(123456789);

// 3. 处理特殊值 ✅
Convert.ToInt32(null);        // 0
Convert.ToInt32("");          // 0
Convert.ToBoolean(DBNull.Value); // false

// 4. 布尔值与数值互转 ✅
Convert.ToBoolean(1);        // true
Convert.ToBoolean(0);        // false
Convert.ToInt32(true);       // 1
Convert.ToInt32(false);      // 0

// 5. 任意类型→字符串 ✅
Convert.ToString(123);        // "123"
Convert.ToString(123.456);    // "123.456"
Convert.ToString(true);       // "True"
Convert.ToString(DateTime.Now);

// 6. 进制转换 ✅
Convert.ToString(255, 2);     // "11111111"
Convert.ToInt32("11111111", 2); // 255

// 7. 字节数组与Base64 ✅
byte[] data = { 72, 101, 108, 108, 111 };
string base64 = Convert.ToBase64String(data); // "SGVsbG8="

// 8. 字符编码转换 ✅
byte[] bytes = Encoding.UTF8.GetBytes("Hello");
string hex = BitConverter.ToString(bytes); // "48-65-6C-6C-6F"

// 9. 枚举转换 ✅
enum Status { Active = 1, Inactive = 0 }
Status status = (Status)Convert.ToInt32("1"); // Active
```

#### **不能转什么？❌**

```csharp
// 1. 无关类型间的转换 ❌
// Convert.ToInt32(new object());  // InvalidCastException

// 2. 自定义类（除非实现IConvertible）❌
class Person { }
// Convert.ToInt32(new Person());  // InvalidCastException

// 3. 数组类型转换 ❌
// int[] array = {1, 2, 3};
// Convert.ToDouble(array);  // InvalidCastException

// 4. 复杂对象→简单类型 ❌
// DateTime now = DateTime.Now;
// Convert.ToInt32(now);  // InvalidCastException

// 5. 无效格式的字符串（某些情况）❌
// Convert.ToInt32("123abc");     // FormatException
// Convert.ToDateTime("invalid"); // FormatException

// 6. 超出范围的数值 ❌
// Convert.ToByte(256);           // OverflowException
// Convert.ToInt32(999999999999L); // OverflowException

// 7. null到值类型（返回默认值，不是异常）⚠️
// 注意：这不算"不能转"，而是返回默认值
int defaultInt = Convert.ToInt32(null);  // 0，不是异常
```

#### **特殊转换规则**

```csharp
// 1. 浮点数到整数的舍入规则
Console.WriteLine("浮点数舍入测试：");
double[] testDoubles = { 123.4, 123.5, 123.6, 124.5, -123.5 };
foreach (double d in testDoubles)
{
    int rounded = Convert.ToInt32(d);
    Console.WriteLine($"{d,7} → {rounded,3} (注意: {d}使用银行家舍入)");
}
// 输出：
//   123.4 → 123
//   123.5 → 124 (银行家舍入：向最近的偶数舍入，但C#的Convert不是严格的银行家舍入)
//   123.6 → 124
//   124.5 → 124 (这里124是偶数，所以向124舍入)
//  -123.5 → -124

// 2. 布尔值的特殊转换
Console.WriteLine("\n布尔值转换测试：");
object[] boolTests = { 1, 0, -1, "True", "False", "1", "0" };
foreach (object test in boolTests)
{
    try
    {
        bool result = Convert.ToBoolean(test);
        Console.WriteLine($"{test,6} ({test.GetType().Name}) → {result}");
    }
    catch
    {
        Console.WriteLine($"{test,6} → 转换失败");
    }
}

// 3. 日期时间的边界值
Console.WriteLine("\nDateTime边界测试：");
DateTime minDate = DateTime.MinValue;
DateTime maxDate = DateTime.MaxValue;
Console.WriteLine($"Min: {Convert.ToString(minDate)}");
Console.WriteLine($"Max: {Convert.ToString(maxDate)}");

// 尝试转换超出范围的值
try
{
    Convert.ToDateTime("9999-12-31 23:59:59.9999999");
}
catch (Exception ex)
{
    Console.WriteLine($"超出范围: {ex.Message}");
}
```

### **第四阶段：Convert vs Parse vs 括号强转（10分钟）**

#### **详细对比表**

```csharp
// 创建对比演示
public class ConversionComparison
{
    public static void CompareMethods()
    {
        Console.WriteLine("=== 三种转换方法对比 ===\n");
        
        TestCase[] testCases = {
            new("123", typeof(int), "正常整数"),
            new("123.45", typeof(int), "带小数点的字符串"),
            new(null, typeof(int), "null值"),
            new("", typeof(int), "空字符串"),
            new(DBNull.Value, typeof(int), "DBNull.Value"),
            new("9999999999", typeof(int), "超大数值"),
            new("abc", typeof(int), "无效字符串"),
            new("true", typeof(bool), "布尔字符串"),
            new(123.7, typeof(int), "浮点数到整数"),
        };
        
        foreach (var test in testCases)
        {
            Console.WriteLine($"测试: {test.Description}");
            Console.WriteLine($"输入: {test.Input ?? "null"} (类型: {test.Input?.GetType().Name ?? "null"})");
            
            try { Console.WriteLine($"括号强转: 不支持字符串转换"); }
            catch { Console.WriteLine($"括号强转: 编译错误"); }
            
            try { Console.WriteLine($"Parse: {CallParse(test.Input, test.TargetType)}"); }
            catch (Exception ex) { Console.WriteLine($"Parse: 失败 - {ex.GetType().Name}"); }
            
            try { Console.WriteLine($"Convert: {CallConvert(test.Input, test.TargetType)}"); }
            catch (Exception ex) { Console.WriteLine($"Convert: 失败 - {ex.GetType().Name}"); }
            
            Console.WriteLine(new string('-', 50));
        }
    }
    
    private static object CallParse(object input, Type targetType)
    {
        if (input == null) return "null";
        
        return targetType.Name switch
        {
            "Int32" => int.Parse(input.ToString()),
            "Boolean" => bool.Parse(input.ToString()),
            _ => "不支持"
        };
    }
    
    private static object CallConvert(object input, Type targetType)
    {
        return targetType.Name switch
        {
            "Int32" => Convert.ToInt32(input),
            "Boolean" => Convert.ToBoolean(input),
            _ => "不支持"
        };
    }
    
    private class TestCase
    {
        public object Input { get; }
        public Type TargetType { get; }
        public string Description { get; }
        
        public TestCase(object input, Type targetType, string description)
        {
            Input = input;
            TargetType = targetType;
            Description = description;
        }
    }
}

// 实际使用对比
Console.WriteLine("实际场景对比：\n");

// 场景1：数据库数据读取
object dbValue = GetFromDatabase(); // 可能返回123、null或DBNull.Value

// ❌ Parse()：需要额外处理
// if (dbValue != null && dbValue != DBNull.Value)
//     int val = int.Parse(dbValue.ToString());

// ✅ Convert：一行搞定
int val = Convert.ToInt32(dbValue);  // 自动处理null和DBNull

// 场景2：用户输入处理
string userInput = Console.ReadLine();

// ✅ TryParse：最安全
if (int.TryParse(userInput, out int parsedValue))
{
    // 使用parsedValue
}

// ⚠️ Convert：较安全，但可能返回0（对于空字符串）
int convertedValue = Convert.ToInt32(userInput);
if (userInput != "" || convertedValue != 0)
{
    // 注意：如果用户输入""，Convert会返回0
}

// ❌ Parse：最危险
// try { int parsed = int.Parse(userInput); }
// catch { /* 处理异常 */ }
```

#### **性能对比**

```csharp
// 性能测试演示
using System.Diagnostics;

void PerformanceTest()
{
    int iterations = 1000000;
    string testString = "12345";
    
    Console.WriteLine($"性能测试 ({iterations}次迭代):\n");
    
    // Parse()性能
    var sw1 = Stopwatch.StartNew();
    for (int i = 0; i < iterations; i++)
    {
        try { int result = int.Parse(testString); }
        catch { }
    }
    sw1.Stop();
    
    // Convert性能
    var sw2 = Stopwatch.StartNew();
    for (int i = 0; i < iterations; i++)
    {
        try { int result = Convert.ToInt32(testString); }
        catch { }
    }
    sw2.Stop();
    
    // TryParse性能
    var sw3 = Stopwatch.StartNew();
    for (int i = 0; i < iterations; i++)
    {
        int.TryParse(testString, out int result);
    }
    sw3.Stop();
    
    Console.WriteLine($"int.Parse():     {sw1.ElapsedMilliseconds,6} ms");
    Console.WriteLine($"Convert.ToInt32: {sw2.ElapsedMilliseconds,6} ms");
    Console.WriteLine($"int.TryParse():  {sw3.ElapsedMilliseconds,6} ms");
    
    // 测试null处理
    Console.WriteLine("\n处理null的性能:");
    var sw4 = Stopwatch.StartNew();
    for (int i = 0; i < iterations; i++)
    {
        Convert.ToInt32(null);
    }
    sw4.Stop();
    Console.WriteLine($"Convert.ToInt32(null): {sw4.ElapsedMilliseconds} ms");
}
```

### **第五阶段：最佳实践和常见错误（5分钟）**

#### **Convert类的最佳实践**

```csharp
// 1. 数据库操作首选Convert
public class DatabaseHelper
{
    public static T ReadField<T>(IDataReader reader, string columnName)
    {
        object value = reader[columnName];
        
        if (value == null || value == DBNull.Value)
            return default(T);
            
        // 使用Convert处理各种类型
        return (T)Convert.ChangeType(value, typeof(T));
    }
}

// 2. 配置文件读取
public static class ConfigReader
{
    public static T GetValue<T>(string key, T defaultValue = default)
    {
        string value = ConfigurationManager.AppSettings[key];
        
        if (string.IsNullOrEmpty(value))
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
}

// 3. 安全的通用转换器
public static class SafeConverter
{
    public static T ConvertTo<T>(object value, T defaultValue = default)
    {
        if (value == null || value == DBNull.Value)
            return defaultValue;
            
        try
        {
            Type targetType = typeof(T);
            
            // 处理可空类型
            Type underlyingType = Nullable.GetUnderlyingType(targetType);
            if (underlyingType != null)
            {
                if (value == null || value == DBNull.Value)
                    return defaultValue;
                    
                targetType = underlyingType;
            }
            
            // 使用Convert.ChangeType
            return (T)Convert.ChangeType(value, targetType);
        }
        catch
        {
            return defaultValue;
        }
    }
    
    // 使用示例
    public static void Usage()
    {
        int intVal = SafeConverter.ConvertTo<int>("123", 0);
        DateTime? dateVal = SafeConverter.ConvertTo<DateTime?>(null, null);
        bool boolVal = SafeConverter.ConvertTo<bool>("true", false);
    }
}
```

#### **常见错误和注意事项**

```csharp
// 错误1：认为Convert能转换任意类型
// Convert.ToInt32(new Person());  // ❌ InvalidCastException

// 错误2：忽略Convert的默认值行为
string empty = "";
int value = Convert.ToInt32(empty);  // 返回0，不是错误
// 可能造成逻辑错误：用户没输入和输入0都被当作0

// 错误3：混淆舍入规则
double d1 = 123.5;
double d2 = 124.5;
int i1 = Convert.ToInt32(d1);  // 124
int i2 = Convert.ToInt32(d2);  // 124（银行家舍入）
// 如果期望四舍五入，应该使用Math.Round

// 错误4：性能敏感场景滥用Convert
// 在循环中频繁调用Convert可能有性能问题

// 错误5：未处理文化差异
string number = "1.234,56";  // 欧洲格式
// double d = Convert.ToDouble(number);  // 可能失败或错误
// 应该指定文化信息
double d = Convert.ToDouble(number, CultureInfo.GetCultureInfo("de-DE"));

// 正确做法总结
public static class BestPractices
{
    // 1. 明确转换意图
    public static int ParseUserInput(string input)
    {
        // 用户输入：优先TryParse
        if (int.TryParse(input, out int result))
            return result;
            
        throw new ArgumentException("请输入有效的整数");
    }
    
    // 2. 数据库数据：用Convert
    public static int ReadDatabaseInt(object dbValue)
    {
        return Convert.ToInt32(dbValue);  // 自动处理null/DBNull
    }
    
    // 3. 明确舍入需求
    public static int RoundToInt(double value, bool useBankersRounding = false)
    {
        if (useBankersRounding)
            return Convert.ToInt32(value);  // 银行家舍入
        else
            return (int)Math.Round(value, MidpointRounding.AwayFromZero);  // 四舍五入
    }
    
    // 4. 处理文化差异
    public static double ParseInternationalNumber(string number, string cultureCode = "en-US")
    {
        CultureInfo culture = CultureInfo.GetCultureInfo(cultureCode);
        return Convert.ToDouble(number, culture);
    }
}
```

## 四、总结对比表

| 特性 | 括号强转 | Parse() | Convert |
|------|----------|---------|---------|
| **语法** | `(int)value` | `int.Parse(str)` | `Convert.ToInt32(value)` |
| **输入类型** | 兼容类型 | 字符串 | 任意（支持IConvertible） |
| **null处理** | 编译错误 | 异常 | 返回默认值 |
| **DBNull处理** | 不支持 | 异常 | 返回默认值 |
| **空字符串** | 不适用 | 异常 | 返回默认值 |
| **性能** | 最快 | 快 | 中等 |
| **舍入方式** | 截断 | 不适用 | 银行家舍入 |
| **进制转换** | 不支持 | 不支持 | 支持（ToString/ToInt32） |
| **Base64** | 不支持 | 不支持 | 支持 |
| **安全性** | 低 | 中 | 高 |
| **使用建议** | 确定类型兼容 | 确定字符串有效 | 通用场景、数据库 |

## 五、选择指南

```
开始类型转换
    │
    ├─ 需要处理null/DBNull？ → 是 → 使用Convert
    │
    ├─ 源数据是用户输入？ → 是 → 使用TryParse
    │
    ├─ 确定类型完全兼容？ → 是 → 使用括号强转
    │
    ├─ 需要进制/Base64转换？ → 是 → 使用Convert
    │
    ├─ 需要通用转换（反射）？ → 是 → 使用Convert.ChangeType
    │
    └─ 其他情况 → 根据具体需求选择
```

记住：**Convert是瑞士军刀，功能全面但可能稍重；Parse是专业工具，精准但要求高；括号强转是快捷键，快速但风险大**。根据具体场景选择合适工具，才能写出既安全又高效的代码。