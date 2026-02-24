---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 DateTime 类   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 DateTime 类   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---

## 高考考点
掌握DateTime类的属性：

>Date、Day、Hour、Minute、Month、Today、Year、Now；


## 说明
`DateTime`是C#中表示日期和时间的结构体（值类型），位于`System`命名空间下；
- `Now`：获取当前系统的**日期+时间**（含毫秒）；
- `Today`：获取当前系统的**日期**（时间部分为00:00:00）；
- 所有示例需先引入`using System;`。



## 1. Date
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取当前`DateTime`对象的**日期部分**（时间部分被重置为 00:00:00.000） |
| **语法**   | `DateTime变量.Date`                                                  |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`DateTime`类型，仅保留日期，时间部分固定为午夜；<br />2. 与`Today`的区别：`Today`是静态属性（获取当前日期），`Date`是实例属性（获取任意`DateTime`的日期部分）；<br />3. 不会修改原`DateTime`对象（值类型特性）。 |

示例（Date）
```csharp
// 获取当前时间（含日期+时间）
DateTime now = DateTime.Now;
Console.WriteLine($"原始时间：{now}"); // 输出：2026/2/23 15:30:25.123（示例值）
// 获取仅日期部分（时间重置为00:00:00）
DateTime onlyDate = now.Date;
Console.WriteLine($"仅日期部分：{onlyDate}"); // 输出：2026/2/23 00:00:00
```


## 2. Day
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取当前`DateTime`对象表示的**月份中的第几天**（1~31）               |
| **语法**   | `DateTime变量.Day`                                                   |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`int`类型，范围1~31（如1号返回1，31号返回31）；<br />2. 不同月份的天数不同（如2月可能返回1~28/29），不会超出当月实际天数；<br />3. 对`DateTime.MinValue`/`MaxValue`也适用，无越界风险。 |

示例（Day）
```csharp
// 示例1：当前日期的天数
DateTime today = DateTime.Today;
Console.WriteLine($"今天是当月第{today.Day}天"); // 输出：今天是当月第23天（示例值）

// 示例2：指定日期的天数
DateTime specificDate = new DateTime(2026, 2, 29); // 2026年2月无29天，会抛异常
DateTime validDate = new DateTime(2024, 2, 29); // 2024是闰年，2月有29天
Console.WriteLine($"2024年2月29日的Day值：{validDate.Day}"); // 输出：29
```


## 3. Hour
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取当前`DateTime`对象表示的**小时数**（24小时制，0~23）             |
| **语法**   | `DateTime变量.Hour`                                                  |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`int`类型，范围0~23（如凌晨0点返回0，下午3点返回15）；<br />2. 12小时制需自行转换（如`Hour > 12 ? Hour - 12 : Hour`）；<br />3. `Today`的Hour始终为0（时间部分是00:00:00）。 |

示例（Hour）
```csharp
// 获取当前时间的小时数
DateTime now = DateTime.Now;
int hour = now.Hour;
string period = hour >= 12 ? "下午" : "上午";
int twelveHour = hour > 12 ? hour - 12 : hour;
Console.WriteLine($"当前时间是{period}{twelveHour}点"); // 输出：当前时间是下午3点（示例值，15点）
```


## 4. Minute
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取当前`DateTime`对象表示的**分钟数**（0~59）                       |
| **语法**   | `DateTime变量.Minute`                                                |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`int`类型，范围0~59（如整点返回0，30分返回30）；<br />2. 毫秒部分不影响Minute值（如15:30:59.999的Minute仍为30）；<br />3. 可结合Hour拼接完整时间（如`$"{Hour}:{Minute:D2}"`，D2补零）。 |

示例（Minute）
```csharp
// 获取当前时间的分钟数
DateTime now = DateTime.Now;
// 补零显示（如5分显示为05）
string minuteStr = now.Minute.ToString("D2");
Console.WriteLine($"当前分钟数：{minuteStr}"); // 输出：当前分钟数：30（示例值）

// 拼接小时+分钟
string time = $"{now.Hour:D2}:{now.Minute:D2}";
Console.WriteLine($"当前时间（时:分）：{time}"); // 输出：当前时间（时:分）：15:30（示例值）
```


## 5. Month
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取当前`DateTime`对象表示的**月份**（1~12）                         |
| **语法**   | `DateTime变量.Month`                                                 |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`int`类型，范围1~12（1=1月，12=12月）；<br />2. 可结合`CultureInfo`转换为月份名称（如1月→"一月"/"January"）；<br />3. 不存在0或13月的情况，所有`DateTime`对象的Month均在1~12范围内。 |

示例（Month）
```csharp
using System.Globalization; // 需引入此命名空间

// 示例1：获取当前月份
DateTime today = DateTime.Today;
Console.WriteLine($"当前月份：{today.Month}月"); // 输出：当前月份：2月（示例值）

// 示例2：转换为月份名称
string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(today.Month);
Console.WriteLine($"月份名称（中文）：{monthName}"); // 输出：月份名称（中文）：二月
string englishMonth = CultureInfo.InvariantCulture.DateTimeFormat.GetMonthName(today.Month);
Console.WriteLine($"月份名称（英文）：{englishMonth}"); // 输出：月份名称（英文）：February
```


## 6. Today
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 静态属性，获取当前系统的**日期**（时间部分固定为 00:00:00.000）       |
| **语法**   | `DateTime.Today`                                                     |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 静态属性，无需实例化`DateTime`，直接调用；<br />2. 返回值为`DateTime`类型，仅包含日期，时间为午夜；<br />3. 与`Now.Date`等价，但`Today`性能略优（无需处理时间部分）；<br />4. 基于系统本地时间，受时区影响。 |

示例（Today）
```csharp
// 获取今日日期（无时间）
DateTime today = DateTime.Today;
Console.WriteLine($"今日日期：{today:yyyy-MM-dd}"); // 输出：今日日期：2026-02-23（示例值）
Console.WriteLine($"Today的时间部分：{today.ToLongTimeString()}"); // 输出：Today的时间部分：00:00:00

// 对比Now和Today
DateTime now = DateTime.Now;
Console.WriteLine($"Now：{now}"); // 2026/2/23 15:30:25.123
Console.WriteLine($"Today：{today}"); // 2026/2/23 00:00:00
```


## 7. Year
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取当前`DateTime`对象表示的**年份**（如2026、1999）                 |
| **语法**   | `DateTime变量.Year`                                                  |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`int`类型，范围`1~9999`（`DateTime`的年份范围）；<br />2. 可用于判断闰年（需结合Month/Day，或调用`DateTime.IsLeapYear(Year)`）；<br />3. `DateTime.MinValue.Year`为1，`DateTime.MaxValue.Year`为9999。 |

示例（Year）
```csharp
// 示例1：获取当前年份
DateTime today = DateTime.Today;
Console.WriteLine($"当前年份：{today.Year}"); // 输出：当前年份：2026（示例值）

// 示例2：判断闰年
int year = 2024;
bool isLeap = DateTime.IsLeapYear(year);
Console.WriteLine($"{year}年{(isLeap ? "是" : "不是")}闰年"); // 输出：2024年是闰年

// 示例3：通过DateTime对象判断闰年
DateTime leapYearDate = new DateTime(2024, 2, 1);
Console.WriteLine($"{leapYearDate.Year}年{(DateTime.IsLeapYear(leapYearDate.Year) ? "是" : "不是")}闰年");
```


## 8. Now
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 静态属性，获取当前系统的**日期+时间**（含毫秒，精确到系统时钟）       |
| **语法**   | `DateTime.Now`                                                       |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 静态属性，直接调用，无需实例化；<br />2. 返回值为`DateTime`类型，包含完整的日期和时间（年、月、日、时、分、秒、毫秒）；<br />3. 受系统时间影响，若系统时间修改，`Now`值也会变化；<br />4. 如需高精度时间，用`DateTime.UtcNow`（UTC时间）或`Stopwatch`。 |

示例（Now）
```csharp
// 获取当前完整时间
DateTime now = DateTime.Now;
Console.WriteLine($"当前完整时间：{now}"); // 输出：2026/2/23 15:30:25.123（示例值）
// 格式化输出
Console.WriteLine($"格式化时间：{now:yyyy-MM-dd HH:mm:ss.fff}"); // 输出：2026-02-23 15:30:25.123

// 对比Now和UtcNow（UTC时间，无时区偏移）
DateTime utcNow = DateTime.UtcNow;
Console.WriteLine($"UTC时间：{utcNow}"); // 输出：2026/2/23 07:30:25.123（东8区时差）
```


## 总结（核心关键点）
1. **属性类型**：
   - 静态属性：`Today`、`Now`（直接通过`DateTime.XXX`调用）；
   - 实例属性：`Date`、`Day`、`Hour`、`Minute`、`Month`、`Year`（需通过`DateTime`对象调用）；
2. **值范围**：
   - `Day`：1~31，`Month`：1~12，`Hour`：0~23，`Minute`：0~59，`Year`：1~9999；
3. **核心区别**：
   - `Today` = `Now.Date`（仅日期，时间为0）；
   - `Date`是实例属性，可获取任意`DateTime`的日期部分，`Today`仅获取当前日期；
4. **格式化**：推荐用`ToString("yyyy-MM-dd HH:mm:ss")`等格式字符串，统一输出样式。


---

`DateTime` 是 C# 中非常重要的一个类，几乎所有跟“时间”相关的功能都离不开它，比如获取当前时间、计算时间差、格式化时间字符串等等。

## 一、DateTime 是什么？

- `DateTime` 是 `System` 命名空间下的一个结构（struct）
- 用来表示一个**具体的时间点**：年、月、日、时、分、秒、毫秒
- 默认值是 `0001/01/01 00:00:00`

## 二、如何获取当前时间？

```csharp
DateTime now = DateTime.Now;
Console.WriteLine(now);  // 示例输出：2025/07/23 13:10:45
```

| 成员名            | 含义                      |
| ----------------- | ------------------------- |
| `DateTime.Now`    | 当前本地时间              |
| `DateTime.UtcNow` | 当前 UTC 时间             |
| `DateTime.Today`  | 当前日期，时间为 00:00:00 |

## 三、如何创建一个指定时间的 DateTime 对象？

```csharp
DateTime dt = new DateTime(2025, 7, 23, 9, 30, 0);
Console.WriteLine(dt); // 输出：2025/07/23 09:30:00
```

构造函数格式：

```csharp
new DateTime(年, 月, 日, 时, 分, 秒);
```



## 四、如何提取时间的某一部分？

```csharp
DateTime now = DateTime.Now;

int year = now.Year;
int month = now.Month;
int day = now.Day;

int hour = now.Hour;
int minute = now.Minute;
int second = now.Second;

Console.WriteLine($"{year}-{month}-{day} {hour}:{minute}:{second}");
```

| 属性名      | 含义           |
| ----------- | -------------- |
| `Year`      | 年             |
| `Month`     | 月             |
| `Day`       | 日             |
| `Hour`      | 时             |
| `Minute`    | 分             |
| `Second`    | 秒             |
| `DayOfWeek` | 星期几         |
| `DayOfYear` | 一年中的第几天 |



## 五、如何进行时间加减运算？

```csharp
DateTime now = DateTime.Now;

DateTime tomorrow = now.AddDays(1);
DateTime oneHourLater = now.AddHours(1);
DateTime nextMonth = now.AddMonths(1);

Console.WriteLine(tomorrow);
Console.WriteLine(oneHourLater);
Console.WriteLine(nextMonth);
```

| 方法            | 含义                    |
| --------------- | ----------------------- |
| `AddDays(n)`    | 增加 n 天（可以是负数） |
| `AddHours(n)`   | 增加 n 小时             |
| `AddMinutes(n)` | 增加 n 分钟             |
| `AddMonths(n)`  | 增加 n 个月             |
| `AddYears(n)`   | 增加 n 年               |

## 六、如何计算时间差？

```csharp
DateTime start = new DateTime(2025, 7, 1);
DateTime end = new DateTime(2025, 7, 23);

TimeSpan diff = end - start;
Console.WriteLine(diff.TotalDays);  // 22
```

- `TimeSpan` 是一个“时间间隔”对象，表示两个 `DateTime` 之间的差值
- `TotalDays`、`TotalHours`、`TotalMinutes` 是浮点数

## 七、如何格式化时间输出？

```csharp
DateTime now = DateTime.Now;

string s1 = now.ToString("yyyy-MM-dd HH:mm:ss");
string s2 = now.ToString("MM/dd/yyyy");
string s3 = now.ToString("dddd");  // 星期几（英文）

Console.WriteLine(s1); // 2025-07-23 13:20:30
Console.WriteLine(s2); // 07/23/2025
Console.WriteLine(s3); // Wednesday
```

| 格式字符串 | 含义             |
| ---------- | ---------------- |
| `yyyy`     | 年（四位）       |
| `MM`       | 月（两位）       |
| `dd`       | 日               |
| `HH`       | 小时（24小时制） |
| `hh`       | 小时（12小时制） |
| `mm`       | 分               |
| `ss`       | 秒               |
| `dddd`     | 星期几（英文）   |

## 八、判断两个时间的早晚（比较）

```csharp
DateTime a = new DateTime(2025, 1, 1);
DateTime b = new DateTime(2025, 12, 1);

if (a < b)
{
    Console.WriteLine("a 比 b 更早");
}
```

也可以用：

```csharp
int result = DateTime.Compare(a, b);
// result < 0 表示 a < b
// result == 0 表示相等
// result > 0 表示 a > b
```

## 九、DateTime 常见陷阱

| 陷阱                       | 说明                                               |
| -------------------------- | -------------------------------------------------- |
| 默认值是 0001 年           | `DateTime` 是值类型，不赋值时默认是最早的时间      |
| 不自动转时区               | `DateTime.Now` 是本地时间；`UtcNow` 是全球统一时间 |
| 与 `string` 互转要格式统一 | 用 `Parse()`、`TryParse()` 转换字符串时要格式匹配  |


## 十、总结口诀

> **“获取用 Now，计算用 Add，格式用 ToString，比较用 < >，差值用减号。”**



## 练习题

### 练习1

获取当前时间，并输出成 `"2025年07月23日 14:00"` 格式。
### 练习 2

计算你的生日距离今天还有多少天。
### 练习3
判断某个时间是否在 9 点~18 点之间。
### 练习4

输出当前是一周的第几天（如：3 表示星期三）。



### 1.格式化时间
题目

> 获取当前时间，并输出成 `"2025年07月23日 14:00"` 格式。

输出

```bash

```

答案

```c# linenums="1"

```
### 2.生日还有多少天
题目

> 如果你的生日是 10 月 8 日，请计算从今天开始，还要等多少天。
>
> 提示：
> 
> * 使用 `DateTime.Today` 获取今天日期
> * 构造一个生日的 `DateTime` 对象
> * 如果生日已过，则加一年：`AddYears(1)`
> * 用减法算出 `TimeSpan`，再用 `.Days`

输出

```bash

```

答案

```c# linenums="1"

```
### 3.判断时间点
题目

> 判断某个时间是否在 9 点\~18 点之间。

输出

```bash

```

答案

```c# linenums="1"

```
### 4.判断星期几
题目

> 输出当前是一周的第几天（如：3 表示星期三）。

输出

```bash

```

答案

```c# linenums="1"

```
### 5.输出今天的日期和当前时间
题目

> 请编写一段程序，输出类似如下格式的字符串：
> 
> `今天是：2025年07月23日，当前时间是：13:45:22`
>
> **提示：** 使用 `DateTime.Now.ToString("yyyy年MM月dd日 HH:mm:ss")`。

输出

```bash

```

答案

```c# linenums="1"

```

### 6.获取并输出“星期几”
题目

> 输入一个日期（如 `2025-12-25`），程序应输出该日期是星期几，例如：`Thursday`
>
> **提示：**使用 `DateTime.Parse()` + `DateTime.DayOfWeek` 属性。

输出

```bash

```

答案

```c# linenums="1"

```

### 7.模拟一个“倒计时”提示
题目

> 活动截止日期是 2025-08-01，写程序输出“还剩多少天活动结束”。
>
> **提示：**同样用 `DateTime end - DateTime.Today` 得到差值。

输出

```bash

```

答案

```c# linenums="1"

```

### 8.判断当前时间是否在上班时间段内
题目

> 如果当前是 13:15，应输出“现在是上班时间”；如果是 19:00，应输出“现在是下班时间”。
>
> 提示：上班时间（9:00\~17:00）
>
> * 获取当前时间的小时数：`DateTime.Now.Hour`
> * 判断 `>=9 && <17`

输出

```bash

```

答案

```c# linenums="1"

```

### 9.格式化输出时间
题目

> 将当前时间以多种格式输出，例如：
>
> 2025-07-23 13:45:22  
> 23/07/2025  
> Wednesday  
> 2025年07月23日 星期三
>
> 提示: 使用 `.ToString("格式")` 以及中文星期用 `CultureInfo`


输出

```bash

```

答案

```c# linenums="1"

```

### 10.判断两个时间是否属于同一天
题目

> 给定两个时间,判断 `t1` 和 `t2` 是否是同一天。
>
> DateTime t1 = new DateTime(2025, 7, 23, 8, 30, 0);
> DateTime t2 = new DateTime(2025, 7, 23, 22, 0, 0);
>
> 提示：使用 `.Date` 属性比较即可：`t1.Date == t2.Date`

输出

```bash

```

答案

```c# linenums="1"

```

### 11.解析用户输入的时间
题目

> 提示用户输入时间字符串，如果格式正确则输出解析结果，否则提示“格式错误”。
>
> 提示：使用 `DateTime.TryParse(string, out DateTime)` 方法进行安全解析。

输出

```bash

```

答案

```c# linenums="1"

```

### 12.编写程序统计程序运行时长
题目

> 记录程序开始和结束的时间，输出总耗时（秒）。
>
> DateTime start = DateTime.Now;
> // 模拟操作
> DateTime end = DateTime.Now;
> TimeSpan duration = end - start;

输出

```bash

```

答案

```c# linenums="1"

```

### 13.转换时间戳
题目

> 将 `DateTime` 转换为毫秒时间戳（Unix 时间）。进阶题目，了解即可

提示

```bash
DateTimeOffset dto = new DateTimeOffset(DateTime.UtcNow);
long timestamp = dto.ToUnixTimeMilliseconds();
Console.WriteLine(timestamp);
```

答案

```c# linenums="1"

```


### 14.各种类型转字符串
```csharp
// 将各种类型转换为字符串
bool isActive = true;
DateTime now = DateTime.Now;

string status = "状态: " + isActive.ToString();
string timeInfo = "当前时间: " + now.ToString("yyyy-MM-dd");

Console.WriteLine(status);
Console.WriteLine(timeInfo);
```
