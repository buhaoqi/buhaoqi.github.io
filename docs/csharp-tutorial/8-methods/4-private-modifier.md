---
noteId: "382e1ec05eba11f0a138bb2f2278db69"
tags: []

---

当然可以！下面是对 C# 中 `private` 关键字的**详细讲解**，帮助你理解它的作用、使用场景以及与其他访问修饰符的区别。

---

# ✅ 一、`private` 是什么？

在 C# 中，`private` 是一种**访问修饰符**（Access Modifier），用于限制**类、字段、属性、方法等成员的可见性**。

```csharp
private 数据类型 成员名;
```

---

## ✅ 二、private 的含义

> 使用 `private` 修饰的成员**只能在它所在的类或结构体内部被访问**，外部无法访问。

---

## ✅ 三、应用场景与示例

### 📌 示例 1：私有字段（最常见）

```csharp
public class Person
{
    private string name; // 外部无法访问

    public void SetName(string n)
    {
        name = n;
    }

    public string GetName()
    {
        return name;
    }
}
```

```csharp
Person p = new Person();
// p.name = "Tom"; ❌ 错误，私有成员不能被直接访问
p.SetName("Tom");  // ✅ 正确，通过公共方法间接设置
```

### 📌 示例 2：私有方法

```csharp
public class Tool
{
    private void HiddenFunction()
    {
        Console.WriteLine("这是私有方法");
    }

    public void CallIt()
    {
        HiddenFunction();  // ✅ 类内部可以调用
    }
}
```

外部不能调用 `HiddenFunction()`，但类内部可以。

---

## ✅ 四、private 可用于哪些地方？

| 成员类型              | 是否可用 `private` |
| ----------------- | -------------- |
| 字段（field）         | ✅              |
| 方法（method）        | ✅              |
| 属性（property）      | ✅              |
| 构造函数（constructor） | ✅              |
| 类（class）          | ❌（**除嵌套类外**）   |
| 嵌套类（类中类）          | ✅              |

---

### 📌 示例 3：私有构造函数（常用于单例模式）

```csharp
public class Singleton
{
    private static Singleton instance;

    private Singleton() { }  // 外部无法 new

    public static Singleton GetInstance()
    {
        if (instance == null)
            instance = new Singleton();
        return instance;
    }
}
```

🧠 外部无法创建 `new Singleton()`，只能通过 `GetInstance()` 获取唯一实例。

---

### 📌 示例 4：私有嵌套类

```csharp
public class Outer
{
    private class Inner
    {
        public void Hello() => Console.WriteLine("Hi from Inner!");
    }

    public void CallInner()
    {
        Inner i = new Inner();
        i.Hello();
    }
}
```

🔒 外部无法访问 `Inner` 类，它是外部类 `Outer` 的私有部分。

---

## ✅ 五、private 和其他修饰符对比

| 修饰符                  | 同类中访问 | 同程序集 | 继承类     | 外部类访问   |
| -------------------- | ----- | ---- | ------- | ------- |
| `private`            | ✅     | ❌    | ❌       | ❌       |
| `public`             | ✅     | ✅    | ✅       | ✅       |
| `protected`          | ✅     | ❌    | ✅       | ❌       |
| `internal`           | ✅     | ✅    | ✅\*     | ❌（跨程序集） |
| `protected internal` | ✅     | ✅    | ✅       | ❌       |
| `private protected`  | ✅     | ❌    | ✅（同程序集） | ❌       |

---

## ✅ 六、使用 `private` 的目的与好处

| 好处         | 说明                  |
| ---------- | ------------------- |
| **封装性**    | 隐藏内部细节，对外只暴露接口方法。   |
| **安全性**    | 防止误操作，保护对象状态不被非法访问。 |
| **代码维护性强** | 控制访问范围，便于调试与重构。     |

---

## ✅ 七、口诀记忆：

> **私有 private 藏得深，类外不能瞎摸人；**
> **内部处理细节活，外部用我我说行。**

---

## ✅ 总结示意图：

```csharp
public class Sample
{
    private int count;       // 外部访问 ❌
    public void Add()        // 外部访问 ✅
    {
        count++;
    }
}
```

---

## ✅ 想继续学什么？

我可以为你继续提供：

* 10 道 `private` vs `public` 的判断练习题；
* `封装` 专题教学（类 + 属性 + 访问控制）；
* 可打印表格总结 `private/protected/public`；
* 封装练习项目题目 + 答案。

是否需要继续？📘✅

太好了！以下是为你准备的 **10 道关于 `private` 与 `public` 的基础判断题**，帮助你准确理解它们在类中的作用和区别。每题都附带 ✅ 标准答案和简要解析。

---

## ✅ C# `private` vs `public` 判断练习题（含答案）

---

### **1. 类中声明为 `private` 的字段只能在类内部访问。**

✅ **正确**

**解析**：`private` 表示只能在当前类内部访问，外部包括子类都不能访问。

---

### **2. 一个类中的 `private` 字段可以被该类的公共方法访问。**

✅ **正确**

**解析**：类的公共方法仍属于类的内部，可以访问其私有字段。

---

### **3. 声明为 `public` 的方法可以访问另一个类中的 `private` 字段。**

❌ **错误**

**解析**：无论是谁访问，只要是跨类访问私有成员，都不被允许。

---

### **4. 类的构造函数如果是 `private`，则外部不能使用 `new` 来创建实例。**

✅ **正确**

**解析**：`private` 构造函数常用于单例模式或禁止外部实例化。

---

### **5. `private` 字段在继承类中可以直接访问。**

❌ **错误**

**解析**：子类不能访问父类的 `private` 成员，但可以访问 `protected` 成员。

---

### **6. `public` 字段在任何类中都可以直接访问。**

✅ **正确**

**解析**：`public` 是完全公开的访问修饰符，任何类都可以访问。

---

### **7. C# 中类本身（非嵌套类）可以被声明为 `private`。**

❌ **错误**

**解析**：顶级类（非嵌套）只能是 `public` 或 `internal`，不能是 `private`。

---

### **8. 私有方法可以由该类中的其他方法调用。**

✅ **正确**

**解析**：只要在同一个类中，方法之间可以互相调用，无论是 `private` 还是 `public`。

---

### **9. 如果字段是 `public`，则可以被任何对象直接访问和修改。**

✅ **正确**

**解析**：这是 `public` 字段的典型特性，因此实际开发中建议使用属性代替直接暴露字段。

---

### **10. 只有使用 `private` 修饰字段，才能在构造函数中使用它。**

❌ **错误**

**解析**：构造函数属于类内部，可以使用类中任何访问级别的成员（`public`、`private`、`protected` 等）。

---

## ✅ 分数自测（共10题，每题10分）

| 分数范围    | 评价                                    |
| ------- | ------------------------------------- |
| 90\~100 | 👍 很好，对访问修饰符理解清晰！                     |
| 70\~80  | 👌 基本掌握，建议多做代码练习                      |
| 50\~60  | 🔁 建议配合示例代码反复理解                       |
| 0\~40   | 📘 推荐重新学习 `private` 和 `public` 的定义和例子 |

---

如你需要，我可以为这组题：

* 生成 Word/PDF 格式；
* 添加配套代码示例；
* 加练项目题或进阶版本（加入 `protected`, `internal` 比较）；

是否继续？📘✅


非常棒的选择！下面是为你精心设计的 **10 道 C# `private` vs `public` 基础编程练习题**，从不同角度帮助你巩固两者的区别与用法。每道题都附有**题目说明 + 答案（含简要注释）**，适合初学者逐步掌握。

---

## ✅ 1. 定义一个类 `Person`，包含私有字段 `name`，提供公共方法 `SetName` 和 `PrintName` 来设置和显示名字。

```csharp
public class Person
{
    private string name;

    public void SetName(string n)
    {
        name = n;
    }

    public void PrintName()
    {
        Console.WriteLine($"名字是：{name}");
    }
}
```

---

## ✅ 2. 定义一个类 `Student`，包含一个 `public` 字段 `score`，直接在外部类中修改并输出该字段。

```csharp
public class Student
{
    public int score;
}

// 测试代码：
Student s = new Student();
s.score = 90;
Console.WriteLine(s.score);  // 输出：90
```

---

## ✅ 3. 定义一个类 `Car`，包含私有字段 `brand`，使用属性 `Brand` 实现对该字段的读写。

```csharp
public class Car
{
    private string brand;

    public string Brand
    {
        get { return brand; }
        set { brand = value; }
    }
}
```

---

## ✅ 4. 创建一个 `Counter` 类，包含一个 `private` 字段 `count`，并提供公共方法 `Increment()` 和 `GetCount()`。

```csharp
public class Counter
{
    private int count = 0;

    public void Increment()
    {
        count++;
    }

    public int GetCount()
    {
        return count;
    }
}
```

---

## ✅ 5. 创建一个 `BankAccount` 类，包含 `private` 字段 `balance`，通过 `Deposit()` 方法增加余额，`ShowBalance()` 显示余额。

```csharp
public class BankAccount
{
    private double balance;

    public void Deposit(double amount)
    {
        if (amount > 0)
            balance += amount;
    }

    public void ShowBalance()
    {
        Console.WriteLine($"当前余额：{balance} 元");
    }
}
```

---

## ✅ 6. 定义一个类 `Box`，其中 `length` 字段为 `private`，尝试在类外直接访问该字段并观察编译错误。

```csharp
public class Box
{
    private int length = 10;
}

// 类外：
Box b = new Box();
// Console.WriteLine(b.length); // ❌ 错误：无法访问私有字段
```

---

## ✅ 7. 定义一个类 `User`，构造函数 `private`，无法直接用 `new` 实例化，只能通过静态方法 `CreateUser()` 获取对象。

```csharp
public class User
{
    private string name;

    private User(string n)
    {
        name = n;
    }

    public static User CreateUser(string n)
    {
        return new User(n);
    }

    public void Print()
    {
        Console.WriteLine($"用户：{name}");
    }
}
```

---

## ✅ 8. 定义一个类 `Logger`，私有方法 `WriteLog(string msg)`，通过公共方法 `LogInfo()` 调用它。

```csharp
public class Logger
{
    private void WriteLog(string msg)
    {
        Console.WriteLine($"日志：{msg}");
    }

    public void LogInfo()
    {
        WriteLog("系统启动成功");
    }
}
```

---

## ✅ 9. 定义一个类 `Secret`, 其字段 `code` 是 `private`，写两个方法：一个设置密码，一个判断密码是否正确。

```csharp
public class Secret
{
    private string code;

    public void SetCode(string c)
    {
        code = c;
    }

    public bool Check(string input)
    {
        return code == input;
    }
}
```

---

## ✅ 10. 定义类 `Device`，`public` 字段 `Name`，`private` 字段 `id`，构造函数初始化二者，提供一个公共方法显示全部信息。

```csharp
public class Device
{
    public string Name;
    private int id;

    public Device(string name, int id)
    {
        Name = name;
        this.id = id;
    }

    public void ShowInfo()
    {
        Console.WriteLine($"设备：{Name}, 编号：{id}");
    }
}
```

---

## ✅ 涵盖知识点一览：

| 知识点               | 涵盖题目             |
| ----------------- | ---------------- |
| `private` 字段定义与封装 | 1, 3, 4, 5, 6, 9 |
| 通过公共方法访问私有字段      | 1, 4, 5, 9       |
| 属性封装私有字段          | 3                |
| `public` 字段的直接访问  | 2, 10            |
| 私有构造函数（受限实例化）     | 7                |
| 私有方法只能类内访问        | 8                |

---

## ✅ 下一步建议：

如果你希望，我可以：

* 把这10道题打包成 PDF/Word；
* 出一套类似的「测试题 + 答案空白版」供自测；
* 加上图解封装结构、访问权限图；
* 或继续出 `protected`, `internal` 的对比练习。

你希望我接下来怎么做？📘✅


太棒了！下面是为你整理的 C# `private` vs `public` 相关编程练习题 ——**测试题 + 空白答案区版**，供你自测使用 ✅

> 🧠 建议：先尝试亲自完成空白处，再对照前面提供的标准答案进行核对与理解。

---

# ✅ C# 编程测试题（private vs public）

📝 共 10 题，每题建议时间：3–5 分钟

---

### ✅ 1. 定义一个类 `Person`，包含一个私有字段 `name`，并提供 `SetName` 和 `PrintName` 方法。

```csharp
public class Person
{
    // ➤ 在此定义 private 字段
    

    // ➤ 设置姓名
    public void SetName(string n)
    {
        // ...
    }

    // ➤ 输出姓名
    public void PrintName()
    {
        // ...
    }
}
```

---

### ✅ 2. 定义一个类 `Student`，包含一个 `public` 字段 `score`，并在类外部修改并输出该值。

```csharp
public class Student
{
    // ➤ 在此定义 public 字段
    
}

// ➤ 测试代码：
Student s = new Student();
// ➤ 修改字段


// ➤ 输出字段

```

---

### ✅ 3. 创建类 `Car`，使用私有字段 `brand` 和公开属性 `Brand` 进行封装。

```csharp
public class Car
{
    // ➤ 私有字段


    // ➤ 公共属性
    public string Brand
    {
        get
        {
            // ...
        }
        set
        {
            // ...
        }
    }
}
```

---

### ✅ 4. 创建一个 `Counter` 类，包含 `private` 字段 `count`，提供 `Increment()` 方法和 `GetCount()` 方法。

```csharp
public class Counter
{
    // ➤ 私有字段


    // ➤ 累加方法
    public void Increment()
    {
        // ...
    }

    // ➤ 获取计数
    public int GetCount()
    {
        // ...
    }
}
```

---

### ✅ 5. 创建一个 `BankAccount` 类，使用私有字段 `balance`，提供方法 `Deposit()` 存钱，`ShowBalance()` 显示余额。

```csharp
public class BankAccount
{
    // ➤ 私有字段


    // ➤ 存款方法
    public void Deposit(double amount)
    {
        // ...
    }

    // ➤ 显示余额
    public void ShowBalance()
    {
        // ...
    }
}
```

---

### ✅ 6. 创建类 `Box`，其中 `length` 字段是私有的。在类外直接访问它，观察并记录错误信息。

```csharp
public class Box
{
    // ➤ 私有字段初始化为 10

}

// 测试代码：
Box b = new Box();
// ➤ 在此尝试访问字段（会报错）


```

---

### ✅ 7. 创建类 `User`，其构造函数为 `private`，通过 `CreateUser()` 静态方法实例化对象。

```csharp
public class User
{
    // ➤ 私有字段


    // ➤ 私有构造函数


    // ➤ 静态创建方法
    public static User CreateUser(string n)
    {
        // ...
    }

    // ➤ 打印信息方法
    public void Print()
    {
        // ...
    }
}
```

---

### ✅ 8. 创建 `Logger` 类，定义一个私有方法 `WriteLog()`，只能通过公共方法 `LogInfo()` 调用。

```csharp
public class Logger
{
    // ➤ 私有方法


    // ➤ 公共方法调用它
    public void LogInfo()
    {
        // ...
    }
}
```

---

### ✅ 9. 创建类 `Secret`，私有字段 `code`，提供 `SetCode()` 和 `Check()` 方法验证是否匹配。

```csharp
public class Secret
{
    // ➤ 私有字段


    // ➤ 设置密码
    public void SetCode(string c)
    {
        // ...
    }

    // ➤ 验证密码
    public bool Check(string input)
    {
        // ...
    }
}
```

---

### ✅ 10. 创建类 `Device`，`public` 字段 `Name`，`private` 字段 `id`，构造函数初始化它们，方法 `ShowInfo()` 输出信息。

```csharp
public class Device
{
    // ➤ public 字段


    // ➤ private 字段


    // ➤ 构造函数初始化字段


    // ➤ 显示方法
    public void ShowInfo()
    {
        // ...
    }
}
```

---

## ✅ 自测建议

| 步骤    | 建议                            |
| ----- | ----------------------------- |
| 第 1 步 | 先手写作答或复制粘贴到 IDE 自主填写          |
| 第 2 步 | 再参考标准答案核对并逐句理解                |
| 第 3 步 | 修改代码尝试触发访问错误，以巩固 `private` 限制 |

---

如果你希望：

* 📄 生成 Word / PDF 可打印练习册
* 🧠 出一套相似的选择 + 判断 + 编程混合题
* 📘 增加封装 + 属性自动实现的延伸练习

请告诉我，我可以立即为你生成或导出 ✅
