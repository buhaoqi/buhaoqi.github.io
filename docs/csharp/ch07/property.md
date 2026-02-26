---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 属性  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 属性 # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  4  # 侧边栏中排在第1位
---

## **一、属性的模样**

**没有属性的学生类**

```csharp
class Student
{
    public string _name; // 字段
}
```

**有属性的学生类**

```csharp
// ❌ 不好的做法：使用公共字段
public class BadPerson
{
    public string Name;     // 外部可以直接修改，无法控制
    public int Age;         // 可能被设置为负数
}

public class EncapsulationExample
{
    // ✅ 好的做法：私有字段 + 公共属性
    private string name;
    public string Name 
    { 
        get { return name; } 
        set { name = value; } 
    }
    
    // ❌ 不好的做法：直接使用公共字段
    public string BadName;  // 外部可以直接修改，无法控制
}
```

## **二、属性是什么？**

属性的核心功能就是“封装字段 + 承载逻辑”。理解并记住这两句结论：

- 属性是对字段的封装
- 属性是对字段的逻辑控制

> 属性是连接“字段”和“外部访问”的**中间通道**。

它让外部代码能安全地访问字段，同时允许你在“取值或赋值”时添加控制逻辑。

> “它看起来像方法，但又不是方法；像字段，但又不是字段。”

属性是一种特殊的方法。字段式方法。

- 属性用于封装字段的读取和写入操作。
- 属性允许在访问字段时自定义逻辑，例如输入验证或计算。
- 在 `set` 中可以加逻辑，比如校验、触发事件、计算值。
- 在 `get` 中也可以加逻辑，比如动态计算结果，而不是直接返回字段。

## **三、定义属性的语法**

**基础语法**

```csharp
[修饰符] 数据类型 属性名
{
    get 
    { 
        return 字段名; // 取值逻辑，必须 return 一个值
    }
    set 
    { 
        字段名 = value;  // 赋值逻辑，使用关键字 value 表示传入的数据
    }
}
```

定义属性的语法，本质上是**两个方法的语法糖**。

- **属性不是字段**：字段是真实存储数据的地方。
- **属性不是普通方法**：虽然写法像方法，但调用方式像字段。
- **属性是特殊的成员**：它其实就是一对方法（get/set）的语法糖，让我们用字段的方式来读写数据。

示例：封装字段的基础写法

```csharp
class Student
{
    private string name;  // 私有字段

    public string Name    // 属性
    {
        get { return name; }   // 取值（像方法）
        set { name = value; }  // 赋值（像方法）
    }
}

Student s = new Student();
s.Name = "小明";  // 调用 set
Console.WriteLine(s.Name); // 调用 get
```

- `public string Name` 看起来像一个字段，其实是属性的声明。
- `{ get; set; }`这一对看起来像方法体，但它们不是普通方法。`
- `get`和`set` 是一对访问器（Accessors），用于控制对字段的读取和写入。
- `value` 是一个上下文关键字，表示外部传进来的值。

示例 2：封装字段的经典写法

```csharp
public class Student
{
    private string name;   // 字段：用来存数据

    public string Name     // 属性：用来访问字段
    {
        get { return name; }
        set { name = value; }
    }
}
```

👉 说明：

| **部分**               | **含义**                                           |
| ---------------------- | -------------------------------------------------- |
| `private string name;` | 字段，只能在类内部访问                             |
| `public string Name`   | 属性，允许外部访问                                 |
| `get`                  | 当读取属性时执行，例如 `Console.WriteLine(s.Name)` |
| `set`                  | 当给属性赋值时执行，例如 `s.Name = "张三";`        |
| `value`                | 代表传进来的赋值内容（系统关键字）                 |

**✅ 调用演示：**

```
Student s = new Student();
s.Name = "张三";               // 调用 set
Console.WriteLine(s.Name);    // 调用 get
```
## 四、属性命名规则

1. 属性名首字母通常**大写**（Pascal命名法）；

2. 字段名一般小写；

3. 属性名通常与字段名相似，例如：

   ```
   private int age;
   public int Age
   {
       get { return age; }
       set { age = value; }
   }
   ```
4. 属性命名约定

```csharp
public class NamingConventions
{
    // ✅ 推荐：PascalCase属性名
    public string FirstName { get; set; }
    public int ItemCount { get; set; }
    public decimal TotalPrice { get; set; }
    
    // ✅ 推荐：布尔属性使用肯定性名称
    public bool IsActive { get; set; }
    public bool HasItems { get; set; }
    public bool CanEdit { get; set; }
    
    // ❌ 避免：含糊的布尔属性名
    // public bool Status { get; set; } // 不好
    // public bool Edit { get; set; }   // 不好
    
    // ✅ 推荐：集合属性使用复数名称
    public List<string> Items { get; set; }
    public Collection<int> Numbers { get; set; }
}
```

## 四、属性的分类

1. **完整属性** - 完全控制get/set逻辑
2. **自动属性** - 简洁语法，编译器生成后台字段
3. **表达式体属性** - 单行只读属性
4. **计算属性** - 基于其他属性计算值
5. **索引器属性** - 像数组一样访问对象
6. **静态属性** - 类级别属性
7. **抽象/接口属性** - 多态支持
8. **只读属性** - 不可变数据
9. **init属性** - 对象初始化时设置

### **按访问器分类**

#### **1. 只读属性 (Read-only Properties)**

```csharp
public class Person
{
    // 方式1：只有get访问器
    public string Id { get; }
    
    // 方式2：init访问器（C# 9.0+）
    public string Name { get; init; }
    
    // 方式3：私有set
    public DateTime CreateTime { get; private set; }
    
    public Person(string id, string name)
    {
        Id = id;
        Name = name;
        CreateTime = DateTime.Now;
    }
}
```

#### **2. 只写属性 (Write-only Properties)**

```csharp
public class Security
{
    private string _password;
    
    // 只有set访问器
    public string Password
    {
        set { _password = value; }
    }
    
    // 另一种方式：私有get
    public string SecretKey { private get; set; }
}
```

#### **3. 读写属性 (Read-Write Properties)**

```csharp
public class Product
{
    // 完整的读写属性
    public string Name { get; set; }
    public decimal Price { get; set; }
}
```

### **按实现方式分类**

#### **4. 自动属性 (Auto-Implemented Properties)**

```csharp
public class Student
{
    // 自动属性 - 编译器生成后台字段
    public string Name { get; set; }
    public int Age { get; set; } = 18;  // 带默认值
    public string Email { get; init; }  // 只读自动属性
}
```

#### **5. 完整属性 (Full Properties)**

```csharp
public class BankAccount
{
    private decimal _balance;
    
    // 完整属性 - 手动管理后台字段
    public decimal Balance
    {
        get { return _balance; }
        set 
        { 
            if (value < 0) 
                throw new ArgumentException("余额不能为负");
            _balance = value; 
        }
    }
}
```

#### **6. 计算属性 (Computed Properties)**

```csharp
public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    // 计算属性 - 没有后台字段
    public double Area => Width * Height;
    public double Perimeter => 2 * (Width + Height);
}
```

### **按作用域和特性分类**

#### **7. 静态属性 (Static Properties)**

```csharp
public class AppConfig
{
    // 静态属性 - 属于类而不是实例
    public static string AppName { get; set; } = "MyApp";
    public static int InstanceCount { get; private set; }
    
    public AppConfig()
    {
        InstanceCount++;
    }
}
```

#### **8. 抽象属性 (Abstract Properties)**

```csharp
public abstract class Shape
{
    // 抽象属性 - 派生类必须实现
    public abstract string Name { get; }
    public abstract double Area { get; }
}

public class Circle : Shape
{
    public override string Name => "Circle";
    public override double Area => Math.PI * Radius * Radius;
    public double Radius { get; set; }
}
```

#### **9. 虚属性 (Virtual Properties)**

```csharp
public class Animal
{
    // 虚属性 - 派生类可以重写
    public virtual string Sound => "Some sound";
    public virtual int Legs => 4;
}

public class Dog : Animal
{
    public override string Sound => "Woof";
}

public class Snake : Animal
{
    public override int Legs => 0;
}
```

#### **10. 重写属性 (Override Properties)**

```csharp
public class BaseClass
{
    public virtual string Message => "Base";
}

public class DerivedClass : BaseClass
{
    // 重写属性
    public override string Message => "Derived";
}
```

### **按特殊用途分类**

#### **11. 索引器属性 (Indexer Properties)**

```csharp
public class StringCollection
{
    private string[] _items = new string[10];
    
    // 索引器 - 让对象像数组一样使用
    public string this[int index]
    {
        get => _items[index];
        set => _items[index] = value;
    }
    
    // 重载索引器
    public int this[string value]
    {
        get
        {
            for (int i = 0; i < _items.Length; i++)
                if (_items[i] == value) return i;
            return -1;
        }
    }
}

// 使用
var collection = new StringCollection();
collection[0] = "Hello";        // 设置
string item = collection[0];     // 获取
int index = collection["Hello"]; // 查找索引
```

#### **12. 表达式体属性 (Expression-bodied Properties)**

```csharp
public class Calculator
{
    public double X { get; set; }
    public double Y { get; set; }
    
    // 表达式体属性 - 单行实现
    public double Sum => X + Y;
    public double Product => X * Y;
    public bool AreEqual => Math.Abs(X - Y) < 0.0001;
}
```

#### **13. 接口属性 (Interface Properties)**

```csharp
public interface IVehicle
{
    // 接口属性声明
    string Make { get; }
    string Model { get; }
    int Year { get; }
    double Speed { get; set; }
}

public class Car : IVehicle
{
    // 实现接口属性
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public double Speed { get; set; }
}
```

#### **14. 密封属性 (Sealed Properties)**

```csharp
public class Base
{
    public virtual string Property => "Base";
}

public class Derived : Base
{
    // 密封属性 - 防止进一步重写
    public sealed override string Property => "Derived";
}

public class FurtherDerived : Derived
{
    // 这里不能再重写Property属性
    // public override string Property => "Further"; // 错误！
}
```

### **按访问级别分类**

#### **15. 混合访问级别属性**

```csharp
public class AccessExample
{
    // 公共get，内部set
    public string PublicGetInternalSet { get; internal set; }
    
    // 公共get，保护set
    public string PublicGetProtectedSet { get; protected set; }
    
    // 公共get，私有set
```
## **五、属性的由来**

### **1.private只能在类的内部访问**

```csharp
using System;
    

public class Student
{
  //private可以隐藏数据
  private string name;
  //如果是public任何人都可以修改数据
  //public string name;
}
public class Program
{
  public static void Main()
  {
    Student s1 = new Student();
    s1.name = "张三";//无法初始化s1.name
    Console.WriteLine(s1.name);
  }
}
```

### **2.利用方法可访问隐藏字段**

这个类中，`name` 字段被隐藏了（private），但你仍可以通过 `SetName()` 和 `GetName()` 来读写数据。”

```csharp
using System;
    

public class Student
{
  //private可以隐藏数据
  private string name; // 私有字段
  
  public void SetName(string newName) // 公共方法
  {
    name = newName;
  }
  public string GetName()
  {
    return name;
  }
}
public class Program
{
  public static void Main()
  {
    Student s1 = new Student();
    s1.SetName("李四");
    string result = s1.GetName();
    Console.WriteLine(result);
  }
}
```

> 这就是封装！隐藏数据，暴露方法。

“我们通常把字段声明为 `private`，方法或属性声明为 `public`，这样外部就必须通过方法或属性来访问内部数据。”

但是，暴露方法后，岂不是一样可以任意从外部修改字段的值吗？当然不是，使用方法不但可以封装数据，还可以在方法中加入验证逻辑。

### **3.带逻辑的属性（常见进阶用法）**

你可以在 `get` / `set` 中添加**业务逻辑**，比如检查、限制或格式化。

示例 1：
```csharp
public class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 0)
                value = 0;  // 防止非法值
            age = value;
        }
    }
}
```
示例 2：
```csharp
using System;
    

public class Student
{
  //private可以隐藏数据
  private string name;
  
  public void SetName(string newName)
  {
    string trimedName = newName.Trim();
    if( trimedName.Length < 2) 
    {
      Console.WriteLine("姓名至少需要两个字符");
      return;
    }
    if(trimedName.Length > 5) 
    {
      Console.WriteLine("姓名不能大于5个字符");
      return;
    }
    name = newName;
  }
  public string GetName()
  {
    return name;
  }
}
public class Program
{
  public static void Main()
  {
    Student s1 = new Student();
    s1.SetName("李");
    string result = s1.GetName();
    Console.WriteLine(result);
  }
}
```



## **六、定义属性的其他语法**

### **1. 自动属性（最常用）**

如果不需要在 `get` 或 `set` 中写逻辑，可以简写：

```csharp
[修饰符] 数据类型 属性名 { get; set; }
```

示例：

```csharp
public string Title { get; set; }
public int Age { get; set; }
```

👉 编译器会自动生成一个隐藏字段。

### **2. 只读属性**

只有 `get`，不能 `set`：外部只能读取，不能修改。

语法

```csharp
[修饰符] 数据类型 属性名 { get; }

[修饰符] 数据类型 属性名 { 
  get { return _name; }
}
```

示例

```csharp
//1.在构造函数中初始化的只读属性//
public class Person
{
    // 只读属性 - 只能在构造函数中赋值
    public string Id { get; }
    public string Name { get; }
    public DateTime BirthDate { get; }
    
    public Person(string id, string name, DateTime birthDate)
    {
        Id = id;
        Name = name;
        BirthDate = birthDate;
    }
}

// 使用
var person = new Person("001", "张三", new DateTime(1990, 5, 15));
Console.WriteLine($"ID: {person.Id}");        // 可以读取
Console.WriteLine($"姓名: {person.Name}");     // 可以读取
// person.Name = "李四"; // 错误！不能修改只读属性public string Name {get;}

//2.声明时初始化的只读属性
public class AppConstants
{
    // 声明时直接初始化的只读属性
    public static string AppName { get; } = "我的应用程序";
    public static string Version { get; } = "1.0.0";
    public static DateTime BuildDate { get; } = new DateTime(2024, 1, 1);
}

// 使用
Console.WriteLine($"应用: {AppConstants.AppName}");
Console.WriteLine($"版本: {AppConstants.Version}");
Console.WriteLine($"构建日期: {AppConstants.BuildDate:yyyy-MM-dd}");
```

### **3. 只写属性（少用）**

只有 `set`，不能 `get`：外部只能赋值，不能取值（很少用）。

语法

```csharp
public string Password
{
    set { /* 保存密码逻辑 */ }
}
```

示例:密码设置器

```csharp
public class User
{
    private string _passwordHash;
    
    // 只写属性 - 可以设置密码，但不能读取
    public string Password
    {
        set 
        { 
            // 立即进行哈希处理，不存储明文密码
            _passwordHash = HashPassword(value);
            Console.WriteLine("密码已设置并哈希处理");
        }
    }
    
    // 验证密码的方法
    public bool VerifyPassword(string inputPassword)
    {
        return VerifyHash(inputPassword, _passwordHash);
    }
    
    private string HashPassword(string password)
    {
        // 简单的哈希示例（实际项目应使用更安全的方法）
        using var sha256 = System.Security.Cryptography.SHA256.Create();
        var bytes = System.Text.Encoding.UTF8.GetBytes(password);
        var hash = sha256.ComputeHash(bytes);
        return Convert.ToBase64String(hash);
    }
    
    private bool VerifyHash(string input, string hash)
    {
        return HashPassword(input) == hash;
    }
}

// 使用
var user = new User();
user.Password = "mySecret123";  // 可以设置密码
// string pwd = user.Password;  // 错误！不能读取密码

bool isValid = user.VerifyPassword("mySecret123");  // 通过方法验证
Console.WriteLine($"密码验证结果: {isValid}");
```



### **4. 计算属性**

```csharp
/*******1.几何图形计算*******/
public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    // 计算只读属性 - 基于其他属性
    public double Area 
    { 
        get { return Width * Height; } 
    }
    
    public double Perimeter 
    { 
        get { return 2 * (Width + Height); } 
    }
    
    // 使用表达式体的只读属性 (C# 6.0+)
    public bool IsSquare => Width == Height;
    public string Description => $"矩形 {Width}×{Height}";
}

// 使用
var rect = new Rectangle { Width = 5, Height = 3 };
Console.WriteLine($"面积: {rect.Area}");           // 15
Console.WriteLine($"周长: {rect.Perimeter}");      // 16
Console.WriteLine($"是否正方形: {rect.IsSquare}"); // False
rect.Width = 3; // 修改宽度会影响面积计算
Console.WriteLine($"修改后面积: {rect.Area}");     // 9

/*******2.人员信息计算*******/
public class Employee
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime HireDate { get; set; }
    
    // 计算只读属性
    public string FullName => $"{FirstName} {LastName}";
    
    public int YearsOfService 
    { 
        get 
        { 
            int years = DateTime.Now.Year - HireDate.Year;
            if (DateTime.Now < HireDate.AddYears(years))
                years--;
            return years;
        } 
    }
    
    public bool IsVeteran => YearsOfService >= 10;
}

// 使用
var emp = new Employee 
{ 
    FirstName = "张", 
    LastName = "三", 
    HireDate = new DateTime(2015, 3, 10) 
};

Console.WriteLine($"全名: {emp.FullName}");           // 张 三
Console.WriteLine($"服务年限: {emp.YearsOfService}"); // 根据当前时间计算
Console.WriteLine($"是否资深员工: {emp.IsVeteran}");  // True 或 False

/*******工具类中的只读属性*******/
public static class MathHelper
{
    // 静态只读属性
    public static double PI { get; } = 3.141592653589793;
    public static double E { get; } = 2.718281828459045;
    
    // 计算只读属性
    public static double GoldenRatio => (1 + Math.Sqrt(5)) / 2;
}

// 使用
Console.WriteLine($"π: {MathHelper.PI}");
Console.WriteLine($"自然常数 e: {MathHelper.E}");
Console.WriteLine($"黄金比例: {MathHelper.GoldenRatio}");
```

## **七、属性的好处**

1. **保护数据安全** —— 字段被保护起来，让字段不可直接访问，只能通过属性访问，避免随意访问

2. **增加灵活性** —— 可以在 `set`/`get` 中添加逻辑

   ```csharp
   private int age;
   public int Age
   {
       get { return age; }
       set
       {
           if (value >= 0) age = value;
           else Console.WriteLine("年龄不能为负数！");
       }
   }
   ```

3. 字段的 缺点：外部可以随意修改，无法控制。

## **八、练习题**

练习三步曲：

1. 先练“手写完整 get/set 版”
2. 再练“自动属性”
3. 最后练“带逻辑的属性”


### **🏋️‍♀️ 示例练习：**

```csharp
class Product
{
    private double price;

    public double Price
    {
        get { return price; }
        set
        {
            if (value < 0) value = 0;
            price = value;
        }
    }
}
```

👉 试试写出对象：

```csharp
Product p = new Product();
p.Price = -5;    // 自动改为 0
Console.WriteLine(p.Price);
```


以下是 10 道专门练习属性定义语法的题目，涵盖自动属性、完整属性、只读属性、计算属性和业务逻辑控制：

### **练习题 1：基础自动属性**

**题目**：创建一个 `Student` 类，使用自动属性定义以下属性：

- 学号 (StudentId)
- 姓名 (Name)
- 年龄 (Age)
- 班级 (ClassName)

**要求**：所有属性都使用自动属性语法，并设置合理的默认值。

```csharp
// 参考答案
public class Student
{
    public string StudentId { get; set; } = "未知";
    public string Name { get; set; } = "未知";
    public int Age { get; set; } = 0;
    public string ClassName { get; set; } = "未分配";
}
```

### **练习题 2：完整属性与数据验证**

**题目**：创建一个 `BankAccount` 类，使用完整属性定义以下属性：

- 账户号 (AccountNumber) - 只读属性
- 余额 (Balance) - 私有 set，只能通过方法修改
- 账户持有人 (AccountHolder)

**要求**：

- AccountNumber 只能在构造函数中设置
- Balance 不能为负数
- AccountHolder 不能为空或空白字符串

```csharp
// 参考答案
public class BankAccount
{
    private string _accountNumber;
    private decimal _balance;
    private string _accountHolder;

    public string AccountNumber
    {
        get { return _accountNumber; }
    }

    public decimal Balance
    {
        get { return _balance; }
        private set 
        { 
            if (value < 0)
                throw new ArgumentException("余额不能为负数");
            _balance = value; 
        }
    }

    public string AccountHolder
    {
        get { return _accountHolder; }
        set 
        { 
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("账户持有人不能为空");
            _accountHolder = value; 
        }
    }

    public BankAccount(string accountNumber, string accountHolder)
    {
        _accountNumber = accountNumber;
        AccountHolder = accountHolder;
        _balance = 0;
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("存款金额必须大于0");
        Balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= 0 || amount > Balance)
            return false;
        Balance -= amount;
        return true;
    }
}
```

### **练习题 3：计算属性**

**题目**：创建一个 `Rectangle` 类，包含以下属性：

- 宽度 (Width)
- 高度 (Height)
- 面积 (Area) - 计算属性
- 周长 (Perimeter) - 计算属性
- 是否正方形 (IsSquare) - 计算属性

**要求**：所有计算属性使用表达式体语法。

```csharp
// 参考答案
// public class Rectangle
// {
//     public double Width { get; set; }
//     public double Height { get; set; }

//     // 计算属性
//     public double Area => Width * Height;
//     public double Perimeter => 2 * (Width + Height);
//     public bool IsSquare => Width == Height;
//     public string Description => $"矩形 {Width}×{Height} ({(IsSquare ? "正方形" : "长方形")})";
// }

public class Rectangle
{
    // 基础属性（保持原有自动属性写法，无箭头）
    public double Width { get; set; }
    public double Height { get; set; }

    // 计算属性：面积（替换箭头语法，改用传统get只读属性）
    public double Area
    {
        get
        {
            return Width * Height;
        }
    }

    // 计算属性：周长（替换箭头语法）
    public double Perimeter
    {
        get
        {
            return 2 * (Width + Height);
        }
    }

    // 计算属性：是否为正方形（替换箭头语法）
    public bool IsSquare
    {
        get
        {
            return Width == Height;
        }
    }

    // 计算属性：描述信息（替换箭头语法，拆分三元表达式为if-else更易理解）
    public string Description
    {
        get
        {
            string shapeType;
            if (IsSquare)
            {
                shapeType = "正方形";
            }
            else
            {
                shapeType = "长方形";
            }
            return "矩形 " + Width + "×" + Height + " (" + shapeType + ")";
        }
    }
}

// 测试代码（可选，用于验证功能）
public class Program
{
    public static void Main()
    {
        Rectangle rect1 = new Rectangle();
        rect1.Width = 5;
        rect1.Height = 5;
        Console.WriteLine(rect1.Area); // 输出25
        Console.WriteLine(rect1.Description); // 输出：矩形 5×5 (正方形)

        Rectangle rect2 = new Rectangle();
        rect2.Width = 4;
        rect2.Height = 6;
        Console.WriteLine(rect2.Perimeter); // 输出20
        Console.WriteLine(rect2.Description); // 输出：矩形 4×6 (长方形)
    }
}
```

### **练习题 4：只读属性与构造函数**

**题目**：创建一个 `Product` 类，包含以下属性：

- 产品ID (ProductId) - 只读属性
- 产品名称 (ProductName)
- 价格 (Price)
- 创建时间 (CreatedDate) - 只读属性
- 是否上架 (IsActive)

**要求**：

- ProductId 和 CreatedDate 只能在构造函数中初始化
- 价格不能为负数

```csharp
// 参考答案
// public class Product
// {
//     public string ProductId { get; }
//     public DateTime CreatedDate { get; }
    
//     private string _productName;
//     private decimal _price;
    
//     public string ProductName
//     {
//         get => _productName;
//         set => _productName = !string.IsNullOrWhiteSpace(value) ? value : "未知产品";
//     }
    
//     public decimal Price
//     {
//         get => _price;
//         set => _price = value >= 0 ? value : 0;
//     }
    
//     public bool IsActive { get; set; } = true;
    
//     public Product(string productId, string productName)
//     {
//         ProductId = productId;
//         ProductName = productName;
//         CreatedDate = DateTime.Now;
//     }
// }
using System; // 需引入DateTime所在的命名空间

public class Product
{
    // 只读自动属性（保持原有写法，无箭头）
    public string ProductId { get; }
    public DateTime CreatedDate { get; }
    
    // 私有字段（原代码保留）
    private string _productName;
    private decimal _price;
    
    // 替换ProductName的箭头语法：改用传统get/set代码块
    public string ProductName
    {
        get
        {
            return _productName; // 替换 get => _productName
        }
        set
        {
            // 替换 set => 后的三元表达式，改用if-else更易理解
            if (!string.IsNullOrWhiteSpace(value))
            {
                _productName = value;
            }
            else
            {
                _productName = "未知产品";
            }
        }
    }
    
    // 替换Price的箭头语法：改用传统get/set代码块
    public decimal Price
    {
        get
        {
            return _price; // 替换 get => _price
        }
        set
        {
            // 替换 set => 后的三元表达式，改用if-else
            if (value >= 0)
            {
                _price = value;
            }
            else
            {
                _price = 0;
            }
        }
    }
    
    // 自动属性（移除初始化箭头/赋值语法，改在构造函数初始化）
    public bool IsActive { get; set; }
    
    // 构造函数
    public Product(string productId, string productName)
    {
        ProductId = productId;
        ProductName = productName;
        CreatedDate = DateTime.Now;
        // 初始化IsActive为true（替代原代码的 = true 初始化）
        IsActive = true;
    }
}

// 测试代码（可选，验证功能）
public class Program
{
    public static void Main()
    {
        // 测试1：正常产品名称和价格
        Product p1 = new Product("P001", "智能手机");
        p1.Price = 2999.99m;
        Console.WriteLine($"产品1：{p1.ProductName}，价格：{p1.Price}，状态：{p1.IsActive}");
        
        // 测试2：空产品名称和负数价格（验证校验逻辑）
        Product p2 = new Product("P002", "");
        p2.Price = -100;
        Console.WriteLine($"产品2：{p2.ProductName}，价格：{p2.Price}，状态：{p2.IsActive}");
    }
}
```

### **练习题 5：属性中的复杂业务逻辑**

**题目**：创建一个 `Temperature` 类，包含以下属性：

- 摄氏温度 (Celsius)
- 华氏温度 (Fahrenheit)

**要求**：

- 两个属性相互关联，修改一个会影响另一个
- 温度范围限制在绝对零度(-273.15°C)以上

```csharp
// 参考答案
public class Temperature
{
    private double _celsius;

    public double Celsius
    {
        get => _celsius;
        set
        {
            if (value < -273.15)
                throw new ArgumentException("温度不能低于绝对零度(-273.15°C)");
            _celsius = value;
        }
    }

    public double Fahrenheit
    {
        get => _celsius * 9 / 5 + 32;
        set
        {
            double celsius = (value - 32) * 5 / 9;
            if (celsius < -273.15)
                throw new ArgumentException("温度不能低于绝对零度(-459.67°F)");
            _celsius = celsius;
        }
    }

    public string Description
    {
        get
        {
            if (_celsius < 0) return "寒冷";
            if (_celsius < 15) return "凉爽";
            if (_celsius < 25) return "舒适";
            if (_celsius < 35) return "温暖";
            return "炎热";
        }
    }
}
```

### **练习题 6：只写属性**

**题目**：创建一个 `Logger` 类，包含以下属性：

- 日志文件路径 (LogFilePath) - 只写属性
- 日志级别 (LogLevel) - 只写属性
- 快速日志 (QuickLog) - 只写属性，用于快速记录消息

**要求**：

- 所有属性都是只写的
- 提供方法来读取配置和日志内容

```csharp
// 参考答案
public class Logger
{
    private string _logFilePath;
    private string _logLevel = "INFO";
    private readonly List<string> _logMessages = new List<string>();

    public string LogFilePath
    {
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("日志文件路径不能为空");
            _logFilePath = value;
        }
    }

    public string LogLevel
    {
        set
        {
            string[] validLevels = { "DEBUG", "INFO", "WARN", "ERROR" };
            if (validLevels.Contains(value.ToUpper()))
                _logLevel = value.ToUpper();
            else
                throw new ArgumentException("无效的日志级别");
        }
    }

    public string QuickLog
    {
        set
        {
            string message = $"[{_logLevel}] {DateTime.Now:HH:mm:ss} - {value}";
            _logMessages.Add(message);
        }
    }

    public string GetCurrentConfig()
    {
        return $"日志文件: {_logFilePath}, 级别: {_logLevel}";
    }

    public string[] GetLogMessages()
    {
        return _logMessages.ToArray();
    }
}
```

### **练习题 7：静态属性**

**题目**：创建一个 `AppConfig` 类，包含以下静态属性：

- 应用名称 (AppName)
- 版本号 (Version)
- 用户计数 (UserCount)

**要求**：

- AppName 和 Version 是只读的
- UserCount 只能在类内部修改
- 提供方法来增加用户计数

```csharp
// 参考答案
// public class AppConfig
// {
//     public static string AppName { get; } = "我的应用程序";
//     public static string Version { get; } = "1.0.0";
//     public static int UserCount { get; private set; } = 0;

//     static AppConfig()
//     {
//         Console.WriteLine($"应用程序初始化: {AppName} v{Version}");
//     }

//     public static void AddUser()
//     {
//         UserCount++;
//         Console.WriteLine($"用户数量: {UserCount}");
//     }

//     public static void RemoveUser()
//     {
//         if (UserCount > 0)
//             UserCount--;
//         Console.WriteLine($"用户数量: {UserCount}");
//     }

//     public static string GetAppInfo()
//     {
//         return $"{AppName} v{Version} - 当前用户: {UserCount}";
//     }
// }

using System;

public class AppConfig
{
    // 1. 替换静态只读自动属性：改用私有静态字段 + 公共静态只读属性（无箭头）
    private static readonly string _appName = "我的应用程序";
    public static string AppName
    {
        get
        {
            return _appName;
        }
    }

    private static readonly string _version = "1.0.0";
    public static string Version
    {
        get
        {
            return _version;
        }
    }

    // 2. 替换静态私有set属性：改用私有静态字段 + 公共静态只读get + 内部修改逻辑
    private static int _userCount = 0;
    public static int UserCount
    {
        get
        {
            return _userCount;
        }
        // 保留private set，新手阶段可保留，也可完全移除（仅通过方法修改）
        private set
        {
            _userCount = value;
        }
    }

    // 静态构造函数（原代码保留，无箭头）
    static AppConfig()
    {
        Console.WriteLine("应用程序初始化: " + AppName + " v" + Version);
    }

    // 新增：若想完全移除private set，可删除UserCount的set块，仅通过字段修改
    // 此时AddUser/RemoveUser中直接改_userCount即可，如下：
    // public static void AddUser()
    // {
    //     _userCount++;
    //     Console.WriteLine("用户数量: " + _userCount);
    // }

    // 静态方法（替换字符串插值为拼接，避免$语法，更基础）
    public static void AddUser()
    {
        UserCount++;
        Console.WriteLine("用户数量: " + UserCount);
    }

    public static void RemoveUser()
    {
        if (UserCount > 0)
            UserCount--;
        Console.WriteLine("用户数量: " + UserCount);
    }

    public static string GetAppInfo()
    {
        // 替换字符串插值为拼接，无箭头/特殊语法
        return AppName + " v" + Version + " - 当前用户: " + UserCount;
    }
}

// 测试代码（验证功能）
public class Program
{
    public static void Main()
    {
        AppConfig.AddUser();   // 输出：用户数量: 1
        AppConfig.AddUser();   // 输出：用户数量: 2
        AppConfig.RemoveUser();// 输出：用户数量: 1
        
        string info = AppConfig.GetAppInfo();
        Console.WriteLine(info); // 输出：我的应用程序 v1.0.0 - 当前用户: 1
    }
}
```

### **练习题 8：属性访问级别控制**

**题目**：创建一个 `Employee` 类，包含以下属性：

- 员工ID (EmployeeId) - 公共获取，私有设置
- 姓名 (Name) - 公共获取，内部设置
- 工资 (Salary) - 私有获取和设置
- 部门 (Department) - 公共获取和设置

**要求**：

- 提供适当的方法来访问和修改受限属性
- 工资只能通过特定方法修改，并有验证逻辑

```csharp
// 参考答案
public class Employee
{
    public string EmployeeId { get; private set; }
    public string Name { get; internal set; }
    private decimal _salary;
    public string Department { get; set; }

    public Employee(string employeeId, string name, string department)
    {
        EmployeeId = employeeId;
        Name = name;
        Department = department;
        _salary = 0;
    }

    // 通过方法访问私有属性
    public decimal GetSalary() => _salary;

    public void SetSalary(decimal newSalary)
    {
        if (newSalary < 0)
            throw new ArgumentException("工资不能为负数");
        
        decimal oldSalary = _salary;
        _salary = newSalary;
        
        Console.WriteLine($"工资从 {oldSalary:C} 调整为 {newSalary:C}");
    }

    public void GiveRaise(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("加薪金额必须大于0");
        
        SetSalary(_salary + amount);
    }

    public string GetEmployeeInfo()
    {
        return $"员工 {Name} ({EmployeeId}) - 部门: {Department}, 工资: {_salary:C}";
    }
}
```

### **练习题 9：计算属性与状态属性**

**题目**：创建一个 `Order` 类，包含以下属性：

- 订单号 (OrderId) - 只读
- 订单项列表 (Items) - 私有 set
- 订单总额 (TotalAmount) - 计算属性
- 是否已支付 (IsPaid)
- 订单状态 (OrderStatus) - 基于其他属性的计算属性

**要求**：

- 订单状态根据是否支付和是否有商品自动计算
- 提供添加商品和支付订单的方法

```csharp
// 参考答案
public class Order
{
    public string OrderId { get; }
    public List<OrderItem> Items { get; private set; }
    public bool IsPaid { get; private set; }

    // 计算属性
    public decimal TotalAmount => Items.Sum(item => item.Price * item.Quantity);
    public bool IsEmpty => Items.Count == 0;
    public string OrderStatus
    {
        get
        {
            if (IsEmpty) return "空订单";
            if (IsPaid) return "已支付";
            return "待支付";
        }
    }

    public Order(string orderId)
    {
        OrderId = orderId;
        Items = new List<OrderItem>();
        IsPaid = false;
    }

    public void AddItem(string productName, decimal price, int quantity = 1)
    {
        if (IsPaid)
            throw new InvalidOperationException("订单已支付，不能添加商品");

        Items.Add(new OrderItem
        {
            ProductName = productName,
            Price = price,
            Quantity = quantity
        });
    }

    public void ProcessPayment()
    {
        if (IsEmpty)
            throw new InvalidOperationException("空订单不能支付");

        IsPaid = true;
        Console.WriteLine($"订单 {OrderId} 支付成功，金额: {TotalAmount:C}");
    }

    public string GetOrderSummary()
    {
        return $"订单 {OrderId} - {OrderStatus} - 总额: {TotalAmount:C} - 商品数: {Items.Count}";
    }
}

public class OrderItem
{
    public string ProductName { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }
}
```

示例：计算属性

```csharp
using System;

// 简单的圆类：演示计算属性的基础用法
public class Circle
{
    // 普通字段：存储半径值
    private double _radius;

    // 普通可写属性：半径（带简单校验，确保半径非负）
    public double Radius
    {
        get
        {
            // 获取私有字段的值
            return _radius;
        }
        set
        {
            // 校验：半径不能为负数，否则设为0
            if (value >= 0)
            {
                _radius = value;
            }
            else
            {
                _radius = 0;
            }
        }
    }

    // 计算属性1：面积（只读，通过半径动态计算）
    public double Area
    {
        get
        {
            // 圆的面积公式：π × 半径²
            return Math.PI * _radius * _radius;
        }
    }

    // 计算属性2：周长（只读，通过半径动态计算）
    public double Perimeter
    {
        get
        {
            // 圆的周长公式：2 × π × 半径
            return 2 * Math.PI * _radius;
        }
    }
}

// 测试代码：验证计算属性的效果
public class Program
{
    public static void Main()
    {
        // 1. 创建圆对象，设置半径为5
        Circle circle1 = new Circle();
        circle1.Radius = 5;
        Console.WriteLine("半径为5的圆：");
        Console.WriteLine($"面积 = {circle1.Area:F2}"); // F2：保留2位小数
        Console.WriteLine($"周长 = {circle1.Perimeter:F2}");

        Console.WriteLine("-----分割线-----");

        // 2. 修改半径为10，计算属性自动更新
        circle1.Radius = 10;
        Console.WriteLine("半径改为10的圆：");
        Console.WriteLine($"面积 = {circle1.Area:F2}");
        Console.WriteLine($"周长 = {circle1.Perimeter:F2}");

        Console.WriteLine("-----分割线-----");

        // 3. 测试负数半径（校验生效，半径设为0）
        circle1.Radius = -3;
        Console.WriteLine("半径设为-3（自动修正为0）的圆：");
        Console.WriteLine($"面积 = {circle1.Area:F2}");
        Console.WriteLine($"周长 = {circle1.Perimeter:F2}");
    }
}
```
运行结果

```csharp
半径为5的圆：
面积 = 78.54
周长 = 31.42
-----分割线-----
半径改为10的圆：
面积 = 314.16
周长 = 62.83
-----分割线-----
半径设为-3（自动修正为0）的圆：
面积 = 0.00
周长 = 0.00
```

### **练习题 10：综合练习 - 完整的用户管理系统**

**题目**：创建一个 `User` 类，综合运用各种属性类型：

- 用户ID (UserId) - 只读
- 用户名 (Username) - 带验证的完整属性
- 邮箱 (Email) - 带验证的完整属性
- 密码 (Password) - 只写属性
- 创建时间 (CreatedAt) - 只读
- 最后登录时间 (LastLoginAt)
- 是否是管理员 (IsAdmin) - 计算属性

**要求**：

- 用户名和邮箱有格式验证
- 密码只写，立即进行哈希处理
- 是否是管理员基于邮箱域名判断

```csharp
// 参考答案
public class User
{
    public string UserId { get; }
    public DateTime CreatedAt { get; }
    public DateTime? LastLoginAt { get; private set; }

    private string _username;
    private string _email;
    private string _passwordHash;

    public string Username
    {
        get => _username;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("用户名不能为空");
            if (value.Length < 3)
                throw new ArgumentException("用户名至少3个字符");
            if (value.Length > 20)
                throw new ArgumentException("用户名最多20个字符");
            
            _username = value.Trim();
        }
    }

    public string Email
    {
        get => _email;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("邮箱不能为空");
            if (!value.Contains("@") || !value.Contains("."))
                throw new ArgumentException("邮箱格式不正确");
            
            _email = value.Trim().ToLower();
        }
    }

    public string Password
    {
        set
        {
            if (string.IsNullOrWhiteSpace(value) || value.Length < 6)
                throw new ArgumentException("密码至少6个字符");
            
            _passwordHash = HashPassword(value);
            Console.WriteLine("密码已设置并哈希处理");
        }
    }

    // 计算属性
    public bool IsAdmin => _email.EndsWith("@admin.com");
    public bool IsEmailVerified => !string.IsNullOrEmpty(_email);
    public string UserLevel
    {
        get
        {
            if (IsAdmin) return "管理员";
            if (_email.EndsWith("@vip.com")) return "VIP用户";
            return "普通用户";
        }
    }

    public User(string userId, string username, string email)
    {
        UserId = userId;
        Username = username;
        Email = email;
        CreatedAt = DateTime.Now;
    }

    public bool VerifyPassword(string password)
    {
        return HashPassword(password) == _passwordHash;
    }

    public void RecordLogin()
    {
        LastLoginAt = DateTime.Now;
        Console.WriteLine($"用户 {Username} 于 {LastLoginAt:yyyy-MM-dd HH:mm:ss} 登录");
    }

    public string GetUserInfo()
    {
        return $"用户 {Username} ({UserId}) - 等级: {UserLevel} - 注册于: {CreatedAt:yyyy-MM-dd}";
    }

    private string HashPassword(string password)
    {
        // 简单的哈希示例
        using var sha256 = System.Security.Cryptography.SHA256.Create();
        var bytes = System.Text.Encoding.UTF8.GetBytes(password + UserId); // 加盐
        var hash = sha256.ComputeHash(bytes);
        return Convert.ToBase64String(hash);
    }
}
```

### **题目11：定义 Book 类**

```csharp
using System;

public class Book
{
    // 书名属性 - 使用自动属性
    public string Title { get; set; }
    
    // 价格属性 - 使用完整属性添加验证逻辑
    private decimal _price;
    public decimal Price
    {
        get { return _price; }
        set 
        { 
            // 保证价格不能小于0
            if (value < 0)
            {
                _price = 0;
                Console.WriteLine("警告：价格不能为负数，已自动设置为0");
            }
            else
            {
                _price = value;
            }
        }
    }
}

class Program
{
    static void Main()
    {
        // 创建第一个 Book 对象
        Book book1 = new Book();
        book1.Title = "C#编程入门";
        book1.Price = 59.90m;
        
        // 创建第二个 Book 对象
        Book book2 = new Book();
        book2.Title = "数据结构与算法";
        book2.Price = -29.99m; // 测试负数价格
        
        // 输出书名和价格
        Console.WriteLine("=== 图书信息 ===");
        Console.WriteLine($"书名: {book1.Title}, 价格: {book1.Price:C}");
        Console.WriteLine($"书名: {book2.Title}, 价格: {book2.Price:C}");
    }
}
```

**输出结果：**

```
警告：价格不能为负数，已自动设置为0
=== 图书信息 ===
书名: C#编程入门, 价格: ￥59.90
书名: 数据结构与算法, 价格: ￥0.00
```

### **题目12：更完善的版本（包含构造函数）**

```csharp
using System;

public class Book
{
    // 书名属性
    public string Title { get; set; }
    
    // 价格属性 - 带验证逻辑
    private decimal _price;
    public decimal Price
    {
        get { return _price; }
        set 
        { 
            // 保证价格不能小于0
            if (value < 0)
            {
                throw new ArgumentException("价格不能为负数");
            }
            _price = value;
        }
    }
    
    // 默认构造函数
    public Book()
    {
        Title = "未知书名";
        _price = 0;
    }
    
    // 带参数的构造函数
    public Book(string title, decimal price)
    {
        Title = title;
        Price = price; // 使用属性赋值，会触发验证逻辑
    }
    
    // 显示图书信息的方法
    public void DisplayInfo()
    {
        Console.WriteLine($"书名: {Title}, 价格: {Price:C}");
    }
}

class Program
{
    static void Main()
    {
        try
        {
            // 创建第一个 Book 对象（使用构造函数）
            Book book1 = new Book("C#编程入门", 59.90m);
            
            // 创建第二个 Book 对象（使用默认构造函数+属性赋值）
            Book book2 = new Book();
            book2.Title = "数据结构与算法";
            book2.Price = 79.80m;
            
            // 创建第三个 Book 对象（测试负数价格）
            Book book3 = new Book("测试图书", -10.00m); // 这会抛出异常
            
            // 输出书名和价格
            Console.WriteLine("=== 图书信息 ===");
            book1.DisplayInfo();
            book2.DisplayInfo();
            book3.DisplayInfo();
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"错误: {ex.Message}");
        }
    }
}
```

### **题目13：使用对象初始化器的版本**

```csharp
using System;

public class Book
{
    // 书名属性
    public string Title { get; set; } = "未知书名";
    
    // 价格属性 - 带验证逻辑
    private decimal _price;
    public decimal Price
    {
        get { return _price; }
        set 
        { 
            // 保证价格不能小于0
            if (value < 0)
            {
                _price = 0;
                Console.WriteLine($"警告：'{Title}' 的价格不能为负数，已自动设置为0");
            }
            else
            {
                _price = value;
            }
        }
    }
    
    // 显示图书信息的方法
    public void DisplayInfo()
    {
        Console.WriteLine($"书名: {Title}, 价格: {Price:C}");
    }
}

class Program
{
    static void Main()
    {
        // 使用对象初始化器创建 Book 对象
        Book book1 = new Book 
        { 
            Title = "C#编程入门", 
            Price = 59.90m 
        };
        
        Book book2 = new Book 
        { 
            Title = "数据结构与算法", 
            Price = -29.99m  // 测试负数价格
        };
        
        Book book3 = new Book 
        { 
            Title = "ASP.NET Core开发", 
            Price = 89.00m 
        };
        
        // 输出书名和价格
        Console.WriteLine("=== 图书信息 ===");
        book1.DisplayInfo();
        book2.DisplayInfo();
        book3.DisplayInfo();
        
        // 测试修改价格
        Console.WriteLine("\n=== 修改价格测试 ===");
        book1.Price = 49.90m;  // 正常修改
        book2.Price = -15.00m; // 再次测试负数价格
        
        Console.WriteLine("修改后的价格:");
        book1.DisplayInfo();
        book2.DisplayInfo();
    }
}
```

**输出结果：**

```
警告：'数据结构与算法' 的价格不能为负数，已自动设置为0
=== 图书信息 ===
书名: C#编程入门, 价格: ￥59.90
书名: 数据结构与算法, 价格: ￥0.00
书名: ASP.NET Core开发, 价格: ￥89.00

=== 修改价格测试 ===
警告：'数据结构与算法' 的价格不能为负数，已自动设置为0
修改后的价格:
书名: C#编程入门, 价格: ￥49.90
书名: 数据结构与算法, 价格: ￥0.00
```

### **练习要点总结**

通过这些练习，你应该掌握：

1. **自动属性语法**

```csharp
public string Name { get; set; } = "默认值";
```

1. **完整属性语法**

```csharp
private string _name;
public string Name
{
    get { return _name; }
    set { _name = value; }
}
```

1. **只读属性**

```csharp
public string Id { get; }  // 构造函数中赋值
public double Area => Width * Height;  // 计算属性
```

1. **只写属性**

```csharp
public string Password
{
    set { _passwordHash = HashPassword(value); }
}
```

1. **属性验证逻辑**

```csharp
set 
{
    if (value < 0)
        throw new ArgumentException("不能为负数");
    _field = value;
}
```

1. **访问级别控制**

```csharp
public decimal Salary { get; private set; }
public string Name { get; internal set; }
```

1. **静态属性**

```csharp
public static int Count { get; private set; }
```

1. 属性验证的重要性

- 保证数据的有效性
- 防止非法状态
- 提高代码的健壮性
- 提供清晰的错误信息

自动属性语法

```csharp
public string Title { get; set; }
```

1. 完整属性语法（带验证逻辑）

```csharp
private decimal _price;
public decimal Price
{
    get { return _price; }
    set 
    { 
        if (value < 0)
        {
            _price = 0;
            // 或者抛出异常：throw new ArgumentException("价格不能为负数");
        }
        else
        {
            _price = value;
        }
    }
}
```

对象创建方式

```csharp
// 方式1：使用构造函数
Book book1 = new Book("书名", 价格);

// 方式2：使用默认构造函数+属性赋值
Book book2 = new Book();
book2.Title = "书名";
book2.Price = 价格;

// 方式3：使用对象初始化器
Book book3 = new Book { Title = "书名", Price = 价格 };
```