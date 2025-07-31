---
noteId: "78b4fb1052aa11f0a0cb9bc81da8208a"
tags: []

---


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

------