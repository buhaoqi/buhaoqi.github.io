---
noteId: "5dd0d660da7d11f0b2a74ff932a7aa79"
tags: []

---


## 一、`for` 循环基础语法

### 练习题 1：打印 1 到 10

**要求：**
使用 `for` 循环，在控制台输出数字 **1 到 10**。

**示例输出：**

```
1 2 3 4 5 6 7 8 9 10
```

```csharp
for (int i = 1; i <= 10; i++)
{
    Console.Write(i + " ");
}
```

---

### 练习题 2：打印 10 到 1

**要求：**
使用 `for` 循环，倒序输出 **10 到 1**。

```csharp
for (int i = 10; i >= 1; i--)
{
    Console.Write(i + " ");
}
```

---

## 二、步长与条件控制

### 练习题 3：输出 1 到 100 的偶数

**要求：**
使用 `for` 循环，输出 **1–100 之间的所有偶数**。

```csharp
for (int i = 2; i <= 100; i += 2)
{
    Console.Write(i + " ");
}
```




---

### 练习题 4：输出 5 的倍数

**要求：**
使用 `for` 循环，输出 **1–50 之间所有能被 5 整除的数**。

```csharp
for (int i = 1; i <= 50; i++)
{
    if (i % 5 == 0)
    {
        Console.Write(i + " ");
    }
}
```

---

## 三、循环 + 计算

### 练习题 5：计算 1 到 100 的和

**要求：**
使用 `for` 循环，计算并输出 **1 + 2 + … + 100 的结果**。
```csharp
int sum = 0;

for (int i = 1; i <= 100; i++)
{
    sum += i;
}

Console.WriteLine(sum);
```


---

### 练习题 6：计算阶乘

**要求：**
使用 `for` 循环，计算 **5 的阶乘（5!）**。

> 提示：`5! = 5 × 4 × 3 × 2 × 1`

```csharp
int result = 1;

for (int i = 1; i <= 5; i++)
{
    result *= i;
}

Console.WriteLine(result);
```

---

## 四、循环 + 条件判断

### 练习题 7：统计偶数个数

**要求：**
使用 `for` 循环，统计 **1–100 之间偶数的个数**，并输出结果。

```csharp
int count = 0;

for (int i = 1; i <= 100; i++)
{
    if (i % 2 == 0)
    {
        count++;
    }
}

Console.WriteLine(count);
```

---

### 练习题 8：求最大值

**要求：**
给定一个整数数组：

```csharp
int[] nums = { 3, 9, 2, 8, 6 };
```

使用 `for` 循环，找出数组中的 **最大值**。

```csharp
int[] nums = { 3, 9, 2, 8, 6 };

int max = nums[0];

for (int i = 1; i < nums.Length; i++)
{
    if (nums[i] > max)
    {
        max = nums[i];
    }
}

Console.WriteLine(max);
```

---

## 五、嵌套循环（进阶一点点）

### 练习题 9：输出 5 行星号

**要求：**
使用 `for` 循环输出如下内容：

```
*****
*****
*****
*****
*****
```

```csharp
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= 5; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
```

---

### 练习题 10：九九乘法表

**要求：**
使用 **嵌套 `for` 循环** 输出九九乘法表（前 5 行即可）。

**示例：**

```
1×1=1
2×1=2  2×2=4
3×1=3  3×2=6  3×3=9
```

```csharp
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write($"{i}×{j}={i * j}\t");
    }
    Console.WriteLine();
}
```

---

