---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 字段  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 字段  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---

## **一、字段是什么**

- 字段是类中变量；
- 字段用于存储状态数据。
- 字段表示对象的状态。

```csharp
public class Person
{
    // 字段 - 存储对象的数据
    private string name;        // 存储姓名
    private int age;           // 存储年龄
    private string email;      // 存储邮箱
}
```

## **二、状态数据是什么**

状态就是对象在某个时刻的"样子"或"情况"。

- 状态数据就是对象在某个时刻的"数据样子"或“数据情况”。
- 状态数据强调变量中的数据会随着时间改变的数据。
- 状态决定行为

## **三、声明字段的语法**

```csharp
[访问修饰符] [数据类型] [字段名称] [= 初始值];
```

### **示例**

```csharp
public class Student
{
    // 私有字段（只能在类内部访问）
    private string studentId;
    private string name;
    private int age;
    private List<string> courses;
    
    // 公有字段（不推荐，但需要了解）
    public string schoolName;
    
    // 带初始值的字段
    private bool isGraduated = false;
    private DateTime createdDate = DateTime.Now;
    
    // 只读字段（只能在声明时或构造函数中赋值）
    private readonly string country = "中国";
    
    // 常量字段（编译时常量）
    public const int MaxCourseCount = 10;
}
```

## **四、字段初始化的规则**

| **字段类型**     | **是否必须初始化** | **默认值**       | **说明**                                 |
| :--------------- | :----------------- | :--------------- | :--------------------------------------- |
| **实例字段**     | 否               | 对应类型的默认值 | 数值类型为0，引用类型为null，bool为false |
| **静态字段**     | 否              | 对应类型的默认值 | 同上                                     |
| **readonly字段** | **是**           | 无               | 必须在声明时或构造函数中初始化           |
| **const字段**    | **是**           | 无               | 必须在声明时初始化                       |

示例

```csharp
public class MyClass
{
    // 未初始化 - 使用默认值(0)
    private int count;
    
    // 显式初始化 - 推荐做法
    private string name = "Unknown";
    
    // readonly字段 - 必须初始化
    private readonly DateTime createdDate = DateTime.Now;
    
    // const字段 - 必须在声明时初始化
    private const int MaxSize = 100;
    
    // 在构造函数中初始化
    public MyClass()
    {
        // 可以在这里初始化字段
        count = 0;
        // createdDate 如果未在声明处初始化，必须在这里初始化
    }
}
```

1. **声明时初始化**：
   - 适用于大多数情况，特别是当初始值不依赖于构造函数参数或外部因素时。
   - 可以使代码更简洁，直接看到字段的初始值。
   - 如果多个构造函数都有相同的初始值，那么在声明时初始化可以避免在每个构造函数中重复赋值。
2. **构造函数中初始化**：
   - 当初始值依赖于构造函数参数或其他运行时条件时，必须在构造函数中初始化。
   - 当有多个构造函数且每个构造函数需要不同的初始值时，需要在各自的构造函数中初始化。
3. **同时使用**：有时，我们会在声明时给一个默认值，然后在构造函数中根据条件修改它。这通常用于当默认值在大多数情况下适用，但某些情况下需要改变。
4. **只读字段**：对于`readonly`字段，如果不在声明时初始化，则必须在构造函数中初始化。

## **五、字段命名规范**

字段名称: 通常使用 camelCase 命名；

```csharp
public class NamingExample
{
    // ✅ 好的命名
    private string firstName;
    private int studentAge;
    private decimal accountBalance;
    private bool isActive;
    private DateTime createdDate;
    
    // ❌ 不好的命名
    private string n;          // 太简单
    private int a;             // 无意义
    private bool flag;         // 不明确
    private string str;        // 类型作为名称
}
```

## **六、练习**

### **题目 1：创建学生类**

要求：1. 创建一个 `Student` 类，包含以下字段；2. 然后创建几个学生对象并给字段赋值。

| **学号 (studentId)** | **姓名 (name)** | **年龄 (age)** | **班级 (className)** | **成绩 (score)** |
| -------------------- | --------------- | -------------- | -------------------- | ---------------- |
| S001                 | 张三            | 18             | 高一(1)班            | 85.5             |
| S002                 | 李四            | 17             | 高一(2)班            | 92.0             |

[参考答案](https://dotnetfiddle.net/KC3Hfj)

```csharp
using System;

public class Student
{
    // 字段声明
    public string studentId;
    public string name;
    public int age;
    public string className;
    public double score;
}

class Program
{
    static void Main()
    {
        // 创建第一个学生对象
        Student student1 = new Student();
        student1.studentId = "S001";
        student1.name = "张三";
        student1.age = 18;
        student1.className = "高一(1)班";
        student1.score = 85.5;
        
        // 创建第二个学生对象
        Student student2 = new Student();
        student2.studentId = "S002";
        student2.name = "李四";
        student2.age = 17;
        student2.className = "高一(2)班";
        student2.score = 92.0;
        
        // 显示学生信息
        Console.WriteLine("=== 学生信息 ===");
        Console.WriteLine($"学号: {student1.studentId}, 姓名: {student1.name}, 年龄: {student1.age}, 班级: {student1.className}, 成绩: {student1.score}");
        Console.WriteLine($"学号: {student2.studentId}, 姓名: {student2.name}, 年龄: {student2.age}, 班级: {student2.className}, 成绩: {student2.score}");
    }
}
```

### **题目 2：创建图书类**

要求：1. 创建一个 `Book` 类，包含以下字段；2. 创建几本图书对象并赋值。

| **书名 (title)** | **作者 (author)** | **ISBN (isbn)**   | **价格 (price)** | **页数 (pageCount)** | **是否可借 (isAvailable)** |
| ---------------- | ----------------- | ----------------- | ---------------- | -------------------- | -------------------------- |
| C#编程入门       | 王老师            | 978-7-121-12345-6 | 59.90m           | 350                  | true                       |
| 数据结构与算法   | 李教授            | 978-7-121-12346-3 | 79.80m           | 480                  | false                      |
| 数据库原理       | 张博士            | 978-7-121-12347-0 | 65.00m           | 420                  | true                       |

[参考答案](https://dotnetfiddle.net/9Omk0i)

```csharp
using System;

public class Book
{
    // 字段声明
    public string title;
    public string author;
    public string isbn;
    public decimal price;
    public int pageCount;
    public bool isAvailable;
}

class Program
{
    static void Main()
    {
        // 创建第一本书
        Book book1 = new Book();
        book1.title = "C#编程入门";
        book1.author = "王老师";
        book1.isbn = "978-7-121-12345-6";
        book1.price = 59.90m;
        book1.pageCount = 350;
        book1.isAvailable = true;
        
        // 创建第二本书
        Book book2 = new Book();
        book2.title = "数据结构与算法";
        book2.author = "李教授";
        book2.isbn = "978-7-121-12346-3";
        book2.price = 79.80m;
        book2.pageCount = 480;
        book2.isAvailable = false;
        
        // 创建第三本书
        Book book3 = new Book();
        book3.title = "数据库原理";
        book3.author = "张博士";
        book3.isbn = "978-7-121-12347-0";
        book3.price = 65.00m;
        book3.pageCount = 420;
        book3.isAvailable = true;
        
        // 显示图书信息
        Console.WriteLine("=== 图书信息 ===");
        Console.WriteLine($"书名: {book1.title}, 作者: {book1.author}, 价格: {book1.price}元, 可借: {book1.isAvailable}");
        Console.WriteLine($"书名: {book2.title}, 作者: {book2.author}, 价格: {book2.price}元, 可借: {book2.isAvailable}");
        Console.WriteLine($"书名: {book3.title}, 作者: {book3.author}, 价格: {book3.price}元, 可借: {book3.isAvailable}");
    }
}
```

### **题目 3：创建汽车类**

要求：1. 创建一个 `Car` 类，包含以下字段；2.创建几个汽车对象并赋值。

| **品牌 (brand)** | **型号 (model)** | **颜色 (color)** | **生产年份 (year)** | **价格 (price)** | **里程数 (mileage)** |
| ---------------- | ---------------- | ---------------- | ------------------- | ---------------- | -------------------- |
| 丰田             | 凯美瑞           | 白色             | 2022                | 189000m          | 15000.5              |
| 本田             | 雅阁             | 黑色             | 2021                | 175000m          | 25000.0              |
| 大众             | 帕萨特           | 银色             | 2023                | 195000m          | 8000.0               |

[参考答案](https://dotnetfiddle.net/oYjAbB)

```csharp
using System;

public class Car
{
    // 字段声明
    public string brand;
    public string model;
    public string color;
    public int year;
    public decimal price;
    public double mileage;
}

class Program
{
    static void Main()
    {
        // 创建第一辆车
        Car car1 = new Car();
        car1.brand = "丰田";
        car1.model = "凯美瑞";
        car1.color = "白色";
        car1.year = 2022;
        car1.price = 189000m;
        car1.mileage = 15000.5;
        
        // 创建第二辆车
        Car car2 = new Car();
        car2.brand = "本田";
        car2.model = "雅阁";
        car2.color = "黑色";
        car2.year = 2021;
        car2.price = 175000m;
        car2.mileage = 25000.0;
        
        // 创建第三辆车
        Car car3 = new Car();
        car3.brand = "大众";
        car3.model = "帕萨特";
        car3.color = "银色";
        car3.year = 2023;
        car3.price = 195000m;
        car3.mileage = 8000.0;
        
        // 显示汽车信息
        Console.WriteLine("=== 汽车信息 ===");
        Console.WriteLine($"品牌: {car1.brand}, 型号: {car1.model}, 颜色: {car1.color}, 年份: {car1.year}, 价格: {car1.price}元, 里程: {car1.mileage}km");
        Console.WriteLine($"品牌: {car2.brand}, 型号: {car2.model}, 颜色: {car2.color}, 年份: {car2.year}, 价格: {car2.price}元, 里程: {car2.mileage}km");
        Console.WriteLine($"品牌: {car3.brand}, 型号: {car3.model}, 颜色: {car3.color}, 年份: {car3.year}, 价格: {car3.price}元, 里程: {car3.mileage}km");
    }
}
```

### **题目 4：创建手机类**

要求：1. 创建一个 `Phone` 类，包含以下字段； 2.创建几个手机对象并赋值。

| **品牌 (brand)** | **型号 (model)** | **颜色 (color)** | **价格 (price)** | **内存大小 (memoryGB)** | **屏幕尺寸 (screenSize)** |
| ---------------- | ---------------- | ---------------- | ---------------- | ----------------------- | ------------------------- |
| 苹果             | iPhone 15        | 黑色             | 5999m            | 128                     | 6.1                       |
| 华为             | Mate 60          | 银色             | 5499m            | 128                     | 6.7                       |
| 小米             | 14 Pro           | 蓝色             | 4999m            | 512                     | 6.73                      |

[参考答案](https://dotnetfiddle.net/qrS4EE)

```csharp
using System;

public class Phone
{
    // 字段声明
    public string brand;
    public string model;
    public string color;
    public decimal price;
    public int memoryGB;
    public double screenSize;
}

class Program
{
    static void Main()
    {
        // 创建第一个手机
        Phone phone1 = new Phone();
        phone1.brand = "苹果";
        phone1.model = "iPhone 15";
        phone1.color = "黑色";
        phone1.price = 5999m;
        phone1.memoryGB = 128;
        phone1.screenSize = 6.1;
        
        // 创建第二个手机
        Phone phone2 = new Phone();
        phone2.brand = "华为";
        phone2.model = "Mate 60";
        phone2.color = "银色";
        phone2.price = 5499m;
        phone2.memoryGB = 256;
        phone2.screenSize = 6.7;
        
        // 创建第三个手机
        Phone phone3 = new Phone();
        phone3.brand = "小米";
        phone3.model = "14 Pro";
        phone3.color = "蓝色";
        phone3.price = 4999m;
        phone3.memoryGB = 512;
        phone3.screenSize = 6.73;
        
        // 显示手机信息
        Console.WriteLine("=== 手机信息 ===");
        Console.WriteLine($"品牌: {phone1.brand}, 型号: {phone1.model}, 颜色: {phone1.color}, 价格: {phone1.price}元, 内存: {phone1.memoryGB}GB, 屏幕: {phone1.screenSize}英寸");
        Console.WriteLine($"品牌: {phone2.brand}, 型号: {phone2.model}, 颜色: {phone2.color}, 价格: {phone2.price}元, 内存: {phone2.memoryGB}GB, 屏幕: {phone2.screenSize}英寸");
        Console.WriteLine($"品牌: {phone3.brand}, 型号: {phone3.model}, 颜色: {phone3.color}, 价格: {phone3.price}元, 内存: {phone3.memoryGB}GB, 屏幕: {phone3.screenSize}英寸");
    }
}
```

### **题目 5：创建游戏角色类**

要求：1. 创建一个 `GameCharacter` 类，包含以下字段； 2.创建几个游戏角色对象并赋值。

| **角色名 (characterName)** | **职业 (profession)** | **等级 (level)** | **生命值 (health)** | **魔法值 (mana)** | **攻击力 (attack)** | **防御力 (defense)** |
| -------------------------- | --------------------- | ---------------- | ------------------- | ----------------- | ------------------- | -------------------- |
| 雷霆战神                   | 战士                  | 45               | 1500                | 200               | 180                 | 120                  |
| 冰霜法师                   | 法师                  | 42               | 800                 | 800               | 220                 | 60                   |
| 森林游侠                   | 弓箭手                | 40               | 1000                | 300               | 190                 | 80                   |

[参考答案](https://dotnetfiddle.net/ROCJoc)


```csharp
using System;

public class GameCharacter
{
    // 字段声明
    public string characterName;
    public string profession;
    public int level;
    public int health;
    public int mana;
    public int attack;
    public int defense;
}

class Program
{
    static void Main()
    {
        // 创建第一个角色
        GameCharacter char1 = new GameCharacter();
        char1.characterName = "雷霆战神";
        char1.profession = "战士";
        char1.level = 45;
        char1.health = 1500;
        char1.mana = 200;
        char1.attack = 180;
        char1.defense = 120;
        
        // 创建第二个角色
        GameCharacter char2 = new GameCharacter();
        char2.characterName = "冰霜法师";
        char2.profession = "法师";
        char2.level = 42;
        char2.health = 800;
        char2.mana = 800;
        char2.attack = 220;
        char2.defense = 60;
        
        // 创建第三个角色
        GameCharacter char3 = new GameCharacter();
        char3.characterName = "森林游侠";
        char3.profession = "弓箭手";
        char3.level = 40;
        char3.health = 1000;
        char3.mana = 300;
        char3.attack = 190;
        char3.defense = 80;
        
        // 显示角色信息
        Console.WriteLine("=== 游戏角色信息 ===");
        Console.WriteLine($"角色名: {char1.characterName}, 职业: {char1.profession}, 等级: {char1.level}, 生命: {char1.health}, 魔法: {char1.mana}, 攻击: {char1.attack}, 防御: {char1.defense}");
        Console.WriteLine($"角色名: {char2.characterName}, 职业: {char2.profession}, 等级: {char2.level}, 生命: {char2.health}, 魔法: {char2.mana}, 攻击: {char2.attack}, 防御: {char2.defense}");
        Console.WriteLine($"角色名: {char3.characterName}, 职业: {char3.profession}, 等级: {char3.level}, 生命: {char3.health}, 魔法: {char3.mana}, 攻击: {char3.attack}, 防御: {char3.defense}");
    }
}
```