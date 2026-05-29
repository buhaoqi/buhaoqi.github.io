---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务五 同步实验  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务五 同步实验  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 6  # 侧边栏中排在第1位
---
### 实验题汇总
#### 实验1
尝试定义一个一维数组，并将其元素输出。

---

#### 实验2
1. 求若干学生的平均身高、最高身高、最低身高。
2. 已知10个学生的身高为156、150、167、178、180、176、173、154、155、158（cm），求平均身高、最高身高、最低身高。

---

#### 实验3
使用数组打印杨辉三角，杨辉三角是一个有数字排列成的三角形数表，其特征是它的两边都是由数字1组成的，而其余的数则等于它上方的两个数之和。

---

我直接给你写**完整可运行、带注释、可直接复制运行**的 C# 代码，你打开 VS / VS Code 新建控制台项目就能跑。


## 参考答案
### 实验1：定义一维数组并输出元素
```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        // 1. 定义一个一维数组
        int[] arr = { 10, 20, 30, 40, 50, 60 };

        // 2. 输出数组所有元素
        Console.WriteLine("一维数组元素：");
        for (int i = 0; i < arr.Length; i++)
        {
            Console.Write(arr[i] + " ");
        }

        Console.ReadLine();
    }
}
```

---

### 实验2：求10个学生平均身高、最高、最低身高
已知身高：156、150、167、178、180、176、173、154、155、158

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        // 10个学生身高
        int[] heights = { 156, 150, 167, 178, 180, 176, 173, 154, 155, 158 };

        int sum = 0;
        int max = heights[0];
        int min = heights[0];

        // 遍历计算总和、最高、最低
        foreach (int h in heights)
        {
            sum += h;
            if (h > max) max = h;
            if (h < min) min = h;
        }

        // 计算平均值
        double avg = sum / (double)heights.Length;

        // 输出结果
        Console.WriteLine("平均身高：" + avg.ToString("0.00"));
        Console.WriteLine("最高身高：" + max);
        Console.WriteLine("最低身高：" + min);

        Console.ReadLine();
    }
}
```

运行结果

```
平均身高：164.70
最高身高：180
最低身高：150
```

---

### 实验3：使用数组打印杨辉三角
```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        int rows = 8; // 打印8行杨辉三角，可修改
        int[][] triangle = new int[rows][];

        // 构建杨辉三角
        for (int i = 0; i < rows; i++)
        {
            triangle[i] = new int[i + 1];
            triangle[i][0] = 1; // 最左边是1
            triangle[i][i] = 1; // 最右边是1

            // 中间数字 = 上方两个数字之和
            for (int j = 1; j < i; j++)
            {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }

        // 输出杨辉三角
        Console.WriteLine("杨辉三角：");
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < triangle[i].Length; j++)
            {
                Console.Write(triangle[i][j] + " ");
            }
            Console.WriteLine();
        }

        Console.ReadLine();
    }
}
```

运行结果

```
杨辉三角：
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
```

---

### 总结
- 三个实验代码**全部可直接运行**
- 注释清晰，适合交作业、复习、考试
- 输出格式标准，直接复制到 C# 控制台项目即可使用




## 案例1：输出 1,2,3



## 案例2：输出4,5,6



## 案例3：输出 3,6,9



## 案例 4：输出 4,5,7



## 案例5：输出5,4,3,2,1



## 案例6：输出1 ～ 50之间的偶数



## 案例7：输出1～50之间能被 3 整除的数不能被 9 整除


## 案例8：输出1～100的整数和



## 案例9：统计1～100之间有多少个偶数



## 案例10：统计 1～100之间的奇数和


