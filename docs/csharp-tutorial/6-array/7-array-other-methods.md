---
noteId: "65fb97607b0711f09e8c4908c81f2975"
tags: []

---



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