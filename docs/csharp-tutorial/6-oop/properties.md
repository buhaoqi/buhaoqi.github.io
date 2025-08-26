---
noteId: "14382ed0686411f0b38abb3f8df447a5"
tags: []

---

## **开场**  
“大家好！欢迎观看《C#初学者实例教程》的第6.4.2课《属性》。

今天，我们来学习一个 C# 中非常重要的知识点 —— 类的属性（Property）。”

本期视频的知识点：

1. 字段的问题
2. 属性是什么
3. 属性访问器
4. 封装是什么
5. 封装的好处

   
---

## 字段的问题

先来看一个场景。假设我们要定义一个 “学生类”，用来记录学生的信息。按照之前学的知识，我们会在类中定义字段来存储数据，比如姓名、年龄这些特征。于是可能会写出这样的代码：

```c#  linenums="1"
using System;

namespace Lesson
{
    class Student
    {
        // 定义字段存储学生信息
        public string name;
        public int age;
    }
    class Program
    {
        static void Main( )
        {
            Student student = new Student();​
            student.name = "张三";​
            student.age = -5;
        }
    } 
}

```
大家发现问题了吗？这里给年龄赋值为 - 5，这在现实中是不合理的，但编译器却不会报错。这就是直接使用公共字段带来的麻烦 —— 无法对数据的有效性进行控制。而且在 “三大特性” 中，封装是非常重要的一点，把字段直接设为 public，就完全暴露了类的内部数据，不符合封装的思想。​

那怎么解决这个问题呢？有人可能会说，把字段设为 private，然后提供方法来设置和获取值。比如这样：

```c#  linenums="1"
class Student
{
    private string name;
    private int age;

    // 设置姓名的方法
    public void SetName(string n)
    {
        name = n;
    }

    // 获取姓名的方法
    public string GetName()
    {
        return name;
    }

    // 设置年龄的方法，包含验证逻辑
    public void SetAge(int a)
    {
        if (a > 0 && a < 150)
        {
            age = a;
        }
        else
        {
            Console.WriteLine("年龄输入无效");
        }
    }

    // 获取年龄的方法
    public int GetAge()
    {
        return age;
    }
}
```
这样确实实现了数据的封装和验证，但每次调用方法来设置和获取值，代码显得有些繁琐。有没有更简洁的方式呢？这时候属性就该登场了。

## 属性是什么
之前讲过，属性是对象的特征。但是，从本质上讲，**属性（Property）** 是对字段的封装，是一种用来访问类中字段的机制。提供了更优雅的方式来访问和修改对象的数据。

## 属性访问器

定义

属性访问器（Accessor）是属性定义中用于控制获取属性值和设置属性值的特殊代码块。

作用

封装字段的访问逻辑，让数据操作更安全、灵活。

属性访问器提供了对字段的安全访问机制，是实现封装的关键。

结构

分为两部分：

- get访问器
- set访问器。

基础语法

```c# linenums="1"
[修饰符] 数据类型 属性名
{
    get { return 字段名; }  // 最常见的写法
    set { 字段名 = 值; }
}
```

- `get`：读取属性值
- `set`：写入属性值


## 封装是什么

- 封装（Encapsulation）
- 把“字段”隐藏起来，只给外界暴露必要的接口
- 把对字段的读写操作控制在合理范围内，从而保护数据不被随意修改。
- 封装的核心不是禁止修改字段，而是控制如何修改字段。

这种思想就叫“封装”。

## 示例: 属性与封装

我们来把上面的学生类用属性改写一下：

```c#  linenums="1"
class Student
{
    private string _name; // 私有字段，通常用下划线开头区分
    private int _age;

    // 姓名属性
    public string Name
    {
        get { return _name; } // get访问器，用于获取属性值
        set { _name = value; } // set访问器，用于设置属性值，value是关键字表示传入的值
    }

    // 在 set 访问器中，可以加入校验、计算、事件触发等逻辑，确保数据始终合法。
    public int Age
    {
        get { return _age; }
        set 
        { 
            if (value > 0 && value < 150)
            {
                _age = value;
            }
            else
            {
                Console.WriteLine("年龄输入无效");
            }
        }
    }
}
```

这样一来：

* 外部不能直接操作字段 `age`
* `set` 中添加了判断逻辑，**保护了内部状态**
* 这就是 **封装的体现**，借助 **属性访问器实现了受控访问**


现在使用属性来操作数据就方便多了：​

```c# linenums="1"
Student student = new Student();
student.Name = "张三"; // 调用set访问器
student.Age = -5; // 年龄无效，会输出提示
Console.WriteLine(student.Name); // 调用get访问器，输出张三
```
是不是简洁了很多？我们像使用字段一样使用属性，但背后却能实现数据验证、封装等功能。在 C# 中，还有一种更简洁的自动属性语法，当不需要复杂的验证逻辑时，可以这样写：

```c# linenums="1"
public string Name { get; set; }
```

编译器会自动为我们生成对应的私有字段，这让代码更加简洁。​

属性还可以配合 “五大修饰符” 来控制访问权限。比如我们可以把 set 访问器设为 private，让属性只能在类内部修改，外部只能读取：

```c#
public string Id { get; private set; }
```

这样就保证了 ID 一旦在类内部初始化后，外部无法随意修改，增强了数据的安全性。​

## 示例：属性封装多个字段
假设我们有一个Person类，存储了 “姓氏” 和 “名字” 两个私有字段，而 “全名” 需要通过这两个字段拼接得到：

```c#
class Person
{
    // 两个私有字段
    private string _lastName;  // 姓氏
    private string _firstName; // 名字

    // 一个属性，封装并处理上面两个字段
    public string FullName
    {
        // get访问器：拼接两个字段的值
        get { return $"{_lastName} {_firstName}"; }
        
        // set访问器：拆分传入的值到两个字段
        set 
        { 
            string[] parts = value.Split(' ');
            if (parts.Length >= 2)
            {
                _lastName = parts[0];
                _firstName = parts[1];
            }
        }
    }
}
```

使用

```c#
Person p = new Person();
p.FullName = "张 三"; // 调用set访问器，拆分到_lastName和_firstName
Console.WriteLine(p.FullName); // 调用get访问器，输出"张 三"（拼接两个字段）
```

这里的FullName属性就同时封装了_lastName和_firstName两个私有字段，通过访问器的逻辑实现了多字段的协同处理。

## 示例: 属性可以不依赖字段

属性甚至可以完全不对应字段，而是通过计算或外部数据得到值。例如：


```c#
class Calculator
{
    // 这个属性没有对应任何字段，值是实时计算的
    public int RandomNumber
    {
        get 
        { 
            Random r = new Random();
            return r.Next(1, 100); // 每次访问都返回一个随机数
        }
    }
}
```


总结一下，属性的出现是为了更好地实现封装特性，它既解决了公共字段安全性差的问题，又比使用方法操作数据更加简洁优雅。在类的 “四大成员” 中，属性扮演着数据访问接口的重要角色，让我们的代码更加健壮、易读和易维护。​

下节课我们会继续深入学习类的其他知识，大家课后可以多动手练习，尝试定义不同的类和属性，感受属性带来的便利。好了，今天的内容就到这里，咱们下次课再见！


## 封装的好处

- 好处1：保护数据不被随意修改
- 好处2：便于调试和维护
- 好处3：可以在方法中加入验证逻辑
- 好处4：隐藏实现细节，只暴露接口



在C#中，属性的类型可以根据**访问权限**、**实现方式**和**功能特性**进行分类，常见类型如下，每种类型都有其特定的使用场景和语法特点：


### 一、按访问权限划分（核心分类）
基于`get`和`set`访问器的存在与否或权限控制，是最基础的分类方式：

#### 1. 读写属性（Read-Write Properties）
- **特点**：同时包含`get`和`set`访问器，允许外部读取和修改值。
- **适用场景**：大多数普通数据，需要灵活读写（如用户的姓名、年龄）。
- **示例**：
  ```csharp
  public class Person
  {
      private string _name;
      
      // 完整写法
      public string Name
      {
          get { return _name; }      // 读取逻辑
          set { _name = value; }     // 修改逻辑
      }
      
      // 自动实现的读写属性（简化写法）
      public int Age { get; set; }
  }
  ```


#### 2. 只读属性（Read-Only Properties）
- **特点**：只有`get`访问器（或`set`访问器为`private`且仅类内部可用），外部只能读取，不能修改。
- **适用场景**：初始化后不允许修改的数据（如ID、创建时间），或由内部计算得出的值。
- **示例**：
  ```csharp
  public class Order
  {
      // 方式1：完全无set访问器（最严格，只能在构造函数初始化）
      private readonly string _orderId;
      public string OrderId => _orderId;  // 简化的get语法
      
      // 方式2：set为private（类内部可修改，外部只读）
      private DateTime _createTime;
      public DateTime CreateTime
      {
          get { return _createTime; }
          private set { _createTime = value; }  // 仅类内部调用
      }
      
      public Order(string id)
      {
          _orderId = id;
          _createTime = DateTime.Now;  // 构造函数中初始化
      }
  }
  ```


#### 3. 只写属性（Write-Only Properties）
- **特点**：只有`set`访问器，不允许外部读取，仅能设置值。
- **适用场景**：敏感数据（如密码），允许设置但禁止直接读取（需通过其他方法验证）。
- **示例**：
  ```csharp
  public class User
  {
      private string _passwordHash;
      
      // 只写属性：仅允许设置密码（内部加密存储）
      public string Password
      {
          set { _passwordHash = Encrypt(value); }  // 无get访问器
      }
      
      // 通过方法验证密码，而非直接暴露
      public bool CheckPassword(string input)
      {
          return _passwordHash == Encrypt(input);
      }
      
      private string Encrypt(string value) => value.GetHashCode().ToString();
  }
  ```


### 二、按实现方式划分
根据属性是否依赖显式字段或是否自动生成字段分类：

#### 4. 自动实现的属性（Auto-Implemented Properties）
- **特点**：无需手动定义私有字段，编译器会自动生成隐藏字段，简化代码。
- **适用场景**：无需复杂读写逻辑（如验证、转换）的简单属性。
- **示例**：
  ```csharp
  public class Car
  {
      // 自动生成字段，get和set默认公开
      public string Brand { get; set; }
      
      // 自动属性+权限控制（外部只读，内部可写）
      public int Mileage { get; private set; }
      
      public void Drive(int km)
      {
          Mileage += km;  // 类内部修改
      }
  }
  ```


#### 5. 手动实现的属性（Manual Properties）
- **特点**：显式定义私有字段，`get`/`set`访问器中包含自定义逻辑（如验证、日志）。
- **适用场景**：需要对数据进行加工、验证或添加额外操作的场景。
- **示例**：
  ```csharp
  public class Product
  {
      private decimal _price;  // 显式字段
      
      // 手动实现属性，包含价格验证逻辑
      public decimal Price
      {
          get { return _price; }
          set 
          { 
              if (value < 0)
                  throw new ArgumentException("价格不能为负数");
              _price = value; 
          }
      }
  }
  ```


### 三、按功能特性划分
根据属性的特殊功能或用途分类：

#### 6. 计算属性（Computed Properties）
- **特点**：值不存储在字段中，而是通过计算、拼接或转换其他数据动态生成。
- **适用场景**：依赖其他属性或数据的值（如总面积、全名）。
- **示例**：
  ```csharp
  public class Rectangle
  {
      public int Width { get; set; }
      public int Height { get; set; }
      
      // 计算属性：面积=宽×高（值随Width/Height变化）
      public int Area => Width * Height;
  }
  
  public class Person
  {
      public string FirstName { get; set; }
      public string LastName { get; set; }
      
      // 计算属性：全名=姓氏+名字
      public string FullName => $"{LastName} {FirstName}";
  }
  ```


#### 7. 静态属性（Static Properties）
- **特点**：属于类本身而非实例，通过类名访问，用于存储类级别的共享数据。
- **适用场景**：全局配置、共享常量（如数学常数、系统设置）。
- **示例**：
  ```csharp
  public class AppConfig
  {
      // 静态只读属性：全局共享的应用名称
      public static string AppName { get; } = "MyApplication";
      
      // 静态读写属性：可全局修改的配置
      public static int MaxConnections { get; set; } = 100;
  }
  
  // 使用：直接通过类名访问，无需创建对象
  Console.WriteLine(AppConfig.AppName);
  AppConfig.MaxConnections = 200;
  ```


#### 8. 索引器（Indexer）
- **特点**：特殊的“属性”，允许通过索引（如数组下标）访问对象内部数据，语法使用`this`关键字。
- **适用场景**：模拟数组或集合的类（如自定义列表、字典）。
- **示例**：
  ```csharp
  public class StringList
  {
      private List<string> _items = new List<string>();
      
      // 索引器：通过下标访问元素
      public string this[int index]
      {
          get { return _items[index]; }
          set { _items[index] = value; }
      }
      
      public void Add(string item) => _items.Add(item);
  }
  
  // 使用：像数组一样操作对象
  var list = new StringList();
  list.Add("苹果");
  Console.WriteLine(list[0]);  // 输出：苹果
  list[0] = "香蕉";
  ```


### 四、按初始化方式划分
#### 9. 带默认值的属性（Properties with Default Values）
- **特点**：定义时通过初始化器设置默认值，简化对象初始化。
- **适用场景**：需要默认值的属性（如角色默认为“访客”）。
- **示例**：
  ```csharp
  public class User
  {
      // 带默认值的自动属性
      public string Role { get; set; } = "Guest";
      
      // 带默认值的手动属性
      private int _loginCount;
      public int LoginCount
      {
          get { return _loginCount; }
          set { _loginCount = value; }
      } = 0;  // 默认值为0
  }
  ```


### 总结
C#中属性的类型本质上是通过`get`/`set`访问器的组合、权限控制和内部逻辑实现的，核心分类可归纳为：

| 分类维度       | 常见类型                     | 核心特点                                  |
|----------------|------------------------------|-------------------------------------------|
| 访问权限       | 读写属性、只读属性、只写属性 | 控制数据读写范围，体现封装性              |
| 实现方式       | 自动属性、手动属性           | 简化代码或支持复杂逻辑                    |
| 功能特性       | 计算属性、静态属性、索引器   | 动态计算值、共享数据或模拟数组访问        |
| 初始化方式     | 带默认值的属性               | 定义时设置默认值，简化初始化              |

实际开发中，需根据数据的访问需求、是否需要逻辑处理、是否共享等场景选择合适的属性类型，以保证代码的安全性、可读性和可维护性。


---

## 总结
本节课我们主要学习了：

- get 读取值，set 设置值；
- 可以自动实现、也可以手动添加逻辑；
- 属性是封装和安全的体现。

属性的核心是 “提供统一的访问接口”，内部如何实现（操作一个字段、多个字段还是无字段）完全由需求决定，这正是属性灵活性的体现。

---

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。

如果这个视频对你有帮助，别忘了点赞、收藏、关注，感谢观看，我们下期再见！

慢慢学，一点点进步就很好！

## 练习

好的，以下是为你精心设计的 **10道 C# 类的属性巩固练习题**，每题都聚焦一个关键知识点，包括：

* 私有字段封装
* get/set 基本用法
* 自动属性
* 属性中的数据校验
* 只读/只写属性
* 带访问修饰符的属性

---

### Car类的属性

> “试试自己写一个类 `Car`，包含以下属性：
>
> * 品牌 `Brand`（只读）
> * 价格 `Price`（不能为负）
> * 车龄 `Age`（可读可写）”


### 1：封装字段

定义一个 `Person` 类，包含一个私有字段 `name`，请通过属性 `Name` 封装该字段，实现基本的 get/set 访问。

---

### 2：自动实现属性

定义一个 `Student` 类，包含 `Id`、`Name`、`Age` 三个属性，使用自动属性语法。

---

### 3：只读属性

定义一个 `Circle` 类，包含 `Radius` 属性，并添加只读属性 `Area`，返回圆的面积（公式：πr²）。

---

### 4：只写属性

定义一个 `Logger` 类，包含一个只写属性 `Message`，当给 `Message` 赋值时，输出 `Console.WriteLine("日志：" + 值)`。

---

### 5：带验证逻辑的 set

定义一个 `Product` 类，包含属性 `Price`，要求：

* 不能小于 0；
* 如果小于 0，抛出异常 `ArgumentException`。

---

### 6：构造函数初始化只读属性

定义一个 `Book` 类，包含 `Title` 属性，只能在构造函数中赋值，外部只能读取。

---

### 7：属性中返回组合信息

定义一个 `User` 类，包含属性 `FirstName` 和 `LastName`，再添加一个只读属性 `FullName`，格式为 `"LastName, FirstName"`。

---

### 8：属性中限制写入范围

定义一个 `Student` 类，包含属性 `Score`，要求只能在 0 到 100 之间设置分数，超过范围自动设为 0。

---

### 9：只读自动属性（C# 6.0+）

定义一个 `Car` 类，使用只读自动属性语法，设置 `Brand` 属性，并通过构造函数赋值。

---

### 10：私有 set 用于保护属性

定义一个 `Account` 类，包含属性 `Balance`，只能被类内部方法修改，外部只能读取。

要求添加方法：

```csharp
public void Deposit(decimal amount)
```

当调用该方法时，增加账户余额。

---

## 补充建议

* 每题可写一个小测试类（Main 方法中实例化并测试）
* 鼓励使用 `Console.WriteLine` 输出测试结果
* 第3、5、7、8、10题适合做进阶练习或项目实战引导
