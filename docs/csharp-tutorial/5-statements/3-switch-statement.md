---
noteId: "d8e4453067dc11f09287057f7c37db9f"
tags: []

---


## 一、Switch语句是什么

switch语句​​是一种基于变量值匹配的​​多分支语句。

## 二、为什么要用switch？

想象一个场景：根据星期几的数字（1-7）来输出对应的中文名称。

如果用`if-else`会写成这样：
```csharp
static void Main(string[] args)
{
    Console.WriteLine("查询星期几的英语单词");
    bool toBeContinue = true;

    while ( toBeContinue)
    {
        Console.Write("请输入1-7之间的一个数字:");
        string num = Console.ReadLine();
        string dayName;
        
        if (num == "1") Console.WriteLine("\"星期一\": Monday");
        else if (num == "2") Console.WriteLine("\"星期二\": Tuesday");
        else if (num == "3") Console.WriteLine("\"星期三\": Wednesday");
        else if (num == "4") Console.WriteLine("\"星期四\": Thursday");
        else if (num == "5") Console.WriteLine("\"星期五\": Friday");
        else if (num == "6") Console.WriteLine("\"星期六\": Saturday");
        else if (num == "7") Console.WriteLine("\"星期日\": Sunday");
        else Console.WriteLine("非法输入");

        Console.WriteLine("------------------------------");
    }
}
```

这样写虽然可以，但**重复、冗长、不易阅读**。

而`switch`语句就是为这种**基于一个变量的多个确定值进行分支**的场景而生的，它能让代码**更清晰、更简洁**。

---

## 三、switch语句的语法结构

```csharp
switch (要判断的变量)
{
    case 值1:
        // 如果变量等于值1，执行这里的代码
        break; // 必须用break跳出switch

    case 值2:
        // 如果变量等于值2，执行这里的代码
        break;

    // ... 可以有任意多个case ...

    default:
        // 如果变量不等于任何case的值，执行这里的代码（可选）
        break;
}
```

**⚠️ 注意：关键规则（初学者最容易出错的地方！）：**
1.  **每个case块必须以跳转语句结束**，最常用的就是`break;`。
2.  `default`是可选的，用于处理“其他所有情况”。
3.  `case` 后必须是**常量**，不能是变量或表达式。
4. 每个 `case` 一般要有 `break`，否则会**穿透执行**下一个 case（除非你想要 fall-through 行为）。
5. C# 7.0+ 支持 `switch` 的模式匹配（比如 `case int n when n > 0:`）。

---

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

| 场景 | 使用 | 例子 |
| :--- | :--- | :--- |
| **基于一个变量的多个==确切值**进行分支 | **`switch`** | 菜单选项、状态码、枚举值、字符、固定数字 |
| **基于关系判断**进行分支 | **`if-else`** | `if (score > 90)`, `if (age >= 18 && age < 65)` |
| **基于逻辑关系进行判断** | **`if-else`** | `if (isLoggedIn && hasPermission)` |

**简单记：有明确的值，用switch；条件复杂多变，用if-else。**

---

## 五、给初学者的练习建议

1.  **模仿**：先把计算器的例子自己敲一遍，确保能运行。
2.  **修改**：尝试为计算器增加一个新的运算符，比如`%`（取余）或`^`（幂运算）。
3.  **创造**：
    *   写一个程序，根据输入的数字1-12，输出对应的月份英文单词。
    *   写一个简单的命令行菜单（1.新建 2.打开 3.保存 4.退出），用switch来处理用户选择。

掌握了`switch`语句，你的代码在处理多分支选择时会变得非常清晰和专业！
