---
noteId: "25c952a0e3fc11f09203f302f54e558c"
tags: []

---

## 一、Switch语句是什么

switch语句​​是一种基于变量值匹配的​​多分支语句。


## 二、switch语句的语法结构

```csharp
switch (变量)
{
    case 常量1: // ← 这是"case标签"
        // 如果变量等于值1，执行这里的代码
        break; // 必须用break跳出switch

    case 常量2:
        // 如果变量等于值2，执行这里的代码
        break;

    // ... 可以有任意多个case ...

    default:
        // 如果变量不等于任何case的值，执行这里的代码（可选）
        break;
}

switch (变量表达式)
{
    case 常量表达式:  // ← 这是"case标签"，标识分支入口点,翻译为“分支“；
        语句列表     // ← 这是语句块
        break;       // ← 这是"跳转语句"，控制跳出switch
    
    case 常量表达式 :  // ← 这是"case标签"，标识分支入口点
        语句列表
        break;
    
    default:         // ← 这是"default标签"，默认分支的入口点
        语句列表
        break;
}
```

**语法说明**

1.  变量表达式：
2.  case: `case` 后必须是常量，不能是变量或表达式。
3.  break:翻译为“终止";
4.  每个case块必须以跳转语句结束，最常用的就是`break;`。
5.  `default`是可选的，用于处理“其他所有情况”。
6.  每个 `case` 一般要有 `break`，否则会穿透执行下一个 case（除非你想要 fall-through 行为）。
7.  C# 7.0+ 支持 `switch` 的模式匹配（比如 `case int n when n > 0:`）。

---


##  **用法1：整数类型 case**

```csharp
// 示例：根据月份判断季节
int month = 3;
string season;

switch (month)
{
    case 12:
    case 1:
    case 2:
        season = "冬季";
        break;
        
    case 3:
    case 4:
    case 5:
        season = "春季";
        break;
        
    case 6:
    case 7:
    case 8:
        season = "夏季";
        break;
        
    case 9:
    case 10:
    case 11:
        season = "秋季";
        break;
        
    default:
        season = "无效月份";
        break;
}

Console.WriteLine($"{month}月是{season}");
// 输出：3月是春季
```

## **用法2：字符类型 case**

```csharp
// 示例：根据等级计算折扣
char grade = 'B';
double discount = 0;

switch (grade)
{
    case 'A':
        discount = 0.2;  // 8折
        break;
        
    case 'B':
        discount = 0.1;  // 9折
        break;
        
    case 'C':
        discount = 0.05; // 95折
        break;
        
    case 'D':
        discount = 0;    // 无折扣
        break;
        
    default:
        Console.WriteLine("无效等级");
        return;
}

Console.WriteLine($"等级{grade}享受{discount*100}%折扣，实际支付比例：{1-discount}");
// 输出：等级B享受10%折扣，实际支付比例：0.9
```

## **用法3：字符串类型 case（C# 7.0+）**

```csharp
// 示例：根据命令执行操作
string command = "start";
string response;

switch (command.ToLower())  // 转换为小写统一处理
{
    case "start":
        response = "系统正在启动...";
        break;
        
    case "stop":
        response = "系统正在关闭...";
        break;
        
    case "restart":
        response = "系统正在重启...";
        break;
        
    case "help":
        response = "可用命令：start, stop, restart, help";
        break;
        
    default:
        response = $"未知命令：{command}";
        break;
}

Console.WriteLine(response);
// 输出：系统正在启动...
```

## **用法4：枚举类型 case**

```csharp
// 定义枚举
enum DayOfWeek
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// 使用switch判断
DayOfWeek today = DayOfWeek.Wednesday;
string schedule;

switch (today)
{
    case DayOfWeek.Monday:
        schedule = "周一例会";
        break;
        
    case DayOfWeek.Tuesday:
    case DayOfWeek.Thursday:
        schedule = "项目开发";
        break;
        
    case DayOfWeek.Wednesday:
        schedule = "技术分享会";
        break;
        
    case DayOfWeek.Friday:
        schedule = "代码审查";
        break;
        
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
        schedule = "休息日";
        break;
        
    default:
        schedule = "正常工作日";
        break;
}

Console.WriteLine($"{today}的安排：{schedule}");
// 输出：Wednesday的安排：技术分享会
```

## **用法5：范围匹配（C# 7.0+）**

```csharp
// 示例：根据分数评级
int score = 85;
string grade;

switch (score)
{
    case int n when (n >= 90 && n <= 100):
        grade = "A";
        break;
        
    case int n when (n >= 80 && n < 90):
        grade = "B";
        break;
        
    case int n when (n >= 70 && n < 80):
        grade = "C";
        break;
        
    case int n when (n >= 60 && n < 70):
        grade = "D";
        break;
        
    case int n when (n >= 0 && n < 60):
        grade = "F";
        break;
        
    default:
        grade = "无效分数";
        break;
}

Console.WriteLine($"分数{score}的等级是：{grade}");
// 输出：分数85的等级是：B
```

## **用法6：类型模式匹配（C# 7.0+）**

```csharp
// 示例：处理不同类型的数据
object obj = 42;
string result;

switch (obj)
{
    case int i when i > 0:
        result = $"正整数：{i}";
        break;
        
    case int i when i < 0:
        result = $"负整数：{i}";
        break;
        
    case string s when s.Length > 0:
        result = $"字符串：{s}，长度：{s.Length}";
        break;
        
    case double d:
        result = $"双精度数：{d:F2}";
        break;
        
    case null:
        result = "空值";
        break;
        
    default:
        result = $"未知类型：{obj.GetType().Name}";
        break;
}

Console.WriteLine(result);
// 输出：正整数：42
```

## **用法7：多个条件组合**

```csharp
// 示例：根据坐标判断象限
int x = 3, y = -2;
string quadrant;

switch ((x, y))  // 使用元组
{
    case (0, 0):
        quadrant = "原点";
        break;
        
    case (_, 0):
        quadrant = "X轴上";
        break;
        
    case (0, _):
        quadrant = "Y轴上";
        break;
        
    case ( > 0, > 0):
        quadrant = "第一象限";
        break;
        
    case ( < 0, > 0):
        quadrant = "第二象限";
        break;
        
    case ( < 0, < 0):
        quadrant = "第三象限";
        break;
        
    case ( > 0, < 0):
        quadrant = "第四象限";
        break;
        
    default:
        quadrant = "未知位置";
        break;
}

Console.WriteLine($"坐标({x},{y})在{quadrant}");
// 输出：坐标(3,-2)在第四象限
```

## **用法8：使用 when 子句的复杂条件**

```csharp
// 示例：用户权限验证
string userRole = "Editor";
int userLevel = 2;
bool hasSpecialAccess = true;

string accessLevel;

switch (userRole)
{
    case "Admin":
        accessLevel = "完全访问权限";
        break;
        
    case "Editor" when userLevel >= 3 && hasSpecialAccess:
        accessLevel = "高级编辑权限（带特殊访问）";
        break;
        
    case "Editor" when userLevel >= 2:
        accessLevel = "标准编辑权限";
        break;
        
    case "Editor":
        accessLevel = "基础编辑权限";
        break;
        
    case "Viewer" when userLevel >= 1:
        accessLevel = "只读权限";
        break;
        
    default:
        accessLevel = "无权限";
        break;
}

Console.WriteLine($"用户角色：{userRole}，权限：{accessLevel}");
// 输出：用户角色：Editor，权限：标准编辑权限
```

---

## 三、特殊注意事项

### **1. case 穿透问题（C#不允许）**

```csharp
// C# 中不允许 case 穿透，必须使用 break 或 return
int number = 1;

// 错误写法（编译错误）
switch (number)
{
    case 1:
        Console.WriteLine("等于1");
        // 错误：控制不能从一个 case 标签贯穿到另一个 case 标签
    case 2:
        Console.WriteLine("等于2");
        break;
}

// 正确写法：多个 case 共享代码块
switch (number)
{
    case 1:
    case 2:  // case 1 和 2 共享同一个代码块
        Console.WriteLine("等于1或2");
        break;
        
    case 3:
        Console.WriteLine("等于3");
        break;
}
```

### **2. default 子句的位置**

```csharp
// default 可以放在任何位置，但通常放在最后
int value = 10;

switch (value)
{
    default:  // default 放在前面
        Console.WriteLine("其他值");
        break;
        
    case 1:
        Console.WriteLine("等于1");
        break;
        
    case 2:
        Console.WriteLine("等于2");
        break;
}

// 但更常见的做法是把 default 放在最后
switch (value)
{
    case 1:
        Console.WriteLine("等于1");
        break;
        
    case 2:
        Console.WriteLine("等于2");
        break;
        
    default:  // 推荐放在最后
        Console.WriteLine("其他值");
        break;
}
```

### **3. 必须要有 break 或 return**

```csharp
// 每个非空 case 块必须用 break、return、goto 或 throw 结束
int code = 200;

switch (code)
{
    case 200:
        Console.WriteLine("成功");
        return;  // 使用 return 结束
        
    case 404:
        Console.WriteLine("未找到");
        break;   // 使用 break 结束
        
    case 500:
        throw new Exception("服务器错误");  // 使用 throw 结束
        
    case 301:
        Console.WriteLine("重定向");
        goto case 200;  // 使用 goto 跳转到其他 case
        
    case 0:  // 空 case，可以没有 break
        // 什么也不做
        
    default:
        Console.WriteLine("未知状态码");
        break;
}
```

### **4. 使用 goto case**

```csharp
// 示例：状态机转换
int state = 1;

switch (state)
{
    case 1:
        Console.WriteLine("状态1：初始化");
        if (DateTime.Now.Second % 2 == 0)
            goto case 2;  // 跳转到状态2
        else
            goto case 3;  // 跳转到状态3
        break;  // 这里的 break 永远不会执行
        
    case 2:
        Console.WriteLine("状态2：处理中");
        goto case 4;  // 跳转到状态4
        
    case 3:
        Console.WriteLine("状态3：等待");
        goto case 4;
        
    case 4:
        Console.WriteLine("状态4：完成");
        break;
}
```

---

## 四、实际应用示例

### **示例1：计算器程序**

```csharp
Console.Write("请输入第一个数字：");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("请输入运算符 (+, -, *, /)：");
char op = Convert.ToChar(Console.ReadLine());

Console.Write("请输入第二个数字：");
double num2 = Convert.ToDouble(Console.ReadLine());

double result = 0;
bool validOperation = true;

switch (op)
{
    case '+':
        result = num1 + num2;
        break;
        
    case '-':
        result = num1 - num2;
        break;
        
    case '*':
        result = num1 * num2;
        break;
        
    case '/':
        if (num2 != 0)
            result = num1 / num2;
        else
        {
            Console.WriteLine("错误：除数不能为0！");
            validOperation = false;
        }
        break;
        
    default:
        Console.WriteLine($"错误：不支持的运算符 '{op}'");
        validOperation = false;
        break;
}

if (validOperation)
    Console.WriteLine($"结果：{num1} {op} {num2} = {result}");
```

### **示例2：工作日提醒**

```csharp
DateTime today = DateTime.Today;
string reminder;

switch (today.DayOfWeek)
{
    case DayOfWeek.Monday:
        reminder = "周一：每周例会，记得准备报告";
        break;
        
    case DayOfWeek.Tuesday:
        reminder = "周二：项目进度检查";
        break;
        
    case DayOfWeek.Wednesday:
        reminder = "周三：技术分享会";
        break;
        
    case DayOfWeek.Thursday:
        reminder = "周四：客户会议";
        break;
        
    case DayOfWeek.Friday:
        reminder = "周五：代码审查，周末前完成提交";
        break;
        
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
        reminder = "周末：好好休息，享受生活";
        break;
        
    default:
        reminder = "正常工作日";
        break;
}

Console.WriteLine($"{today:yyyy-MM-dd} {today.DayOfWeek}");
Console.WriteLine($"提醒：{reminder}");
```

### **示例3：游戏角色动作**

```csharp
enum PlayerAction { Idle, Walk, Run, Jump, Attack, Defend, Die }

PlayerAction currentAction = PlayerAction.Run;
string animation;

switch (currentAction)
{
    case PlayerAction.Idle:
        animation = "播放待机动画";
        break;
        
    case PlayerAction.Walk:
        animation = "播放行走动画，速度=2";
        break;
        
    case PlayerAction.Run:
        animation = "播放奔跑动画，速度=5";
        break;
        
    case PlayerAction.Jump:
        animation = "播放跳跃动画，重力生效";
        break;
        
    case PlayerAction.Attack:
        animation = "播放攻击动画，检测碰撞";
        break;
        
    case PlayerAction.Defend:
        animation = "播放防御动画，减少伤害";
        break;
        
    case PlayerAction.Die:
        animation = "播放死亡动画，游戏结束";
        break;
        
    default:
        animation = "未知动作";
        break;
}

Console.WriteLine($"角色动作：{currentAction}");
Console.WriteLine($"执行：{animation}");
```

---

## 五、switch 表达式（C# 8.0+）

```csharp
// 更简洁的 switch 表达式
int score = 85;

// 传统 switch 语句
string grade1;
switch (score)
{
    case >= 90: grade1 = "A"; break;
    case >= 80: grade1 = "B"; break;
    case >= 70: grade1 = "C"; break;
    case >= 60: grade1 = "D"; break;
    default: grade1 = "F"; break;
}

// C# 8.0 switch 表达式（更简洁）
string grade2 = score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F"  // _ 表示默认
};

Console.WriteLine($"分数 {score}：传统方式={grade1}，表达式方式={grade2}");

// 元组模式匹配
string result = (score, DateTime.Now.DayOfWeek) switch
{
    (>= 90, DayOfWeek.Friday) => "高分且是周五，可以庆祝！",
    (>= 90, _) => "高分",
    (_, DayOfWeek.Friday) => "周五但分数一般",
    _ => "继续努力"
};
```

---

## 六、最佳实践建议

1. **优先使用 switch 表达式**（C# 8.0+）
2. **保持 case 数量合理**，过多时考虑使用策略模式
3. **为所有可能的情况提供处理**，包括 default
4. **避免在 case 中写复杂逻辑**，提取为方法
5. **利用 when 子句处理复杂条件**
6. **考虑使用字典（Dictionary）替代复杂 switch**

```csharp
// 如果 case 太多，考虑使用字典
var operationMap = new Dictionary<string, Func<double, double, double>>
{
    ["+"] = (a, b) => a + b,
    ["-"] = (a, b) => a - b,
    ["*"] = (a, b) => a * b,
    ["/"] = (a, b) => a / b
};

if (operationMap.TryGetValue("+", out var operation))
{
    double result = operation(5, 3);  // 结果：8
}
```

通过以上示例，您可以全面掌握 C# 中 switch 语句 case 的各种用法和最佳实践。




## 用法1：基础用法 - 计算器

这是最经典的例子，完美展示了switch的用途。

```csharp
Console.Write("请输入第一个数字: ");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("请选择运算符 (+, -, *, /): ");
string op = Console.ReadLine();

Console.Write("请输入第二个数字: ");
double num2 = Convert.ToDouble(Console.ReadLine());

double result = 0;
bool validOp = true;

switch (op) // 要判断的变量是 op
{
    case "+": // 如果 op == "+"
        result = num1 + num2;
        break; // 必须 break!

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        if (num2 != 0)
            result = num1 / num2;
        else
            Console.WriteLine("错误：除数不能为零！");
        break;

    default: // 如果 op 不是 +, -, *, / 中的任何一个
        Console.WriteLine("错误：无效的运算符！");
        validOp = false;
        break;
}

if (validOp)
    Console.WriteLine($"结果: {result}");
```

## 用法2：Case合并 - 成绩等级评定

多个`case`可以共享同一段执行代码。

```csharp
Console.Write("请输入成绩等级 (A, B, C, D, F): ");
char grade = Char.ToUpper(Console.ReadKey().KeyChar); // 转换为大写
Console.WriteLine(); // 换行

switch (grade)
{
    case 'A':
        Console.WriteLine("优秀！");
        break;

    case 'B': // 注意：这里没有break，也没有代码
    case 'C': // case 'B' 和 case 'C' 都会执行下一个case的代码
        Console.WriteLine("良好。");
        break; // 在这里统一break

    case 'D':
        Console.WriteLine("及格，需要努力。");
        break;

    case 'F':
        Console.WriteLine("不及格。");
        break;

    default:
        Console.WriteLine("无效的等级！");
        break;
}
```

**输出：**
输入 `B` 或 `C`，都会输出 `"良好。"`。

## 用法3：现代写法 - Switch表达式

注意：不在考纲范围内，C# 8.0+支持

对于非常简单的switch，可以用更简洁的**switch表达式**，它直接返回一个值。

```csharp
// 传统的switch语句
string dayName;
switch (dayNumber)
{
    case 1: dayName = "周一"; break;
    case 2: dayName = "周二"; break;
    // ... 其他
    default: dayName = "无效"; break;
}

// 现代的switch表达式 (更简洁！)
string dayName = dayNumber switch
{
    1 => "周一",
    2 => "周二",
    3 => "周三",
    4 => "周四",
    5 => "周五",
    6 => "周六",
    7 => "周日",
    _ => "无效" // _ 代表 default
};

Console.WriteLine(dayName);
```

---

## 四、何时使用Switch vs If-Else？

这是一个重要的决策：

| 场景                                   | 使用          | 例子                                            |
| :------------------------------------- | :------------ | :---------------------------------------------- |
| **基于一个变量的多个==确切值**进行分支 | **`switch`**  | 菜单选项、状态码、枚举值、字符、固定数字        |
| **基于关系判断**进行分支               | **`if-else`** | `if (score > 90)`, `if (age >= 18 && age < 65)` |
| **基于逻辑关系进行判断**               | **`if-else`** | `if (isLoggedIn && hasPermission)`              |

**简单记：有明确的值，用switch；条件复杂多变，用if-else。**

---

## 五、给初学者的练习建议

1.  **模仿**：先把计算器的例子自己敲一遍，确保能运行。
2.  **修改**：尝试为计算器增加一个新的运算符，比如`%`（取余）或`^`（幂运算）。
3.  **创造**：
    *   写一个程序，根据输入的数字1-12，输出对应的月份英文单词。
    *   写一个简单的命令行菜单（1.新建 2.打开 3.保存 4.退出），用switch来处理用户选择。

掌握了`switch`语句，你的代码在处理多分支选择时会变得非常清晰和专业！



## SWITCH多值判断（10道）

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



## SWITCH多值判断（答案）

下面是这10道 C# `switch` 条件判断题的**参考答案**，代码简洁明了，适合中等难度练习和理解。

------

**题目1：星期名称**

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

**题目2：月份天数**

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

**题目3：成绩等级判断**

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

**题目4：菜单选择**

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

**题目5：判断季节**

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

**题目6：字符操作符匹配**

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

**题目7：考试等级评语**

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

**题目8：国家拨号区号匹配**

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

**题目9：交通灯枚举**

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

**题目10：元音/辅音判断**

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