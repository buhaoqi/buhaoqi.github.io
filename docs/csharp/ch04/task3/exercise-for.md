---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 20  # 侧边栏中排在第1位
---


## 练习1：输出1,2,3

```csharp
for (int i = 1; i <= 3; i = i + 1) 
{
    Console.WriteLine(i);
}
```

## 练习2：输出 4,5,6
```csharp
for (int i = 4; i <= 6; i = i + 1) 
{
    Console.WriteLine(i);
}
```

或

```csharp
for (int i = 1; i <= 3; i = i + 1) 
{
    Console.WriteLine( i + 3 );
}
```

## 练习3：输出 1~10 之间的偶数
```csharp
for (int i = 2; i <= 10; i = i + 2) 
{
    Console.WriteLine( i );
}
```

## 练习4： 输出：3,6,9
```csharp
for (int i = 3; i <= 10; i = i + 1) 
{
    Console.WriteLine( i * 2 );
}
```
## 练习5：输出3,2,1
```csharp
for (int i = 3; i >= 0; i = i - 1) 
{
    Console.WriteLine( i );
}
```


## 练习6：反向输出30~3之间能被 3 整除的数

要求：禁止使用 `if` 条件筛选，通过起点、终点、步长直接实现。

参考代码
```csharp
// 起点：30，终点：>=3，步长：-3
for (int i = 30; i >= 3; i -= 3)
{
    Console.Write($"{i} ");
}
```

运行结果

```
30到3之间的3的倍数（步长-3）：30 27 24 21 18 15 12 9 6 3 
```


## 练习7：输出2的n次方（1到10次方）
参考代码

```csharp
// 起点：0，终点：<=10，步长：+1
for (int i = 0; i <= 10; i += 1)
{
    // Math.Pow(底数, 指数)：计算幂次，返回double类型
    double result = Math.Pow(2, i);
    Console.WriteLine($"2^{i} = {result}");
}
```

## 练习8：计算 1 到 100 的累加和
要求：使用 for 循环，计算 1 + 2 + 3 + ... + 100 的结果，并输出最终累加和。

解题思路

1.  定义一个累加变量 `sum`，初始值为 0（用于存储累加结果）。
2.  for 循环遍历 1 到 100，每次将循环变量 `i` 加到 `sum` 中。
3.  循环结束后，输出 `sum` 的值。

参考代码
```csharp
int sum = 0; // 累加和变量，初始化为0

for (int i = 1; i <= 100; i++)
{
    sum += i; // 等价于 sum = sum + i，逐步累加
}

Console.WriteLine($"1到100的累加和为：{sum}");
Console.ReadKey();
```

运行结果
```
1到100的累加和为：5050
```

## 练习9：计算 1 到 100 的偶数之和
要求：使用 for 循环，计算 2 + 4 + 6 + ... + 100 的结果，并输出最终累加和。


参考代码
```csharp
int sum = 0; // 累加和变量，初始化为0

for (int i = 2; i <= 100; i = i + 2)
{
    sum += i; // 等价于 sum = sum + i，逐步累加
}

Console.WriteLine($"1到100之间偶数的累加和为：{sum}");
Console.ReadKey();
```
运行结果
```
1到100之间偶数的累加和为：2550
```

## 练习5：计算 n 的阶乘

要求：n 由用户输入

参考代码
```csharp
Console.Write("请输入一个正整数（1≤n≤20）：");
int n = int.Parse(Console.ReadLine());

// 校验输入有效性
if (n < 1 || n > 20)
{
    Console.WriteLine("输入无效，请输入1到20之间的正整数！");
    Console.ReadKey();
    return;
}

long factorial = 1; // 阶乘变量，用long类型避免溢出

for (int i = 1; i <= n; i++)
{
    factorial *= i; // 等价于 factorial = factorial * i
}

Console.WriteLine($"{n}的阶乘是：{factorial}");
Console.ReadKey();
```

运行结果
```
请输入一个正整数（1≤n≤20）：5
5的阶乘是：120
```
