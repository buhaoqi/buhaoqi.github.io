---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务五 委托  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务五 委托  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 委托是什么

"委托是一种类型，它可以引用方法，让方法像变量一样被传递和调用"。

简单说：委托是“方法的容器”，能装下符合它签名的方法，然后通过委托调用这些方法。

委托（Delegate）本质是**类型安全的方法指针**，可以把方法当作参数传递、存储或调用。

## 委托的基本语法

### 1. 委托声明
```csharp
// 声明委托类型（定义方法签名）
public delegate void 简单委托();                    // 无参数，无返回值
public delegate int 计算委托(int x, int y);         // 有参数，有返回值
public delegate string 格式化委托(string 输入);     // 有参数，有返回值
```

### 2.使用委托

## 用法示例

### 示例1：委托的定义、绑定、调用
核心目标：掌握委托的「定义格式」「绑定方法」「调用委托」三个基础步骤。

```csharp
using System;

// 1. 定义委托（相当于制定“方法模板”：返回值void，无参数）
// 委托命名规范：动词+Delegate，或直接用Delegate结尾
public delegate void GreetingDelegate();

class DelegateDemo1
{
    // 2. 定义符合委托签名的方法（返回值、参数和委托完全一致）
    public static void SayHello()
    {
        Console.WriteLine("你好！这是基础委托调用~");
    }

    public static void SayHi()
    {
        Console.WriteLine("Hi！这是另一个符合委托的方法~");
    }

    static void Main()
    {
        // 3. 创建委托对象，绑定方法（把方法“装进”委托里）
        GreetingDelegate greet1 = new GreetingDelegate(SayHello);
        
        // 简化写法（C#语法糖，推荐）：直接赋值方法名
        GreetingDelegate greet2 = SayHi;

        // 4. 调用委托（本质是调用绑定的方法）
        greet1(); // 输出：你好！这是基础委托调用~
        greet2(); // 输出：Hi！这是另一个符合委托的方法~
    }
}
```
关键说明：
- 委托定义格式：`delegate 返回值类型 委托名(参数列表);`，必须和绑定的方法签名（返回值+参数）完全匹配；
- 委托对象可以绑定**静态方法**（如上），也可以绑定实例方法（后续示例展示）；
- 调用委托的方式和调用方法完全一样（`委托对象()`）。


### 示例2：带参数的委托

核心目标：掌握「带参数的委托」定义和使用，理解委托如何给方法传参。

```csharp
using System;

// 1. 定义带参数的委托（模板：返回值void，参数为string）
public delegate void GreetPersonDelegate(string name);

class DelegateDemo2
{
    // 2. 符合委托签名的方法（参数是string，返回值void）
    public static void GreetChinese(string name)
    {
        Console.WriteLine($"你好，{name}！（中文问候）");
    }

    public static void GreetEnglish(string name)
    {
        Console.WriteLine($"Hello, {name}!（英文问候）");
    }

    static void Main()
    {
        // 3. 绑定方法到委托
        GreetPersonDelegate greetCN = GreetChinese;
        GreetPersonDelegate greetEN = GreetEnglish;

        // 4. 调用委托时传递参数（参数会传给绑定的方法）
        greetCN("小明"); // 输出：你好，小明！（中文问候）
        greetEN("Tom");  // 输出：Hello, Tom!（英文问候）
    }
}
```
关键说明：

- 委托的参数列表决定了调用委托时需要传递的参数；
- 无论委托绑定哪个方法，传参格式都和委托定义一致，无需关心方法内部如何使用参数。


### 示例3：有返回值的委托

核心目标：掌握「有返回值的委托」，理解委托如何获取方法的返回值。

```csharp
using System;

// 1. 定义有返回值的委托（模板：返回值int，参数两个int）
public delegate int CalculateDelegate(int num1, int num2);

class DelegateDemo3
{
    // 2. 符合委托签名的方法（返回int，两个int参数）
    public static int Add(int a, int b)
    {
        return a + b;
    }

    public static int Multiply(int a, int b)
    {
        return a * b;
    }

    static void Main()
    {
        // 3. 绑定方法到委托
        CalculateDelegate addFunc = Add;
        CalculateDelegate mulFunc = Multiply;

        // 4. 调用委托，接收返回值
        int sum = addFunc(5, 3);    // 调用Add方法，返回8
        int product = mulFunc(5, 3); // 调用Multiply方法，返回15

        Console.WriteLine($"5+3={sum}");      // 输出：5+3=8
        Console.WriteLine($"5×3={product}"); // 输出：5×3=15
    }
}
```
关键说明：

- 委托的返回值类型决定了调用委托后能接收的返回值类型；
- 委托相当于“代理”，调用委托的返回值就是绑定方法的返回值。

### 示例4：多播委托
核心目标：掌握「多播委托」（委托的核心特性），一个委托对象可以绑定多个方法，调用时按顺序执行所有方法。

```csharp
using System;

// 1. 定义委托（无返回值，单string参数）
public delegate void NotifyDelegate(string message);

class DelegateDemo4
{
    // 2. 多个符合签名的方法
    public static void SendSms(string msg)
    {
        Console.WriteLine($"【短信通知】{msg}");
    }

    public static void SendEmail(string msg)
    {
        Console.WriteLine($"【邮件通知】{msg}");
    }

    public static void SendWeChat(string msg)
    {
        Console.WriteLine($"【微信通知】{msg}");
    }

    static void Main()
    {
        // 3. 多播委托：用 += 绑定多个方法
        NotifyDelegate notify = SendSms; // 先绑定第一个方法
        notify += SendEmail;             // 追加第二个方法
        notify += SendWeChat;            // 追加第三个方法

        // 4. 调用多播委托：会按绑定顺序执行所有方法
        Console.WriteLine("=== 执行多播委托 ===");
        notify("您的订单已发货！");

        // 5. 用 -= 移除某个方法
        notify -= SendEmail;
        Console.WriteLine("\n=== 移除邮件通知后执行 ===");
        notify("您的快递已签收！");
    }
}
```
输出结果：

```
=== 执行多播委托 ===
【短信通知】您的订单已发货！
【邮件通知】您的订单已发货！
【微信通知】您的订单已发货！

=== 移除邮件通知后执行 ===
【短信通知】您的快递已签收！
【微信通知】您的快递已签收！
```

关键说明：
- 多播委托仅适用于**无返回值的委托**（有返回值的多播委托只会返回最后一个方法的结果）；
- `+=` 用于追加方法，`-=` 用于移除方法；
- 多播委托执行时，若其中一个方法抛出异常，后续方法不会执行。


### 示例5：委托作为方法参数
核心目标：掌握「委托作为方法参数」（实际开发中最常用），实现“方法的参数是另一个方法”，让代码更灵活。

```csharp
using System;

// 1. 定义委托（模板：返回int，单int参数）
public delegate int ProcessNumberDelegate(int num);

class DelegateDemo5
{
    // 2. 业务方法：接收委托作为参数，用委托处理数字
    public static void ProcessData(int number, ProcessNumberDelegate processFunc)
    {
        Console.WriteLine($"原始数字：{number}");
        // 调用传入的委托（即调用外部传递的方法）
        int result = processFunc(number);
        Console.WriteLine($"处理后结果：{result}\n");
    }

    // 3. 不同的处理方法（符合委托签名）
    public static int Square(int num) // 平方
    {
        return num * num;
    }

    public static int Double(int num) // 翻倍
    {
        return num * 2;
    }

    public static int AddTen(int num) // 加10
    {
        return num + 10;
    }

    static void Main()
    {
        // 4. 调用业务方法，传递不同的方法作为参数
        ProcessData(5, Square);  // 传递Square方法
        ProcessData(5, Double);  // 传递Double方法
        ProcessData(5, AddTen);  // 传递AddTen方法
    }
}
```
输出结果：

```
原始数字：5
处理后结果：25

原始数字：5
处理后结果：10

原始数字：5
处理后结果：15
```

关键说明：
- 委托作为参数，让方法的“行为”可配置（如ProcessData方法无需修改，只需传递不同的处理方法，就能实现不同逻辑）；
- 这是LINQ、事件、异步编程等高级特性的底层基础。


八、初学者实践建议

第一步：理解委托的概念

记住：委托就是"方法的容器"

第二步：从简单委托开始
```csharp
// 1. 定义委托
delegate void 简单任务();

// 2. 创建方法
void 问好() { Console.WriteLine("你好！"); }
void 再见() { Console.WriteLine("再见！"); }

// 3. 使用委托
简单任务 任务 = 问好;
任务();  // 输出：你好！

任务 = 再见;  
任务();  // 输出：再见！

第三步：尝试带参数的委托

delegate string 格式化委托(string 输入);

string 转大写(string 文本) { return 文本.ToUpper(); }
string 转小写(string 文本) { return 文本.ToLower(); }

格式化委托 格式化器 = 转大写;
Console.WriteLine(格式化器("Hello"));  // 输出：HELLO

格式化器 = 转小写;
Console.WriteLine(格式化器("HELLO"));  // 输出：hello

第四步：使用多播委托

delegate void 日志委托(string 消息);

void 控制台日志(string 消息) { Console.WriteLine("控制台: " + 消息); }
void 文件日志(string 消息) { Console.WriteLine("文件: " + 消息); }

日志委托 日志系统 = 控制台日志;
日志系统 += 文件日志;  // 添加第二个方法

日志系统("系统启动");  
// 输出：
// 控制台: 系统启动
// 文件: 系统启动
```
九、记住这个简单比喻

委托就像"多功能遥控器"：

你可以设置遥控器的按钮1 = 电视开机

也可以设置按钮1 = 空调开机


还可以设置一个按钮同时控制电视+空调+灯光

同一个按钮，不同时间可以执行不同功能！

委托让方法调用变得灵活、动态、可扩展，是C#事件和回调机制的基础！