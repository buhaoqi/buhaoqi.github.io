---
noteId: "db88c65052a911f0a0cb9bc81da8208a"
tags: []

---
## 三元运算符练习题（10道）

以下是 10 道 **中等难度的 C# 三元运算符（条件运算符 `?:`）练习题**，适合用来练习逻辑判断、简化 `if-else` 表达式等技能。

------

### ✅ 题目1：判断奇偶数

**题目：** 输入一个整数，判断是奇数还是偶数，使用三元运算符输出。

------

### ✅ 题目2：判断最大值

**题目：** 输入两个整数，输出较大的那个，使用三元运算符。

------

### ✅ 题目3：判断正负数

**题目：** 输入一个整数，判断是正数、负数还是零（可嵌套三元运算符）。

------

### ✅ 题目4：年龄段判断

**题目：** 输入一个年龄，使用三元运算符判断是：

- 未成年（<18）
- 成年（≥18）

------

### ✅ 题目5：比较三个数的最大值

**题目：** 输入三个整数，使用嵌套三元运算符找出最大值。

------

### ✅ 题目6：考试成绩评定

**题目：** 输入成绩，使用三元运算符判断是否及格（60分及以上为及格）。

------

### ✅ 题目7：判断闰年（简化）

**题目：** 输入一个年份，使用三元运算符判断是否为闰年（可忽略世纪年判断规则，只用 `%4 == 0`）。

------

### ✅ 题目8：绝对值计算

**题目：** 输入一个整数，使用三元运算符输出其绝对值。

------

### ✅ 题目9：用户登录状态判断

**题目：** 输入一个布尔值 `isLoggedIn`，使用三元运算符输出 “欢迎回来” 或 “请登录”。

------

### ✅ 题目10：两个数是否相等

**题目：** 输入两个整数，使用三元运算符判断是否相等，输出 “相等” 或 “不相等”。


## 参考答案（三元运算符）

以下是上面10道 **C# 三元运算符（`?:`）练习题的参考答案**，语法简洁清晰，适合巩固条件表达式的使用。

------

**题目1：判断奇偶数**

```csharp
int num = int.Parse(Console.ReadLine());
string result = (num % 2 == 0) ? "偶数" : "奇数";
Console.WriteLine(result);
```

------

**题目2：判断最大值（两个数）**

```csharp
int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
int max = (a > b) ? a : b;
Console.WriteLine("最大值是：" + max);
```

------

**题目3：判断正数/负数/零**

```csharp
int n = int.Parse(Console.ReadLine());
string result = (n > 0) ? "正数" : (n < 0) ? "负数" : "零";
Console.WriteLine(result);
```

------

**题目4：年龄段判断**

```csharp
int age = int.Parse(Console.ReadLine());
string type = (age < 18) ? "未成年" : "成年";
Console.WriteLine(type);
```

------

**题目5：三个数最大值**

```csharp
int x = int.Parse(Console.ReadLine());
int y = int.Parse(Console.ReadLine());
int z = int.Parse(Console.ReadLine());
int max = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
Console.WriteLine("最大值是：" + max);
```

------

**题目6：考试成绩评定**

```csharp
int score = int.Parse(Console.ReadLine());
string result = (score >= 60) ? "及格" : "不及格";
Console.WriteLine(result);
```

------

**题目7：判断闰年（简化版）**

```csharp
int year = int.Parse(Console.ReadLine());
string result = (year % 4 == 0) ? "是闰年" : "不是闰年";
Console.WriteLine(result);
```

> 📌 注：更准确的判断应为 `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`

------

**题目8：绝对值计算**

```csharp
int n = int.Parse(Console.ReadLine());
int abs = (n >= 0) ? n : -n;
Console.WriteLine("绝对值：" + abs);
```

------

**题目9：用户登录状态判断**

```csharp
bool isLoggedIn = bool.Parse(Console.ReadLine());
string message = isLoggedIn ? "欢迎回来" : "请登录";
Console.WriteLine(message);
```

------

**题目10：判断两个数是否相等**

```csharp
int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
string result = (a == b) ? "相等" : "不相等";
Console.WriteLine(result);
```

------