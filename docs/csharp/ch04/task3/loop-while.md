---
# 这部分是关键！侧边栏显示名由这里决定
title: 2.while 循环语句  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 2.while 循环语句  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---


## 案例


## 一、什么是 `while` 循环

**定义：**

> `while` 是一种 **循环控制语句**，只要指定的 **条件为 `true`**，程序就会 **反复执行一段代码**。

简单理解：

```
while = 条件满足就一直执行
```

你可能想问：如何控制循环的退出？

> 有四种常见的停止循环的方法：1.使用数字变量 2.布尔值 3.使用哨兵值 4.使用 break

---

## 二、while 语法结构

```csharp
while (条件)
{
    循环体
}
```

说明：

| 部分    | 含义                  |
| ----- | ------------------- |
| while | 关键字                 |
| 条件    | 返回 `true` 或 `false` |
| 循环体   | 需要重复执行的代码           |

---



## 三、使用数字变量退出循环

示例1: 输出 5 次 Hello World
```csharp
int i = 0;
while (i < 5)
{
    Console.WriteLine("Hello C#");
    i++;
}
```

示例2: 输出1到10
```csharp
int i = 1;
while (i <= 10)
{
    Console.Write(i + " ");
    i++;
}
```

示例3: 计算1~100的和
```csharp
int sum = 0;
int i = 1;
while (i <= 100)
{
    sum += i;
    i++;
}
Console.WriteLine("1~100的和：" + sum);
```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```
## 四、使用布尔值退出循环
示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

## 五、使用哨兵值退出循环
示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

## 六、使用break退出循环
示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

示例 1: 输出 5 次 Hello World
```csharp

```

## 六、while 常见应用场景

`while` 常用于 **循环次数不确定的情况**。

例如：

| 场景     | 示例    |
| ------ | ----- |
| 用户输入   | 输入密码  |
| 数据读取   | 文件读取  |
| 游戏循环   | 游戏主循环 |
| 网络通信   | 等待数据  |
| 输入结束标志 | 输入0结束 |

---
## 哨兵值

定义：只把「用来终止未知次数循环」的那个值叫哨兵。

哨兵循环：带“终止标记”的特殊条件循环

**哨兵循环本质上就是一种条件循环**。

### 哨兵循环（Sentinel Loop）
**专门用一个特定的值（哨兵值）来控制循环结束**的 while 循环。

- 哨兵值 = **循环的终止信号**
- 哨兵值**不是有效数据**，只是用来告诉程序：“可以停了”

---

最直观的区别：用途不同

普通条件循环

多用于**知道循环范围/次数**的场景
```python
# 普通条件循环：循环 5 次
i = 0
while i < 5:
    print(i)
    i += 1
```

哨兵循环

多用于**不知道要循环多少次**，**让用户决定什么时候停**
```python
# 哨兵循环：输入 'q' 就停止
while True:
    user = input("输入内容（输入 q 退出）：")
    if user == 'q':  # q 就是哨兵值
        break
    print("你输入了：", user)
```

哨兵循环的核心特征

只要满足下面 3 点，就是哨兵循环：

1. 循环**不知道要执行多少次**
2. 有一个**特殊值（哨兵）**用来结束循环
3. 哨兵值**不参与数据处理**，只负责“关门”

---

经典哨兵循环例子（最容易理解）

```python
# 累加输入的数字，输入 -1 停止
total = 0
while True:
    num = int(input("输入数字（-1 停止）："))
    
    if num == -1:  # -1 就是哨兵
        break
    
    total += num  # 只有非哨兵值才参与计算

print("总和：", total)
```

这里：
- `-1` 是**哨兵值**
- 程序**不知道用户会输几个数字**
- 只有用户输入 `-1`，循环才结束

一句话总结区别

| 类型 | 特点 | 典型场景 |
|------|------|----------|
| **条件循环** | 用任意条件控制循环 | 固定次数、范围判断 |
| **哨兵循环** | **用一个特定值控制结束** | 未知次数、用户主动停止 |

👉 **哨兵循环 = 条件循环的一种特殊用法**
不是新语法，只是**设计思路不同**。

---

### 总结
1. 哨兵循环**不是新东西**，就是 while 循环
2. 它的特点：**用一个特殊值（哨兵）来终止循环**
3. 适用场景：**不知道循环多少次，让用户/数据决定何时停止**
4. 和普通条件循环的关系：**哨兵循环 ⊂ 条件循环**



## 数值变量退出循环
### 第1题：输出5次“Hello C#”
```csharp
int i = 0;
while (i < 5)
{
    Console.WriteLine("Hello C#");
    i++;
}
```

### 第2题：输出1到10
```csharp
int i = 1;
while (i <= 10)
{
    Console.Write(i + " ");
    i++;
}
```

### 第3题：计算1~100的和
```csharp
int sum = 0;
int i = 1;
while (i <= 100)
{
    sum += i;
    i++;
}
Console.WriteLine("1~100的和：" + sum);
```

### 第4题：输出1~100的偶数
```csharp
int i = 1;
while (i <= 100)
{
    if (i % 2 == 0)
    {
        Console.Write(i + " ");
    }
    i++;
}
```

### 第5题：计算1~100的偶数和
```csharp
int sum = 0;
int i = 1;
while (i <= 100)
{
    if (i % 2 == 0)
    {
        sum += i;
    }
    i++;
}
Console.WriteLine("偶数和：" + sum);
```

### 第6题：输入5个数求平均值
```csharp
int count = 0;
int sum = 0;
while (count < 5)
{
    Console.Write("输入数字：");
    int num = int.Parse(Console.ReadLine());
    sum += num;
    count++;
}
double avg = sum / 5.0;
Console.WriteLine("平均值：" + avg);
```

## break退出循环
### 第1题：统计正数个数（输入0结束）
```csharp
int positiveCount = 0;
while (true)
{
    Console.Write("输入数字：");
    int num = int.Parse(Console.ReadLine());

    if (num == 0)
        break;

    if (num > 0)
        positiveCount++;
}
Console.WriteLine("正数个数：" + positiveCount);
```

### 第2题：统计输入数字的和（输入0结束）
```csharp
int sum = 0;
while (true)
{
    Console.Write("输入数字：");
    int num = int.Parse(Console.ReadLine());

    if (num == 0)
        break;

    sum += num;
}
Console.WriteLine("总和：" + sum);
```


## 哨兵值退出循环

### 第1题：密码验证器

1. 正确密码：`abc123`
2. 让用户重复输入密码，**直到输入正确才结束**。
3. 输入错误提示：“密码错误，请重新输入！”
4. 输入正确提示：“登录成功！”

```csharp
string pwd1 = "123456";
string pwd2 = "";

// 只要密码不正确，就一直循环
while (pwd2 != pwd1)
{
    Console.Write("请输入密码：");
    pwd2 = Console.ReadLine();

    if (pwd2 != pwd1)
    {
        Console.WriteLine("密码错误，请重新输入！");
    }
}
Console.WriteLine("登录成功！");
```
### 第2题：猜数字游戏
要求：

1. 随机生成一个 1~10 的数字。
2. 让用户一直猜，直到猜对。
3. 猜大了提示：“太大了，再小一点”
4. 猜小了提示：“太小了，再大一点”
5. 猜对提示：“恭喜你，猜对了！”

```csharp
Random r = new Random();

// 生成1~100随机数
int target = r.Next(1, 101);

int guess = 0;

while (guess != target)
{
    Console.Write("请输入你猜的数字：");
    guess = int.Parse(Console.ReadLine());

    if (guess > target)
    {
        Console.WriteLine("猜大了！");
    }
    else if (guess < target)
    {
        Console.WriteLine("猜小了！");
    }
}
Console.WriteLine("恭喜你猜对了！");
```

### 第3题：幸运抽奖机（while + Random）
**题目**：不断生成 1~10 随机数，直到抽到 7 才停止。

```csharp
Random r = new Random();
int num = 0;

while (num != 7)
{
    num = r.Next(1, 11);
    Console.WriteLine("抽到：" + num);
}
Console.WriteLine("恭喜抽中幸运数字7！");
```

## 案例4：反向输出一个整数

说明：用户在控制台输入：123 ，程序要输出：321

方法：辗转相除法

```csharp
// 0.定义两个变量
int n,m;
// 1.输出程序名称
Console.WriteLine("整数反转器");
// 2.输出提示语
Console.Write("请输入一个整数：");
// 3.存储用户输入(int.Parse()把字符串数字转整数)
n = int.Parse(Console.ReadLine());
// 4.辗转相除: 除到 n == 0
Console.Write($"{n}反转后是:");
while(n != 0)
{
  // n = 120 % 10 + 3 => 3
  m = n % 10; // 提取个位 3
  // 123 => 12
  n = n / 10;
  Console.Write(m);
}
```


## 进阶题
### 第1题：拆单专家

```csharp
// 1. 初始化设置
Random rd = new Random();
int bombPassword = rd.Next(1, 101); // 1-100 随机密码
int chances = 5; 
bool isDefused = false;

// 设置初始界面：白底黑字，更有“任务单”的严肃感
Console.BackgroundColor = ConsoleColor.White;
Console.ForegroundColor = ConsoleColor.Black;
Console.Clear(); 

Console.WriteLine("========= 紧急任务：拆弹专家 =========");
Console.WriteLine($"警告：密码范围 1-100，你只有 {chances} 次机会！");
Console.WriteLine("======================================");

// 2. 游戏主循环
for (int i = 1; i <= chances; i++)
{
    // 输入时恢复默认黑底，方便看清输入的数字
    Console.BackgroundColor = ConsoleColor.Black;
    Console.ForegroundColor = ConsoleColor.White;
    
    Console.Write($"\n第 {i} 次拆解，请输入密码：");
    
    // 使用最基础的强制转换（假设学生目前输入都是合规数字）
    int guess = int.Parse(Console.ReadLine());

    if (guess == bombPassword)
    {
        // 成功：全屏变绿
        Console.BackgroundColor = ConsoleColor.Green;
        Console.ForegroundColor = ConsoleColor.White;
        Console.Clear();
        Console.WriteLine("\n\n\n   【 成功 】滴！密码正确，炸弹已拆除！");
        Console.WriteLine("   你拯救了全校同学，你是真正的英雄！");
        isDefused = true;
        break; 
    }
    else if (guess > bombPassword)
    {
        // 提示：蓝底白字
        Console.BackgroundColor = ConsoleColor.Blue;
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine(" 【提示】高了 ↑ ");
    }
    else
    {
        // 提示：蓝底白字
        Console.BackgroundColor = ConsoleColor.Blue;
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine(" 【提示】低了 ↓ ");
    }
}

// 3. 结局处理
if (isDefused == false)
{
    // 失败闪烁效果：红黑交替
    for (int j = 0; j < 3; j++)
    {
        Console.BackgroundColor = ConsoleColor.Red;
        Console.Clear();
        Thread.Sleep(200);
        
        Console.BackgroundColor = ConsoleColor.Black;
        Console.Clear();
        Thread.Sleep(200);
    }

    // 最终爆炸画面：红底白字
    Console.BackgroundColor = ConsoleColor.Red;
    Console.ForegroundColor = ConsoleColor.White;
    Console.Clear();
    Console.WriteLine("\n\n\n   【 轰！！！ 】时间到，炸弹爆炸了！");
    Console.WriteLine($"   正确密码原为：{bombPassword}");
}

// 扫尾：重置颜色，防止关闭程序后控制台还是红色
Console.ResetColor();
Console.WriteLine("\n\n任务结束，按任意键退出游戏...");
Console.ReadKey();
```





## 第 1 题：正数累加器（基础）
**题目**：让用户不断输入数字，输入 **0 则停止**，并输出所有正数的总和。
**要求**：
- 循环输入数字
- 输入 0 结束
- 只累加**大于 0** 的数
- 最后输出总和

```csharp
using System;
class Program
{
    static void Main()
    {
        int sum = 0;
        int num = 1;

        while (num != 0)
        {
            Console.Write("输入数字(0退出)：");
            num = int.Parse(Console.ReadLine());

            if (num > 0)
                sum += num;
        }
        Console.WriteLine("正数总和：" + sum);
    }
}
```

---

## 第 2 题：自动点赞机（趣味）
**题目**：从 1 数到 10，每秒输出一次“点赞 +X”，用 while 实现。
**要求**：
- 输出：点赞 1、点赞 2…直到点赞10
- 每次暂停 1 秒
- 结束输出“点赞完成！”

```csharp
using System;
class Program
{
    static void Main()
    {
        int i = 1;
        while (i <= 10)
        {
            Console.WriteLine("点赞 " + i);
            System.Threading.Thread.Sleep(1000);
            i++;
        }
        Console.WriteLine("点赞完成！");
    }
}
```

---

## 第 3 题：猜拳小游戏（while + switch）
**题目**：电脑固定出拳 1（石头），用户可以一直猜，直到猜对为止。
**要求**：
- 1=石头 2=剪刀 3=布
- 循环输入，直到猜对
- 提示“不对，再试一次”

```csharp
using System;
class Program
{
    static void Main()
    {
        int guess = 0;
        while (guess != 1)
        {
            Console.Write("出拳(1石头 2剪刀 3布)：");
            guess = int.Parse(Console.ReadLine());
            if (guess != 1) Console.WriteLine("不对，再试一次！");
        }
        Console.WriteLine("恭喜你猜对了！");
    }
}
```

---

## 第 4 题：循环口令验证（课堂常用）
**题目**：必须输入口令 **“开始”** 才能通过，否则一直提示重新输入。
**要求**：
- 输入正确才结束
- 错误提示：“口令错误，请重新输入！”
- 正确提示：“验证通过！”

```csharp
using System;
class Program
{
    static void Main()
    {
        string input = "";
        while (input != "开始")
        {
            Console.Write("请输入口令：");
            input = Console.ReadLine();
            if (input != "开始")
                Console.WriteLine("口令错误，请重新输入！");
        }
        Console.WriteLine("验证通过！");
    }
}
```

---

## 第 5 题：随机点名器（综合趣味）
**题目**：不断随机输出 1~50 的学号，直到输入 **“停”** 结束。
**要求**：
- 循环生成随机学号（1-50）
- 每 0.5 秒显示一个
- 输入“停”则停止点名

```csharp
using System;
class Program
{
    static void Main()
    {
        Random r = new Random();
        string stop = "";

        while (stop != "停")
        {
            int id = r.Next(1, 51);
            Console.WriteLine("当前点名：" + id + "号");
            System.Threading.Thread.Sleep(500);

            if (Console.KeyAvailable)
                stop = Console.ReadLine();
        }
        Console.WriteLine("点名结束！");
    }
}
```

## 项目1:计算器

要求:创建一个能进行连续加减乘除运算的控制台计算器。

**功能：**

1.  欢迎界面。
2.  支持加法 (+), 减法 (-), 乘法 (*), 除法 (/)。
3.  处理除法除零错误。
4.  支持连续计算（询问用户是否继续）。
5.  用户输入错误时给出友好提示。

---

代码实现 (Program.cs)

```csharp
// 显示欢迎信息
Console.WriteLine("欢迎使用简易计算器！");
Console.WriteLine("支持的操作： + (加), - (减), * (乘), / (除)");
Console.WriteLine("------------------------------------------");

// 使用一个布尔变量控制程序是否继续运行
bool continueCalculating = true;

while (continueCalculating)
{
    try // 使用 try-catch 来捕获输入格式错误
    {
        // 1. 获取第一个数字
        Console.Write("请输入第一个数字: ");
        double num1 = Convert.ToDouble(Console.ReadLine());

        // 2. 获取运算符
        Console.Write("请选择运算符 (+, -, *, /): ");
        string op = Console.ReadLine();

        // 3. 获取第二个数字
        Console.Write("请输入第二个数字: ");
        double num2 = Convert.ToDouble(Console.ReadLine());

        // 4. 进行计算并显示结果
        double result = 0;
        bool validOperation = true; // 标记运算是否有效

        // 使用 switch 语句根据不同的运算符执行不同的计算
        switch (op)
        {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                // 检查除数是否为零
                if (num2 == 0)
                {
                    // 除数为零是一种特殊的错误，单独处理
                    Console.WriteLine("错误：除数不能为零！");
                    validOperation = false;
                }
                else
                {
                    result = num1 / num2;
                }
                break;
            default:
                // 如果用户输入的运算符不是 +, -, *, / 中的任何一个
                Console.WriteLine("错误：无效的运算符！请使用 +, -, *, 或 /。");
                validOperation = false;
                break;
        }

        // 如果运算有效，才打印结果
        if (validOperation)
        {
            Console.WriteLine($"结果: {num1} {op} {num2} = {result}");
        }
    }
    catch (FormatException) // 捕获输入格式不对的异常（例如输入了字母）
    {
        Console.WriteLine("错误：请输入有效的数字！");
    }
    catch (Exception ex) // 捕获其他未知异常
    {
        Console.WriteLine($"发生意外错误: {ex.Message}");
    }
    finally
    {
        // 无论是否出错，都执行下面的代码
        Console.WriteLine("------------------------------------------");
    }

    // 5. 询问用户是否继续
    Console.Write("是否继续计算？(按 y 继续，按其他键退出): ");
    string userChoice = Console.ReadLine().ToLower(); // 转换为小写，方便判断

    if (userChoice != "y" && userChoice != "y")
    {
        continueCalculating = false; // 如果用户不输入'y'，则改变循环条件，退出程序
    }
    Console.WriteLine(); // 打印一个空行让界面更清晰
}

// 告别信息
Console.WriteLine("感谢使用计算器，再见！");
// 防止控制台窗口立即关闭，等待用户按任意键
Console.ReadKey();
```

## 游戏循环

```csharp
using System;

class Program
{
    static void Main()
    {
        bool gameRunning = true;

        while (gameRunning)
        {
            Console.WriteLine("游戏运行中...");
            Console.WriteLine("1 攻击");
            Console.WriteLine("2 防御");
            Console.WriteLine("0 退出游戏");

            int choice = Convert.ToInt32(Console.ReadLine());

            if (choice == 1)
            {
                Console.WriteLine("你发动攻击！");
            }
            else if (choice == 2)
            {
                Console.WriteLine("你进行防御！");
            }
            else if (choice == 0)
            {
                gameRunning = false;
            }
        }

        Console.WriteLine("游戏结束");
    }
}
```

## 猜数字

```csharp
Random rand = new Random();
int target = rand.Next(1, 101);

int guess = 0;

while (guess != target)
{
    Console.Write("请输入数字：");
    guess = Convert.ToInt32(Console.ReadLine());

    if (guess > target)
    {
        Console.WriteLine("猜大了");
    }
    else if (guess < target)
    {
        Console.WriteLine("猜小了");
    }
}

Console.WriteLine("恭喜猜对！");
```

## 游戏菜单

```csharp
bool running = true;

while (running)
{
    Console.WriteLine("====== 游戏菜单 ======");
    Console.WriteLine("1 开始游戏");
    Console.WriteLine("2 查看规则");
    Console.WriteLine("0 退出");

    int n = Convert.ToInt32(Console.ReadLine());

    switch (n)
    {
        case 1:
            Console.WriteLine("游戏开始");
            break;

        case 2:
            Console.WriteLine("游戏规则：...");
            break;

        case 0:
            running = false;
            break;
    }
}
```