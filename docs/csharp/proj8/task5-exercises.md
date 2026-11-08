---
title: 任务五 同步实验
description: 算法与程序设计《C#》项目八 面向对象编程 任务五 同步实验。包含7道实验题：用户信息封装输出、查找字符串中的数字、继承描述Computer和Pad、继承表现平板电脑关系、重写虚方法实现运算、接口模拟上课场景、多播委托调用，培养面向对象编程综合能力。
keywords: [C#, 同步实验, 封装, 继承, 多态, 接口, 委托, 面向对象, 对口升学]
sidebar_label: 任务五 同步实验
sidebar_position: 5
slug: /csharp/proj8/task5-exercises
tags: [C#, 项目八, 任务五, 对口升学]
---

## 知识点

### 实验一 用户信息的封装及输出

**题目要求：**

定义一个User类，其中包含用户的姓名、年龄和性别，在类中定义有参数的构造函数，对用户的信息进行初始化，然后定义一个ShowInfo方法，输出用户信息。

**参考代码：**

```csharp
public class User
{
    private string name;
    private int age;
    private string sex;

    public User(string name, int age, string sex)
    {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public void ShowInfo()
    {
        Console.WriteLine("姓名：" + name + "，年龄：" + age + "，性别：" + sex);
    }
}

class Program
{
    static void Main(string[] args)
    {
        User user = new User("张三", 20, "男");
        user.ShowInfo();
        Console.ReadLine();
    }
}
```

---

### 实验二 使用面向对象思想查找字符串中的所有数字

**题目要求：**

查找字符串中的所有数字时，首先需要将所有数字存储到一个字符串数组中，然后循环遍历要在其中查找数字的字符串，如果与定义的字符串数组中的某一项相匹配，则记录该项。

**参考代码：**

```csharp
public class NumberFinder
{
    public void FindNumbers(string input)
    {
        string[] digits = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };
        string result = "";
        foreach (char c in input)
        {
            foreach (string d in digits)
            {
                if (c.ToString() == d)
                {
                    result += c;
                    break;
                }
            }
        }
        Console.WriteLine("字符串中的数字：" + result);
    }
}

class Program
{
    static void Main(string[] args)
    {
        NumberFinder finder = new NumberFinder();
        finder.FindNumbers("abc123def456");
        Console.ReadLine();
    }
}
```

---

### 实验三 通过继承描述Computer和Pad

**题目要求：**

在Computer类中定义一个Name属性，在Pad类中使用base关键字访问父类中的Name属性，并为其赋值，在重写的sayHello方法中使用base.Name输出电脑的类型。

**参考代码：**

```csharp
public class Computer
{
    public string Name { get; set; }

    public virtual void SayHello()
    {
        Console.WriteLine("我是" + Name);
    }
}

public class Pad : Computer
{
    public override void SayHello()
    {
        base.Name = "平板电脑";
        Console.WriteLine("我是" + base.Name);
    }
}
```

---

### 实验四 使用继承表现平板电脑和计算机的关系

**题目要求：**

创建一个计算机类Computer，Computer类中有屏幕属性Screen和开机方法Startup()；Computer类有一个子类Pad（平板电脑）类，Pad类还有电池属性Battery，使用继承表现Pad和Computer的关系。

**参考代码：**

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
        Pad ipad = new Pad();
        Console.WriteLine("Pad的屏幕是：" + ipad.screen);
        Console.WriteLine("Pad的电池是：" + ipad.battery);
        ipad.Startup();
        Console.ReadLine();
    }
}
```

---

### 实验五 通过重写虚方法实现两个数相加或相乘

**题目要求：**

首先在Operation类中定义一个虚方法Operation，用于实现两个数相加；然后创建一个子类Addition，继承自Operation类，在子类中重写虚方法Operation，实现两个数相乘。

**参考代码：**

```csharp
public class Operation
{
    public virtual int Calculate(int a, int b)
    {
        return a + b;    // 基类：相加
    }
}

public class Multiplication : Operation
{
    public override int Calculate(int a, int b)
    {
        return a * b;    // 子类重写：相乘
    }
}

class Program
{
    static void Main(string[] args)
    {
        Operation op1 = new Operation();
        Console.WriteLine("相加结果：" + op1.Calculate(3, 5));    // 输出：8

        Operation op2 = new Multiplication();
        Console.WriteLine("相乘结果：" + op2.Calculate(3, 5));    // 输出：15
        Console.ReadLine();
    }
}
```

---

### 实验六 使用接口模拟老师上课的场景

**题目要求：**

创建一个IPerson接口，定义姓名、年龄两个属性，定义说话、工作两个行为，再创建Student类和Teacher类，两者继承IPerson接口并重写各自的属性和行为。

**参考代码：**

```csharp
interface IPerson
{
    string Name { get; set; }
    int Age { get; set; }
    void Speak();
    void Work();
}

class Teacher : IPerson
{
    public string Name { get; set; }
    public int Age { get; set; }
    public void Speak()
    {
        Console.WriteLine(Name + "老师开始上课");
    }
    public void Work()
    {
        Console.WriteLine(Name + "老师正在讲课");
    }
}

class Student : IPerson
{
    public string Name { get; set; }
    public int Age { get; set; }
    public void Speak()
    {
        Console.WriteLine(Name + "同学回答问题");
    }
    public void Work()
    {
        Console.WriteLine(Name + "同学正在听课");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Teacher teacher = new Teacher { Name = "Peter", Age = 35 };
        Student student = new Student { Name = "Mike", Age = 18 };
        teacher.Speak();
        teacher.Work();
        student.Speak();
        student.Work();
        Console.ReadLine();
    }
}
```

---

### 实验七 巩固委托的调用

**题目要求：**

给定下面的声明代码，请编写程序将委托b加入a的调用列表中。

```csharp
delegate void MyDelegate();
class Test
{
    MyDelegate a, b;
    public void Oper()
    {
        a = new MyDelegate(Func1);
        b = new MyDelegate(Func2);
    }
    void Func1() {}
    void Func2() {}
}
```

**参考代码：**

```csharp
delegate void MyDelegate();

class Test
{
    MyDelegate a, b;

    public void Oper()
    {
        a = new MyDelegate(Func1);
        b = new MyDelegate(Func2);
        a = a + b;    // 将b加入a的调用列表（多播委托）
        a();          // 依次调用Func1和Func2
    }

    void Func1()
    {
        Console.WriteLine("Func1被调用");
    }
    void Func2()
    {
        Console.WriteLine("Func2被调用");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Test test = new Test();
        test.Oper();
        Console.ReadLine();
    }
}
```

**运行结果：**

```
Func1被调用
Func2被调用
```
