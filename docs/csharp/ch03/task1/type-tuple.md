---
# 这部分是关键！侧边栏显示名由这里决定
title: 元组 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 元组  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 6  # 侧边栏中排在第1位
---

## 元组（ValueTuple）从入门到精通 完整版代码
这份代码**复制即可直接运行**，包含了 C# 元组 **90% 常用知识点**，从最基础到高级用法全覆盖，特别适合你做**贪吃蛇、控制台游戏**。

```csharp
using System;
using System.Collections.Generic;

// 完整版：C# 值元组 (ValueTuple) 全用法教程
class TupleFullDemo
{
    static void Main()
    {
        // ==============================================
        // 【1】基础用法：创建元组
        // ==============================================
        Console.WriteLine("=== 1. 创建元组 ===");

        // 方式1：隐式类型（最简单）
        var point1 = (10, 20);
        Console.WriteLine($"point1：x={point1.Item1}, y={point1.Item2}");

        // 方式2：命名元组（最推荐！！！）
        (int x, int y) point2 = (30, 40);
        Console.WriteLine($"point2：x={point2.x}, y={point2.y}");

        // 方式3：先声明，后赋值
        (int w, int h) size;
        size.w = 50;
        size.h = 60;
        Console.WriteLine($"size：w={size.w}, h={size.h}");


        // ==============================================
        // 【2】元组解构（拆包）—— 超级好用
        // ==============================================
        Console.WriteLine("\n=== 2. 元组解构 ===");

        // 直接把元组拆成两个变量
        (int a, int b) = (100, 200);
        Console.WriteLine($"a = {a}, b = {b}");

        // 用在循环里（贪吃蛇核心写法）
        List<(int x, int y)> snakeParts = new List<(int, int)>
        {
            (5,5), (6,5), (7,5)
        };
        foreach (var (x, y) in snakeParts)
        {
            Console.WriteLine($"蛇身坐标：({x}, {y})");
        }


        // ==============================================
        // 【3】方法返回多个值（元组最大用途）
        // ==============================================
        Console.WriteLine("\n=== 3. 方法多返回值 ===");

        var result = GetMaxMin(99, 66);
        Console.WriteLine($"最大值：{result.max}");
        Console.WriteLine($"最小值：{result.min}");

        // 直接解构接收
        (int max, int min) = GetMaxMin(88, 11);
        Console.WriteLine($"直接拆包：max={max}, min={min}");


        // ==============================================
        // 【4】不同类型混合元组
        // ==============================================
        Console.WriteLine("\n=== 4. 混合类型元组 ===");
        (string name, int age, bool isStudent) student = ("小明", 20, true);
        Console.WriteLine($"姓名：{student.name}，年龄：{student.age}，是学生：{student.isStudent}");


        // ==============================================
        // 【5】元组作为List元素（你的贪吃蛇专用）
        // ==============================================
        Console.WriteLine("\n=== 5. 元组 + List（贪吃蛇核心） ===");

        // 这就是你问的那行代码！
        List<(int x, int y)> snake = new List<(int, int)>();

        // 添加身体
        snake.Add((2, 2));
        snake.Add((3, 2));
        snake.Add((4, 2));

        // 遍历
        for (int i = 0; i < snake.Count; i++)
        {
            Console.WriteLine($"第{i}节：({snake[i].x}, {snake[i].y})");
        }


        // ==============================================
        // 【6】元组比较（值比较）
        // ==============================================
        Console.WriteLine("\n=== 6. 元组比较 ===");
        (int x, int y) p1 = (10, 20);
        (int x, int y) p2 = (10, 20);
        Console.WriteLine($"p1 和 p2 相等吗？{p1.Equals(p2)}");


        // ==============================================
        // 【7】高级用法：作为方法参数
        // ==============================================
        Console.WriteLine("\n=== 7. 元组作为参数 ===");
        DrawPoint((5, 5));


        Console.WriteLine("\n按任意键退出...");
        Console.ReadKey();
    }

    // 方法：返回两个值（最大值、最小值）
    static (int max, int min) GetMaxMin(int num1, int num2)
    {
        if (num1 > num2)
            return (num1, num2);
        else
            return (num2, num1);
    }

    // 方法：接收元组参数
    static void DrawPoint((int x, int y) pos)
    {
        Console.SetCursorPosition(pos.x, pos.y);
        Console.Write("■");
    }
}
```

---

# 这份代码包含的核心知识点（你必须掌握）
## 1. **命名元组**（最重要）
```csharp
(int x, int y) point = (10, 20);
point.x   point.y
```
👉 写贪吃蛇坐标**必须用这个**。

## 2. **元组解构**
```csharp
foreach (var (x, y) in snake)
```
👉 画蛇的时候一行代码拿到坐标。

## 3. **List + 元组**（你的贪吃蛇本体）
```csharp
List<(int x, int y)> snake = new List<(int, int)>();
```
👉 一节一节的蛇身。

## 4. **方法多返回值**
```csharp
(int max, int min) GetMaxMin(...)
```
👉 C# 最实用的元组用法。

---

# 你运行后会看到什么？
- 基础元组创建
- 拆包用法
- 多返回值演示
- 混合类型
- **贪吃蛇坐标列表演示**
- 控制台画点（用到了你之前学的 `SetCursorPosition`）

---

### 总结
学会这份代码，你就**完全精通 C# 元组**了！
而且**正好能直接用来写贪吃蛇**。

需要我把**元组 + 光标控制 + 贪吃蛇雏形**整合在一起，给你一个能跑的迷你版贪吃蛇吗？直接就能动的那种！