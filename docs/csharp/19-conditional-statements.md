---
noteId: "c2957180460511f08a53dd9fb031ea51"
tags: []

---

在 C# 中，**条件语句（Conditional Statements）**用于控制程序流程，根据**不同的条件执行不同的代码块**。

---

## 🧠 一、C# 支持的条件语句类型

| 条件语句                      | 作用               |
| ----------------------------- | ------------------ |
| `if` / `else if` / `else`     | 按条件执行不同代码 |
| `switch` / `case` / `default` | 多重条件分支选择   |
| 三元运算符 `?:`               | 简洁的条件表达式   |

---

## ✅ 二、if语句

IF条件语句：用于关系判断和逻辑判断。

### 📌 语法：

```csharp
if(表达式A){// 如果(a > b) 成立，那么执行后面的代码块A
    //代码块A
}else if(表达式B){//否则，如果(a>c)成立，那么执行后面的代码块B
    //代码块B
}else{//否则就执行代码块C 
    
    //代码块C
}
```

### ✅ 示例：

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("优秀");
}
else if (score >= 70)
{
    Console.WriteLine("良好");
}
else
{
    Console.WriteLine("需要努力");
}
```

---

## 🔁 三、`switch` 语句（多分支选择）

SWITCH语句：用于固定值的判断。

### 📌 语法：

```csharp
switch (表达式)
{
    case 值1:
        // 执行代码块1
        break;
    case 值2:
        // 执行代码块2
        break;
    default:
        // 所有 case 不匹配时执行
        break;
}
```

### ✅ 示例：

```csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("星期一");
        break;
    case 2:
        Console.WriteLine("星期二");
        break;
    case 3:
        Console.WriteLine("星期三");
        break;
    default:
        Console.WriteLine("未知");
        break;
}
```

### ⚠️ 注意：

* `case` 后必须是**常量**，不能是变量或表达式。
* 每个 `case` 一般要有 `break`，否则会**穿透执行**下一个 case（除非你想要 fall-through 行为）。
* C# 7.0+ 支持 `switch` 的模式匹配（比如 `case int n when n > 0:`）。

---

## 🔄 四、三元运算符（`?:`）

三元运算符：一种简洁的条件写法，适合动态判断赋值。

### 📌 语法：

```csharp
变量 = 条件 ? 值1 : 值2;
```

### ✅ 示例：

```csharp
int age = 20;
string result = (age >= 18) ? "成年人" : "未成年人";
Console.WriteLine(result);
```

---

## 🚫 五、常见错误和注意事项

| 错误情况       | 描述                                           |
| -------------- | ---------------------------------------------- |
| 少了 `break`   | 在 `switch` 语句中容易导致逻辑错误             |
| 写错逻辑关系   | 如 `if (a > b && c)` 中 `c` 不是布尔类型会报错 |
| 忘记花括号     | 单行语句可以省略 `{}`，多行必须加上            |
| `if-else` 过多 | 推荐在复杂判断中使用 `switch` 或优化逻辑结构   |

---

## 🧠 六、嵌套条件语句

条件语句可以嵌套使用，但不要太深，否则代码难读。

```csharp
int x = 5, y = 10;

if (x < y)
{
    if (x > 0)
    {
        Console.WriteLine("x 小于 y 且 x 大于 0");
    }
}
```

---

## ✅ 七、实际应用案例：分段函数

```csharp
int x = 12;
int y;

if (x < 0)
{
    y = -1;
}
else if (x == 0)
{
    y = 0;
}
else
{
    y = 1;
}
Console.WriteLine("y = " + y);
```

---

## 🧾 总结：条件语句选择建议

| 场景           | 建议语句          |
| -------------- | ----------------- |
| 两个分支       | `if-else`         |
| 多个范围判断   | `if-else if-else` |
| 多个值精确匹配 | `switch`          |
| 简单赋值判断   | 三元运算符        |

---

## IF语句VS SWITCH语句

### ✅ IF语句 VS SWITCH语句

| 对比点   | `if` 语句                              | `switch` 语句                          |
| -------- | -------------------------------------- | -------------------------------------- |
| 适用情况 | 条件是布尔表达式或复杂判断             | 条件是单个变量与固定值的匹配           |
| 条件类型 | 可以是任何表达式（数值、范围、逻辑）   | 只能是可枚举的常量值                   |
| 灵活性   | 高，支持逻辑运算、范围判断、函数调用等 | 低，只支持值匹配                       |
| 可读性   | 判断多时会变复杂，可嵌套但难读         | 分支清晰、结构简洁，适合多个固定值匹配 |
| 性能     | 对少量判断没差别，多分支时可能略慢     | 编译器可能优化为查找表，性能略优       |

---

### 🔍 IF语句 VS SWITCH语法区别

#### ▶ `if` 示例：可以进行范围、逻辑判断

```csharp
int score = 75;

if (score >= 90)
    Console.WriteLine("优秀");
else if (score >= 70)
    Console.WriteLine("良好");
else
    Console.WriteLine("及格或不及格");
```

#### ▶ `switch` 示例：只能用于具体值匹配

```csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("星期一");
        break;
    case 2:
        Console.WriteLine("星期二");
        break;
    case 3:
        Console.WriteLine("星期三");
        break;
    default:
        Console.WriteLine("未知");
        break;
}
```

---

### 🎯 支持的条件类型

| 类型                  | `if`              | `switch`                           |      |      |
| --------------------- | ----------------- | ---------------------------------- | ---- | ---- |
| 比较运算（>、<、==）  | ✅ 支持            | ❌ 不支持                           |      |      |
| 逻辑运算（&&、\|\| ） | ✅ 支持            | ❌ 不支持                           |      |      |
| 范围判断              | ✅ 支持            | ❌ 不支持（但 C# 7.0+ 支持 `when`） |      |      |
| 枚举、常量判断        | ✅ 支持            | ✅ 支持                             |      |      |
| 字符串判断            | ✅ 支持            | ✅ 支持（C# 7.0+ 性能优化）         |      |      |
| 模式匹配              | ⭕ 支持（C# 9 起） | ✅ 支持（C# 7 起）                  |      |      |

---

### 🧠 四、实际应用建议

| 情况                                       | 推荐语句             |
| ------------------------------------------ | -------------------- |
| 需要复杂判断（如范围、函数调用、逻辑运算） | `if`                 |
| 多个固定值（如菜单选项、星期、月份）       | `switch`             |
| 判断只有两个分支（是/否）                  | `if-else`            |
| 性能要求高、分支很多                       | `switch`（性能更优） |

---

### 📌 五、简要总结

| 对比维度       | if                 | switch                             |
| -------------- | ------------------ | ---------------------------------- |
| 条件类型       | 任意布尔表达式     | 单个变量与常量匹配                 |
| 判断能力       | 范围判断、逻辑运算 | 精确匹配（C# 7+ 可 pattern match） |
| 表达能力       | 强，适合复杂逻辑   | 简洁，适合固定分支                 |
| 性能（多分支） | 相对略慢           | 可能优化为跳转表，更快             |

---

### 🚀 小贴士

如果你判断的是枚举类型、整数常量、字符串固定值，优先使用 `switch`；
如果你要比较范围、多个条件组合、嵌套条件，使用 `if` 更合适。

## 练习

## ✅ 一、关系判断题（10 题）

1. 判断一个整数是否为正数。
2. 判断一个整数是否是偶数。
3. 判断某人是否成年（年龄 ≥ 18）。
4. 判断成绩是否在 60～100 之间。
5. 判断两个变量 `a` 和 `b` 是否相等。
6. 判断一个布尔变量 `isOnline` 是否为 true。
7. 判断一个字符是否是大写英文字母（A\~Z）。
8. 判断一个字符串是否非空且长度超过 5。
9. 判断某人是否是学生且年龄在 6\~18 岁之间。
10. 判断是否不是工作日（`isWeekend = true`）且天气晴朗（`isSunny = true`）。

---

## 🧩 二、复合逻辑判断题（10 题）

11. 判断一个数是否在 10\~20 之间，且不是 15。
12. 判断一个数是否小于 0 或大于 100。
13. 判断某人是否有会员资格（`isVip = true`）或者积分超过 1000。
14. 判断某个商品是否缺货（库存为 0）或停售（`isOnSale = false`）。
15. 判断用户是否既不是游客也不是管理员。
16. 判断 `a > b` 且 `b > c`，从而判断是否递减。
17. 判断某人是否具有访问权限（必须登录且权限等级为“管理员”）。
18. 判断是否满足“仅一个条件为真”：`hasCoupon ^ isDiscountDay`。
19. 判断输入密码是否正确且长度在 6\~12 位之间。
20. 判断某设备是否在“运行状态”且未报警（`isRunning && !isAlarm`）。

---

## 三、SWITCH多值判断（10道）

以下是10道 **中等难度** 的 C# `switch` 条件判断练习题，题目涵盖了整数、字符串、枚举、嵌套判断、多个 `case` 合并等常见情境，适合巩固 `switch` 语句用法。

------

### ✅ 题目1：星期名称

**题目：** 用户输入一个数字（1 到 7），使用 `switch` 输出对应的星期几名称。

------

### ✅ 题目2：月份天数

**题目：** 输入月份（1~12），输出该月天数（不考虑闰年）。

------

### ✅ 题目3：成绩等级判断

**题目：** 输入一个成绩（0~100），使用 `switch` 判断属于哪个等级：

- 90-100：优秀
- 80-89：良好
- 70-79：中等
- 60-69：及格
- 0-59：不及格

提示：可以先把成绩除以 10 再 `switch`。

------

### ✅ 题目4：菜单选择

**题目：** 模拟一个菜单程序，用户输入数字选择功能：

- 1：新建文件
- 2：打开文件
- 3：保存文件
- 4：退出程序
  使用 `switch` 实现对应输出。

------

### ✅ 题目5：判断季节

**题目：** 输入月份（1~12），使用 `switch` 判断是哪个季节：

- 春季：3, 4, 5
- 夏季：6, 7, 8
- 秋季：9, 10, 11
- 冬季：12, 1, 2

------

### ✅ 题目6：字符操作符匹配

**题目：** 用户输入一个操作符（如：`+`, `-`, `*`, `/`），输入两个数字，使用 `switch` 执行对应运算。

------

### ✅ 题目7：考试结果反馈

**题目：** 用户输入一个等级（"A"、"B"、"C"、"D"、"F"），用 `switch` 输出评语。

------

### ✅ 题目8：国家拨号区号匹配

**题目：** 用户输入国家区号（如：86，1，81），用 `switch` 输出国家名称：

- 86：中国
- 1：美国
- 81：日本
- 44：英国
- 49：德国

------

### ✅ 题目9：使用枚举控制交通灯

**题目：** 使用枚举定义交通灯颜色（Red, Yellow, Green），用 `switch` 输出提示信息（如：停、准备、通行）。

------

### ✅ 题目10：根据字母判断元音/辅音

**题目：** 用户输入一个字母，使用 `switch` 判断是否为元音字母（a、e、i、o、u），其余为辅音。

------

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



## 参考答案（关系判断题）

---

### 1. 判断一个整数是否为正数

```csharp
int number = 5;
if (number > 0)
    Console.WriteLine("是正数");
else
    Console.WriteLine("不是正数");
```

✅ 输出：`是正数`

---

### 2. 判断一个整数是否是偶数

```csharp
int number = 6;
if (number % 2 == 0)
    Console.WriteLine("是偶数");
else
    Console.WriteLine("是奇数");
```

✅ 输出：`是偶数`

---

### 3. 判断某人是否成年（年龄 ≥ 18）

```csharp
int age = 20;
if (age >= 18)
    Console.WriteLine("已成年");
else
    Console.WriteLine("未成年");


Console.Write("请输入出生年份：");
int birthYear = int.Parse(Console.ReadLine());

int currentYear = DateTime.Now.Year;
int age = currentYear - birthYear;

string result = (age >= 18) ? "已成年" : "未成年";
Console.WriteLine($"年龄：{age}，{result}");

```

✅ 输出：`已成年`

---

### 4. 判断成绩是否在 60～100 之间

```csharp
int score = 85;
if (score >= 60 && score <= 100)
    Console.WriteLine("成绩合格");
else
    Console.WriteLine("成绩不合格");
```

✅ 输出：`成绩合格`

---

### 5. 判断两个变量 a 和 b 是否相等

```csharp
int a = 10, b = 10;
if (a == b)
    Console.WriteLine("a 和 b 相等");
else
    Console.WriteLine("a 和 b 不相等");
```

✅ 输出：`a 和 b 相等`

---

### 6. 判断一个布尔变量 isOnline 是否为 true

```csharp
bool isOnline = true;
if (isOnline)
    Console.WriteLine("用户在线");
else
    Console.WriteLine("用户离线");
```

✅ 输出：`用户在线`

---

### 7. 判断一个字符是否是大写英文字母（A\~Z）

```csharp
char ch = 'G';
if (ch >= 'A' && ch <= 'Z')
    Console.WriteLine("是大写字母");
else
    Console.WriteLine("不是大写字母");
```

✅ 输出：`是大写字母`

---

### 8. 判断一个字符串是否非空且长度超过 5

```csharp
string str = "ChatGPT";
if (!string.IsNullOrEmpty(str) && str.Length > 5)
    Console.WriteLine("字符串合法");
else
    Console.WriteLine("字符串不合法");
```

✅ 输出：`字符串合法`

---

### 9. 判断某人是否是学生且年龄在 6\~18 岁之间

```csharp
bool isStudent = true;
int age = 12;
if (isStudent && age >= 6 && age <= 18)
    Console.WriteLine("是学生");
else
    Console.WriteLine("不是学生");
```

✅ 输出：`是学生`

---

## 参考答案（复合逻辑判断题）

### 10. 判断是否不是工作日且天气晴朗

```csharp
bool isWeekend = true;
bool isSunny = true;
if (isWeekend && isSunny)
    Console.WriteLine("适合出游");
else
    Console.WriteLine("不适合出游");
```

✅ 输出：`适合出游`

---

### 11. 判断一个数是否在 10\~20 之间，且不是 15

```csharp
int num = 18;
if (num >= 10 && num <= 20 && num != 15)
    Console.WriteLine("符合条件");
else
    Console.WriteLine("不符合条件");
```

✅ 输出：`符合条件`

---

### 12. 判断一个数是否小于 0 或大于 100

```csharp
int num = -5;
if (num < 0 || num > 100)
    Console.WriteLine("范围之外");
else
    Console.WriteLine("在范围内");
```

✅ 输出：`范围之外`

---

### 13. 判断是否有会员资格（isVip）或者积分超过 1000

```csharp
bool isVip = false;
int points = 1200;
if (isVip || points > 1000)
    Console.WriteLine("有资格");
else
    Console.WriteLine("无资格");
```

✅ 输出：`有资格`

---

### 14. 判断商品是否缺货（库存为0）或停售（isOnSale = false）

```csharp
int stock = 0;
bool isOnSale = true;
if (stock == 0 || !isOnSale)
    Console.WriteLine("不可购买");
else
    Console.WriteLine("可以购买");
```

✅ 输出：`不可购买`

---

### 15. 判断用户不是游客也不是管理员

```csharp
bool isGuest = false;
bool isAdmin = false;
if (!isGuest && !isAdmin)
    Console.WriteLine("普通用户");
else
    Console.WriteLine("特殊身份");
```

✅ 输出：`普通用户`

---

### 16. 判断 a > b 且 b > c 是否为递减序列

```csharp
int a = 10, b = 8, c = 5;
if (a > b && b > c)
    Console.WriteLine("递减序列");
else
    Console.WriteLine("不是递减序列");
```

✅ 输出：`递减序列`

---

### 17. 判断是否已登录且权限为管理员

```csharp
bool isLoggedIn = true;
string role = "admin";
if (isLoggedIn && role == "admin")
    Console.WriteLine("有访问权限");
else
    Console.WriteLine("无访问权限");
```

✅ 输出：`有访问权限`

---

### 18. 判断“仅一个条件为真”：`hasCoupon ^ isDiscountDay`

```csharp
bool hasCoupon = true;
bool isDiscountDay = false;
if (hasCoupon ^ isDiscountDay)
    Console.WriteLine("使用优惠");
else
    Console.WriteLine("不使用优惠");
```

✅ 输出：`使用优惠`

---

### 19. 判断输入密码是否正确且长度在 6～12 位之间

```csharp
string inputPwd = "abc1234";
string correctPwd = "abc1234";
if (inputPwd == correctPwd && inputPwd.Length >= 6 && inputPwd.Length <= 12)
    Console.WriteLine("密码合法");
else
    Console.WriteLine("密码不合法");
```

✅ 输出：`密码合法`

---

### 20. 判断设备是否在运行状态且未报警

```csharp
bool isRunning = true;
bool isAlarm = false;
if (isRunning && !isAlarm)
    Console.WriteLine("设备正常运行");
else
    Console.WriteLine("设备异常");
```

✅ 输出：`设备正常运行`

---

## 参考答案（SWITCH多值判断）

下面是这10道 C# `switch` 条件判断题的**参考答案**，代码简洁明了，适合中等难度练习和理解。

------

### ✅ **题目1：星期名称**

```csharp
int day = int.Parse(Console.ReadLine());
switch (day)
{
    case 1: Console.WriteLine("星期一"); break;
    case 2: Console.WriteLine("星期二"); break;
    case 3: Console.WriteLine("星期三"); break;
    case 4: Console.WriteLine("星期四"); break;
    case 5: Console.WriteLine("星期五"); break;
    case 6: Console.WriteLine("星期六"); break;
    case 7: Console.WriteLine("星期日"); break;
    default: Console.WriteLine("输入无效"); break;
}
```

------

### ✅ **题目2：月份天数**

```csharp
int month = int.Parse(Console.ReadLine());
switch (month)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        Console.WriteLine("31天"); break;
    case 4:
    case 6:
    case 9:
    case 11:
        Console.WriteLine("30天"); break;
    case 2:
        Console.WriteLine("28天"); break;
    default:
        Console.WriteLine("无效的月份"); break;
}
```

------

### ✅ **题目3：成绩等级判断**

```csharp
int score = int.Parse(Console.ReadLine());
switch (score / 10)
{
    case 10:
    case 9: Console.WriteLine("优秀"); break;
    case 8: Console.WriteLine("良好"); break;
    case 7: Console.WriteLine("中等"); break;
    case 6: Console.WriteLine("及格"); break;
    default: Console.WriteLine("不及格"); break;
}
```

------

### ✅ **题目4：菜单选择**

```csharp
int choice = int.Parse(Console.ReadLine());
switch (choice)
{
    case 1: Console.WriteLine("新建文件"); break;
    case 2: Console.WriteLine("打开文件"); break;
    case 3: Console.WriteLine("保存文件"); break;
    case 4: Console.WriteLine("退出程序"); break;
    default: Console.WriteLine("无效选择"); break;
}
```

------

### ✅ **题目5：判断季节**

```csharp
int m = int.Parse(Console.ReadLine());
switch (m)
{
    case 3:
    case 4:
    case 5:
        Console.WriteLine("春季"); break;
    case 6:
    case 7:
    case 8:
        Console.WriteLine("夏季"); break;
    case 9:
    case 10:
    case 11:
        Console.WriteLine("秋季"); break;
    case 12:
    case 1:
    case 2:
        Console.WriteLine("冬季"); break;
    default:
        Console.WriteLine("无效月份"); break;
}
```

------

### ✅ **题目6：字符操作符匹配**

```csharp
char op = char.Parse(Console.ReadLine());
int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());

switch (op)
{
    case '+': Console.WriteLine(a + b); break;
    case '-': Console.WriteLine(a - b); break;
    case '*': Console.WriteLine(a * b); break;
    case '/':
        if (b != 0)
            Console.WriteLine(a / b);
        else
            Console.WriteLine("除数不能为0");
        break;
    default:
        Console.WriteLine("无效操作符"); break;
}
```

------

### ✅ **题目7：考试等级评语**

```csharp
string grade = Console.ReadLine();
switch (grade.ToUpper())
{
    case "A": Console.WriteLine("非常棒！"); break;
    case "B": Console.WriteLine("不错，加油！"); break;
    case "C": Console.WriteLine("还行，要努力！"); break;
    case "D": Console.WriteLine("危险边缘！"); break;
    case "F": Console.WriteLine("不及格，需努力！"); break;
    default: Console.WriteLine("无效等级"); break;
}
```

------

### ✅ **题目8：国家拨号区号匹配**

```csharp
int code = int.Parse(Console.ReadLine());
switch (code)
{
    case 86: Console.WriteLine("中国"); break;
    case 1: Console.WriteLine("美国"); break;
    case 81: Console.WriteLine("日本"); break;
    case 44: Console.WriteLine("英国"); break;
    case 49: Console.WriteLine("德国"); break;
    default: Console.WriteLine("未知国家"); break;
}
```

------

### ✅ **题目9：交通灯枚举**

```csharp
enum TrafficLight { Red, Yellow, Green }

TrafficLight light = (TrafficLight)Enum.Parse(typeof(TrafficLight), Console.ReadLine(), true);

switch (light)
{
    case TrafficLight.Red: Console.WriteLine("停止"); break;
    case TrafficLight.Yellow: Console.WriteLine("准备"); break;
    case TrafficLight.Green: Console.WriteLine("通行"); break;
    default: Console.WriteLine("未知信号"); break;
}
```

------

### ✅ **题目10：元音/辅音判断**

```csharp
char letter = char.ToLower(char.Parse(Console.ReadLine()));
switch (letter)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        Console.WriteLine("元音"); break;
    default:
        if (char.IsLetter(letter))
            Console.WriteLine("辅音");
        else
            Console.WriteLine("无效字符");
        break;
}
```

------

## 参考答案（三元运算符）

以下是上面10道 **C# 三元运算符（`?:`）练习题的参考答案**，语法简洁清晰，适合巩固条件表达式的使用。

------

### ✅ **题目1：判断奇偶数**

```csharp
int num = int.Parse(Console.ReadLine());
string result = (num % 2 == 0) ? "偶数" : "奇数";
Console.WriteLine(result);
```

------

### ✅ **题目2：判断最大值（两个数）**

```csharp
int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
int max = (a > b) ? a : b;
Console.WriteLine("最大值是：" + max);
```

------

### ✅ **题目3：判断正数/负数/零**

```csharp
int n = int.Parse(Console.ReadLine());
string result = (n > 0) ? "正数" : (n < 0) ? "负数" : "零";
Console.WriteLine(result);
```

------

### ✅ **题目4：年龄段判断**

```csharp
int age = int.Parse(Console.ReadLine());
string type = (age < 18) ? "未成年" : "成年";
Console.WriteLine(type);
```

------

### ✅ **题目5：三个数最大值**

```csharp
int x = int.Parse(Console.ReadLine());
int y = int.Parse(Console.ReadLine());
int z = int.Parse(Console.ReadLine());
int max = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
Console.WriteLine("最大值是：" + max);
```

------

### ✅ **题目6：考试成绩评定**

```csharp
int score = int.Parse(Console.ReadLine());
string result = (score >= 60) ? "及格" : "不及格";
Console.WriteLine(result);
```

------

### ✅ **题目7：判断闰年（简化版）**

```csharp
int year = int.Parse(Console.ReadLine());
string result = (year % 4 == 0) ? "是闰年" : "不是闰年";
Console.WriteLine(result);
```

> 📌 注：更准确的判断应为 `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`

------

### ✅ **题目8：绝对值计算**

```csharp
int n = int.Parse(Console.ReadLine());
int abs = (n >= 0) ? n : -n;
Console.WriteLine("绝对值：" + abs);
```

------

### ✅ **题目9：用户登录状态判断**

```csharp
bool isLoggedIn = bool.Parse(Console.ReadLine());
string message = isLoggedIn ? "欢迎回来" : "请登录";
Console.WriteLine(message);
```

------

### ✅ **题目10：判断两个数是否相等**

```csharp
int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
string result = (a == b) ? "相等" : "不相等";
Console.WriteLine(result);
```

------

## 生成 5×5 空心矩形矩阵的代码



```c#
*****
*   *
*   *
*   *
*****
  
int size = 5;  // 矩阵尺寸 5x5
        
for (int row = 0; row < size; row++)
{
    for (int col = 0; col < size; col++)
    {
        // 判断是否在边界位置
        if (row == 0 || row == size - 1 ||  // 顶部或底部边界
            col == 0 || col == size - 1)    // 左侧或右侧边界
        {
            Console.Write("*");
        }
        else
        {
            Console.Write(" ");  // 内部填充空格
        }
    }
    Console.WriteLine();  // 换行
}
```