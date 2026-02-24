---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务九 方法的重载  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务九 方法的重载  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---

## 示例1：计算器 - 不同参数个数
```csharp
public class Calculator
{
    // 两个数相加
    public int Sum(int a, int b)
    {
        return a + b;
    }
    
    // 三个数相加
    public int Sum(int a, int b, int c)
    {
        return a + b + c;
    }
    
    // 四个数相加
    public int Sum(int a, int b, int c, int d)
    {
        return a + b + c + d;
    }
}

// 测试代码
Calculator calc = new Calculator();
Console.WriteLine(calc.Sum(10, 20));           // 30
Console.WriteLine(calc.Sum(10, 20, 30));        // 60
Console.WriteLine(calc.Sum(10, 20, 30, 40));    // 100
```

## 示例2：参数类型不同
```csharp
// 打印数据
public class Printer
{
    // 打印整数
    public void Print(int number)
    {
        Console.WriteLine($"整数：{number}");
    }
    
    // 打印字符串（参数类型不同）
    public void Print(string text)
    {
        Console.WriteLine($"字符串：{text}");
    }
    
    // 打印布尔值（参数类型不同）
    public void Print(bool flag)
    {
        Console.WriteLine($"布尔值：{flag}");
    }
}

// 使用示例
Printer printer = new Printer();
printer.Print(100);        // 输出：整数：100
printer.Print("Hello");    // 输出：字符串：Hello
printer.Print(true);       // 输出：布尔值：True
```

## 示例3：显示信息 - 不同参数类型
```csharp
public class Display
{
    // 显示整数
    public void Show(int value)
    {
        Console.WriteLine($"整数：{value}");
    }
    
    // 显示小数
    public void Show(double value)
    {
        Console.WriteLine($"小数：{value}");
    }
    
    // 显示文本
    public void Show(string value)
    {
        Console.WriteLine($"文本：{value}");
    }
    
    // 显示日期
    public void Show(DateTime value)
    {
        Console.WriteLine($"日期：{value:yyyy-MM-dd}");
    }
}

// 测试代码
Display display = new Display();
display.Show(100);                 // 整数：100
display.Show(3.14);                // 小数：3.14
display.Show("Hello C#");          // 文本：Hello C#
display.Show(DateTime.Now);        // 日期：2024-01-15
```

## 示例4：参数顺序不同
```csharp
public class Person
{
    // 先姓名后年龄
    public void SetInfo(string name, int age)
    {
        Console.WriteLine($"姓名：{name}，年龄：{age}");
    }
    
    // 先年龄后姓名（参数顺序不同）
    public void SetInfo(int age, string name)
    {
        Console.WriteLine($"年龄：{age}，姓名：{name}");
    }
}

// 使用示例
Person person = new Person();
person.SetInfo("张三", 20);    // 输出：姓名：张三，年龄：20
person.SetInfo(20, "张三");    // 输出：年龄：20，姓名：张三
```

## 示例5：最大值 - 不同数据类型
```csharp
public class MaxFinder
{
    // 两个整数的最大值
    public int GetMax(int a, int b)
    {
        return a > b ? a : b;
    }
    
    // 两个小数的最大值
    public double GetMax(double a, double b)
    {
        return a > b ? a : b;
    }
    
    // 三个整数的最大值
    public int GetMax(int a, int b, int c)
    {
        int max = a > b ? a : b;
        return max > c ? max : c;
    }
    
    // 从数组中找最大值
    public int GetMax(int[] numbers)
    {
        if (numbers == null || numbers.Length == 0)
            return 0;
        
        int max = numbers[0];
        foreach (int num in numbers)
        {
            if (num > max)
                max = num;
        }
        return max;
    }
}

// 测试代码
MaxFinder finder = new MaxFinder();
Console.WriteLine(finder.GetMax(5, 8));              // 8
Console.WriteLine(finder.GetMax(3.5, 2.8));          // 3.5
Console.WriteLine(finder.GetMax(10, 20, 15));        // 20
Console.WriteLine(finder.GetMax(new int[] {3,7,2,9,5})); // 9
```

## 示例6：构造方法重载
```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string ClassName { get; set; }
    
    // 无参构造方法
    public Student()
    {
        Name = "未知";
        Age = 0;
        ClassName = "未分配";
    }
    
    // 带姓名参数的构造方法
    public Student(string name)
    {
        Name = name;
        Age = 0;
        ClassName = "未分配";
    }
    
    // 带所有参数的构造方法
    public Student(string name, int age, string className)
    {
        Name = name;
        Age = age;
        ClassName = className;
    }
}

// 使用示例
Student s1 = new Student();                    // 默认学生
Student s2 = new Student("李四");               // 只指定姓名
Student s3 = new Student("王五", 18, "三年二班"); // 指定所有信息
```
## 示例6：创建矩形 - 构造方法重载
```csharp
public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
    public string Color { get; set; }
    
    // 默认构造 - 创建1x1的正方形
    public Rectangle()
    {
        Width = 1;
        Height = 1;
        Color = "黑色";
    }
    
    // 创建正方形
    public Rectangle(double side)
    {
        Width = side;
        Height = side;
        Color = "黑色";
    }
    
    // 创建指定大小的矩形
    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
        Color = "黑色";
    }
    
    // 创建指定大小和颜色的矩形
    public Rectangle(double width, double height, string color)
    {
        Width = width;
        Height = height;
        Color = color;
    }
    
    public void ShowInfo()
    {
        Console.WriteLine($"矩形：{Width} x {Height}，颜色：{Color}，面积：{Width * Height}");
    }
}

// 测试代码
Rectangle r1 = new Rectangle();                  // 1x1 黑色
Rectangle r2 = new Rectangle(5);                  // 5x5 黑色
Rectangle r3 = new Rectangle(4, 6);               // 4x6 黑色
Rectangle r4 = new Rectangle(3, 8, "红色");        // 3x8 红色

r1.ShowInfo();
r2.ShowInfo();
r3.ShowInfo();
r4.ShowInfo();
```

## 示例7：字符串处理 - 参数顺序不同
```csharp
public class StringHelper
{
    // 将字符串重复指定次数
    public string Repeat(string str, int count)
    {
        string result = "";
        for (int i = 0; i < count; i++)
        {
            result += str;
        }
        return result;
    }
    
    // 将数字重复指定次数（参数顺序不同）
    public string Repeat(int count, string str)
    {
        string result = "";
        for (int i = 0; i < count; i++)
        {
            result += str;
        }
        return result;
    }
    
    // 用分隔符连接字符串
    public string Join(string separator, string str1, string str2)
    {
        return str1 + separator + str2;
    }
    
    // 用分隔符连接字符串数组
    public string Join(string separator, string[] strings)
    {
        return string.Join(separator, strings);
    }
}

// 测试代码
StringHelper helper = new StringHelper();
Console.WriteLine(helper.Repeat("Hi", 3));           // HiHiHi
Console.WriteLine(helper.Repeat(3, "Ha"));           // HaHaHa
Console.WriteLine(helper.Join("-", "A", "B"));       // A-B
Console.WriteLine(helper.Join(",", new[] {"A","B","C"})); // A,B,C
```

## 示例8：计算面积 - 多种图形
```csharp
public class AreaCalculator
{
    // 计算正方形面积
    public double CalculateArea(double side)
    {
        return side * side;
    }
    
    // 计算长方形面积
    public double CalculateArea(double length, double width)
    {
        return length * width;
    }
    
    // 计算圆形面积
    public double CalculateArea(double radius, bool isCircle)
    {
        // isCircle参数只是为了区分方法，实际开发中最好用不同方法名
        return Math.PI * radius * radius;
    }
    
    // 计算三角形面积
    public double CalculateArea(double baseLength, double height, string shape)
    {
        if (shape.ToLower() == "triangle")
        {
            return 0.5 * baseLength * height;
        }
        return 0;
    }
}

// 测试代码
AreaCalculator area = new AreaCalculator();
Console.WriteLine($"正方形面积：{area.CalculateArea(5)}");              // 25
Console.WriteLine($"长方形面积：{area.CalculateArea(4, 6)}");           // 24
Console.WriteLine($"圆形面积：{area.CalculateArea(3, true)}");          // 28.27
Console.WriteLine($"三角形面积：{area.CalculateArea(4, 5, "triangle")}"); // 10
```

## 示例9：打印数组 - 多种打印方式
```csharp
public class ArrayPrinter
{
    // 打印整数数组
    public void PrintArray(int[] array)
    {
        Console.Write("整数数组：");
        foreach (int item in array)
        {
            Console.Write(item + " ");
        }
        Console.WriteLine();
    }
    
    // 打印字符串数组
    public void PrintArray(string[] array)
    {
        Console.Write("字符串数组：");
        foreach (string item in array)
        {
            Console.Write(item + " ");
        }
        Console.WriteLine();
    }
    
    // 打印二维数组
    public void PrintArray(int[,] array)
    {
        Console.WriteLine("二维数组：");
        for (int i = 0; i < array.GetLength(0); i++)
        {
            for (int j = 0; j < array.GetLength(1); j++)
            {
                Console.Write(array[i, j] + "\t");
            }
            Console.WriteLine();
        }
    }
    
    // 带标题的打印
    public void PrintArray(string title, int[] array)
    {
        Console.Write(title + "：");
        foreach (int item in array)
        {
            Console.Write(item + " ");
        }
        Console.WriteLine();
    }
}

// 测试代码
ArrayPrinter printer = new ArrayPrinter();
printer.PrintArray(new int[] {1, 2, 3, 4});
printer.PrintArray(new string[] {"苹果", "香蕉", "橙子"});
printer.PrintArray(new int[,] {{1, 2}, {3, 4}});
printer.PrintArray("成绩表", new int[] {85, 92, 78});
```

## 示例10：时间格式化 - 可选参数效果
```csharp
public class TimeFormatter
{
    // 默认格式
    public string FormatTime(DateTime time)
    {
        return time.ToString("HH:mm:ss");
    }
    
    // 指定是否显示日期
    public string FormatTime(DateTime time, bool showDate)
    {
        if (showDate)
            return time.ToString("yyyy-MM-dd HH:mm:ss");
        else
            return time.ToString("HH:mm:ss");
    }
    
    // 指定自定义格式
    public string FormatTime(DateTime time, string format)
    {
        return time.ToString(format);
    }
    
    // 指定时区
    public string FormatTime(DateTime time, int timeZoneOffset)
    {
        DateTime utcTime = time.ToUniversalTime();
        DateTime localTime = utcTime.AddHours(timeZoneOffset);
        return localTime.ToString("HH:mm:ss") + $" (UTC{timeZoneOffset:+#;-#;+0})";
    }
}

// 测试代码
TimeFormatter tf = new TimeFormatter();
DateTime now = DateTime.Now;
Console.WriteLine(tf.FormatTime(now));                 // 14:30:25
Console.WriteLine(tf.FormatTime(now, true));           // 2024-01-15 14:30:25
Console.WriteLine(tf.FormatTime(now, "yyyy年MM月dd日")); // 2024年01月15日
Console.WriteLine(tf.FormatTime(now, 8));              // 22:30:25 (UTC+8)
```

## 示例11：成绩评定 - 实际应用场景
```csharp
public class GradeEvaluator
{
    // 根据分数评定等级
    public string GetGrade(int score)
    {
        if (score >= 90) return "优秀";
        if (score >= 80) return "良好";
        if (score >= 70) return "中等";
        if (score >= 60) return "及格";
        return "不及格";
    }
    
    // 根据分数和科目评定
    public string GetGrade(int score, string subject)
    {
        string grade = GetGrade(score);
        return $"{subject}成绩：{grade}";
    }
    
    // 根据多个分数评定平均等级
    public string GetGrade(int[] scores)
    {
        if (scores.Length == 0) return "无成绩";
        
        int sum = 0;
        foreach (int score in scores)
        {
            sum += score;
        }
        int average = sum / scores.Length;
        return GetGrade(average);
    }
    
    // 根据分数和是否考虑平时表现
    public string GetGrade(int score, bool considerPerformance)
    {
        if (!considerPerformance)
            return GetGrade(score);
        
        // 考虑平时表现，适当加分
        int adjustedScore = score + 5;
        if (adjustedScore > 100) adjustedScore = 100;
        
        string grade = GetGrade(adjustedScore);
        return $"{grade} (考虑平时表现后)";
    }
    
    // 带评语的成绩
    public string GetGrade(int score, string studentName, out string comment)
    {
        string grade = GetGrade(score);
        
        if (score >= 90)
            comment = "继续保持！";
        else if (score >= 80)
            comment = "不错，还可以更好！";
        else if (score >= 60)
            comment = "及格了，要继续努力！";
        else
            comment = "需要加强学习！";
            
        return $"{studentName}的成绩：{grade}";
    }
}

// 测试代码
GradeEvaluator evaluator = new GradeEvaluator();
Console.WriteLine(evaluator.GetGrade(85));                // 良好
Console.WriteLine(evaluator.GetGrade(75, "数学"));        // 数学成绩：中等
Console.WriteLine(evaluator.GetGrade(new int[] {80,90,70})); // 良好
Console.WriteLine(evaluator.GetGrade(82, true));          // 良好 (考虑平时表现后)

string comment;
string result = evaluator.GetGrade(65, "李华", out comment);
Console.WriteLine(result);    // 李华的成绩：及格
Console.WriteLine("评语：" + comment); // 评语：及格了，要继续努力！
```

## 一、方法重载是什么？

方法重载是指：在同一个类中，可以有多个以有多个同名不同参的方法定义。

注：编译器会根据你调用时传入的参数，自动选择合适的方法。

## 二、方法重载的规则

- 方法名必须相同
- 参数的 个数 或 类型 必须不同。
- 返回值不同不算重载（必须参数不同才行）。

## 三、方法重载的好处

- 让代码更简洁。
- 逻辑更清晰。
- 同一个功能，可以有多种调用方式。

## 四、示例：Add()

写一个Add()方法，可以计算整数与浮点数，Add(int, int)`与Add(double, double)，同名不同参数

```csharp
class Calculator
{
    // 加法：两个整数
    public int Add(int a, int b)
    {
        return a + b;
    }

    // 加法：三个整数
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    // 加法：两个小数
    public double Add(double a, double b)
    {
        return a + b;
    }
}

class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();

        Console.WriteLine(calc.Add(2, 3));       // 输出 5
        Console.WriteLine(calc.Add(2, 3, 4));   // 输出 9
        Console.WriteLine(calc.Add(2.5, 3.5));  // 输出 6.0
    }
}
```

## 五、示例：Print()方法

要求：自己写一个 `Print` 方法，能打印整数、字符串、浮点数，

```csharp

```

## 六、示例：反例

参数一样但返回类型不同，不算重载。

```csharp
int Add(int a, int b) { return a + b; }
double Add(int a, int b) { return a + b; }  // ❌ 会报错
```

------

## 七、总结

- 重载 = 同名不同参。
- 参数可以不同：数量不同、类型不同、顺序不同。
- 常用在：打印、数学计算、格式化输出等场景。

------

## 八、练习

### 题目1：写一个 `SayHello()` 方法

重载为：

- 无参数 → 输出“Hello!”
- 有一个 `string name` 参数 → 输出“Hello, name!”

### 题目2：写一个 `Max()` 方法

重载为：

- 传入两个整数，返回最大值
- 传入两个小数，返回最大值
- 传入三个整数，返回最大值

### 题目3：写一个`Print()`方法

*要求：写一个 `Print` 方法，支持打印整数、字符串和小数。

- 定义三个重载方法：
  - `Print(int number)`
  - `Print(string text)`
  - `Print(double number)`
- 在 `Main` 方法里分别调用这三种方法。

```csharp
Print(100);
Print("Hello C#");
Print(3.14);
```

### 题目4：写一个`Area()`方法

要求：能计算不同图形的面积。

- `Area(int side)` —— 计算正方形面积
- `Area(int length, int width)` —— 计算矩形面积
- `Area(double radius)` —— 计算圆的面积（πr²，用 `3.14` 替代 π）

```csharp
Console.WriteLine(Area(5));        // 正方形面积
Console.WriteLine(Area(5, 10));    // 矩形面积
Console.WriteLine(Area(2.5));      // 圆的面积
```

------

### 题目5：写一个 `Add` 方法\

要求：支持两数相加、三数相加、以及两个小数相加。

- `Add(int a, int b)`
- `Add(int a, int b, int c)`
- `Add(double a, double b)`

尝试调用：

```csharp
Console.WriteLine(Add(2, 3));      
Console.WriteLine(Add(1, 2, 3));  
Console.WriteLine(Add(2.5, 3.5)); 
```

参考答案：

```csharp
class Calculator
{
    // 加法（两个整数）
    public int Add(int a, int b)
    {
        return a + b;
    }

    // 加法（两个小数）
    public double Add(double a, double b)
    {
        return a + b;
    }

    // 加法（三个整数）
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}
```

### 题目6： 写一个 `Greet` 方法，

要求：

- `Greet()` —— 输出 “你好！”
- `Greet(string name)` —— 输出 “你好，某某！”
- `Greet(string name, int age)` —— 输出 “你好，某某，你今年X岁了！”

👉 提示： 调用：

```csharp
Greet();
Greet("小明");
Greet("小红", 18);
```

------

### 题目7：写一个 `Count` 方法，

要求： 能统计不同类型数组的长度。

- `Count(int[] numbers)` —— 输出整数数组的元素个数
- `Count(string[] words)` —— 输出字符串数组的元素个数

👉 提示：

```csharp
int[] nums = {1, 2, 3, 4};
string[] names = {"Tom", "Jerry"};

Console.WriteLine(Count(nums));    // 输出 4
Console.WriteLine(Count(names));   // 输出 2
```

------

练习总结

1. 方法重载的基本概念（同名不同参）。
2. 如何根据 参数个数、参数类型 来区分重载方法。
3. 在真实场景里，重载方法能让代码更直观。