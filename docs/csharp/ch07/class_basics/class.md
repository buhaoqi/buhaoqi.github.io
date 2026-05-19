---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 类是什么  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 类是什么  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## **一、类（Class）是什么？**
在面向对象编程中：

- 类是定义对象的模板。
- 类定义了对象特征和行为。
- 类是一种数据类型。
- 类是同一类事务的统称。
    - 如果说对象是一个实体，那么类就是对象的定义。类是一个抽象的概念，它描述了具有相同属性和方法的对象的集合。


在生活中：

- 类是事物的抽象。比如：人类、鸟类都是事物的抽象。
- 类用来描述一类事物的共性。也就是事物的特征（属性）和行为（方法）

## 二、类的成员

一个典型的类通常由以下四种成员组成：

1. 字段（Field）：定义类的特征
2. 属性（Property）：封装字段
3. 构造函数（Constructor）：初始化类
4. 方法（Method）：定义类的行为

成员共同定义了类的特征和行为。不同类型的成员在面向对象编程中承担不同的角色，这些成员共同构建了类的结构和功能，使其具有自己的特性和行为。

C#类的全部成员类型一共有 13 种：

1. 字段
2. 常量
3. 属性
4. 索引器
5. 方法
6. 构造函数
7. 析构函数
8. 事件
9. 运算符重载
10. 嵌套类型
12. 静态构造函数
13. 继承自 object 的成员

## 三、声明类的语法
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

类名
1. **帕斯卡命名法**：类名通常使用帕斯卡命名法：每个单词的首字母大写，其他小写。例如GetInfo等
2. **语义化**：类名应该具有描述性，以便在不查看类的定义的情况下也可以理解它的用途，避免使用单个字符或不具有描述性的类名。
3. **名词化**：如果类是具体的类型，类名通常使用名词，反映实际世界中的对象。的首字母大写。


定义类的合法位置

在 C# 中，类（class）能直接定义的合法位置只有两个：

- 命名空间（namespace）内部
- 类（class）内部（也就是嵌套类）

除此之外，任何其他位置都不允许直接定义类，比如：方法内部、结构体内部、接口内部

直接写在文件顶层（没有 namespace 包裹时，属于全局命名空间，本质还是命名空间下）

## 四、对象是什么

**对象（Object）**：根据类创建的具体实例。它包含了类定义的属性和方法的具体值。比如：

- 小花是一只具体的猫对象。
- 张三是一个具体的人对象。
- 李四也是一个具体的人对象。

## **五、创建对象的语法**

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
## 五、类成员的顺序

方法放在构造函数后面，是**行业通用的代码组织习惯**，而非语法强制要求：
```csharp
// 语法上完全合法（方法在构造函数前）
public class Student
{
    // 字段
    private string _name;
    
    // 属性
    public string Name { get; set; }

    // 方法（放在构造函数前）
    public void ShowInfo()
    {
        Console.WriteLine(Name);
    }

    // 构造函数（在方法后）
    public Student(string name)
    {
        Name = name;
    }
}
```
上面的代码能正常编译运行，说明“方法位置”不影响功能——但行业里几乎都把方法放在构造函数后面，核心是为了**可读性**。

### 1.为什么习惯把方法放在构造函数后面？
类成员的排版遵循“**先静态/固定的，后动态/功能的**”原则，就像写文章“先介绍基础信息，再讲具体功能”：
| 成员类型 | 位置 | 原因（通俗解释） |
|----------|------|------------------|
| 字段     | 最前 | 类的“底层数据”，所有成员都依赖它，先定义再使用 |
| 属性     | 字段后 | 对字段的封装，紧挨着字段，便于关联查看 |
| 构造函数 | 属性后 | 类的“初始化逻辑”，在字段/属性定义完成后，才能初始化它们 |
| 方法     | 构造函数后 | 类的“核心功能”，是初始化完成后才会执行的逻辑，放在最后更符合“先准备、后使用”的思维 |

#### 举个生活例子：
定义“手机类”时，逻辑顺序是：
1. 先有“品牌、型号”这些**字段**（手机的基础数据）；
2. 再有“获取/设置品牌”的**属性**（操作数据的接口）；
3. 然后有“开机初始化”的**构造函数**（拿到手机先开机）；
4. 最后有“打电话、发消息”的**方法**（开机后才能用的功能）。

如果把方法插在字段和构造函数之间，就像“还没准备好手机硬件，先讲怎么打电话”，逻辑上不连贯。

### 2.语法层面的“使用顺序”要求
虽然方法位置不强制，但**成员的“定义顺序”必须满足“先定义，后使用”**：
```csharp
public class Student
{
    // 1. 先定义字段
    private string _name;

    // 2. 构造函数使用字段（合法，因为字段已定义）
    public Student(string name)
    {
        _name = name; // ✅ 字段已定义
    }

    // 3. 方法使用字段（合法，字段已定义）
    public void ShowInfo()
    {
        Console.WriteLine(_name); // ✅
    }
}
```
如果反过来，**在构造函数/方法里使用未定义的字段，才会报错**（但方法和构造函数的相对位置不影响）：
```csharp
public class Student
{
    public Student(string name)
    {
        _name = name; // ❌ 报错：_name尚未定义
    }

    private string _name; // 字段定义在构造函数后，使用时未定义
}
```

### 3.类成员排版顺序
为了代码统一、易读，推荐固定顺序（所有.NET项目基本遵循）：
1. 静态字段 → 实例字段（先私有，后公共）；
2. 静态属性 → 实例属性；
3. 构造函数（无参 → 有参）；
4. 静态方法 → 实例方法；
5. 事件/索引器（进阶内容）。

示例（标准排版）：
```csharp
public class Student
{
    // 1. 字段
    private string _name;
    private int _age;

    // 2. 属性
    public string Name { get; set; }
    public int Age { get; set; }

    // 3. 构造函数
    public Student() { } // 无参
    public Student(string name, int age) // 有参
    {
        Name = name;
        Age = age;
    }

    // 4. 方法
    public void ShowInfo()
    {
        Console.WriteLine($"{Name}，{Age}岁");
    }

    public void Study()
    {
        Console.WriteLine($"{Name}正在学习");
    }
}
```

### 总结
1. **语法层面**：方法放在构造函数前/后都合法，C#无强制要求；
2. **规范层面**：方法放构造函数后，符合“先定义数据→初始化→实现功能”的逻辑，提升可读性；
3. **核心记忆**：类成员排版的核心是“先基础（字段/属性），后初始化（构造函数），最后功能（方法）”，而非强制顺序；
4. 新手重点：不用纠结“必须放哪”，先按这个顺序写，养成规范的代码习惯即可。

简单说：**编译器不关心顺序，但人关心——好的顺序让你和同事能快速看懂代码**。


## 示例

### 示例1：定义Animal类
要求：

- 字段：_name (存储动物名字)
- 行为：MakeSound() (定义动物的行为)

参考代码：

```csharp
using System;

// 将Animal类设为public，且与Program同级（或设为static，适配静态Main方法）
public class Animal
{
    // 私有字段 + 公共属性（原代码写法没问题，保留）
    string _name;
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    // 重载1：无参数的MakeSound（基础版，通用叫声提示）
    public void MakeSound()
    {
        Console.WriteLine($"{Name}发出了叫声～");
    }

    // 重载2：带字符串参数的MakeSound（指定具体叫声）
    public void MakeSound(string sound)
    {
        Console.WriteLine($"{Name}发出了「{sound}」的声音");
    }

    // 重载3：带字符串+次数参数的MakeSound（参数个数不同，强化重载概念）
    public void MakeSound(string sound, int times)
    {
        for (int i = 0; i < times; i++)
        {
            Console.WriteLine($"{Name}第{i+1}次叫：{sound}");
        }
    }
}	
public class Program
{
    public static void Main()
    {
        // 实例化猫
        Animal cat = new Animal();
        cat.Name = "猫";
        // 调用无参的MakeSound
        cat.MakeSound();
        // 调用带1个参数的MakeSound（传入猫的叫声）
        cat.MakeSound("Meow");

        Console.WriteLine("-----分割线-----");

        // 实例化狗
        Animal dog = new Animal();
        dog.Name = "狗";
        // 调用带2个参数的MakeSound（传入狗的叫声+叫的次数）
        dog.MakeSound("Woof", 3);
    }
}
```

### 示例2：定义Person 类

- **字段**：`name`、`age`、`gender` - 存储人的基本信息
- <strike>**构造函数**：创建对象时初始化数据</strike>
- <strike>**属性**：提供对字段的安全访问</strike>
- **方法**：定义人的行为（自我介绍、过生日、判断是否可以开车）

参考代码：

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


### 示例3：定义“手机”类

特点：无构造函数，仅属性+方法

**要求**：

1. 类的定义
2. 属性（get/set）:Brand、 Model、Price
3. 方法: MakeCall()、 SendMessage()
4. 对象实例化


```csharp
using System;

// 1. 定义最简单的类：手机类（包含属性和方法）
public class Phone
{
    // 【属性】描述手机的特征（品牌、型号、价格）
    public string Brand { get; set; } // 品牌
    public string Model { get; set; } // 型号
    public double Price { get; set; } // 价格

    // 【方法】描述手机的行为（打电话、发消息）
    // 方法1：打电话
    public void MakeCall(string phoneNumber)
    {
        Console.WriteLine($"{Brand} {Model} 正在拨打 {phoneNumber}");
    }

    // 方法2：发消息
    public void SendMessage(string content)
    {
        Console.WriteLine($"{Brand} {Model} 发送消息：{content}");
    }
}

public class Program
{
    public static void Main()
    {
        // 2. 实例化对象：创建具体的手机实例（相当于“造一台具体的手机”）
        Phone iphone = new Phone();
        // 3. 给对象的属性赋值
        iphone.Brand = "苹果";
        iphone.Model = "iPhone 15";
        iphone.Price = 5999;

        // 4. 调用对象的方法
        Console.WriteLine($"手机信息：{iphone.Brand} {iphone.Model}，价格：{iphone.Price}元");
        iphone.MakeCall("10086");
        iphone.SendMessage("你好，这是测试消息～");

        // 再创建一个华为手机对象，对比展示“类是模板，对象是具体实例”
        Phone huawei = new Phone();
        huawei.Brand = "华为";
        huawei.Model = "Mate 70";
        huawei.Price = 6999;
        huawei.MakeCall("10000");
    }
}
```
#### 运行结果：
```
手机信息：苹果 iPhone 15，价格：5999元
苹果 iPhone 15 正在拨打 10086
苹果 iPhone 15 发送消息：你好，这是测试消息～
华为 Mate 70 正在拨打 10000
```
#### 总结：
- `class Phone`：用`class`关键字定义类，类名首字母大写（命名规范）；
- 属性`Brand/Model/Price`：描述类的特征，`get/set`表示可读写；
- `new Phone()`：实例化对象，类是“模板”，对象是“具体的东西”；
- 调用方法：`对象名.方法名()`，调用属性：`对象名.属性名`。

---

### 示例4：定义“学生”类

特点：含无参/有参构造函数

**要求**：

1. 类的定义
2. 属性（get/set）:Brand、 Model、Price
3. 构造函数（无参/有参）
3. 方法带返回值: ShowInfo()、 GetGrade()
4. 对象实例化

```csharp
using System;

// 定义学生类（封装私有字段，带构造函数）
public class Student
{
    // 【私有字段】封装数据（新手理解：藏起来的变量，只能通过属性访问）
    private string _name;
    private int _age;
    private double _score;

    // 【公共属性】访问私有字段（封装的基础写法）
    public string Name
    {
        get { return _name; }
        set { _name = value; } // value是赋值时的传入值
    }

    public int Age
    {
        get { return _age; }
        set
        {
            // 简单校验：年龄不能小于0
            if (value < 0)
                _age = 0;
            else
                _age = value;
        }
    }

    public double Score { get; set; } // 简化写法（自动属性）

    // 【构造函数1】无参构造函数（默认存在，可省略）
    public Student()
    {
        // 初始化默认值
        _name = "未知姓名";
        _age = 0;
        Score = 0;
    }

    // 【构造函数2】有参构造函数（重载，初始化时直接赋值）
    public Student(string name, int age, double score)
    {
        _name = name;
        _age = age;
        Score = score;
    }

    // 【方法】计算等级（带返回值的方法）
    public string GetGrade()
    {
        if (Score >= 90) return "优秀";
        else if (Score >= 80) return "良好";
        else if (Score >= 60) return "及格";
        else return "不及格";
    }

    // 【方法】展示学生信息
    public void ShowInfo()
    {
        Console.WriteLine($"姓名：{_name}，年龄：{_age}，成绩：{Score}，等级：{GetGrade()}");
    }
}

public class Program
{
    public static void Main()
    {
        // 1. 用无参构造函数创建对象，再赋值
        Student stu1 = new Student();
        stu1.Name = "李四";
        stu1.Age = 18;
        stu1.Score = 85;
        stu1.ShowInfo();

        // 2. 用有参构造函数创建对象（更便捷）
        Student stu2 = new Student("张三", 17, 92);
        stu2.ShowInfo();

        // 测试年龄校验：赋值负数，会被修正为0
        Student stu3 = new Student();
        stu3.Name = "王五";
        stu3.Age = -5; // 非法年龄
        stu3.Score = 58;
        stu3.ShowInfo();
    }
}
```
#### 运行结果：
```
姓名：李四，年龄：18，成绩：85，等级：良好
姓名：张三，年龄：17，成绩：92，等级：优秀
姓名：王五，年龄：0，成绩：58，等级：不及格
```
#### 总结：
- 构造函数：与类名同名、无返回值，用于初始化对象；
- 有参构造函数：创建对象时直接赋值，比“先new再赋值”更便捷；
- 封装：私有字段`_name/_age`，通过公共属性控制访问（如年龄校验）；
- 方法返回值：`GetGrade()`返回字符串，演示带返回值的方法。

---



### 示例6：定义“动物”基类 + “狗/猫”子类

特点：简单的类继承（拓展，基础进阶）

**要求**：

1. 类的继承
2. 方法重写（`virtual`/`override`）


```csharp
using System;

// 基类：动物（父类）
public class Animal
{
    public string Name { get; set; }

    // 虚方法：可被子类重写
    public virtual void MakeSound()
    {
        Console.WriteLine($"{Name}发出了叫声～");
    }
}

// 子类：狗（继承自Animal）
public class Dog : Animal
{
    // 重写父类的方法
    public override void MakeSound()
    {
        Console.WriteLine($"{Name}汪汪叫～");
    }

    // 子类独有方法
    public void Run()
    {
        Console.WriteLine($"{Name}在跑～");
    }
}

// 子类：猫
public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine($"{Name}喵喵叫～");
    }
}

public class Program
{
    public static void Main()
    {
        Dog dog = new Dog();
        dog.Name = "旺财";
        dog.MakeSound(); // 调用重写后的方法
        dog.Run(); // 子类独有方法

        Cat cat = new Cat();
        cat.Name = "咪咪";
        cat.MakeSound();
    }
}
```
#### 运行结果：
```
旺财汪汪叫～
旺财在跑～
咪咪喵喵叫～
```
#### 课堂讲解重点：
- 继承：用`:`表示子类继承父类，子类可复用父类的属性/方法；
- 方法重写：父类用`virtual`，子类用`override`，实现“同行为不同表现”；
- 子类可新增自己的方法（如`Run()`），体现“拓展性”。

---

## 总结
1. 基础类定义核心：**属性（特征）+ 方法（行为）**，类是现实事物的抽象，对象是具体实例；
2. 构造函数用于初始化对象，有参构造函数让赋值更便捷，封装（私有字段+公共属性）提升代码健壮性；
3. 静态成员适合工具类，继承体现“复用+拓展”，是面向对象的核心基础；
4. 示例按“基础→进阶”排序，可根据学生接受程度，先讲前3个核心示例，继承作为拓展内容。

这些示例覆盖了新手学习类定义的所有核心考点，场景贴近生活，代码注释清晰，适合课堂逐行讲解，也可让学生动手仿写（比如改写成“汽车类”“图书类”），强化理解。



## 挑毛病

```csharp
using System;
					
public class Program
{
	class Animal
	{
		string _name;
		public string Name
		{
			get{ return _name;}
			set{ _name = value;}
		}
		public void MakeSound(Name)
		{
			Console.WriteLine($"{Name}发出声音");
		}
	}
	public static void Main()
	{
		Animal a1 = new Animal();
		a1.Name = "猫";
		a1.MakeSound();
	}
}
```

核心问题

- 语法错误：MakeSound(Name) 方法定义时参数名不合法（不能直接用属性名Name当参数名，且缺少参数类型），且调用时无参但定义时要求传参，参数不匹配；
- 逻辑缺失：未体现动物叫声的差异化，未用到方法重载核心知识点；
- 访问修饰符问题：Animal类定义在Program内部，Main方法是静态的，直接实例化会有访问限制（新手易踩坑）。

修改后

```csharp
using System;

// 修复：将Animal类设为public，且与Program同级（或设为static，适配静态Main方法）
public class Animal
{
    // 私有字段 + 公共属性（原代码写法没问题，保留）
    string _name;
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    // 重载1：无参数的MakeSound（基础版，通用叫声提示）
    public void MakeSound()
    {
        Console.WriteLine($"{Name}发出了叫声～");
    }

    // 重载2：带字符串参数的MakeSound（指定具体叫声）
    public void MakeSound(string sound)
    {
        Console.WriteLine($"{Name}发出了「{sound}」的声音");
    }

    // 重载3：带字符串+次数参数的MakeSound（参数个数不同，强化重载概念）
    public void MakeSound(string sound, int times)
    {
        for (int i = 0; i < times; i++)
        {
            Console.WriteLine($"{Name}第{i+1}次叫：{sound}");
        }
    }
}	
public class Program
{
    public static void Main()
    {
        // 实例化猫
        Animal cat = new Animal();
        cat.Name = "猫";
        // 调用无参的MakeSound
        cat.MakeSound();
        // 调用带1个参数的MakeSound（传入猫的叫声）
        cat.MakeSound("Meow");

        Console.WriteLine("-----分割线-----");

        // 实例化狗
        Animal dog = new Animal();
        dog.Name = "狗";
        // 调用带2个参数的MakeSound（传入狗的叫声+叫的次数）
        dog.MakeSound("Woof", 3);
    }
}
```
运行结果

```
猫发出了叫声～
猫发出了「Meow」的声音
-----分割线-----
狗第1次叫：Woof
狗第2次叫：Woof
狗第3次叫：Woof
```

