---
noteId: "ae270a20682811f0b38abb3f8df447a5"
tags: []

---




## 🎙️Day16：List 列表的使用与实战

大家好，欢迎来到《C#入门教程》第16课。

今天我们要学习的主题是：**List 列表的使用与实战**。

这是一个比数组更灵活、更常用的数据结构，非常适合处理不定数量的数据。

---

## 一、什么是 List？

在 C# 中，数组的长度是固定的；而 **List<T>** 是一种**动态集合**，可以随时添加、删除元素。

要使用它，我们需要在文件开头加上这句：

```csharp
using System.Collections.Generic;
```

---

## 二、声明和初始化 List

```csharp
List<int> scores = new List<int>();  // 创建一个整数列表
scores.Add(90);
scores.Add(85);
scores.Add(100);
```

> `Add()` 用于向列表中添加元素。

---

## 三、常用操作方法

| 方法             | 作用         |
| -------------- | ---------- |
| `Add(item)`    | 添加元素       |
| `Remove(item)` | 删除指定元素     |
| `Count`        | 获取元素数量     |
| `Clear()`      | 清空列表       |
| `Contains()`   | 判断是否包含某个元素 |
| `Sort()`       | 排序         |

---

## 四、遍历 List

```csharp
foreach (int score in scores)
{
    Console.WriteLine(score);
}
```

---

## 五、实战：录入学生成绩，求平均分

```csharp
List<int> grades = new List<int>();

Console.WriteLine("请输入5个学生成绩：");

for (int i = 0; i < 5; i++)
{
    Console.Write("第 " + (i + 1) + " 个成绩：");
    int grade = int.Parse(Console.ReadLine());
    grades.Add(grade);
}

int sum = 0;
foreach (int g in grades)
{
    sum += g;
}

Console.WriteLine("平均成绩为：" + (sum / grades.Count));
```

---

## 六、List 的排序和查找

```csharp
grades.Sort();  // 正序排序
Console.WriteLine("最高分：" + grades[grades.Count - 1]);
Console.WriteLine("最低分：" + grades[0]);
```

```csharp
if (grades.Contains(100))
{
    Console.WriteLine("有人考了满分！");
}
```

---

## 七、List 与字符串结合：拆分数字字符串

```csharp
string input = "12,45,78,3";
string[] arr = input.Split(',');

List<int> numbers = new List<int>();
foreach (string s in arr)
{
    numbers.Add(int.Parse(s));
}

Console.WriteLine("共有数字：" + numbers.Count);
```

---

## ✅ 小练习题（视频结尾引导）

**题目：**

* 让用户不断输入名字，直到输入 “end” 停止。
* 然后输出所有名字，并显示一共有多少人。

提示：使用 `List<string>` + `while` + `Add`。

---

## 📌 总结

| 技术点          | 功能说明      |
| ------------ | --------- |
| List<T>      | 动态数据集合    |
| Add / Remove | 增删元素      |
| Count        | 获取元素数量    |
| Sort         | 排序        |
| Contains     | 判断是否存在某元素 |

---

## 🔮 预告：Day17

下一节我们将学习更强大的集合类型：**Dictionary（字典）**，它可以让你用“键值对”来保存数据，例如：“姓名 → 成绩”。

---

如果你还需要继续准备 **Day17：字典 Dictionary 的使用与实战**，请回复 **需要**，我会立刻帮你整理脚本！

好的！下面是 **Day17：Dictionary 字典的使用与实战** 的 C# 入门教学脚本草案，适用于课程视频讲解：

---
