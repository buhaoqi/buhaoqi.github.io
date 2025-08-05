---
noteId: "1aaaf6c0674d11f0b0d6278e683d20b1"
tags: []

---

## 一、什么是数组？

数组（Array）就是：**一组相同类型数据的集合**，它的作用是：**用一个变量，保存多个数据。**

比如你有 5 个学生的成绩：

```csharp
int score1 = 90;
int score2 = 85;
int score3 = 70;
int score4 = 100;
int score5 = 65;
```

这样写太麻烦了！我们可以用数组：

```csharp
int[] scores = { 90, 85, 70, 100, 65 };
```

---

## 二、数组的创建方式

### ✅ 方式一：直接赋值

```csharp
int[] nums = { 1, 2, 3, 4, 5 };
```

### ✅ 方式二：先声明，后赋值

```csharp
int[] ages = new int[3];
ages[0] = 18;
ages[1] = 20;
ages[2] = 22;
```

---

## 三、数组访问与修改

数组的索引从 **0 开始**！

```csharp
Console.WriteLine(ages[1]);   // 输出：20

ages[2] = 25;                 // 修改第3个元素为25
```

---

## 四、数组的长度

```csharp
int len = ages.Length;
Console.WriteLine("数组长度：" + len);
```

---

## 五、数组的遍历

### ✅ 使用 for 循环：

```csharp
for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine($"第{i + 1}个成绩是：{scores[i]}");
}
```

### ✅ 使用 foreach 循环（更简洁）：

```csharp
foreach (int s in scores)
{
    Console.WriteLine("成绩：" + s);
}
```

---

## 六、实战练习：求数组中所有元素的平均值

```csharp
int[] numbers = { 80, 90, 100, 70, 60 };
int sum = 0;

foreach (int n in numbers)
{
    sum += n;
}

double average = (double)sum / numbers.Length;
Console.WriteLine("平均成绩是：" + average);
```

---

## ✅ 总结

| 概念   | 内容                    |
| ---- | --------------------- |
| 声明数组 | `int[] arr = {1,2,3}` |
| 获取长度 | `arr.Length`          |
| 遍历数组 | `for` 或 `foreach`     |
| 索引访问 | `arr[0]`, `arr[1]`... |
| 修改值  | `arr[2] = 88;`        |

---

## 💡 小提示

数组的长度是固定的，一旦定义，不能增加或减少。如果你需要动态增删元素，后面会学到 `List`。

---

下一节，我们将深入了解数组的**常用方法（如排序、查找等）**，为项目实战打基础！

欢迎点赞、收藏并关注我，
我是不好奇，我们下课见！

---