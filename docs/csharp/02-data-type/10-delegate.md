---
noteId: "12ebd5e05ee611f0a138bb2f2278db69"
tags: []

---

当然！下面为你详细讲解 C# 中的 **委托（Delegate）数据类型**，包含定义、用途、语法、常见使用场景及示例，帮助你深入理解。

---

# 一、什么是委托（Delegate）？

委托是 C# 中的一种 **类型安全的函数指针**，它允许将方法作为参数传递，或者将方法赋值给变量，以实现方法的动态调用和回调。

简而言之：

> **委托就是一个变量，这个变量可以指向一个或多个符合特定签名的方法。**

---

# 二、委托的作用

* **封装方法**：把方法封装成对象，方便传递和调用。
* **回调机制**：允许调用方将方法传递给被调用方，常用于事件处理和异步编程。
* **实现事件机制**：委托是 C# 事件的基础。
* **解耦合**：调用者不需要知道具体调用哪个方法，只要符合签名即可。

---

# 三、委托的定义语法

```csharp
[访问修饰符] delegate 返回类型 委托名称(参数列表);
```

例如：

```csharp
public delegate int MathOperation(int a, int b);
```

这定义了一个名为 `MathOperation` 的委托，代表任何接收两个 `int` 参数并返回 `int` 的方法。

---

# 四、委托的使用流程

1. **定义委托类型**（指定方法签名）。
2. **声明委托实例**，并绑定符合签名的方法。
3. **通过委托实例调用方法**。

---

# 五、示例：定义和使用委托

```csharp
// 定义委托类型
public delegate void PrintDelegate(string message);

class Program
{
    static void PrintToConsole(string msg)
    {
        Console.WriteLine(msg);
    }

    static void Main()
    {
        // 创建委托实例，绑定方法
        PrintDelegate printer = new PrintDelegate(PrintToConsole);

        // 调用委托，相当于调用方法
        printer("Hello, Delegate!");
    }
}
```

---

# 六、多播委托（Multicast Delegate）

委托可以绑定多个方法，调用时依次执行，使用 `+` 或 `+=` 添加方法：

```csharp
public delegate void Notify(string msg);

class Program
{
    static void Method1(string msg) => Console.WriteLine("Method1: " + msg);
    static void Method2(string msg) => Console.WriteLine("Method2: " + msg);

    static void Main()
    {
        Notify notify = Method1;
        notify += Method2;

        notify("Hello!");  // 依次调用 Method1 和 Method2
    }
}
```

---

# 七、委托和匿名方法 / Lambda 表达式

委托实例可以直接使用匿名方法或 Lambda 表达式赋值，简化代码：

```csharp
MathOperation add = (x, y) => x + y;
int result = add(3, 5);  // 8
```

---

# 八、系统预定义委托

.NET 提供了几个常用的泛型委托：

* `Func<T1, T2, ..., TResult>`：带参数，返回 TResult
* `Action<T1, T2, ...>`：带参数，无返回值
* `Predicate<T>`：带一个参数，返回 bool

示例：

```csharp
Func<int, int, int> multiply = (x, y) => x * y;
Console.WriteLine(multiply(4, 5));  // 20

Action<string> printer = msg => Console.WriteLine(msg);
printer("Hello Action");
```

---

# 九、总结

| 特点          | 说明             |
| ----------- | -------------- |
| 类型安全        | 委托绑定的方法必须匹配其签名 |
| 支持多播        | 一个委托实例可以调用多个方法 |
| 支持异步调用      | 委托可异步调用方法      |
| 用于事件机制      | 事件底层本质就是委托     |
| 支持匿名与Lambda | 简化委托的创建和使用     |

---

如果你需要，我可以帮你：

* 出几道关于委托的练习题和答案
* 详细讲解事件与委托的关系
* 演示多播委托和委托链的示例代码

需要哪种？


好的！以下是为你精心设计的 **10 道 C# 委托（delegate）相关的编程练习题**，涵盖委托的基础定义、使用、匿名方法、多播委托、Lambda 表达式、预定义委托（`Func`、`Action`）等知识点。每题都配有标准答案和简要注释，适合初学者逐步深入学习。

---

当然可以！以下是 **C# 委托练习题 - 空白题版**，共 10 题，涵盖委托的定义、调用、匿名方法、Lambda、多播、预定义委托等基础核心内容，适合打印练习或自测前练习。

---

# ✅ C# 委托练习题（空白题版）

📘 难度等级：基础 \~ 中级 ｜建议每题 3\~5 分钟

---

### 🧩 题目 1：定义一个委托并绑定加法方法

定义一个委托 `Operation`，它接收两个整数参数，返回一个整数结果。创建一个 `Add(int x, int y)` 方法并将其绑定到委托，然后调用委托并输出结果。

✍️ 补全代码：

```csharp
// 1. 定义委托 Operation


// 2. 定义 Add 方法


// 3. 在 Main 中绑定并调用


```

---

### 🧩 题目 2：使用 Lambda 表达式进行乘法运算

使用 `Func<int, int, int>` 类型的委托，通过 Lambda 表达式实现两个整数相乘。

✍️ 补全代码：

```csharp
// 使用 lambda 表达式创建委托变量 multiply

// 调用 multiply 并输出结果
```

---

### 🧩 题目 3：使用 `Action<string>` 输出信息

定义一个 `Action<string>` 类型的委托，使用它打印一段你喜欢的话。

✍️ 补全代码：

```csharp
// 创建 Action<string> 类型的委托 printer

// 调用 printer 打印字符串
```

---

### 🧩 题目 4：多播委托调用两个方法

定义一个 `Notify` 类型的委托，分别绑定 `SayHello()` 和 `SayBye()` 方法，让两个方法依次执行。

✍️ 补全代码：

```csharp
// 定义委托 Notify


// 定义两个方法 SayHello 和 SayBye


// 在 Main 中绑定并执行委托
```

---

### 🧩 题目 5：创建匿名方法打印内容

使用匿名方法（`delegate` 语法）打印 `"Anonymous Call"`。

✍️ 补全代码：

```csharp
// 使用 delegate 创建匿名方法并赋值给 Action 类型的变量


// 调用匿名方法
```

---

### 🧩 题目 6：判断是否为偶数（Predicate）

使用 `Predicate<int>` 创建一个委托，判断一个整数是否为偶数，并在 Main 中测试两个数字。

✍️ 补全代码：

```csharp
// 使用 Predicate 创建 isEven 委托变量

// 判断两个数字：6 和 7 是否为偶数
```

---

### 🧩 题目 7：将方法作为参数传递（委托回调）

定义一个 `ApplyOperation(int a, int b, Operation op)` 方法，将加法方法作为参数传入，完成操作。

✍️ 补全代码：

```csharp
// 定义 Operation 委托


// 定义 Add 方法


// 定义 ApplyOperation 方法，接收委托作为参数


// 在 Main 中传递 Add 方法并输出结果
```

---

### 🧩 题目 8：委托签名匹配判断（选择题）

**选择题：**
`delegate void Logger(string msg)` —— 哪些方法可以绑定到此委托上？（可多选）

A. `void Print(string msg)`
B. `string Log(string msg)`
C. `void Display()`
D. `void Print(string msg, int level)`

✅ 你的选择是：`______`

---

### 🧩 题目 9：委托链依次输出 A、B、C

创建一个 `Action` 委托变量，将其依次绑定输出 "A"、"B"、"C" 的三个方法。

✍️ 补全代码：

```csharp
// 定义三个方法 A、B、C


// 创建委托并绑定方法


// 调用委托
```

---

### 🧩 题目 10：使用委托过滤数组中的偶数

定义一个 `Predicate<int>`，使用 `Array.FindAll` 过滤出数组中的所有偶数。

✍️ 补全代码：

```csharp
int[] nums = { 1, 2, 3, 4, 5, 6 };

// 使用 Predicate 定义 isEven 委托


// 使用 Array.FindAll 过滤并输出
```

---

## ✅ 自测建议

| 分数段    | 评价      | 建议              |
| ------ | ------- | --------------- |
| 90–100 | 🌟 精通级别 | 可尝试事件（event）    |
| 70–89  | ✅ 合格    | 多练回调和 Lambda 使用 |
| 50–69  | 🔁 加强   | 建议再复习定义与签名      |
| < 50   | 📘 初学者  | 先做前 5 题打基础      |

---

如果你需要我为你导出：

* 📄 **Word / PDF 自测版**（含空白处与答题卡）
* 🧪 **委托 + 事件混合自测题**
* 💡 图解委托和事件的内部工作原理

请告诉我，我可立即为你生成 ✅


## ✅ C# 委托练习题（共10题）+ 答案与解析

---

### ✅ 1. 定义一个返回两个整数之和的委托，并使用它

**题目：**
定义一个委托 `Operation`，表示接收两个 `int` 参数，返回一个 `int`。绑定一个加法方法并调用。

**答案：**

```csharp
public delegate int Operation(int a, int b);

class Program
{
    static int Add(int x, int y) => x + y;

    static void Main()
    {
        Operation op = Add;
        Console.WriteLine(op(3, 4));  // 输出：7
    }
}
```

---

### ✅ 2. 使用 Lambda 表达式简化委托

**题目：**
使用 Lambda 表达式创建一个 `Func<int, int, int>` 委托，计算两个数的乘积。

**答案：**

```csharp
class Program
{
    static void Main()
    {
        Func<int, int, int> multiply = (x, y) => x * y;
        Console.WriteLine(multiply(5, 6));  // 输出：30
    }
}
```

---

### ✅ 3. 使用 `Action<string>` 输出一条信息

**题目：**
使用 `Action<string>` 定义一个委托，并用它输出 "Hello Delegate!"。

**答案：**

```csharp
class Program
{
    static void Main()
    {
        Action<string> print = msg => Console.WriteLine(msg);
        print("Hello Delegate!");  // 输出：Hello Delegate!
    }
}
```

---

### ✅ 4. 定义一个多播委托绑定两个方法

**题目：**
定义一个委托 `Notify`，绑定两个方法 `SayHello()` 和 `SayBye()`，依次输出问候和告别。

**答案：**

```csharp
public delegate void Notify();

class Program
{
    static void SayHello() => Console.WriteLine("Hello!");
    static void SayBye() => Console.WriteLine("Goodbye!");

    static void Main()
    {
        Notify notify = SayHello;
        notify += SayBye;

        notify();  // 输出：Hello! 然后 Goodbye!
    }
}
```

---

### ✅ 5. 创建一个匿名方法打印一串字符

**题目：**
使用 `delegate` 匿名方法语法创建一个委托，打印一段字符串。

**答案：**

```csharp
class Program
{
    static void Main()
    {
        Action print = delegate {
            Console.WriteLine("Anonymous Method");
        };
        print();
    }
}
```

---

### ✅ 6. 使用 `Predicate<int>` 判断一个数是否是偶数

**题目：**
创建一个 `Predicate<int>` 委托来判断一个整数是否为偶数。

**答案：**

```csharp
class Program
{
    static void Main()
    {
        Predicate<int> isEven = num => num % 2 == 0;
        Console.WriteLine(isEven(6));  // 输出：True
        Console.WriteLine(isEven(7));  // 输出：False
    }
}
```

---

### ✅ 7. 编写一个方法 `ApplyOperation(int a, int b, Operation op)` 使用委托传入操作方法

**题目：**
使用委托将方法作为参数传入另一个方法。

**答案：**

```csharp
public delegate int Operation(int a, int b);

class Program
{
    static int Add(int x, int y) => x + y;

    static int ApplyOperation(int a, int b, Operation op)
    {
        return op(a, b);
    }

    static void Main()
    {
        Console.WriteLine(ApplyOperation(3, 4, Add));  // 输出：7
    }
}
```

---

### ✅ 8. 委托变量可以指向哪些方法？

**题目（选择题）：**
一个 `delegate void Logger(string msg)` 委托变量可以指向哪些方法？

A. `void Print(string msg)`
B. `string Log(string msg)`
C. `void Display()`
D. `void Print(string msg, int level)`

**答案：**
✅ A
🧠 **解析：** 必须方法签名完全匹配：返回 `void`，参数是 `string`，选项 A 符合。

---

### ✅ 9. 委托链：绑定三个方法，分别输出 A、B、C

**题目：**
创建一个 `Action` 委托变量，依次绑定三个方法：输出 "A", "B", "C"。

**答案：**

```csharp
class Program
{
    static void A() => Console.WriteLine("A");
    static void B() => Console.WriteLine("B");
    static void C() => Console.WriteLine("C");

    static void Main()
    {
        Action action = A;
        action += B;
        action += C;

        action();  // 输出 A B C
    }
}
```

---

### ✅ 10. 使用委托过滤数组中的偶数（结合 `Predicate` 和 `Array.FindAll`）

**题目：**
定义一个 `Predicate<int>` 过滤数组中所有偶数并输出。

**答案：**

```csharp
class Program
{
    static void Main()
    {
        int[] nums = { 1, 2, 3, 4, 5, 6 };
        Predicate<int> isEven = n => n % 2 == 0;

        int[] evens = Array.FindAll(nums, isEven);

        foreach (int i in evens)
            Console.Write(i + " ");  // 输出：2 4 6
    }
}
```

---

## ✅ 总结：覆盖的委托知识点

| 题号 | 知识点              |
| -- | ---------------- |
| 1  | 委托定义与使用          |
| 2  | Lambda 表达式与 Func |
| 3  | Action 委托        |
| 4  | 多播委托             |
| 5  | 匿名方法             |
| 6  | Predicate 委托     |
| 7  | 委托作为参数（回调）       |
| 8  | 委托签名匹配           |
| 9  | 委托链执行顺序          |
| 10 | 委托结合数组过滤应用       |

---

## ✅ 后续推荐

我可以继续为你：

* ✍️ 出一份「空白题版」用于自测练习
* 📄 打包 PDF/Word 格式，方便打印学习
* 📘 出 10 道委托 + 事件的整合练习题
* 📊 用图解方式展示委托如何调用方法链

需要哪一项？或者继续学习「事件（event）与委托的关系」？📘
