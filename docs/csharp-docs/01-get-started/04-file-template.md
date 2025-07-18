---
noteId: "795b03605fc111f0a138bb2f2278db69"
tags: []

---

大家好！这里是不好奇编程，欢迎观看《C#入门教程》第4课。

本期视频的任务是：理解Program.cs文件模板

---

## 一、Program.cs 是什么？

当你使用 Visual Studio 创建一个控制台应用项目时，它会自动生成一个叫做 `Program.cs` 的文件。

这个文件是整个程序的“**入口点**”，是 C# 控制台程序的起点。

也就是说，程序从哪开始执行？就是从这个 `Program.cs` 文件开始！

---

## 二、Program.cs文件内容解析

Program.cs文件中的这11行代码展示的是“Hello World”程序。

Hello World程序实现的功能非常简单：就是从程序内部向外部控制台输出一句：Hello World。

这段程序也几乎是每个初学者编写的第一段程序。

Hello World程序的主要意义在于：检测运行环境是否工作正常以及了解C#的基本语法。

现在，我们的任务是记住Program.cs 文件中的这11行代码，理解每行代码的含义。

为了展示的更加清晰，我先删除全部代码，然后手动输入，并逐行解读，当然我会做一些修改。

首先，再次明确我们编写的目标是向外部控制台输出一句“Hello World”

如何输出呢？我们可以借助.NET框架的类库中的System.Console.WriteLine()方法完成这件事。

System.Console.WriteLine("Hello World");

但是C#的语法要求我们：如果你编写代码，所有的代码必须写在类中，并且类的内部还必须定义一个Main()方法，

所以我们的代码需要加上两层外壳：

接下来，我会使用双斜线为每行添加注释说明，C#的编译器会忽略掉双斜线注释的内容。

```c#
//class：定义一个名叫Program的类，定义类可以理解为定义一个程序结构块。类名Program建议与程序入口文件名保持一致，不是必须，但你可以把它当作必须。
class Program
{//花括号：定义代码块
    //Main()定义程序执行的入口，要注意的是：必须写Main。static表示静态方法，void表示不需返回值。
    //后面两点如果暂时不理解也没关系，暂时照抄即可。
    static void Main()
    {
        //借助.NET框架提供的System类的Console类的WriteLine()方法向控制台输出Hello World
        System.Console.WriteLine("Hello World");
    }
}
```

然后按下 Ctrl + F5，重新运行程序。

这就好比：

![程序结构块](./images/class-unit.png)

## 三、Program.cs 的执行流程

执行流程很简单：

1. 运行程序时，从 `Main()` 方法开始；
2. 执行 `Console.WriteLine("Hello World!");`；
3. 在命令行窗口中输出一行：`Hello World!`

这就完成了第一个控制台程序的运行。

---


## 四、文件模板的含义

`Program.cs` 文件是一个**模板文件**：

* 它告诉我们一个控制台程序必须有哪些基本结构；
* 它是你每次新建控制台应用时，Visual Studio 自动为你创建的代码框架；
* 你可以在这个模板上进行扩展，比如添加更多的 `方法`、`类`、`逻辑判断`、`循环结构` 等等。

理解这个模板的结构，对于学习后面的内容——**方法、类、流程控制、数组、对象**等——非常重要！

---

## ✅ 总结一下

今天我们学习了：

* 什么是 `Program.cs` 文件？
* 里面每一行代码的含义是什么？
* `Main()` 是程序的入口点；

---

## 编写Hello World程序

```csharp
//导入System命名空间。
using System;

//声明一个名为`HelloWorld`的命名空间，避免命名冲突。
namespace HelloWorld
{
    //声明一个名为Program的class(类)。
    class Program
    {
        //Main()方法：程序启动时自动执行的方法
        static void Main( )
        {
            //向控制台打印(输出)"Hello World!"
            Console.WriteLine("Hello World!"); 
        }
    }
}
```
## 文件结构说明

1.**using System**：System命名空间包含基础类和数据类型，导入后可以直接使用。

注意：若不使用 `using System`，则需写全称： 

```c#
System.Console.WriteLine("Hello!");
```

2.**namespace**：即命名空间，用于组织代码，避免命名冲突。

- 命名空间是一个拥有独立名字的独立区域。
- 不同的命名空间下可以出现相同的相同名称(类名、函数名、变量名)（类比教室）
- 命名空间是一种组织代码的机制（方式方法），避免命名冲突。（类比文件夹）
- 命名空间是 C# 的代码分类系统，相当于“姓氏+名字”中的姓氏。

3.**class声明**

定义一个名为`Program`的类组织代码，避免命名冲突。"类"是面向对象编程的基本单元，类名通常与文件名一致（Program.cs）。这是程序的主要执行类，花括号表示`Program`类的代码块开始。

4.**Main()函数**

```csharp
static void Main(){
    Console.WriteLine("Hello World");
}
```

- `static`：表示方法不需要类实例即可调用
- `void`：表示方法不返回值
- `Main`：程序的唯一入口点,这是程序启动时自动执行的方法
- 花括号表示Main方法的代码块开始和结束
- 在花括号里应该放置程序的主要逻辑

## 程序执行流程

1. 程序启动
2. 查找`Main`方法
3. 执行函数体内的代码


## C#的最新版本
2024年11月，C#的最新稳定版本C#13发布。

| 项目                | Visual Studio 2019                     | Visual Studio 2022                          |
|---------------------|----------------------------------------|---------------------------------------------|
| **语法是否兼容**    | ✅ 是                                  | ✅ 是                                       |
| **默认代码风格**    | 传统风格（显式 `Main`）                | 简化风格（顶级语句，隐式`Main`）                        |
| **C# 语言版本**     | 默认 C# 8.0                            | 默认 C# 10/11                               |
| **能否互相运行**    | ✅ 2019 可运行 2022 的代码（需调整）   | ✅ 2022 可运行 2019 的代码                  |

## Visual Studio 2019模板风格

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```
**特点**：

- 显式定义 `namespace`、`class` 和 `Main` 方法。
- 符合传统的 C# 项目结构，适合初学者理解程序入口点。

## Visual Studio 2022模板风格

```csharp
Console.WriteLine("Hello World!");
       
```
**特点**：

- 使用 **C# 9 引入的顶级语句**（Top-level statements），无需显式定义 `namespace`、`class` 或 `Main` 方法。
- 代码更简洁，适合快速编写小程序。
- 编译器会自动生成隐藏的 `Main` 方法。

## 结论

1.无论使用 **Visual Studio 2019** 还是 **Visual Studio 2022** , 它们的**核心语法在本质上是相同的,风格是不同的**。

2.经典写法在 VS2022 中仍然有效。

| 代码风格          | VS2019 支持 | VS2022 支持 |
|-------------------|-------------|-------------|
| **经典写法**      | ✅ 直接支持 | ✅ 直接支持 |
| **顶级语句写法**  | ⚠️ 需 C# 9+ | ✅ 默认支持 |

3.如果你是初学者，从传统写法 (`class` + `Main`) 学起更易理解程序结构；熟练后可用顶级语句提升效率。两者没有优劣，只有适用场景不同。


## 练习

1. Hello World程序写三遍；
2. 讲出Hello World程序的每一行代码的含义



```csharp
// 示例项目：StudentManagerApp（控制台版本）
// 项目结构（单项目，分文件夹）：
// - Models/Student.cs
// - Services/StudentService.cs
// - Data/StudentRepository.cs
// - Utils/InputHelper.cs
// - Program.cs（入口）

// 文件：Models/Student.cs
namespace StudentManagerApp.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
    }
}

// 文件：Services/StudentService.cs
using StudentManagerApp.Models;
using StudentManagerApp.Data;

namespace StudentManagerApp.Services
{
    public class StudentService
    {
        private readonly StudentRepository _repository = new();

        public void AddStudent(Student student)
        {
            _repository.Add(student);
        }

        public List<Student> GetAllStudents()
        {
            return _repository.GetAll();
        }
    }
}

// 文件：Data/StudentRepository.cs
using StudentManagerApp.Models;

namespace StudentManagerApp.Data
{
    public class StudentRepository
    {
        private readonly List<Student> _students = new();

        public void Add(Student student)
        {
            _students.Add(student);
        }

        public List<Student> GetAll()
        {
            return _students;
        }
    }
}

// 文件：Utils/InputHelper.cs
namespace StudentManagerApp.Utils
{
    public static class InputHelper
    {
        public static int ReadInt(string prompt)
        {
            Console.Write(prompt);
            while (!int.TryParse(Console.ReadLine(), out int result))
            {
                Console.Write("请输入有效的整数：");
            }
            return result;
        }

        public static string ReadString(string prompt)
        {
            Console.Write(prompt);
            return Console.ReadLine() ?? "";
        }
    }
}

// 文件：Program.cs
using StudentManagerApp.Models;
using StudentManagerApp.Services;
using StudentManagerApp.Utils;

namespace StudentManagerApp
{
    class Program
    {
        static void Main()
        {
            var service = new StudentService();
            while (true)
            {
                Console.WriteLine("\n--- 学生管理系统 ---");
                Console.WriteLine("1. 添加学生");
                Console.WriteLine("2. 查看所有学生");
                Console.WriteLine("0. 退出");

                string choice = Console.ReadLine();
                switch (choice)
                {
                    case "1":
                        string name = InputHelper.ReadString("请输入学生姓名：");
                        int age = InputHelper.ReadInt("请输入学生年龄：");
                        var student = new Student { Id = Guid.NewGuid().GetHashCode(), Name = name, Age = age };
                        service.AddStudent(student);
                        Console.WriteLine("学生添加成功。");
                        break;
                    case "2":
                        var students = service.GetAllStudents();
                        Console.WriteLine("\n学生列表：");
                        foreach (var s in students)
                        {
                            Console.WriteLine($"ID: {s.Id}, 姓名: {s.Name}, 年龄: {s.Age}");
                        }
                        break;
                    case "0":
                        return;
                    default:
                        Console.WriteLine("无效的选择，请重试。");
                        break;
                }
            }
        }
    }
}
```