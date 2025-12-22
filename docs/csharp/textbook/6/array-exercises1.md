---
noteId: "fe59ff50df3f11f0b17dfdde7a89f764"
tags: []

---

## 练习1：

声明一个整数类型的数组，初始值为：`1, 2, 3, 4, 5`，对数组元素进行阶乘计算，把结果输出到控制台。

```c#
// 1. 声明并初始化数组
int[] numbers = { 10, 20, 30, 40, 50 };

// 2. 升序排序（虽然本例中已是升序）
Array.Sort(numbers);

// 3. 输出数组元素
Console.WriteLine("升序排列后的数组是：");
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

## 练习2：
声明一个字符串数组，初始值为：“Tom”，“Jerry”，“Spike”。把最后一个数组元素的值修改为"Joe"，输出“ 欢迎TOM，Jerry和Joe上台表演。"

```c#
// 1. 初始化字符串数组
string[] names = { "Tom", "Jerry", "Spike" };

// 2. 修改最后一个元素为 "Joe"
names[2] = "Joe";

// 3. 输出指定格式的字符串（注意大小写和格式）
Console.WriteLine($"欢迎{names[0]}，{names[1]}和{names[2]}上台表演。");

```

## 练习3：
声明一个字符数组， 初始值为：'O'，'S'，'A'，'E'，'W', 'M'， 输出它们拼成的单词。

```c#
char[] c = {'O','S','A','E','W','m' };
Console.WriteLine($"{c[2]}{c[4]}{c[1]}{c[0]}{c[5]}{c[3]}");
```

## 练习4：
声明一个布尔数组，初始值为：`true, false, true`，输出每个元素取反后的值。

```c#
// 1. 初始化布尔数组
bool[] flags = { true, false, true };

// 2. 取反每个元素
for (int i = 0; i < flags.Length; i++)
{
    flags[i] = !flags[i];
}

// 3. 输出所有元素
Console.WriteLine("取反后的布尔数组元素：");
foreach (bool flag in flags)
{
    Console.WriteLine(flag);
}

```

## 练习5：
声明一个浮点型数组，初始值：`3.14`、`2.71`、`1.41`，输出所有元素的总和。

```c#
// 声明并初始化浮点型数组
double[] numbers = { 3.14, 2.71, 1.41 };

// 计算总和
double sum = 0;
foreach (double num in numbers)
{
    sum += num;
}

// 输出总和
Console.WriteLine("数组元素的总和是：" + sum);

```
## 练习6：
声明一个整数的数组，初始值为：`60, 80, 95, 78`，输出平均分数。

```csharp
int[] scores = {60, 80, 95,78};
int sum = 0;
foreach (int score in scores)
{
    sum += score;
}
double avg = (double)sum / scores.Length;
Console.WriteLine("平均分：" + avg.ToString("F2"));
```

## 练习7：遍历数组元素

```c#
// 参考实现
int[] numbers = new int[10];
for (int i = 0; i < numbers.Length; i++)
{
    numbers[i] = i + 1;
}

Console.WriteLine("使用for循环：");
for (int i = 0; i < numbers.Length; i++)
{
    Console.Write(numbers[i] + " ");
}

Console.WriteLine("\n使用foreach循环：");
foreach (int num in numbers)
{
    Console.Write(num + " ");
}
```

## 练习8：求最大值最小值

```c#
// 1. 初始化数组
int[] nums = { 5, 18, 3, 22, 9, 1, 15 };

// 2. 初始化最大值、最小值和对应索引
int max = nums[0];
int min = nums[0];
int maxIndex = 0;
int minIndex = 0;

// 3. 遍历数组比较元素
for (int i = 1; i < nums.Length; i++)
{
    // 更新最大值
    if (nums[i] > max)
    {
        max = nums[i];
        maxIndex = i;
    }
    // 更新最小值
    if (nums[i] < min)
    {
        min = nums[i];
        minIndex = i;
    }
}

// 4. 输出结果
Console.WriteLine($"数组最大值：{max}，索引：{maxIndex}");
Console.WriteLine($"数组最小值：{min}，索引：{minIndex}");
```

## 数组元素反转

```c#
// 参考实现
int[] array = { 5, 3, 9, 1, 7 };
Console.WriteLine("原始数组：" + string.Join(", ", array));

for (int i = 0; i < array.Length / 2; i++)
{
    // 交换对称位置的元素
    int temp = array[i];
    array[i] = array[array.Length - 1 - i];
    array[array.Length - 1 - i] = temp;
}

Console.WriteLine("反转后数组：" + string.Join(", ", array));
```

## 统计次数

题目要求

声明一个整型数组（如 {2, 5, 8, 2, 9, 5, 2, 7, 5, 8}），让用户输入一个整数，统计该整数在数组中出现的次数，并输出结果。如果未找到，提示 “该元素不存在”。

解题思路

- 声明并初始化数组，定义计数器变量；
- 获取用户输入的整数；
- 遍历数组，匹配元素时计数器加 1；
- 根据计数器值输出结果（0 则提示不存在，否则输出次数）。

```c#
using System;

class ArrayExercise5
{
    static void Main()
    {
        // 1. 初始化数组
        int[] arr = { 2, 5, 8, 2, 9, 5, 2, 7, 5, 8 };
        
        // 2. 获取用户输入
        Console.Write("请输入要查找的整数：");
        int target = int.Parse(Console.ReadLine()); // 转换输入为整数
        
        // 3. 统计出现次数
        int count = 0;
        foreach (int num in arr)
        {
            if (num == target)
            {
                count++;
            }
        }
        
        // 4. 输出结果
        if (count == 0)
        {
            Console.WriteLine($"数字 {target} 在数组中不存在");
        }
        else
        {
            Console.WriteLine($"数字 {target} 在数组中出现了 {count} 次");
        }
    }
}
```

你希望我再补充一道适合C#初学者的数组基础练习题，用来进一步巩固数组的核心用法，这道题我会设计得既贴合基础又有一点小拓展，覆盖数组元素修改、条件筛选等知识点。

### 练习题6：数组筛选与修改 - 替换数组中的偶数为指定值
#### 题目要求
1. 声明一个包含8个随机整数的数组（如 `{7, 12, 9, 24, 17, 30, 8, 15}`）；
2. 遍历数组，将数组中所有的**偶数**替换为 `0`，奇数保持不变；
3. 分别输出**修改前**和**修改后**的数组，要求格式清晰（如用逗号分隔元素）；
4. 额外统计并输出：数组中原本有多少个偶数、多少个奇数。

#### 解题思路
1. 声明并初始化整型数组，先输出原数组（自定义方法格式化输出，提升代码复用性）；
2. 定义两个计数器（`evenCount` 统计偶数、`oddCount` 统计奇数），遍历数组；
3. 通过 `num % 2 == 0` 判断偶数，满足条件则将该位置元素赋值为 `0`，并累加偶数计数器；否则累加奇数计数器；
4. 遍历完成后，输出修改后的数组，以及奇偶元素的统计结果。

#### 参考代码
```csharp
using System;

class ArrayExercise6
{
    static void Main()
    {
        // 1. 初始化数组
        int[] numbers = { 7, 12, 9, 24, 17, 30, 8, 15 };
        
        // 2. 输出修改前的数组
        Console.WriteLine("修改前的数组：");
        PrintArray(numbers); // 调用自定义方法格式化输出
        
        // 3. 定义计数器并遍历修改数组
        int evenCount = 0; // 偶数计数器
        int oddCount = 0;  // 奇数计数器
        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i] % 2 == 0)
            {
                // 偶数替换为0，计数器+1
                numbers[i] = 0;
                evenCount++;
            }
            else
            {
                // 奇数不修改，计数器+1
                oddCount++;
            }
        }
        
        // 4. 输出修改后的数组和统计结果
        Console.WriteLine("\n修改后的数组（偶数替换为0）：");
        PrintArray(numbers);
        Console.WriteLine($"\n数组中原有偶数：{evenCount} 个");
        Console.WriteLine($"数组中原有奇数：{oddCount} 个");
    }
    
    // 自定义方法：格式化输出数组（元素用逗号分隔）
    static void PrintArray(int[] arr)
    {
        // 遍历数组，最后一个元素不输出逗号
        for (int i = 0; i < arr.Length; i++)
        {
            if (i == arr.Length - 1)
            {
                Console.Write(arr[i]); // 最后一个元素直接输出
            }
            else
            {
                Console.Write(arr[i] + ", "); // 非最后一个元素加逗号
            }
        }
        Console.WriteLine(); // 换行，优化格式
    }
}
```

#### 输出结果
```
修改前的数组：
7, 12, 9, 24, 17, 30, 8, 15

修改后的数组（偶数替换为0）：
7, 0, 9, 0, 17, 0, 0, 15

数组中原有偶数：4 个
数组中原有奇数：4 个
```

### 总结
这道补充练习题的核心知识点和技巧如下：
1. **条件判断**：通过 `% 取模运算` 判断奇偶，是数组元素筛选的基础逻辑；
2. **数组修改**：直接通过索引 `numbers[i]` 修改数组元素的值，理解数组的可变性；
3. **格式化输出**：自定义方法处理数组输出格式（避免末尾多余逗号），提升代码整洁性；
4. **计数统计**：结合遍历和计数器，实现对数组元素特征的统计，是数组实战中常见的需求。

这道题既巩固了数组遍历、索引操作的基础，又加入了条件判断和统计的小拓展，适合初学者在掌握基础遍历后进一步练习。