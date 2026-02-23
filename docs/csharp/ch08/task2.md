---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 类的继承 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 类的继承  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 一、继承是什么

> “继承，就是让一个类**拥有另一个类的成员**。在 C# 中，我们可以创建一个 ‘父类’，然后多个 ‘子类’ 都可以继承它的成员，从而实现代码重用与扩展。”

继承是一种面向对象编程机制，它允许一个类（称为派生类或子类）基于另一个类（称为基类或父类）来定义，从而：

- 自动获得父类的非私有成员
- 扩展父类的功能（添加新成员）
- 修改父类的行为（重写虚方法）
- 实现多态（通过统一的接口操作不同的对象）



举个现实例子：

> “比如有一个 `Animal`（动物）类，有方法 `Eat()`；
> `Dog` 和 `Cat` 都是动物，可以继承 `Animal` 的行为，而不需要重复写代码。”

## 二、继承的基本语法

核心概念

* **基类（Base Class / Parent Class）：** 被继承的类，提供通用的属性和功能。
* **派生类（Derived Class / Child Class）：** 继承基类的类，可以重用父类的代码，也可以添加新功能或修改旧功能。

**语法符号：** 使用冒号 `:` 表示继承。

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

## 三、继承的用法
```csharp
public class Animal
{
    public void Eat()
    {
        Console.WriteLine("正在吃东西...");
    }
}

public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("汪汪！");
    }
}

// 继承的使用
Dog d = new Dog();
d.Eat();   // 来自父类
d.Bark();  // 自己的方法
```
运行结果：

```
我会吃东西
汪汪汪！
```

你看，`Dog` 类自己只写了 `Bark()` 方法，但它能调用 `Eat()`，因为它继承了 `Animal` 类。“这样，我们就通过继承重用了 `Animal` 类的行为。”

> “这个例子中：
>
> * `Animal` 是父类；
> * `Dog` 是子类；
> * `Dog` 继承了 `Animal` 的 `Eat()` 方法；
> * 同时它也有自己的方法 `Bark()`。”


### 示例：自动获得父类的非私有成员

#### 完整示例代码

```csharp
using System;

class Animal
{
    // 公共字段 - 子类可以访问
    public string Name;
    
    // 私有字段 - 子类不能直接访问
    private int age;
    
    // 受保护的字段 - 子类可以访问
    protected string Color;
    
    // 公共属性 - 子类可以访问
    public int Age 
    { 
        get { return age; }
        set { age = value; }
    }
    
    // 公共方法 - 子类可以访问
    public void Eat()
    {
        Console.WriteLine($"{Name} is eating");
    }
    
    // 受保护的方法 - 子类可以访问
    protected void Sleep()
    {
        Console.WriteLine($"{Name} is sleeping");
    }
    
    // 私有方法 - 子类不能访问
    private void Breathe()
    {
        Console.WriteLine("Breathing");
    }
}

class Dog : Animal
{
    public void DisplayInfo()
    {
        // 访问父类的公共字段 ✓
        Name = "旺财";
        
        // 访问父类的公共属性 ✓
        Age = 3;
        
        // 访问父类的受保护字段 ✓
        Color = "棕色";
        
        // 访问父类的公共方法 ✓
        Eat();
        
        // 访问父类的受保护方法 ✓
        Sleep();
        
        // ❌ 不能访问父类的私有成员
        // age = 5;  // 错误：'Animal.age' 是私有的
        // Breathe();  // 错误：'Animal.Breathe()' 是私有的
        
        Console.WriteLine($"我是一只{Color}的狗，名字叫{Name}，今年{Age}岁");
    }
    
    // 子类可以添加自己的方法
    public void Bark()
    {
        Console.WriteLine($"{Name} is barking: 汪汪！");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Dog dog = new Dog();
        
        // 可以直接访问父类的公共成员
        dog.Name = "来福";
        dog.Age = 2;
        // dog.Color = "黑色";  // ❌ 受保护的成员不能在类外部访问
        // dog.Sleep();  // ❌ 受保护的方法不能在类外部访问
        
        dog.Eat();  // ✓ 公共方法
        dog.DisplayInfo();  // ✓ 子类自己的方法
        dog.Bark();  // ✓ 子类自己的方法
    }
}
```

#### 输出结果
```
来福 is eating
旺财 is eating
旺财 is sleeping
我是一只棕色的狗，名字叫旺财，今年3岁
来福 is barking: 汪汪！
```

#### 成员访问权限总结

| 访问修饰符 | 在本类中 | 在子类中 | 在外部代码中 |
|-----------|---------|---------|------------|
| `public` | ✓ 可访问 | ✓ 可访问 | ✓ 可访问 |
| `protected` | ✓ 可访问 | ✓ 可访问 | ✗ 不可访问 |
| `private` | ✓ 可访问 | ✗ 不可访问 | ✗ 不可访问 |
| 默认（无修饰符）| ✓ 可访问 | ✗ 不可访问 | ✗ 不可访问 |

#### 关键点说明

1. **自动获得**：子类不需要写任何代码就能使用父类的`public`和`protected`成员
2. **不能获得私有成员**：父类的`private`成员对子类不可见
3. **可以扩展**：子类可以添加自己的成员（如`Bark()`方法）
4. **封装性**：`protected`允许子类访问，但对外部隐藏

这个示例清晰地展示了子类如何"自动获得"父类的非私有成员，并且可以在自己的方法中直接使用它们。

### 示例2：父类构造函数永远被调用

在C#中，**创建派生类（子类）的实例时，父类的构造函数永远都会被调用**。

```csharp
class Animal
{
    public Animal()
    {
        Console.WriteLine("父类构造函数被调用");
    }
}

class Dog:Animal
{
    public Dog()
    {
        Console.WriteLine("子类构造函数被调用");
    }
}

internal class Program
{
    public static void Main(string[] args)
    {
        Dog d1 = new Dog();
        
    }
}
```
当你执行 `Dog d1 = new Dog();` 时，构造函数的调用顺序是：

1. **先调用父类的构造函数**（Animal()）
2. **再调用子类的构造函数**（Dog()）

运行你的代码会输出：
```
父类构造函数被调用
子类构造函数被调用
```

#### 为什么父类构造函数一定会被调用？

这是因为子类继承了父类的成员（字段、属性、方法等）。在创建子类对象时，需要确保父类的成员被正确初始化，这通过调用父类构造函数来完成。

#### 构造函数调用的规则

##### 1. **隐式调用默认构造函数**
如果子类构造函数没有指定调用哪个父类构造函数，会自动调用父类的**无参构造函数**：

```csharp
public Dog()  // 隐式调用父类无参构造函数 base()
{
    Console.WriteLine("子类构造函数被调用");
}
```

等价于：
```csharp
public Dog() : base()  // 显式调用父类无参构造函数
{
    Console.WriteLine("子类构造函数被调用");
}
```

### 示例3： **如果父类没有无参构造函数**

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
class Animal
{
    public string _name;
    private int _age;

    public Animal(string name, int age)
    {
        this._name = name;
        this._age = age;
        Console.WriteLine("父类构造函数被调用");
    }
}

class Dog:Animal
{
    public Dog():base("张三",18)
    {
        Console.WriteLine("子类构造函数被调用");
    }
}
internal class Program
{
    public static void Main(string[] args)
    {
        Dog d1 = new Dog();
        
    }
}
```

#### 总结

✅ **父类的构造函数永远都会被调用**，这是C#继承机制的核心规则。它确保了：
- 父类的成员被正确初始化
- 继承链上的所有状态都被合理设置
- 对象处于有效状态

这个规则保证了面向对象编程中继承的正确性和完整性。

## 三、继承的关键规则

| 特性 | 说明 |
| --- | --- |
| **单继承** | C# 不支持多重继承（一个类不能同时继承多个类），但可以实现多个接口。 |
| **传递性** | 如果类 C 继承自类 B，而类 B 继承自类 A，那么类 C 也拥有类 A 的成员。 |
| **访问修饰符** | `private` 成员不能被继承；`protected` 成员只能在基类及其派生类中访问。 |
| **构造函数** | 子类不会继承父类的构造函数，但可以通过 `base` 关键字调用它们。 |

- ✅ **能继承**：公共(public)和受保护(protected)的方法、属性、字段
- ❌ **不能继承**：私有(private)成员、构造函数
* C# 是**单继承**语言，一个类只能继承一个父类；
* 子类不能继承父类的 private 成员，但可以继承 protected 和 public 的；
* 如果你不想某个类被继承，可以加 `sealed` 关键字。
* 不支持多继承（一个类只能继承一个类）；
* 但可以使用接口实现“多实现”机制（稍后课程讲解）；

1. **代码复用：** 避免在多个类中编写重复的代码（例如，所有动物都有名字和进食行为）。
2. **多态性基础：** 继承是实现多态（父类引用指向子类对象）的前提。
3. **层次清晰：** 能够很好地模拟现实世界中的“属于（is-a）”关系（例如：狗“是一个”动物）。

## 四、继承相关关键字

在 C# 中，继承是面向对象编程（OOP）的核心。为了管理类与类之间的关系，C# 提供了一套非常严谨的关键字。

我们可以将这些关键字分为三类：**准入类**（决定能否继承）、**修饰类**（决定如何重写）以及**工具类**（处理底层逻辑）。

### 1. 准入与限制关键字

这类关键字决定了类是否可以被继承，或者成员是否对子类可见。

* **`public` / `protected` / `internal**`: 访问修饰符。其中 `protected` 是专门为继承设计的，表示成员仅对当前类及其**派生类**可见。
* **`sealed` (密封)**:
* 用于**类**：防止类被继承（例如 `string` 类就是密封的）。
* 用于**方法**：防止子类进一步重写该方法（必须配合 `override` 使用）。


* **`abstract` (抽象)**:
* 用于**类**：表示该类是不完整的，不能被实例化，只能作为基类。
* 用于**方法**：只有声明没有实现，强制子类必须重写。

### 2. 成员重写关键字

当子类想要改变父类的行为时，需要用到这些组合。

| 关键字 | 用法说明 |
| --- | --- |
| **`virtual`** | 声明在父类中，表示该成员是“虚”的，**允许**在子类中被重写。 |
| **`override`** | 声明在子类中，表示**正式重写**父类的 virtual 或 abstract 成员。 |
| **`new`** | **隐藏**（Hide）父类成员。子类定义了一个同名成员，但它与父类成员没有多态关系。 |


### 3. 调用与检测关键字

在继承链中导航时必不可少的工具。

* **`base`**: 指代当前类的直接父类。常用于调用父类的构造函数或已被重写的方法。
```csharp
public MySubClass() : base() { // 调用父类构造函数 }

```

* **`is`**: 检查对象是否兼容于指定类型（布尔判断）。
* **`as`**: 尝试将对象转换为指定类型，如果转换失败则返回 `null`，不会抛出异常。


### 4. 接口相关（特殊的“继承”）

虽然 C# 不支持类的一项多继承，但支持接口的多实现。

* **`interface`**: 定义行为契约。
* **`implicit` / `explicit**`: 隐式或显式实现接口。显式实现可以解决多个接口中方法名冲突的问题。


### 关键规则速记图

> **重写三部曲：**
> 1. 父类说：`virtual` (你可以改) 或 `abstract` (你必须改)。
> 2. 子类说：`override` (我改了)。
> 3. 如果子类不想让后代再改：`sealed override` (到此为止)。
> 
> 

### 核心关键字表

| 类别 | 关键字 | 主要用途 |
|------|--------|----------|
| **定义可重写成员** | `virtual` | 标记方法/属性可以被重写 |
| **实现重写** | `override` | 重写父类的虚方法/抽象方法 |
| **抽象成员/类** | `abstract` | 定义必须由子类实现的成员 |
| **阻止继承/重写** | `sealed` | 密封类或方法，禁止继承/重写 |
| **隐藏父类成员** | `new` | 隐藏父类的同名成员 |
| **访问父类成员** | `base` | 调用父类的构造函数、方法、属性 |
| **访问本类成员** | `this` | 调用本类的构造函数、区分参数 |



##  **`virtual` - 虚方法/属性**

"虚"意味着：

- 这个方法现在只是一个占位符或模板
- 具体的实现是"虚"的，可以在子类中变成不同的"实"体

**作用**：允许子类重写该方法/属性，但父类提供默认实现。

```csharp
public class Animal
{
    // 虚方法：子类可以重写，但不是必须的
    public virtual void MakeSound()
    {
        Console.WriteLine("动物发出声音");
    }
    
    // 虚属性
    public virtual string Name { get; set; } = "动物";
}

public class Dog : Animal
{
    public override void MakeSound()  // 可选重写
    {
        Console.WriteLine("汪汪！");
    }
}
```

---

## **`override` - 重写**

**作用**：重写父类的 `virtual` 或 `abstract` 方法/属性。

```csharp
public class Dog : Animal
{
    // 重写父类的虚方法
    public override void MakeSound()
    {
        base.MakeSound();  // 可选：调用父类实现
        Console.WriteLine("然后汪汪叫");
    }
    
    // 重写虚属性
    private string _name = "狗";
    public override string Name 
    { 
        get { return _name; }
        set { _name = value; }
    }
}
```

**规则**：
- 必须与父类方法签名相同
- 不能重写非虚方法和静态方法
- 重写方法的访问级别不能低于父类

---

## **`abstract` - 抽象**

**作用**：定义抽象类或抽象成员，没有实现，必须由子类实现。

```csharp
public abstract class Animal  // 抽象类：不能被实例化
{
    // 抽象方法：没有方法体，子类必须重写
    public abstract void MakeSound();
    
    // 抽象属性
    public abstract string Name { get; set; }
    
    // 普通方法：可以有实现
    public void Eat()
    {
        Console.WriteLine("吃东西");
    }
}

public class Dog : Animal
{
    // 必须实现所有抽象成员
    public override void MakeSound()
    {
        Console.WriteLine("汪汪！");
    }
    
    public override string Name { get; set; } = "旺财";
}
```

## **`sealed` - 密封**

**作用**：阻止类被继承，或阻止虚方法被进一步重写。

```csharp
// 密封类：不能被继承
public sealed class FinalClass
{
    public void Method() { }
}
// 编译错误：不能从密封类派生
// public class DerivedClass : FinalClass { }

public class Animal
{
    public virtual void MakeSound() { }
}

public class Dog : Animal
{
    // 密封方法：不能再被子类重写
    public sealed override void MakeSound()
    {
        Console.WriteLine("汪汪！");
    }
}

public class Puppy : Dog
{
    // 编译错误：不能重写密封方法
    // public override void MakeSound() { }
}
```

---

## **`new` - 隐藏成员**

**作用**：隐藏父类的同名成员（不是重写），创建新的实现。

```csharp
public class Animal
{
    public void Eat()
    {
        Console.WriteLine("动物在吃东西");
    }
}

public class Dog : Animal
{
    // 隐藏父类的Eat方法
    public new void Eat()
    {
        Console.WriteLine("狗在啃骨头");
    }
}

// 使用示例
Animal animal = new Dog();
animal.Eat();  // 输出：动物在吃东西（调用父类方法）

Dog dog = new Dog();
dog.Eat();     // 输出：狗在啃骨头（调用子类新方法）
```

**与 `override` 的区别**：
| 特性 | `override` | `new` |
|------|-----------|-------|
| 父类方法必须标记 | `virtual`/`abstract`/`override` | 任意 |
| 多态性 | 支持（父类引用调用子类实现） | 不支持（父类引用调用父类实现） |
| 目的 | 扩展/修改父类行为 | 隐藏父类行为 |

---

## **`base` - 调用父类成员**

**作用**：在子类中访问父类的构造函数、方法、属性。

```csharp
public class Animal
{
    public string Name { get; set; }
    
    // 父类构造函数
    public Animal(string name)
    {
        Name = name;
        Console.WriteLine($"Animal构造函数: {name}");
    }
    
    public virtual void Eat()
    {
        Console.WriteLine($"{Name} 在吃东西");
    }
}

public class Dog : Animal
{
    public int Age { get; set; }
    
    // 调用父类构造函数
    public Dog(string name, int age) : base(name)
    {
        Age = age;
    }
    
    public override void Eat()
    {
        base.Eat();  // 调用父类方法
        Console.WriteLine($"{Name} 吃完后汪汪叫");
    }
    
    public void ShowInfo()
    {
        base.Eat();  // 显式调用父类方法
        // 或者直接使用父类属性
        Console.WriteLine($"名字: {base.Name}, 年龄: {Age}");
    }
}
```

**`base` 的用途**：
- `: base(...)` - 调用父类构造函数
- `base.Method()` - 调用父类方法
- `base.Property` - 访问父类属性

---

##  **`this` - 调用本类成员**

**作用**：调用本类的其他构造函数，区分参数和字段。

```csharp
public class Dog : Animal
{
    public string Color { get; set; }
    public int Age { get; set; }
    
    // 无参构造函数调用有参构造函数
    public Dog() : this("无名", 0, "未知")
    {
        Console.WriteLine("无参构造函数");
    }
    
    // 两个参数的构造函数调用三个参数的构造函数
    public Dog(string name, int age) : this(name, age, "未知")
    {
        Console.WriteLine("两个参数构造函数");
    }
    
    // 主构造函数
    public Dog(string name, int age, string color) : base(name)
    {
        this.Age = age;      // this 区分参数和字段
        this.Color = color;
        Console.WriteLine($"三个参数构造函数: {name}, {age}, {color}");
    }
    
    public void SetAge(int age)
    {
        this.Age = age;  // this.Age 是字段，age 是参数
    }
}
```

**构造函数调用链**：
```
new Dog() 
→ this("无名", 0, "未知") 
→ base("无名") 
→ Animal构造函数
→ Dog三个参数构造函数
→ Dog两个参数构造函数（如果有）
→ Dog无参构造函数
```

---

## 关键字组合使用场景

### 场景1：完整的继承体系
```csharp
public abstract class Shape  // 抽象基类
{
    public abstract double GetArea();  // 抽象方法，必须实现
    
    public virtual void Display()  // 虚方法，可选重写
    {
        Console.WriteLine($"面积: {GetArea()}");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }
    
    public Circle(double radius)
    {
        Radius = radius;
    }
    
    public override double GetArea()  // 实现抽象方法
    {
        return Math.PI * Radius * Radius;
    }
    
    public sealed override void Display()  // 密封重写，阻止进一步重写
    {
        Console.WriteLine($"圆形半径: {Radius}");
        base.Display();
    }
}
```

### 场景2：多层继承中的控制
```csharp
public class Vehicle
{
    public virtual void Start() { }
    public virtual void Stop() { }
}

public class Car : Vehicle
{
    public override void Start() { }
    public sealed override void Stop() { }  // Car及子类都使用相同Stop方式
}

public class SportsCar : Car
{
    public override void Start() { }  // 可以重写Start
    // 不能重写Stop，因为被sealed
}
```



## 关键字对比表

| 关键字 | 可修饰 | 子类行为 | 多态支持 | 必须实现 | 调用方式 |
|--------|--------|----------|----------|----------|----------|
| **`virtual`** | 方法、属性、索引器、事件 | 可重写 | ✓ | 否 | `obj.Method()` |
| **`override`** | 方法、属性、索引器、事件 | 重写父类 | ✓ | 取决于父类 | `obj.Method()` |
| **`abstract`** | 类、方法、属性、索引器、事件 | 必须实现 | ✓ | 是 | 只能通过子类 |
| **`sealed`** | 类、方法、属性 | 不能继承/重写 | ✗ | 不适用 | 正常调用 |
| **`new`** | 任何成员 | 隐藏父类 | ✗ | 否 | 取决于引用类型 |
| **`base`** | 构造函数、方法调用 | 访问父类 | - | - | `base.Member` |
| **`this`** | 构造函数、成员访问 | 访问本类 | - | - | `this.Member` |



## 总结

1. **默认使用 `virtual`**：除非确定方法不需要扩展
2. **慎用 `new`**：容易引起混淆，优先考虑重命名
3. **合理使用 `sealed`**：性能优化和设计安全性
4. **抽象类设计**：包含通用功能，定义接口契约
5. **构造函数链**：使用 `base` 和 `this` 避免代码重复

这些关键字共同构成了C#强大的继承体系，合理使用可以设计出清晰、可扩展的面向对象程序。


## **初学者常见问题**

### **Q: 什么时候应该使用继承？**

A: 当两个类之间有"是一种"的关系时：

- 狗 **是一种** 动物 ✅
- 汽车 **是一种** 交通工具 ✅
- 学生 **是一种** 人 ✅

### **Q: 继承后能访问父类的私有成员吗？**

A: 不能！就像你不能查看父母的私人日记一样：

```csharp
class 父亲
{
    private string 银行卡密码;  // 子类无法访问
    public string 姓氏;         // 子类可以访问
}
```
## 继承的好处

- 减少重复代码
- 实现代码复用
- 提高程序可维护性
- 是多态和扩展的基础
1. ✅ **代码重用**：避免重复写相同的功能；
2. ✅ **层级建模**：可以从“通用到具体”地构建类；
3. ✅ **统一接口**：后面配合“多态”使用更强大。


### **1. 代码重用**

不用重复写相同的代码：

```csharp
// 没有继承（重复代码）
class 学生
{
    public string 姓名;
    public int 年龄;
    public void 吃饭() { }
}

class 老师
{
    public string 姓名;      // 重复！
    public int 年龄;        // 重复！
    public void 吃饭() { }  // 重复！
}

// 有继承（消除重复）
class 人
{
    public string 姓名;
    public int 年龄;
    public void 吃饭() { }
}

class 学生 : 人 { }  // 自动拥有姓名、年龄、吃饭()
class 老师 : 人 { }  // 自动拥有姓名、年龄、吃饭()
```

### **2. 扩展功能**

在继承的基础上添加新功能：

```csharp
class 人
{
    public string 姓名;
    public void 基本功能() { }
}

class 程序员 : 人
{
    public void 写代码()    // 扩展新功能
    {
        Console.WriteLine(姓名 + "在写代码");
    }
}
```

### 5. 进阶：重写（Override）

如果父类的方法不符合子类的需求，可以使用 `virtual` 和 `override` 关键字来“重定义”行为：

* 父类方法标记为 `virtual`。
* 子类方法标记为 `override`。



## 练习题

### 练习1

> “请你动手完成一个练习：
>
> * 创建一个 `Vehicle` 类，包含方法 `Run()`；
> * 创建 `Car` 和 `Bike` 两个子类，分别添加 `Honk()` 和 `RingBell()` 方法；
> * 在 Main 中测试继承与调用。”

### 练习题2

```csharp
class Vehicle
{
    public void Drive() { Console.WriteLine("正在行驶"); }
}

class Car : Vehicle
{
    public void Honk() { Console.WriteLine("滴滴！"); }
}

Car c = new Car();
c.Drive(); // ?
c.Honk();  // ?
```

### **示例3：简单的继承**

```csharp
// 基类
public class 动物
{
    public string 名字;
    
    public void 吃()
    {
        Console.WriteLine(名字 + "在吃东西");
    }
    
    public void 睡()
    {
        Console.WriteLine(名字 + "在睡觉");
    }
}

// 派生类
public class 狗 : 动物
{
    public void 叫()
    {
        Console.WriteLine("汪汪！");
    }
}

// 使用
class Program
{
    static void Main()
    {
        狗 我的狗 = new 狗();
        我的狗.名字 = "小白";    // 继承自动物类
        我的狗.吃();           // 继承自动物类
        我的狗.叫();           // 狗类自己的方法
    }
}
```

### **示例4：添加特有功能**

```csharp
public class 图形
{
    public string 颜色;
    
    public virtual void 绘制()  // virtual允许子类重写
    {
        Console.WriteLine("绘制图形");
    }
}

public class 圆形 : 图形
{
    public double 半径;
    
    public override void 绘制()  // 重写父类方法
    {
        Console.WriteLine("绘制圆形，半径：" + 半径);
    }
    
    public double 计算面积()
    {
        return 3.14 * 半径 * 半径;  // 圆形特有的方法
    }
}
```
### 示例5：父子关系类比

```csharp
// 父亲（基类）
public class 父亲
{
    public string 姓氏 = "张";
    public void 走路() { }
    public void 说话() { }
}

// 儿子（派生类）
public class 儿子 : 父亲
{
    // 自动拥有父亲的姓氏、走路、说话能力
    public void 玩游戏() { } // 自己特有的能力
}
```

### **示例6：交通工具层次**

```csharp
// 基类：所有交通工具的共性
public class 交通工具
{
    public string 品牌;
    public int 速度;
    
    public void 启动() 
    {
        Console.WriteLine("交通工具启动");
    }
}

// 派生类：具体的交通工具
public class 汽车 : 交通工具
{
    public int 轮子数量 = 4;
    
    public void 鸣笛()
    {
        Console.WriteLine("滴滴！");
    }
}

public class 自行车 : 交通工具
{
    public void 蹬踏板()
    {
        Console.WriteLine("用力蹬踏板");
    }
}
```

