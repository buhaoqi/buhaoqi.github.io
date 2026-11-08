---
title: 任务四 跳转语句
description: 算法与程序设计《C#》项目四 C#的控制结构 任务四 跳转语句知识点总结。介绍break语句（跳出整个循环）和continue语句（跳过当前循环，继续下一次循环）的使用方法和区别，含完整代码示例。
keywords: [C#, 跳转语句, break, continue, 跳出循环, 跳过循环, 循环控制, 对口升学]
sidebar_label: 任务四 跳转语句
sidebar_position: 4
slug: /csharp/proj4/task4-jump-statements
tags: [C#, 项目四, 任务四, 对口升学]
---

## 知识点

### 1.什么是跳转语句？

除了顺序执行、条件选择和循环结构外，有时候也需要中断某个程序的运行，跳转到其他地方继续执行，这时就需要用到跳转语句。C#中常见的跳转语句有：

- **break** 语句
- **continue** 语句

### 子任务一 break语句

### 2.break语句的作用是什么？

break语句使程序从当前的循环结构（do、while和for）内跳出来，接着执行循环语句后面的语句。

> 在嵌套循环中，break语句仅终止包含它的**最内部循环**。
>
> 在switch...case语句中，break表示终止当前switch语句的执行，接着运行switch语句后面的语句。

### 3.【示例】输出1~9的数字，到5时跳出循环

```csharp
static void Main(string[] args)
{
    for (int i = 1; i <= 9; i++)
    {
        if (i == 5)
        {
            break;
        }
        Console.Write("{0}", i);
    }
    Console.ReadLine();
    Console.ReadKey();
}
```

> 运行结果：`1234`（输出到4后遇到5，执行break跳出循环）

### 子任务二 continue语句

### 4.continue语句的作用是什么？

continue语句也是用于跳出循环，但和break语句不同的是：

- **break**：直接跳出循环语句，**结束循环**，执行该循环之后的语句
- **continue**：跳出**当前循环**，并不结束循环，跳出后重新执行**下一次的循环**

### 5.continue语句的使用注意事项

1. continue语句必须在循环语句中使用
2. 在while和do...while循环中，continue直接跳出循环，转至条件判断语句
3. 在for循环中，continue跳出循环，转去执行循环变量更新表达式

### 6.【示例】输出1~10的数，不输出4

```csharp
static void Main(string[] args)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i == 4)
        {
            continue;
        }
        Console.WriteLine(i);
    }
    Console.ReadKey();
}
```

> 运行结果：输出1、2、3、5、6、7、8、9、10（跳过了4）

### 7.break和continue的区别总结

| 特性 | break | continue |
|---|---|---|
| 作用 | 跳出整个循环 | 跳过当前这一次循环 |
| 循环是否继续 | 否，循环结束 | 是，继续下一次循环 |
| 适用场景 | 满足条件时提前结束循环 | 跳过某些不需要处理的循环 |
| 在switch中 | 终止当前switch分支 | 不适用于switch |
