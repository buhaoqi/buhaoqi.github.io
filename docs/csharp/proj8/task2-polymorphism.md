---
title: 任务二 多态
description: 算法与程序设计《C#》项目八 面向对象编程 任务二 多态知识点总结。介绍多态概念、使用new关键字隐藏基类成员、虚方法virtual与重写override实现多态、方法重载实现多态，含完整代码示例和运行结果。
keywords: [C#, 多态, new关键字, virtual, override, 虚方法, 重写, 方法重载, 对口升学]
sidebar_label: 任务二 多态
sidebar_position: 2
slug: /csharp/proj8/task2-polymorphism
tags: [C#, 项目八, 任务二, 对口升学]
---

## 知识点

### 1.什么是多态？

多态（Polymorphism）的字面意思是事物有多种形态。多态性是面向对象程序设计的一个重要特征，它体现为一个派生类对基类的特征和行为的改变。

多态允许同一操作在不同的对象上产生不同的行为，提供了灵活性和扩展性。多态性可以通过方法重写、方法重载和接口的使用来实现。

C#提供了两种选择来实现多态：
1. 使用新的派生成员替换基类成员（new关键字）
2. 重写虚拟的基类成员（virtual/override关键字）

---

### 2.如何使用new关键字实现多态？

使用 `new` 关键字定义与基类中同名的成员，即可替换基类成员。new操作发生在程序**编译时**。

```csharp
class Animal          // 基类
{
    public void Eat()
    {
        Console.WriteLine("动物要吃东西！");
    }
}
class Dog : Animal    // 派生类
{
    public new void Eat()    // 使用new重新定义方法
    {
        Console.WriteLine("狗狗要吃骨头！");
    }
}
```

调用：

```csharp
Dog d = new Dog();
d.Eat();    // 输出：狗狗要吃骨头！
```

---

### 3.如何使用虚方法重写实现多态？

在基类中使用 `virtual` 关键字声明虚方法，在派生类中使用 `override` 关键字重写。override操作发生在程序**运行时**。

基类中声明虚方法：

```csharp
public virtual 返回值类型 方法名称([参数列表])
{
    // 方法体
}
```

派生类中重写虚方法：

```csharp
public override 返回值类型 方法名称([参数列表])
{
    // 方法体
}
```

> 注意：基类与派生类中的方法名称与参数列表必须完全一致。

### 4.virtual和override使用的注意事项

1. 字段不能是虚拟的，只有方法、属性、事件和索引器才可以是虚拟的。
2. 使用virtual修饰符后，不允许再使用static、abstract或override修饰符。
3. 派生类对象即使被强制转换为基类对象，所引用的仍然是派生类的成员。
4. 派生类可以通过密封来停止虚拟继承，使用 `sealed override` 声明。

### 5.虚方法重写示例：交通工具的多态

```csharp
class Program
{
    static void Main(string[] args)
    {
        Vehicle v = new Vehicle();
        Train t = new Train();
        Car c = new Car();
        Vehicle[] vs = { v, t, c };    // 使用基类和派生类对象创建数组
        v.Name = "交通工具";
        t.Name = "火车";
        c.Name = "汽车";
        vs[0].Move();
        vs[1].Move();
        vs[2].Move();
        Console.ReadLine();
    }
}
class Vehicle
{
    string name;
    public string Name { get; set; }
    public virtual void Move()    // 虚方法
    {
        Console.WriteLine("{0}可以移动", Name);
    }
}
class Train : Vehicle
{
    public override void Move()    // 重写虚方法
    {
        Console.WriteLine("{0}在铁轨上行驶", Name);
    }
}
class Car : Vehicle
{
    public override void Move()    // 重写虚方法
    {
        Console.WriteLine("{0}在公路上行驶", Name);
    }
}
```

**运行结果：**

```
交通工具可以移动
火车在铁轨上行驶
汽车在公路上行驶
```

---

### 6.如何使用方法重载实现多态？

通过方法重载，在同一个类中定义多个具有相同名称但参数列表不同的方法。根据实际参数的类型，调用相应的方法。

```csharp
class Calculator
{
    public int Add(int num1, int num2)
    {
        return num1 + num2;
    }
    public double Add(double num1, double num2)
    {
        return num1 + num2;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Calculator calculator = new Calculator();
        int result1 = calculator.Add(10, 5);
        Console.WriteLine("Result 1: " + result1);       // 输出：15
        double result2 = calculator.Add(3.14, 2.71);
        Console.WriteLine("Result 2: " + result2);       // 输出：5.85
        Console.ReadLine();
    }
}
```

### 7.三种多态实现方式对比

| 实现方式 | 关键字 | 发生时机 | 特点 |
|---|---|---|---|
| new关键字隐藏 | new | 编译时 | 完全替换基类成员 |
| 虚方法重写 | virtual/override | 运行时 | 基类定义虚方法，子类重写实现 |
| 方法重载 | 无（同名不同参数） | 编译时 | 同一类中同名方法不同参数列表 |
