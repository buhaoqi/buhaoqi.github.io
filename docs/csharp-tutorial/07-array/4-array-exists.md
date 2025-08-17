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