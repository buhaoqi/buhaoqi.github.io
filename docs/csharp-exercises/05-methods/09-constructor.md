---
noteId: "1598b3005e0d11f0a1a33da03f8ebbc2"
tags: []

---

好的！下面是关于 **C# 中“构造函数 vs 方法”** 的精选练习题，帮助你理解二者的区别、作用、语法特征以及使用场景。

---

## ✅ 一、选择题 & 判断题（共 5 题）

---

### **1. 单选题：以下哪一个是合法的构造函数声明？**

A. `public void Person() { }`
B. `private int Person() { }`
C. `public Person() { }`
D. `static string Person() { }`

✅ **正确答案**：C
🧠 **解析**：构造函数没有返回类型，名称与类名相同。

---

### **2. 判断题：构造函数可以手动调用。**

✅ 正确 / ❌ 错误？

❌ **错误**
🧠 **解析**：构造函数是自动在 `new` 时调用的，不能像方法那样主动调用。

---

### **3. 单选题：以下哪个是方法的特征？**

A. 没有返回类型
B. 名称必须与类名相同
C. 在对象创建时自动调用
D. 可以手动调用，多次调用

✅ **正确答案**：D
🧠 **解析**：方法必须有返回类型，可以自己命名，手动调用，调用次数不限。

---

### **4. 判断题：构造函数可以带参数，用来初始化对象的字段。**

✅ 正确 / ❌ 错误？

✅ **正确**
🧠 **解析**：构造函数支持重载，也可以带参数，用于初始化对象属性。

---

### **5. 判断题：类中只能有一个方法，但可以有多个构造函数。**

❌ **错误**
🧠 **解析**：方法和构造函数都可以有多个，只要参数不同即可（方法重载 / 构造函数重载）。

---

## ✅ 二、编程题（共 3 题）

---

### **6. 编程题：写一个类 `Student`，包含：**

* 一个无参构造函数：打印“对象已创建”
* 一个普通方法 `PrintName()`，打印学生名字

✅ **示例答案**：

```csharp
public class Student
{
    public string Name;

    public Student()
    {
        Console.WriteLine("对象已创建");
    }

    public void PrintName()
    {
        Console.WriteLine("学生姓名：" + Name);
    }
}
```

---

### **7. 编程题：构造函数赋值**

请创建一个类 `Book`，包含字段 `Title`，并通过构造函数初始化该字段。在主函数中创建两个 `Book` 对象并打印标题。

✅ **示例答案**：

```csharp
public class Book
{
    public string Title;

    public Book(string title)
    {
        Title = title;
    }

    public void ShowTitle()
    {
        Console.WriteLine("书名：" + Title);
    }
}
```

```csharp
Book b1 = new Book("C#入门");
Book b2 = new Book("算法导论");
b1.ShowTitle();
b2.ShowTitle();
```

---

### **8. 编程题：构造函数和方法同时使用**

写一个类 `Calculator`：

* 构造函数：打印 “Calculator 创建成功”
* 方法：`Add(int a, int b)`，返回两个数的和

✅ **示例答案**：

```csharp
public class Calculator
{
    public Calculator()
    {
        Console.WriteLine("Calculator 创建成功");
    }

    public int Add(int a, int b)
    {
        return a + b;
    }
}
```

```csharp
Calculator c = new Calculator();
Console.WriteLine(c.Add(3, 5));  // 输出 8
```

---

## ✅ 三、总结记忆口诀

> 🔹 构造函数自动跑，初始化用得好；
> 🔹 方法功能灵活写，返回结果手动调；
> 🔹 名称不同用法变，记住规则不会乱！

---

如果你需要这些题目和答案整理成 PDF/表格/Word 学习资料，或希望继续出难度更高的练习题（比如构造函数重载、静态构造函数等），欢迎告诉我！我可以为你量身打造 🧠📘

太好了！这里为你整理出一份完整的学习资料包，标题为：

---

# 📘 C# 构造函数 vs 方法：对比 + 练习题 + 答案详解（可打印版）

---

## ✅ 第一部分：对比总结表

| 比较点                | 构造函数（Constructor）    | 普通方法（Method）               |
| ------------------ | -------------------- | -------------------------- |
| **作用**             | 创建对象时自动执行，用于初始化对象    | 对象创建后由程序调用，执行逻辑功能          |
| **名称**             | 必须与类名相同              | 任意合法名称                     |
| **返回类型**           | ❌ 没有返回类型（不能写 `void`） | ✅ 必须声明返回类型（如 `void`、`int`） |
| **调用方式**           | `new 类名()` 时自动调用     | 通过对象或类名手动调用                |
| **是否可以有参数**        | ✅ 可以重载，支持带参数         | ✅ 同样支持参数和重载                |
| **调用次数**           | 只能在创建对象时调用一次         | 可以手动多次调用                   |
| **是否可以为 `static`** | ✅ 可以声明静态构造函数（无参数）    | ✅ 方法可以是实例方法或静态方法           |
| **典型用途**           | 初始化成员变量、资源连接、注册逻辑等   | 实现功能，如加法、打印、查询等            |

---

## ✅ 第二部分：选择与判断题（含答案）

### 1. 哪个是合法的构造函数？

**C. `public Person() { }`**

### 2. 构造函数可以手动调用吗？

\*\*❌ 错误。\*\*只能在 `new` 时自动调用。

### 3. 以下哪个是方法的特征？

**D. 可以手动调用，多次调用**

### 4. 构造函数是否可以带参数？

**✅ 正确。**

### 5. 类中只能有一个方法，但可以有多个构造函数？

\*\*❌ 错误。\*\*方法和构造函数都支持重载。

---

## ✅ 第三部分：编程题（含答案）

### 6. 类 `Student` 包含无参构造函数和方法

```csharp
public class Student
{
    public string Name;

    public Student()
    {
        Console.WriteLine("对象已创建");
    }

    public void PrintName()
    {
        Console.WriteLine("学生姓名：" + Name);
    }
}
```

---

### 7. 类 `Book` 使用构造函数初始化书名

```csharp
public class Book
{
    public string Title;

    public Book(string title)
    {
        Title = title;
    }

    public void ShowTitle()
    {
        Console.WriteLine("书名：" + Title);
    }
}
```

```csharp
Book b1 = new Book("C# 入门");
Book b2 = new Book("算法导论");
b1.ShowTitle();  // 输出：书名：C# 入门
b2.ShowTitle();  // 输出：书名：算法导论
```

---

### 8. 构造函数 + 方法实例：类 `Calculator`

```csharp
public class Calculator
{
    public Calculator()
    {
        Console.WriteLine("Calculator 创建成功");
    }

    public int Add(int a, int b)
    {
        return a + b;
    }
}
```

```csharp
Calculator c = new Calculator(); // 输出：Calculator 创建成功
Console.WriteLine(c.Add(3, 5));  // 输出：8
```

---

## ✅ 第四部分：口诀记忆卡

> 🧠 **口诀：构造 vs 方法**
> 🔹 构造自动跑，方法你来调；
> 🔹 名字不能乱，构造跟类跑；
> 🔹 初始化专用构造，逻辑处理靠方法！

---

## ✅ 获取 Word 或 PDF 版本？

我可以将上面的内容导出成：

* 📄 Word 文档（.docx）
* 📄 PDF 文档（.pdf）
* 📋 PNG 图片格式的“口诀卡”或“对比表”

请告诉我你需要哪种格式（或几种），我立刻为你准备好！你也可以说“全部都要”。✅

好的！下面是我为你精心整理的 **10 道 C# 构造函数专项练习题**（含基础题 + 提升题），覆盖构造函数的定义、重载、访问修饰符、静态构造函数等重要知识点，非常适合你练习巩固。

---

## ✅ 一、基础理解题（前 5 题）

---

### **1. 单选题**

以下哪个是合法的构造函数？

A. `public void Car() { }`
B. `public Car() { }`
C. `private int Car() { return 1; }`
D. `public static void Car() { }`

✅ 正确答案：B

---

### **2. 判断题**

构造函数必须有返回类型，例如 `void`。
✅ 正确 / ❌ 错误？

✅ 答案：❌ 错误
🧠 解析：构造函数**不能**写任何返回类型，包括 `void`。

---

### **3. 单选题**

哪个构造函数会被系统自动调用？

A. 静态构造函数
B. 私有构造函数
C. 无参构造函数
D. 所有构造函数都必须手动调用

✅ 正确答案：C
🧠 注：静态构造函数会在首次使用类型前自动调用，但不能手动调用。

---

### **4. 判断题**

如果你在类中定义了一个有参构造函数，系统还会自动添加一个无参构造函数。
✅ 正确 / ❌ 错误？

✅ 答案：❌ 错误
🧠 解析：**一旦定义了任何构造函数，默认的无参构造函数将不再自动添加。**

---

### **5. 填空题**

构造函数的名称必须与 \_\_\_\_\_\_ 完全相同，并且没有 \_\_\_\_\_\_ 类型。

✅ 答案：类名，返回

---

## ✅ 二、进阶编程题（后 5 题）

---

### **6. 编程题：基础构造函数**

创建一个类 `Student`，包含字段 `Name`。在构造函数中将 Name 初始化为 "未命名"，并在主程序中创建对象并输出。

---

### **7. 编程题：有参构造函数**

创建类 `Book`，定义字段 `Title` 和 `Price`，使用有参构造函数传入初始值，并在主函数中创建对象输出信息。

---

### **8. 编程题：构造函数重载**

创建一个类 `Rectangle`，添加两个构造函数：

* 无参构造函数，将长宽设为 1；
* 有参构造函数，设置具体长宽。

添加方法 `Area()` 返回面积，并进行测试。

---

### **9. 编程题：静态构造函数**

创建类 `Config`，添加静态字段 `AppName`，使用静态构造函数初始化为 `"MyApp"`，再打印该值。

---

### **10. 编程题：构造函数计数器**

创建类 `Counter`，添加静态字段 `Count`，每创建一个对象就自动加 1，并显示当前总数。

---

## ✅ 附加建议：

是否需要我为以上练习题提供「标准答案」和「解析」？
也可以把这份题目打包为：

* 📄 Word 文档
* 📘 PDF 学习资料
* 📋 答题卡 + 答案解析表

只要告诉我“需要答案”或“打包成文档”，我立刻为你生成 ✅



好的！下面是我为你准备的 ✅ **10 道构造函数练习题的标准答案 + 详细解析**。练习难度从基础到进阶，配套注解帮你彻底掌握构造函数的各类用法。

---

## ✅ 一、基础理解题（1–5）

---

### **1. 单选题：哪个是合法的构造函数？**

```csharp
A. public void Car() { }
B. public Car() { }
C. private int Car() { return 1; }
D. public static void Car() { }
```

✅ **正确答案：B**

🧠 **解析**：构造函数没有返回类型，名称必须和类名一致。`B` 是合法构造函数。A/C/D 都不符合构造函数的格式要求。

---

### **2. 判断题：构造函数必须有返回类型，例如 void。**

❌ **错误**

🧠 **解析**：构造函数**不能**写返回类型（包括 `void`）。写了返回类型就成了方法，不是构造函数。

---

### **3. 单选题：哪个构造函数会被系统自动调用？**

```csharp
A. 静态构造函数
B. 私有构造函数
C. 无参构造函数
D. 所有构造函数都必须手动调用
```

✅ **正确答案：C**

🧠 **解析**：当用 `new 类名()` 创建对象时，无参构造函数会被自动调用（如果存在）。静态构造函数仅在第一次使用类时触发一次，不能直接调用。

---

### **4. 判断题：如果你定义了有参构造函数，系统还会自动添加无参构造函数。**

❌ **错误**

🧠 **解析**：**只要你手动定义了任何构造函数（无论是否有参），默认无参构造函数就不会自动生成**，你必须显式写出它。

---

### **5. 填空题**

> 构造函数的名称必须与 \_\_\_\_\_\_ 完全相同，并且没有 \_\_\_\_\_\_ 类型。

✅ **答案**：

> 类名，返回

---

## ✅ 二、进阶编程题（6–10）

---

### **6. 创建类 `Student`，构造函数初始化 Name = "未命名"**

```csharp
public class Student
{
    public string Name;

    public Student()
    {
        Name = "未命名";
    }
}

// 使用：
Student s = new Student();
Console.WriteLine(s.Name);  // 输出：未命名
```

---

### **7. 类 `Book` 使用有参构造函数初始化 Title 和 Price**

```csharp
public class Book
{
    public string Title;
    public double Price;

    public Book(string title, double price)
    {
        Title = title;
        Price = price;
    }

    public void Show()
    {
        Console.WriteLine($"书名：{Title}，价格：{Price} 元");
    }
}

// 使用：
Book b = new Book("C#入门", 39.9);
b.Show();  // 输出：书名：C#入门，价格：39.9 元
```

---

### **8. `Rectangle` 类的构造函数重载 + 面积方法**

```csharp
public class Rectangle
{
    public int Width;
    public int Height;

    public Rectangle()
    {
        Width = 1;
        Height = 1;
    }

    public Rectangle(int width, int height)
    {
        Width = width;
        Height = height;
    }

    public int Area()
    {
        return Width * Height;
    }
}

// 使用：
Rectangle r1 = new Rectangle();
Rectangle r2 = new Rectangle(4, 5);
Console.WriteLine(r1.Area());  // 输出：1
Console.WriteLine(r2.Area());  // 输出：20
```

---

### **9. 静态构造函数初始化静态字段**

```csharp
public class Config
{
    public static string AppName;

    static Config()  // 静态构造函数
    {
        AppName = "MyApp";
        Console.WriteLine("静态构造函数已执行");
    }
}

// 使用：
Console.WriteLine(Config.AppName);  // 会先触发静态构造函数
```

🧠 **说明**：静态构造函数只能写一个，没有参数，不能手动调用，只会运行一次。

---

### **10. 构造函数实现对象计数器**

```csharp
public class Counter
{
    public static int Count = 0;

    public Counter()
    {
        Count++;
        Console.WriteLine($"当前对象总数：{Count}");
    }
}

// 使用：
Counter c1 = new Counter();  // 当前对象总数：1
Counter c2 = new Counter();  // 当前对象总数：2
```

---

## ✅ 三、复习巩固口诀

> 🔹 构造无返回，名随类名跑；
> 🔹 new 的时候触发它，初始化最可靠；
> 🔹 可以重载带参数，也能静态跑一次！

---

如果你还需要我将这些题和答案打包成：

* Word 文档（可打印版）
* PDF 电子版
* 小测卡片或复习海报

请告诉我你要哪种格式，我马上生成给你 ✅


好的！以下是前面 5 道 C# 类结构相关编程题的 ✅**标准答案 + 注释解析**，重点突出字段、构造函数、方法、`new` 的理解。

---

## ✅ 题目 1：Dog 类 – 字段 + 构造函数 + 方法

```csharp
public class Dog
{
    // 字段
    public string name;
    public int age;

    // 构造函数：接收两个参数，初始化字段
    public Dog(string n, int a)
    {
        name = n;
        age = a;
    }

    // 方法：打印信息
    public void Bark()
    {
        Console.WriteLine($"汪汪！我叫 {name}，今年 {age} 岁。");
    }
}

// 测试：
Dog d = new Dog("小黑", 3);
d.Bark(); // 输出：汪汪！我叫 小黑，今年 3 岁。
```

---

## ✅ 题目 2：Circle 类 – 构造函数重载 + 面积方法

```csharp
using System;

public class Circle
{
    public double radius;

    // 无参构造函数：默认半径为 1
    public Circle()
    {
        radius = 1.0;
    }

    // 有参构造函数：使用用户传入的半径
    public Circle(double r)
    {
        radius = r;
    }

    // 方法：计算圆面积
    public double GetArea()
    {
        return Math.PI * radius * radius;
    }
}

// 测试：
Circle c1 = new Circle();        // 默认半径
Circle c2 = new Circle(2.5);     // 传入半径

Console.WriteLine(c1.GetArea()); // 输出：3.1415926...
Console.WriteLine(c2.GetArea()); // 输出：19.6349540...
```

---

## ✅ 题目 3：Counter 类 – 静态字段计数器

```csharp
public class Counter
{
    // 静态字段：类级别共享，统计创建次数
    public static int TotalCount = 0;

    // 构造函数：每次创建对象时 +1
    public Counter()
    {
        TotalCount++;
        Console.WriteLine($"已创建对象总数：{TotalCount}");
    }
}

// 测试：
Counter c1 = new Counter();  // 输出：已创建对象总数：1
Counter c2 = new Counter();  // 输出：已创建对象总数：2
Counter c3 = new Counter();  // 输出：已创建对象总数：3
```

🧠 **知识点：**

* `static` 字段属于类，不属于对象；
* 多个实例共享这一个字段。

---

## ✅ 题目 4：Student 类 – 构造函数 + 多个方法

```csharp
public class Student
{
    public string name;
    public int mathScore;
    public int englishScore;

    // 构造函数：初始化所有字段
    public Student(string n, int math, int english)
    {
        name = n;
        mathScore = math;
        englishScore = english;
    }

    // 方法1：计算平均分
    public double GetAverage()
    {
        return (mathScore + englishScore) / 2.0;
    }

    // 方法2：打印信息
    public void PrintInfo()
    {
        Console.WriteLine($"学生：{name}，平均分：{GetAverage()}");
    }
}

// 测试：
Student s = new Student("小明", 85, 90);
s.PrintInfo();  // 输出：学生：小明，平均分：87.5
```

---

## ✅ 题目 5：Book 类 – 构造函数 + 对象数组

```csharp
public class Book
{
    public string title;
    public double price;

    // 构造函数
    public Book(string t, double p)
    {
        title = t;
        price = p;
    }

    // 显示书籍信息
    public void ShowInfo()
    {
        Console.WriteLine($"《{title}》价格：{price}元");
    }
}

// 测试：
Book[] books = new Book[3];
books[0] = new Book("C#入门", 39.9);
books[1] = new Book("数据结构", 45.5);
books[2] = new Book("操作系统", 59.0);

// 循环输出
foreach (Book b in books)
{
    b.ShowInfo();
}
```

🧠 **重点理解：**

* 数组元素是对象；
* 每个对象由构造函数创建；
* 方法操作字段输出内容。

---

## ✅ 总结知识点覆盖

| 知识点         | 已覆盖在哪题        |
| ----------- | ------------- |
| 字段          | 所有题目          |
| 构造函数（无参、有参） | 题目 1, 2, 4, 5 |
| 构造函数重载      | 题目 2|
| 静态字段 + 统计计数 | 题目 3 |
| 对象数组 + 构造函数 | 题目 5          |
| 方法操作字段      | 题目 1, 4, 5    |

---

如果你希望我把这份答案整理为：

* 📄 Word 文档（可打印）；
* 📘 PDF 学习手册；
* 📋 小测题卡 + 填空练习；

请告诉我想要哪种格式，我可以马上为你导出 ✅
