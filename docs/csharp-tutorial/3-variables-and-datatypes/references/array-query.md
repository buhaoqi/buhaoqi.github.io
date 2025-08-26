---
noteId: "abe2c0b07b0611f09e8c4908c81f2975"
tags: []

---

## `Array.Exists()` 

用途：判断是否存在某元素满足条件

```csharp
bool hasEven = Array.Exists(numbers, x => x % 2 == 0);
// 检查是否有偶数
```

------

判断是否存在 `Array.Exists()`

```csharp
bool exists = Array.Exists(nums, n => n == 2);
Console.WriteLine(exists); // true
```

`n => n == 2` 是一个 Lambda 表达式（后面会专门讲）

---


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


3）查找 `Array.IndexOf()`

```csharp
int pos = Array.IndexOf(nums, 5);
Console.WriteLine("5的位置是：" + pos);
```

## `Array.Find()`|`Array.FindAll()` 

用途：查找第一个 / 所有符合条件的元素

```csharp
int firstEven = Array.Find(numbers, x => x % 2 == 0);
int[] evens = Array.FindAll(numbers, x => x % 2 == 0);
```

------