---
noteId: "262625d0670f11f0ab62e3f747310bbc"
tags: []

---

## **开场**  
“大家好！欢迎观看《C#初学者入门教程》的第62课《enum类型》。

本期视频的知识点有四个：

1. **什么是枚举（概念上的起源）**
2. **为什么编程语言需要枚举类型**
3. **C# 中 `enum` 的设计背景与特点**
4. **枚举的编程思想与实际价值**

---

## 一、枚举类型的语法

### 1.定义枚举类型：

```c#
enum 枚举名
{
    枚举成员1,
    枚举成员2
}
```

- enum：定义枚举类型的关键字

示例：

```c# linenums="1"
enum Weekday
{
    Monday,    
    Tuesday,   
    Wednesday, 
    Thursday,  
    Friday,    
    Saturday,  
    Sunday 
}
```

- 首先输入enum关键词，空格
- 然后再写一个枚举类型的名称(枚举类型使用"帕斯卡命名法")
- 后面紧跟一组花括号
- 在花括号里，逐个输入枚举类型的值，称之为“成员”，使用英文逗号分隔
- 最后一个成员后面不需要分割符

这样就定义了一个表示星期几的枚举类型。

### 2.访问枚举成员

```c# lienums="1"
枚举名.枚举成员
```

### 3.枚举成员赋值

在声明的枚举类型中，每个枚举成员都对应一个常量值。在默认情况下，C#规定第一个枚举成员的值是0，后面的每一个枚举成员的值自增1.

```c# linenums="1"

```

### 4.枚举变量
在声明一个枚举类型后，可定义该枚举类型的变量，简称枚举变量。

定义枚举变量的一般格式：

```c#
枚举类型 枚举变量
```

例如

```c#
season jj1
```
### 5.为枚举变量赋值

```c#
jj1 = season.spring;
```
### 6.访问枚举变量

```c#
Console.WriteLine("{0}",jj1);
```

## 二、枚举是什么？

“枚举”（Enumeration）这个词来源于英文单词：

> **Enumeration（/ˌɛn.juː.məˈreɪ.ʃən/）** = 一一列举、枚举、列出

在计算机科学中，**枚举指的是：将一组相关的、有限的、预定义的常量值组织在一起，并为它们赋予有意义的名称。**


枚举不只是“一组常量”

虽然初学者可能将 `enum` 简单理解为“一组常量名字”，但实际上它是：

> **一种组织相关常量、提高代码表达力与安全性的类型系统工具。**

它在代码质量、团队协作、长期维护中扮演着非常重要的角色。

---

## 三、为什么需要枚举？
### 1.没有枚举可读性差
在没有枚举之前，程序员通常会这样写代码：

很常见的业务状态，比如用户账号的状态。

```csharp
int status = 1; // 1 表示什么？没人知道！
if (status == 1)
{
    Console.WriteLine("正常");
}
else if (status == 2)
{
    Console.WriteLine("禁用");
}
```

- 这里的 `1` 和 `2` 是所谓的**“魔法数字”（Magic Numbers）**，它们没有明确的语义；
- 代码可读性差，难以维护，容易出错；
- 如果别人接手你的代码，根本不知道 `1` 是什么意思，除非去看文档或者猜。

### 2.明确语义可读性强
如果我们使用枚举重写，就会清晰很多：

```csharp
enum UserStatus
{
    Active,   // 0
    Disabled  // 1
}

UserStatus status = UserStatus.Active;
if (status == UserStatus.Active)
{
    Console.WriteLine("用户状态：正常");
}
```

- `UserStatus.Active` 比 `1` 更具可读性；
- 编译器知道这些是固定选项，能帮你避免传入非法值。

### 3.易于扩展和维护
现在，假设业务需求变了

产品经理或业务方说：

> “我们还需要一个中间状态，表示用户**提交了注册，但还未审核或激活**，这个状态叫 **Pending（待定 / 待激活）**。”

如果你使用的是枚举（enum），你只需要这样做：

```csharp
enum UserStatus
{
    Pending,   // 我们新增的状态，编译器默认值为 0
    Active,    // 变成了 1
    Disabled   // 变成了 2
}
```
**当你的业务逻辑需要新增一个状态（比如从原来的“激活/禁用”变成“待定/激活/禁用”），如果你使用的是枚举（enum），你只需要在枚举类型中简单地添加一个新成员（比如 `Pending,`），就可以很自然、很清晰、很安全地扩展这个状态，而不用改动大量已有代码，也不用担心值冲突或可读性问题。**

**就这么简单！你只需要在枚举中加一行：`Pending,`**
>
> - 枚举会**自动为其分配一个整数值（默认从 0 开始递增）**
> - 你可以在代码中直接使用 `UserStatus.Pending`，就像使用其它状态一样自然
> - 你的 `switch` 语句、状态判断、UI 显示等相关代码，都可以**很自然地扩展**

如果你没有使用枚举，而是用了“魔法数字”，会怎样？

假设你之前是这样写的：

```csharp
int status = 1; // 1 = 激活，2 = 禁用
if (status == 1) { /* 激活 */ }
else if (status == 2) { /* 禁用 */ }
```

现在要增加一个状态：**Pending（值为 0 或 3？）**

你可能会面临这些问题：

- 你该给 Pending 分配什么数字？0？3？怎么保证不冲突？
- 你代码中所有用到 `status == 1` 的地方，都要去查看这个 1 到底代表啥
- 你新增的状态可能忘记处理，导致逻辑遗漏或 Bug
- 其他程序员看不懂 0、1、2 是什么意思，可读性极差

---

## 四、案例

### 更完整的例子

原始状态（只有激活和禁用）：

```csharp
enum UserStatus
{
    Active,    // 0
    Disabled   // 1
}
```

业务变更：需要增加“待审核”状态

```csharp
enum UserStatus
{
    Pending,   // 0 （新增）
    Active,    // 1
    Disabled   // 2
}
```

然后你可以这样使用：

```csharp
UserStatus status = UserStatus.Pending;

switch (status)
{
    case UserStatus.Pending:
        Console.WriteLine("状态：待审核");
        break;
    case UserStatus.Active:
        Console.WriteLine("状态：正常");
        break;
    case UserStatus.Disabled:
        Console.WriteLine("状态：禁用");
        break;
}
```
### 用法1：访问枚举成员
```c
Weekday today = Weekday.Monday; // 声明变量
Console.WriteLine(today);  // 输出: Monday
```

### 用法2：从枚举值获取基础值
```c
int dayValue = (int)Weekday.Monday;  // 0  
```

- `(int)`不是修饰符
- `(int)`是类型转换运算符
- `(int)`作用是：强制将Weekday.Monday枚举值转换为底层的基础值。
- `(int)`告诉编译器："我知道这是枚举类型，但请把它当作整数处理"。


### 用法3：从基础值获取枚举值
```c
Weekday day = (Weekday)3;  // Thursday
```

- 将整数值 3 显式转换为 Weekday 枚举类型
- (Weekday)：显式类型转换运算符，强制将右侧的整数转换为 Weekday 枚举类型
- 3：一个整数值，表示枚举的基础值
- day：声明的 Weekday 枚举变量，用于存储转换结果

### 用法4：获取所有枚举值
```c
Array values = Enum.GetValues(typeof(Weekday));
```
这行代码的作用是 获取 Weekday 枚举类型中定义的所有成员值，并以数组形式返回。

- Enum.GetValues()：.NET 提供的静态方法，用于获取枚举的所有值
- typeof(Weekday)：获取 Weekday 枚举的 Type 对象
- Array：返回的集合类型（实际是 Weekday[] 枚举数组）

后续操作：遍历所有枚举值

```c# linenums="1"
foreach (Weekday day in Enum.GetValues(typeof(Weekday)))
{
    Console.WriteLine(day);
}
```
输出

```bash
Monday
Tuesday
Wednesday
Thursday
Friday
```

---

后续操作：获取值-名对

```c# linenums="1"
foreach (Weekday day in Enum.GetValues(typeof(Weekday)))
{
    Console.WriteLine($"{(int)day}: {day}");
}
```
输出

```bash
0: Monday
1: Tuesday
2: Wednesday
3: Thursday
4: Friday
```

---


## 五、枚举类型的核心特性
```c
enum Weekday
{
    Monday,    // 默认值0
    Tuesday,   // 1
    Wednesday, // 2
    Thursday,  // 3
    Friday,    // 4
    Saturday,  // 5
    Sunday     // 6
}
```

- 每个枚举值必须关联一个整数值，称之为“基础值”。
- 基础值：必须是整数类型，默认从0开始，依次递增；
- 基础值与数组的“下标”非常类似，不同之处在于基础值可自定义，允许跳跃和重复。

| 特性        | 基础值                  | 数组下标                  |
|------------|---------------------------|--------------------------|
| **起始值**  | 可自定义(不一定是0)         | 固定从0开始               |
| **连续性**  | 可跳跃赋值(如100,200,300)  | 必须连续                  |
| **重复性**  | 允许多个成员同值           | 每个下标必须唯一          |
| **类型**    | 可指定多种整数类型          | 固定为int                |

---

## 六、枚举是安全的可维护的

- 枚举是**强类型**的，你不能随意传入一个数字（比如 `UserStatus status = (UserStatus)99;` 虽然能编译，但通常是不合理的，可以通过额外校验避免）；
- 新增枚举项不会破坏已有代码的结构（当然，你可能需要更新 `switch` 的 `default` 分支以处理未知状态）；
- 代码可读性极高，`UserStatus.Pending` 比 `status == 0` 更清晰明了。

---

## 七、总结
| 问题 | 答案 |
|------|------|
| **什么是枚举？** | 枚举是一组相关的、命名的常量，用于代替魔法数字/字符串，提高代码可读性与安全性 |
| **为什么需要枚举？** | 为了提升代码的可读性、可维护性、类型安全性，避免使用难以理解的数字或字符串常量 |
| **C# 中的 enum 是何时引入的？** | C# 诞生于 2000 年左右，enum 是其基础特性之一，借鉴自 C/C++/Java，但设计更现代、类型更安全 |
| **enum 的本质是什么？** | 枚举本质是一组整型常量（默认是 int），但每个常量都有一个有意义的名字，是值类型 |
| **enum 的设计思想是什么？** | 提升代码可读性、类型安全、可维护性，遵循“用有意义的名称代替数字”的编程最佳实践 |
| **enum 的实际用途有哪些？** | 表示状态、类型、选项、配置、权限等任何一组有限且固定的选择 |

---

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。

如果这个视频对你有帮助，别忘了点赞、收藏、关注，感谢观看，我们下期再见！

慢慢学，一点点进步就很好！






## 练习
### 1.枚举颜色

题目

> 定义一个表示颜色的枚举Color，包含红、绿、蓝,输出你喜欢的颜色。

输出

```bash
我喜欢的颜色是: blue。
```

答案

```c# linenums="1"
internal class Program
{
    static void main()
    {
        Color myFavouriteColor = Color.Blue;
        Console.WriteLine($"我喜欢的颜色是:{myFavouriteColor}。");
    }
    enum Color{Red, Green, Blue}
}
```
### 2.枚举季节
题目

> 定义一个表示季节的枚举Season，包含春夏秋冬四个值。
> 编写程序输出当前季节的名称和对应的数字值。

输出

```bash
internal class Program
{
    static void Main()
    {
        Season currentSeason = Season.Summer;
        int currentSeasonCode = (int)Season.Summer;
        Console.WriteLine($"当前的季节是：{currentSeason}({currentSeasonCode})");
    }
    enum Season{Spring, Summer, Autumn, Winter}
}
```

答案1

```c# linenums="1"
internal class Program
{
    static void Main()
    {
        Season currentSeason = Season.Summer;
        int currentSeasonCode = (int)Season.Summer;
        Console.WriteLine($"当前的季节是：{currentSeason}({currentSeasonCode})");
    }
    enum Season{Spring, Summer, Autumn, Winter}
}
```

答案2：使用`DateTime.Now.Month`

```c# linenums="1"
using System;

class Program
{
    // 定义季节枚举
    enum Season
    {
        Spring,    // 春 (默认值 0)
        Summer,    // 夏 (默认值 1)
        Autumn,    // 秋 (默认值 2)
        Winter     // 冬 (默认值 3)
    }

    static void Main()
    {
        // 获取当前月份
        int currentMonth = DateTime.Now.Month;
        
        // 根据月份确定当前季节
        Season currentSeason;
        if (currentMonth >= 3 && currentMonth <= 5)
            currentSeason = Season.Spring;
        else if (currentMonth >= 6 && currentMonth <= 8)
            currentSeason = Season.Summer;
        else if (currentMonth >= 9 && currentMonth <= 11)
            currentSeason = Season.Autumn;
        else
            currentSeason = Season.Winter;

        // 输出季节名称和对应的数字值
        Console.WriteLine($"当前季节: {currentSeason} (数字值: {(int)currentSeason})");
    }
}
```

### 3.枚举季节
题目

> d 

输出

```bash

```

答案

```c# linenums="1"

```

### 4.枚举季节
题目

> d 

输出

```bash

```

答案

```c# linenums="1"

```

### 5.枚举季节
题目

> d 

输出

```bash

```

答案

```c# linenums="1"

```

### 6.枚举季节
题目

> d 

输出

```bash

```

答案

```c# linenums="1"

```

### 7.枚举季节
题目

> d 

输出

```bash

```

答案

```c# linenums="1"

```

### 8.枚举季节
题目

> d 

输出

```bash

```

答案

```c# linenums="1"

```

### 9.枚举天气
题目

> 定义一个表示天气的枚举Weather，包含Sunny, Cloudy, Rainy, Snowy四个值
> 编写程序输出你今天的天气情况

输出

```bash
今天有雨，出门请带伞。
```

答案

```c# linenums="1"
internal class Program
{
    static void Main()
    {
        Weather todayWeather = Weather.Rainy;
        switch (todayWeather)
        {
            case Weather.Sunny: 
                Console.WriteLine("今天天气晴朗，适合外出");
                break;
            case Weather.Cloudy: 
                Console.WriteLine("今天天气多云，适合呆在家里"); 
                break;
            case Weather.Rainy: 
                Console.WriteLine("今天有雨，出门请带伞"); 
                break;
            case Weather.Snowy:  // 显式处理 Snowy，而不是依赖 default
                Console.WriteLine("今日有雪，出门请小心"); 
                break;
            default:  // 处理未知情况（如未来新增的枚举值）
                Console.WriteLine("未知天气，请注意安全"); 
                break;
        }
    }
    enum Weather{Sunny, Cloudy, Rainy, Snowy}
}
```
说明：

1. 不建议使用枚举值的整数值（0,1,2,3），这降低了代码的可读性和可维护性。
2. 使用枚举成员名称而不是数字值，更易于理解和维护。


```c# linenums="1"

```
### 10.定义并遍历枚举类型:星期几
**题目**

定义一个表示星期几的枚举Weekday，包含周一到周日。

**输出**

```bash
0:Monday
1:Tuesday
2:Wednesday
3:Thursday
4:Friday
5:Saturday
6:Sunday
```
**参考答案**

```c# linenums="1"
internal class Program
{
    static void Main(string[] args)
    {
        foreach(Weekday day in Enum.GetValues(typeof(Weekday)))
        {
            Console.WriteLine($"{(int)day}:{day}");
        }
    }
    enum Weekday { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }
}
```

## 练习答案