---
noteId: "82888b20679511f0b0d6278e683d20b1"
tags: []

---

# C# 中 `GetValues` 方法的详解

`GetValues` 是 .NET 中用于获取枚举类型所有值的核心方法，属于 `System.Enum` 类的静态方法。以下是其完整用法解析：

---

## 一、基本用法

### 1. 获取枚举所有值
```csharp
enum Weekday { Monday, Tuesday, Wednesday, Thursday, Friday }

// 获取所有枚举值
Array values = Enum.GetValues(typeof(Weekday));

foreach (Weekday day in values)
{
    Console.WriteLine(day);
}
```
**输出**：
```
Monday
Tuesday
Wednesday
Thursday
Friday
```

### 2. 泛型版本（.NET 5+ 推荐）
```csharp
Weekday[] days = Enum.GetValues<Weekday>(); // 直接返回强类型数组
```

---

## 二、方法重载

| 方法签名                                                                 | 说明                          |
|--------------------------------------------------------------------------|-----------------------------|
| `static Array GetValues(Type enumType)`                                  | 传统方式，返回 `Array`        |
| `static TEnum[] GetValues<TEnum>() where TEnum : struct, Enum` (.NET 5+) | 泛型版本，返回强类型数组      |

---

## 三、返回值处理

### 1. 遍历方式
```csharp
// 方式1：直接遍历
foreach (var value in Enum.GetValues(typeof(Weekday)))
{
    Console.WriteLine(value);
}

// 方式2：转换为具体类型
Weekday[] days = (Weekday[])Enum.GetValues(typeof(Weekday));
```

### 2. 获取值和名称组合
```csharp
foreach (Weekday day in Enum.GetValues(typeof(Weekday)))
{
    Console.WriteLine($"{day} = {(int)day}");
}
```
**输出**：
```
Monday = 0
Tuesday = 1
Wednesday = 2
Thursday = 3
Friday = 4
```

---

## 四、高级用法

### 1. 处理标志枚举（[Flags]）
```csharp
[Flags]
enum Permissions
{
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4
}

// 获取所有定义的组合值
foreach (Permissions p in Enum.GetValues(typeof(Permissions)))
{
    if (p != Permissions.None)
        Console.WriteLine(p);
}
```
**输出**：
```
Read
Write
Execute
```

### 2. 过滤有效值
```csharp
// 排除0值（如None）
var validValues = Enum.GetValues(typeof(Weekday))
                     .OfType<Weekday>()
                     .Where(v => v != 0);
```

---

## 五、性能优化

### 1. 缓存结果
```csharp
private static readonly Weekday[] AllDays = Enum.GetValues<Weekday>();

// 后续直接使用缓存
foreach (var day in AllDays) { ... }
```

### 2. 避免装箱
```csharp
// 传统方式有装箱（返回Array）
Array boxedValues = Enum.GetValues(typeof(Weekday)); 

// 泛型版本无装箱（.NET 5+）
Weekday[] unboxedValues = Enum.GetValues<Weekday>();
```

---

## 六、常见问题解决

### 1. 类型转换异常
```csharp
// 错误方式（直接转换为具体数组类型）
int[] values = (int[])Enum.GetValues(typeof(Weekday)); // 运行时异常

// 正确方式
int[] intValues = Enum.GetValues(typeof(Weekday)).Cast<int>().ToArray();
```

### 2. 处理自定义基础类型
```csharp
enum Color : byte { Red = 1, Green = 2, Blue = 3 }

// 获取byte值
byte[] colorValues = Enum.GetValues(typeof(Color)).Cast<byte>().ToArray();
```

---

## 七、与其他枚举方法的对比

| 方法                | 返回值类型       | 特点                          |
|---------------------|----------------|-------------------------------|
| `Enum.GetValues`    | `Array`/`T[]`  | 获取所有枚举值                |
| `Enum.GetNames`     | `string[]`     | 获取所有枚举名称              |
| `Enum.IsDefined`    | `bool`         | 检查值是否有效                |
| `Enum.Parse`        | `object`       | 字符串转枚举值                |

---

## 八、完整示例：枚举工具类

```csharp
public static class EnumHelper
{
    public static T[] GetAllValues<T>() where T : struct, Enum
    {
        return Enum.GetValues<T>();
    }

    public static Dictionary<int, string> ToDictionary<T>() where T : struct, Enum
    {
        return Enum.GetValues<T>()
                  .ToDictionary(e => Convert.ToInt32(e), e => e.ToString());
    }
}

// 使用示例
var weekdays = EnumHelper.ToDictionary<Weekday>();
foreach (var kv in weekdays)
{
    Console.WriteLine($"{kv.Key}: {kv.Value}");
}
```

**输出**：
```
0: Monday
1: Tuesday
2: Wednesday
3: Thursday
4: Friday
```

---

## 总结

1. **基础用法**：`Enum.GetValues(typeof(MyEnum))` 获取所有枚举值
2. **现代用法**：.NET 5+ 优先使用泛型版本 `Enum.GetValues<TEnum>()`
3. **标志枚举**：需特殊处理复合值
4. **性能优化**：缓存结果避免重复反射开销

`GetValues` 是处理枚举的核心工具，特别适用于动态生成UI选项、数据验证等场景。