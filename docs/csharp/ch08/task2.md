---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 类的继承 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 类的继承  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 一、继承是什么

> “继承，就是让一个类**拥有另一个类的非私有成员**。在 C# 中，我们可以创建一个 ‘父类’，然后多个 ‘子类’ 都可以继承它的成员，从而实现代码重用与扩展。”

继承是一种面向对象编程机制，它允许一个类（称为派生类或子类）基于另一个类（称为基类或父类）来定义，从而：

- 自动获得父类的非私有成员
- 扩展父类的功能（添加新成员）
- 修改父类的行为（重写虚方法）
- 实现多态（通过统一的接口操作不同的对象）

举个现实例子：

> “比如有一个 `Animal`（动物）类，有方法 `Eat()`；
> `Dog` 和 `Cat` 都是动物，可以继承 `Animal` 的行为，而不需要重复写代码。”

## 二、基类与派生类

* **基类（Base Class / Parent Class）：** 被继承的类，提供通用的属性和功能。
* **派生类（Derived Class / Child Class）：** 继承基类的类，可以重用父类的代码，也可以添加新功能或修改旧功能。

## 三、继承的关键规则

| 特性           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| **单继承**     | CC# 只支持**单继承**，一个子类只能直接继承一个父 |
| 多接口 |但可以实现多个接口。|
| **传递性**     | 如果类 C 继承自类 B，而类 B 继承自类 A，那么类 C 也拥有类 A 的成员。 |
| **访问修饰符** | `private` 成员不能被继承；`protected` 成员只能在基类及其派生类中访问。 |
|类成员|子类会继承父类的非私有成员|
| **构造函数**   | 子类永远不会继承父类的构造函数，但可以通过 `base` 关键字调用它们。 |
||原因：构造函数的作用是初始化当前类的实例，而非提供 “可复用的功能”|
||子类默认调用父类无参构造（不是“继承”父类构造）|
||调用父类有参构造，必须子类自己定义构造函数|
|✅ **能继承**|公共(public)和受保护(protected)的方法、属性、字段|
|❌ **不能继承**|私有(private)成员、构造函数。如果你不想某个类被继承，可以加 `sealed` 关键字。|

**父类的构造函数永远都会被调用**，这是C#继承机制的核心规则。它确保了：
- 父类的成员被正确初始化
- 继承链上的所有状态都被合理设置
- 对象处于有效状态

这是因为子类继承了父类的成员（字段、属性、方法等）。在创建子类对象时，需要确保父类的成员被正确初始化，这通过调用父类构造函数来完成。

## 四、基础继承

**语法符号：** 使用冒号 `:` 表示继承。

### 1.语法
```csharp
class 父类名称
{
    // 父类拥有的一些功能
}

class 子类名称 : 父类名称
{
    // 子类可以继承并扩展父类的功能
}
```

- 关键规则：
  - 省略父类时，默认继承自 `object`（C# 所有类的根类）。
### 2.示例
```csharp
using System;

// 父类：Animal
class Animal
{
    // 自动属性（无需手动定义私有字段）
    public string Name { get; set; }
    public string Color { get; set; }
    public int Age { get; set; }

    // 正确的构造函数（无返回值，名称与类名一致）
    public Animal()
    {
        Name = "未命名";
        Color = "黑色";
        Age = 3;
    }

    // 普通方法
    public void Sleep()
    {
        Console.WriteLine($"{Name}今天睡了 5 小时。");
    }
}

// 子类：Dog（继承自 Animal）
class Dog : Animal
{
    public void MakeSound()
    {
        Console.WriteLine("汪汪");
    }
}

// 入口类
class Program
{
    static void Main()
    {
        Dog d1 = new Dog();
        Console.WriteLine(d1.Name);   // 输出：未命名
        Console.WriteLine(d1.Age);    // 输出：3
        Console.WriteLine(d1.Color);  // 输出：黑色
        d1.Sleep();                   // 输出：未命名今天睡了 5 小时。
        d1.MakeSound();               // 新增：验证子类方法（可选）
    }
}
```
### 3.父类OR子类？

1. 用 Dog d = new Dog()（子类声明 + 子类实例）的场景

核心条件：需要使用 Dog 子类特有的成员（方法 / 属性）（比如 MakeSound()）。这是最直接的场景 —— 当你不仅要用到父类 Animal 的 Name/Sleep() 等成员，还需要调用子类独有的 MakeSound() 时，必须用子类声明变量。

2. 用 Animal a = new Dog()（父类声明 + 子类实例）的场景

核心条件：只需要使用父类 Animal 的通用成员（Name/Sleep() 等），且希望代码具备灵活性 / 扩展性（面向抽象编程）。这种写法的核心价值是 “统一类型管理”，比如后续新增 Cat 子类，代码无需大幅修改


## 五、继承中的构造函数

### 1.语法
#### 场景1：调用父类无参构造函数（默认/显式）
```csharp
public class BaseClass
{
    // 父类无参构造函数
    public BaseClass()
    {
        Console.WriteLine("父类无参构造");
    }
}

public class SubClass : BaseClass
{
    // 子类构造函数：默认隐式调用父类无参构造（也可显式写 base()）
    public SubClass() : base() 
    {
        Console.WriteLine("子类无参构造");
    }
}
```

#### 场景2：调用父类有参构造函数
```csharp
public class BaseClass
{
    public string Name { get; set; }
    // 父类有参构造函数
    public BaseClass(string name)
    {
        Name = name;
    }
}

public class SubClass : BaseClass
{
    // 子类构造函数：通过 base(参数) 调用父类有参构造
    public SubClass(string name) : base(name)
    {
    }
}
```

#### 场景3：子类构造函数重载时调用不同父类构造
```csharp
public class SubClass : BaseClass
{
    // 重载1：调用父类无参构造
    public SubClass() : base() { }
    // 重载2：调用父类有参构造
    public SubClass(string name) : base(name) { }
}
```

### 2. **隐式调用默认构造函数**

如果子类构造函数没有指定调用哪个父类构造函数，会自动调用父类的**无参构造函数**：

```csharp
using System;

// 父类：Animal
class Animal
{
    // 自动属性（无需手动定义私有字段）
    public string Name { get; set; }
    public string Color { get; set; }
    public int Age { get; set; }

    // 正确的构造函数（无返回值，名称与类名一致）
    public Animal()
    {
        Name = "未命名";
        Color = "黑色";
        Age = 3;
    }
		public Animal(string name,string color,int age)
    {
        Name = name;
        Color = color;
        Age = age;
    }
    // 普通方法
    public void Sleep()
    {
        Console.WriteLine($"{Name}今天睡了 5 小时。");
    }
}

// 子类：Dog（继承自 Animal）
class Dog : Animal
{
  	//public Dog(string name,string color,int age):base("来福","黑色",5){}
    // 子类构造函数的大括号内容不是必须写，核心取决于子类是否有专属的初始化需求；
	public Dog(string name,string color,int age):base(name,color,age){}
    public void MakeSound()
    {
        Console.WriteLine("汪汪");
    }
}

// 入口类
class Program
{
    static void Main()
    {
        Dog d1 = new Dog("旺财","黄色",8);
		
        Console.WriteLine(d1.Name);   // 输出：未命名
        Console.WriteLine(d1.Age);    // 输出：3
        Console.WriteLine(d1.Color);  // 输出：黑色
        d1.Sleep();                   // 输出：未命名今天睡了 5 小时。
        d1.MakeSound();               // 新增：验证子类方法（可选）
    }
}
```
结论：

- 如果父类存在无参构造函数，则子类调用父类无参构造函数
- 如果父类未定义任何构造函数，则子类调用父类默认构造函数
- 如果父类存在无参构造函数+ 有参构造函数，则子类默认调用无参构造函数

### 3.父类没有无参构造函数

因为子类不会继承父类的构造函数或方法，但可以通过 `base` 关键字调用它们。

如果父类只定义了带参构造函数，没有定义无参构造函数，子类必须显式调用父类的某个构造函数：

你可以使用 `base` 关键字指定调用父类的哪个构造函数：

```csharp
class Animal
{
    public Animal(string name)  // 只有带参构造函数
    {
        _name = name;
    }
    // 没有无参构造函数！
}

class Dog : Animal
{
    public Dog() : base("默认名字")  // 必须显式调用 base
    {
    }
    
    public Dog(string name) : base(name)  // 也可以传递参数
    {
    }
}
```

示例：
```csharp
using System;

// 父类：Animal
class Animal
{
    // 自动属性（无需手动定义私有字段）
    public string Name { get; set; }
    public string Color { get; set; }
    public int Age { get; set; }

    // 正确的构造函数（无返回值，名称与类名一致）
    public Animal()
    {
        Name = "未命名";
        Color = "黑色";
        Age = 3;
    }
		public Animal(string name,string color,int age)
    {
        Name = name;
        Color = color;
        Age = age;
    }
    // 普通方法
    public void Sleep()
    {
        Console.WriteLine($"{Name}今天睡了 5 小时。");
    }
}

// 子类：Dog（继承自 Animal）
class Dog : Animal
{
  	// 调用父类有参构造函数 子类必须定义构造函数并使用 base 调用父类构造函数
    public Dog(string name,string color,int age):base(name,color,age){}
    public void MakeSound()
    {
        Console.WriteLine("汪汪");
    }
}

// 入口类
class Program
{
    static void Main()
    {
        Dog d1 = new Dog();
        Console.WriteLine(d1.Name);   // 输出：未命名
        Console.WriteLine(d1.Age);    // 输出：3
        Console.WriteLine(d1.Color);  // 输出：黑色
        d1.Sleep();                   // 输出：未命名今天睡了 5 小时。
        d1.MakeSound();               // 新增：验证子类方法（可选）
    }
}
```
## 六、子类访问修饰符protected
`protected` 是专门为继承设计的，表示成员仅对当前类及其**派生类**可见。

```csharp
using System;

class Father
{
	//protected:自己和子类可见
	string _birthName;
	string _givenName;
	// protected字段：存储数据，子类可访问
	protected int _age;
	// 只读属性，外部不能改
	public string BirthName{get;}
	public string GivenName{get;}
	// 属性：管控字段（校验+只读/只写）增强代码健壮性
	public int Age
    {
        get { return _age; }
        protected set // 保护级set：只有当前类+子类能修改
        {
            // 校验：年龄不能为负数
            if (value >= 0)
                _age = value;
            else
                _age = 0;
        }
    }
	//构造函数
	public Father(string birthName,string givenName,int age)
	{
		_birthName = birthName;
		_givenName = givenName;
		Age = age; // 通过属性赋值，触发校验
	}
	//方法
	public void ShowInfo()
	{
		Console.WriteLine($"信息：姓名：{_birthName}{_givenName}，年龄：{_age}");
	}
}
class Child:Father
{
	// ❌ 不写构造函数会报错！因为编译器不知道怎么调用父类的有参构造函数
	// 如果父类没有无参构造函数，子类就必须显式写构造函数，并通过base(...)调用父类的有参构造函数；
	// 如果父类有无参构造函数（哪怕是默认的、没写出来的），子类可以不写构造函数（编译器会自动帮子类生成无参构造函数，并隐式调用父类的无参构造函数）。
	public Child(string birthName,string givenName,int age):base(birthName,givenName,age)
	{
		Console.WriteLine("子类构造函数执行");
	}
}
class Program
{
	static void Main()
	{
		Father f1 = new Father("张","三",30);
		f1.ShowInfo();
		
		Child c1 = new Child("张", "帅", 10); 
		c1.ShowInfo();
		
		// 外部无法修改Xing（只读），也无法修改Age（set是protected）
        // f.Xing = "李"; // 报错
        // f.Age = 40; // 报错
	}
}
```

## 七、抽象继承(abstract)

### 1.abstract 关键字的用途
`abstract` 用于定义抽象继承，即定义抽象类或抽象成员。

### 2.抽象继承是什么
首先明确两个关键术语：
- **继承**：父类定义属性/方法（包括“要做什么”并实现“具体怎么做），子类复用父类的定义，是C#中代码复用的基础机制。普通继承是“可选重写”，
- **抽象继承**：父类只定义“必须要做什么但不写具体逻辑”，子类必须实现“具体怎么做”。抽象继承是一种契约式继承,“继承”的是“强制性规则”，不是代码，抽象继承是“必须实现”。分为两个核心用法：
    1. 修饰**类**：抽象类（`abstract class`），表示该类是不完整的，不能被实例化，只能被继承。
    2. 修饰**方法/属性**：抽象成员，只有声明没有实现，强制子类必须重写。

| 普通继承（无 `abstract`） | 抽象继承（有 `abstract`） |
|--------------------------|--------------------------|
| 父类提供具体实现，子类可复用/重写 | 父类只定规则（无实现），子类必须重写实现 |
| 核心是“复用代码” | 核心是“遵守契约” |
| 父类可实例化 | 抽象类本身不可实例化，这是 `abstract` 实现“契约式继承”的必要前提。 |

注意：

1. `abstract` 修饰的属性不可以有属性体（也就是 get/set 访问器不能有具体实现逻辑）。
2. `abstract` 修饰方法：**无方法体**，强制子类必须实现具体逻辑。
3. 核心价值：统一父类接口，让不同子类按规则实现各自的逻辑，避免代码混乱。


### 3.示例
```csharp
using System;

// 1. abstract修饰类：抽象类，不能直接new
abstract class Shape
{
    // 2. abstract修饰方法：抽象方法，只有声明，无方法体
    public abstract double GetArea();
}

// 子类1：圆形，必须实现抽象方法GetArea
class Circle : Shape
{
    public double Radius { get; set; }

    // 重写抽象方法（必须用override）
    public override double GetArea()
    {
        return Math.PI * Radius * Radius; // 圆的面积公式
    }
}

// 子类2：矩形，必须实现抽象方法GetArea
class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    // 重写抽象方法
    public override double GetArea()
    {
        return Width * Height; // 矩形的面积公式
    }
}

// 测试代码（主程序）
class Program
{
    static void Main()
    {
        // 错误：抽象类不能直接实例化
        // Shape shape = new Shape(); 

        // 正确：实例化子类
        Shape circle = new Circle { Radius = 2 };
        Shape rectangle = new Rectangle { Width = 3, Height = 4 };

        // 调用子类的实现逻辑
        Console.WriteLine($"圆的面积：{circle.GetArea():0.00}");  // 输出：圆的面积：12.57
        Console.WriteLine($"矩形的面积：{rectangle.GetArea()}"); // 输出：矩形的面积：12
    }
}
```
代码关键解释

1. **抽象类 `Shape`**：
   - 用 `abstract` 修饰，所以不能写 `new Shape()`，只能作为“父类模板”。
   - 里面的 `GetArea()` 方法也是 `abstract`，只有方法名和返回值，没有 `{}` 里的逻辑——因为不同形状的面积计算方式不同，无法在父类统一实现。

2. **子类 `Circle`/`Rectangle`**：
   - 继承抽象类后，必须用 `override` 重写 `GetArea()` 方法，否则编译报错。
   - 每个子类根据自身特性，实现具体的面积计算逻辑。

3. **运行效果**：
   - 虽然声明的变量类型是父类 `Shape`，但实际执行的是子类的 `GetArea()` 逻辑（多态特性）。


### 4.抽象属性

#### **抽象属性的定义规则**
- 抽象属性必须声明在**抽象类**（`abstract class`）中
- 抽象属性的语法不是直接给属性加`abstract`后赋值，而是通过抽象的`get`/`set`访问器来定义
- 抽象属性不写 get 和 set 是不可以，必须明确声明要实现哪些访问器（get/set），让子类知道需要重写哪些逻辑。
- 抽象属性只定义“契约”，不包含具体实现

#### **代码示例：正确定义抽象属性**
```csharp
// 抽象基类
public abstract class Person
{
    // 定义抽象属性（正确写法）
    public abstract string Name { get; set; } // 只有访问器声明，无实现
    public abstract int Age { get; } // 只读的抽象属性
}

// 派生类必须实现抽象属性
public class Student : Person
{
    private string _name;
    private int _age;

    // 实现抽象属性 Name
    public override string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    // 实现抽象属性 Age
    public override int Age
    {
        get { return _age; }
    }

    // 构造函数
    public Student(string name, int age)
    {
        _name = name;
        _age = age;
    }
}

// 测试代码
class Program
{
    static void Main()
    {
        Student student = new Student("张三", 20);
        Console.WriteLine($"姓名：{student.Name}，年龄：{student.Age}");
        // 输出：姓名：张三，年龄：20
        
        student.Name = "李四";
        Console.WriteLine($"修改后姓名：{student.Name}");
        // 输出：修改后姓名：李四
    }
}
```

#### **错误的写法（也是新手容易混淆的点）**
```csharp
// 错误示例：不能直接给属性值加abstract
public abstract class WrongExample
{
    // 这种写法是错误的！编译会报错
    // public abstract string Name = "默认值"; 
}
```

#### **抽象属性的本质**

抽象属性本质上是把`get`和`set`方法声明为抽象方法，所以它遵循抽象方法的所有规则：
- 不能有方法体（即`{}`里不能写逻辑）
- 派生类必须用`override`关键字实现
- 只能存在于抽象类或接口中（接口中的属性默认是抽象的，无需加`abstract`）

#### 总结
1. **核心结论**：C#中**可以定义抽象属性**，但必须声明在抽象类中，且只有访问器（`get`/`set`）声明、无具体实现。
2. **易错点**：不能像普通字段那样给抽象属性直接赋值（如`abstract string Name = ""`），这是语法错误。
3. **关键规则**：抽象属性的本质是抽象的`get/set`方法，派生类必须重写实现。


## 八、禁止继承(sealed)
### 核心定义

* **`sealed` (密封)**:
* 用于**类**：防止类被继承（例如 `string` 类就是密封的）。
* 用于**方法**：防止子类进一步重写该方法（必须配合 `override` 使用），而非直接阻止父类方法被首次重写。
    - 前提1：`sealed` 不能直接修饰父类的普通方法/虚方法，无法“一开始就阻止”方法被重写；
    - 前提2：`sealed` 只能“终止已开启的重写链”——父类先用 `virtual`/`abstract` 开启重写权限，子类重写后用 `sealed` 终止，而非“从源头禁止”。

### 类 vs 方法
| 修饰目标 | `sealed` 的具体作用 | 前提条件 | 示例场景 |
|----------|---------------------|----------|----------|
| 类       | 直接阻止被继承      | 无（可直接修饰类） | `sealed class A {}` → 任何类都不能继承A |
| 方法/属性 | 阻止后续子类重写    | 必须和 `override` 配对（当前子类已重写父类的 `virtual`/`abstract` 成员） | 父类：`virtual void M()`<br />子类1：`sealed override void M()`<br />子类2：无法重写M |


### 修饰类（直接阻止继承，无前提）
如果一个类被 `sealed` 修饰，任何类都不能继承它，直接编译报错。
```csharp
using System;

// 密封类：禁止被继承
sealed class FinalClass
{
    public void ShowMsg()
    {
        Console.WriteLine("我是密封类，不能被继承");
    }
}

// ❌ 编译错误：无法继承密封类
// class SubClass : FinalClass 
// {
// }

// 测试：密封类本身可以正常实例化
class Program
{
    static void Main()
    {
        FinalClass fc = new FinalClass();
        fc.ShowMsg(); // 正常输出：我是密封类，不能被继承
    }
}
```
### 修饰方法（必须先重写，再终止）
这种用法必须和 `override` 配合（先重写父类方法，再密封），阻止子类继续重写该方法。
```csharp
using System;

// 普通父类
class Parent
{
    // 虚方法：允许子类重写
    public virtual void SayHi()
    {
        Console.WriteLine("父类的Hi");
    }
}

// 子类1：重写并密封方法
class Child : Parent
{
    // sealed + override：密封这个重写的方法
    public sealed override void SayHi()
    {
        Console.WriteLine("子类1的Hi（已密封，不能再重写）");
    }
}

// 子类2：想继续重写 SayHi → 编译报错
// class GrandChild : Child
// {
//     // ❌ 编译错误：无法重写密封方法
//     public override void SayHi()
//     {
//         Console.WriteLine("子类2的Hi");
//     }
// }

// 测试
class Program
{
    static void Main()
    {
        Child c = new Child();
        c.SayHi(); // 输出：子类1的Hi（已密封，不能再重写）
    }
}
```
## 九、脱离继承(static)

核心结论先明确：`static`（静态）成员**不参与继承体系**，这是它和实例成员最本质的区别：

- 子类无法继承父类的静态成员
- 子类无法重写或隐藏父类的静态成员（语法上的“隐藏”并非真正的继承）。

### 1.静态成员与继承的“绝缘性”
从继承逻辑来看，`static` 关键字的核心特性是：
1. **静态成员属于“类本身”**，而非类的实例；
2. **子类不会继承父类的静态成员**，只能通过“父类名.静态成员”的方式访问，无法通过“子类名.静态成员”继承式调用（语法上允许子类名调用，但本质还是访问父类的静态成员，并非继承）；
3. **静态成员不能被重写（override）**，也不能用 `virtual/abstract/sealed` 修饰（这些关键字仅针对实例成员的继承重写）；
4. **静态类无法被继承**（`static class` 隐含 `sealed` 特性），自然也不存在继承相关的逻辑。

### 2.分场景详解（继承视角 + 代码示例）
#### 场景1：静态成员不参与继承（最核心）
父类的静态成员归父类独有，子类无法继承，哪怕子类用相同名称的静态成员，也只是“隐藏”而非“重写”（无继承关系）。
```csharp
using System;

// 父类
class Parent
{
    // 静态字段
    public static string Info = "父类静态信息";
    // 静态方法
    public static void ShowInfo()
    {
        Console.WriteLine(Info);
    }
}

// 子类（继承Parent）
class Child : Parent
{
    // 子类定义同名静态成员（仅“隐藏”父类，非继承/重写）
    public new static string Info = "子类静态信息";
    public new static void ShowInfo()
    {
        Console.WriteLine(Info);
    }
}

class Program
{
    static void Main()
    {
        // 1. 父类静态成员：只能通过父类名访问（与继承无关）
        Parent.ShowInfo(); // 输出：父类静态信息
        
        // 2. 子类“同名静态成员”：只是新定义，并非继承/重写
        Child.ShowInfo(); // 输出：子类静态信息
        
        // 3. 本质：子类并未继承父类静态成员，只是语法上允许用子类名访问父类静态成员（不推荐）
        Console.WriteLine(Child.Parent.Info); // 显式访问父类静态成员
    }
}
```
**关键说明**：
- 子类 `Child` 的 `new static` 成员只是“隐藏”了父类的同名成员，并非继承后的重写；
- 编译器允许 `Child.Info` 这种写法，但本质是语法糖，底层还是访问父类的静态成员（非继承所得）。

#### 场景2：静态类无法被继承（隐含 sealed）
`static class` 本身被设计为“不可实例化、不可继承”，因此完全脱离继承体系：
```csharp
using System;

// 静态类（无法被继承）
static class Tool
{
    public static int Add(int a, int b) => a + b;
}

// ❌ 编译报错：无法继承静态类
// class MyTool : Tool 
// {
// }

class Program
{
    static void Main()
    {
        // 静态类无需实例化，直接调用静态方法（与继承无关）
        Console.WriteLine(Tool.Add(1, 2)); // 输出：3
    }
}
```

#### 场景3：实例成员 vs 静态成员（继承对比）
用表格清晰对比继承体系中实例成员和静态成员的核心差异：
| 特性                | 实例成员（非static）       | 静态成员（static）         |
|---------------------|----------------------------|----------------------------|
| 归属                | 类的实例（对象）           | 类本身                     |
| 继承性              | 子类可继承、重写（override）| 子类不继承，仅可隐藏（new）|
| 调用方式            | 实例名.成员                | 类名.成员                  |
| 修饰符兼容性        | 可搭配 virtual/abstract/sealed | 不可搭配这些继承相关修饰符 |

### 3.继承体系中何时用 static？
从继承角度，`static` 的核心使用场景是：
1. **定义“工具类/通用逻辑”**：无需实例化、无需继承的通用功能（如数学计算、字符串处理），用 `static class` 封装；
2. **定义“类级别的常量/配置”**：归属于类本身，不随实例变化，且无需被子类继承（如父类的静态常量 `public static int MaxCount = 100`）；
3. **避免继承混乱**：如果某个成员不需要被子类继承/重写，且属于“类通用逻辑”，就定义为静态成员（如日志输出、全局配置）。

### 总结
从继承视角看 `static` 关键字的核心用法：
1. **静态成员不参与继承**：子类无法继承、重写父类静态成员，同名静态成员只是“隐藏”而非继承；
2. **静态类无法被继承**：`static class` 隐含 `sealed`，完全脱离继承体系；
3. **使用原则**：继承体系中，仅当成员归属于“类本身”、无需实例化、无需被子类继承时，才用 `static`；需要继承/重写的逻辑，必须用实例成员。

简单记：继承是“实例层面的复用/扩展”，而 `static` 是“类层面的通用逻辑”，二者无交集——静态成员永远不属于继承体系。

## 十、static和sealed的区别

这两个关键字看似都和“限制类的使用”有关，但**设计目标、作用对象、核心规则完全不同**——`static` 是“限定类/成员归属于类本身，脱离实例和继承”，`sealed` 是“限制继承/重写，仍保留实例化能力”。下面我用“核心定义+对比+示例”的方式，从继承、实例化、作用对象三个维度讲透区别。

### 1.核心定义（先明确本质）
| 关键字 | 核心定位 | 核心作用 |
|--------|----------|----------|
| `static` | 静态（类/成员） | 1. 修饰类：类归属于“类型本身”，**无法实例化、无法被继承**；<br />2. 修饰成员：成员归属于类本身，而非实例，不参与继承； |
| `sealed` | 密封（类/成员） | 1. 修饰类：**禁止被继承**，但仍可正常实例化；<br />2. 修饰成员：配合 `override` 使用，禁止后续子类重写该成员； |

### 2.核心区别拆解（附代码示例）
#### 1. 作用对象与核心限制不同
- `static` 可修饰**类、方法、属性、字段**，核心限制是“脱离实例”；
- `sealed` 可修饰**类、方法、属性**（不能修饰字段），核心限制是“禁止继承/重写”。

##### 示例1：修饰类的区别（最易混淆）
```csharp
using System;

// 1. static 修饰类：无法实例化、无法继承
static class StaticTool
{
    public static int Add(int a, int b) => a + b;
}
// ❌ 编译报错：无法继承静态类
// class MyTool : StaticTool { }
// ❌ 编译报错：无法实例化静态类
// StaticTool tool = new StaticTool();

// 2. sealed 修饰类：禁止继承，但可正常实例化
sealed class SealedPerson
{
    public string Name { get; set; } = "张三";
}
// ❌ 编译报错：无法继承密封类
// class Student : SealedPerson { }
// ✅ 可正常实例化
SealedPerson p = new SealedPerson();
Console.WriteLine(p.Name); // 输出：张三
```

##### 示例2：修饰成员的区别
```csharp
using System;

class Parent
{
    // static 修饰方法：归属于类本身，不参与继承
    public static void StaticMethod()
    {
        Console.WriteLine("父类静态方法");
    }

    // 虚方法：允许子类重写
    public virtual void VirtualMethod()
    {
        Console.WriteLine("父类虚方法");
    }
}

class Child : Parent
{
    // 1. static 成员：子类无法重写，只能用 new 隐藏（非继承逻辑）
    public new static void StaticMethod()
    {
        Console.WriteLine("子类静态方法");
    }

    // 2. sealed 修饰方法：配合 override，禁止后续子类重写
    public sealed override void VirtualMethod()
    {
        Console.WriteLine("子类密封方法");
    }
}

// 子类的子类：无法重写 sealed 方法
class GrandChild : Child
{
    // ❌ 编译报错：无法重写密封方法
    // public override void VirtualMethod() { }
}

class Program
{
    static void Main()
    {
        // static 成员：通过类名调用，与实例无关
        Parent.StaticMethod(); // 父类静态方法
        Child.StaticMethod();  // 子类静态方法

        // sealed 成员：属于实例，仅限制重写，不限制调用
        Child c = new Child();
        c.VirtualMethod(); // 子类密封方法
    }
}
```

#### 2. 与“实例化”的关系不同
- `static class`：**完全禁止实例化**（不能 `new`），所有成员必须是静态的；
- `sealed class`：**允许正常实例化**（可以 `new`），成员可以是实例成员/静态成员；
- 普通类中的 `static` 成员：不影响类的实例化，只是成员本身归属于类，而非实例。

#### 3. 与“继承”的关系不同
| 场景 | static | sealed |
|------|--------|--------|
| 类能否被继承 | ❌ 静态类无法被继承 | ❌ 密封类无法被继承 |
| 类能否实例化 | ❌ 不能 | ✅ 能 |
| 成员能否被重写 | ❌ 静态成员不参与继承，无法重写 | ✅ 密封成员是“重写后禁止再重写”，本身是继承体系的一部分 |
| 核心设计目标 | 封装“类级别的通用逻辑”（无需实例） | 封装“不允许扩展的类/成员”（需实例，仅限制继承） |

### 3.实战使用场景对比
| 关键字 | 典型使用场景 |
|--------|--------------|
| `static` | 1. 工具类（如 `Math`、`String` 类）：提供通用计算/处理逻辑，无需实例化；<br />2. 全局常量/配置（如 `public static int MaxCount = 100`）；<br />3. 单例模式中的静态实例（控制类的实例数量）； |
| `sealed` | 1. 不希望被扩展的核心类（如 `string` 类是密封类，避免被篡改）；<br />2. 重写父类方法后，禁止后续子类继续修改（如框架中定型的业务逻辑）；<br />3. 提升性能：密封类/方法在编译时可优化，减少虚方法调用开销； |

### 总结
1. **核心差异**：`static` 是“脱离实例、归属于类”，`sealed` 是“限制继承、保留实例”；
2. **类的层面**：`static class` 不能实例化、不能继承；`sealed class` 能实例化、不能继承；
3. **成员层面**：`static` 成员归属于类，不参与继承；`sealed` 成员是实例成员，仅禁止后续重写；
4. **使用原则**：需要“无实例的通用逻辑”用 `static`，需要“可实例但禁止扩展”用 `sealed`。

简单记：`static` 是“类自己用，不用实例，也不让继承”；`sealed` 是“可以实例用，但不让别人继承/修改”。

