---
title: 任务三 接口
description: 算法与程序设计《C#》项目八 面向对象编程 任务三 接口知识点总结。介绍接口概念、interface关键字声明接口、接口的实现、显式接口成员实现、抽象类与接口的区别，含完整代码示例和运行结果。
keywords: [C#, 接口, interface, 接口声明, 接口实现, 显式接口, 抽象类, abstract, 多重继承, 对口升学]
sidebar_label: 任务三 接口
sidebar_position: 3
slug: /csharp/proj8/task3-interface
tags: [C#, 项目八, 任务三, 对口升学]
---

## 知识点

### 1.什么是接口？

接口（Interface）是C#的一种数据类型，属于引用类型。一个接口定义一个协议。接口可以包含方法、属性、事件和索引器，但**不能包含字段**，只描述成员的签名，不提供任何实现代码。具体实现由继承该接口的类来实现。

### 2.接口有哪些特征？

1. 接口类似于抽象基类，继承接口的任何非抽象类型都必须实现接口的所有成员。
2. **不能直接实例化**接口。
3. 接口可以包含事件、索引器、方法和属性。
4. 接口**不包含方法的实现**。
5. 类和结构可从**多个接口**继承。
6. 接口自身可从多个接口继承。

### 3.如何声明接口？

```csharp
[访问修饰符] interface 接口名
{
    // 接口成员
}
```

说明：
- 访问修饰符只能使用public和internal，默认为public。
- 接口名建议用大写字母**I**打头，如 `ImyInterface`。
- 接口成员不能包含常量、字段、构造函数和析构函数。
- 所有接口成员隐式具有public访问修饰符，不能添加任何访问修饰符。

### 4.接口声明示例

```csharp
interface ImyInterface
{
    string ID          // 编号（可读可写）
    {
        get;
        set;
    }
    string Name        // 姓名（可读可写）
    {
        get;
        set;
    }
    void ShowInfo();   // 显示定义的编号和姓名
}
```

### 5.如何实现接口？

一个类只能继承一个基类，但可以继承**任意多个接口**。声明实现接口的类时，在继承列表中包含接口名称，多个接口之间用逗号分隔：

```csharp
public class 类名 : 继承的接口列表
{
    // 成员内容
}
```

> 注意：接口的派生类必须实现该接口声明的**所有成员**。类中的对应成员必须是公共的、非静态的，并且与接口成员具有相同的名称和签名。

### 6.接口多重继承示例

```csharp
interface IPeople
{
    string Name { get; set; }
    string Sex { get; set; }
}
interface ITeacher : IPeople
{
    void teach();
}
interface IStudent : IPeople
{
    void study();
}
class Person : IPeople, ITeacher, IStudent
{
    string name = "";
    string sex = "";
    public string Name { get { return name; } set { name = value; } }
    public string Sex { get { return sex; } set { sex = value; } }
    public void teach()
    {
        Console.WriteLine(Name + " " + Sex + "教师");
    }
    public void study()
    {
        Console.WriteLine(Name + " " + Sex + "学生");
    }
}
```

### 7.什么是显式接口成员实现？

如果类实现两个接口，且这两个接口包含具有相同签名的成员，可以**显式地实现接口成员**，即使用接口名称和句点命名该类成员：

```csharp
interface ImyInterface1
{
    int Add();
}
interface ImyInterface2
{
    int Add();
}
class myClass : ImyInterface1, ImyInterface2
{
    int ImyInterface1.Add()         // 显式实现接口1
    {
        int x = 3, y = 5;
        return x + y;
    }
    int ImyInterface2.Add()         // 显式实现接口2
    {
        int x = 3, y = 5, z = 7;
        return x + y + z;
    }
}
```

调用：

```csharp
myClass myclass = new myClass();
ImyInterface1 imyinterface1 = myclass;
Console.WriteLine(imyinterface1.Add());    // 输出：8
ImyInterface2 imyinterface2 = myclass;
Console.WriteLine(imyinterface2.Add());    // 输出：15
```

> 注意：显式接口成员属于接口的成员而不是类的成员，不能使用类对象直接访问，只能通过接口对象来访问。显式接口成员实现中不能包含abstract、virtual、override或static修饰符。

### 8.抽象类与接口有什么区别？

抽象类使用 `abstract` 关键字声明：

```csharp
[修饰符] abstract class 类名 : 基类或接口
{
    // 类成员
}
```

抽象类和接口的区别：

| 特性 | 抽象类 | 接口 |
|---|---|---|
| 继承数量 | 只能直接继承一个抽象类 | 可以继承任意多个接口 |
| 成员实现 | 可以定义成员的实现 | 不可以定义实现 |
| 包含内容 | 字段、构造函数、析构函数、静态成员、常量 | 不能包含这些 |
| 成员访问级别 | 可以是private/protected/internal等 | 必须是public |
| 使用目的 | 主要用作对象系列的基类，共享主要特性 | 用于完成某些相同任务的类 |
| 实例化 | 不能直接实例化 | 不能直接实例化 |
