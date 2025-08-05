---
noteId: "bc4cbba053a511f0aac0b3efb7c28583"
tags: []

---
## 类是什么

- 类是创建对象的模板(图纸)。

> 这就好比别墅是一个对象，类就是建造别墅的图纸，通过图纸可以创建多个别墅。在这里，我们称：

> - 别墅 => 实例对象
> - 图纸 => 类
> 
> 一个类可以创建多个实例对象。

- 类用来组织数据和功能。简单说，定义一个类，就是定义：对象的属性和行为。

## 定义类的语法


```c# linenums="1"
[访问修饰符] class 类名
{
    // 字段（成员变量）
    [访问修饰符] 数据类型 字段名;

    // 属性
    [访问修饰符] 数据类型 属性名
    {
        get { /* 获取属性值的代码 */ }
        set { /* 设置属性值的代码 */ }
    }

    // 构造函数
    [访问修饰符] 类名([参数列表])
    {
        // 构造函数的代码
    }

    // 方法
    [访问修饰符] 返回类型 方法名([参数列表])
    {
        // 方法的代码
    }
}
```

## 创建不包含任何成员的类

```c# linenums="1"
using System;

namespace Lesson37
{
    public class Person
    {

    }
}
```

首先，我们来创建类名：

- 类名使用class关键词创建
- 但是，要注意：类，必须创建在namespace命名空间下。
- class关键词的后面是类名，类名要注意：需要遵循帕斯卡命名法，也就是每个单词首字母大写。
- 类名后是一组花括号，用于包裹类的模板代码。
- class关键词的前面是可选的修饰符，修饰符可以是public也可以是internal
    - 通常写public就可以，public表示House类可以在外部被访问
    - internal表示仅在当前程序集内部可以访问House类（一个 Visual Studio 项目 = 编译生成一个程序集）
    - 如果省略修饰符，默认internal


## 创建只有字段的类

- 字段是类的关键成员之一。
- 字段用于存储数据,你可以理解为字段就是类中的变量。
- 为了保障数据的安全性，字段通常使用private关键词创建。

所以，我们在Person类中，输入private string _name = "";
在创建一个_age字段：private int _age;

这样就创建类一个只包含两个字段的类。



```c#
using System;

namespace Lesson37
{
    class Person
    {
        //公共字段
        public string _name = "";
        //私有字段
        private int _age;
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            
            Person p = new Person();
            p._name = "John";
            // p._age = 18;
            Console.WriteLine(p._name);
        }
    } 
}
```

创建对象实例的语法：

```c#
类名 对象名 = new 类名();

```

- 有了类，我们就可以创建对象啦！在Main()方法中
- 输入类名Person p = new Person();
- 使用 new 关键字创建对象

访问对象的字段的语法:

```c#
对象名.字段名;
```

- 创建完实例对象后，我们可以尝试使用“点语法”访问对象的_name和_age属性。
- 发现无法访问，这是因为_name和_age字段都是私有的。
- 我们把_name的修饰符private修改为public
- 再次尝试访问，可以看到，公共字段在类的外面是可以访问的。

## 属性访问器

- 属性访问器定义的是类的属性
- 属性是访问字段的一种特殊机制。
- 属性允许访问字段的过程中添加自定义逻辑，比如：验证和计算
- 属性访问器包括get访问器和set访问器

语法

```c#
[访问修饰符] 数据类型 属性名
{
    get { /* 获取属性值的代码 */ }//无分号结尾
    set { /* 设置属性值的代码 */ }
}
```

- ​​get 访问器​​：用于​​读取属性值​​（返回字段的值）。
- set 访问器​​：用于​​设置属性值​​（通过 value 关键字接收外部传入的值）。

关于 value

- ​​value 是编译器隐式提供的参数​​，表示外部通过属性赋值时传入的值。
- 它​​不是由开发者显式声明的​​，而是 C# 语法的一部分。
- 每个属性的 set 访问器都有自己的 value，它们​​不会互相冲突​​，因为作用域仅限于各自的 set 块内。



## 包含字段和属性的类

```c# linenums="1"
class Person
{
    //公共字段
    private string _name = "";
    //私有字段
    private int _age;

    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    public int Age
    {
        get { return _age;}
        set { _age = value; }
    }
}
```

## 添加构造函数

```c#
namespace Lesson37;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        Person p = new Person();
        p.Name = "John";
        p.Age = 17;
        Console.WriteLine("{0},{1}",p.Name,p.Age);
        // string info = p.PrintInfo();
        bool isAdult = p.IsAdult();
        p.PrintInfo();
        Console.WriteLine(isAdult);
    }
}

class Person
{
    //公共字段
    private string _name = "";
    //私有字段
    private int _age;

    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    public int Age
    {
        get { return _age;}
        set { _age = value; }
    }
    
    //打印个人信息
    public void PrintInfo()
    {
        Console.WriteLine("姓名:{0},年龄:{1}", _name, _age);
    }
    //判断是否成年
    public bool IsAdult()
    {
        return _age >= 18;
    }
}
```

## 添加构造函数
```c# linenums="1"
class Person
{
    // 字段
    private string _name = ""; // 默认初始化为空字符串
    private int _age;          // 默认初始化为0

    // 属性
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    public int Age
    {
        get { return _age; }
        set { _age = value; }
    }

    // 原始默认构造函数（编译器自动生成，等价于以下代码）
    // public Person() { }

    // 新增的构造函数：允许在创建对象时直接初始化 Name 和 Age
    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }

    // 方法：打印个人信息
    public void PrintInfo()
    {
        Console.WriteLine($"Name: {_name}, Age: {_age}");
    }

    // 方法：判断是否成年
    public bool IsAdult()
    {
        return _age >= 18;
    }
}
```
构造函数有几个特点：

1. **名字和类名一模一样** - 就像双胞胎一样，绝不会认错
2. **没有返回类型** - 连void都不写，就是这么任性
3. **可以有参数** - 你想给它传什么初始值都行

## 构造函数的"三板斧"

### 1. 给属性赋值（最基本的）
```csharp
public class Person
{
    public string Name;
    public int Age;
    
    public Person(string name, int age)
    {
        Name = name;    // 把参数的值给属性
        Age = age;      // 就是这么简单！
    }
}
```

### 2. 设置默认值
```csharp
public Person(string name)
{
    Name = name;
    Age = 18;           // 给个默认年龄
    IsActive = true;    // 默认状态为活跃
    CreateTime = DateTime.Now;  // 记录创建时间
}
```

### 3. 做一些检查（防止错误）
```csharp
public Person(string name, int age)
{
    // 检查名字不能为空
    if (string.IsNullOrEmpty(name))
        throw new Exception("名字不能为空！");
    
    // 检查年龄要合理
    if (age < 0 || age > 150)
        throw new Exception("年龄不合理！");
    
    Name = name;
    Age = age;
}
```

## 实际思路：问自己这些问题

当你要写构造函数时，问问自己：

1. **这个对象需要哪些基本信息才能"活"？**
   - 比如Person需要名字，Car需要品牌

2. **有哪些属性需要初始值？**
   - 比如账户余额初始为0，学生状态默认为"在读"

3. **需要做什么检查吗？**
   - 比如年龄不能是负数，邮箱格式要正确

4. **需要初始化集合吗？**
   ```csharp
   public Library(string name)
   {
       Name = name;
       Books = new List<Book>();  // 初始化空列表
   }
   ```

## 最简单的模板
```csharp
public 类名(参数列表)
{
    // 1. 先做检查（如果需要）
    if (参数有问题)
        throw new Exception("错误信息");
    
    // 2. 给属性赋值
    属性1 = 参数1;
    属性2 = 参数2;
    
    // 3. 设置默认值
    其他属性 = 默认值;
    
    // 4. 初始化集合或做其他准备工作
    列表属性 = new List<类型>();
}
```

## 举个具体例子
```csharp
public class Student
{
    public string Name;
    public string StudentId;
    public List<string> Courses;
    public DateTime EnrollDate;
    public bool IsActive;
    
    public Student(string name, string studentId)
    {
        // 1. 检查
        if (string.IsNullOrEmpty(name))
            throw new Exception("学生姓名不能为空");
            
        // 2. 赋值
        Name = name;
        StudentId = studentId;
        
        // 3. 设置默认值
        EnrollDate = DateTime.Now;
        IsActive = true;
        
        // 4. 初始化集合
        Courses = new List<string>();
    }
}
```

记住：**构造函数就是让对象从"毛坯房"变成"精装房"的过程！**


## 案例: 创建别墅

### 类功能分析

这个类封装了房屋的基本属性和行为，可以通过构造函数创建房屋对象，并通过方法获取房屋信息和进行简单计算。属性验证确保房屋对象始终处于有效状态。

- 属性
    - address: 房屋地址(必填)
    - area: 总面积(平方米)
    - floors: 楼层数(至少一层)
    - bedroom: 卧室数量
    - bathroom: 卫生间数量
    - kitchen: 厨房数量
    - livingRoom: 客厅
    - Color: 墙壁颜色
    - HouseType: 房屋类型(普通、中等、高档)
    - HasGarden: 是否有花园
    - HasGarage: 是否有车库
    - BuildDate: 建造日期
    - price: 房屋价格
    - Features: 特殊功能列表
- 方法
    - AddFeature(): 添加房屋特色功能
    - RemoveFeature(): 移除房屋特色功能
    - GetHouseInfo(): 获取房屋描述信息
    - CalculatePricePerSquareMeter(): 计算每平方米价格
    - 重写ToString方法
- 构造函数
    - 默认构造函数
    - 参数化构造函数
- 验证逻辑
    - 阻止无效参数
    - 自动设置建设时间戳

### 代码实现：创建类

```csharp
class House
{
    //建造房屋需要哪些基本信息
    private string _address;
    public int _bedrooms;
    public int _bathrooms;
    public double _area;
    public string _houseType;
    public string _color;
    public bool _hasGarage;
    public bool _hasGarden;
    public DateTime _buildDate;
    public double _price;
    public List<string> _features;


    //哪些属性需要初始值

    //是否需要做什么检查()

    //需要初始化集合吗
}
```

