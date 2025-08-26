---
noteId: "5a68cc807c5411f0ac5b8336029471d8"
tags: []

---

## **开场**  
“大家好！欢迎观看《C#初学者教程》的第6.2.4课《构造函数》。

本期视频的知识点：

1. 构造函数的由来
2. 构造函数是什么


## 构造函数的由来

我们先从一个熟悉的场景说起。假设我们定义了一个"学生类"，包含姓名、年龄这些属性：

```csharp
class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string StudentId { get; set; }
}
```

当我们创建学生对象时，通常会这样写：

```csharp
Student student = new Student();
student.Name = "张三";
student.Age = 18;
student.StudentId = "2023001";
```

这段代码没问题，但如果我们每次创建学生对象都要重复这几步赋值操作，不仅麻烦，还可能因为忘记给某个重要属性赋值而导致错误。比如，如果忘记设置学号，这个学生对象就是不完整的。

有没有办法在创建对象的同时，就完成这些必要的初始化工作呢？当然有，这就是构造函数的作用！


## 构造函数是什么


在C#中，构造函数是一种特殊的方法，专门用于对象的初始化（如设置初始值、分配资源等）。当我们用`new`关键字创建对象时，构造函数会自动执行，确保对象在使用前处于合理的初始状态。


构造函数的基本概念

- **定义**：构造函数是与类同名的特殊方法，没有返回值（连`void`都不能写）。
- **作用**：在创建对象时自动执行，完成对象的初始化工作（如给字段/属性赋初始值、建立数据库连接等）。
- **触发时机**：每次用`new`关键字创建类的实例时，都会调用对应的构造函数。

构造函数是类中一种特殊的方法，它的名字和类名完全相同，而且没有返回值。当我们使用`new`关键字创建对象时，构造函数会被自动调用，帮我们完成对象的初始化工作。

我们来给Student类添加一个构造函数：

```csharp
class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string StudentId { get; set; }
    
    // 构造函数
    public Student(string name, int age, string studentId)
    {
        Name = name;
        Age = age;
        StudentId = studentId;
    }
}
```

现在，当我们创建学生对象时，就可以在创建的同时完成赋值：

```csharp
Student student = new Student("张三", 18, "2023001");
```

这样是不是简洁多了？而且通过构造函数，我们可以强制要求创建对象时必须提供必要的信息，避免了忘记赋值的问题。

## 默认构造函数

默认构造函数

如果类中没有显式定义任何构造函数，C#编译器会自动生成一个**无参数的默认构造函数**，它什么都不做，但保证对象能被正常创建。

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // 编译器自动生成的默认构造函数（隐式存在）
    // public Student() { }
}

// 使用默认构造函数创建对象
Student stu = new Student(); // 调用默认构造函数
stu.Name = "张三";
stu.Age = 18;
```

可能有同学会问，如果我没有手动定义构造函数，之前的代码为什么还能正常工作呢？那是因为当一个类中没有定义任何构造函数时，C#编译器会自动为我们生成一个无参数的默认构造函数。就像这样：

```csharp
public Student()
{
    // 空实现
}
```

## 自定义构造函数
当需要在创建对象时就初始化数据（如强制设置姓名、年龄），可以显式定义构造函数：

#### 1. 无参数构造函数（手动定义）
如果手动定义了构造函数，编译器就不会再生成默认构造函数。如需保留无参构造，需手动声明：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // 手动定义无参数构造函数
    public Student()
    {
        // 初始化逻辑：如设置默认值
        Name = "未知姓名";
        Age = 0;
    }
}

// 创建对象时自动调用无参构造函数
Student stu = new Student();
Console.WriteLine(stu.Name); // 输出：未知姓名（构造函数中设置的默认值）
```


#### 2. 带参数的构造函数
最常用的构造函数形式，用于在创建对象时直接传入初始值：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // 带参数的构造函数：强制传入姓名和年龄
    public Student(string name, int age)
    {
        // 用参数初始化属性
        Name = name;
        Age = age;
    }
}

// 创建对象时必须传入参数（与构造函数匹配）
Student stu = new Student("张三", 18); // 调用带参构造函数
Console.WriteLine($"{stu.Name}，{stu.Age}岁"); // 输出：张三，18岁
```

**优势**：确保对象创建时就有有效的初始值，避免“未初始化就使用”的问题。

## 修饰符

构造函数还可以和访问修饰符配合使用。比如，我们可以把构造函数设为`private`，这样就只能在类内部创建对象，这在一些特殊设计模式中非常有用。

```csharp
class Singleton
{
    // 私有构造函数
    private Singleton()
    {
    }
    
    // 在类内部创建唯一实例
    public static Singleton Instance = new Singleton();
}
```


## 四、构造函数的重载
和普通方法一样，构造函数也支持**重载**（同一个类中定义多个同名构造函数，通过参数的数量、类型或顺序区分），满足不同的初始化需求：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Major { get; set; }

    // 构造函数1：无参数（设置默认值）
    public Student()
    {
        Name = "未知";
        Age = 0;
        Major = "未分配";
    }

    // 构造函数2：仅传入姓名
    public Student(string name)
    {
        Name = name;
        Age = 0;
        Major = "未分配";
    }

    // 构造函数3：传入姓名、年龄、专业
    public Student(string name, int age, string major)
    {
        Name = name;
        Age = age;
        Major = major;
    }
}

// 调用不同的构造函数
Student stu1 = new Student(); // 用构造函数1
Student stu2 = new Student("李四"); // 用构造函数2
Student stu3 = new Student("王五", 20, "计算机"); // 用构造函数3
```

**重载原则**：构造函数名必须与类名相同，参数列表必须不同（数量、类型、顺序至少有一个不同）。


但是，一旦我们手动定义了构造函数，这个默认的无参数构造函数就会消失。如果还想像以前那样创建对象，就需要手动添加一个无参数构造函数：

```csharp
class Student
{
    // 其他成员...
    
    // 无参数构造函数
    public Student()
    {
        // 可以在这里设置一些默认值
        StudentId = "未知";
    }
    
    // 带参数的构造函数
    public Student(string name, int age, string studentId)
    {
        Name = name;
        Age = age;
        StudentId = studentId;
    }
}
```

这种一个类中定义多个构造函数的情况，叫做构造函数的重载，它体现了面向对象的多态特性。


## 五、`this`关键字

当多个构造函数有重复的初始化逻辑时，可以用`this`关键字调用同类中的其他构造函数，减少代码重复：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Major { get; set; }

    // 基础构造函数（包含核心初始化逻辑）
    public Student(string name)
    {
        Name = name; // 核心逻辑：必须传入姓名
        Age = 18; // 默认年龄
        Major = "通用"; // 默认专业
    }

    // 调用基础构造函数，再扩展年龄参数
    public Student(string name, int age) : this(name)
    {
        Age = age; // 仅需处理新增的参数
    }

    // 调用基础构造函数，再扩展年龄和专业参数
    public Student(string name, int age, string major) : this(name, age)
    {
        Major = major; // 仅需处理新增的参数
    }
}
```

**解析**：  
- `: this(name)` 表示：先调用当前类中参数为`string name`的构造函数，再执行当前构造函数的代码。  
- 作用：将公共初始化逻辑集中在一个构造函数中，其他构造函数通过`this`复用，减少重复代码。  


## 六、构造函数的使用场景

1. **强制初始化**：确保对象创建时必须提供关键信息（如`Id`、`Name`等）。  
   例：`User`类必须传入用户名才能创建对象，避免无意义的空对象。

2. **设置默认值**：为属性设置合理的初始值（如年龄默认为0，状态默认为“正常”）。

3. **资源初始化**：在创建对象时分配资源（如打开文件流、建立数据库连接）。  
   ```csharp
   public class FileHandler
   {
       private FileStream _stream;

       // 构造函数中打开文件
       public FileHandler(string filePath)
       {
           _stream = File.Open(filePath, FileMode.Open);
       }
   }
   ```

## 总结

核心要点总结

1. 构造函数与类同名，无返回值，用于对象初始化。  
2. 未手动定义时，编译器自动生成无参默认构造函数。  
3. 支持重载，可通过`this`关键字复用初始化逻辑。  
4. 每次用`new`创建对象时，必然调用对应的构造函数。  

掌握构造函数是面向对象编程的基础，它能保证对象在使用前处于“就绪”状态，是封装思想的重要体现。


总结一下，构造函数是类中用于初始化对象的特殊方法，它具有以下特点：

1. 构造函数的名字和类名相同，没有返回值
2. 创建对象时会自动调用
3. 主要作用是初始化对象的属性和状态
4. 可以重载，实现多种初始化方式
5. 可以使用访问修饰符控制访问权限

掌握构造函数的使用，能让我们的代码更加简洁、安全，也更符合面向对象的设计思想。下节课，我们将继续学习类的其他特性，大家课后可以尝试给之前定义的类添加构造函数，体验一下它的便利之处。

好了，今天的内容就到这里，咱们下次课再见！

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。

如果这个视频对你有帮助，别忘了点赞、收藏、关注，感谢观看，我们下期再见！

慢慢学，一点点进步就很好！

## 练习