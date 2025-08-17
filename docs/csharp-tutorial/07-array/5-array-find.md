---
noteId: "b1a0a1c07b0611f09e8c4908c81f2975"
tags: []

---


## `Array.Find()`|`Array.FindAll()` 

用途：查找第一个 / 所有符合条件的元素

```csharp
int firstEven = Array.Find(numbers, x => x % 2 == 0);
int[] evens = Array.FindAll(numbers, x => x % 2 == 0);
```

------