---
noteId: "f3dec4f05ee511f0a138bb2f2278db69"
tags: []

---

当然可以！以下是对 **C# 中的 `struct`（结构体）数据类型** 的全面详解，适合初学者和进阶者系统掌握。

---

# ✅ C# 中的 `struct` 数据类型详解

---

## 📌 一、什么是 `struct`？

`struct`（结构体）是 C# 中一种 **值类型（Value Type）**，用于定义轻量级的数据对象。与类 (`class`) 不同，结构体通常用于表示小型、简单的实体，如坐标点、颜色、矩形等。

---

## 🧩 二、`struct` 的基本语法

```csharp
public struct Point
{
    public int X;
    public int Y;

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void Display()
    {
        Console.WriteLine($"({X}, {Y})");
    }
}
```

---

## 🧠 三、`struct` 的核心特性

| 特性             | 说明                                                |
| -------------- | ------------------------------------------------- |
| **值类型**        | 存储在栈上，复制时会产生副本                                    |
| **不能继承类**      | 结构体不能继承自类，也不能被继承（但可实现接口）                          |
| **可有字段/方法/属性** | 但不能有析构函数或显式无参构造函数（除非使用 C# 10+）                    |
| **可实现接口**      | 支持接口多态                                            |
| **默认构造函数**     | 自动初始化所有字段为默认值（如 `0`、`null`、`false`）               |
| **不能被显式继承**    | 结构体不能使用 `: baseStruct`，只能继承 `System.ValueType` 隐式 |

---

## 📌 四、struct vs class 对比

| 比较项  | `struct`（结构体）          | `class`（类）      |
| ---- | ---------------------- | --------------- |
| 类型   | 值类型                    | 引用类型            |
| 存储位置 | 栈                      | 堆               |
| 默认继承 | `System.ValueType`     | `System.Object` |
| 可继承性 | ❌ 不可继承                 | ✅ 可继承           |
| 构造函数 | ❌ 不能定义无参构造函数（C# 10+除外） | ✅ 可以定义          |
| 用途建议 | 小数据结构（如点、坐标、颜色）        | 大对象、业务模型等       |

---

## ✅ 五、创建与使用结构体示例

### 示例 1：基本结构体用法

```csharp
public struct Student
{
    public string Name;
    public int Age;

    public Student(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public void Introduce()
    {
        Console.WriteLine($"我是 {Name}，今年 {Age} 岁。");
    }
}

class Program
{
    static void Main()
    {
        Student s = new Student("小明", 18);
        s.Introduce();  // 输出：我是 小明，今年 18 岁。
    }
}
```

---

### 示例 2：结构体的值类型行为（复制副本）

```csharp
Point p1 = new Point(1, 2);
Point p2 = p1;
p2.X = 100;

Console.WriteLine(p1.X);  // 输出：1（未被 p2 更改）
```

📌 **说明：** `struct` 是值类型，赋值会产生副本，彼此独立。

---

## 🔎 六、结构体中的限制

1. ❌ 不能显式声明**无参构造函数**（C# 10 前）
2. ❌ 不能继承类或其他结构体
3. ❌ 不能定义析构函数
4. ⚠️ 所有字段必须在构造函数中被赋值
5. ✔️ 可以包含属性、字段、方法、事件、接口实现

---

## 🎯 七、结构体适用场景

| 场景          | 示例                           |
| ----------- | ---------------------------- |
| 坐标类         | `Point(x, y)`                |
| 数据包装        | `Size`, `Color`, `Rectangle` |
| 小型数据记录      | `ProductCode`, `StudentInfo` |
| 性能要求较高的临时结构 | 避免堆分配，提高性能                   |

---

## 🧮 八、结构体与接口结合使用

```csharp
public interface IShape
{
    double GetArea();
}

public struct Square : IShape
{
    public double Side;

    public Square(double side)
    {
        Side = side;
    }

    public double GetArea() => Side * Side;
}
```

✅ 支持多态调用：

```csharp
IShape shape = new Square(5);
Console.WriteLine(shape.GetArea());  // 输出：25
```

---

## 🆕 九、C# 10 对结构体的新支持（了解）

从 **C# 10 起**，结构体允许显式无参构造函数（构造默认值）：

```csharp
public struct Person
{
    public string Name;

    public Person()
    {
        Name = "默认值";  // C# 10 才允许这样写
    }
}
```

---

## ✅ 十、结构体快速口诀（记忆法）

> 结构体是值类型，
> 不可继承可实现；
> 无参构造不允许（C# 10+ 例外），
> 小巧轻便不占地。
> 复制传值不共享，
> 适合短命轻数据！

---

## ✅ 是否需要练习题？

我可以为你接下来提供：

* ✍️ 10 道结构体基础编程题（含答案）
* 📄 结构体 vs 类总结图 + 表格
* 🧠 结构体的面试题型练习集

欢迎告诉我你需要哪一部分 ✅


以下是 **10 道 C# 结构体（`struct`）基础编程题（含参考答案）**，由浅入深，涵盖结构体的定义、构造函数、字段、方法、属性、值类型特性、接口实现等。

---

# ✅ C# 结构体基础编程题（含参考答案）

---

## 🧪 题目 1：定义一个简单的结构体 Point

**要求：**
定义一个结构体 `Point`，包含 `int X` 和 `int Y` 字段，并在 Main 方法中创建并打印点的位置。

```csharp
struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point p;
        p.X = 3;
        p.Y = 4;
        Console.WriteLine($"({p.X}, {p.Y})");  // 输出：(3, 4)
    }
}
```

---

## 🧪 题目 2：结构体带有构造函数

**要求：**
给结构体 `Rectangle` 添加一个构造函数，接收 `width` 和 `height`，并输出面积。

```csharp
struct Rectangle
{
    public int Width;
    public int Height;

    public Rectangle(int w, int h)
    {
        Width = w;
        Height = h;
    }

    public int GetArea() => Width * Height;
}

class Program
{
    static void Main()
    {
        Rectangle r = new Rectangle(5, 4);
        Console.WriteLine(r.GetArea());  // 输出：20
    }
}
```

---

## 🧪 题目 3：结构体中的方法

**要求：**
在结构体 `Student` 中添加 `ShowInfo()` 方法，输出学生姓名和年龄。

```csharp
struct Student
{
    public string Name;
    public int Age;

    public void ShowInfo()
    {
        Console.WriteLine($"姓名：{Name}, 年龄：{Age}");
    }
}

class Program
{
    static void Main()
    {
        Student s;
        s.Name = "张三";
        s.Age = 20;
        s.ShowInfo();  // 输出：姓名：张三, 年龄：20
    }
}
```

---

## 🧪 题目 4：结构体中的属性

**要求：**
在结构体 `Circle` 中定义 `Radius` 属性，添加 `Area` 只读属性（圆的面积），并计算结果。

```csharp
struct Circle
{
    public double Radius { get; set; }

    public double Area => Math.PI * Radius * Radius;
}

class Program
{
    static void Main()
    {
        Circle c = new Circle { Radius = 3 };
        Console.WriteLine(c.Area);  // 输出：28.2743...
    }
}
```

---

## 🧪 题目 5：结构体是值类型（拷贝）

**要求：**
创建结构体变量 `a`，赋值给 `b` 后修改 `b`，验证 `a` 不变。

```csharp
struct Score
{
    public int Math;
}

class Program
{
    static void Main()
    {
        Score a;
        a.Math = 90;

        Score b = a;
        b.Math = 70;

        Console.WriteLine(a.Math);  // 输出：90
        Console.WriteLine(b.Math);  // 输出：70
    }
}
```

---

## 🧪 题目 6：结构体实现接口

**要求：**
定义接口 `IMeasurable`，结构体 `Square` 实现 `GetArea()` 方法。

```csharp
interface IMeasurable
{
    double GetArea();
}

struct Square : IMeasurable
{
    public double Side;

    public double GetArea() => Side * Side;
}

class Program
{
    static void Main()
    {
        Square s = new Square { Side = 5 };
        Console.WriteLine(s.GetArea());  // 输出：25
    }
}
```

---

## 🧪 题目 7：结构体嵌套结构体

**要求：**
在结构体 `Rectangle` 中嵌套一个结构体 `Point`，分别表示左上角和右下角。

```csharp
struct Point
{
    public int X, Y;
}

struct Rectangle
{
    public Point TopLeft;
    public Point BottomRight;
}

class Program
{
    static void Main()
    {
        Rectangle r = new Rectangle
        {
            TopLeft = new Point { X = 0, Y = 0 },
            BottomRight = new Point { X = 4, Y = 3 }
        };

        Console.WriteLine($"长：{r.BottomRight.X - r.TopLeft.X}, 宽：{r.BottomRight.Y - r.TopLeft.Y}");
    }
}
```

---

## 🧪 题目 8：结构体数组

**要求：**
定义结构体 `Book`，包含 `Title` 和 `Price`，创建结构体数组并遍历输出。

```csharp
struct Book
{
    public string Title;
    public double Price;
}

class Program
{
    static void Main()
    {
        Book[] books = new Book[2];
        books[0].Title = "C# 入门";
        books[0].Price = 49.9;

        books[1].Title = "深入.NET";
        books[1].Price = 69.9;

        foreach (var b in books)
        {
            Console.WriteLine($"{b.Title} - ¥{b.Price}");
        }
    }
}
```

---

## 🧪 题目 9：使用结构体作为返回值

**要求：**
编写一个方法 `CreatePoint()` 返回一个结构体 `Point`，包含 X=10, Y=20。

```csharp
struct Point
{
    public int X, Y;
}

class Program
{
    static Point CreatePoint()
    {
        return new Point { X = 10, Y = 20 };
    }

    static void Main()
    {
        var p = CreatePoint();
        Console.WriteLine($"X: {p.X}, Y: {p.Y}");  // 输出：X: 10, Y: 20
    }
}
```

---

## 🧪 题目 10：结构体计算两点距离

**要求：**
结构体 `Point` 包含方法 `DistanceTo(Point other)`，计算两点距离。

```csharp
struct Point
{
    public double X, Y;

    public double DistanceTo(Point other)
    {
        double dx = X - other.X;
        double dy = Y - other.Y;
        return Math.Sqrt(dx * dx + dy * dy);
    }
}

class Program
{
    static void Main()
    {
        Point p1 = new Point { X = 0, Y = 0 };
        Point p2 = new Point { X = 3, Y = 4 };
        Console.WriteLine(p1.DistanceTo(p2));  // 输出：5
    }
}
```

---

## ✅ 总结：本套题覆盖知识点

| 题号  | 重点               |
| --- | ---------------- |
| 1～2 | 结构体定义与构造函数       |
| 3～4 | 方法与属性            |
| 5   | 值类型特性（拷贝）        |
| 6   | 接口实现             |
| 7   | 嵌套结构体            |
| 8   | 结构体数组            |
| 9   | 结构体作为方法返回值       |
| 10  | 实际应用计算函数（欧几里得距离） |

---

如果你希望我将这套题目打包为：

* 📄 Word / PDF 格式可打印自测版
* ✍️ 提供空白题版（题目 + 填空）
* 📘 出一套结构体进阶练习（含 readonly、ref struct、C# 10 特性）

请告诉我，我可以立即为你生成 ✅
