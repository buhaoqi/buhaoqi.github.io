---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 简单C#程序实例  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 简单C#程序实例  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

任务三 简单C#程序实例


## **1. 关于冒泡排序，以下描述正确的是：**

A) 它每次循环将最小的元素移动到正确位置 B) 它的平均时间复杂度是 O(n log n) C) 它是一种不稳定的排序算法 D) 它通过相邻元素比较和交换来排序

**答案：D**

## **2. 选择排序的核心思想是：**

A) 每次找到未排序部分的最小元素，放到已排序部分的末尾 B) 每次比较相邻元素，将较大的元素向后移动 C) 将每个元素插入到已排序部分的正确位置 D) 通过分治策略将数组分成更小的部分

**答案：A**

## **3. 插入排序在哪种情况下性能最好？**

A) 数组完全逆序 B) 数组元素全部相同 C) 数组基本有序 D) 数组完全随机

**答案：C**

## **4. 顺序查找的时间复杂度是：**

A) O(1) B) O(log n) C) O(n) D) O(n²)

**答案：C**

## **5. 二分查找的前提条件是：**

A) 数组必须使用链表存储 B) 数组必须已经排序 C) 数组元素必须都是正数 D) 数组长度必须是2的幂

**答案：B**

## **6. 在冒泡排序中，完成第k轮排序后：**

A) 前k个元素已排序 B) 后k个元素已排序 C) 最小的k个元素已排序 D) 最大的k个元素已排序

**答案：B**

## **7. 选择排序与冒泡排序的主要区别是：**

A) 选择排序更稳定 B) 选择排序交换次数更少 C) 选择排序比较次数更少 D) 选择排序可以在O(n)时间内完成

**答案：B**

## **8. 在插入排序中，当处理第i个元素时：**

A) 前i-1个元素已经有序 B) 后i-1个元素已经有序 C) 所有元素都未排序 D) 只有第i个元素未排序

**答案：A**

## **9. 顺序查找最适合用于：**

A) 大型有序数组 B) 小型无序数组 C) 需要频繁插入删除的数据 D) 已经排序的链表

**答案：B**

## **10. 二分查找每次比较后：**

A) 搜索范围减少一半 B) 搜索范围减少一个元素 C) 搜索范围减少三分之一 D) 搜索范围不变

**答案：A**

## **11. 以下哪种排序算法是稳定的？**

A) 选择排序 B) 冒泡排序 C) 都不稳定 D) 都稳定

**答案：B**

## **12. 在包含n个元素的数组中，顺序查找最坏情况下需要比较：**

A) 1次 B) log n次 C) n次 D) n²次

**答案：C**

## **13. 二分查找最坏情况下需要比较：**

A) 1次 B) log n次 C) n次 D) n²次

**答案：B**

## **14. 以下代码实现的是哪种排序？**

```
for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
```

A) 选择排序 B) 插入排序 C) 冒泡排序 D) 快速排序

**答案：C**

## **15. 以下代码实现的是哪种排序？**

```
for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i-1;
    while (j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}
```

A) 选择排序 B) 插入排序 C) 冒泡排序 D) 归并排序

**答案：B**

## **16. 以下代码实现的是哪种查找？**

```
for (int i = 0; i < arr.Length; i++) {
    if (arr[i] == target) {
        return i;
    }
}
return -1;
```

A) 顺序查找 B) 二分查找 C) 哈希查找 D) 插值查找

**答案：A**

## **17. 以下代码实现的是哪种查找？**

```
int left = 0, right = arr.Length-1;
while (left <= right) {
    int mid = left + (right-left)/2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) left = mid+1;
    else right = mid-1;
}
return -1;
```

A) 顺序查找 B) 二分查找 C) 线性查找 D) 跳转查找

**答案：B**

## **18. 对于包含1000个元素的有序数组，二分查找最多需要比较：**

A) 10次 B) 100次 C) 500次 D) 1000次

**答案：A**

## **19. 哪种排序算法在最好情况下时间复杂度是O(n)？**

A) 冒泡排序 B) 选择排序 C) 插入排序 D) 二分查找

**答案：C**

## **20. 在二分查找中，当**`arr[mid] < target`**时，应该：**

A) `left = mid` B) `left = mid + 1` C) `right = mid` D) `right = mid + 1`

**答案：B**

------

## **答案解析：**

1. **D** - 冒泡排序通过相邻元素比较和交换来工作
2. **A** - 选择排序每次选择最小元素放到正确位置
3. **C** - 插入排序在基本有序的数组上性能最好
4. **C** - 顺序查找需要检查每个元素，时间复杂度O(n)
5. **B** - 二分查找要求数组必须已排序
6. **B** - 冒泡排序每轮将最大的元素"冒泡"到最后
7. **B** - 选择排序每轮只交换一次，比冒泡排序交换次数少
8. **A** - 插入排序保持前i-1个元素有序
9. **B** - 顺序查找简单，适合小型无序数据集
10. **A** - 二分查找每次将搜索范围减半
11. **B** - 冒泡排序是稳定的，选择排序不稳定
12. **C** - 顺序查找最坏情况需要检查所有n个元素
13. **B** - 二分查找每次范围减半，时间复杂度O(log n)
14. **C** - 这是标准的冒泡排序实现
15. **B** - 这是标准的插入排序实现
16. **A** - 这是标准的顺序查找实现
17. **B** - 这是标准的二分查找实现
18. **A** - 2¹⁰=1024>1000，所以最多10次比较
19. **C** - 插入排序在最好情况下（已排序数组）是O(n)
20. **B** - 目标在右侧，所以左边界设为mid+1

------

**得分参考：**

- 16-20题：优秀！算法理解很扎实
- 11-15题：良好！掌握了核心概念
- 6-10题：需要复习一些重要概念
- 0-5题：建议重新学习这些基础算法

希望这些题目能帮助你巩固所学的算法知识！



# C# 中的二分查找法 - 初学者指南

二分查找（Binary Search）是一种高效的查找算法，它比顺序查找快得多，但有一个重要前提：**数据必须是有序的**。

## **1. 核心思想：猜数字游戏**

想象一下猜数字游戏：我心中想一个1-100之间的数字，你每次猜一个数，我会告诉你"大了"、"小了"还是"对了"。

**最聪明的策略**：总是猜中间的数！

- 第一次猜50
- 如果我说"大了"，你就猜25（1-50的中间）
- 如果我说"小了"，你就猜75（50-100的中间）

这样每次都能排除一半的可能性！这就是二分查找的核心思想。

## **2. 算法步骤详解**

假设我们在有序数组 `[2, 5, 8, 12, 16, 23, 38, 45, 56, 72]` 中查找 `23`：

1. **确定范围**：开始时，整个数组都是查找范围
   - 左边界 `left = 0`（第一个元素）
   - 右边界 `right = 9`（最后一个元素）
2. **计算中间位置**：`mid = (0 + 9) / 2 = 4`（取整）
   - 中间值 `arr[4] = 16`
   - 目标值 `23 > 16`，所以在右半部分继续查找
3. **调整范围**：左边界移动到 `mid + 1 = 5`
   - 新范围：索引 5 到 9
   - 新中间：`mid = (5 + 9) / 2 = 7`
   - 中间值 `arr[7] = 45`
   - 目标值 `23 < 45`，所以在左半部分继续查找
4. **继续查找**：右边界移动到 `mid - 1 = 6`
   - 新范围：索引 5 到 6
   - 新中间：`mid = (5 + 6) / 2 = 5`
   - 中间值 `arr[5] = 23` ← **找到了！**

## **3. C# 代码实现**

### **迭代版本（推荐初学者使用）**

```
using System;

class BinarySearch
{
    // 二分查找方法 - 迭代版本
    static int BinarySearchIterative(int[] array, int target)
    {
        int left = 0;
        int right = array.Length - 1;
        
        while (left <= right)
        {
            // 计算中间位置（防止整数溢出）
            int mid = left + (right - left) / 2;
            
            Console.WriteLine($"查找范围: [{left}-{right}], 中间位置: {mid}, 值: {array[mid]}");
            
            // 检查中间元素
            if (array[mid] == target)
            {
                return mid;  // 找到了！
            }
            // 如果目标值更大，忽略左半部分
            else if (array[mid] < target)
            {
                left = mid + 1;
                Console.WriteLine($"  目标 {target} > {array[mid]}，向右查找");
            }
            // 如果目标值更小，忽略右半部分
            else
            {
                right = mid - 1;
                Console.WriteLine($"  目标 {target} < {array[mid]}，向左查找");
            }
        }
        
        return -1;  // 没找到
    }
    
    static void Main()
    {
        int[] sortedNumbers = { 2, 5, 8, 12, 16, 23, 38, 45, 56, 72 };
        int target = 23;
        
        Console.WriteLine("=== 二分查找演示 ===");
        Console.WriteLine($"有序数组: [{string.Join(", ", sortedNumbers)}]");
        Console.WriteLine($"目标值: {target}");
        Console.WriteLine("开始查找...\n");
        
        int result = BinarySearchIterative(sortedNumbers, target);
        
        Console.WriteLine("\n=== 查找结果 ===");
        if (result != -1)
        {
            Console.WriteLine($"找到了！数字 {target} 在索引位置 {result}");
        }
        else
        {
            Console.WriteLine($"数字 {target} 不在数组中");
        }
    }
}
```

### **递归版本（了解即可）**

```
// 二分查找方法 - 递归版本
static int BinarySearchRecursive(int[] array, int target, int left, int right)
{
    if (left > right)
    {
        return -1;  // 基础情况：没找到
    }
    
    int mid = left + (right - left) / 2;
    
    if (array[mid] == target)
    {
        return mid;  // 基础情况：找到了
    }
    else if (array[mid] < target)
    {
        // 递归调用：在右半部分查找
        return BinarySearchRecursive(array, target, mid + 1, right);
    }
    else
    {
        // 递归调用：在左半部分查找
        return BinarySearchRecursive(array, target, left, mid - 1);
    }
}

// 使用递归版本
int result = BinarySearchRecursive(sortedNumbers, target, 0, sortedNumbers.Length - 1);
```

## **4. 完整示例：带详细日志**

```
using System;

class BinarySearchDetailed
{
    static void Main()
    {
        int[] numbers = { 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 };
        int[] targets = { 7, 20, 25, 0 };
        
        foreach (int target in targets)
        {
            Console.WriteLine($"\n{'='.PadRight(40, '=')}");
            Console.WriteLine($"查找目标值: {target}");
            Console.WriteLine($"数组: [{string.Join(", ", numbers)}]");
            
            int result = BinarySearchWithLogging(numbers, target);
            
            if (result != -1)
            {
                Console.WriteLine($"✅ 成功！目标值 {target} 在索引 {result} 位置");
            }
            else
            {
                Console.WriteLine($"❌ 失败！目标值 {target} 不在数组中");
            }
        }
    }
    
    static int BinarySearchWithLogging(int[] array, int target)
    {
        int left = 0;
        int right = array.Length - 1;
        int steps = 0;
        
        while (left <= right)
        {
            steps++;
            int mid = left + (right - left) / 2;
            
            Console.WriteLine($"步骤{steps}: 检查范围 [{left}-{right}]，中间索引 {mid}，值 {array[mid]}");
            
            if (array[mid] == target)
            {
                Console.WriteLine($"  比较: {array[mid]} == {target} ✓");
                Console.WriteLine($"  总共用了 {steps} 步查找");
                return mid;
            }
            else if (array[mid] < target)
            {
                Console.WriteLine($"  比较: {array[mid]} < {target}，向右查找 →");
                left = mid + 1;
            }
            else
            {
                Console.WriteLine($"  比较: {array[mid]} > {target}，向左查找 ←");
                right = mid - 1;
            }
        }
        
        Console.WriteLine($"  查找结束，总共用了 {steps} 步");
        return -1;
    }
}
```

## **5. 算法特点分析**

### **优点：**

- ✅ **极快**：时间复杂度 O(log n)，比顺序查找的 O(n) 快得多
- ✅ **高效**：数据量越大，优势越明显
- ✅ **简单**：逻辑清晰，容易理解

### **缺点：**

- ❌ **必须有序**：要求数据预先排序
- ❌ **内存连续**：通常需要数组这样的连续存储结构
- ❌ **不适合动态数据**：如果数据频繁变动，维护排序的成本高

## **6. 时间复杂度对比**

| **数据量**  | **顺序查找（最坏）** | **二分查找（最坏）** |
| ----------- | -------------------- | -------------------- |
| 10个元素    | 10次比较             | 4次比较              |
| 100个元素   | 100次比较            | 7次比较              |
| 1000个元素  | 1000次比较           | 10次比较             |
| 100万个元素 | 100万次比较          | 20次比较             |

**惊人的效率差异**：在100万个元素中查找，顺序查找最多需要100万次比较，而二分查找最多只需要20次！

## **7. 重要细节说明**

### **为什么使用** `left + (right - left) / 2`**？**

这是为了防止整数溢出。如果使用 `(left + right) / 2`，当 left 和 right 都很大时，left + right 可能超过 int 的最大值。

```
// 安全的方式（推荐）
int mid = left + (right - left) / 2;

// 有风险的方式（不推荐）
int mid = (left + right) / 2;  // 可能溢出！
```

### **边界条件处理**

```
// 检查数组是否为空
if (array == null || array.Length == 0)
{
    return -1;
}

// 检查目标值是否在数组范围内（可选优化）
if (target < array[0] || target > array[array.Length - 1])
{
    return -1;  // 肯定不在数组中
}
```

## **8. 实际应用练习**

### **练习1：查找第一个大于等于目标的值**

```
// 查找第一个大于或等于目标值的元素位置
static int FindFirstGreaterOrEqual(int[] array, int target)
{
    int left = 0;
    int right = array.Length - 1;
    int result = -1;
    
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        
        if (array[mid] >= target)
        {
            result = mid;  // 记录候选位置
            right = mid - 1;  // 继续向左找更小的满足条件的位置
        }
        else
        {
            left = mid + 1;
        }
    }
    
    return result;  // 返回第一个满足条件的位置，或-1
}
```

### **练习2：使用 C# 内置方法**

```
// C# 提供了内置的二分查找方法
int[] numbers = { 1, 3, 5, 7, 9, 11, 13 };
int index = Array.BinarySearch(numbers, 7);

if (index >= 0)
{
    Console.WriteLine($"找到在位置 {index}");
}
else
{
    Console.WriteLine("未找到");
}
```

## **9. 常见错误与调试技巧**

### **常见错误：**

1. **忘记排序**：对无序数组使用二分查找
2. **边界错误**：left `<=` right 写成 left `<` right
3. **更新错误**：left = mid 而不是 left = mid + 1

### **调试技巧：**

```
// 添加调试输出
Console.WriteLine($"left={left}, right={right}, mid={mid}, array[mid]={array[mid]}");

// 或者使用调试器设置断点，观察变量变化
```

## **总结**

二分查找是必须掌握的重要算法：

- **前提**：数据必须有序
- **核心**：每次排除一半的搜索范围
- **优势**：极其高效，特别适合大型数据集
- **关键**：正确处理边界条件和中间值计算

**记住**：当有人问"这个数据需要排序吗？"，如果要用二分查找，答案就是"必须排序！"

试着运行上面的代码，修改参数来体验二分查找的强大威力吧！