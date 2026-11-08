---
title: 任务四 委托
description: 算法与程序设计《C#》项目八 面向对象编程 任务四 委托知识点总结。介绍委托概念与特点、delegate关键字声明委托、委托实例化与调用、多播委托（+/-运算符）、匿名方法，含完整代码示例和运行结果。
keywords: [C#, 委托, delegate, 多播委托, 匿名方法, Invoke, 方法引用, 对口升学]
sidebar_label: 任务四 委托
sidebar_position: 4
slug: /csharp/proj8/task4-delegate
tags: [C#, 项目八, 任务四, 对口升学]
---

## 知识点

### 1.什么是委托？

委托（Delegate）是一种动态调用方法的类型，属于引用型。委托对象的引用中存放的不是对数据的引用，而是存放**对方法的引用**。通过使用委托把方法的引用封装在委托对象中，然后将委托对象传递给调用引用方法的代码。

委托是对方法的抽象和封装，类似类对对象的抽象和封装。一个完整的方法具有名字、返回值和参数列表，用来引用方法的委托也要求必须具有同样的参数和返回值。

### 2.委托有哪些特点？

1. 委托是完全面向对象的，是安全的数据类型。
2. 委托允许将方法作为参数进行传递。
3. 委托可用于定义回调方法。
4. 委托可以把多个方法链接在一起，在事件触发时可同时启动多个事件处理程序。
5. 委托签名不需要与方法精确匹配。

### 3.如何声明委托？

```csharp
[访问修饰符] delegate 返回类型 委托名称([参数列表])
```

说明：
- 定义委托要使用关键字 `delegate`。
- 返回值类型是指动态调用方法的返回值类型。
- 参数列表是动态调用方法的参数列表，无参数时省略。

与委托类型相匹配的方法必须满足两个条件：
1. 具有相同的签名（相同的参数数目、类型、顺序、修饰符）。
2. 具有相同的返回值类型。

### 4.委托声明示例

```csharp
public delegate int Calculate(int x, int y);
```

表示声明了一个名为Calculate的委托，可以用来引用任何具有两个int型参数且返回值也是int型的方法。

### 5.委托的类结构是怎样的？

```
System.Object
    ↑
System.Delegate
    ↑
System.MulticastDelegate
    ↑
自定义委托类型
```

任何自定义委托类型都直接继承自 `System.MulticastDelegate` 类，而 `System.Delegate` 类是所有委托类的父类。

> 注意：只有系统和编译器才能从Delegate类或MulticastDelegate类派生，自定义类无法直接继承这两个类。

### 6.如何实例化和调用委托？

实例化委托：

```csharp
委托类型 委托变量名 = new 委托型构造函数(委托要引用的方法名)
```

示例：

```csharp
// 定义方法
int Multiply(int x, int y) { return x * y; }
int Divide(int x, int y) { return x / y; }

// 实例化委托
Calculate a = new Calculate(Multiply);
Calculate b = new Calculate(Divide);

// 通过委托调用方法
Calculate calc = new Calculate(Multiply);
int result = calc(3, 7);    // 结果为21
```

> 注意：委托对象是不可变的。创建后所能关联的方法便固定了。委托既可以引用静态方法，也可以引用实例方法。

### 7.什么是多播委托？

多播委托又称合并委托。委托对象可以使用 `+` 运算符进行合并（只有相同类型的委托才可以合并），合并后的委托被调用时会以合并时的顺序依次执行。也可以使用 `-` 运算符从多播委托删除指定的组件委托。

### 8.多播委托示例

```csharp
class Example
{
    delegate void CustomDel(string s);

    static void Hello(string s)
    {
        Console.WriteLine("Hello" + s);
    }
    static void Goodbye(string s)
    {
        Console.WriteLine("Goodbye" + s);
    }

    static void Main(string[] args)
    {
        CustomDel hiDel, byeDel, multiDel, multiMinusHiDel;
        hiDel = Hello;
        byeDel = Goodbye;
        string s = "小明";
        hiDel(s);
        byeDel(s);

        Console.WriteLine("===演示多播委托的使用===");
        multiDel = hiDel + byeDel;              // 使用+合并委托
        multiMinusHiDel = multiDel - byeDel;    // 使用-删除委托
        multiDel(s);
        multiMinusHiDel(s);
        Console.ReadLine();
    }
}
```

**运行结果：**

```
Hello小明
Goodbye小明
===演示多播委托的使用===
Hello小明
Goodbye小明
Hello小明
```

### 9.什么是匿名方法？

匿名方法是没有名称只有主体的方法，提供了一种传递代码块作为委托参数的技术。不需要指定返回值类型，从方法主体内的return语句推断。

语法格式：

```csharp
delegate([参数列表])
{
    // 代码内容
}
```

匿名方法只能在定义它们的上下文中被调用，可以访问包含它们的方法的局部变量和类成员。

### 10.委托调用匿名方法和命名方法示例

```csharp
delegate void DelOutput(string s);    // 自定义委托类型

class Program
{
    static void NamedMethod(string k)    // 与委托匹配的命名方法
    {
        Console.WriteLine(k);
    }

    static void Main(string[] args)
    {
        // 委托引用匿名方法
        DelOutput del = delegate(string j)
        {
            Console.WriteLine(j);
        };
        del.Invoke("匿名方法被调用");     // 调用匿名方法

        Console.Write("\n");

        del = NamedMethod;               // 委托绑定到命名方法
        del("命名方法被调用");             // 调用命名方法
        Console.ReadLine();
    }
}
```

**运行结果：**

```
匿名方法被调用

命名方法被调用
```
