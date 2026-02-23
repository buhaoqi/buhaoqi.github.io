---
# 这部分是关键！侧边栏显示名由这里决定
title: 子任务五 构造函数  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 子任务五 构造函数  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  5  # 侧边栏中排在第1位
---



## 构造函数的由来

我们先从一个熟悉的场景说起。假设我们定义了一个"学生类"，包含姓名、年龄这些属性：

```csharp
class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string StudentId { get; set; }
}
```

当我们创建学生对象时，通常会这样写：

```csharp
Student student = new Student();
student.Name = "张三";
student.Age = 18;
student.StudentId = "2023001";
```

这段代码没问题，但如果我们每次创建学生对象都要重复这几步赋值操作，不仅麻烦，还可能因为忘记给某个重要属性赋值而导致错误。比如，如果忘记设置学号，这个学生对象就是不完整的。

有没有办法在创建对象的同时，就完成这些必要的初始化工作呢？当然有，这就是构造函数的作用！


## 构造函数是什么


在C#中，构造函数是一种特殊的方法，专门用于对象的初始化（如设置初始值、分配资源等）。当我们用`new`关键字创建对象时，构造函数会自动执行，确保对象在使用前处于合理的初始状态。


构造函数的基本概念

- **定义**：构造函数是与类同名的特殊方法，没有返回值（连`void`都不能写）。
- **作用**：在创建对象时自动执行，完成对象的初始化工作（如给字段/属性赋初始值、建立数据库连接等）。
- **触发时机**：每次用`new`关键字创建类的实例时，都会调用对应的构造函数。

构造函数是类中一种特殊的方法，它的名字和类名完全相同，而且没有返回值。当我们使用`new`关键字创建对象时，构造函数会被自动调用，帮我们完成对象的初始化工作。

我们来给Student类添加一个构造函数：

```csharp
class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string StudentId { get; set; }
    
    // 构造函数
    public Student(string name, int age, string studentId)
    {
        Name = name;
        Age = age;
        StudentId = studentId;
    }
}
```

现在，当我们创建学生对象时，就可以在创建的同时完成赋值：

```csharp
Student student = new Student("张三", 18, "2023001");
```

这样是不是简洁多了？而且通过构造函数，我们可以强制要求创建对象时必须提供必要的信息，避免了忘记赋值的问题。

## 默认构造函数

默认构造函数

如果类中没有显式定义任何构造函数，C#编译器会自动生成一个**无参数的默认构造函数**，它什么都不做，但保证对象能被正常创建。

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // 编译器自动生成的默认构造函数（隐式存在）
    // public Student() { }
}

// 使用默认构造函数创建对象
Student stu = new Student(); // 调用默认构造函数
stu.Name = "张三";
stu.Age = 18;
```

可能有同学会问，如果我没有手动定义构造函数，之前的代码为什么还能正常工作呢？那是因为当一个类中没有定义任何构造函数时，C#编译器会自动为我们生成一个无参数的默认构造函数。就像这样：

```csharp
public Student()
{
    // 空实现
}
```

## 自定义构造函数

当需要在创建对象时就初始化数据（如强制设置姓名、年龄），可以显式定义构造函数：

#### 1. 无参数构造函数（手动定义）

如果手动定义了构造函数，编译器就不会再生成默认构造函数。如需保留无参构造，需手动声明：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // 手动定义无参数构造函数
    public Student()
    {
        // 初始化逻辑：如设置默认值
        Name = "未知姓名";
        Age = 0;
    }
}

// 创建对象时自动调用无参构造函数
Student stu = new Student();
Console.WriteLine(stu.Name); // 输出：未知姓名（构造函数中设置的默认值）
```


#### 2. 带参数的构造函数

最常用的构造函数形式，用于在创建对象时直接传入初始值：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // 带参数的构造函数：强制传入姓名和年龄
    public Student(string name, int age)
    {
        // 用参数初始化属性
        Name = name;
        Age = age;
    }
}

// 创建对象时必须传入参数（与构造函数匹配）
Student stu = new Student("张三", 18); // 调用带参构造函数
Console.WriteLine($"{stu.Name}，{stu.Age}岁"); // 输出：张三，18岁
```

**优势**：确保对象创建时就有有效的初始值，避免“未初始化就使用”的问题。

## 修饰符

构造函数还可以和访问修饰符配合使用。比如，我们可以把构造函数设为`private`，这样就只能在类内部创建对象，这在一些特殊设计模式中非常有用。

```csharp
class Singleton
{
    // 私有构造函数
    private Singleton()
    {
    }
    
    // 在类内部创建唯一实例
    public static Singleton Instance = new Singleton();
}
```


## 四、构造函数的重载

和普通方法一样，构造函数也支持**重载**（同一个类中定义多个同名构造函数，通过参数的数量、类型或顺序区分），满足不同的初始化需求：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Major { get; set; }

    // 构造函数1：无参数（设置默认值）
    public Student()
    {
        Name = "未知";
        Age = 0;
        Major = "未分配";
    }

    // 构造函数2：仅传入姓名
    public Student(string name)
    {
        Name = name;
        Age = 0;
        Major = "未分配";
    }

    // 构造函数3：传入姓名、年龄、专业
    public Student(string name, int age, string major)
    {
        Name = name;
        Age = age;
        Major = major;
    }
}

// 调用不同的构造函数
Student stu1 = new Student(); // 用构造函数1
Student stu2 = new Student("李四"); // 用构造函数2
Student stu3 = new Student("王五", 20, "计算机"); // 用构造函数3
```

**重载原则**：构造函数名必须与类名相同，参数列表必须不同（数量、类型、顺序至少有一个不同）。


但是，一旦我们手动定义了构造函数，这个默认的无参数构造函数就会消失。如果还想像以前那样创建对象，就需要手动添加一个无参数构造函数：

```csharp
class Student
{
    // 其他成员...
    
    // 无参数构造函数
    public Student()
    {
        // 可以在这里设置一些默认值
        StudentId = "未知";
    }
    
    // 带参数的构造函数
    public Student(string name, int age, string studentId)
    {
        Name = name;
        Age = age;
        StudentId = studentId;
    }
}
```

这种一个类中定义多个构造函数的情况，叫做构造函数的重载，它体现了面向对象的多态特性。


## 五、`this`关键字

当多个构造函数有重复的初始化逻辑时，可以用`this`关键字调用同类中的其他构造函数，减少代码重复：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Major { get; set; }

    // 基础构造函数（包含核心初始化逻辑）
    public Student(string name)
    {
        Name = name; // 核心逻辑：必须传入姓名
        Age = 18; // 默认年龄
        Major = "通用"; // 默认专业
    }

    // 调用基础构造函数，再扩展年龄参数
    public Student(string name, int age) : this(name)
    {
        Age = age; // 仅需处理新增的参数
    }

    // 调用基础构造函数，再扩展年龄和专业参数
    public Student(string name, int age, string major) : this(name, age)
    {
        Major = major; // 仅需处理新增的参数
    }
}
```

**解析**：  

- `: this(name)` 表示：先调用当前类中参数为`string name`的构造函数，再执行当前构造函数的代码。  
- 作用：将公共初始化逻辑集中在一个构造函数中，其他构造函数通过`this`复用，减少重复代码。  


## 六、构造函数的使用场景

1. **强制初始化**：确保对象创建时必须提供关键信息（如`Id`、`Name`等）。  
   例：`User`类必须传入用户名才能创建对象，避免无意义的空对象。

2. **设置默认值**：为属性设置合理的初始值（如年龄默认为0，状态默认为“正常”）。

3. **资源初始化**：在创建对象时分配资源（如打开文件流、建立数据库连接）。  

   ```csharp
   public class FileHandler
   {
       private FileStream _stream;
   
       // 构造函数中打开文件
       public FileHandler(string filePath)
       {
           _stream = File.Open(filePath, FileMode.Open);
       }
   }
   ```

## 总结

核心要点总结

1. 构造函数与类同名，无返回值，用于对象初始化。  
2. 未手动定义时，编译器自动生成无参默认构造函数。  
3. 支持重载，可通过`this`关键字复用初始化逻辑。  
4. 每次用`new`创建对象时，必然调用对应的构造函数。  

掌握构造函数是面向对象编程的基础，它能保证对象在使用前处于“就绪”状态，是封装思想的重要体现。


总结一下，构造函数是类中用于初始化对象的特殊方法，它具有以下特点：

1. 构造函数的名字和类名相同，没有返回值
2. 创建对象时会自动调用
3. 主要作用是初始化对象的属性和状态
4. 可以重载，实现多种初始化方式
5. 可以使用访问修饰符控制访问权限

掌握构造函数的使用，能让我们的代码更加简洁、安全，也更符合面向对象的设计思想。下节课，我们将继续学习类的其他特性，大家课后可以尝试给之前定义的类添加构造函数，体验一下它的便利之处。

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