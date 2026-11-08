---
title: 任务三 循环结构语句
description: 算法与程序设计《C#》项目四 C#的控制结构 任务三 循环结构语句知识点总结。介绍for语句（含5种省略表达式的深入应用）、while语句（先判断后执行）、do...while语句（先执行后判断）的语法格式、执行流程和代码示例，含累加求和与反向输出整数实例。
keywords: [C#, 循环结构, for语句, while语句, do...while, 循环变量, 条件表达式, 累加求和, 辗转相除法, 反向输出, 对口升学]
sidebar_label: 任务三 循环结构语句
sidebar_position: 3
slug: /csharp/proj4/task3-loop-structure
tags: [C#, 项目四, 任务三, 对口升学]
---

## 知识点

### 1.什么是循环结构？

循环语句是重复多次处理语句或执行代码的结构。当条件为true，程序开始进入循环，每执行一次就会判断一次条件，当条件为false时，不再执行循环，继续执行循环语句后面的程序代码。

C#提供了三种循环结构语句：`for`语句、`while`语句和 `do...while` 语句。它们可以完成类似的功能，但控制结构的方式不同。

### 子任务一 for语句

### 2.for语句的语法格式是什么？

```
for (初始化; 判断语句; 循环变量)
    语句
```

- **初始化**：用于对变量进行初始化或赋值
- **判断语句**：条件或逻辑表达式，为true时执行循环，为false时结束跳出循环
- **循环变量**：在循环结束后一般用于改变控制循环的变量

### 3.for循环的执行过程是什么？

1. 进行初始化
2. 计算判断语句的值：若为true，执行循环；若为false，不执行循环
3. 改变循环变量，再继续执行步骤2的判断语句

> 注意：for循环内定义的变量，其作用域仅限于该for语句中，跳出for循环该变量失效。

### 4.for语句有哪些深入应用（省略表达式）？

**（1）省略表达式1**（应在for语句之前给循环变量赋初值，分号不能省略）：

```csharp
for (; i <= 100; i++) { ... }
```

**（2）省略表达式2**（没有判断条件，编译系统默认为真，循环将无条件执行，需要在循环体中设置条件控制）：

```csharp
for (i = 1; ; i++) { if (i > 100) break; sum = sum + i; }
```

**（3）省略表达式3**（需要在循环体中改变循环变量）：

```csharp
for (i = 1; i <= 100; )
{
    sum = sum + i;
    i++;        // 循环变量增加1
}
```

**（4）省略表达式1和表达式3**（只给循环条件）：

```csharp
int i = 1, sum = 0;
for (; i <= 100; )
    sum = sum + i++;
```

**（5）三个表达式都省略** `for (;;)`（不设初值、没有判断条件、循环变量不增值，无终止执行循环体）：

```csharp
int i = 1, sum = 0;
for (;;)
{
    if (i > 100) break;
    sum = sum + i++;
}
```

### 5.【示例】求n个数累加的和

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _4_3_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("请输入数字n: ");
            int n = int.Parse(Console.ReadLine());
            int i = 1, s = 0;
            for (; i <= n; i++)
            {
                s = s + i;
            }
            Console.WriteLine("1+2+···+{0}的和为：{1}。", n, s);
            Console.ReadKey();
        }
    }
}
```

> 以n=5为例，运行结果：`1+2+···+5的和为：15。`

### 子任务二 while语句

### 6.while语句的语法格式是什么？

```
while (条件表达式)
    语句
```

### 7.while语句的执行流程是什么？

属于**先判断后执行**的循环结构：
1. 当条件表达式的结果为true，进入循环，执行while后的语句
2. 每执行一次，计算一次条件表达式
3. 直到条件表达式结果为false，停止执行，跳出while循环

### 8.【示例】反向输出用户输入的整数

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _4_3_2
{
    class Program
    {
        static void Main(string[] args)
        {
            int m, n;
            Console.Write("输入一个整数: ");
            n = int.Parse(Console.ReadLine());
            Console.Write("反向显示结果: ");
            while (n != 0)
            {
                m = n % 10;        // 依次求个位、十位、… 上的数字m
                n = n / 10;
                Console.Write(m);
            }
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
```

> 以输入123456789为例，反向输出显示为987654321。

### 子任务三 do...while语句

### 9.do...while语句的语法格式是什么？

```
do
    语句
while (条件表达式);
```

### 10.do...while语句的执行流程是什么？

属于**先执行后判断**的循环结构：
1. 先执行一次语句
2. 然后计算while后的条件表达式
3. 若结果为true，进入循环，继续执行语句
4. 若结果为false，结束循环，直接跳出

> 注意：do...while循环至少执行一次循环体。

### 11.【示例】用do...while反向输出整数

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _4_3_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int m, n;
            Console.Write("请输入一个整数：");
            n = int.Parse(Console.ReadLine());
            Console.Write("反向显示结果：");
            do
            {
                m = n % 10;
                n = n / 10;
                Console.Write(m);
            } while (n != 0);
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
```

> 以输入12345为例，输出显示结果为54321。

### 12.while和do...while的区别是什么？

| 特性 | while | do...while |
|---|---|---|
| 执行顺序 | 先判断后执行 | 先执行后判断 |
| 最少执行次数 | 0次（条件为false时不执行） | 1次（至少执行一次循环体） |
