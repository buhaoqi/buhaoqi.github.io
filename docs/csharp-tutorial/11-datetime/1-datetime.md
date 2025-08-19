---
noteId: "3cdf500067a811f0b0d6278e683d20b1"
tags: []

---

`DateTime` 是 C# 中非常重要的一个类，几乎所有跟“时间”相关的功能都离不开它，比如获取当前时间、计算时间差、格式化时间字符串等等。

作为初学者，你只要掌握下面几个常用场景，就可以应对大多数项目中的时间处理需求。

---

## DateTime 是什么？

* `DateTime` 是 `System` 命名空间下的一个结构（struct）
* 用来表示一个**具体的时间点**：年、月、日、时、分、秒、毫秒
* 默认值是 `0001/01/01 00:00:00`

---

## 如何获取当前时间？

```c# linenums="1"
DateTime now = DateTime.Now;
Console.WriteLine(now);  // 示例输出：2025/07/23 13:10:45
```

| 成员名               | 含义                |
| ----------------- | ----------------- |
| `DateTime.Now`    | 当前本地时间            |
| `DateTime.UtcNow` | 当前 UTC 时间         |
| `DateTime.Today`  | 当前日期，时间为 00:00:00 |

---

## 创建指定时间的 DateTime 对象？

```csharp
DateTime dt = new DateTime(2025, 7, 23, 9, 30, 0);
Console.WriteLine(dt); // 输出：2025/07/23 09:30:00
```

构造函数格式：

```csharp
new DateTime(年, 月, 日, 时, 分, 秒);
```

---

## 如何提取时间

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

| 属性名         | 含义      |
| ----------- | ------- |
| `Year`      | 年       |
| `Month`     | 月       |
| `Day`       | 日       |
| `Hour`      | 时       |
| `Minute`    | 分       |
| `Second`    | 秒       |
| `DayOfWeek` | 星期几     |
| `DayOfYear` | 一年中的第几天 |

---

## 如何进行时间加减运算？

```csharp
DateTime now = DateTime.Now;

DateTime tomorrow = now.AddDays(1);
DateTime oneHourLater = now.AddHours(1);
DateTime nextMonth = now.AddMonths(1);

Console.WriteLine(tomorrow);
Console.WriteLine(oneHourLater);
Console.WriteLine(nextMonth);
```

| 方法              | 含义            |
| --------------- | ------------- |
| `AddDays(n)`    | 增加 n 天（可以是负数） |
| `AddHours(n)`   | 增加 n 小时       |
| `AddMinutes(n)` | 增加 n 分钟       |
| `AddMonths(n)`  | 增加 n 个月       |
| `AddYears(n)`   | 增加 n 年        |

---

## ⏱如何计算时间差？

```csharp
DateTime start = new DateTime(2025, 7, 1);
DateTime end = new DateTime(2025, 7, 23);

TimeSpan diff = end - start;
Console.WriteLine(diff.TotalDays);  // 22
```

* `TimeSpan` 是一个“时间间隔”对象，表示两个 `DateTime` 之间的差值
* `TotalDays`、`TotalHours`、`TotalMinutes` 是浮点数

---

## 格式化时间输出

```csharp
DateTime now = DateTime.Now;

string s1 = now.ToString("yyyy-MM-dd HH:mm:ss");
string s2 = now.ToString("MM/dd/yyyy");
string s3 = now.ToString("dddd");  // 星期几（英文）

Console.WriteLine(s1); // 2025-07-23 13:20:30
Console.WriteLine(s2); // 07/23/2025
Console.WriteLine(s3); // Wednesday
```

| 格式字符串  | 含义        |
| ------ | --------- |
| `yyyy` | 年（四位）     |
| `MM`   | 月（两位）     |
| `dd`   | 日         |
| `HH`   | 小时（24小时制） |
| `hh`   | 小时（12小时制） |
| `mm`   | 分         |
| `ss`   | 秒         |
| `dddd` | 星期几（英文）   |

---

## 比较两个时间的早晚

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

---

## DateTime 常见陷阱

| 陷阱                 | 说明                                    |
| ------------------ | ------------------------------------- |
| 默认值是 0001 年        | `DateTime` 是值类型，不赋值时默认是最早的时间          |
| 不自动转时区             | `DateTime.Now` 是本地时间；`UtcNow` 是全球统一时间 |
| 与 `string` 互转要格式统一 | 用 `Parse()`、`TryParse()` 转换字符串时要格式匹配  |

---

## 总结口诀（初学者建议记住）

> **“获取用 Now，计算用 Add，格式用 ToString，比较用 < >，差值用减号。”**

---

非常好，`DateTime` 是 C# 中非常重要的一个类，几乎所有跟“时间”相关的功能都离不开它，比如获取当前时间、计算时间差、格式化时间字符串等等。

作为初学者，你只要掌握下面几个常用场景，就可以应对大多数项目中的时间处理需求。

------

## 🧠 一、DateTime 是什么？

- `DateTime` 是 `System` 命名空间下的一个结构（struct）
- 用来表示一个**具体的时间点**：年、月、日、时、分、秒、毫秒
- 默认值是 `0001/01/01 00:00:00`

------

## 🕒 二、如何获取当前时间？

```csharp
DateTime now = DateTime.Now;
Console.WriteLine(now);  // 示例输出：2025/07/23 13:10:45
```

| 成员名            | 含义                      |
| ----------------- | ------------------------- |
| `DateTime.Now`    | 当前本地时间              |
| `DateTime.UtcNow` | 当前 UTC 时间             |
| `DateTime.Today`  | 当前日期，时间为 00:00:00 |

------

## 🏗️ 三、如何创建一个指定时间的 DateTime 对象？

```csharp
DateTime dt = new DateTime(2025, 7, 23, 9, 30, 0);
Console.WriteLine(dt); // 输出：2025/07/23 09:30:00
```

构造函数格式：

```csharp
new DateTime(年, 月, 日, 时, 分, 秒);
```

------

## 📐 四、如何提取时间的某一部分？

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

------

## 🧮 五、如何进行时间加减运算？

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

------

## ⏱️ 六、如何计算时间差？

```csharp
DateTime start = new DateTime(2025, 7, 1);
DateTime end = new DateTime(2025, 7, 23);

TimeSpan diff = end - start;
Console.WriteLine(diff.TotalDays);  // 22
```

- `TimeSpan` 是一个“时间间隔”对象，表示两个 `DateTime` 之间的差值
- `TotalDays`、`TotalHours`、`TotalMinutes` 是浮点数

------

## 🖨️ 七、如何格式化时间输出？

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

------

## 🧪 八、判断两个时间的早晚（比较）

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

------

## 📌 九、DateTime 常见陷阱

| 陷阱                       | 说明                                               |
| -------------------------- | -------------------------------------------------- |
| 默认值是 0001 年           | `DateTime` 是值类型，不赋值时默认是最早的时间      |
| 不自动转时区               | `DateTime.Now` 是本地时间；`UtcNow` 是全球统一时间 |
| 与 `string` 互转要格式统一 | 用 `Parse()`、`TryParse()` 转换字符串时要格式匹配  |

------

## ✅ 十、总结口诀（初学者建议记住）

> **“获取用 Now，计算用 Add，格式用 ToString，比较用 < >，差值用减号。”**

------

## 🎁 Bonus：简单练习题（巩固一下）

1. 获取当前时间，并输出成 `"2025年07月23日 14:00"` 格式。
2. 计算你的生日距离今天还有多少天。
3. 判断某个时间是否在 9 点~18 点之间。
4. 输出当前是一周的第几天（如：3 表示星期三）。

------

需要我出一份带答案的 `DateTime` 练习题，或者整理成 PDF/Word 学习手册，也可以告诉我！我会很乐意为你继续整理资料 🙌


## 练习
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
