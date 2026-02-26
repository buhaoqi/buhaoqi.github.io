---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 修饰符  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 修饰符  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## 一、修饰符是什么

> 修饰符（Modifiers） 是修饰类型（如类、结构、接口）或类型成员（如字段、属性、方法）声明的关键字，用来控制其访问范围、行为特性和运行方式。

> C# 修饰符是用来控制类和成员的访问权限、继承行为和运行特性的关键字。

访问修饰符是控制顶级类型（如class、struct、interface、enum）和类成员（如类、字段、属性、方法、构造函数等）的可访问性的关键字。

修饰符定义了类型和类型成员的 **“身份标识与行为准则”**。

修饰符的本质理解,请记住一句话：

> 修饰符 = 控制 + 限制 + 扩展

它们不会改变“功能逻辑”，
但会改变“访问规则”和“运行方式”。

**修饰符定义了代码元素的：**

1. **可见性 (Visibility)**：谁有权看、谁有权调（访问权限）。
2. **存在方式 (Manifestation)**：是属于“每个实例”还是属于“类集体”（静态与否）。
3. **演变规则 (Evolution)**：是否允许被继承、被重写或被修改（扩展与多态）。


## 二、修饰符分类

修饰符按照“功能意图”分为四个维度：

* **可见性**  封装性（Encapsulation）
* **继承性**  类层级设计
* **扩展性**  多态性（Polymorphism）
* **稳定性**  稳定性（Polymorphism）

### 1. 控制类的可见性 (Visibility)

这一类决定了代码的“边界”，即**谁能访问这个类或成员**。


|修饰符|	顶级类型（如顶级 class/struct）|	类成员（字段 / 方法 / 嵌套类等）	|备注|
|---|---|---|---|
|public|	✅ 支持|	✅ 支持	|完全开放，跨程序集可见。 |
|internal|	✅ 支持（默认）|	✅ 支持	|对内开放，仅限当前项目（程序集）可见。|
|private|	❌ 不支持|	✅ 支持（默认）	|完全封闭，仅限类内部可见。|
|protected|	❌ 不支持|	✅ 支持	|给子类开放专属访问|
|protected internal| 	❌ 不支持| 	✅ 支持	|同程序集或子类 |
|private protected	| ❌ 不支持	| ✅ 支持	|同程序集中的子类|


示例：

```csharp
public class Student
{
    private int age;
}
```


### 2. 控制类的继承性 (Inheritance)

这一类决定了类与类之间的“父子关系”和**层级结构**。

| 修饰符    | 翻译|含义   |说明       |
| ------ | ----------- |----- |---- |
| abstract | 抽象|**强制继承**，必须被子类实现 |它像一张蓝图，不能直接 new 出实例，必须由子类去实现。|
| static | 静态|**脱离继承**|静态类不能被继承，也不能实例化，它是一个独立的工具集合。 |
| sealed   |密封 |**禁止继承**   |它是最终版本，不准任何人再做它的子类（为了安全或性能优化）。|


示例：

```csharp
public static int Count;
```

### 3. 控制类的扩展性 (Extensibility)

这一类主要针对**类成员（方法/属性）**，决定了子类是否可以“魔改”父类的行为。扩展性也叫多态性(Polymorphism)




| 修饰符    | 翻译|含义   |说明       |
| -------- | ---------- |--- | ---------- |
| `virtual`  |虚成员    | 允许子类重写 |父类给出一个默认做法，子类可以改，也可以不改。|
| `override` | 重写     |重写父类方法|子类明确表示：“我要用我自己的逻辑替换父类的逻辑”。|
|`abstract`|在成员上|**强制扩展**|父类只定义名字，不写代码，子类必须接手写完。|
|`new` |隐藏|**切断联系**|子类定义一个同名成员，但与父类那个成员没关系，互不干扰。|

示例1：

```csharp
public virtual void Study() { }

public override void Study() { }
```

示例2:

```csharp
public abstract class Animal
{
    public abstract void Speak();
}

public class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("汪汪");
    }
}
```

这里用到了：

* public
* abstract
* override

### 4.控制状态的稳定性 (Stability)

控制状态的稳定性，即**数据是否允许被修改**：

| 修饰符    | 翻译|含义   |说明       |
| -------- | ------------- |----- | ------------- |
| readonly |只读|运行时只读| 只能在声明或构造函数中赋值 ，构造函数之后不可变|
| const    |常量 |编译期常量|   写死在代码里      |


### 5.其他修饰符

| 修饰符     | 作用     |
| ------- | ------ |
| async   | 异步方法   |
| extern  | 外部实现   |
| unsafe  | 不安全代码  |
| partial | 分部类    |



## 练习题
你需要10道针对C#修饰符的基础用法示例题，核心是让初学者通过实操熟练掌握**访问修饰符（public/private/protected/internal）** 和**常用修饰符（static/const/readonly/virtual/override/sealed）** 的核心用法。我设计的题目从“基础认知→场景应用→易错辨析”层层递进，每道题都配“示例代码+核心知识点+运行结果”，适合课堂练习或课后作业。

### 核心说明
先明确初学者必掌握的修饰符分类，所有题目围绕这些核心展开：
| 修饰符类型       | 核心成员                | 作用（新手版）|
|------------------|-------------------------|---------------------------------|
| 访问修饰符       | public/private/protected | 控制类/成员的“可见范围”|
| 静态修饰符       | static                  | 属于“类”而非“对象”，无需new调用 |
| 常量/只读修饰符  | const/readonly          | 固定值，不可随意修改            |
| 继承相关修饰符   | virtual/override/sealed | 子类重写父类方法                |

---

## 题目1：public/private 访问修饰符（基础）
### 需求
定义`Person`类，用`private`封装姓名字段，`public`提供属性和方法，验证“private成员仅类内部可访问”。
### 示例代码
```csharp
using System;

public class Person
{
    // private：仅类内部可访问
    private string _name;

    // public：外部可访问（属性）
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    // public：外部可访问（方法）
    public void SayHello()
    {
        // 类内部可访问private字段
        Console.WriteLine($"你好，我是{_name}");
    }
}

public class Program
{
    public static void Main()
    {
        Person p = new Person();
        p.Name = "张三"; // 访问public属性
        p.SayHello();    // 调用public方法
        // p._name = "李四"; // 报错：private字段外部无法访问
    }
}
```
### 运行结果
```
你好，我是张三
```
### 核心知识点
- `private`：仅当前类内部可访问，外部（包括子类）都不能直接用；
- `public`：任何地方都可访问，是最开放的修饰符；
- 封装的核心：用`private`藏字段，`public`露接口。

---

## 题目2：static 静态修饰符（核心）
### 需求
定义`MathTool`工具类，用`static`修饰方法和属性，验证“静态成员属于类，无需实例化”。
### 示例代码
```csharp
using System;

public class MathTool
{
    // static属性：所有实例共享
    public static int CalculateCount { get; set; } = 0;

    // static方法：直接通过类名调用
    public static int Add(int a, int b)
    {
        CalculateCount++;
        return a + b;
    }
}

public class Program
{
    public static void Main()
    {
        // 静态方法：类名.方法名（无需new）
        int sum = MathTool.Add(5, 10);
        Console.WriteLine($"5+10={sum}");
        Console.WriteLine($"计算次数：{MathTool.CalculateCount}");

        // 错误示范：静态成员不能通过对象调用
        // MathTool tool = new MathTool();
        // tool.Add(1,2); // 报错
    }
}
```
### 运行结果
```
5+10=15
计算次数：1
```
### 核心知识点
- `static`修饰的成员属于“类本身”，而非“具体对象”；
- 调用方式：`类名.静态成员`，无需`new`实例化；
- 工具类（如计算器、工具方法）优先用`static`。

---

## 题目3：const 常量修饰符
### 需求
定义`Constants`类，用`const`定义固定常量（如圆周率、地球半径），验证“常量不可修改”。
### 示例代码
```csharp
using System;

public class Constants
{
    // const：编译期确定值，不可修改，必须初始化
    public const double PI = 3.1415926;
    public const int EARTH_RADIUS = 6371;
}

public class Program
{
    public static void Main()
    {
        double circleArea = Constants.PI * 5 * 5;
        Console.WriteLine($"半径5的圆面积：{circleArea}");

        // Constants.PI = 3.14; // 报错：const常量不可修改
    }
}
```
### 运行结果
```
半径5的圆面积：78.539815
```
### 核心知识点
- `const`：常量，值固定不变，编译时确定，必须声明时初始化；
- 常量默认是`static`的，无需加`static`修饰；
- 适合定义永不改变的固定值（如数学常量、固定配置）。

---

## 题目4：readonly 只读修饰符
### 需求
对比`const`和`readonly`，验证“readonly可在构造函数中初始化，运行时确定值”。
### 示例代码
```csharp
using System;

public class User
{
    // readonly：只读，可在声明/构造函数中初始化
    public readonly string Id;
    public readonly string Name = "未知用户"; // 声明时初始化

    // 构造函数中初始化readonly
    public User(string id)
    {
        Id = id;
    }
}

public class Program
{
    public static void Main()
    {
        User u = new User("2024001");
        Console.WriteLine($"ID：{u.Id}，姓名：{u.Name}");

        // u.Id = "2024002"; // 报错：readonly字段不可修改
    }
}
```
### 运行结果
```
ID：2024001，姓名：未知用户
```
### 核心知识点
- `readonly`：只读字段，运行时确定值，可在声明时或构造函数中初始化；
- 区别于`const`：`const`是编译期常量，`readonly`是运行时常量；
- 适合定义“每个对象固定、但不同对象可不同”的值（如用户ID）。

---

## 题目5：protected 访问修饰符（继承）
### 需求
定义父类`Animal`和子类`Dog`，验证“protected成员仅类内部和子类可访问”。
### 示例代码
```csharp
using System;

// 父类
public class Animal
{
    // protected：类内部 + 子类可访问
    protected string _name;

    public Animal(string name)
    {
        _name = name;
    }
}

// 子类
public class Dog : Animal
{
    public Dog(string name) : base(name) { }

    public void Bark()
    {
        // 子类可访问父类的protected字段
        Console.WriteLine($"{_name}汪汪叫");
    }
}

public class Program
{
    public static void Main()
    {
        Dog dog = new Dog("旺财");
        dog.Bark();
        // dog._name = "来福"; // 报错：protected字段外部无法访问
    }
}
```
### 运行结果
```
旺财汪汪叫
```
### 核心知识点
- `protected`：仅当前类和其子类可访问，外部不可用；
- 继承场景下，子类需要访问父类成员但又不想对外暴露时用`protected`。

---

## 题目6：internal 访问修饰符（程序集）
### 需求
理解`internal`的作用：“同一程序集内可访问，不同程序集不可访问”（新手简化版）。
### 示例代码（同一程序集）
```csharp
using System;

// internal：同一程序集内可访问
internal class InternalClass
{
    public void SayHi()
    {
        Console.WriteLine("我是internal类的方法");
    }
}

public class Program
{
    public static void Main()
    {
        // 同一程序集内，可实例化internal类
        InternalClass ic = new InternalClass();
        ic.SayHi();
    }
}
```
### 运行结果
```
我是internal类的方法
```
### 核心知识点
- `internal`：默认访问修饰符（类/成员不写修饰符时，默认是`internal`）；
- 作用范围：仅当前项目（程序集）内可访问，跨项目不可用；
- 适合定义“项目内部专用”的类/成员。

---

## 题目7：virtual/override 方法重写（继承核心）
### 需求
定义父类`Animal`的`MakeSound`虚方法，子类`Cat`/`Dog`重写该方法，实现“同方法不同行为”。
### 示例代码
```csharp
using System;

public class Animal
{
    // virtual：允许子类重写
    public virtual void MakeSound()
    {
        Console.WriteLine("动物发出叫声");
    }
}

public class Dog : Animal
{
    // override：重写父类的virtual方法
    public override void MakeSound()
    {
        Console.WriteLine("狗汪汪叫");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("猫喵喵叫");
    }
}

public class Program
{
    public static void Main()
    {
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        a1.MakeSound(); // 调用Dog的重写方法
        a2.MakeSound(); // 调用Cat的重写方法
    }
}
```
### 运行结果
```
狗汪汪叫
猫喵喵叫
```
### 核心知识点
- `virtual`：标记父类方法“可被重写”；
- `override`：子类重写父类的`virtual`方法；
- 多态核心：父类引用指向子类对象，调用子类重写的方法。

---

## 题目8：sealed 密封修饰符
### 需求
验证`sealed`的两个作用：①密封类不可被继承；②密封方法不可被重写。
### 示例代码
```csharp
using System;

// sealed：密封类，不可被继承
public sealed class SealedClass
{
    public void Show()
    {
        Console.WriteLine("我是密封类的方法");
    }
}

// public class SubClass : SealedClass { } // 报错：密封类不可继承

public class Parent
{
    public virtual void DoSomething()
    {
        Console.WriteLine("父类方法");
    }
}

public class Child : Parent
{
    // sealed：密封方法，子类不可重写
    public sealed override void DoSomething()
    {
        Console.WriteLine("子类密封方法");
    }
}

// public class GrandChild : Child
// {
//     public override void DoSomething() { } // 报错：密封方法不可重写
// }

public class Program
{
    public static void Main()
    {
        SealedClass sc = new SealedClass();
        sc.Show();

        Child c = new Child();
        c.DoSomething();
    }
}
```
### 运行结果
```
我是密封类的方法
子类密封方法
```
### 核心知识点
- `sealed`修饰类：该类不能被继承（如`string`类就是密封类）；
- `sealed`修饰方法：必须和`override`一起用，子类不能再重写该方法；
- 作用：防止类/方法被随意继承重写，保证代码稳定性。

---

## 题目9：访问修饰符综合应用（场景题）
### 需求
定义`BankAccount`类，封装“余额”字段，用不同访问修饰符控制成员可见性，实现“存款/取款”功能。
### 示例代码
```csharp
using System;

public class BankAccount
{
    // private：封装余额，外部不可直接修改
    private decimal _balance;

    // public：外部可访问的属性（只读，防止直接改余额）
    public decimal Balance => _balance;

    // public：存款方法（控制余额修改逻辑）
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            _balance += amount;
        else
            Console.WriteLine("存款金额必须大于0");
    }

    // public：取款方法
    public void Withdraw(decimal amount)
    {
        if (amount > 0 && amount <= _balance)
            _balance -= amount;
        else
            Console.WriteLine("取款金额无效");
    }
}

public class Program
{
    public static void Main()
    {
        BankAccount account = new BankAccount();
        account.Deposit(1000);
        Console.WriteLine($"当前余额：{account.Balance}");

        account.Withdraw(500);
        Console.WriteLine($"取款后余额：{account.Balance}");

        // account._balance = 10000; // 报错：private字段不可直接修改
    }
}
```
### 运行结果
```
当前余额：1000
取款后余额：500
```
### 核心知识点
- 封装的实际应用：用`private`保护核心数据（余额），通过`public`方法控制数据修改逻辑；
- 只读属性（`=>`）：外部只能读余额，不能直接改，保证数据安全。

---

## 题目10：修饰符易错辨析（对比题）
### 需求
对比“返回值不同不算重载”“static方法不能重写”等易错点，强化修饰符用法。
### 示例代码
```csharp
using System;

public class Test
{
    // 易错1：返回值不同，参数列表相同，不算重载
    public int Add(int a, int b) { return a + b; }
    // public double Add(int a, int b) { return a + b; } // 报错：不是有效重载

    // 易错2：static方法不能用virtual/override（静态属于类，无继承重写）
    public static void Show() { Console.WriteLine("静态方法"); }
    // public virtual static void Show2() { } // 报错：static不能和virtual一起用
}

public class Program
{
    public static void Main()
    {
        Test t = new Test();
        Console.WriteLine(t.Add(1,2));
        Test.Show();
    }
}
```
### 运行结果
```
3
静态方法
```
### 核心知识点
- 方法重载的核心是“参数列表不同”，返回值、修饰符不同不算；
- `static`方法属于类，不能被继承重写，因此不能和`virtual/override`一起用；
- `const`不能修饰方法，`readonly`不能修饰局部变量。

---

### 总结
1. 访问修饰符核心：`private`藏数据，`public`露接口，`protected`给子类，`internal`给同项目；
2. 静态修饰符核心：`static`属于类，无需`new`，工具类优先用；
3. 常量/只读核心：`const`编译期固定，`readonly`运行期初始化，均不可随意修改；
4. 继承修饰符核心：`virtual`允许重写，`override`实现重写，`sealed`禁止继承/重写。

这些题目覆盖了初学者必掌握的所有修饰符核心用法，每道题都有“易错点”和“实际场景”，可以让学生先仿写代码，再修改参数/修饰符验证效果，强化理解。