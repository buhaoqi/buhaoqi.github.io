---
title: 任务一 类的封装与继承
description: 算法与程序设计《C#》项目八 面向对象编程 任务一 类的封装与继承知识点总结。介绍封装概念与目的、属性声明语法、get/set访问器、访问修饰符（public/private/protected/internal/protected internal）、继承概念与原则、派生类声明、base关键字、继承中的构造函数与析构函数，含完整代码示例。
keywords: [C#, 封装, 继承, 属性, get, set, 访问修饰符, public, private, protected, internal, 派生类, base关键字, 构造函数, 对口升学]
sidebar_label: 任务一 类的封装与继承
sidebar_position: 1
slug: /csharp/proj8/task1-encapsulation-inheritance
tags: [C#, 项目八, 任务一, 对口升学]
---

## 知识点

### 1.什么是封装？

封装是用一个框架把数据和代码组合在一起，形成一个对象，即将对象的属性和行为封装起来，而将对象封装起来的载体就是类。类通常对客户隐藏其实现细节，这就是封装的思想。

封装有两个方面的含义：
1. 将有关的数据和操作代码封装在一个对象中，形成一个基本单位，各个对象之间相对独立，互不干扰。
2. 将对象中某些部分对外部隐藏，即隐藏其内部细节，只留下少量接口，以便与外界联系，称为**信息隐藏**。

### 2.封装的主要目的是什么？

1. **数据隐藏**：将数据声明为私有成员，只允许通过类的公共方法来访问和修改数据，保护数据的一致性和安全性。
2. **实现抽象**：隐藏内部实现细节，提供简单的公共接口供其他对象使用。
3. **代码复用**：将相关数据和操作封装为一个类，避免重复编写相似代码。
4. **提高可维护性**：将对象的状态和行为组织在一起，提供良好的抽象界面，方便修改和扩展。

---

### 子任务一 属性封装

### 3.属性的声明语法是什么？

```
[属性修饰符] 类型 成员名
{
    get    // 读访问器
    {
        // 访问器语句块
    }
    set    // 写访问器
    {
        // 访问器语句块
    }
}
```

- **get访问器**：返回值类型与属性类型相同，必须包含 `return` 语句。
- **set访问器**：没有返回值，有一个隐式参数 `value`，类型与属性类型相同。
- 同时包含get和set：**读写属性**；只有get：**只读属性**；只有set：**只写属性**。

### 4.C#有哪些访问修饰符？

| 访问修饰符 | 说明 |
|---|---|
| public | 公共访问，任何代码都可访问 |
| private | 私有访问，只能在定义它的类内部访问 |
| protected | 受保护访问，只有该类和其子类可以访问 |
| internal | 内部访问，同一程序集中的代码可以访问 |
| protected internal | 受保护内部访问，同一程序集或子类可以访问 |

### 5.属性封装示例：通过封装类求两个数的和

```csharp
class MyClass
{
    private int x = 0;
    private int y = 0;
    public int X
    {
        get { return x; }
        set { x = value; }
    }
    public int Y
    {
        get { return y; }
        set { y = value; }
    }
    public int Add()
    {
        return x + y;
    }
}
class Program
{
    static void Main(string[] args)
    {
        MyClass myclass = new MyClass();
        myclass.X = 3;
        myclass.Y = 5;
        Console.WriteLine(myclass.Add());    // 输出：8
        Console.ReadLine();
    }
}
```

---

### 子任务二 类的继承

### 6.什么是继承？

继承是父类和子类之间共享数据和方法的机制。被继承的类称为**父类（基类）**，新定义的类称为**派生类（子类）**。子类拥有父类的所有成员，还可以扩展自己的特有成员。

C#中**只支持单继承**，不支持多重继承，即一次只允许继承一个类。

### 7.类的继承遵循哪些原则？

1. 派生类只能从一个类中继承，即**单一继承**。
2. 派生类自然继承基类的成员，但**不能继承基类的构造函数**。
3. 类的继承可以**传递**。例如类C继承类B，类B继承类A，则类C具有类B和类A的成员。

### 8.如何声明派生类？

```
[访问修饰符] class 类名 : 基类名
{
    // 类的成员
}
```

### 9.base关键字有什么作用？

`base` 关键字代表父类对象，用法与 `this` 类似：

```csharp
base.property;      // 调用父类的属性
base.method();      // 调用父类的方法
```

> 注意：如果要在子类中使用base关键字调用父类的属性或方法，父类的属性和方法必须定义为public或protected类型。从静态方法中使用base关键字是错误的。

### 10.base关键字调用基类方法示例

```csharp
public class Person
{
    protected string Phone = "0335-8888888";
    protected string Name = "李明";
    public void GetInfoPerson()
    {
        Console.WriteLine("Phone: {0}", Phone);
        Console.WriteLine("Name: {0}", Name);
    }
}
class Employee : Person
{
    public string ID = "ABC567EFG";
    public void GetInfoEmployee()
    {
        base.GetInfoPerson();    // 调用基类的方法
        Console.WriteLine("Employee ID: {0}", ID);
    }
}
```

### 11.继承中的构造函数与析构函数执行顺序是什么？

- **构造函数**：派生类的构造函数会隐式调用基类的无参构造函数。C#会根据层次结构找到最顶层的基类，依次调用各级构造函数（从基类到派生类）。
- **析构函数**：执行顺序正好与构造函数相反（从派生类到基类）。

### 12.继承示例：Pad继承Computer

```csharp
class Computer
{
    public string screen = "液晶显示屏";
    public void Startup()
    {
        Console.WriteLine("电脑正在开机，请等待..");
    }
}
class Pad : Computer
{
    public string battery = "5000毫安电池";
}
class Program
{
    static void Main(string[] args)
    {
        Computer pc = new Computer();
        Console.WriteLine("Computer的屏幕是：" + pc.screen);
        pc.Startup();

        Pad ipad = new Pad();
        Console.WriteLine("Pad的屏幕是：" + ipad.screen);     // 继承自父类
        Console.WriteLine("Pad的电池是：" + ipad.battery);     // 子类自己的成员
        ipad.Startup();                                         // 继承自父类
        Console.ReadLine();
    }
}
```

**运行结果：**

```
Computer的屏幕是：液晶显示屏
电脑正在开机，请等待..
Pad的屏幕是：液晶显示屏
Pad的电池是：5000毫安电池
电脑正在开机，请等待..
```
