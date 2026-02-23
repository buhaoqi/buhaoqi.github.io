---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 类的封装  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 类的封装  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

在 C# 中，**封装（Encapsulation）** 是面向对象编程（OOP）的三大支柱之一（另外两个是继承和多态）。

## 一、字段的问题

先来看一个场景。假设我们要定义一个 “学生类”，用来记录学生的信息。按照之前学的知识，我们会在类中定义字段来存储数据，比如姓名、年龄这些特征。于是可能会写出这样的代码：

```csharp
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
大家发现问题了吗？这里给年龄赋值为 - 5，这在现实中是不合理的，但编译器却不会报错。这就是把字段直接设为 public，就完全暴露了类的内部数据，无法对数据的有效性进行控制，不符合封装的思想 。

那怎么解决这个问题呢？有人可能会说，把字段设为 private，然后提供方法来设置和获取值。比如这样：

```csharp
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

## 二、属性访问器
之前讲过，属性是对象的特征。但是，从本质上讲，**属性（Property）** 是对字段的封装，是一种用来访问类中字段的机制。C#通过一种更优雅的方式“属性访问器”来实现对象数据的访问和修改。

定义

属性访问器（Accessor）是实现属性定义的特殊的语法结构。通过属性访问器可以实现属性的读取和写入。

基础语法

```csharp
[修饰符] 数据类型 属性名
{
    get { return 字段名; }  // 最常见的写法
    set { 字段名 = 值; }
}
```

- `get访问器`：读取属性值
- `set访问器`：写入属性值

## 三、属性与封装

使用属性访问器改写学生类：

```csharp
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

这样以来：

* 外部不能直接操作字段 `age`
* `set` 中添加了判断逻辑，**保护了内部状态**
* 这就是 **封装的体现**，借助 **属性访问器实现了受控访问**


现在使用属性来操作数据就方便多了：​

```csharp
Student student = new Student();
student.Name = "张三"; // 调用set访问器
student.Age = -5; // 年龄无效，会输出提示
Console.WriteLine(student.Name); // 调用get访问器，输出张三
```

是不是简洁了很多？我们像使用字段一样使用属性，但背后却能实现数据验证、封装等功能。

## 四、封装是什么

- 封装（Encapsulation）
- 封装就是**“封闭”与“组装”**。
  - 封闭：对外把数据(“字段”)封闭起来。
  - 组装：对外只暴露必要的接口。** 将**数据**（属性）和**逻辑**（行为）捆绑在一起。通过一个框架(容器)把对象的数据(属性)和操作数据的代码(行为)组装在一起，而这个框架就是类。

- 封装的核心不是禁止修改字段，而是把对字段的读写操作控制在合理范围内，从而保护数据不被随意修改。

这种思想就叫“封装”。

想象一个**自动取款机 (ATM)**：

* **隐藏内部：** 你不需要知道 ATM 内部是如何数钱、如何连接银行数据库或如何校验磁条信息的。
* **暴露接口：** ATM 只给你提供了几个按钮（存款、取款、查询平衡）。
* **保护数据：** 你不能直接打开钞票箱去改你的余额，你必须通过“取款”这个受控的方法来操作。

一个更形象的“分层”理解

封装包含三个逻辑层次：

| 层次 | 关键词 | 程序员视角 |
| --- | --- | --- |
| **物理层** | **组装** | 把变量和方法写在同一个 `class { ... }` 里。 |
| **逻辑层** | **隐藏细节** | 使用 `private` 关键字，让外部看不见内部复杂的算法。 |
| **接口层** | **暴露接口** | 通过 `public` 的属性或方法，给外部一个安全的操作入口。 |

## 五、实现封装的步骤

实现封装，本质上就是**“关门”**（隐藏数据）和**“开窗”**（暴露接口）的过程。

可以通过以下三个步骤，从传统写法过渡到 C# 最推崇的简洁写法。


### 第一步：关门

“关门” —— 私有化字段 (Private Fields) 

A. 访问修饰符 (Access Modifiers)

访问修饰符决定了谁能看到你的代码。

* `public`：完全公开，任何人都能访问。
* `private`：**封装的核心**。只有类内部能访问，外部不可见。
* `protected`：类内部和子类可以访问。
* `internal`：同一程序集（Project）内可见。

首先，我们要防止外部代码直接“手伸得太长”。将数据定义为 `private`，确保只有类内部的方法能碰到它。

```csharp
public class BankAccount
{
    // 隐藏具体的实现细节（字段）
    private decimal _balance; 
}

```

### 第二步：开窗

“开窗” —— 使用属性 (Properties)

在 C# 中，我们不推荐像 Java 那样写 `getBalance()` 或 `setBalance()`，而是使用**属性（Property）**。属性看起来像变量，但本质上是方法。

这是 C# 封装最优雅的体现。我们通常将字段设为 private，然后通过 public 属性来控制读写逻辑。


示例：传统属性写法（带逻辑校验）：

这是封装最强大的地方——你可以**拦截**不合理的赋值。

```csharp
public class BankAccount
{
    private decimal _balance;

    public decimal Balance
    {
        get { return _balance; } // 暴露必要的读取接口
        set 
        {
            if (value >= 0) // 隐藏校验逻辑，只给外部一个结果
            {
                _balance = value;
            }
            else
            {
                Console.WriteLine("余额不能为负数！");
            }
        }
    }
}

```

### 第三步：自动实现属性

如果你不需要在 `get` 或 `set` 里写复杂的逻辑，只是单纯地想封装数据，C# 提供了极其简洁的语法。

```c# linenums="1"
public string Name { get; set; }
```

编译器会自动为我们生成对应的私有字段，这让代码更加简洁。​

**这种写法编译器会自动在后台帮你创建一个隐藏的私有字段。**

```csharp
public class User
{
    // 一行代码搞定封装
    public string Name { get; set; } 

    // 进阶：只读属性（外部能看不能改，增强安全性）
    public int ID { get; private set; } 

    public User(int id)
    {
        ID = id; // 内部可以赋值
    }
}

```

属性还可以配合 “五大修饰符” 来控制访问权限。比如我们可以把 set 访问器设为 private，让属性只能在类内部修改，外部只能读取：

```c#
public string Id { get; private set; }
```

这样就保证了 ID 一旦在类内部初始化后，外部无法随意修改，增强了数据的安全性。​


### 总结：C# 封装的“三板斧”

| 手段 | 目的 | 适用场景 |
| --- | --- | --- |
| **`private` 字段** | 彻底切断外部联系 | 核心敏感数据、内部辅助状态 |
| **`public` 属性** | 提供受控的访问入口 | 需要对外公开的数据 |
| **`set` 块中的 `if`** | 业务规则保护 | 比如：年龄不能小于0，折扣不能大于1 |
| **`private set`** | 限制修改权限 | 实现“只读”数据，防止数据被篡改 |


1. **默认 Private：** 写类时，先习惯性地把所有字段写成 `private`。
2. **按需开窗：** 只有当外部确实需要访问某个数据时，再为其编写 `public` 属性。
3. **逻辑前置：** 在属性的 `set` 块里加入判断逻辑（如非空校验、范围校验）。

### **第一步：识别需要封装的数据**

```
// 问自己：这些数据需要保护吗？
- 银行账户余额
- 用户密码
- 学生成绩
- 产品库存数量
```

### **第二步：设计属性**

```csharp
public class 产品
{
    private int _库存;
    private decimal _价格;
    
    public int 库存
    {
        get { return _库存; }
        set 
        { 
            if(value >= 0) 
                _库存 = value; 
        }
    }
    
    public decimal 价格
    {
        get { return _价格; }
        set 
        { 
            if(value > 0) 
                _价格 = value; 
        }
    }
}
```

### **第三步：添加业务方法**

```csharp
public class 产品
{
    // ... 属性 ...
    
    public bool 出售(int 数量)
    {
        if(数量 <= _库存)
        {
            _库存 -= 数量;
            return true;
        }
        return false;
    }
}
```



## 六、不封装 vs 封装

### ❌ 不封装（危险且混乱）

任何外部代码都能随意修改年龄，甚至改成负数。

```csharp
class User {
    public int age; // 公开字段，不安全
}

// 外部调用
var u = new User();
u.age = -500; // 逻辑错误，但编译器允许

```

### ✅ 封装（安全且受控）

使用属性（Property）来保护数据。

```csharp
class User {
    private int _age; // 私有字段，隐藏细节

    public int Age {
        get { return _age; }
        set {
            if (value >= 0 && value <= 120) {
                _age = value;
            } else {
                Console.WriteLine("年龄不合法！");
            }
        }
    }
}

// 外部调用
var u = new User();
u.Age = 25;   // 正常赋值
u.Age = -5;   // 被拦截，保护了数据的完整性

```

## **七、从字段到属性的演进**

### **阶段1：直接使用字段（不好）**

```csharp
public class 学生
{
    public int 年龄;  // 危险！外部可以随意修改
}

// 使用
学生 小明 = new 学生();
小明.年龄 = -10;  // 不合逻辑的年龄！但没有限制
```

### **阶段2：使用方法控制（较好）**

```csharp
public class 学生
{
    private int _年龄;  // 私有字段
    
    public void 设置年龄(int 新年龄)
    {
        if(新年龄 > 0 && 新年龄 < 150)
        {
            _年龄 = 新年龄;
        }
    }
    
    public int 获取年龄()
    {
        return _年龄;
    }
}
```

### **阶段3：使用属性（最好）**

```csharp
public class 学生
{
    private int _年龄;
    
    public int 年龄
    {
        get { return _年龄; }
        set 
        { 
            if(value > 0 && value < 150)  // 数据验证
            {
                _年龄 = value; 
            }
        }
    }
}

// 使用起来就像字段一样简单
学生 小明 = new 学生();
小明.年龄 = 18;    // 自动调用set访问器
Console.WriteLine(小明.年龄);  // 自动调用get访问器
```

## 八、封装的好处

- 好处1：保护数据不被随意修改
- 好处2：便于调试和维护
- 好处3：可以在方法中加入验证逻辑
- 好处4：隐藏实现细节，只暴露接口


1. **安全性（Security）：** 防止外部代码恶意或无意地破坏内部状态。
2. **灵活性（Flexibility）：** 如果你想修改内部实现（比如把 `age` 改为根据 `birthday` 计算得出），你只需要改类内部的代码，外部调用者完全不需要变动。
3. **简化性（Simplicity）：** 调用者只需要知道“怎么用”，不需要知道“为什么”。


### **1. 安全性**

```csharp
// 没有封装 - 危险！
学生.年龄 = -100;  // 可以设置非法值

// 有封装 - 安全！
学生.年龄 = -100;  // 会被属性拒绝，保持原值
```

### **2. 易于使用**

```
// 使用者不需要知道内部实现
温度计.温度 = 25;        // 简单！
string 描述 = 温度计.温度描述;  // 自动计算！
```

### **3. 易于修改**

```csharp
public class 学生
{
    private DateTime _生日;  // 内部改用生日存储
    
    public int 年龄
    {
        get 
        { 
            // 计算年龄的逻辑可以随时修改
            return DateTime.Now.Year - _生日.Year;
        }
    }
}
// 外部代码完全不需要修改！
```

## 九、示例

### 示例：属性封装多个字段

假设我们有一个Person类，存储了 “姓氏” 和 “名字” 两个私有字段，而 “全名” 需要通过这两个字段拼接得到：

```csharp
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

```csharp
Person p = new Person();
p.FullName = "张 三"; // 调用set访问器，拆分到_lastName和_firstName
Console.WriteLine(p.FullName); // 调用get访问器，输出"张 三"（拼接两个字段）
```

这里的FullName属性就同时封装了_lastName和_firstName两个私有字段，通过访问器的逻辑实现了多字段的协同处理。

### 示例: 属性可以不依赖字段

属性甚至可以完全不对应字段，而是通过计算或外部数据得到值。例如：


```csharp
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

### **示例1：简单的温度控制**

```csharp
public class 温度计
{
    private double _当前温度;
    
    public double 温度
    {
        get { return _当前温度; }
        set 
        {
            // 封装验证逻辑
            if(value >= -273.15)  // 绝对零度
            {
                _当前温度 = value;
            }
        }
    }
    
    public string 温度描述
    {
        get
        {
            if(_当前温度 < 0) return "寒冷";
            if(_当前温度 < 20) return "凉爽";
            if(_当前温度 < 30) return "温暖";
            return "炎热";
        }
    }
}
```

### **示例2：用户登录系统**

```csharp
public class 用户账户
{
    private string _用户名;
    private string _密码;
    private int _登录尝试次数;
    
    public string 用户名
    {
        get { return _用户名; }
        set { _用户名 = value?.Trim(); }  // 自动去除空格
    }
    
    // 密码只能设置，不能读取
    public string 密码
    {
        set 
        { 
            if(value.Length >= 6)
            {
                _密码 = value;
            }
        }
    }
    
    public bool 登录(string 输入密码)
    {
        if(_登录尝试次数 >= 3)
        {
            Console.WriteLine("账户已锁定！");
            return false;
        }
        
        if(输入密码 == _密码)
        {
            _登录尝试次数 = 0;
            return true;
        }
        else
        {
            _登录尝试次数++;
            return false;
        }
    }
}
```

## 十、属性类型

在C#中，属性的类型可以根据**访问权限**、**实现方式**和**功能特性**进行分类，常见类型如下，每种类型都有其特定的使用场景和语法特点：


### (一）按访问权限划分
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


### (二）按实现方式划分
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


### (三）按功能特性划分
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


### (四）按初始化方式划分
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


### (五）总结
C#中属性的类型本质上是通过`get`/`set`访问器的组合、权限控制和内部逻辑实现的，核心分类可归纳为：

| 分类维度       | 常见类型                     | 核心特点                                  |
|----------------|------------------------------|-------------------------------------------|
| 访问权限       | 读写属性、只读属性、只写属性 | 控制数据读写范围，体现封装性              |
| 实现方式       | 自动属性、手动属性           | 简化代码或支持复杂逻辑                    |
| 功能特性       | 计算属性、静态属性、索引器   | 动态计算值、共享数据或模拟数组访问        |
| 初始化方式     | 带默认值的属性               | 定义时设置默认值，简化初始化              |

实际开发中，需根据数据的访问需求、是否需要逻辑处理、是否共享等场景选择合适的属性类型，以保证代码的安全性、可读性和可维护性。

## 十一、总结

总结一下，属性的出现是为了更好地实现封装特性，它既解决了公共字段安全性差的问题，又比使用方法操作数据更加简洁优雅。在类的 “四大成员” 中，属性扮演着数据访问接口的重要角色，让我们的代码更加健壮、易读和易维护。​

***\*总结一下：\**** 封装就是把复杂的、易碎的内部零件关进盒子里，只给用户留几个好用的开关。

***\*"把数据藏起来，把方法露出来"\****

\- 🔒 ***\*私有字段\****：`private string _密码;`

\- 🔓 ***\*公共属性\****：`public string 姓名 { get; set; }`

\- 🎯 ***\*业务方法\****：`public bool 验证密码()`

## 十二、练习

好的，以下是为你精心设计的 **10道 C# 类的属性巩固练习题**，每题都聚焦一个关键知识点，包括：

* 私有字段封装
* get/set 基本用法
* 自动属性
* 属性中的数据校验
* 只读/只写属性
* 带访问修饰符的属性

---

### 练习 1：Student 类

你可以尝试创建一个 `Student` 类，要求：

1. `Score`（分数）属性必须在 0 到 100 之间，否则赋值失败。
2. `StudentId` 属性只能在构造函数中设置，外部代码只能读取不能修改。

***\*这种“受控”的感觉，就是封装的精髓。\**** 你想看看这个 `Student` 类的参考代码吗？

### 练习2：Car类的属性

> “试试自己写一个类 `Car`，包含以下属性：
>
> * 品牌 `Brand`（只读）
> * 价格 `Price`（不能为负）
> * 车龄 `Age`（可读可写）”


### 练习3：封装字段

定义一个 `Person` 类，包含一个私有字段 `name`，请通过属性 `Name` 封装该字段，实现基本的 get/set 访问。

---

### 练习3：自动实现属性

定义一个 `Student` 类，包含 `Id`、`Name`、`Age` 三个属性，使用自动属性语法。

---

### 练习5：只读属性

定义一个 `Circle` 类，包含 `Radius` 属性，并添加只读属性 `Area`，返回圆的面积（公式：πr²）。

---

### 练习6：只写属性

定义一个 `Logger` 类，包含一个只写属性 `Message`，当给 `Message` 赋值时，输出 `Console.WriteLine("日志：" + 值)`。

---

### 练习7：带验证逻辑的 set

定义一个 `Product` 类，包含属性 `Price`，要求：

* 不能小于 0；
* 如果小于 0，抛出异常 `ArgumentException`。

---

### 练习8：构造函数初始化只读属性

定义一个 `Book` 类，包含 `Title` 属性，只能在构造函数中赋值，外部只能读取。

---

### 练习9：属性中返回组合信息

定义一个 `User` 类，包含属性 `FirstName` 和 `LastName`，再添加一个只读属性 `FullName`，格式为 `"LastName, FirstName"`。

---

### 练习10：属性中限制写入范围

定义一个 `Student` 类，包含属性 `Score`，要求只能在 0 到 100 之间设置分数，超过范围自动设为 0。

---

### 练习11：只读自动属性（C# 6.0+）

定义一个 `Car` 类，使用只读自动属性语法，设置 `Brand` 属性，并通过构造函数赋值。

---

 ### 练习12：私有 set 用于保护属性

定义一个 `Account` 类，包含属性 `Balance`，只能被类内部方法修改，外部只能读取。

要求添加方法：

```csharp
public void Deposit(decimal amount)
```

当调用该方法时，增加账户余额。

### ✅ 案例1：自动实现属性（最基础写法）

这是最简洁的一种属性写法，由编译器自动生成字段。

```csharp
class Person
{
    public string Name { get; set; }  // 自动实现属性
    public int Age { get; set; }
}

class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Alice";
        p.Age = 25;

        Console.WriteLine($"Name: {p.Name}, Age: {p.Age}");
    }
}
```

🔍 **解析：**

* `public string Name { get; set; }` 表示这个属性可以被外部读取和修改。
* 不需要显式定义字段，简洁方便。
* 适合数据模型类，但**不能添加逻辑限制**（比如年龄不能为负）。

---

### ✅ 案例2：带私有字段的完整属性写法 + 控制访问逻辑

当我们需要对赋值做限制、添加验证逻辑时，就不能用自动属性了。

```csharp
class Student
{
    private int score;  // 私有字段

    public int Score
    {
        get { return score; }
        set
        {
            if (value >= 0 && value <= 100)
            {
                score = value;
            }
            else
            {
                Console.WriteLine("Score must be between 0 and 100.");
            }
        }
    }
}
class Program
{
    static void Main()
    {
        Student s = new Student();
        s.Score = 95;          // 合法赋值
        Console.WriteLine(s.Score); // 输出：95

        s.Score = 120;         // 非法赋值
        Console.WriteLine(s.Score); // 仍然是95
    }
}
```

🔍 **解析：**

* 使用 `private int score` 作为真实数据存储。
* `get` 用于返回字段值；`set` 可添加逻辑验证。
* 好处是**可控制数据合法性**，提高健壮性。

---

### ✅ 案例3：只读属性 + 推导计算属性（get-only）

有时候我们希望某个属性只能读取，而不能被修改，或是基于其它值计算得到。

```csharp
class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }

    // 面积是只读属性，动态计算
    public double Area
    {
        get
        {
            return Width * Height;
        }
    }
}

class Program
{
    static void Main()
    {
        Rectangle rect = new Rectangle();
        rect.Width = 5;
        rect.Height = 3;

        Console.WriteLine($"Area: {rect.Area}"); // 输出：Area: 15
        // rect.Area = 20; // ❌编译错误，Area是只读属性
    }
}
```

🔍 **解析：**

* `Area` 是一个只读属性，只有 `get` 没有 `set`。
* 访问它时，会**实时计算** Width × Height。
* 适用于只读展示、派生属性、结果缓存等场景。


