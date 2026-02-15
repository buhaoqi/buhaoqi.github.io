---
# 这部分是关键！侧边栏显示名由这里决定
title: 子任务六 this关键字  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 子任务六 this关键字  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  6  # 侧边栏中排在第1位
---



C# 中的 `this` **关键字** 和 `this()` **调用** 是两个完全不同，但又非常常见、容易让初学者混淆的概念。

------

## **一、**`this` **是什么？**

> `this` **代表“当前对象本身”。**

简单来说，当你在类的内部编写代码时，`this` 就指向当前实例化的对象，它是对当前实例对象本身的引用。

------

## **二、**`this` **的两种常见用法**

### **用法1： 代表当前对象本身**

```csharp
class Person
{
    string name;

    public void SayHello()
    {
        Console.WriteLine("你好，我是 " + this.name);
    }
}
```

当你创建两个对象：

```csharp
Person p1 = new Person();
Person p2 = new Person();
```

- 当 `p1.SayHello()` 被调用时，`this` 代表 `p1` （this指向方法的调用者)
- 当 `p2.SayHello()` 被调用时，`this` 代表 `p2 `（this指向方法的调用者)

### **用法2：区分同名变量(字段和参数重名)**

当构造函数或方法的参数名和字段名相同时，`this` 用来明确引用字段，可以消除歧义。

```csharp
class Student
{
    string name;

    public Student(string name)
    {
        this.name = name; // 左边是字段，右边是参数
    }
}
```

如果去掉 `this`，就会变成：

```csharp
name = name; // 都是参数，字段不会被赋值
```

⚠️ 结果字段 `name` 永远是空的！

------

## **三、**`this()`**是什么**

> `this()` 代表“调用当前类中另一个构造函数”。

在这里 `this` **并不是“当前对象本身”**，而是**一种特殊的构造函数调用语法**，只是**语法形式上用到了** `this` **关键字**。

## **四、**`this()`**的用法**

> 格式：`this(参数列表)` 必须写在构造函数的**第一行**！

重点：**“第一行”不是指代码的物理位置，而是执行顺序！**

当我们说

> “`this()` 必须写在构造函数的第一行”

其实并不是指“**在花括号** `{}` **里面的第一行**”， 而是指“**在构造函数执行体（花括号代码块）执行之前**”必须先调用。

```csharp
public Demo(int x) : this()
{
    Console.WriteLine("执行 B：x = " + x);
}
```

这行的语法结构其实是：

```csharp
public Demo(int x)
   ↑        ↑
   |        └─ 参数表
   └─ 构造函数声明头部
     : this()   ← 构造函数调用子句（位于方法体之前）
{
    ... ← 构造函数体
}
```

`: this()` 位于**方法头部声明与方法体之间的位置**，它是一个**构造函数调用子句 (constructor initializer)**， **在语法结构上就已经是第一步执行的内容**。

`this()` 的调用发生在：

- **任何构造函数体（大括号内）执行之前**；
- **编译器自动识别它是第一步执行的语句**；
- 所以它不能也不需要出现在 `{}` 里面。

| **误区**                          | **正确理解**                                                 |
| --------------------------------- | ------------------------------------------------------------ |
| ❌ “this() 要放在构造函数体第一行” | ✅ “this() 是构造函数的**初始化子句**，必须写在**方法头部**，且会**在构造函数体执行前**被调用” |
| ❌ “this() 在花括号内写第一行就行” | ✅ “this() 必须写在参数列表 `)` 之后、`{`之前，用冒号连接”    |

示例

```csharp
public class Demo
{
    public Demo()
    {
        Console.WriteLine("构造函数 A：无参数");
    }

    public Demo(int x)
    {
        Console.WriteLine("构造函数 B：一个 int 参数");
    }

    public Demo(string s)
    {
        Console.WriteLine("构造函数 C：一个 string 参数");
    }
}
```

### **✅ 示例 1：调用无参构造函数**

```csharp
public Demo(int x) : this()
{
    Console.WriteLine("执行 B：x = " + x);
}
```

👉 这里的 `this()` **调用的是无参构造函数 A**。

### **✅ 示例 2：调用带** `int` **参数的构造函数**

```csharp
public Demo(string s) : this(10)
{
    Console.WriteLine("执行 C：s = " + s);
}
```

👉 这里的 `this(10)` **调用的是 B 构造函数**。

### **✅ 示例 3：构造函数链式调用**

当你写：

```csharp
Demo obj = new Demo("Hello");
```

执行流程是这样的：

```csharp
C(string) → 调用 this(10)
↓
B(int) → 调用 this()
↓
A()
```

控制台输出：

```
构造函数 A：无参数
构造函数 B：一个 int 参数
执行 C：s = Hello
```

### **✅ 示例4：多个构造函数调用**

```csharp
class Car
{
    string brand;
    int year;

    // 构造函数A
    public Car() : this("未知品牌", 2024) { }

    // 构造函数B
    public Car(string brand) : this(brand, 2024) { }

    // 构造函数C
    public Car(string brand, int year)
    {
        this.brand = brand;
        this.year = year;
    }
}
```

调用时：

```csharp
Car c1 = new Car();              // 调用A → 跳转到C
Car c2 = new Car("Toyota");      // 调用B → 跳转到C
Car c3 = new Car("BMW", 2023);   // 直接调用C
```

👉 规则：

- `this()` 必须调用**同类**的另一个构造函数。
- 如果有多个构造函数，哪个匹配参数就调用哪个。
- `this()` 不是“自动选择”，而是“你用参数告诉它”要调用哪一个构造函数。所以：
  - `this()` → 无参
  - `this(10)` → 调用 int 版本
  - `this("abc")` → 调用 string 版本

补充说明：

> 因为 **构造函数也是一种“方法重载”**，而**重载的前提**是： 方法（或构造函数）之间的**参数列表必须不同**。 如果参数列表完全相同（包括参数数量、类型、顺序），那编译器就**无法区分**调用哪个版本，会直接报错。

------



## **五、教材中的示例**

在构造函数中调用同类的另一个构造函数

```csharp
public class MyClass
{
    private int value;

    // 构造函数①：无参数构造函数
    public MyClass()
    {
        this.value = 0;
    }

    // 构造函数②：带参数构造函数
    public MyClass(int value)
    {
        this();           // 🔹 这里调用了上面的无参构造函数
        this.value = value;
    }
}
```

当执行

```csharp
MyClass obj = new MyClass(10);
```

执行过程如下：

- 调用的是 `MyClass(int value)` 构造函数。
- 该构造函数第一行写了 `this();` → 所以会先去调用 `MyClass()` 构造函数。
- 在 `MyClass()` 里，执行 `this.value = 0;`。
- 返回后，继续执行 `this.value = value;`，也就是 `this.value = 10;`。

最终结果：

> 对象创建时，`value` 被先设为 `0`，后又更新为 `10`。

------



## **六、为什么要用**`this()`**?**

主要目的是 **避免重复代码**，提高构造函数之间的**复用性**。

如果你有多个构造函数，都需要执行“初始化默认值”的逻辑，就可以让它们统一调用一个基础构造函数。

示例

```csharp
public class Person

    private string name;
    private int age;

    // 基础构造函数
    public Person()
    {
        name = "未命名";
        age = 0;
    }

    // 复用上面的构造函数
    public Person(string name) : this()
    {
        this.name = name;
    }

    // 再复用一次
    public Person(string name, int age) : this(name)
    {
        this.age = age;
    }
}
```

调用

```csharp
new Person();             // name="未命名", age=0
new Person("小明");       // name="小明", age=0
new Person("小红", 18);   // name="小红", age=18
```

通过这种方式：

- 代码更简洁；
- 所有构造函数的默认初始化逻辑保持一致；
- 修改默认逻辑时，只需改一个地方。

## **七、使用** `this()` **的注意点**

| **规则**                     | **说明**                                              |
| ---------------------------- | ----------------------------------------------------- |
| ✅ 必须是构造函数的第一行     | `this()` 调用必须写在构造函数的最前面，否则编译报错。 |
| ✅ 只能调用本类的其他构造函数 | 不能调用父类的构造函数（那要用 `base()`）。           |
| ✅ 不可形成循环调用           | `this()` 之间不能互相递归，否则编译会出错。           |

## **八、记忆口诀：**

> 🔹 **“this 指自己，this() 指同伴。”** this → 当前对象 this() → 同类中另一个构造函数

------