---
noteId: "cc500280696e11f0bb9b1f35beaaf3f9"
tags: []

---
# 🎬 《属性访问器的高级用法》


## 1. 访问修饰符控制（C# 2.0+）
```csharp
public string ApiKey 
{
    get;  // 公共读取
    private set;  // 仅类内部可修改
}
```

```csharp
public class Account
{
    // 公共读取，私有设置
    public decimal Balance { get; private set; } = 0;
    
    public void Deposit(decimal amount) 
        => Balance += amount;  // 类内部可修改
}
```

## 2. 只读属性（三种实现方式）
```csharp
// 方式1：set移除
public Guid Id { get; } = Guid.NewGuid();

// 方式2：init访问器（C# 9.0+）
public DateTime Created { get; init; } = DateTime.Now;

// 方式3：只包含get
private readonly string _serial;
public string Serial => _serial;
```


```csharp
public class Order
{
    // 方式1：只包含get
    public Guid OrderId { get; } = Guid.NewGuid();
    
    // 方式2：init访问器（C# 9+）
    public DateTime OrderDate { get; init; }
    
    // 方式3：表达式体属性
    private readonly string _status = "Pending";
    public string Status => _status;
}

// 初始化
var order = new Order { OrderDate = DateTime.Now };
```
## 3.数据验证
```csharp
public class Student
{
    private int _age;
    
    public int Age
    {
        get => _age;
        set => _age = value >= 0 && value <= 120 
                ? value 
                : throw new ArgumentException("无效年龄");
    }
}
```

### 4.计算属性
```csharp
public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    // 计算属性
    public double Area => Width * Height;
    
    // 带逻辑的计算
    public string Description => 
        $"矩形: {Width}x{Height} (面积={Area:F2})";
}
```

---

## 3. 表达式体访问器（C# 7.0+）
```csharp
private int _age;
public int Age
{
    get => _age;
    set => _age = value >= 0 ? value : 0; // 带验证
}
```

## 4. 自动实现属性（编译器生成字段）
```csharp
public string Title { get; set; }  // 编译器自动创建隐藏字段
```
```csharp
public class Product
{
    // 编译器自动生成隐藏字段
    public string? Name { get; set; } 
    public decimal Price { get; set; }
}

// 对象初始化器
var book = new Product { Name = "C# Guide", Price = 49.99m };
```
---
## 5.访问器中的验证逻辑
```csharp
private int _score = 0;

public int Score
{
    get => _score;
    set
    {
        if (value < 0 || value > 100)
            throw new ArgumentOutOfRangeException("分数必须在0-100之间");
        
        _score = value;
    }
}
```

---




## 案例2:带验证逻辑的属性访问器

```csharp
class Product
{
    private decimal price;

    public decimal Price
    {
        get { return price; }
        set
        {
            if (value >= 0)
            {
                price = value;
            }
            else
            {
                Console.WriteLine("价格不能为负数！");
            }
        }
    }
}
```

使用方法：

```csharp
Product p = new Product();
p.Price = 100;               // 正常赋值
Console.WriteLine(p.Price);  // 输出：100

p.Price = -20;               // 控制逻辑生效，输出错误信息
```

小结：

* `set` 访问器中加入了条件判断，增加了字段赋值的安全性。
* 这是属性封装的核心用途之一：**控制和验证外部数据访问**。

---

## 案例3:自动实现属性 + 只读属性

```csharp
class Student
{
    public string Name { get; set; }       // 自动属性
    public int Age { get; private set; }   // 只读属性（外部只能读取）

    public Student(string name, int age)
    {
        Name = name;
        Age = age;   // 可以在构造器中设置
    }
}
```

使用方法：

```csharp
Student s = new Student("Tom", 18);
Console.WriteLine(s.Name);  // 输出：Tom
Console.WriteLine(s.Age);   // 输出：18

s.Name = "Jerry";           // 可以修改
// s.Age = 20;              // ❌ 报错：Age 的 set 是私有的
```

小结：

* 自动实现属性（Auto-Property）简化了代码：省略了私有字段。
* `Age` 是只读属性（`private set`），可以在类内部改，但不能在外部赋值。

---

## 总结：属性访问器的使用技巧

| 场景   | 写法                                             | 特点         |
| ---- | ---------------------------------------------- | ---------- |
| 普通属性 | 手动 `get` / `set` 封装字段                          | 可加入验证逻辑    |
| 自动属性 | `public string Name { get; set; }`             | 快速定义，无验证逻辑 |
| 只读属性 | `public int Age { get; private set; }`         | 构造后不可外部修改  |
| 只写属性 | `public string Password { private get; set; }` | 可写但外部不可读   |

---

## 实战演练(课堂练习)

🎙️

> “来动手写一个 `Account` 类：
>
> * 封装字段 `balance`；
> * 添加方法 `Deposit(decimal amount)`；
> * 添加方法 `GetBalance()`；
> * 确保外部不能直接访问 `balance`。”

---
## 属性访问器的典型使用方法

包括：

* `get` 和 `set` 的基本写法
* 自动实现属性（Auto-Implemented Property）
* 带逻辑判断的属性（封装字段）
* 只读属性和只写属性的实现

## 本课小结
> “今天我们学习了：
>
> * 封装是面向对象编程的核心之一；
> * 使用 `private` 隐藏字段；
> * 使用 `public` 方法或属性暴露访问接口；
> * 封装提升了程序的安全性、可维护性和可扩展性。”

---

## 封装课堂练习题（共6题）

补充建议：

* 每题独立创建一个类，或集中写在 `Program.cs` 的不同方法中
* 让学生在控制台中输出结果，验证是否符合预期
* 教师可边讲边在 Visual Studio 现场演示

### 1.封装字段并提供访问方法

📌**目标**：理解 private 字段 + public 方法的封装方式

**要求**：

1. 定义类 `Person`
2. 添加私有字段 `name`
3. 添加公共方法 `SetName(string name)` 和 `GetName()`
4. 在 Main 中创建对象，设置和读取名字

---

### 2.添加数据校验逻辑

📌**目标**：在 set 方法中添加逻辑，增强数据安全性

**要求**：

1. 基于第1题的 Person 类
2. 修改 `SetName(string name)`，禁止设置空字符串或 null
3. 如果非法，输出 `"名字不能为空"`，并不修改字段

---

### 3.用属性代替方法进行封装

📌**目标**：掌握使用属性来封装字段

**要求**：

1. 定义类 `Student`
2. 私有字段 `score`，类型 `int`
3. 添加公共属性 `Score`，封装 `score` 字段
4. 要求：只能设置 0～100 分，否则设为 0

---

### 4.只读属性 + 构造函数初始化

📌**目标**：理解只读属性的封装用法

**要求**：

1. 定义类 `Book`
2. 添加只读属性 `Title`
3. 只能通过构造函数设置 Title
4. 在 Main 中测试：

```csharp
Book b = new Book("C# 入门");
Console.WriteLine(b.Title);  // 输出：C# 入门
```

---

### 5.用方法控制修改余额

📌**目标**：用封装实现安全的存款操作

**要求**：

1. 定义类 `BankAccount`
2. 私有字段 `balance`（decimal）
3. 添加方法 `Deposit(decimal amount)`：仅允许正数
4. 添加方法 `GetBalance()`：返回当前余额
5. 在 Main 中模拟存款并输出余额

---

### 6.混合使用private字段+属性+方法

📌**目标**：全面巩固封装思想和组合使用方式

**要求**：

1. 定义类 `Employee`
2. 私有字段 `name` 和 `salary`（decimal）
3. 使用属性 `Name` 封装 `name`
4. 提供方法 `SetSalary(decimal salary)`，只能内部设置，不能直接访问字段
5. 添加只读属性 `Salary`
6. 在 Main 中验证访问方式

---

## 练习题:属性访问器基础语法

### 1.定义一个自动属性

**题目：**
创建一个名为 `Book` 的类，包含以下属性：

* `Title`（string 类型，自动属性）
* `Author`（string 类型，自动属性）

在 `Main()` 方法中创建一个 `Book` 对象并为其属性赋值，最后打印出这本书的信息。

---

### 2.实现带限制的 set 访问器

**题目：**
创建一个类 `Product`，包含：

* `Name`（string 类型，自动属性）
* `Price`（double 类型，完整属性，要求价格不能为负数，若设置为负数则输出“价格不能为负”，并不赋值）

在 `Main()` 方法中测试这个属性。

---

### 3.只读属性的使用

**题目：**
创建一个类 `Circle`，包含：

* `Radius`（double 类型，自动属性）
* `Area`（double 类型，只读属性，返回圆的面积，公式为 π × 半径 × 半径）

要求：

* `Area` 是计算属性，不能被外部赋值
* 使用 `Math.PI` 来获取圆周率

---

### 4.实现set-only属性(只写属性)

**题目：**
创建一个类 `Logger`，包含：

* 一个 `Message` 属性，只提供 `set` 方法。每次设置新值时，程序会自动输出日志信息：“日志：你设置了 XXX”。

在 `Main()` 中测试该属性设置的效果。

---

### 5.属性中嵌套逻辑（综合）

**题目：**
创建一个 `Student` 类，包含以下属性：

* `Name`：string，自动属性
* `Score`：int，完整属性，要求只能赋值 0\~100 之间的值，否则不赋值并输出“无效的成绩”
* `IsPass`：bool，只读属性，当 `Score >= 60` 时返回 `true`，否则返回 `false`

在 `Main()` 中测试：

* 合法和非法的成绩赋值
* 查看是否通过考试

---

## 答案:属性访问器基础语法

### 1.定义一个自动属性

题目回顾：

> 创建一个名为 `Book` 的类，包含以下属性：
>
> * `Title`（string 类型，自动属性）
> * `Author`（string 类型，自动属性）

解答代码：

```csharp
class Book
{
    public string Title { get; set; }
    public string Author { get; set; }
}

class Program
{
    static void Main()
    {
        Book b = new Book();
        b.Title = "C# 初学者指南";
        b.Author = "Jojo";

        Console.WriteLine($"书名：{b.Title}, 作者：{b.Author}");
    }
}
```

📌 **说明：** 这是最基础的“自动实现属性”写法。

---

### 2.实现带限制的 set 访问器

题目回顾：

> `Product` 类中 `Price` 属性不能为负数，如果尝试设置负数则提示错误信息，不赋值。

解答代码：

```csharp
class Product
{
    public string Name { get; set; }

    private double price;

    public double Price
    {
        get { return price; }
        set
        {
            if (value >= 0)
                price = value;
            else
                Console.WriteLine("价格不能为负！");
        }
    }
}

class Program
{
    static void Main()
    {
        Product p = new Product();
        p.Name = "笔记本电脑";
        p.Price = 4999;

        Console.WriteLine($"商品：{p.Name}, 价格：{p.Price}");

        p.Price = -3000; // 错误示范
        Console.WriteLine($"当前价格仍为：{p.Price}");
    }
}
```

📌 **说明：** `set` 中加入了数据合法性检查。

---

### 3.只读属性（计算圆的面积）

题目回顾：

> 创建一个 `Circle` 类，`Area` 是一个只读属性，返回 π × 半径²。

解答代码：

```csharp
class Circle
{
    public double Radius { get; set; }

    public double Area
    {
        get
        {
            return Math.PI * Radius * Radius;
        }
    }
}

class Program
{
    static void Main()
    {
        Circle c = new Circle();
        c.Radius = 3;

        Console.WriteLine($"半径为 {c.Radius} 的圆，面积是：{c.Area}");
    }
}
```

📌 **说明：** 只写 `get`，不提供 `set`，实现只读逻辑。

---

### 4.只写属性（set-only）

题目回顾：

> 创建一个 `Logger` 类，`Message` 属性只能设置，每次设置时都输出日志。

解答代码：

```csharp
class Logger
{
    private string message;

    public string Message
    {
        set
        {
            message = value;
            Console.WriteLine($"日志：你设置了 {message}");
        }
    }
}

class Program
{
    static void Main()
    {
        Logger log = new Logger();
        log.Message = "程序启动";  // 会自动打印日志
        log.Message = "操作完成";
    }
}
```

📌 **说明：** 只定义 `set`，不提供 `get`，达到“只写属性”的效果。

---

### 5.属性中嵌套逻辑（综合）

题目回顾：

> 创建 `Student` 类：
>
> * `Name`：自动属性
> * `Score`：完整属性，限制为 0\~100
> * `IsPass`：只读属性，返回是否及格（>=60）

解答代码：

```csharp
class Student
{
    public string Name { get; set; }

    private int score;
    public int Score
    {
        get { return score; }
        set
        {
            if (value >= 0 && value <= 100)
                score = value;
            else
                Console.WriteLine("无效的成绩！");
        }
    }

    public bool IsPass
    {
        get { return score >= 60; }
    }
}

class Program
{
    static void Main()
    {
        Student s = new Student();
        s.Name = "小明";
        s.Score = 85;

        Console.WriteLine($"{s.Name} 的成绩是 {s.Score}，是否及格：{s.IsPass}");

        s.Score = 120;  // 无效赋值
        Console.WriteLine($"{s.Name} 的成绩是 {s.Score}，是否及格：{s.IsPass}");
    }
}
```

📌 **说明：** `Score` 进行了限制，`IsPass` 是只读派生属性，体现封装+访问控制+逻辑处理。

---
