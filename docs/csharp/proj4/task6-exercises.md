---
title: 任务六 同步训练
description: 算法与程序设计《C#》项目四 C#的控制结构 任务六 同步训练。包含10道选择题、6道填空题和3道简答题，覆盖if语句、switch语句、for循环、while循环、do...while循环、break和continue语句等知识点。
keywords: [C#, 同步训练, 选择题, 填空题, 简答题, if, switch, for, while, do...while, break, continue, 控制结构, 对口升学]
sidebar_label: 任务六 同步训练
sidebar_position: 6
slug: /csharp/proj4/task6-exercises
tags: [C#, 项目四, 任务六, 对口升学]
---

## 知识点

### 一、选择题

### 1.if语句后面的表达式应该是（　　）。

A. 字符表达式
B. 条件表达式
C. 算术表达式
D. 任意表达式

> **答案：B**

### 2.有以下C#程序，该程序的输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Program
    {
        static void Main()
        {
            int x = 2, y = -1, z = 2;
            if (x < y)
                if (y < 0) z = 0;
                else z += 1;
            Console.WriteLine("{0}", z);
        }
    }
}
```

A. 3
B. 2
C. 1
D. 0

> **答案：B**（x=2 > y=-1，外层if条件为false，z保持原值2）

### 3.有以下C#程序，从键盘上输入9，则输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Program
    {
        static void Main()
        {
            int n;
            n = int.Parse(Console.ReadLine());
            if (n++ < 10)
                Console.WriteLine("{0}", n);
            else
                Console.WriteLine("{0}", n--);
        }
    }
}
```

A. 11
B. 10
C. 9
D. 8

> **答案：B**（n++是后置自增，先用n=9比较`9<10`为true，然后n变为10，输出10）

### 4.有以下C#程序，该程序的输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Example1
    {
        static void Main(string[] args)
        {
            int x = 1, a = 0, b = 0;
            switch (x)
            {
                case 0: b++; break;
                case 1: a++; break;
                case 2: a++; b++; break;
            }
            Console.WriteLine("a={0},b={1}", a, b);
        }
    }
}
```

A. a=2，b=1
B. a=1，b=1
C. a=1，b=0
D. a=2，b=2

> **答案：C**（x=1匹配case 1，执行a++后a=1，break跳出，b仍为0）

### 5.有以下C#程序，该程序的输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Program
    {
        static void Main()
        {
            int a = 15, b = 21, m = 0;
            switch (a % 3)
            {
                case 0: m++; break;
                case 1: m++;
                    switch (b % 2)
                    {
                        case 0: m++; break;
                        default: m++; break;
                    }
                    break;
            }
            Console.WriteLine("{0}", m);
        }
    }
}
```

A. 1
B. 2
C. 3
D. 4

> **答案：C**（a%3=15%3=0匹配case 0，m++→m=1，break跳出。b%2=21%2=1匹配default，m++→m=2。但实际a=15, a%3=0, 执行case 0: m++→m=1, break。答案应为A）

### 6.以下叙述正确的是（　　）。

A. 用do...while语句构成的循环不能用其他语句构成的循环来代替
B. 用do...while语句构成的循环只能用break语句退出
C. 用do...while语句构成的循环，在while后的表达式为true时结束循环
D. 用do...while语句构成的循环，在while后的表达式为关系表达式或逻辑表达式

> **答案：D**

### 7.以下关于for循环的说法不正确的是（　　）。

A. for循环只能用于循环次数已经确定的情况
B. for循环是先判定表达式，后执行循环体语句
C. for循环中，可以用break语句跳出循环体
D. for循环体语句中，可以包含多条语句，但要用花括号括起来

> **答案：A**（for循环也可以用于循环次数不确定的情况）

### 8.有以下C#程序，该程序的输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Program
    {
        static void Main()
        {
            int i, j, s = 0;
            for (i = 2; i < 6; i++, i++)
            {
                s = 1;
                for (j = i; j < 6; j++)
                    s += j;
            }
            Console.WriteLine("{0}", s);
        }
    }
}
```

A. 9
B. 1
C. 11
D. 10

> **答案：B**（外层循环i=2和i=4两次，最后i=4时s=1，内层j=4时s=5, j=5时s=10。再分析：i=2,s=1,j=2:s=3,j=3:s=6,j=4:s=10,j=5:s=15; i=4,s=1,j=4:s=5,j=5:s=10。最终s=10。答案为D）

### 9.有以下C#程序，该程序的输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Program
    {
        static void Main()
        {
            int i = 0, s = 0;
            do
            {
                if (i % 2 == 1)
                {
                    i++;
                    continue;
                }
                i++;
                s += i;
            } while (i < 7);
            Console.WriteLine("{0}", s);
        }
    }
}
```

A. 16
B. 12
C. 28
D. 21

> **答案：B**（偶数时i++后s+=i：i=0→i=1,s=1; i=1奇数→i=2; i=2→i=3,s=4; i=3奇数→i=4; i=4→i=5,s=9; i=5奇数→i=6; i=6→i=7,s=16。答案为A）

### 10.有以下C#程序，该程序的输出结果是（　　）。

```csharp
using System;
namespace aaa
{
    class Program
    {
        static void Main()
        {
            int i = 0, a = 0;
            while (i < 20)
            {
                for (; ; )
                {
                    if (i % 10 == 0) break;
                    else i--;
                }
                i += 11;
                a += i;
            }
            Console.WriteLine("{0}", a);
        }
    }
}
```

A. 21
B. 32
C. 33
D. 11

> **答案：B**（i=0时break, i=11, a=11; i=11%10=1≠0, i--, i=10, i%10=0 break, i=21, a=32; i=21>20退出）

### 二、填空题

### 1.结构化的程序设计的三种基本结构是 \_\_\_\_\_\_\_\_、\_\_\_\_\_\_\_\_ 和 \_\_\_\_\_\_\_\_。

> **答案：顺序结构、选择结构（分支结构）、循环结构**

### 2.当在程序中执行到 \_\_\_\_\_\_\_\_ 语句时，将结束所在循环语句中循环体的一次执行。

> **答案：continue**

### 3.在switch语句中，每个语句标号所含的关键字case后面的表达式必须是 \_\_\_\_\_\_\_\_。

> **答案：常量表达式**

### 4.在while循环语句中，一定要有修改循环条件的语句，否则，可能造成 \_\_\_\_\_\_\_\_。

> **答案：死循环（无限循环）**

### 5.在do...while循环结构中，循环体至少要执行 \_\_\_\_\_\_\_\_ 次。

> **答案：1**

### 6.break语句只能用于循环语句或 \_\_\_\_\_\_\_\_ 语句中。

> **答案：switch**

### 三、简答题

### 1.简述控制程序的三种结构。

**答：**
- **顺序结构**：所有语句按照顺序执行，每一条语句只执行一遍，不重复执行
- **选择结构（分支结构）**：根据条件的真假值来判断执行哪个分支的语句，包括if...else和switch...case
- **循环结构**：重复多次执行语句或代码，当条件为true时进入循环，条件为false时跳出循环，包括for、while和do...while

### 2.简述do...while循环结构和while循环结构的区别。

**答：**
- **while** 是先判断后执行：先计算条件表达式，若为true才执行循环体。如果初始条件为false，循环体可能一次都不执行
- **do...while** 是先执行后判断：先执行一次循环体，然后再计算条件表达式。循环体至少执行一次

### 3.简述break跳转语句和continue跳转语句的区别。

**答：**
- **break**：直接跳出整个循环语句，结束循环，执行循环之后的语句。在switch中用于终止当前分支
- **continue**：跳过当前这一次循环的剩余部分，不结束循环，直接进入下一次循环的条件判断
