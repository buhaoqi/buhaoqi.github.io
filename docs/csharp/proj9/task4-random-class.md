---
title: 任务四 Random类
description: 算法与程序设计《C#》项目九 C#常用类的属性和方法 任务四 Random类 知识点总结。掌握Random类的常见方法，产生随机小数或整数。
keywords: [C#, Random类, 随机数, Next, NextDouble, 对口升学]
sidebar_label: 任务四 Random类
sidebar_position: 4
slug: /csharp/proj9/task4-random-class
tags: [C#, 项目九, 任务四, 对口升学]
---

## 知识点

Random类提供了产生随机数的方法。随机数的生成是从种子（seed）值开始，如果反复使用同一个种子，就会生成相同的数字系列（称为伪随机数）。系统默认使种子值与时间相关，从而对于Random的每个新实例，都会产生不同的系列。

### 1. 随机对象的声明

产生随机数的方法必须由Random类创建的对象调用。可以使用如下语句声明：

```csharp
Random myRandom = new Random()
```

### 2. Random类的常见方法（表9-8）

| 方法 | 说明 |
|---|---|
| `Next()` | 产生非负随机整数 |
| `Next(非负整数)` | 产生大于等于0且小于指定非负整数（随机数上界）的非负随机数 |
| `Next(整数1, 整数2)` | 产生大于等于整数1且小于整数2的随机整数 |
| `NextDouble()` | 产生大于等于0.0且小于1.0的双精度浮点数 |

### 3. Next()方法

功能：产生非负随机整数。

语法：`myRandom.Next()`

说明：myRandom是使用 `Random myRandom = new Random()` 声明的随机对象。

示例：产生不限定范围的6个随机整数。
```csharp
static void Main(string[] args)
{
    Random Ra = new Random();
    for (int j = 0; j < 6; j++)
    {
        Console.WriteLine("{0} ", Ra.Next());
        Console.WriteLine();
    }
    Console.ReadLine();
}
```
运行结果（图9-28）：
```
929977421
11923989594
289362022
2035269986
737761069
971105455
```

### 4. Next(非负整数)方法

功能：产生大于等于0且小于指定非负整数（随机数上界）的非负随机数。

语法：`myRandom.Next(非负整数)`

说明：非负整数为产生随机数的上界（不包含该上界值）。

示例：产生0到100内的随机整数。
```csharp
static void Main(string[] args)
{
    Random Ra = new Random();
    for (int j = 0; j < 6; j++)
    {
        Console.Write("{0} ", Ra.Next(100));
    }
    Console.ReadLine();
}
```
运行结果（图9-29）：`97 49 4 90 37 29`

> **注意**：`Next(100)` 产生的随机数范围是 0~99，不包含100。

### 5. Next(整数1, 整数2)方法

功能：产生大于等于整数1且小于整数2的随机整数。

语法：`myRandom.Next(整数1, 整数2)`

说明：整数1为下界（包含），整数2为上界（不包含）。

示例：产生6个10到20内的随机整数。
```csharp
static void Main(string[] args)
{
    Random Ra = new Random();
    for (int j = 0; j < 6; j++)
    {
        Console.Write("{0} ", Ra.Next(10, 20));
    }
    Console.ReadLine();
}
```
运行结果（图9-30）：`13 14 11 19 17 15`

> **注意**：`Next(10, 20)` 产生的随机数范围是 10~19，不包含20。

### 6. NextDouble()方法

功能：产生大于等于0.0且小于1.0的双精度浮点数。

语法：`myRandom.NextDouble()`

示例：产生6个0到1之间的随机小数。
```csharp
static void Main(string[] args)
{
    Random Ra = new Random();
    for (int j = 0; j < 6; j++)
    {
        Console.Write("{0} ", Ra.NextDouble());
        Console.WriteLine();
    }
    Console.ReadLine();
}
```
运行结果（图9-31）：
```
0.180522586768736
0.00875111902540136
0.651557302405852
0.336381575714974
0.0570871234205957
0.174874348181707
```

### 7. Next方法三种重载对比

| 方法 | 返回范围 | 返回类型 | 示例 |
|---|---|---|---|
| `Next()` | 0 ~ int.MaxValue | int | 非负随机整数 |
| `Next(maxValue)` | 0 ~ maxValue-1 | int | `Next(100)` → 0~99 |
| `Next(minValue, maxValue)` | minValue ~ maxValue-1 | int | `Next(10, 20)` → 10~19 |
| `NextDouble()` | 0.0 ~ 0.999... | double | 0到1之间的随机小数 |

> **要点总结**：
> - 所有Next方法的**上界都是不包含**的（即取不到上界值）
> - `Next()` 无参版本返回任意非负整数
> - `Next(非负整数)` 上界为指定值
> - `Next(整数1, 整数2)` 可指定上下界范围
> - `NextDouble()` 专用于产生0~1之间的随机小数
> - Random类产生的是伪随机数，相同种子会产生相同序列
