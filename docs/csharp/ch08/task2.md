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

## 四、继承的基本语法

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

- 关键规则：
  - 父类如果是 `sealed`（密封类），则不能被继承；
  - 省略父类时，默认继承自 `object`（C# 所有类的根类）。


## 五、继承的用法
### 用法1:调用无参构造函数实现继承

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

---

### 用法2:调用有参构造函数实现继承

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

## 六、调用构造函数的语法总结

### 场景1：调用父类无参构造函数（默认/显式）
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

### 场景2：调用父类有参构造函数
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

### 场景3：子类构造函数重载时调用不同父类构造
```csharp
public class SubClass : BaseClass
{
    // 重载1：调用父类无参构造
    public SubClass() : base() { }
    // 重载2：调用父类有参构造
    public SubClass(string name) : base(name) { }
}
```

## 七、构造函数调用的规则

### 1. **隐式调用默认构造函数**

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

## 八、继承相关关键字

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

| 关键字         | 用法说明                                                     |
| -------------- | ------------------------------------------------------------ |
| **`virtual`**  | 声明在父类中，表示该成员是“虚”的，**允许**在子类中被重写。   |
| **`override`** | 声明在子类中，表示**正式重写**父类的 virtual 或 abstract 成员。 |
| **`new`**      | **隐藏**（Hide）父类成员。子类定义了一个同名成员，但它与父类成员没有多态关系。 |


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

## 九、继承的好处

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
