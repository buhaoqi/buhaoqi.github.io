---
title: 任务四 同步实验
description: 算法与程序设计《C#》项目七 面向对象基础 任务四 同步实验。包含4道实验题：定义学生类输出姓名年龄、定义图书信息类控制借用数量、学科类构造函数重载修改默认科目、学生录取状态与分数显示，培养面向对象编程综合能力。
keywords: [C#, 同步实验, 类, 对象, 构造函数, 属性, 字段, 面向对象, 对口升学]
sidebar_label: 任务四 同步实验
sidebar_position: 3
slug: /csharp/proj7/task4-exercises
tags: [C#, 项目七, 任务四, 对口升学]
---

## 知识点

### 实验一 定义学生类并输出姓名和年龄

**题目要求：**

定义一个学生类，在该类中定义学生的姓名及年龄字段并输出。

**参考代码：**

```csharp
public class Student
{
    private string name;
    private int age;

    // 构造函数
    public Student(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    // 输出学生信息的方法
    public void DisplayInfo()
    {
        Console.WriteLine("姓名：" + name + "，年龄：" + age);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Student stu = new Student("张三", 18);
        stu.DisplayInfo();
        Console.ReadLine();
    }
}
```

**运行结果：**

```
姓名：张三，年龄：18
```

---

### 实验二 定义图书信息类控制借用数量

**题目要求：**

定义一个图书信息类，在该类中定义图书的借用剩余数量（范围控制在0~30之间）。

**参考代码：**

```csharp
public class Book
{
    private int remainingCount;    // 借用剩余数量

    // 使用属性控制数量范围在0~30之间
    public int RemainingCount
    {
        get { return remainingCount; }
        set
        {
            if (value >= 0 && value <= 30)
            {
                remainingCount = value;
            }
            else
            {
                Console.WriteLine("借用剩余数量必须在0~30之间！");
            }
        }
    }

    // 构造函数
    public Book(int count)
    {
        RemainingCount = count;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Book book = new Book(25);
        Console.WriteLine("借用剩余数量：" + book.RemainingCount);

        book.RemainingCount = 35;    // 超出范围
        Console.WriteLine("借用剩余数量：" + book.RemainingCount);

        book.RemainingCount = 15;    // 正常范围
        Console.WriteLine("借用剩余数量：" + book.RemainingCount);
        Console.ReadLine();
    }
}
```

**运行结果：**

```
借用剩余数量：25
借用剩余数量必须在0~30之间！
借用剩余数量：25
借用剩余数量：15
```

---

### 实验三 学科类构造函数重载

**题目要求：**

计算机专业默认科目为C#，但选择专业时可以将默认科目设置为计算机基础。编写学科类，无参数构造函数使用默认专业，利用有参构造函数修改计算机专业的默认科目。

**参考代码：**

```csharp
public class Subject
{
    private string defaultSubject;

    // 无参构造函数：使用默认科目
    public Subject()
    {
        defaultSubject = "C#";
    }

    // 有参构造函数：修改默认科目
    public Subject(string subject)
    {
        defaultSubject = subject;
    }

    public void DisplaySubject()
    {
        Console.WriteLine("当前科目：" + defaultSubject);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Subject sub1 = new Subject();           // 使用默认科目
        sub1.DisplaySubject();

        Subject sub2 = new Subject("计算机基础"); // 修改默认科目
        sub2.DisplaySubject();
        Console.ReadLine();
    }
}
```

**运行结果：**

```
当前科目：C#
当前科目：计算机基础
```

---

### 实验四 学生录取状态与分数显示

**题目要求：**

查看学生是否被高校录取并显示分数。（0为被录取，分数：750）

**参考代码：**

```csharp
public class Student
{
    private string name;
    private int score;
    private int admissionStatus;    // 0为被录取

    public Student(string name, int score, int status)
    {
        this.name = name;
        this.score = score;
        this.admissionStatus = status;
    }

    public void CheckAdmission()
    {
        if (admissionStatus == 0)
        {
            Console.WriteLine(name + "已被录取，分数：" + score);
        }
        else
        {
            Console.WriteLine(name + "未被录取，分数：" + score);
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        Student stu1 = new Student("李小明", 750, 0);
        stu1.CheckAdmission();

        Student stu2 = new Student("王小红", 680, 1);
        stu2.CheckAdmission();
        Console.ReadLine();
    }
}
```

**运行结果：**

```
李小明已被录取，分数：750
王小红未被录取，分数：680
```
