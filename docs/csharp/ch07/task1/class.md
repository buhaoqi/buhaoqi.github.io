---
# 这部分是关键！侧边栏显示名由这里决定
title: 子任务一 类是什么  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 子任务一 类是什么  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---
## **一、类（Class）是什么？**
在面向对象编程中：

- 类是定义对象属性和方法的模板。
- 类是一个抽象的概念，它描述了具有相同属性和方法的对象的集合。
- 类是一种数据类型。

在生活中：

- 类是事物的抽象。比如：人类、鸟类都是事物的抽象。
- 类用来描述一类事物的共性。也就是事物的特征（属性）和行为（方法）

## **二、定义类的语法**

一个典型的类通常由以下四种成员组成：

1. 字段（Field）：定义类的特征
2. 属性（Property）：封装字段
3. 方法（Method）：定义类的行为
4. 构造函数（Constructor）：初始化类

成员共同定义了类的特征和行为。不同类型的成员在面向对象编程中承担不同的角色，这些成员共同构建了类的结构和功能，使其具有自己的特性和行为。

```csharp
using System;

// 定义顶级类
[类访问修饰符] [类修饰符] class 类名 [: 基类] [, 接口列表]
{
    
    字段访问修饰符 数据类型 字段名称;//字段
    //属性成员
    //方法成员
    //构造函数
}

class Program
{
    // 定义嵌套类
    [类访问修饰符] [类修饰符] class 类名 [: 基类] [, 接口列表]
    {
        
        字段访问修饰符 数据类型 字段名称;//字段
        //属性成员
        //方法成员
        //构造函数
    }

    static void Main(string[] args)
    {
        
    }
}
```

### 类名
1. **帕斯卡命名法**：类名通常使用帕斯卡命名法：每个单词的首字母大写，其他小写。例如GetInfo等
2. **语义化**：类名应该具有描述性，以便在不查看类的定义的情况下也可以理解它的用途，避免使用单个字符或不具有描述性的类名。
3. **名词化**：如果类是具体的类型，类名通常使用名词，反映实际世界中的对象。的首字母大写。


## 三、示例：定义类
### 示例1：定义Person 类
#### 定义Person类
- **字段**：`name`、`age`、`gender` - 存储人的基本信息
- <strike>**构造函数**：创建对象时初始化数据</strike>
- <strike>**属性**：提供对字段的安全访问</strike>
- **方法**：定义人的行为（自我介绍、过生日、判断是否可以开车）
```csharp
using System;

// 定义一个人类
public class Person
{
    // 字段（存储数据）
    private string name;    // 姓名
    private int age;        // 年龄
    private string gender;  // 性别
    
    // 构造函数（创建对象时自动调用）
    public Person(string name, int age, string gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
  /*  
    // 属性（访问字段）
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    
    public int Age
    {
        get { return age; }
        set { age = value; }
    }
    
    public string Gender
    {
        get { return gender; }
        set { gender = value; }
    }
  */  
    // 自我介绍方法
    public void Introduce()
    {
        Console.WriteLine($"大家好，我叫{name}，今年{age}岁，性别{gender}。");
    }
    
    // 过生日方法（年龄加1）
    public void HaveBirthday()
    {
        age++;
        Console.WriteLine($"祝{name}生日快乐！现在{age}岁了。");
    }
    
    // 判断是否可以开车（假设18岁可以开车）
    public void CanDrive()
    {
        if (age >= 18)
        {
            Console.WriteLine($"{name}可以开车了。");
        }
        else
        {
            Console.WriteLine($"{name}还不能开车，还差{18 - age}年。");
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        
    }
}
```
### 示例2：定义Calculator 类
- **字段**：`result` - 存储计算结果，`calculateCount` - 记录计算次数
- <strike>**构造函数重载**：提供多种创建对象的方式</strike>
- **方法**：实现基本的数学运算（加、减、乘、除）
- **安全处理**：除法运算中检查除数是否为0
#### 定义Calculator类

```csharp
using System;

// 定义一个计算器类
public class Calculator
{
    // 字段
    private double result;  // 计算结果
    private int calculateCount;  // 计算次数
    
    // 构造函数
    public Calculator()
    {
        result = 0;
        calculateCount = 0;
        Console.WriteLine("计算器已创建，初始值为0");
    }
    
    // 带初始值的构造函数
    public Calculator(double initialValue)
    {
        result = initialValue;
        calculateCount = 0;
        Console.WriteLine($"计算器已创建，初始值为{initialValue}");
    }
    
    // 属性
    public double Result
    {
        get { return result; }
    }
    
    public int CalculateCount
    {
        get { return calculateCount; }
    }
    
    // 加法
    public void Add(double number)
    {
        result += number;
        calculateCount++;
        Console.WriteLine($"执行加法：+ {number} = {result}");
    }
    
    // 减法
    public void Subtract(double number)
    {
        result -= number;
        calculateCount++;
        Console.WriteLine($"执行减法：- {number} = {result}");
    }
    
    // 乘法
    public void Multiply(double number)
    {
        result *= number;
        calculateCount++;
        Console.WriteLine($"执行乘法：× {number} = {result}");
    }
    
    // 除法
    public void Divide(double number)
    {
        if (number != 0)
        {
            result /= number;
            calculateCount++;
            Console.WriteLine($"执行除法：÷ {number} = {result}");
        }
        else
        {
            Console.WriteLine("错误：除数不能为0！");
        }
    }
    
    // 清零
    public void Clear()
    {
        result = 0;
        Console.WriteLine("计算器已清零");
    }
    
    // 显示当前结果
    public void ShowResult()
    {
        Console.WriteLine($"当前结果：{result}，已执行{calculateCount}次计算");
    }
}

class Program
{
    static void Main(string[] args)
    {
        
    }
}

```


## 四、对象是什么

**对象（Object）**：根据类创建的具体实例。它包含了类定义的属性和方法的具体值。比如：

- 小花是一只具体的猫对象。
- 张三是一个具体的人对象。
- 李四也是一个具体的人对象。

## **五、使用类的语法**

```csharp
using System;

// 定义类的位置
[类访问修饰符] [类修饰符] class 类名 [: 基类] [, 接口列表]
{
    // 定义类 见上
}

class Program
{
    static void Main(string[] args)
    {
        // 使用类的位置
        // 创建类的示例对象的语法
        类名 对象实例名称 = new 类的同名构造函数名();

        // 字段的读操作
        对象实例名称.字段名;

        // 字段的写操作
        对象实例名称.字段名 = 新值;
    }
}

```

## 六、示例：使用类
### 示例1：使用Person 类

```csharp
using System;
// 定义一个person类
public class Person
{
    // 定义类，见上
}
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== Person类示例 ===\n");
        
        // 创建Person对象
        Person person1 = new Person("张三", 20, "男");
        Person person2 = new Person("李四", 17, "女");
        
        // 调用对象的方法
        Console.WriteLine("=== person1的信息 ===");
        person1.Introduce();        // 输出：大家好，我叫张三，今年20岁，性别男。
        person1.CanDrive();         // 输出：张三可以开车了。
        
        Console.WriteLine("\n=== person2的信息 ===");
        person2.Introduce();        // 输出：大家好，我叫李四，今年17岁，性别女。
        person2.CanDrive();         // 输出：李四还不能开车，还差1年。
        
        Console.WriteLine("\n=== person2过生日 ===");
        person2.HaveBirthday();     // 年龄变为18
        person2.CanDrive();         // 现在可以开车了
        
        // 使用属性访问和修改数据
        Console.WriteLine("\n=== 使用属性修改数据 ===");
        Console.WriteLine($"修改前姓名：{person1.Name}");
        person1.Name = "张三丰";
        Console.WriteLine($"修改后姓名：{person1.Name}");
        
        Console.WriteLine("\n按任意键退出...");
        Console.ReadKey();
    }
}
```
这里有几个关键点：

1. Person: 数据类型。
2. p1：变量名，表示一个Person类型的对象。
3. `new` 关键字：表示在内存中“新建一个对象”。
4. `Person()`：调用的是**构造函数**
5. 在 C# 中，**构造函数的名字必须和类名相同**。如果你没写构造函数，C# 会自动提供一个默认的无参构造函数。

### 示例 2：使用Calculator类

```csharp
using System;

// 定义一个Calculator类
public class Calculator
{
    // 定义类，见上
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== Calculator类示例 ===\n");
        
        // 创建计算器对象
        Calculator calc1 = new Calculator();  // 使用默认构造函数
        Calculator calc2 = new Calculator(100);  // 使用带初始值的构造函数
        
        Console.WriteLine("\n--- calc1的计算过程 ---");
        calc1.ShowResult();     // 当前结果：0，已执行0次计算
        
        calc1.Add(10);          // 执行加法：+ 10 = 10
        calc1.Subtract(3);      // 执行减法：- 3 = 7
        calc1.Multiply(2);      // 执行乘法：× 2 = 14
        calc1.Divide(7);        // 执行除法：÷ 7 = 2
        
        calc1.ShowResult();     // 当前结果：2，已执行4次计算
        
        Console.WriteLine("\n--- calc2的计算过程 ---");
        calc2.ShowResult();     // 当前结果：100，已执行0次计算
        
        calc2.Add(50);          // 执行加法：+ 50 = 150
        calc2.Subtract(30);     // 执行减法：- 30 = 120
        calc2.Divide(2);        // 执行除法：÷ 2 = 60
        
        calc2.ShowResult();     // 当前结果：60，已执行3次计算
        
        // 测试除数为0的情况
        Console.WriteLine("\n--- 测试除数为0 ---");
        calc2.Divide(0);        // 错误：除数不能为0！
        
        // 测试清零功能
        Console.WriteLine("\n--- 测试清零功能 ---");
        calc2.Clear();          // 计算器已清零
        calc2.ShowResult();     // 当前结果：0，已执行3次计算
        
        Console.WriteLine("\n按任意键退出...");
        Console.ReadKey();
    }
}
```
