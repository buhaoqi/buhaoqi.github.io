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

## Array.Sort()练习题（10题）

1. 将整数数组 `{9, 4, 2, 7, 1}` 使用 `Array.Sort()` 按升序排序。
2. 将字符串数组 `{ "banana", "apple", "cherry" }` 使用 `Array.Sort()` 按字典顺序排序。
3. 将数组 `{ 10, 2, 8, 5, 3 }` 使用 `Array.Sort()` 排序后，再使用 `Array.Reverse()` 实现降序排序。
4. 将数组 `{ 5, 9, 2, 7, 6, 1 }` 的第 2 个元素起连续 3 个元素（即 9, 2, 7）按升序排序。
5. 对数组 `{ 100, 50, 200, 30, 10 }` 的最后三个元素使用区间排序。
6. 对数组 `{ "dog", "cat", "apple", "zebra", "bat" }` 的中间 3 个元素排序后，再整体倒序输出。
7. 将浮点数组 `{3.1, 2.4, 5.6, 1.2}` 进行升序排序。
8. 将数组 `{ 5, 4, 3, 2, 1 }` 通过排序和反转的方式变为 `{1, 2, 3, 4, 5}`，再变为 `{5, 4, 3, 2, 1}`。
9. 给定数组 `{8, 3, 7, 9, 2, 6}`，只对下标 1 \~ 4 的元素进行排序，不影响其他位置。
10. 对字符串数组 `{ "Sun", "Earth", "Mars", "Venus" }` 使用 `Array.Sort()` 排序，再用 `Array.Reverse()` 实现降序排序。

## 数组方法基础题（1～15）

1. 定义一个整数数组，使用 `Array.Sort()` 对其进行升序排序。
2. 定义一个字符串数组，使用 `Array.Reverse()` 将其倒序排列。
3. 使用 `Array.IndexOf()` 找出元素 `10` 在数组 `[3, 5, 10, 7, 10]` 中的第一个位置。
4. 使用 `Array.LastIndexOf()` 查找元素 `10` 在数组中的最后一次出现位置。
5. 给定数组 `[2, 4, 6, 8]`，使用 `Array.Exists()` 判断是否存在大于 5 的元素。
6. 在数组 `[1, 3, 5, 7, 9]` 中，使用 `Array.Find()` 找出第一个大于 4 的数。
7. 使用 `Array.FindAll()` 找出 `[10, 20, 30, 25, 15]` 中所有大于等于 20 的元素。
8. 使用 `Array.TrueForAll()` 判断 `[2, 4, 6, 8]` 中是否所有元素都是偶数。
9. 使用 `Array.IndexOf()` 查找不存在的值（比如查找 99），观察结果。
10. 定义一个数组 `[1, 2, 3, 4, 5]`，使用 `Array.Reverse()` 然后输出结果。
11. 用 `Array.Sort()` 排序一个乱序的数组 `[5, 2, 9, 1, 3]` 并输出。
12. 判断 `[1, 3, 5, 7]` 中是否存在偶数（`Array.Exists()`）。
13. 找出字符串数组中第一个长度大于 5 的字符串（使用 `Array.Find()`）。
14. 找出 `["dog", "cat", "elephant", "ant"]` 中所有以字母 `a` 开头的字符串（`FindAll()`）。
15. 判断 `[10, 20, 30, 40]` 是否所有元素都能被 5 整除（使用 `TrueForAll()`）。

---

## 数组方法中级题（15 道）

16. 对一个整数数组先升序排序（`Sort()`），再倒序（`Reverse()`），实现降序排列。
17. 给定一个数组 `[1, 3, 5, 3, 1]`，找出值为 `3` 的第一个和最后一个索引。
18. 用 `Find()` 找出数组 `[11, 22, 33, 44]` 中第一个能被 11 整除的元素。
19. 在数组 `[3, 6, 9, 12]` 中找出所有能被 6 整除的数（`FindAll()`）。
20. 判断数组 `[-2, -4, -6, -8]` 是否所有值都是负数（`TrueForAll()`）。
21. 给定字符串数组 `["apple", "banana", "cherry", "apricot"]`，找出所有以 "a" 开头的元素。
22. 写一段代码判断数组是否已按升序排列（提示：配合 `Sort()` 和 `SequenceEqual()`）。
23. 找出数组中第一个值为奇数且大于 10 的元素。
24. 编写一个方法，接受任意整数数组，返回所有偶数元素组成的新数组（使用 `FindAll()`）。
25. 给定数组 `[1, 2, 3, 4, 5]`，使用 `Reverse()` 和 `IndexOf()` 找出原来倒数第二个元素现在的新索引。
26. 查找数组 `[2, 4, 6, 8]` 中不存在的值 `7` 的索引，并处理结果避免错误输出。
27. 给定数组 `[100, 90, 80, 70, 60]`，不使用 `Sort()`，而是先 `Reverse()` 再判断是否降序排列。
28. 使用 `Exists()` 判断字符串数组中是否有空字符串 `""`。
29. 判断数组中是否所有字符串长度都大于 0（使用 `TrueForAll()`）。
30. 综合题：定义一个整数数组，输出其中所有能被 3 整除但不能被 5 整除的元素（使用 `FindAll()`）。

------

## Array.Sort()练习题参考答案

```c#
// C# Array.Sort() 方法练习题及参考答案
using System;

class Program
{
    static void Main()
    {
        // 题 1：升序排序整数数组
        int[] arr1 = { 9, 4, 2, 7, 1 };
        Array.Sort(arr1);
        Console.WriteLine("题1: " + string.Join(", ", arr1));

        // 题 2：按字典顺序排序字符串数组
        string[] arr2 = { "banana", "apple", "cherry" };
        Array.Sort(arr2);
        Console.WriteLine("题2: " + string.Join(", ", arr2));

        // 题 3：升序后再倒序（降序）
        int[] arr3 = { 10, 2, 8, 5, 3 };
        Array.Sort(arr3);
        Array.Reverse(arr3);
        Console.WriteLine("题3: " + string.Join(", ", arr3));

        // 题 4：区间排序部分数组
        int[] arr4 = { 5, 9, 2, 7, 6, 1 };
        Array.Sort(arr4, 1, 3); // 排序元素9,2,7
        Console.WriteLine("题4: " + string.Join(", ", arr4));

        // 题 5：最后三个元素排序
        int[] arr5 = { 100, 50, 200, 30, 10 };
        Array.Sort(arr5, 2, 3); // 200, 30, 10
        Console.WriteLine("题5: " + string.Join(", ", arr5));

        // 题 6：中间三个字符串排序+整体倒序
        string[] arr6 = { "dog", "cat", "apple", "zebra", "bat" };
        Array.Sort(arr6, 1, 3); // cat, apple, zebra
        Array.Reverse(arr6);
        Console.WriteLine("题6: " + string.Join(", ", arr6));

        // 题 7：浮点数排序
        double[] arr7 = { 3.1, 2.4, 5.6, 1.2 };
        Array.Sort(arr7);
        Console.WriteLine("题7: " + string.Join(", ", arr7));

        // 题 8：先升序再降序
        int[] arr8 = { 5, 4, 3, 2, 1 };
        Array.Sort(arr8);
        Console.WriteLine("题8-升序: " + string.Join(", ", arr8));
        Array.Reverse(arr8);
        Console.WriteLine("题8-降序: " + string.Join(", ", arr8));

        // 题 9：仅对中间部分排序
        int[] arr9 = { 8, 3, 7, 9, 2, 6 };
        Array.Sort(arr9, 1, 4); // 3, 7, 9, 2 => 2,3,7,9
        Console.WriteLine("题9: " + string.Join(", ", arr9));

        // 题 10：字符串排序后倒序
        string[] arr10 = { "Sun", "Earth", "Mars", "Venus" };
        Array.Sort(arr10);
        Array.Reverse(arr10);
        Console.WriteLine("题10: " + string.Join(", ", arr10));
    }
}
```


## 数组方法参考答案

```c#
// ✅ 基础题（1~15）
using System;
using System.Linq;

class BasicExercises
{
    static void Main()
    {
        // 1. Sort
        int[] arr1 = { 4, 2, 9, 1 };
        Array.Sort(arr1);

        // 2. Reverse
        string[] arr2 = { "apple", "banana", "cherry" };
        Array.Reverse(arr2);

        // 3. IndexOf
        int[] arr3 = { 3, 5, 10, 7, 10 };
        int idx1 = Array.IndexOf(arr3, 10);

        // 4. LastIndexOf
        int idx2 = Array.LastIndexOf(arr3, 10);

        // 5. Exists
        int[] arr4 = { 2, 4, 6, 8 };
        bool exists1 = Array.Exists(arr4, n => n > 5);

        // 6. Find
        int[] arr5 = { 1, 3, 5, 7, 9 };
        int firstGreater4 = Array.Find(arr5, n => n > 4);

        // 7. FindAll
        int[] arr6 = { 10, 20, 30, 25, 15 };
        int[] filtered = Array.FindAll(arr6, n => n >= 20);

        // 8. TrueForAll
        bool allEven = Array.TrueForAll(arr4, n => n % 2 == 0);

        // 9. IndexOf not found
        int idx3 = Array.IndexOf(arr5, 99); // -1

        // 10. Reverse array
        int[] arr7 = { 1, 2, 3, 4, 5 };
        Array.Reverse(arr7);

        // 11. Sort array
        int[] arr8 = { 5, 2, 9, 1, 3 };
        Array.Sort(arr8);

        // 12. Exists even
        bool hasEven = Array.Exists(arr5, n => n % 2 == 0);

        // 13. Find string length > 5
        string[] words = { "hi", "banana", "code", "carpet" };
        string longWord = Array.Find(words, s => s.Length > 5);

        // 14. FindAll startsWith 'a'
        string[] animals = { "dog", "cat", "elephant", "ant" };
        string[] aAnimals = Array.FindAll(animals, s => s.StartsWith("a"));

        // 15. TrueForAll divisible by 5
        int[] arr9 = { 10, 20, 30, 40 };
        bool allDiv5 = Array.TrueForAll(arr9, n => n % 5 == 0);
    }
}

// 🔷 中级题（16~30）
class IntermediateExercises
{
    static void Main()
    {
        // 16. Sort + Reverse (降序)
        int[] arr1 = { 7, 2, 9 };
        Array.Sort(arr1);
        Array.Reverse(arr1);

        // 17. IndexOf & LastIndexOf
        int[] arr2 = { 1, 3, 5, 3, 1 };
        int first3 = Array.IndexOf(arr2, 3);
        int last3 = Array.LastIndexOf(arr2, 3);

        // 18. Find divisible by 11
        int[] arr3 = { 11, 22, 33, 44 };
        int firstDiv11 = Array.Find(arr3, n => n % 11 == 0);

        // 19. FindAll divisible by 6
        int[] arr4 = { 3, 6, 9, 12 };
        int[] div6 = Array.FindAll(arr4, n => n % 6 == 0);

        // 20. All negative
        int[] arr5 = { -2, -4, -6, -8 };
        bool allNegative = Array.TrueForAll(arr5, n => n < 0);

        // 21. FindAll starts with 'a'
        string[] fruits = { "apple", "banana", "cherry", "apricot" };
        string[] startsA = Array.FindAll(fruits, f => f.StartsWith("a"));

        // 22. Check if sorted ascending
        int[] arr6 = { 1, 2, 3, 4 };
        int[] sorted = (int[])arr6.Clone();
        Array.Sort(sorted);
        bool isSorted = arr6.SequenceEqual(sorted);

        // 23. Find odd > 10
        int[] arr7 = { 3, 8, 11, 13 };
        int res1 = Array.Find(arr7, x => x % 2 == 1 && x > 10);

        // 24. Method return even numbers
        int[] EvenOnly(int[] input) => Array.FindAll(input, n => n % 2 == 0);

        // 25. Reverse and find original 2nd-last index
        int[] arr8 = { 1, 2, 3, 4, 5 };
        int original = arr8[arr8.Length - 2];
        Array.Reverse(arr8);
        int newIndex = Array.IndexOf(arr8, original);

        // 26. Not found IndexOf
        int[] arr9 = { 2, 4, 6, 8 };
        int idx = Array.IndexOf(arr9, 7); // -1

        // 27. Check descending after reverse
        int[] arr10 = { 100, 90, 80, 70, 60 };
        Array.Reverse(arr10);
        bool isDesc = arr10.SequenceEqual(arr10.OrderByDescending(x => x).ToArray());

        // 28. Exists empty string
        string[] strArr = { "hello", "", "world" };
        bool hasEmpty = Array.Exists(strArr, s => s == "");

        // 29. All strings length > 0
        bool allNonEmpty = Array.TrueForAll(strArr, s => s.Length > 0);

        // 30. FindAll: %3==0 and %5!=0
        int[] arr11 = { 3, 5, 6, 9, 10, 12, 15 };
        int[] res2 = Array.FindAll(arr11, x => x % 3 == 0 && x % 5 != 0);
    }
}


```