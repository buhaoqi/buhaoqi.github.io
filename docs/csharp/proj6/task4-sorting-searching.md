---
title: 任务四 数组的排序和查找
description: 算法与程序设计《C#》项目六 数组 任务四 数组的排序和查找知识点总结。介绍Array类常用方法（表6-2）、三种排序算法（选择排序、冒泡排序、插入排序）和两种查找算法（顺序查找、二分查找），含完整代码示例和运行结果。
keywords: [C#, 排序, 查找, Array类, 选择排序, 冒泡排序, 插入排序, 顺序查找, 二分查找, Sort, Reverse, 对口升学]
sidebar_label: 任务四 数组的排序和查找
sidebar_position: 4
slug: /csharp/proj6/task4-sorting-searching
tags: [C#, 项目六, 任务四, 对口升学]
---

## 知识点

### 1.Array类有哪些常用方法？

C#中的数组都是由 `System.Array` 类派生而来的引用对象，可以使用Array类中的属性和方法操作数组。例如，`Length` 属性获取数组元素长度，`Rank` 属性获取数组的维数。

**表6-2 Array类的常用方法及说明**

| 方法 | 说明 |
|---|---|
| Copy | 将数组中的指定元素复制到另一个Array中 |
| CopyTo | 从指定的目标数组索引处开始，将当前一维数组中的所有元素复制到另一个一维数组中 |
| Exists | 判断数组中是否包含指定的元素 |
| GetLength | 获取Array的指定维中的元素数 |
| GetValue | 获取Array中指定位置的值 |
| Reverse | 反转一维Array中元素的顺序 |
| SetValue | 设置Array中指定位置的元素 |
| Sort | 对一维Array数组元素进行排序 |

---

### 2.什么是选择排序法？

**原理**：第一次从待排序的元素中选出最小（或最大）的一个元素，记录其位置下标，然后将剩下的元素依次与该元素比较，找到剩余元素中最小的元素，二者交换位置。以此类推，直到全部待排序的数据元素的个数为零。

```csharp
int[] arr = new int[] { 87, 85, 89, 76, 82, 90, 79, 78, 68, 84 };
Console.Write("初始数组：");
for (int i = 0; i < arr.Length; i++)
{
    Console.Write(arr[i] + " ");
}
Console.ReadLine();

int temp = 0;
for (int i = 0; i < arr.Length - 1; i++)
{
    int flag = i;    //记录最小值的下标
    for (int j = i + 1; j < arr.Length; j++)
    {
        if (arr[flag] >= arr[j])    //找到更小的值
        {
            flag = j;
        }
    }
    if (flag != i)    //如果最小值不是当前位置，则交换
    {
        temp = arr[flag];
        arr[flag] = arr[i];
        arr[i] = temp;
    }
}

Console.Write("排序后的数组：");
for (int i = 0; i < arr.Length; i++)
{
    Console.Write(arr[i] + " ");
}
Console.ReadLine();
```

**运行结果：**

```
初始数组：87 85 89 76 82 90 79 78 68 84
排序后的数组：68 76 78 79 82 84 85 87 89 90
```

---

### 3.什么是冒泡排序法？

**原理**：像气泡一样越往上走越大。首先将第一个记录的关键字和第二个记录的关键字进行比较，若为逆序则交换，然后比较第二个和第三个，依次类推，直至第n-1个和第n个比较完毕，称为第一趟冒泡排序。执行n-1次后排序完成。

```csharp
static void Main(string[] args)
{
    int[] arr = new int[] { 87, 85, 89, 76, 82, 90, 79, 78, 68, 84 };
    Console.Write("初始数组：");
    for (int m = 0; m < arr.Length; m++)
    {
        Console.Write(arr[m] + " ");
    }
    Console.ReadLine();

    int i, j;
    int temp = 0;
    bool done = false;
    j = 1;
    while (j < arr.Length && !done)    //判断数组长度
    {
        done = true;
        for (i = 0; i < arr.Length - j; i++)    //遍历数组
        {
            if (Convert.ToInt32(arr[i]) > Convert.ToInt32(arr[i + 1]))
            {
                done = false;
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        j++;
    }

    Console.Write("排序后的数组：");
    for (int m = 0; m < arr.Length; m++)
    {
        Console.Write(arr[m] + " ");
    }
    Console.ReadLine();
}
```

**运行结果：**

```
初始数组：87 85 89 76 82 90 79 78 68 84
排序后的数组：68 76 78 79 82 84 85 87 89 90
```

---

### 4.什么是插入排序法？

**原理**：从数组的第二个数字开始，通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序是一种稳定的排序算法。

```csharp
static void Main(string[] args)
{
    int[] arr = new int[]{ 87, 85, 89, 100, 82, 90, 79, 78, 68, 84 };
    Console.Write("初始数组：");
    for (int i = 0; i < arr.Length; i++)
    {
        Console.Write(arr[i] + " ");
    }
    Console.ReadLine();

    for (int i = 0; i < arr.Length; i++)
    {
        int flag = arr[i];     //记录arr[i]的值
        int j = i - 1;
        while (j >= 0 && arr[j] > flag)    //当前一个数arr[j]大时
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = flag;
    }

    Console.Write("排序后的数组：");
    for (int i = 0; i < arr.Length; i++)
    {
        Console.Write(arr[i] + " ");
    }
    Console.ReadLine();
}
```

**运行结果：**

```
初始数组：87 85 89 100 82 90 79 78 68 84
排序后的数组：68 78 79 82 84 85 87 89 90 100
```

---

### 5.什么是顺序查找法？

**原理**：从数组的一边开始，逐个进行元素比较，如果与给定元素相同则查找成功，返回其下标索引；如果整个扫描结束后仍未找到匹配元素，则查找失败，返回-1。

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        int[] array = { 43, 69, 11, 72, 28, 21, 56, 80, 48, 94, 32, 8 };
        Console.WriteLine("请输入要查找的数");
        int num = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine(SequentialSearch(array, num));
        Console.ReadLine();
    }

    private static int SequentialSearch(int[] array, int key)
    {
        for (int i = 0; i < array.Length; i++)
            if (array[i] == key)
                return i;
        return -1;
    }
}
```

**运行结果：**

```
请输入要查找的数
11
2
```

---

### 6.什么是二分查找法？

**原理**：二分查找法是一种效率较高的查找方法，**前提要求是有序数组**。每次通过跟区间中间元素对比，将待查找的区间缩小为之前的一半，直到找到目标元素或区间缩小为0。

算法逻辑：
- 与mid值**相等**：直接返回对应位置
- 比mid值**大**：要查找的元素在左侧，搜索区间变为左一半
- 比mid值**小**：要查找的元素在右侧，搜索区间变为右一半

```csharp
class Program
{
    static void Main(string[] args)
    {
        int[] intArray = new int[]{ 1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 };
        Console.WriteLine("请输入要查找的数：");
        int value = Convert.ToInt32(Console.ReadLine());
        int index = BinarySearch.BinarySearchMethod(intArray, value);
        Console.WriteLine(value + "的索引号是" + index);
    }
}
class BinarySearch
{
    public static int BinarySearchMethod(int[] arr, int value)
    {
        int low = 0;
        int high = arr.Length - 1;
        int count = 0;
        while (low <= high)
        {
            int mid = low + (high - low) / 2;
            if (arr[mid] == value)
            {
                Console.WriteLine("查找次数" + count);
                return mid;
            }
            else if (arr[mid] < value)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
            count++;
        }
        Console.WriteLine("查找次数" + count);
        return -1;
    }
}
```

**运行结果：**

```
请输入要查找的数：
11
查找次数:3
11的索引号是4
```

---

### 7.三种排序算法对比

| 排序算法 | 原理 | 时间复杂度 | 稳定性 |
|---|---|---|---|
| 选择排序 | 每次选出最小值放到前面 | O(n²) | 不稳定 |
| 冒泡排序 | 相邻元素两两比较交换 | O(n²) | 稳定 |
| 插入排序 | 在已排序序列中找到位置插入 | O(n²) | 稳定 |

### 8.两种查找算法对比

| 查找算法 | 前提条件 | 时间复杂度 | 返回值 |
|---|---|---|---|
| 顺序查找 | 无需排序 | O(n) | 找到返回索引，未找到返回-1 |
| 二分查找 | 必须有序 | O(log n) | 找到返回索引，未找到返回-1 |
