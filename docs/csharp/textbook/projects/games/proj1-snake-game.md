---
noteId: "30b5be10dfbf11f0a0d2c9e09f59255f"
tags: []

---

对于初学者来说，直接写一个带图形界面的贪吃蛇可能太复杂了。我们设计一道**“控制台字符版贪吃蛇”**。它能让你一次性练透：**二维坐标、`List` 集合、循环、以及输入检测**。

---

## 贪吃蛇题目

### 题目：控制台“简易贪吃蛇”挑战

**目标：**
在一个  的网格中，控制一个由字符（如 `O`）组成的蛇。蛇会自动移动，你需要通过键盘控制方向去吃食物（如 `*`）。每吃到一个食物，蛇身变长，得分增加。

---

### 核心代码框架（填空式练习）

我为你准备了基础结构和**三个关键任务**。你可以尝试补全代码：

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

class Program
{
    // 蛇的坐标点集合
    static List<int[]> snake = new List<int[]>();
    static int[] food = new int[2];
    static int direction = 0; // 0:右, 1:下, 2:左, 3:上
    static bool isGameOver = false;

    static void Main()
    {
        Console.CursorVisible = false;
        // 初始化蛇：起始位置在 (5,5)
        snake.Add(new int[] { 5, 5 });
        GenerateFood();

        while (!isGameOver)
        {
            // 1. 检测输入
            if (Console.KeyAvailable)
            {
                var key = Console.ReadKey(true).Key;
                if (key == ConsoleKey.UpArrow) direction = 3;
                if (key == ConsoleKey.DownArrow) direction = 1;
                if (key == ConsoleKey.LeftArrow) direction = 2;
                if (key == ConsoleKey.RightArrow) direction = 0;
            }

            // 2. 移动蛇逻辑
            Move();

            // 3. 绘制界面
            Draw();

            Thread.Sleep(200); // 控制游戏速度
        }
        Console.WriteLine("\n游戏结束！");
    }

    static void Move()
    {
        // 获取当前头部坐标
        int[] head = snake.Last();
        int newX = head[0];
        int newY = head[1];

        // 【任务1】：根据 direction 更新 newX 和 newY 的坐标
        // 提示：0是向右(X++)，1是向下(Y++) ...

        int[] newHead = new int[] { newX, newY };

        // 【任务2】：检查碰撞
        // 如果 newHead 撞墙（坐标 < 0 或 > 20）或 撞到自己，则 isGameOver = true;

        snake.Add(newHead);

        // 【任务3】：吃食物逻辑
        // 如果 newHead 的坐标等于 food 的坐标，则不移除蛇尾并生成新食物
        // 否则，移除蛇尾：snake.RemoveAt(0);
    }

    static void GenerateFood()
    {
        Random rd = new Random();
        food[0] = rd.Next(0, 20);
        food[1] = rd.Next(0, 20);
    }

    static void Draw()
    {
        Console.Clear();
        // 绘制食物
        Console.SetCursorPosition(food[0], food[1]);
        Console.Write("*");
        // 绘制蛇
        foreach (var pos in snake)
        {
            Console.SetCursorPosition(pos[0], pos[1]);
            Console.Write("O");
        }
    }
}

```

---

### 知识点解析

这个练习包含三个进阶必学点：

1. **`List<int[]>` 存储身体**：
蛇的每一节都是一个坐标 `[x, y]`。当蛇移动时，我们在 `List` 的末尾添加一个新头，并删掉最前面的一个尾巴，这在视觉上就是“移动”。
2. **游戏循环 (Game Loop)**：
`while(!isGameOver)` 是所有游戏的核心。它不断地执行：**获取输入 -> 更新逻辑 -> 渲染画面**。
3. **坐标系与缓冲区**：
控制台的左上角是 `(0, 0)`。`Console.SetCursorPosition` 能让你直接在指定坐标打印字符。

---

### 挑战任务

如果你补全了代码，可以尝试增加这些功能：

* **计分板**：在屏幕上方实时显示吃了多少个食物。
* **加速机制**：每吃 5 个食物，`Thread.Sleep` 的数值减少，让蛇跑得更快。
* **穿墙模式**：当蛇从右边冲出屏幕时，让它从左边钻出来。

**你想让我给出【任务1、2、3】的完整逻辑代码吗？**

## 完整游戏代码

这是一个非常棒的练习！完成这个游戏意味着你已经能够处理**实时输入**和**动态坐标逻辑**了。

以下是完整的 C# 控制台贪吃蛇代码。我补全了移动、碰撞检测和吃食物的逻辑，并添加了一些细节（如防止蛇直接掉头自杀）来增加游戏的完整性。

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

class Program
{
    static int width = 30;  // 游戏区域宽度
    static int height = 20; // 游戏区域高度
    static List<int[]> snake = new List<int[]>();
    static int[] food = new int[2];
    static int direction = 0; // 0:右, 1:下, 2:左, 3:上
    static bool isGameOver = false;
    static int score = 0;
    static Random rd = new Random();

    static void Main()
    {
        Console.Title = "C# 基础练习：简易贪吃蛇";
        Console.CursorVisible = false; // 隐藏光标
        
        // 初始蛇身（三节）
        snake.Add(new int[] { 5, 5 });
        snake.Add(new int[] { 6, 5 });
        snake.Add(new int[] { 7, 5 });
        
        GenerateFood();

        // 游戏主循环
        while (!isGameOver)
        {
            // 1. 获取输入
            if (Console.KeyAvailable)
            {
                ConsoleKey key = Console.ReadKey(true).Key;
                // 防止直接掉头（例如向右移动时不能按左）
                if (key == ConsoleKey.UpArrow && direction != 1) direction = 3;
                else if (key == ConsoleKey.DownArrow && direction != 3) direction = 1;
                else if (key == ConsoleKey.LeftArrow && direction != 0) direction = 2;
                else if (key == ConsoleKey.RightArrow && direction != 2) direction = 0;
            }

            // 2. 逻辑更新
            Move();

            // 3. 渲染画面
            Draw();

            // 控制速度：随着分数增加，速度略微加快
            int speed = Math.Max(50, 200 - (score * 5));
            Thread.Sleep(speed);
        }

        Console.Clear();
        Console.SetCursorPosition(width / 2 - 5, height / 2);
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"游戏结束！最终得分: {score}");
        Console.ResetColor();
        Console.ReadKey();
    }

    static void Move()
    {
        // 获取当前蛇头位置
        int[] head = snake.Last();
        int nextX = head[0];
        int nextY = head[1];

        // 【任务1实现】：根据方向计算下一个坐标
        switch (direction)
        {
            case 0: nextX++; break; // 右
            case 1: nextY++; break; // 下
            case 2: nextX--; break; // 左
            case 3: nextY--; break; // 上
        }

        // 【任务2实现】：碰撞检测
        // A. 撞墙检测
        if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height)
        {
            isGameOver = true;
            return;
        }

        // B. 撞身体检测
        foreach (var body in snake)
        {
            if (nextX == body[0] && nextY == body[1])
            {
                isGameOver = true;
                return;
            }
        }

        int[] newHead = new int[] { nextX, nextY };
        snake.Add(newHead);

        // 【任务3实现】：吃食物检测
        if (nextX == food[0] && nextY == food[1])
        {
            score++;
            GenerateFood(); // 吃到食物，不删除尾部，蛇变长
        }
        else
        {
            snake.RemoveAt(0); // 没吃到食物，删除尾部，保持长度
        }
    }

    static void GenerateFood()
    {
        food[0] = rd.Next(0, width);
        food[1] = rd.Next(0, height);
        // 确保食物不会生成在蛇身上
        foreach(var part in snake) {
            if (part[0] == food[0] && part[1] == food[1]) {
                GenerateFood();
                break;
            }
        }
    }

    static void Draw()
    {
        Console.Clear();
        
        // 绘制边框
        for (int i = 0; i <= width; i++) {
            Console.SetCursorPosition(i, height);
            Console.Write("-");
        }

        // 绘制食物
        Console.SetCursorPosition(food[0], food[1]);
        Console.ForegroundColor = ConsoleColor.Green;
        Console.Write("*");

        // 绘制蛇身
        Console.ForegroundColor = ConsoleColor.Yellow;
        foreach (var pos in snake)
        {
            Console.SetCursorPosition(pos[0], pos[1]);
            Console.Write("O");
        }
        
        Console.ResetColor();
        Console.SetCursorPosition(0, height + 1);
        Console.Write($"得分: {score}  方向: {(direction == 0 ? "右" : direction == 1 ? "下" : direction == 2 ? "左" : "上")}");
    }
}

```

---

### 💡 核心逻辑深度解析

#### 1. 坐标系与“移动”的真相

初学者最容易困惑的是蛇怎么“动”起来。

* **真相**：我们并不是在移动整个数组，而是每一帧执行一次“**掐头去尾**”。
* 在 `snake` 列表的末尾增加一个新坐标（新头），然后删除列表索引为 `0` 的坐标（旧尾）。如果你吃到了食物，就跳过“删除尾部”这一步，蛇自然就变长了。

#### 2. `Thread.Sleep` 与 `Console.KeyAvailable`

* 如果没有 `Thread.Sleep`，程序会运行得飞快，你根本看不清蛇。
* `Console.KeyAvailable` 非常关键，它允许程序在**没有按键按下时继续运行**。如果直接用 `Console.ReadKey()`，程序会停在那里死等玩家按键，蛇就不会自动跑了。

#### 3. 游戏边界

控制台的坐标 `(x, y)` 中，`x` 代表列（左到右），`y` 代表行（上到下）。在判断撞墙时，我们检查 `nextX` 是否超出了 `0` 到 `width-1` 的范围。

---

**这段代码运行成功后，你已经跨过了 C# 入门最难的一道坎！你想尝试给这个游戏增加一个“关卡系统”（比如吃够 10 个食物换一个地图布局）吗？**