---
noteId: "bb3386605e0c11f0a1a33da03f8ebbc2"
tags: []

---

---

## 一、什么是构造函数？

构造函数是一个 **特殊的方法**，在你 **使用 `new` 创建对象时自动执行**，用于初始化对象的状态（如字段、属性等）。

> 📌 构造函数的英文是：**constructor**

当你写：

```csharp
new Person();
```

你是在**创建一个 Person 类的对象**，**调用的是 Person 类的构造函数**来初始化这个对象。

`new Person();` 的完整含义如下：

1. **`new` 关键词：**

      * 触发“创建新对象”的操作。
      * 在内存中为对象分配空间。

2. **`Person()`：**

      * 是 **构造函数的调用**。
      * 在分配完空间后，**调用该类的构造函数对新对象进行初始化**（比如给字段赋值）。

3. **整个 `new Person()` 表达式返回的就是一个新建好的 `Person` 类型对象**。

---

## 🧩 举个类比（比喻）：

假设：

* `Person` 类是“房子的蓝图”；
* `new` 是“盖房子的动作”；
* `构造函数` 是“装修流程”（比如贴瓷砖、刷墙）；
* `new Person()` 就是“用蓝图盖了一套房子并完成初始装修”。

---
## ✅ 示例代码：

```csharp
public class Person
{
    public string Name;

    // 构造函数
    public Person()
    {
        Name = "未命名";
        Console.WriteLine("构造函数被调用");
    }
}
```

调用：

```csharp
Person p = new Person();  // 输出：构造函数被调用
```

### 执行顺序是：

1. `new` 分配对象内存；
2. 调用 `Person()` 构造函数 → 输出“构造函数被调用”；
3. 构造完毕后，变量 `p` 引用这个新建的 `Person` 对象。

---

## 二、构造函数的语法格式

```csharp
[访问修饰符] 类名(参数列表)
{
    // 初始化代码
}
```

> 🚫 没有返回类型，连 `void` 也不能写。

---

示例：无参构造函数

```csharp
public class Person
{
    public string Name;

    // 构造函数
    public Person()
    {
        Name = "未命名";
        Console.WriteLine("Person 对象已创建");
    }
}
```

调用方式：

```csharp
Person p = new Person();  // 自动执行构造函数
```

---

## 三、构造函数的特点总结

| 特性                                 | 说明               |
| ---------------------------------- | ---------------- |
| 名称必须与类名相同                          | ✅                |
| 没有返回类型                             | ✅（连 `void` 都不能写） |
| 自动调用                               | 创建对象时由 `new` 触发  |
| 可以重载（多个版本）                         | ✅ 支持带参数的构造函数     |
| 可以是 `public`、`private`、`protected` | 控制访问权限           |
| 可以定义静态构造函数                         | ✅（仅执行一次）         |

---

## 四、构造函数的类型

# ✅ C# 类的典型创建方式示例（共8种）

---

### ✅ 示例 1：最简类（不包含任何成员）

```csharp
public class EmptyClass
{
}
```

📌 **特点**：

* 没有字段、属性、方法、构造函数；
* 系统自动提供一个默认构造函数；
* 可以 `new EmptyClass()` 创建对象。

---

### ✅ 示例 2：只有字段的类（无构造函数）

```csharp
public class OnlyFields
{
    public string name;
    private int age;
}
```

📌 **特点**：

* 没有构造函数；
* 系统自动提供一个无参构造函数；
* 字段只能手动赋值或初始化。

---

### ✅ 示例 3：只包含构造函数的类（无字段）

```csharp
public class OnlyConstructor
{
    public OnlyConstructor()
    {
        Console.WriteLine("对象已创建");
    }
}
```

📌 **特点**：

* 没有字段；
* 构造函数仅用于提示创建对象；
* 实际上不存储任何数据。

---

### ✅ 示例 4：包含字段 + 无参构造函数

```csharp
public class Student
{
    public string Name;
    public int Age;

    public Student()
    {
        Name = "未命名";
        Age = 0;
    }
}
```

📌 **特点**：

* 构造函数初始化字段；
* 可以直接通过 `new Student()` 创建对象并自动设置默认值。

---

### ✅ 示例 5：包含字段 + 有参构造函数

```csharp
public class Person
{
    public string Name;
    public int Age;

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
```

📌 **特点**：

* 没有默认构造函数；
* 必须传参才能创建对象。

```csharp
Person p = new Person("Tom", 20); // ✅
Person p2 = new Person();         // ❌ 编译错误
```

---

### ✅ 示例 6：包含字段 + 属性 + 构造函数

```csharp
public class Car
{
    private string _brand;

    // 属性：封装字段
    public string Brand
    {
        get { return _brand; }
        set { _brand = value; }
    }

    public Car(string brand)
    {
        _brand = brand;
    }
}
```

📌 **特点**：

* 使用属性代替字段的直接访问；
* 构造函数初始化字段；
* 推荐封装方式。

---

### ✅ 示例 7：只包含属性的类（自动属性）

```csharp
public class Book
{
    public string Title { get; set; }
    public double Price { get; set; }
}
```

📌 **特点**：

* 使用**自动属性**；
* 系统自动生成隐藏字段；
* 可以直接用 `new Book()` + 对象初始化器赋值：

```csharp
Book b = new Book { Title = "C#入门", Price = 39.9 };
```

---

### ✅ 示例 8：包含静态字段 + 静态构造函数

```csharp
public class Config
{
    public static string AppName;

    static Config()
    {
        AppName = "MyApp";
        Console.WriteLine("配置已加载");
    }
}
```

📌 **特点**：

* 静态构造函数只在第一次使用类时执行一次；
* 用于初始化静态数据。

---

# ✅ 总结表：类的组合特征一览

| 示例   | 字段 | 构造函数     | 参数 | 属性 | 静态成员 | 是否必须传参 |
| ---- | -- | -------- | -- | -- | ---- | ------ |
| 示例 1 | ❌  | ❌ (系统提供) | ❌  | ❌  | ❌    | ❌      |
| 示例 2 | ✅  | ❌ (系统提供) | ❌  | ❌  | ❌    | ❌      |
| 示例 3 | ❌  | ✅ 无参     | ❌  | ❌  | ❌    | ❌      |
| 示例 4 | ✅  | ✅ 无参     | ❌  | ❌  | ❌    | ❌      |
| 示例 5 | ✅  | ✅ 有参     | ✅  | ❌  | ❌    | ✅      |
| 示例 6 | ✅  | ✅ 有参     | ✅  | ✅  | ❌    | ✅      |
| 示例 7 | ❌  | ❌ (系统提供) | ❌  | ✅  | ❌    | ❌      |
| 示例 8 | ❌  | ✅ 静态     | ❌  | ❌  | ✅    | ❌      |

---

### 1.无参构造函数

默认构造函数

系统自动提供一个，如果你没有定义任何构造函数。

```csharp
public class Dog
{
    public Dog()
    {
        Console.WriteLine("一只狗出生了");
    }
}
```

---

### 2.有参构造函数（重载）

```csharp
public class Book
{
    public string Title;

    public Book(string title)
    {
        Title = title;
    }
}
```

调用：

```csharp
Book b = new Book("C# 编程");
```

---

### 3.构造函数重载

（多个构造函数）

```csharp
public class Student
{
    public string Name;
    public int Age;

    // 无参构造函数
    public Student()
    {
        Name = "未知";
        Age = 0;
    }

    // 有参构造函数
    public Student(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
```

调用：

```csharp
Student s1 = new Student();
Student s2 = new Student("Tom", 18);
```

---

### 4.静态构造函数

static constructor

* 用于初始化静态字段
* 没有参数
* 不能手动调用，只执行一次

```csharp
public class Config
{
    public static string AppName;

    static Config()
    {
        AppName = "MyApp";
        Console.WriteLine("静态构造函数已执行");
    }
}
```

调用：

```csharp
Console.WriteLine(Config.AppName);  // 自动触发 static 构造函数
```

---

## 五、构造函数的访问修饰符

| 修饰符         | 用途           |
| ----------- | ------------ |
| `public`    | 常用，允许外部创建对象  |
| `private`   | 限制实例化，用于单例模式 |
| `protected` | 只允许继承类调用     |
| `internal`  | 仅限同一程序集使用    |

---

## 六、构造函数 vs 方法的区别
（速查表）

| 比较项       | 构造函数    | 普通方法   |
| --------- | ------- | ------ |
| 是否返回值     | ❌ 没有    | ✅ 有    |
| 是否必须与类名相同 | ✅ 是     | ❌ 否    |
| 是否自动调用    | ✅ 创建对象时 | ❌ 手动调用 |
| 是否能被多次调用  | ❌ 一次    | ✅ 任意次  |

---

## 七、使用构造函数的常见场景

| 场景         | 描述                |
| ---------- | ----------------- |
| 对象创建时设置初始值 | 设置字段、属性           |
| 初始化只读字段    | 在构造函数中赋值          |
| 控制对象数量     | 用 static 构造函数或计数器 |
| 创建对象时传参    | 用带参数构造函数简化初始化逻辑   |

---

## 八、构造函数最佳实践

1. ✅ 为类提供清晰的构造函数（可带默认值）
2. ❌ 避免在构造函数中执行复杂逻辑或访问外部资源
3. ✅ 使用构造函数初始化只读字段（`readonly`）
4. ✅ 保持构造函数短小、明确

---

## 九、练习题推荐

如果你想测试是否掌握，我可以提供这些：

* ✅ 选择题：识别构造函数的合法写法
* ✅ 编程题：重载多个构造函数、创建对象传参
* ✅ 判断题：构造函数能否返回值/手动调用等

---

## 十、一句口诀记忆构造函数

> 🔹 名字跟类走，不能加 `void`；
> 🔹 创建自动跑，初始化最好；
> 🔹 有参无参都能来，重载别忘带；
> 🔹 静态构造不能传，系统只跑一回完！

---

## 十一、构造函数和普通方法的区别

构造函数（Constructor）和 普通方法（Method）的核心区别

| 比较点              | 构造函数（Constructor）        | 方法（Method）                |
| ---------------- | ------------------------ | ------------------------- |
| **作用**           | 创建对象时执行，用于初始化            | 对象创建后调用，执行某些功能            |
| **名称**           | 必须与类名相同                  | 自定义名称                     |
| **返回类型**         | ❌ 没有返回类型（不能写 `void` 或其它） | ✅ 必须有返回类型（可以是 `void`）     |
| **是否手动调用**       | ❌ 不需要，`new` 对象时自动调用      | ✅ 需要显式调用，例如 `obj.Print()` |
| **调用时机**         | 创建对象时自动运行一次              | 可多次调用                     |
| **是否可以有参数**      | ✅ 可以重载构造函数带参数            | ✅ 方法也可以有参数                |
| **是否可以是 static** | ✅ 可以定义静态构造函数（无参数）        | ✅ 可以是 static，也可以是实例方法     |
| **用途举例**         | 初始化字段、计数、资源连接等           | 执行逻辑运算、打印信息等              |

---

## 十二、一句话理解区别

> ✅ **构造函数是“出生时执行一次”**，
> ✅ **方法是“出生之后随时可以调用”**。

---

## 十三、示例代码对比：

### 构造函数：

```csharp
public class Person
{
    public string Name;

    // 构造函数（和类名相同，无返回类型）
    public Person(string name)
    {
        Name = name;
        Console.WriteLine("构造函数已执行！");
    }
}
```

调用方式：

```csharp
Person p = new Person("Tom");  // 自动调用构造函数
```

---

### 普通方法：

```csharp
public class Person
{
    public void SayHello()
    {
        Console.WriteLine("Hello!");
    }
}
```

调用方式：

```csharp
Person p = new Person(); // 创建对象
p.SayHello();            // 调用方法
```

---

## 十四、构造函数的特殊点：

| 特性                          | 说明 |
| --------------------------- | -- |
| ❌ 没有 return 类型（连 void 都不能写） |    |
| ✅ 名称必须与类名完全一致               |    |
| ✅ 自动调用，不用手动执行               |    |
| ✅ 可以重载（多个构造函数）              |    |
| ✅ 可以定义静态构造函数（只执行一次）         |    |

---

## 十五、方法的通用特性：

| 特性                       | 说明 |
| ------------------------ | -- |
| ✅ 有返回类型，常见如 `void`、`int` |    |
| ✅ 名称自定义                  |    |
| ✅ 调用次数不限                 |    |
| ✅ 可为 `static` 或 实例方法     |    |

---

## 十六、小测试题（可选自测）：

下面的代码中哪个是构造函数？哪个是方法？为什么？

```csharp
public class Car
{
    public Car()
    {
        Console.WriteLine("构造函数");
    }

    public void Drive()
    {
        Console.WriteLine("正在驾驶...");
    }
}
```

✅ 答案：

* `Car()` 是构造函数（名称与类相同，无返回类型）；
* `Drive()` 是普通方法（有返回类型 `void`，可以多次调用）。

---
