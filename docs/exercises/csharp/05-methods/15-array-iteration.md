---
noteId: "74246e4079ed11f096197f4ef3b2c3fb"
tags: []

---

当然！以下是 **10 道关于 C# 遍历数组（Array Traversal）的基础语法练习题**，涵盖：

- ✅ **数组的基本定义与初始化**
- ✅ **使用 `for` 循环遍历数组**
- ✅ **使用 `foreach` 循环遍历数组**
- ✅ **遍历时访问索引与元素**
- ✅ **基础操作：打印、求和、查找、统计等**

这些题目非常适合用来**掌握 C# 中数组遍历的基础语法与常见操作**，适合初学者巩固数组和循环的知识点。

---

## 🎯 一、什么是数组遍历？

**数组遍历（Array Traversal）** 就是**逐个访问数组中的每一个元素**，通常使用循环语句如：

- `for` 循环（可访问索引）
- `foreach` 循环（只读访问元素，不能修改原数组）

---

# ✅ 练习题 1：使用 for 循环打印数组所有元素

### 题目：
定义一个整型数组 `int[] numbers = { 10, 20, 30, 40, 50 };`，使用 `for` 循环遍历该数组，并打印出每个元素的值。

---

### 示例代码：
```csharp
int[] numbers = { 10, 20, 30, 40, 50 };
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

---

# ✅ 练习题 2：使用 foreach 循环打印数组所有元素

### 题目：
使用 `foreach` 循环遍历上述数组 `numbers`，打印每个元素。

---

### 示例代码：
```csharp
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

---

# ✅ 练习题 3：计算整型数组所有元素的和

### 题目：
给定数组 `int[] nums = { 1, 2, 3, 4, 5 };`，使用循环遍历该数组，计算所有元素的总和并输出。

---

### 示例代码：
```csharp
int[] nums = { 1, 2, 3, 4, 5 };
int sum = 0;
foreach (int num in nums)
{
    sum += num;
}
Console.WriteLine("总和为：" + sum); // 输出 15
```

---

# ✅ 练习题 4：找出数组中的最大值

### 题目：
给定整型数组 `int[] values = { 12, 45, 23, 67, 34 };`，遍历数组找出其中的最大值并输出。

---

### 示例代码：
```csharp
int[] values = { 12, 45, 23, 67, 34 };
int max = values[0];
foreach (int num in values)
{
    if (num > max)
        max = num;
}
Console.WriteLine("最大值是：" + max); // 67
```

---

# ✅ 练习题 5：统计数组中偶数的个数

### 题目：
给定数组 `int[] nums = { 1, 2, 3, 4, 5, 6 };`，遍历该数组，统计其中偶数的个数并输出。

---

### 示例代码：
```csharp
int[] nums = { 1, 2, 3, 4, 5, 6 };
int evenCount = 0;
foreach (int num in nums)
{
    if (num % 2 == 0)
        evenCount++;
}
Console.WriteLine("偶数个数：" + evenCount); // 3
```

---

# ✅ 练习题 6：反向遍历数组并打印元素（使用 for 循环）

### 题目：
给定数组 `int[] arr = { 10, 20, 30, 40 };`，使用 `for` 循环**从最后一个元素开始向前遍历**，并打印每个元素。

---

### 示例代码：
```csharp
int[] arr = { 10, 20, 30, 40 };
for (int i = arr.Length - 1; i >= 0; i--)
{
    Console.WriteLine(arr[i]);
}
```

---

# ✅ 练习题 7：将数组中的每个元素都乘以 2 并打印（修改原数组）

### 题目：
给定数组 `int[] numbers = { 1, 2, 3 };`，遍历该数组，将每个元素的值乘以 2，并打印修改后的数组。

> ✅ 可使用 `for` 循环通过索引直接修改原数组

---

### 示例代码：
```csharp
int[] numbers = { 1, 2, 3 };
for (int i = 0; i < numbers.Length; i++)
{
    numbers[i] *= 2;
    Console.WriteLine(numbers[i]); // 2, 4, 6
}
```

---

# ✅ 练习题 8：遍历字符串数组并拼接所有元素

### 题目：
给定字符串数组 `string[] words = { "Hello", "World", "CSharp" };`，遍历该数组，将所有字符串拼接成一个长字符串（用空格隔开），并输出结果。

---

### 示例代码：
```csharp
string[] words = { "Hello", "World", "CSharp" };
string result = "";
foreach (string word in words)
{
    result += word + " ";
}
Console.WriteLine(result.Trim()); // Hello World CSharp
```

---

# ✅ 练习题 9：查找数组中是否包含某个指定值（如数字 5）

### 题目：
给定整型数组 `int[] nums = { 1, 3, 5, 7, 9 };`，判断该数组中是否包含数字 `5`，并输出“包含”或“不包含”。

---

### 示例代码：
```csharp
int[] nums = { 1, 3, 5, 7, 9 };
int target = 5;
bool found = false;
foreach (int num in nums)
{
    if (num == target)
    {
        found = true;
        break;
    }
}
Console.WriteLine(found ? "包含" : "不包含"); // 包含
```

---

# ✅ 练习题 10：遍历二维数组（简单版：打印所有元素）

### 题目：
给定一个二维整型数组：

```csharp
int[,] matrix = {
    { 1, 2 },
    { 3, 4 },
    { 5, 6 }
};
```

使用嵌套循环遍历该二维数组，并打印出每一个元素。

---

### 示例代码：
```csharp
int[,] matrix = {
    { 1, 2 },
    { 3, 4 },
    { 5, 6 }
};

for (int i = 0; i < matrix.GetLength(0); i++)
{
    for (int j = 0; j < matrix.GetLength(1); j++)
    {
        Console.Write(matrix[i, j] + " ");
    }
    Console.WriteLine(); // 换行，美观
}
```

> 输出：
```
1 2
3 4
5 6
```

---

## 📚 总结表格：10道 C# 数组遍历基础练习题

| 题号 | 题目要点 | 使用循环类型 | 是否涉及索引 | 核心目标 |
|------|----------|--------------|---------------|-----------|
| 1 | 打印数组元素（for） | `for` | ✅ | 基础遍历 |
| 2 | 打印数组元素（foreach） | `foreach` | ❌ | 只读遍历 |
| 3 | 计算数组总和 | `foreach` 或 `for` | ✅ / ❌ | 累加操作 |
| 4 | 查找最大值 | `foreach` | ❌ | 比较逻辑 |
| 5 | 统计偶数个数 | `foreach` | ❌ | 条件统计 |
| 6 | 反向遍历数组 | `for` | ✅ | 倒序访问 |
| 7 | 元素修改（×2） | `for` | ✅ | 修改原数组 |
| 8 | 拼接字符串数组 | `foreach` | ❌ | 字符串处理 |
| 9 | 查找指定值 | `foreach` | ❌ | 存在性判断 |
| 10 | 遍历二维数组 | 嵌套 `for` | ✅ | 多维数据 |

---

## 🎁 想进一步挑战？

- ✅ **遍历并过滤出所有大于某值的元素**
- ✅ **将数组中的元素去重后输出**
- ✅ **对对象数组按某个属性排序或查找**
- ✅ **结合用户输入动态创建数组并遍历**
- ✅ **实现简易成绩统计、平均值、最高分等功能**

---

如你希望我为任意一题提供：

✅ 更详细的解题思路  
✅ 扩展为多维数组、对象数组、集合遍历  
✅ 图形界面或控制台菜单集成版本  
✅ 实际应用场景（如学生成绩、商品列表等）

欢迎继续提问！我可以为你定制更多练习与实战案例 😊。