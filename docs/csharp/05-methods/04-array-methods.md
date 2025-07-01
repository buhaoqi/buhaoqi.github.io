---
noteId: "ddbf06b0460511f08a53dd9fb031ea51"
tags: []

---


## `Array.Sort()` 
用途：

`Array.Sort()`用于排序数组。包括：

- 正序排
- 倒序排
- 整体排序
- 局部排序

`Array.Sort()`是一个静态方法，属于 `System.Array` 类。它可以对基本类型数组（如 `int[]`、`double[]`、`string[]`）进行默认排序，也支持自定义排序规则。

### 基本语法

```csharp
Array.Sort(array); //默认升序排序
Array.Sort(array, comparer); //使用自定义比较器
Array.Sort(array, start, length) //局部排序
```

* `array`：要排序的一维数组。

### 排序整数数组

对整数数组元素直接进行比较大小后排序，默认使用升序排序（从小到大）。

```csharp
int[] numbers = { 5, 2, 8, 3, 1 };
Array.Sort(numbers);

foreach (int num in numbers)
{
    Console.Write(num + " ");  // 输出：1 2 3 5 8
}
```

### 排序英文字符串数组

字符串:按字典序排序

>字典序”是一种按照字典排列顺序进行比较的方法，主要应用于字符串的排序。你可以理解成：字典序就是按照我们查字典的方式比较字符串的大小，也就是一个一个字符地从左到右依次比较。

字符串排序规则：

- 从左到右逐个字符比较；
- 一旦遇到不同的字符，就看它们的 Unicode 编码 大小，谁小谁在前；
- 如果前面的字符都一样，短的字符串更小。

```c#
string[] words = { "apple", "banana", "app", "orange", "apply" };
Array.Sort(words);

foreach (string word in words)
{
    Console.Write(word);  // 输出：app apple apply banana orange
}

```

### 排序中文字符串数组

```c#
string[] arrStr = { "中国", "北京", "北海","安徽" };
Array.Sort(arrStr);
Console.WriteLine(arrStr[2]);
```

结果

```c#
"安徽","北海","北京", "中国"
```

### 降序排序

```csharp
int[] arr = { 4, 2, 9, 1 };
Array.Sort(arr, (a, b) => b.CompareTo(a));  // 降序排序

foreach (var item in arr)
{
    Console.Write(item + " "); // 输出：9 4 2 1
}
```

### 区间排序

```csharp
int[] arr = { 3, 9, 2, 7, 6 };
Array.Sort(arr, 1, 3);  // 只对索引 1~3（9,2,7）排序

foreach (int num in arr)
{
    Console.Write(num + " "); // 输出：3 2 7 9 6
}
```

## `Array.Reverse()` 

用途：反转数组元素顺序。

语法

```c#
Array.Reverse(array, [index], [length]);
```

示例: 反转整个数组顺序

```csharp
int[] numbers = { 4, 2, 7, 1, 3 };
Array.Reverse(numbers);
// 结果：{7, 4, 3, 2, 1}
```

示例：反转区间顺序
```csharp
int[] numbers = { 4, 2, 7, 1, 3 };

// 反转索引从 2 开始，长度为 3 的子数组：7, 1, 3
Array.Reverse(numbers, 2, 3);

foreach (int num in numbers)
{
    Console.Write(num + " ");
}
// 结果：{4 2 3 1 7 }
```

------

## `Array.IndexOf()` 

用途：查找元素第一次出现的索引

```csharp
int[] numbers = { 4, 2, 7, 1, 3 };
int index = Array.IndexOf(numbers, 3);
// 返回值：2（假设原数组是 {4, 2, 7, 1, 3}）
```

- 若不存在，返回 `-1`。
- 可以指定搜索起始位置和范围。

------

## `Array.LastIndexOf()` 

用途：查找元素最后一次出现的索引

```csharp
int[] numbers = { 4, 2, 7, 1, 3 };
int lastIndex = Array.LastIndexOf(numbers, 3);
```

- 与 `IndexOf` 类似，但从尾部查找。

------

## `Array.Exists()` 

用途：判断是否存在某元素满足条件

```csharp
bool hasEven = Array.Exists(numbers, x => x % 2 == 0);
// 检查是否有偶数
```

------

## `Array.Find()`|`Array.FindAll()` 

用途：查找第一个 / 所有符合条件的元素

```csharp
int firstEven = Array.Find(numbers, x => x % 2 == 0);
int[] evens = Array.FindAll(numbers, x => x % 2 == 0);
```

------

## `Array.TrueForAll()` 

用途：判断是否全部满足某条件

```csharp
bool allPositive = Array.TrueForAll(numbers, x => x > 0);
```
------


## foreach


## foreach 循环

**语法结构：**
```csharp
foreach (类型 变量名 in 集合)
{
    // 循环体
}
```

**特点：**
- 专门用于遍历集合元素
- 只读访问，不能修改集合
- 代码简洁易读



**示例：**
```csharp
string[] fruits = { "Apple", "Banana", "Orange" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```


## 2. 带索引的foreach（C# 7.0+）

```csharp
foreach (var (item, index) in collection.Select((item, index) => (item, index)))
{
    Console.WriteLine($"{index}: {item}");
}
```

## 总结

| 方法名             | 功能说明                 |
| ------------------ | ------------------------ |
| `Sort`             | 排序                     |
| `Reverse`          | 反转                     |
| `IndexOf`          | 查找元素位置（第一次）   |
| `LastIndexOf`      | 查找元素位置（最后一次） |
| `Exists`           | 是否存在满足条件的元素   |
| `Find` / `FindAll` | 查找元素                 |
| `TrueForAll`       | 所有元素是否满足某条件   |



Sort、Reverse、IndexOf、LastIndexOf、Exists、Find 、 FindAll、TrueForAll  
------

## .NET LINQ

在 C# 中，LINQ（Language Integrated Query，语言集成查询） 是 .NET 提供的一种强大功能，它允许你使用类似 SQL 的语法来查询数组、集合、数据库、XML 等数据源，让数据查询变得更加直观、简洁、类型安全。

LINQ 能做什么

- 查询数组、List、Dictionary 等集合；
- 查询数据库（配合 Entity Framework）；
- 查询 XML（使用 System.Xml.Linq）；
- 对集合进行过滤、排序、分组、统计等操作；
- 简化循环、条件判断、数据提取。

命名空间

先引入 `System.Linq`，才可以使用扩展方法，例如：

```csharp
using System.Linq;

int max = numbers.Max();
int min = numbers.Min();
int sum = numbers.Sum();
```
----
