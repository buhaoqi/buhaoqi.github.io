---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 方法的重载  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 方法的重载  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---

**方法重载（Method Overloading）是 C# 面向对象编程中的一个核心概念。简单来说，它允许你在同一个类中定义多个同名的方法**，只要它们的“参数列表”不同即可。

你可以把它想象成餐厅的“点餐服务”：同样是“点餐”这个动作，你可以只告诉服务员菜名（字符串），也可以告诉他菜名和数量（字符串 + 整数）。

---

### 1. 判定重载的“金标准”

要实现重载，编译器必须能通过参数区分出你到底想调用哪一个。这被称为**方法签名（Method Signature）**。

**必须改变（满足其一即可）：**

* 参数的**类型**不同（如 `int` 变 `string`）。
* 参数的**个数**不同（如 1 个参数变 2 个参数）。
* 参数的**顺序**不同（前提是类型不同，如 `int, string` 变为 `string, int`）。

**以下情况不算重载（会报错）：**

* 仅**返回类型**不同（编译器不知道你接不接返回值，所以无法区分）。
* 仅**参数名称**不同（变量名只是代号，不改变签名）。

---

### 2. 基础用法示例

观察下面这个计算面积的例子，它们都叫 `GetArea`：

```csharp
public class Calculator
{
    // 1. 计算圆形的面积（一个参数）
    public double GetArea(double radius)
    {
        return 3.14 * radius * radius;
    }

    // 2. 计算矩形的面积（两个参数）
    public double GetArea(double width, double height)
    {
        return width * height;
    }

    // 3. 计算特定材质矩形的面积（类型不同）
    public void GetArea(string shapeName, double size)
    {
        Console.WriteLine($"{shapeName} 的大小是 {size}");
    }
}

```

---

### 3. 初学者如何快速掌握？

如果你刚开始接触，建议遵循这三个步骤：

#### 第一步：理解“意图一致性”

不要为了省事把风马牛不相及的功能重载在一起。

* **好的重载：** `Print(int i)` 和 `Print(string s)` —— 都是为了打印数据。
* **坏的重载：** `Save(int age)` 和 `Save(string fileName)` —— 一个存年龄，一个存文件，逻辑完全不同，容易让维护者崩溃。

#### 第二步：利用 IDE 的“智能提示”

在 Visual Studio 中调用重载方法时，当你输入括号 `(` 后，你会看到一个上下箭头（如 **1 of 3**）。

* 这是学习重载最直观的方式。它在告诉你：这个动作有 3 种不同的执行方式。

#### 第三步：结合“可选参数”进行对比

初学者常把“重载”和“可选参数”搞混。

* **重载：** 显式定义多个方法。
* **可选参数：** `void Log(string msg, bool showTime = true)`。

> **心得：** 如果逻辑差异很大，用重载；如果只是多一两个配置项，用可选参数。

---

### 4. 常见误区提醒

> **“我改了返回值类型，为什么报错？”**
> 假设你有：
> `int Add(int a, int b)`
> `void Add(int a, int b)`
> 当你写 `Add(1, 2);` 时，编译器根本不知道你想要 `int` 还是 `void`，所以这**不构成重载**。

---

**想试试实战吗？**
你可以尝试写一个名为 `Display` 的方法，让它分别能接收一个 `int` 数组、一个 `string`、以及一个 `double`。如果你写出来了，就说明你已经掌握了重载的精髓！

需要我为你展示这个练习的代码参考吗？


## 一、方法重载的典型例子

`Console.WriteLine()` 本身就是方法重载的典型例子：

```csharp
Console.WriteLine("Hello");   // 输出字符串
Console.WriteLine(100);       // 输出整数
Console.WriteLine(3.14);      // 输出小数
```

虽然方法名相同，但参数不同，所以能打印不同类型的数据。

## 二、方法重载是什么？

方法重载是指：在同一个类中，可以有多个以有多个同名不同参的方法定义。

注：编译器会根据你调用时传入的参数，自动选择合适的方法。

## 三、方法重载的规则

- 方法名必须相同
- 参数的 个数 或 类型 必须不同。
- 返回值不同不算重载（必须参数不同才行）。

## 四、方法重载的好处

- 让代码更简洁。
- 逻辑更清晰。
- 同一个功能，可以有多种调用方式。

## 五、示例：Add()

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

## 六、示例：Print()方法

要求：自己写一个 `Print` 方法，能打印整数、字符串、浮点数，

```csharp

```

## 七、示例：反例

参数一样但返回类型不同，不算重载。

```csharp
int Add(int a, int b) { return a + b; }
double Add(int a, int b) { return a + b; }  // ❌ 会报错
```

------

## 八、总结

- 重载 = 同名不同参。
- 参数可以不同：数量不同、类型不同、顺序不同。
- 常用在：打印、数学计算、格式化输出等场景。

------

## 练习

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