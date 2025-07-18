---
noteId: "1f9c6f3062af11f0a138bb2f2278db69"
tags: []

---

大家好！欢迎回来《C#入门教程》第10课！

前一课，我们学会了数组的基本用法。

今天，我们来实战练习一下数组常用的几个操作：

> ✅ 求和、查找、排序、判断……
> 这些方法让你真正能“玩转数据”！

---

## 一、数组求和

目标：把一个数组中的所有元素加在一起。

### ✅ 示例代码：

```csharp
int[] nums = { 5, 10, 15 };
int sum = 0;

foreach (int n in nums)
{
    sum += n;
}
Console.WriteLine("总和是：" + sum);
```

---

## 二、查找最大值、最小值

```csharp
int[] nums = { 12, 6, 88, 33 };
int max = nums[0];

foreach (int n in nums)
{
    if (n > max)
    {
        max = n;
    }
}
Console.WriteLine("最大值是：" + max);
```

要找最小值？只需要把 `>` 改成 `<`。

---

## 三、查找某个值是否存在

比如：查找数组中是否有 99。

```csharp
int[] nums = { 1, 3, 5, 7 };
bool found = false;

foreach (int n in nums)
{
    if (n == 99)
    {
        found = true;
        break;
    }
}
Console.WriteLine(found ? "找到了！" : "没找到！");
```

---

## 四、C# 提供的常用数组方法（Array 类）

### ✅ 1）排序 `Array.Sort()`

```csharp
int[] nums = { 8, 2, 5, 1 };
Array.Sort(nums); // 升序排列
```

结果变成：`{1, 2, 5, 8}`

---

### ✅ 2）反转 `Array.Reverse()`

```csharp
Array.Reverse(nums); // 倒过来
```

---

### ✅ 3）查找 `Array.IndexOf()`

```csharp
int pos = Array.IndexOf(nums, 5);
Console.WriteLine("5的位置是：" + pos);
```

如果找不到，返回 `-1`

---

### ✅ 4）判断是否存在 `Array.Exists()`

```csharp
bool exists = Array.Exists(nums, n => n == 2);
Console.WriteLine(exists); // true
```

`n => n == 2` 是一个 Lambda 表达式（后面会专门讲）

---

## 五、遍历 + 条件操作（筛选）

### ✅ 找出所有大于10的元素

```csharp
int[] nums = { 5, 12, 8, 20, 3 };

foreach (int n in nums)
{
    if (n > 10)
    {
        Console.WriteLine(n);
    }
}
```

---

## 六、拓展：二维数组（提前了解）

```csharp
int[,] matrix = {
    {1, 2},
    {3, 4}
};
Console.WriteLine(matrix[1, 0]); // 输出3
```

二维数组就像“表格”，以后你会经常用到！

---

## ✅ 总结时间！

| 功能     | 方法或技巧                         |
| ------ | ----------------------------- |
| 求和     | 遍历 + 累加                       |
| 最大/最小值 | 遍历 + 比较                       |
| 查找元素   | `Array.IndexOf()` 或 `foreach` |
| 排序     | `Array.Sort()`                |
| 反转     | `Array.Reverse()`             |
| 是否存在   | `Array.Exists()`              |
| 条件筛选   | 用 `if` 搭配 `foreach`           |

---

这节课你学会了数组在实际开发中的多种操作方式，

下一节，我们将一起挑战：

> ✅ **使用数组做一个简单的学生成绩管理系统！**

**Day11：项目实战 - 成绩管理系统（控制台）**

我是不好奇，我们下课见！

---