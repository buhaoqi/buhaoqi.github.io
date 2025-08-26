---
noteId: "2dc4de5067df11f09287057f7c37db9f"
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