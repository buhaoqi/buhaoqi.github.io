---
title: 任务三 数组的遍历
description: 算法与程序设计《C#》项目六 数组 任务三 数组的遍历知识点总结。介绍foreach语句遍历数组的语法格式、使用方法，以及与for循环遍历数组的对比，含完整代码示例。
keywords: [C#, 数组遍历, foreach, 迭代变量, 集合, for循环, 对口升学]
sidebar_label: 任务三 数组的遍历
sidebar_position: 3
slug: /csharp/proj6/task3-array-traversal
tags: [C#, 项目六, 任务三, 对口升学]
---

## 知识点

### 1.什么是foreach语句？

除了使用 `for` 循环输出数组的元素外，C#中还提供了 `foreach` 语句，该语句用来遍历集合中的每个元素。数组属于集合类型，因此 `foreach` 语句可以遍历数组。

### 2.foreach语句的语法格式是什么？

```csharp
foreach (类型 迭代变量名 in 集合表达式)
{
    // 循环体
}
```

参数说明：
- **类型**：集合中元素的数据类型
- **迭代变量名**：临时变量，用于接收当前遍历到的元素
- **集合表达式**：要遍历的数组或集合

### 3.foreach遍历数组的示例

定义一个字符串数组，存储进销存管理系统的主要功能模块，使用 `foreach` 语句遍历并输出：

```csharp
static void Main(string[] args)
{
    string[] strnames = { "进货管理", "销售管理", "库存管理", "系统管理" };
    foreach (string str in strnames)
    {
        Console.Write(str + " ");    //输出遍历到的数组元素
    }
    Console.ReadLine();
}
```

**运行结果：**

```
进货管理 销售管理 库存管理 系统管理
```

### 4.foreach与for循环遍历数组的对比

| 特性 | for循环 | foreach语句 |
|---|---|---|
| 语法复杂度 | 需要索引变量、条件判断、递增 | 语法简洁，自动迭代 |
| 访问方式 | 通过索引访问 `arr[i]` | 直接获取元素值 |
| 修改元素 | 可以修改 `arr[i]` 的值 | 不能修改元素（只读） |
| 反向遍历 | 可以反向遍历 | 只能正向遍历 |
| 使用场景 | 需要索引或修改元素时 | 只需遍历读取元素时 |
