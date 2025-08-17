---
noteId: "262625d0670f11f0ab62e3f747310bbc"
tags: []

---
## **开场**  
（动画：宇宙星空缓缓浮现三个字符：Hello、123、true）
> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第4课《数据类型入门》》。
> 
> 我是张杰。
> 
> 在上一节课，我们手写了一个‘Hello World’程序，总算是把编写C#的门推开了。
> 
> 进门之后，在编写程序之前，首先我们应该关注一下“数据”。
>
> 数据是程序运行过程中操作的信息。程序的运行离不开数据。程序运行的核心任务就是：获取数据、处理数据、输出数据。
>
> “数据”本身具有不同的特点，比如：数字可以用来计算，文本可以用来描述事物。一盏灯有亮与不亮两种状态等等。
>
> 针对不同特点的数据，程序采用了不同的存储方式和处理方式，这就是数据类型。
>
> 今天这节课，我们就来**认识C#程序里的三大基本数据类型：字符串、数值和布尔。**

## 定义枚举类型

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

---

## 枚举类型(Enum)是什么

- 枚举(Enum)是一种特殊的值类型。
- 它用于定义一组命名的常数。

## 枚举类型的核心特性
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


## 用法1：访问枚举成员
```c
Weekday today = Weekday.Monday; // 声明变量
Console.WriteLine(today);  // 输出: Monday
```

## 用法2：从枚举值获取基础值
```c
int dayValue = (int)Weekday.Monday;  // 0  
```

- `(int)`不是修饰符
- `(int)`是类型转换运算符
- `(int)`作用是：强制将Weekday.Monday枚举值转换为底层的基础值。
- `(int)`告诉编译器："我知道这是枚举类型，但请把它当作整数处理"。


## 用法3：从基础值获取枚举值
```c
Weekday day = (Weekday)3;  // Thursday
```

- 将整数值 3 显式转换为 Weekday 枚举类型
- (Weekday)：显式类型转换运算符，强制将右侧的整数转换为 Weekday 枚举类型
- 3：一个整数值，表示枚举的基础值
- day：声明的 Weekday 枚举变量，用于存储转换结果

## 用法4：获取所有枚举值
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

## 总结

## 结束语

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