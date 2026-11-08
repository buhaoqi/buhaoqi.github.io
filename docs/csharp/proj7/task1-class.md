---
title: 任务一 类
description: 算法与程序设计《C#》项目七 面向对象基础 任务一 类知识点总结。介绍类的概念、类的声明语法、类的命名规范、类的成员（字段/属性/方法）、构造函数概念与重载、对象的创建与生命周期、属性声明与get/set访问器、this关键字三种用法，含完整代码示例。
keywords: [C#, 类, 面向对象, class, 字段, 属性, 方法, 构造函数, 对象, new, 生命周期, get, set, 访问器, this关键字, 帕斯卡命名法, 对口升学]
sidebar_label: 任务一 类
sidebar_position: 1
slug: /csharp/proj7/task1-class
tags: [C#, 项目七, 任务一, 对口升学]
---

## 知识点

### 1.什么是类？

类是面向对象编程（OOP）的基本概念之一，它是一种抽象数据类型，类定义了对象的属性（字段）和行为（方法）。类是同一类事物的统称，如果现实生活中一个事物抽象成对象，那么类就是这些对象的统称。在OOP中，一切都被视为对象，而这些对象的行为和属性都由类来定义。

例如，可以创建一个名为"Person"的类，用于表示人的属性（如姓名、年龄）和行为（如说话、行走）。

### 子任务一 类的声明

### 2.类的声明语法是什么？

```csharp
类修饰符 class 类名
{
    // 类的成员
}
```

代码示例：

```csharp
public class Person
{
    // 类的成员将在后续内容中介绍
}
```

说明：
1. `public` 是一个访问修饰符，表示类是公共的，可以在程序的其他部分访问。
2. `Person` 是类的名称，按照约定使用帕斯卡命名法（首字母大写）。
3. 大括号 `{}` 中包含了类的成员，包括字段、属性和方法。

### 3.类的命名规范有哪些？

1. 类名通常使用**帕斯卡命名法**（Pascal）：每个单词的首字母大写，例如User、GetInfo等。
2. 类名应该具有描述性，避免使用单个字符或不具有描述性的类名。
3. 如果类是具体类型（如"Person"或"Car"），类名通常使用名词。
4. 遵守语言和团队的编程约定，以确保一致性。

### 4.定义Student类示例

```csharp
public class Student
{
    // Fields, properties, methods and events go here.
    // 类的成员将在后续内容中介绍
}
```

---

### 子任务二 类的成员

### 5.类的成员有哪些类型？

类的成员包括字段、属性、方法等，它们用于描述类的结构和行为：

| 成员类型 | 说明 | 示例 |
|---|---|---|
| **字段（Fields）** | 存储数据，表示对象的状态，可以是公共的、私有的或受保护的 | `private string name;` |
| **属性（Properties）** | 提供对字段的访问和控制，可以执行自定义逻辑（如输入验证） | `public string Name { get; set; }` |
| **方法（Methods）** | 定义类的行为和操作，是执行某些操作的代码块 | `public void Speak() { }` |

字段示例：

```csharp
private string name;  // 私有字段
public int age;       // 公共字段
```

属性示例：

```csharp
public string Name
{
    get { return name; }  // 获取属性值
    set { name = value; } // 设置属性值
}
```

方法示例：

```csharp
public void Speak()
{
    Console.WriteLine("Hello, my name is " + name);
}
```

---

### 子任务三 构造函数

### 6.什么是构造函数？

构造函数是一种特殊的方法，用于在对象创建时进行初始化。当创建一个类的实例（对象）时，构造函数会自动调用执行初始化操作。

构造函数的作用：为对象分配内存并设置初始值，确保对象在被创建时处于一个合适的初始状态。

### 7.构造函数的声明语法和特点是什么？

```csharp
public class MyClass
{
    // 默认构造函数
    public MyClass()
    {
        // 构造函数的初始化代码
    }
}
```

构造函数的特点：
1. 构造函数的名称与类名**相同**。
2. 构造函数**没有返回类型**，包括void。
3. 构造函数可以包含参数，用于接受初始化时需要的信息。

### 8.什么是构造函数的重载？

构造函数可以重载，即为一个类定义多个不同参数列表的构造函数，使你可以根据不同的情况和需求来初始化对象。

```csharp
public class Person
{
    private string name;
    private int age;

    // 构造函数1：接受姓名参数
    public Person(string initialName)
    {
        name = initialName;
    }

    // 重载的构造函数2：接受姓名和年龄参数
    public Person(string initialName, int initialAge)
    {
        name = initialName;
        age = initialAge;
    }

    public void SayHello()
    {
        Console.WriteLine("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
```

---

### 子任务四 对象

### 9.如何创建类的对象？

对象是在一类事物中抽象出某一个特例。在C#中通过使用 `new` 操作符创建对象：

```csharp
ClassName objectName = new ClassName()
```

说明：
- `ClassName` 是类的名称
- `objectName` 是创建的对象名称
- `new` 是创建对象操作符，分配内存并调用构造函数

```csharp
Person person1 = new Person();          // 创建一个Person对象
Person person2 = new Person("Alice");   // 创建对象并传递参数
```

### 10.如何访问对象的成员？

使用"对象.类成员"来访问对象的成员：

```csharp
Person person = new Person("Bob");
person.SayHello();          // 调用对象的方法
string name = person.Name;  // 读取对象的属性
person.Age = 30;            // 设置对象的属性
```

### 11.对象的生命周期包括哪些阶段？

| 阶段 | 说明 |
|---|---|
| 创建 | 通过调用构造函数完成，分配内存，初始化状态 |
| 使用 | 在生命周期内执行各种操作，字段和属性可能被多次读写 |
| 不可访问 | 对象不再被引用 |
| 垃圾回收 | 垃圾回收器负责释放对象占用的内存 |
| 销毁 | 释放资源并结束生命周期 |

---

### 子任务五 属性

### 12.什么是属性？

属性是类的成员，用于访问和控制类的字段。属性提供了对字段的封装，使你可以通过属性来读取和修改字段的值，而不直接暴露字段。

属性的主要作用：
1. 属性是字段的包装器，通过类的接口来访问和操作字段。
2. 属性提供读取和写入的控制：可以定义只读属性（仅有get）或读写属性（有get和set）。
3. 属性可以包含逻辑，例如输入验证或计算。

### 13.属性的声明语法是什么？

```csharp
访问修饰符 数据类型 属性名
{
    get
    {
        return 变量名;
    }
    set
    {
        变量名 = value;
    }
}
```

### 14.get和set访问器的作用是什么？

- **get访问器**：用于获取属性的值，可以包含逻辑。
- **set访问器**：用于设置属性的值，可以包含输入验证逻辑。
- **value**：是一个特殊的关键字，在set访问器中表示要设置的值。

```csharp
public class MyClass
{
    private int myField;

    public int MyProperty
    {
        get
        {
            return myField;    // 获取属性值
        }
        set
        {
            myField = value;   // 设置属性值
        }
    }
}
```

使用属性：

```csharp
MyClass myObject = new MyClass();
myObject.MyProperty = 42;         // 设置属性值
int value = myObject.MyProperty;  // 读取属性值
```

### 15.属性的访问器类型有哪些？

| 访问器组合 | 属性类型 |
|---|---|
| get 和 set 都存在 | 读写属性 |
| 只有 get | 只读属性 |
| 只有 set | 只写属性 |

---

### 子任务六 this关键字

### 16.this关键字有哪三种用法？

（1）**使用this关键字访问属性**：在类的方法内引用本类对象的成员，消除成员名称的歧义。

```csharp
public class MyClass
{
    private int myField;

    public MyClass(int myField)
    {
        this.myField = myField;    // 使用this区分参数和字段
    }

    public int GetMyField()
    {
        return this.myField;       // 使用this访问当前对象的字段
    }
}
```

（2）**使用this关键字调用成员方法**：在方法内调用同一对象的其他方法。

```csharp
public class MyClass
{
    public void MethodA()
    {
        Console.WriteLine("Method A");
    }

    public void MethodB()
    {
        Console.WriteLine("Method B");
        this.MethodA();    // 使用this调用另一个方法
    }
}
```

（3）**使用this关键字调用构造方法**：在一个构造方法中调用同一类的其他构造方法（构造函数重载），避免重复初始化代码。

```csharp
public class MyClass
{
    private int value;

    public MyClass()
    {
        this.value = 0;    // 默认构造函数
    }

    public MyClass(int value)
    {
        this();            // 调用默认构造函数
        this.value = value; // 然后设置value字段
    }
}
```
