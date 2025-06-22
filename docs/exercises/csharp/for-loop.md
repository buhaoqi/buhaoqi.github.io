---
noteId: "2c8282d04f3f11f0adaee17699ef0195"
tags: []

---

素数判断
```csharp
bool isPrime = true;
int number = 17;

for (int i = 2; i <= Math.Sqrt(number); i++)
{
    if (number % i == 0)
    {
        isPrime = false;
        break;
    }
}

Console.WriteLine($"{number}是素数：{isPrime}");
```
### 案例2：数组排序（选择排序）

```csharp
int[] arr = { 5, 3, 8, 1, 2 };
for (int i = 0; i < arr.Length - 1; i++)
{
    int minIndex = i;
    for (int j = i + 1; j < arr.Length; j++)
    {
        if (arr[j] < arr[minIndex])
        {
            minIndex = j;
        }
    }
    // 交换元素
    int temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
```


## 3.遍历数组
for循环遍历数组的基础练习题，涵盖数组遍历、元素操作、条件筛选等常见场景。

1. 数组元素打印
```csharp
// 题目：使用for循环打印数组所有元素
int[] numbers = { 1, 2, 3, 4, 5 };
// 你的代码...
```

2. 数组求和
```csharp
// 题目：计算数组所有元素的和
int[] nums = { 10, 20, 30, 40, 50 };
int sum = 0;
// 你的代码...
Console.WriteLine($"数组总和：{sum}");
```

3. 查找最大值
```csharp
// 题目：找出数组中的最大值
int[] values = { 23, 45, 12, 67, 34 };
int max = values[0];
// 你的代码...
Console.WriteLine($"数组最大值：{max}");
```

4. 偶数筛选
```csharp
// 题目：打印数组中的所有偶数
int[] data = { 11, 22, 33, 44, 55, 66 };
// 你的代码...
```

5. 数组反转
```csharp
// 题目：将数组元素顺序反转（不调用Array.Reverse）
int[] arr = { 1, 2, 3, 4, 5 };
// 你的代码...
Console.WriteLine(string.Join(", ", arr));
```

6. 元素位置查找
```csharp
// 题目：查找特定元素在数组中的位置（索引）
string[] fruits = { "apple", "banana", "orange", "grape" };
string target = "orange";
int index = -1;
// 你的代码...
Console.WriteLine($"{target}的位置：{index}");
```

7. 平均值计算
```csharp
// 题目：计算数组元素的平均值
double[] temps = { 22.5, 23.7, 21.8, 24.3, 20.9 };
double average = 0;
// 你的代码...
Console.WriteLine($"平均温度：{average:F1}℃");
```

8. 正数统计
```csharp
// 题目：统计数组中正数的个数
int[] numbers = { -2, 5, -8, 10, -3, 7 };
int positiveCount = 0;
// 你的代码...
Console.WriteLine($"正数个数：{positiveCount}");
```

9. 字符串数组长度统计
```csharp
// 题目：计算字符串数组中每个元素的长度
string[] words = { "hello", "world", "csharp", "programming" };
// 你的代码...
// 预期输出：
// hello: 5
// world: 5
// csharp: 6
// programming: 11
```

## 10. 二维数组遍历
```csharp
// 题目：使用嵌套for循环遍历二维数组
int[,] matrix = { 
    { 1, 2, 3 }, 
    { 4, 5, 6 }, 
    { 7, 8, 9 } 
};
// 你的代码...
// 预期输出：
// 1 2 3
// 4 5 6
// 7 8 9
```

## 参考答案（点击展开）

<details>
<summary>点击查看参考答案</summary>

### 1. 数组元素打印
```csharp
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

### 2. 数组求和
```csharp
for (int i = 0; i < nums.Length; i++)
{
    sum += nums[i];
}
```

### 3. 查找最大值
```csharp
for (int i = 1; i < values.Length; i++)
{
    if (values[i] > max)
    {
        max = values[i];
    }
}
```

### 4. 偶数筛选
```csharp
for (int i = 0; i < data.Length; i++)
{
    if (data[i] % 2 == 0)
    {
        Console.WriteLine(data[i]);
    }
}
```

### 5. 数组反转
```csharp
for (int i = 0; i < arr.Length / 2; i++)
{
    int temp = arr[i];
    arr[i] = arr[arr.Length - 1 - i];
    arr[arr.Length - 1 - i] = temp;
}
```

### 6. 元素位置查找
```csharp
for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i] == target)
    {
        index = i;
        break;
    }
}
```

### 7. 平均值计算
```csharp
for (int i = 0; i < temps.Length; i++)
{
    average += temps[i];
}
average /= temps.Length;
```

### 8. 正数统计
```csharp
for (int i = 0; i < numbers.Length; i++)
{
    if (numbers[i] > 0)
    {
        positiveCount++;
    }
}
```

### 9. 字符串数组长度统计
```csharp
for (int i = 0; i < words.Length; i++)
{
    Console.WriteLine($"{words[i]}: {words[i].Length}");
}
```

### 10. 二维数组遍历
```csharp
for (int row = 0; row < matrix.GetLength(0); row++)
{
    for (int col = 0; col < matrix.GetLength(1); col++)
    {
        Console.Write(matrix[row, col] + " ");
    }
    Console.WriteLine();
}
```
</details>

这些练习题涵盖了for循环遍历数组的常见操作，建议先自己尝试解答，再参考给出的答案。掌握这些基础后，可以尝试更复杂的数组操作和算法题目。