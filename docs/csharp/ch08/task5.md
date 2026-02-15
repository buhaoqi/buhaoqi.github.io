---
# 这部分是关键！侧边栏显示名由这里决定
title: 五、委托  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 五、委托  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---
对于C#初学者，理解委托可以从以下几个简单直观的角度入手：

一、用生活中的例子理解委托

1. "遥控器"比喻
```csharp
// 委托就像遥控器上的按钮
public delegate void 遥控器按钮();  // 定义一个委托类型
​
public class 电视机
{
    public void 开机()
    {
        Console.WriteLine("电视机开机了！");
    }
}
​
public class 空调
{
    public void 开机()
    {
        Console.WriteLine("空调开始制冷！");
    }
}
​
// 使用
电视机 我的电视 = new 电视机();
空调 我的空调 = new 空调();
​
遥控器按钮 电源按钮 = 我的电视.开机;  // 设置按钮功能
电源按钮();  // 按下按钮 → 电视开机
​
电源按钮 = 我的空调.开机;  // 重新设置按钮功能
电源按钮();  // 按下按钮 → 空调开机
```
2. "餐厅点菜"比喻
```csharp
// 委托就像服务员，把顾客的订单交给厨师
public delegate void 厨师委托(string 菜名);  // 定义委托
​
public class 厨师
{
    public void 做川菜(string 菜名)
    {
        Console.WriteLine($"川菜厨师做：{菜名}");
    }
    
    public void 做粤菜(string 菜名)
    {
        Console.WriteLine($"粤菜厨师做：{菜名}");
    }
}
​
// 服务员（委托）连接顾客和厨师
厨师 张师傅 = new 厨师();
厨师委托 服务员 = 张师傅.做川菜;
​
服务员("麻婆豆腐");  // 输出：川菜厨师做：麻婆豆腐
服务员 = 张师傅.做粤菜;
服务员("白切鸡");    // 输出：粤菜厨师做：白切鸡
```
二、委托的核心思想

简单理解：

"委托是一种类型，它可以引用方法，让方法像变量一样被传递和调用"

三、从方法调用到委托的演进

阶段1：直接方法调用（硬编码）
```csharp
public class 计算器
{
    public int 加(int a, int b)
    {
        return a + b;
    }
    
    public int 乘(int a, int b)
    {
        return a * b;
    }
}
​
// 使用：必须明确知道调用哪个方法
计算器 计算 = new 计算器();
int 结果1 = 计算.加(5, 3);  // 直接调用加法
int 结果2 = 计算.乘(5, 3);  // 直接调用乘法
```
阶段2：使用委托（灵活调用）
```csharp
// 1. 定义委托类型
public delegate int 计算委托(int a, int b);
​
public class 计算器
{
    public int 加(int a, int b) { return a + b; }
    public int 乘(int a, int b) { return a * b; }
    public int 减(int a, int b) { return a - b; }
}
​```
```csharp
// 使用：通过委托动态选择方法
计算器 计算 = new 计算器();
计算委托 当前计算 = 计算.加;  // 委托指向加法方法
​
int 结果 = 当前计算(5, 3);    // 8
当前计算 = 计算.乘;           // 改为指向乘法方法
结果 = 当前计算(5, 3);        // 15
```
四、委托的基本语法

1. 委托声明
```csharp
// 声明委托类型（定义方法签名）
public delegate void 简单委托();                    // 无参数，无返回值
public delegate int 计算委托(int x, int y);         // 有参数，有返回值
public delegate string 格式化委托(string 输入);     // 有参数，有返回值
```
2. 委托实例化和使用
```csharp
public class 工具类
{
    public void 问好()
    {
        Console.WriteLine("你好！");
    }
    
    public int 平方(int x)
    {
        return x * x;
    }
}
​
// 使用委托
工具类 工具 = new 工具类();
​
// 实例化委托
简单委托 我的委托 = 工具.问好;
计算委托 计算委托 = 工具.平方;
​
// 调用委托
我的委托();                    // 输出：你好！
int 结果 = 计算委托(5);       // 返回：25
```
五、委托的高级特性

1. 多播委托（一个委托多个方法）
```csharp
public delegate void 通知委托(string 消息);
​
public class 通知系统
{
    public void 发送邮件(string 消息)
    {
        Console.WriteLine($"邮件通知：{消息}");
    }
    
    public void 发送短信(string 消息)
    {
        Console.WriteLine($"短信通知：{消息}");
    }
    
    public void 记录日志(string 消息)
    {
        Console.WriteLine($"日志记录：{消息}");
    }
}
​
// 使用多播委托
通知系统 系统 = new 通知系统();
通知委托 通知器 = 系统.发送邮件;
​
// 添加多个方法到委托
通知器 += 系统.发送短信;  // 使用 += 添加方法
通知器 += 系统.记录日志;
​
// 调用时，所有方法都会执行
通知器("系统维护通知");
​
// 输出：
// 邮件通知：系统维护通知
// 短信通知：系统维护通知  
// 日志记录：系统维护通知
​
// 移除方法
通知器 -= 系统.发送短信;  // 使用 -= 移除方法
```
2. 匿名方法
```csharp
计算委托 平方计算 = delegate(int x) 
{
    return x * x;
};
​
// 调用
int 结果 = 平方计算(5);  // 25

3. Lambda表达式（更简洁）

// 使用Lambda表达式创建委托
计算委托 加法 = (a, b) => a + b;
计算委托 乘法 = (a, b) => a * b;
​
// 调用
int 和 = 加法(3, 4);    // 7
int 积 = 乘法(3, 4);    // 12
```
六、实际应用场景

场景1：按钮点击事件
```csharp
// 定义按钮类
public class 按钮
{
    // 定义点击事件（本质上是委托）
    public event Action 点击事件;
    
    public void 被点击()
    {
        Console.WriteLine("按钮被点击了！");
        // 触发所有注册的方法
        点击事件?.Invoke();
    }
}
​
public class 游戏界面
{
    public void 开始游戏()
    {
        Console.WriteLine("游戏开始！");
    }
    
    public void 播放音效()
    {
        Console.WriteLine("播放点击音效");
    }
}
​
// 使用
按钮 开始按钮 = new 按钮();
游戏界面 界面 = new 游戏界面();
​
// 注册多个事件处理方法
开始按钮.点击事件 += 界面.开始游戏;
开始按钮.点击事件 += 界面.播放音效;
​
// 点击按钮，触发所有注册的方法
开始按钮.被点击();
```
场景2：排序算法的灵活应用
```csharp
// 定义比较委托
public delegate bool 比较委托(int a, int b);
​
public class 排序工具
{
    public void 排序(int[] 数组, 比较委托 比较方法)
    {
        // 使用委托来决定排序规则
        for (int i = 0; i < 数组.Length - 1; i++)
        {
            for (int j = i + 1; j < 数组.Length; j++)
            {
                if (比较方法(数组[i], 数组[j]))
                {
                    // 交换元素
                    int 临时 = 数组[i];
                    数组[i] = 数组[j];
                    数组[j] = 临时;
                }
            }
        }
    }
}
​
// 使用不同的比较方法
排序工具 工具 = new 排序工具();
int[] 数字 = { 3, 1, 4, 1, 5, 9, 2 };
​
// 升序排序
工具.排序(数字, (a, b) => a > b);
Console.WriteLine("升序: " + string.Join(", ", 数字));
​
// 降序排序  
工具.排序(数字, (a, b) => a < b);
Console.WriteLine("降序: " + string.Join(", ", 数字));
```
七、委托与事件的关系

事件是基于委托的
```csharp
public class 温度监测器
{
    // 1. 定义委托
    public delegate void 温度报警委托(double 温度);
    
    // 2. 基于委托定义事件
    public event 温度报警委托 温度过高;
    
    private double _当前温度;
    
    public double 当前温度
    {
        get { return _当前温度; }
        set
        {
            _当前温度 = value;
            if (_当前温度 > 30)
            {
                // 3. 触发事件
                温度过高?.Invoke(_当前温度);
            }
        }
    }
}

public class 报警系统
{
    public void 发出警报(double 温度)
    {
        Console.WriteLine($"警报！温度过高：{温度}度");
    }
}

// 使用
温度监测器 监测器 = new 温度监测器();
报警系统 报警器 = new 报警系统();

// 注册事件处理
监测器.温度过高 += 报警器.发出警报;

// 当温度变化时会自动触发事件
监测器.当前温度 = 35;  // 输出：警报！温度过高：35度
```
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