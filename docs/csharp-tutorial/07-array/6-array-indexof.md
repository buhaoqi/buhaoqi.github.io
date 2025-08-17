---
noteId: "932dadf07b0611f09e8c4908c81f2975"
tags: []

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
