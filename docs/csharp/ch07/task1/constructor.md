---
# 这部分是关键！侧边栏显示名由这里决定
title: 子任务五 构造函数  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 子任务五 构造函数  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  5  # 侧边栏中排在第1位
---

## **一、构造函数是什么（Constructor）**

👉 **定义：**构造函数是一种**特殊的方法**，在**创建对象时自动执行**，用于初始化对象的状态。

也就是说，当你用 `new` 创建对象时，构造函数会自动被调用。

示例：

```csharp
class Cat
{
    public string Name;
    public int Age;

    // 构造函数
    public Cat()
    {
        Name = "未命名";
        Age = 1;
        Console.WriteLine("一只小猫诞生了！");
    }
}

class Program
{
    static void Main()
    {
        Cat cat1 = new Cat();  // 构造函数自动执行
        Console.WriteLine($"猫的名字：{cat1.Name}，年龄：{cat1.Age}");
    }
}
```

**输出：**

```
一只小猫诞生了！
猫的名字：未命名，年龄：1
```

💡 **解释：** 当执行 `new Cat()` 时，C# 自动调用 `Cat()` 这个构造函数，用于“初始化”对象。

## **二、构造函数的语法特点**

| **特点**     | **说明**                       |
| ------------ | ------------------------------ |
| 名字         | 必须与类名相同（区分大小写）   |
| 没有返回类型 | 不写 `void`、`int` 等          |
| 自动执行     | 用 `new` 创建对象时会自动调用  |
| 可重载       | 可以有多个构造函数（参数不同） |

## **三、构造函数的作用**

✅ 给对象的字段赋初始值 ✅ 执行一些初始化逻辑（比如显示欢迎信息、加载数据） ✅ 确保对象在使用前处于“正确状态”

## **四、带参数的构造函数**

如果希望创建对象时就指定初始值，可以使用“带参数”的构造函数。

```csharp
class Cat
{
    public string Name;
    public int Age;

    // 带参数的构造函数
    public Cat(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

class Program
{
    static void Main()
    {
        Cat cat1 = new Cat("小花", 2);
        Console.WriteLine($"猫的名字：{cat1.Name}，年龄：{cat1.Age}");
    }
}
```

**输出：**

```
猫的名字：小花，年龄：2
```

💡 **解释：** 这里 `Cat("小花", 2)` 调用了带参数的构造函数，把参数赋给对象的字段。

## **五、构造函数的重载**

你可以定义多个构造函数，只要参数不同就行。

```csharp
class Cat
{
    public string Name;
    public int Age;

    // 无参构造函数
    public Cat()
    {
        Name = "未知";
        Age = 1;
    }

    // 带参构造函数
    public Cat(string name)
    {
        Name = name;
        Age = 1;
    }

    // 另一个带参构造函数
    public Cat(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

class Program
{
    static void Main()
    {
        Cat cat1 = new Cat();
        Cat cat2 = new Cat("小白");
        Cat cat3 = new Cat("小黑", 3);

        Console.WriteLine($"{cat1.Name}, {cat2.Name}, {cat3.Name}");
    }
}
```

## **六、默认构造函数**

如果你没有写任何构造函数，C# 会**自动提供一个空的默认构造函数**：

```csharp
public ClassName() { }
```

但一旦你写了一个带参数的构造函数，**系统就不会再自动生成默认构造函数**。 如果你还需要无参构造函数，必须自己写一个。

## **七、this关键字调用另一个构造函数（进阶）**

有时候多个构造函数中有重复的初始化逻辑，可以用 `this()` 调用另一个构造函数：

```csharp
class Cat
{
    public string Name;
    public int Age;

    public Cat() : this("未命名", 1)  // 调用另一个构造函数
    {
        Console.WriteLine("默认构造函数执行");
    }

    public Cat(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
```

## **八、总结**

| **关键词** | **含义**                         |
| ---------- | -------------------------------- |
| 构造函数   | 创建对象时自动执行的方法         |
| 名称       | 与类名相同，没有返回值           |
| 作用       | 初始化对象                       |
| 类型       | 无参构造、带参构造               |
| 特点       | 可以重载、可用 `this()` 互相调用 |

------

## **练习题**

### **第1题：最简单的构造函数**

**要求：** 创建一个名为 `Student` 的类，定义一个无参数构造函数，在构造函数中输出 “一个学生对象被创建！”。

**目标：** 理解构造函数的基本定义与自动调用特性。

------

### **第2题：带参数的构造函数**

**要求：** 在 `Student` 类中添加 `name` 和 `age` 字段，通过构造函数为它们赋值，并在控制台输出它们的值。

**目标：** 掌握带参数构造函数的写法和使用方法。

------

### **第3题：多个对象实例**

**要求：** 使用上题的 `Student` 类，创建 3 个学生对象，分别传入不同的姓名和年龄，观察输出结果。

**目标：** 理解不同实例拥有各自独立的数据。

------

### **第4题：字段与属性结合**

**要求：** 将 `name` 和 `age` 改为属性（`Name`、`Age`），并在构造函数中通过属性赋值。

**目标：** 理解构造函数与属性的配合使用。

------

### **第5题：默认值构造函数**

**要求：** 创建一个 `Book` 类，包含 `Title` 和 `Price` 两个属性。 定义一个**无参构造函数**，为其设置默认值（例如：“未命名”, 0）。

**目标：** 掌握构造函数初始化默认值的技巧。

------

### **第6题：构造函数重载**

**要求：** 创建 `Car` 类：

- 一个无参构造函数（输出“默认构造函数被调用”）
- 一个带参数构造函数（设置车名和价格）

创建两个对象，分别调用这两个构造函数。

**目标：** 理解构造函数的**重载机制**。

------

### **第7题：在构造函数中调用方法**

**要求：** 创建一个 `Dog` 类，包含 `name` 字段。 构造函数中为 `name` 赋值并调用 `Bark()` 方法（输出“汪汪！”）。

**目标：** 理解构造函数中可执行初始化逻辑或方法调用。

------

### **第8题：this关键字的使用**

**要求：** 创建一个 `Person` 类，带参数构造函数中使用 `this` 关键字区分同名的字段与参数。

**目标：** 掌握 `this` 关键字在构造函数中的作用。

------

### **第9题：构造函数之间的相互调用**

**要求：** 创建一个 `Rectangle` 类，包含：

- 一个无参构造函数（默认长宽为 1）
- 一个带两个参数的构造函数 无参构造函数调用带参构造函数。

**目标：** 学习使用 `this(...)` 调用其他构造函数。

------

### **第10题：构造函数与对象初始化器对比**

**要求：** 创建 `Phone` 类，包含品牌和价格两个属性。 使用构造函数创建一个对象，再使用对象初始化器 `{}` 创建另一个对象，对比两者区别。

**目标：** 理解构造函数与对象初始化器在对象创建时的不同用法。

------

## **练习题答案**

### **第1题：最简单的构造函数**

```csharp
using System;

class Student
{
    public Student()
    {
        Console.WriteLine("一个学生对象被创建！");
    }
}

class Program
{
    static void Main()
    {
        Student stu1 = new Student();
    }
}
```

**运行结果：**

```
一个学生对象被创建！
```

**要点：** 构造函数名称与类名相同，无返回类型，在创建对象时自动执行。

------

### **第2题：带参数的构造函数**

```csharp
using System;

class Student
{
    public string name;
    public int age;

    public Student(string n, int a)
    {
        name = n;
        age = a;
        Console.WriteLine($"学生姓名：{name}，年龄：{age}");
    }
}

class Program
{
    static void Main()
    {
        Student stu1 = new Student("小明", 18);
    }
}
```

**运行结果：**

```
学生姓名：小明，年龄：18
```

**要点：** 带参数的构造函数用于在创建对象时初始化字段或属性。

------

### **第3题：多个对象实例**

```csharp
using System;

class Student
{
    public string name;
    public int age;

    public Student(string n, int a)
    {
        name = n;
        age = a;
        Console.WriteLine($"学生姓名：{name}，年龄：{age}");
    }
}

class Program
{
    static void Main()
    {
        Student s1 = new Student("小明", 18);
        Student s2 = new Student("小红", 19);
        Student s3 = new Student("小刚", 20);
    }
}
```

**运行结果：**

```
学生姓名：小明，年龄：18
学生姓名：小红，年龄：19
学生姓名：小刚，年龄：20
```

**要点：** 每个对象都有自己独立的数据空间，构造函数在每次创建对象时都会执行。

------

### **第4题：字段与属性结合**

```csharp
using System;

class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Student(string name, int age)
    {
        Name = name;
        Age = age;
        Console.WriteLine($"姓名：{Name}, 年龄：{Age}");
    }
}

class Program
{
    static void Main()
    {
        Student stu = new Student("小李", 17);
    }
}
```

**运行结果：**

```
姓名：小李, 年龄：17
```

**要点：** 构造函数可以通过属性来初始化对象的公开数据。

------

### **第5题：默认值构造函数**

```csharp
using System;

class Book
{
    public string Title { get; set; }
    public double Price { get; set; }

    public Book()
    {
        Title = "未命名";
        Price = 0;
    }
}

class Program
{
    static void Main()
    {
        Book b = new Book();
        Console.WriteLine($"书名：{b.Title}，价格：{b.Price}");
    }
}
```

**运行结果：**

```
书名：未命名，价格：0
```

**要点：** 无参构造函数可以为对象设置默认状态。

------

### **第6题：构造函数重载**

```csharp
using System;

class Car
{
    public string Name { get; set; }
    public double Price { get; set; }

    public Car()
    {
        Console.WriteLine("默认构造函数被调用");
    }

    public Car(string name, double price)
    {
        Name = name;
        Price = price;
        Console.WriteLine($"车型：{Name}，价格：{Price}");
    }
}

class Program
{
    static void Main()
    {
        Car c1 = new Car();
        Car c2 = new Car("特斯拉", 299999);
    }
}
```

**运行结果：**

```
默认构造函数被调用
车型：特斯拉，价格：299999
```

**要点：** 构造函数可以**重载**，根据参数不同选择不同版本。

------

### **第7题：构造函数中调用方法**

```csharp
using System;

class Dog
{
    public string name;

    public Dog(string n)
    {
        name = n;
        Bark();
    }

    void Bark()
    {
        Console.WriteLine($"{name}：汪汪！");
    }
}

class Program
{
    static void Main()
    {
        Dog d = new Dog("旺财");
    }
}
```

**运行结果：**

```
旺财：汪汪！
```

**要点：** 构造函数中可以调用类的其他方法，完成初始化逻辑。

------

### **第8题：this关键字的使用**

```csharp
using System;

class Person
{
    private string name;

    public Person(string name)
    {
        this.name = name;  // 使用this区分字段和参数
    }

    public void Show()
    {
        Console.WriteLine($"姓名：{name}");
    }
}

class Program
{
    static void Main()
    {
        Person p = new Person("小华");
        p.Show();
    }
}
```

**运行结果：**

```
姓名：小华
```

**要点：** `this` 用于区分当前对象的字段和同名的构造函数参数。

------

### **第9题：构造函数之间的相互调用**

```csharp
using System;

class Rectangle
{
    public int Width { get; set; }
    public int Height { get; set; }

    public Rectangle() : this(1, 1)
    {
        Console.WriteLine("无参构造函数被调用");
    }

    public Rectangle(int width, int height)
    {
        Width = width;
        Height = height;
        Console.WriteLine($"带参构造函数被调用：{Width}x{Height}");
    }
}

class Program
{
    static void Main()
    {
        Rectangle r1 = new Rectangle();
    }
}
```

**运行结果：**

```
带参构造函数被调用：1x1
无参构造函数被调用
```

**要点：** 可以使用 `this(...)` 调用同类中的其他构造函数，避免重复代码。

------

### **第10题：构造函数与对象初始化器对比**

```csharp
using System;

class Phone
{
    public string Brand { get; set; }
    public double Price { get; set; }

    public Phone(string brand, double price)
    {
        Brand = brand;
        Price = price;
    }

    public Phone() { } // 空构造函数
}

class Program
{
    static void Main()
    {
        // 使用构造函数
        Phone p1 = new Phone("iPhone", 6999);
        Console.WriteLine($"构造函数创建：{p1.Brand}, {p1.Price}");

        // 使用对象初始化器
        Phone p2 = new Phone { Brand = "小米", Price = 2999 };
        Console.WriteLine($"对象初始化器创建：{p2.Brand}, {p2.Price}");
    }
}
```

**运行结果：**

```
构造函数创建：iPhone, 6999
对象初始化器创建：小米, 2999
```

**要点：** 对象初始化器 `{}` 适合简化赋值操作；构造函数适合执行逻辑初始化。