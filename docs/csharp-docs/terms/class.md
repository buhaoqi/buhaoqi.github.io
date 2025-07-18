---
noteId: "3d91bea04ca211f0a4447ff1d733314e"
tags: []

---

在 C# 中，**类（Class）** 是一种引用类型，它是面向对象编程（OOP）的核心概念，用于封装数据和行为。类是创建对象的模板，定义了对象的属性（数据）和方法（行为）。以下是关于 C# 类的全面解析：

---

### **1. 类的基本定义**
```csharp
// 定义一个简单的类
public class Person
{
    // 字段（存储数据）
    private string _name;
    
    // 属性（封装字段，提供安全访问）
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    // 方法（定义行为）
    public void Greet()
    {
        Console.WriteLine($"Hello, my name is {_name}!");
    }
}
```

---

### **2. 类的核心特性**
#### **(1) 封装（Encapsulation）**
- 将数据（字段）和操作数据的方法（行为）绑定在一起。
- 通过访问修饰符（`public`、`private`等）控制外部访问权限。

#### **(2) 继承（Inheritance）**
- 子类可以继承父类的字段、属性和方法。
- 实现代码复用和层次化设计。
```csharp
public class Student : Person  // Student继承自Person
{
    public int StudentId { get; set; }
}
```

#### **(3) 多态（Polymorphism）**
- 通过方法重写（`override`）或接口实现，让子类具有不同的行为。
```csharp
public class Animal
{
    public virtual void MakeSound() { }
}
public class Dog : Animal
{
    public override void MakeSound() => Console.WriteLine("Woof!");
}
```

#### **(4) 抽象（Abstraction）**
- 抽象类（`abstract class`）和接口（`interface`）定义规范，隐藏实现细节。

---

### **3. 类的成员**
| 成员类型       | 说明                                                                 | 示例                          |
|----------------|----------------------------------------------------------------------|-------------------------------|
| **字段**       | 存储数据的变量                                                      | `private int _age;`           |
| **属性**       | 封装字段，提供安全的读写控制                                        | `public int Age { get; set; }`|
| **方法**       | 定义对象的行为                                                      | `public void Run() { }`       |
| **构造函数**   | 初始化对象（与类同名，无返回值）                                    | `public Person() { }`         |
| **事件**       | 基于委托的通知机制                                                  | `public event Action OnClick;`|
| **索引器**     | 使对象可以像数组一样被访问                                          | `public int this[int i] { ... }` |

---

### **4. 类的实例化**
- 使用 `new` 关键字创建对象（实例）：
```csharp
Person person = new Person();  // 调用默认构造函数
person.Name = "Alice";
person.Greet();  // 输出：Hello, my name is Alice!
```

---

### **5. 类 vs 结构体（Class vs Struct）**
| 特性                | 类（Class）                          | 结构体（Struct）                     |
|---------------------|--------------------------------------|--------------------------------------|
| **类型**            | 引用类型（存储在堆）                 | 值类型（通常存储在栈）               |
| **继承**            | 支持单继承                           | 不支持继承（隐式继承自`ValueType`）  |
| **默认构造函数**    | 可自定义                             | 不能自定义（编译器自动生成）         |
| **赋值行为**        | 复制引用（浅拷贝）                   | 复制整个值（深拷贝）                 |
| **适用场景**        | 复杂对象、需要继承或多态             | 小型数据、频繁创建的轻量级对象       |

---

### **6. 类的实际应用场景**
1. **领域模型**  
   如电商系统中的 `Order`、`Product` 等类。
2. **服务层**  
   封装业务逻辑（如 `PaymentService`）。
3. **UI 控件**  
   WinForms/WPF 中的 `Button`、`TextBox` 等控件类。
4. **数据访问**  
   `DbContext`（Entity Framework 核心类）。

---

### **7. 高级特性**
#### **(1) 静态类**
- 仅包含静态成员，不可实例化。
- 常用于工具类（如 `Math`、`File`）。
```csharp
public static class StringHelper
{
    public static string Reverse(string s) => new string(s.Reverse().ToArray());
}
```

#### **(2) 部分类（Partial Class）**
- 将类拆分到多个文件中。
```csharp
// File1.cs
public partial class Person { public string Name { get; set; } }

// File2.cs
public partial class Person { public void Greet() => Console.WriteLine(Name); }
```

#### **(3) 泛型类**
- 支持类型参数化。
```csharp
public class Box<T>
{
    public T Content { get; set; }
}
Box<int> intBox = new Box<int> { Content = 42 };
```

---

### **8. 类的设计原则**
1. **单一职责原则**  
   一个类只负责一项功能。
2. **开闭原则**  
   对扩展开放，对修改关闭。
3. **依赖倒置**  
   依赖抽象（接口），而非具体实现。

---

### **总结**
C# 中的类是面向对象编程的基石，通过封装、继承、多态等特性，可以构建复杂、可维护的应用程序。理解类的本质和设计原则，是成为优秀 C# 开发者的关键！