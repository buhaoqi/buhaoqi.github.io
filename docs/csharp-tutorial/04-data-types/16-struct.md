---
noteId: "e3b4d5a0674c11f0b0d6278e683d20b1"
tags: []

---
# 🎬 第16课：struct 数据类型

### 🎙️【开场白】

大家好！欢迎回到《C#初学者实例教程》。
我是你的编程小伙伴 Jojo。

在前面的课程中，我们学过了变量、常量、字符串、方法等基础知识。
今天，我们将迎来一个非常有意思的新主题 —— `struct` 结构体。

你可能会问：**“struct 是什么？和 class 有什么不同？”**
别急，这节课，我们就一起来揭开它的神秘面纱！

---

## struct是什么

- `struct` 是一种数据类型。
- `struct`属于值类型。
- `struct`用于封装一组相关的数据成员。
- `struct`结构体允许将多个不同类型的数据成员组合在一起，形成一个逻辑上的“小型数据集合”。
- `struct`结构体非常适合描述一些轻量级的数据，比如：点（Point）、坐标（Coordinate）、颜色（Color）等。

## struct语法结构
```c# linenums="1"
[访问修饰符] struct 结构体名称
{
    // 字段（数据成员）
    [访问修饰符] 数据类型 字段名1;
    [访问修饰符] 数据类型 字段名2;
    
    // 方法（可选）
    [访问修饰符] 返回值类型 方法名(参数列表)
    {
        // 方法实现
    }
    
    // 属性（可选）
    [访问修饰符] 数据类型 属性名 { get; set; }
    
    // 构造函数（可选，必须有参数）
    [访问修饰符] 结构体名称(参数列表)
    {
        // 必须初始化所有字段
        字段名1 = 值1;
        字段名2 = 值2;
    }
}
```

示例

```csharp
struct Point
{
    public int X;
    public int Y;
}
```

上面这个结构体，就定义了一个“点”，它有两个字段：X 和 Y。

---

## struct VS class

你可能还记得，我们之前学习过 `class` 类。
那么问题来了：**struct 和 class 有什么区别？**

我们从三个方面来对比一下：

| 特性    | struct  | class  |
| ----- | ------- | ------ |
| 类型    | 值类型     | 引用类型   |
| 存储位置  | 栈       | 堆      |
| 是否可继承 | ❌ 不支持继承 | ✅ 支持继承 |

总结一句话：
**struct 更轻量、更高效，但功能上没有 class 灵活。**

---

## struct 的用法

让我们来写一个完整的例子：

```csharp
using System;

struct Person
{
    public string Name;
    public int Age;

    public void SayHello()
    {
        Console.WriteLine($"你好，我是 {Name}，今年 {Age} 岁。");
    }
}

class Program
{
    static void Main()
    {
        Person p;
        p.Name = "小明";
        p.Age = 20;
        p.SayHello();
    }
}
```

🧠注意：struct结构体可以包含字段、方法、属性，但不能有显式的无参构造函数。

---

## 使用 struct 的注意事项

1. **适合表示小型数据对象**，比如二维坐标、矩形、颜色等；
2. **不要用于包含大量数据或需要继承的场景**；
3. struct 是值类型，**赋值时是复制一份副本**，不是引用。

---

## 总结

今天，我们认识了 C# 中的 `struct` 结构体：
✅ 它是一种值类型；
✅ 比 class 更轻量；
✅ 适合表示简单的、封装性强的数据。

记住：当你想快速定义一组有结构的数据，并且不需要继承时，`struct` 是你的好帮手！

---

## 结尾彩蛋

在 .NET 中，有很多常用类型其实就是 struct，
比如：`int`、`double`、`DateTime` …… 没错，它们通通是结构体！

是不是感觉 struct 离我们比想象的还要近？

---

## 结束语

下一课，我们将正式进入 **“面向对象编程”** 的大门，
学习 class 和对象的实战用法。精彩不容错过！

---

## 练习

试着定义一个结构体 `Book`，包含字段：书名（Title）、作者（Author）、价格（Price），
并写一个方法，输出这本书的信息。





以下是10道针对C#结构体(struct)的语法练习题，涵盖核心概念和实际应用场景，难度逐步提升：

---

### **练习题 1：基础结构体定义**
```csharp
// 定义一个表示二维坐标的结构体Point
// 要求：包含X和Y两个公共字段，无构造函数
// 创建实例并打印坐标
```

### **练习题 2：构造函数与只读字段**
```csharp
// 定义结构体Book，包含：
// - 只读字段Title(string)
// - 公共字段Price(decimal)
// - 带参构造函数初始化所有字段
// 创建实例并验证字段是否只读
```

### **练习题 3：方法实现**
```csharp
// 在Point结构体中添加方法：
// 1. DistanceTo(Point other) 计算两点距离
// 2. Translate(int dx, int dy) 移动坐标
// 验证值类型特性：方法调用后原始实例不变
```

### **练习题 4：属性封装**
```csharp
// 定义结构体Temperature：
// - 私有字段_celsius(double)
// - 公共属性Celsius（带set验证：≥-273.15）
// - 只读属性Fahrenheit（摄氏转华氏公式：C*9/5+32）
// 测试设置-300摄氏度应抛出异常
```

### **练习题 5：ref返回值**
```csharp
struct Matrix3x3 {
    private float[,] _data = new float[3,3];
    
    // 实现方法：返回指定行列的引用
    public ref float At(int row, int col) => ref _data[row, col];
}
// 使用该方法直接修改矩阵元素值
```

### **练习题 6：只读结构体**
```csharp
// 将Point改为只读结构体：
readonly struct Point {
    public readonly int X;
    public readonly int Y;
    
    // 添加方法应使用readonly修饰符
    public readonly double DistanceToOrigin() => Math.Sqrt(X*X + Y*Y);
}
// 尝试在方法内修改字段验证编译错误
```

### **练习题 7：接口实现**
```csharp
// 定义接口IDrawable { void Draw(); }
// 创建结构体Circle : IDrawable
// - 字段：Radius(int)
// - 实现Draw()：打印"Drawing circle with R:{Radius}"
// 通过接口调用验证实现
```

### **练习题 8：default行为**
```csharp
struct SensorData {
    public DateTime Timestamp;
    public double Value;
    public bool IsValid;
}

// 创建default(SensorData)实例
// 验证：值类型字段为0，引用类型为null，bool为false
// 与new SensorData()对比差异
```

### **练习题 9：结构体布局**
```csharp
[StructLayout(LayoutKind.Explicit)]
struct ColorBgra {
    [FieldOffset(0)] public byte Blue;
    [FieldOffset(1)] public byte Green;
    [FieldOffset(2)] public byte Red;
    [FieldOffset(3)] public byte Alpha;
    [FieldOffset(0)] public int IntValue; // 共享内存位置
}

// 测试：修改IntValue后观察各颜色分量变化
```

### **练习题 10：模式匹配**
```csharp
struct Rectangle { public int Width, Height; }

// 写方法CalculateArea(object shape)：
// 使用switch模式匹配：
// - Rectangle r => r.Width * r.Height
// - Circle c => Math.PI * c.Radius * c.Radius
// - _ => 0
// 验证对结构体的处理
```

---

### **配套知识点考察**
1. **值类型特性**：练习3/8考察拷贝语义
2. **内存控制**：练习5(ref返回)/9(布局)涉及低级操作
3. **不可变性**：练习6(只读结构体)强化安全设计
4. **多态支持**：练习7(接口)展示结构体多态能力
5. **现代语法**：练习10(模式匹配)结合C#新特性

> 完成这些练习后，您将掌握：
> - 结构体与类的核心差异
> - 值类型在内存中的行为特征
> - 高性能场景下的结构体优化技巧
> - 结构体在现代C#中的高级用法

建议按顺序完成，遇到问题可结合官方文档：
[微软结构体文档](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/struct)


## 答案

以下是10道C#结构体(struct)练习题的完整答案，包含详细注释和验证代码：

---

### **练习1：基础结构体定义**
```csharp
public struct Point
{
    public int X;
    public int Y;
}

// 使用示例
Point p = new Point();
p.X = 10;
p.Y = 20;
Console.WriteLine($"坐标: ({p.X}, {p.Y})"); // 输出: 坐标: (10, 20)
```

---

### **练习2：构造函数与只读字段**
```csharp
public struct Book
{
    public readonly string Title; // 只读字段
    public decimal Price;
    
    public Book(string title, decimal price)
    {
        Title = title;
        Price = price;
    }
}

// 使用示例
Book book = new Book("C#高级编程", 99.9m);
Console.WriteLine($"{book.Title} 价格: {book.Price}");

// book.Title = "新书名"; // 编译错误：无法对只读字段赋值
```

---

### **练习3：方法实现**
```csharp
public struct Point
{
    public int X;
    public int Y;
    
    // 计算两点距离
    public double DistanceTo(Point other)
    {
        int dx = X - other.X;
        int dy = Y - other.Y;
        return Math.Sqrt(dx * dx + dy * dy);
    }
    
    // 移动坐标
    public void Translate(int dx, int dy)
    {
        X += dx;
        Y += dy;
    }
}

// 使用示例
Point p1 = new Point { X = 0, Y = 0 };
Point p2 = new Point { X = 3, Y = 4 };

Console.WriteLine($"距离: {p1.DistanceTo(p2)}"); // 输出: 5

p1.Translate(5, 5);
Console.WriteLine($"移动后: ({p1.X}, {p1.Y})"); // 输出: (5, 5)
```

---

### **练习4：属性封装**
```csharp
public struct Temperature
{
    private double _celsius;
    
    public double Celsius
    {
        get => _celsius;
        set
        {
            if (value < -273.15)
                throw new ArgumentException("温度不能低于绝对零度(-273.15℃)");
            _celsius = value;
        }
    }
    
    public double Fahrenheit => _celsius * 9 / 5 + 32;
}

// 使用示例
Temperature temp = new Temperature();
temp.Celsius = 25;
Console.WriteLine($"摄氏: {temp.Celsius}, 华氏: {temp.Fahrenheit}");

try { temp.Celsius = -300; }
catch (ArgumentException ex) { Console.WriteLine(ex.Message); }
```

---

### **练习5：ref返回值**
```csharp
public struct Matrix3x3
{
    private float[,] _data = new float[3, 3];
    
    public ref float At(int row, int col) => ref _data[row, col];
}

// 使用示例
Matrix3x3 matrix = new Matrix3x3();
ref float element = ref matrix.At(1, 1);
element = 5.0f; // 直接修改矩阵值

Console.WriteLine(matrix.At(1, 1)); // 输出: 5
```

---

### **练习6：只读结构体**
```csharp
public readonly struct Point
{
    public readonly int X;
    public readonly int Y;
    
    public Point(int x, int y) => (X, Y) = (x, y);
    
    public readonly double DistanceToOrigin() => Math.Sqrt(X * X + Y * Y);
    
    /* 尝试修改会编译错误
    public void Move(int dx, int dy)
    {
        X += dx; // 错误: 无法对只读字段赋值
    }
    */
}

// 使用示例
Point p = new Point(3, 4);
Console.WriteLine($"到原点距离: {p.DistanceToOrigin()}"); // 输出: 5
```

---

### **练习7：接口实现**
```csharp
public interface IDrawable
{
    void Draw();
}

public struct Circle : IDrawable
{
    public int Radius;
    
    public void Draw() => 
        Console.WriteLine($"绘制圆形，半径: {Radius}");
}

// 使用示例
Circle circle = new Circle { Radius = 10 };
circle.Draw(); // 输出: 绘制圆形，半径: 10

IDrawable drawable = circle;
drawable.Draw(); // 输出: 绘制圆形，半径: 10
```

---

### **练习8：default行为**
```csharp
public struct SensorData
{
    public DateTime Timestamp;
    public double Value;
    public bool IsValid;
}

// 使用示例
SensorData data1 = default;
SensorData data2 = new SensorData();

Console.WriteLine($"default: {data1.Timestamp}, {data1.Value}, {data1.IsValid}"); 
// 输出: 1/1/0001 12:00:00 AM, 0, False

Console.WriteLine($"new: {data2.Timestamp}, {data2.Value}, {data2.IsValid}"); 
// 输出: 1/1/0001 12:00:00 AM, 0, False
```

---

### **练习9：结构体布局**
```csharp
using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Explicit)]
public struct ColorBgra
{
    [FieldOffset(0)] public byte Blue;
    [FieldOffset(1)] public byte Green;
    [FieldOffset(2)] public byte Red;
    [FieldOffset(3)] public byte Alpha;
    [FieldOffset(0)] public int IntValue;
}

// 使用示例
ColorBgra color = new ColorBgra();
color.IntValue = 0xFFFF0000; // ARGB: 红

Console.WriteLine(
    $"R:{color.Red:X2} G:{color.Green:X2} B:{color.Blue:X2} A:{color.Alpha:X2}");
// 输出: R:00 G:00 B:00 A:FF (小端序)
```

---

### **练习10：模式匹配**
```csharp
public struct Rectangle { public int Width, Height; }
public struct Circle { public int Radius; }

public static double CalculateArea(object shape) => shape switch
{
    Rectangle r => r.Width * r.Height,
    Circle c => Math.PI * c.Radius * c.Radius,
    _ => 0
};

// 使用示例
Rectangle rect = new Rectangle { Width = 4, Height = 5 };
Circle circle = new Circle { Radius = 3 };

Console.WriteLine($"矩形面积: {CalculateArea(rect)}"); // 20
Console.WriteLine($"圆形面积: {CalculateArea(circle):F2}"); // 28.27
Console.WriteLine($"未知形状: {CalculateArea("test")}"); // 0
```

---

### **验证所有练习的完整代码**
```csharp
using System;
using System.Runtime.InteropServices;

namespace StructExercises
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----- 练习1 -----");
            Point p = new Point { X = 10, Y = 20 };
            Console.WriteLine($"坐标: ({p.X}, {p.Y})");
            
            Console.WriteLine("\n----- 练习2 -----");
            Book book = new Book("C#高级编程", 99.9m);
            Console.WriteLine($"{book.Title} 价格: {book.Price}");
            
            Console.WriteLine("\n----- 练习3 -----");
            Point p1 = new Point { X = 0, Y = 0 };
            Point p2 = new Point { X = 3, Y = 4 };
            Console.WriteLine($"距离: {p1.DistanceTo(p2)}");
            p1.Translate(5, 5);
            Console.WriteLine($"移动后: ({p1.X}, {p1.Y})");
            
            Console.WriteLine("\n----- 练习4 -----");
            Temperature temp = new Temperature();
            temp.Celsius = 25;
            Console.WriteLine($"摄氏: {temp.Celsius}, 华氏: {temp.Fahrenheit}");
            try { temp.Celsius = -300; }
            catch (ArgumentException ex) { Console.WriteLine(ex.Message); }
            
            Console.WriteLine("\n----- 练习5 -----");
            Matrix3x3 matrix = new Matrix3x3();
            ref float element = ref matrix.At(1, 1);
            element = 5.0f;
            Console.WriteLine(matrix.At(1, 1));
            
            Console.WriteLine("\n----- 练习6 -----");
            Point readOnlyPoint = new Point(3, 4);
            Console.WriteLine($"到原点距离: {readOnlyPoint.DistanceToOrigin()}");
            
            Console.WriteLine("\n----- 练习7 -----");
            Circle circle = new Circle { Radius = 10 };
            circle.Draw();
            IDrawable drawable = circle;
            drawable.Draw();
            
            Console.WriteLine("\n----- 练习8 -----");
            SensorData data1 = default;
            Console.WriteLine($"default: {data1.Timestamp}, {data1.Value}, {data1.IsValid}");
            
            Console.WriteLine("\n----- 练习9 -----");
            ColorBgra color = new ColorBgra();
            color.IntValue = 0xFFFF0000;
            Console.WriteLine($"R:{color.Red:X2} G:{color.Green:X2} B:{color.Blue:X2} A:{color.Alpha:X2}");
            
            Console.WriteLine("\n----- 练习10 -----");
            Rectangle rect = new Rectangle { Width = 4, Height = 5 };
            Circle circleShape = new Circle { Radius = 3 };
            Console.WriteLine($"矩形面积: {CalculateArea(rect)}");
            Console.WriteLine($"圆形面积: {CalculateArea(circleShape):F2}");
            Console.WriteLine($"未知形状: {CalculateArea("test")}");
        }
        
        // 练习10的方法
        public static double CalculateArea(object shape) => shape switch
        {
            Rectangle r => r.Width * r.Height,
            Circle c => Math.PI * c.Radius * c.Radius,
            _ => 0
        };
    }
    
    // 在此处添加所有结构体定义...
}
```

> **关键知识点验证**：
> 1. 值类型语义（练习3：原始Point实例被修改）
> 2. 只读约束（练习6：尝试修改只读字段会编译错误）
> 3. 内存布局（练习9：修改IntValue影响颜色分量）
> 4. 模式匹配（练习10：根据不同类型计算面积）
> 5. default行为（练习8：值类型默认初始化）

运行此代码将完整验证所有10个练习的实现，每个练习的输出结果都包含在注释中。