---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 数组的方法  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 数组的方法  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、Array 类常用方法知识点

### 1. Copy  
**用途**：将数组中的指定元素复制到另一个 Array 中。  

**语法格式**：  
```csharp
Array.Copy(源数组, 目标数组, 长度);
Array.Copy(源数组, 源起始索引, 目标数组, 目标起始索引, 长度);
```

**参数说明**：  
- `源数组`：要复制的原始数组。  
- `目标数组`：接收元素的目标数组。  
- `长度`：要复制的元素个数。  
- `源起始索引`：源数组中开始复制的索引（从0开始）。  
- `目标起始索引`：目标数组中开始存放的索引。  

**返回值**：`void`  

**示例**：  
```csharp
int[] src = {1, 2, 3, 4, 5};
int[] dest = new int[3];
Array.Copy(src, 1, dest, 0, 3);
// dest => {2, 3, 4}
```

---

### 2. CopyTo  
**用途**：从指定的目标数组索引处开始，将当前一维数组中的所有元素复制到另一个一维数组中。  

**语法格式**：  
```csharp
源数组.CopyTo(目标数组, 目标起始索引);
```

**参数说明**：  
- `目标数组`：要复制到的数组。  
- `目标起始索引`：目标数组中开始存放元素的索引。  

**返回值**：`void`  

**示例**：  
```csharp
int[] src = {10, 20, 30};
int[] dest = new int[5];
src.CopyTo(dest, 2);
// dest => {0, 0, 10, 20, 30}
```

---

### 3. Exists  
**用途**：判断数组中是否包含指定的元素（通过条件委托）。  

**语法格式**：  
```csharp
bool exists = Array.Exists(数组, 条件委托);
```

**参数说明**：  
- `数组`：要搜索的数组。  
- `条件委托`：`Predicate<T>`，定义元素要满足的条件。  

**返回值**：`bool`，存在返回 `true`，否则 `false`。  

**示例**：  
```csharp
int[] nums = {1, 3, 5, 7};
bool hasEven = Array.Exists(nums, n => n % 2 == 0); // false
```

---

### 4. GetLength  
**用途**：获取 Array 的指定维中的元素数。  

**语法格式**：  
```csharp
int length = 数组.GetLength(维度);
```

**参数说明**：  
- `维度`：从 0 开始的维度索引（0 表示第一维）。  

**返回值**：`int`，该维度的长度。  

**示例**：  
```csharp
int[,] matrix = new int[3, 4];
int rows = matrix.GetLength(0); // 3
int cols = matrix.GetLength(1); // 4
```

---

### 5. GetValue  
**用途**：获取 Array 中指定位置的值。  

**语法格式**：  
```csharp
object value = 数组.GetValue(索引);
object value = 数组.GetValue(索引1, 索引2, ...); // 多维数组
```

**参数说明**：  
- `索引`：一维数组的位置。  
- `索引1, 索引2`：多维数组中各维度的索引。  

**返回值**：`object`，需要显式转换为原类型。  

**示例**：  
```csharp
int[] arr = {10, 20, 30};
int val = (int)arr.GetValue(1); // 20
```

---

### 6. Reverse  
**用途**：反转一维 Array 中元素的顺序。  

**语法格式**：  
```csharp
Array.Reverse(数组);
Array.Reverse(数组, 起始索引, 长度);
```

**参数说明**：  
- `数组`：要反转的数组。  
- `起始索引`、`长度`：指定要反转的部分。  

**返回值**：`void`  

**示例**：  
```csharp
int[] arr = {1, 2, 3, 4};
Array.Reverse(arr);
// arr => {4, 3, 2, 1}
```

---

### 7. SetValue  
**用途**：设置 Array 中指定位置的元素。  

**语法格式**：  
```csharp
数组.SetValue(值, 索引);
数组.SetValue(值, 索引1, 索引2, ...); // 多维数组
```

**参数说明**：  
- `值`：要设置的新值（object 类型）。  
- `索引`：一维数组中的位置。  

**返回值**：`void`  

**示例**：  
```csharp
int[] arr = new int[3];
arr.SetValue(100, 1);
// arr => {0, 100, 0}
```

---

### 8. Sort  
**用途**：对一维 Array 数组元素进行排序（默认升序）。  

**语法格式**：  
```csharp
Array.Sort(数组);
Array.Sort(数组, 起始索引, 长度);
```

**参数说明**：  
- `数组`：要排序的数组。  
- `起始索引`、`长度`：指定要排序的部分。  

**返回值**：`void`  

**示例**：  
```csharp
int[] arr = {5, 2, 8, 1};
Array.Sort(arr);
// arr => {1, 2, 5, 8}
```

---

## 二、10 道强化训练题

### 题目 1（Copy）  
创建一个源数组 `{3, 6, 9, 12, 15}`，将索引 1~3 的元素（即 6, 9, 12）复制到新数组，并输出新数组。

---

### 题目 2（CopyTo）  
创建一个数组 `{ "A", "B", "C" }`，将其复制到长度为 5 的字符串数组的索引 2 开始的位置，输出目标数组。

---

### 题目 3（Exists）  
判断数组 `{2, 4, 7, 8, 10}` 中是否存在大于 9 的元素，输出结果（True/False）。

---

### 题目 4（GetLength + GetValue）  
定义一个二维数组 `int[2, 3]`，手动赋值任意整数，使用 `GetLength` 和 `GetValue` 输出所有元素（用嵌套循环）。

---

### 题目 5（SetValue + GetValue）  
创建一个长度为 5 的 `double` 数组，用 `SetValue` 设置索引 2 和 4 分别为 3.14 和 6.28，然后用 `GetValue` 读取并输出所有元素。

---

### 题目 6（Reverse）  
声明数组 `{ 1, 2, 3, 4, 5, 6 }`，反转整个数组，再反转索引 1 到 4 的部分（即 `{2,3,4,5}`），输出每次反转后的结果。

---

### 题目 7（Sort）  
数组 `{ 9, 3, 7, 1, 5 }`，先升序排序，再降序排序（提示：Sort 后 Reverse），输出两次结果。

---

### 题目 8（Exists + Sort + Copy）  
对数组 `{ 8, 2, 5, 1, 9, 3 }` 排序，然后复制排序后的前 3 个元素到新数组，最后判断新数组中是否包含元素 5，输出判断结果。

---

### 题目 9（混合：CopyTo + Reverse + Exists）  
创建数组 `{ 10, 20, 30, 40, 50 }`，将其全部元素复制到另一个长度相同的数组，然后反转第二个数组，并判断第二个数组中是否存在元素 30。

---

### 题目 10（综合：Sort + GetLength + GetValue/SetValue）  
创建一个 3×3 的二维整数数组，手动赋值 1~9，然后将其所有元素复制到一维数组并排序，最后将排序后的一维数组的前三个元素放回二维数组的第一行（用 SetValue）。

---

## 三、强化训练题参考答案

### 题目 1（Copy）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] source = { 3, 6, 9, 12, 15 };
        int[] destination = new int[3]; // 存放索引1~3的元素（共3个）
        Array.Copy(source, 1, destination, 0, 3);

        Console.WriteLine("目标数组：");
        Console.WriteLine(string.Join(", ", destination));
    }
}
```

**输出：**
```
目标数组：
6, 9, 12
```

---

### 题目 2（CopyTo）

```csharp
using System;

class Program
{
    static void Main()
    {
        string[] source = { "A", "B", "C" };
        string[] target = new string[5]; // 默认全为 null
        source.CopyTo(target, 2);

        Console.WriteLine("目标数组：");
        foreach (string s in target)
        {
            Console.Write(s == null ? "null " : s + " ");
        }
    }
}
```

**输出：**
```
目标数组：
null null A B C
```

---

### 题目 3（Exists）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] arr = { 2, 4, 7, 8, 10 };
        bool exists = Array.Exists(arr, n => n > 9);
        Console.WriteLine($"存在大于9的元素：{exists}");
    }
}
```

**输出：**
```
存在大于9的元素：True
```

---

### 题目 4（GetLength + GetValue）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[,] matrix = { { 1, 2, 3 }, { 4, 5, 6 } };
        int rows = matrix.GetLength(0);
        int cols = matrix.GetLength(1);

        Console.WriteLine("二维数组元素：");
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                int val = (int)matrix.GetValue(i, j);
                Console.Write(val + " ");
            }
            Console.WriteLine();
        }
    }
}
```

**输出：**
```
二维数组元素：
1 2 3
4 5 6
```

---

### 题目 5（SetValue + GetValue）

```csharp
using System;

class Program
{
    static void Main()
    {
        double[] arr = new double[5];
        arr.SetValue(3.14, 2);
        arr.SetValue(6.28, 4);

        Console.WriteLine("所有元素：");
        for (int i = 0; i < arr.Length; i++)
        {
            double val = (double)arr.GetValue(i);
            Console.Write(val + " ");
        }
    }
}
```

**输出：**
```
所有元素：
0 0 3.14 0 6.28
```

---

### 题目 6（Reverse）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] arr = { 1, 2, 3, 4, 5, 6 };
        Array.Reverse(arr);
        Console.WriteLine("反转整个数组后：" + string.Join(", ", arr));

        // 反转索引1~4（即元素 5,4,3,2）
        Array.Reverse(arr, 1, 4);
        Console.WriteLine("再反转索引1~4后：" + string.Join(", ", arr));
    }
}
```

**输出：**
```
反转整个数组后：6, 5, 4, 3, 2, 1
再反转索引1~4后：6, 2, 3, 4, 5, 1
```

---

### 题目 7（Sort + Reverse 实现降序）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] arr = { 9, 3, 7, 1, 5 };
        Array.Sort(arr);
        Console.WriteLine("升序：" + string.Join(", ", arr));

        Array.Reverse(arr);
        Console.WriteLine("降序：" + string.Join(", ", arr));
    }
}
```

**输出：**
```
升序：1, 3, 5, 7, 9
降序：9, 7, 5, 3, 1
```

---

### 题目 8（Exists + Sort + Copy）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] arr = { 8, 2, 5, 1, 9, 3 };
        Array.Sort(arr);                      // 排序后：1,2,3,5,8,9

        int[] firstThree = new int[3];
        Array.Copy(arr, 0, firstThree, 0, 3); // 复制前3个

        bool contains5 = Array.Exists(firstThree, n => n == 5);
        Console.WriteLine("排序后前三个元素：" + string.Join(", ", firstThree));
        Console.WriteLine("前三个元素中是否包含5：" + contains5);
    }
}
```

**输出：**
```
排序后前三个元素：1, 2, 3
前三个元素中是否包含5：False
```

---

### 题目 9（CopyTo + Reverse + Exists）

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] arr1 = { 10, 20, 30, 40, 50 };
        int[] arr2 = new int[arr1.Length];

        arr1.CopyTo(arr2, 0);   // 复制全部
        Array.Reverse(arr2);    // 反转 arr2

        bool exists30 = Array.Exists(arr2, n => n == 30);
        Console.WriteLine("arr2 反转后：" + string.Join(", ", arr2));
        Console.WriteLine("arr2 中是否存在30：" + exists30);
    }
}
```

**输出：**
```
arr2 反转后：50, 40, 30, 20, 10
arr2 中是否存在30：True
```

---

### 题目 10（综合）

综合：Sort + GetLength + GetValue/SetValue

```csharp
using System;

class Program
{
    static void Main()
    {
        // 1. 创建 3x3 二维数组，赋值 1~9
        int[,] matrix = new int[3, 3];
        int num = 1;
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                matrix[i, j] = num++;

        // 2. 复制所有元素到一维数组并排序
        int[] flat = new int[9];
        int index = 0;
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                flat[index++] = matrix[i, j];

        Array.Sort(flat);  // 排序后：1,2,3,4,5,6,7,8,9

        // 3. 将排序后的一维数组前三个元素放回二维数组的第一行
        for (int col = 0; col < 3; col++)
        {
            matrix.SetValue(flat[col], 0, col);
        }

        // 输出结果
        Console.WriteLine("最终二维数组：");
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
                Console.Write(matrix[i, j] + " ");
            Console.WriteLine();
        }
    }
}
```

**输出：**
```
最终二维数组：
1 2 3
4 5 6
7 8 9
```

> 说明：原数组已经是按行顺序 1~9，排序后仍是 1~9，第一行本已是 {1,2,3}，但本代码展示了完整的“复制→排序→写回第一行”流程。如果原始二维数组乱序，效果会更明显。

---




