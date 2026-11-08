---
title: 任务五 同步实验
description: 算法与程序设计《C#》项目六 数组 任务五 同步实验。包含3道实验题：定义一维数组并输出元素、求学生平均身高最高最低身高、打印杨辉三角，培养数组声明初始化和实际应用能力。
keywords: [C#, 同步实验, 一维数组, 平均身高, 杨辉三角, 数组操作, 对口升学]
sidebar_label: 任务五 同步实验
sidebar_position: 5
slug: /csharp/proj6/task5-exercises
tags: [C#, 项目六, 任务五, 对口升学]
---

## 知识点

### 实验目的

1. 掌握数组的声明、实例化和初始化。
2. 掌握数组元素的使用。
3. 掌握一维数组的操作。

---

### 实验一 定义一维数组并输出元素

**题目要求：**

尝试定义一个一维数组，并将其元素输出。

**参考代码：**

```csharp
static void Main(string[] args)
{
    int[] array = { 10, 30, 20, 15, 18 };
    Console.Write("数组元素：");
    for (int i = 0; i < array.Length; i++)
    {
        Console.Write(array[i] + " ");
    }
    Console.ReadLine();
}
```

**运行结果：**

```
数组元素：10 30 20 15 18
```

---

### 实验二 求学生平均身高、最高身高、最低身高

**题目要求：**

已知10个学生的身高为156、150、167、178、180、176、173、154、155、158（cm），求平均身高、最高身高、最低身高。

**参考代码：**

```csharp
static void Main(string[] args)
{
    int[] height = { 156, 150, 167, 178, 180, 176, 173, 154, 155, 158 };
    int sum = 0;
    int max = height[0];
    int min = height[0];

    for (int i = 0; i < height.Length; i++)
    {
        sum += height[i];    //累加求和
        if (height[i] > max)
            max = height[i];
        if (height[i] < min)
            min = height[i];
    }

    double avg = (double)sum / height.Length;    //求平均值
    Console.WriteLine("平均身高：" + avg + "cm");
    Console.WriteLine("最高身高：" + max + "cm");
    Console.WriteLine("最低身高：" + min + "cm");
    Console.ReadLine();
}
```

**运行结果：**

```
平均身高：164.7cm
最高身高：180cm
最低身高：150cm
```

**设计要点：**
- 使用 `for` 循环同时完成累加求和和求最大最小值
- 求平均值时注意类型转换： `(double)sum / height.Length`
- 先假设第一个元素为最大值和最小值

---

### 实验三 打印杨辉三角

**题目要求：**

使用数组打印杨辉三角。杨辉三角是一个由数字排列成的三角形数表，其特征是它的两边都是由数字1组成的，而其余的数等于它上方两个数之和。

**参考代码：**

```csharp
static void Main(string[] args)
{
    int n = 10;    //杨辉三角的行数
    int[][] arr = new int[n][];    //声明不规则二维数组

    // 初始化杨辉三角
    for (int i = 0; i < n; i++)
    {
        arr[i] = new int[i + 1];    //第i行有i+1个元素
        arr[i][0] = 1;              //每行第一个元素为1
        arr[i][i] = 1;              //每行最后一个元素为1
        for (int j = 1; j < i; j++)
        {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];    //等于上方两个数之和
        }
    }

    // 输出杨辉三角
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            Console.Write(arr[i][j] + " ");
        }
        Console.WriteLine();
    }
    Console.ReadLine();
}
```

**运行结果（前10行）：**

```
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
1 8 28 56 70 56 28 8 1
1 9 36 84 126 126 84 36 9 1
```

**设计要点：**
- 使用不规则二维数组 `int[][]` 存储杨辉三角（每行元素个数不同）
- 每行第一个和最后一个元素为1
- 其余元素等于上一行同列和前一列元素之和： `arr[i-1][j-1] + arr[i-1][j]`
