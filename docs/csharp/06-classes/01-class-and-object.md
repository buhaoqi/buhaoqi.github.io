---
noteId: "bc4cbba053a511f0aac0b3efb7c28583"
tags: []

---

# C# 中的类详解

在 C# 中，类是面向对象编程（OOP）的核心概念，它定义了对象的蓝图或模板，封装了数据和行为。理解类是掌握 C# 的关键基础。

## 一、什么是类？

类是一种用户自定义的**引用类型**，它：
1. 定义对象的**数据结构**（字段、属性）
2. 定义对象的**行为**（方法、事件）
3. 提供对象的**初始化机制**（构造函数）
4. 支持面向对象的**三大特性**：封装、继承、多态

### 类的主要特点：
- **蓝图作用**：类本身不是对象，而是创建对象的模板
- **封装性**：将数据和行为组合在单一单元中
- **可继承性**：支持基类-派生类的层次结构
- **多态性**：允许不同对象对相同消息做出不同响应

## 二、如何声明一个类

### 基本语法：
```csharp
[访问修饰符] class 类名 [：基类] [，接口列表]
{
    // 类成员（字段、属性、方法、事件等）
}
```

### 关键组成部分：
1. **访问修饰符**：控制类的可见性
   - `public`：无访问限制
   - `internal`：同一程序集内可访问（默认）
   - `abstract`：抽象类，不能实例化
   - `sealed`：密封类，不能被继承
   - `static`：静态类，只包含静态成员

2. **class 关键字**：声明类的核心关键字

3. **类名**：遵循 PascalCase 命名规范（首字母大写）

4. **基类**：通过 `:` 指定继承的父类（可选）

5. **接口列表**：通过 `,` 分隔实现的接口（可选）

## 三、完整的类声明示例

```csharp
using System;

// 1. 声明一个公共类
public class Person
{
    // 字段（数据存储）
    private string _name; // 私有字段
    private DateTime _birthDate;
    
    // 属性（数据访问）
    public string Name 
    {
        get => _name;
        set
        {
            if (!string.IsNullOrWhiteSpace(value))
                _name = value;
            else
                throw new ArgumentException("姓名不能为空");
        }
    }
    
    // 自动属性
    public int Age => CalculateAge();
    
    // 构造函数（对象初始化）
    public Person(string name, DateTime birthDate)
    {
        Name = name;
        _birthDate = birthDate;
    }
    
    // 方法（行为）
    public void Introduce()
    {
        Console.WriteLine($"你好，我叫{Name}，今年{Age}岁");
    }
    
    // 私有辅助方法
    private int CalculateAge()
    {
        var today = DateTime.Today;
        int age = today.Year - _birthDate.Year;
        if (_birthDate.Date > today.AddYears(-age)) age--;
        return age;
    }
    
    // 静态方法
    public static void DisplaySpecies()
    {
        Console.WriteLine("智人（Homo sapiens）");
    }
}

// 2. 声明派生类
public class Employee : Person
{
    public string Department { get; set; }
    public decimal Salary { get; private set; }
    
    public Employee(string name, DateTime birthDate, string dept, decimal salary)
        : base(name, birthDate) // 调用基类构造函数
    {
        Department = dept;
        Salary = salary;
    }
    
    // 方法重写（需基类方法为virtual或abstract）
    public override string ToString()
    {
        return $"{Name} ({Age}岁), {Department}部门, 薪资:{Salary:C}";
    }
}

// 3. 静态类
public static class MathUtility
{
    public static double Add(double a, double b) => a + b;
    public static double Multiply(double a, double b) => a * b;
}
```

## 四、类成员详解

### 1. 字段（Fields）
- 存储类状态的数据变量
- 通常声明为 `private`（封装原则）
- 命名规范：`_camelCase`（前缀下划线）

```csharp
private int _id;
private readonly string _category; // 只读字段
```

### 2. 属性（Properties）
- 提供对字段的受控访问
- 包含 `get`（读取）和 `set`（写入）访问器
- 支持验证逻辑

```csharp
public string Email
{
    get => _email;
    set
    {
        if (IsValidEmail(value))
            _email = value;
        else
            throw new ArgumentException("无效的邮箱格式");
    }
}

// 自动属性（编译器生成隐藏字段）
public int Id { get; set; } 
```

### 3. 方法（Methods）
- 定义类的行为
- 可接受参数并返回值
- 可重载（相同名称不同参数）

```csharp
public double CalculateBonus(double performanceRating)
{
    return Salary * 0.1 * performanceRating;
}

// 方法重载
public double CalculateBonus()
{
    return Salary * 0.05;
}
```

### 4. 构造函数（Constructors）
- 特殊方法，名称与类名相同
- 用于初始化新对象
- 无返回值声明
- 可重载

```csharp
public Person() // 无参构造函数
{
    _name = "未知";
}

public Person(string name) // 带参构造函数
{
    Name = name;
}
```

### 5. 静态成员（Static Members）
- 属于类本身而非实例
- 通过类名访问（`ClassName.Member`）
- 常用于工具函数、共享数据

```csharp
public static int InstanceCount { get; private set; }

static Person() // 静态构造函数（仅执行一次）
{
    InstanceCount = 0;
}

public Person()
{
    InstanceCount++;
}
```

## 五、类的使用

### 1. 实例化对象
使用 `new` 关键字创建类的实例：
```csharp
// 使用构造函数创建实例
Person person1 = new Person("张三", new DateTime(1990, 5, 15));

// 对象初始化语法（C# 3.0+）
var employee = new Employee("李四", new DateTime(1985, 8, 20))
{
    Department = "技术部",
    Salary = 15000m
};
```

### 2. 访问成员
```csharp
// 访问属性
Console.WriteLine(employee.Name);

// 调用方法
employee.Introduce();

// 调用静态方法
Person.DisplaySpecies();

// 使用静态类
double result = MathUtility.Multiply(4.5, 2.3);
```

### 3. 继承与多态
```csharp
Person p = new Employee("王五", new DateTime(1995, 3, 10), "市场部", 12000m);

// 多态：调用派生类的实现
Console.WriteLine(p.ToString()); // 调用Employee的ToString

// 类型检查与转换
if (p is Employee emp)
{
    Console.WriteLine($"员工薪资: {emp.Salary:C}");
}
```

## 六、类设计最佳实践

1. **单一职责原则**：每个类只负责一个功能领域
2. **封装原则**：隐藏内部实现细节（使用 `private`）
3. **命名规范**：类名使用 PascalCase，接口名加前缀 "I"
4. **优先使用属性**：而非公共字段
5. **适当使用静态类**：对于工具类、扩展方法等
6. **合理使用继承**：避免过深的继承层次
7. **文档注释**：使用 XML 注释说明类功能

```csharp
/// <summary>
/// 表示一个几何圆形
/// </summary>
public class Circle
{
    /// <summary>
    /// 圆形半径
    /// </summary>
    public double Radius { get; set; }

    /// <summary>
    /// 计算圆形面积
    /// </summary>
    /// <returns>圆形面积</returns>
    public double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
}
```

## 七、特殊类类型

### 1. 抽象类（Abstract Class）
- 不能实例化
- 包含抽象成员（无实现）
- 用于定义通用接口

```csharp
public abstract class Shape
{
    public abstract double Area(); // 抽象方法
    public abstract double Perimeter();
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    public override double Area() => Width * Height;
    public override double Perimeter() => 2 * (Width + Height);
}
```

### 2. 密封类（Sealed Class）
- 不能被继承
- 用于防止派生

```csharp
public sealed class ConfigurationManager
{
    // 实现...
}
```

### 3. 分部类（Partial Class）
- 将类拆分到多个文件
- 常用于分离自动生成代码

```csharp
// File1.cs
public partial class DataProcessor
{
    public void ProcessData() { /* ... */ }
}

// File2.cs
public partial class DataProcessor
{
    public void ValidateData() { /* ... */ }
}
```

## 总结

在 C# 中，类：
- 是面向对象编程的基础构建块
- 通过 `class` 关键字声明
- 包含字段、属性、方法、事件等成员
- 支持访问修饰符控制可见性
- 可通过继承创建层次结构
- 应遵循封装、单一职责等设计原则

正确设计和使用类可以帮助创建：
- 结构清晰、可维护的代码
- 可重用、可扩展的组件
- 高内聚、低耦合的系统架构

掌握类的概念和使用是成为高效 C# 开发者的关键一步。