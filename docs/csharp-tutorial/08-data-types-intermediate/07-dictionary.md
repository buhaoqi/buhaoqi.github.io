---
noteId: "b4db5920682811f0b38abb3f8df447a5"
tags: []

---


## 🎙️Day17：Dictionary 字典的使用与实战

大家好，欢迎来到《C#入门教程》第17课。

今天我们要学习的是一个非常实用的集合类型：**Dictionary（字典）**。
它允许你通过“键”来快速查找“值”——就像查字典一样方便！

---

## 一、什么是 Dictionary？

Dictionary 是一种 **键值对（Key → Value）** 的集合。

* 键（Key）是唯一的；
* 值（Value）可以重复。

使用前，需引入命名空间：

```csharp
using System.Collections.Generic;
```

---

## 二、声明和初始化 Dictionary

```csharp
Dictionary<string, int> scores = new Dictionary<string, int>();
```

添加数据：

```csharp
scores.Add("小明", 90);
scores.Add("小红", 85);
scores.Add("小刚", 100);
```

---

## 三、常用方法一览

| 方法 / 属性                | 功能说明    |
| ---------------------- | ------- |
| `Add(key, value)`      | 添加键值对   |
| `Remove(key)`          | 删除某个键   |
| `ContainsKey(key)`     | 是否包含某个键 |
| `ContainsValue(value)` | 是否包含某个值 |
| `Count`                | 元素个数    |
| `Clear()`              | 清空全部元素  |

---

## 四、访问与遍历

访问单个元素：

```csharp
Console.WriteLine(scores["小刚"]);  // 输出 100
```

遍历所有键值对：

```csharp
foreach (KeyValuePair<string, int> pair in scores)
{
    Console.WriteLine(pair.Key + " 的成绩是 " + pair.Value);
}
```

或者使用解构写法：

```csharp
foreach (var (name, grade) in scores)
{
    Console.WriteLine(name + "：" + grade);
}
```

---

## 五、实战案例：学生成绩管理系统（简易版）

```csharp
Dictionary<string, int> grades = new Dictionary<string, int>();

while (true)
{
    Console.Write("请输入学生姓名（输入end结束）：");
    string name = Console.ReadLine();

    if (name == "end") break;

    Console.Write("请输入 " + name + " 的成绩：");
    int score = int.Parse(Console.ReadLine());

    grades[name] = score;  // 自动添加或更新
}

Console.WriteLine("\n成绩汇总：");
foreach (var (name, score) in grades)
{
    Console.WriteLine(name + "：" + score);
}
```

---

## 六、判断与删除

```csharp
if (grades.ContainsKey("小明"))
{
    grades.Remove("小明");
    Console.WriteLine("已删除小明的成绩");
}
```

---

## ✅ 小练习题（视频结尾引导）

**题目：**

1. 让用户输入 5 位同学的“姓名”和“成绩”；
2. 用户可输入一个姓名，查询该同学是否存在，并输出成绩；
3. 如果不存在，输出提示信息。

---

## 📌 总结

| 技术点                  | 功能说明         |
| -------------------- | ------------ |
| Dictionary\<k, v>    | 创建键值对集合      |
| Add / Remove / Count | 增删查基础操作      |
| ContainsKey / Value  | 判断是否存在       |
| 遍历字典                 | foreach 循环方式 |

---
