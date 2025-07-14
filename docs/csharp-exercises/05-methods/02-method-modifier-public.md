---
noteId: "d5b706a05e0311f0a1a33da03f8ebbc2"
tags: []

---

好的！以下是关于 **C# 中 `public` 关键字的 10 道精选练习题**，涵盖了方法、字段、构造函数、属性、类访问修饰等常见用法，帮助你全面理解 `public` 的应用和作用范围。

---

## ✅ 一、填空/判断题（前 5 题）

---

### **1. 填空题**

在下面的代码中，哪一行应添加 `public` 才能让 `Student` 类在其他项目中被访问？

```csharp
_____ class Student
{
    string Name;
    int Score;
}
```

---

### **2. 判断题**

下面这个字段应该加 `public` 吗？为什么？

```csharp
class Book
{
    public string Title;
}
```

---

### **3. 判断题**

下面的方法是否可以被其他类访问？为什么？

```csharp
class User
{
    void ShowInfo()
    {
        Console.WriteLine("User Info");
    }
}
```

---

### **4. 选择题**

以下哪一项是声明一个 `public` 构造函数的正确语法？

A. `private void Person() { }`

B. `public Person() { }`

C. `static void Person() { }`

D. `protected Person() { }`

---

### **5. 判断题**

下面代码中的变量 `x` 可以使用 `public` 修饰吗？为什么？

```csharp
void Test()
{
    public int x = 10;
}
```

---

## ✅ 二、编程题（后 5 题）

---

### **6. 编程题：类的访问权限**

定义一个类 `Calculator`，让它可以被其他项目引用，并在类中添加一个 `public` 方法 `Add(int a, int b)`，返回两个数之和。

---

### **7. 编程题：公开属性**

创建一个 `Student` 类，包含两个 `public` 属性：`Name`（字符串类型）和 `Score`（整数类型）。在主函数中创建对象并赋值。

---

### **8. 编程题：封装改进**

你已经定义了如下代码：

```csharp
class Car
{
    public string model;
}
```

请指出该字段是否适合使用 `public`，并进行改进为推荐方式（使用属性）。

---

### **9. 编程题：公共构造函数**

定义一个 `public` 构造函数，使下面的代码可以正常运行：

```csharp
Program p = new Program();
```

---

### **10. 编程题：公共方法调用**

定义一个类 `Helper`，包含一个 `public` 的静态方法 `SayHi()`，调用时无需创建对象，直接输出 "Hi there!"。

---

## 参考答案

好的！下面是 **C# 中 `public` 关键字的 10 道练习题的标准答案和详细解析**，帮助你更好地掌握 `public` 的使用场景和规范。

---

## ✅ 一、填空/判断题（前 5 题）

---

### **1. 填空题**

> 在下面的代码中，哪一行应添加 `public` 才能让 `Student` 类在其他项目中被访问？

```csharp
_____ class Student
{
    string Name;
    int Score;
}
```

✅ **答案**：

```csharp
public class Student
```

🧠 **解析**：类要想在外部程序集中被访问，必须声明为 `public`。否则即使它的成员是 public，整个类也无法被引用。

---

### **2. 判断题**

> 下面这个字段应该加 `public` 吗？为什么？

```csharp
class Book
{
    public string Title;
}
```

❌ **不推荐使用 `public` 字段**。

🧠 **解析**：虽然语法正确，但根据封装原则，不推荐将字段直接公开，应该通过属性来控制读写操作。例如：

```csharp
public string Title { get; set; }
```

---

### **3. 判断题**

> 下面的方法是否可以被其他类访问？为什么？

```csharp
class User
{
    void ShowInfo()
    {
        Console.WriteLine("User Info");
    }
}
```

❌ **不能**被其他类访问。

🧠 **解析**：默认访问修饰符是 `private`，该方法只能在 `User` 类内部使用。如果要让其他类访问，必须加 `public`：

```csharp
public void ShowInfo()
```

---

### **4. 选择题**

> 以下哪一项是声明一个 `public` 构造函数的正确语法？

✅ **正确答案：B. `public Person() { }`**

🧠 **解析**：

* A 是私有构造函数；
* C 是错误语法：构造函数不能有返回类型；
* D 是受保护构造函数。

---

### **5. 判断题**

> 下面代码中的变量 `x` 可以使用 `public` 修饰吗？为什么？

```csharp
void Test()
{
    public int x = 10;
}
```

❌ **不能使用 `public`**。

🧠 **解析**：局部变量（方法内部的变量）不能使用访问修饰符（如 public、private），只能用于类级别的成员。

---

## ✅ 二、编程题（后 5 题）

---

### **6. 类的访问权限**

> 定义一个类 `Calculator`，让它可以被其他项目引用，并添加 `public` 方法 `Add(int a, int b)`

✅ **答案**：

```csharp
public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }
}
```

🧠 **解析**：

* 类必须是 `public`；
* 方法要对外可见也必须 `public`。

---

### **7. 公开属性**

> 创建一个 `Student` 类，包含两个 `public` 属性：`Name` 和 `Score`。

✅ **答案**：

```csharp
public class Student
{
    public string Name { get; set; }
    public int Score { get; set; }
}

// 调用示例：
Student stu = new Student();
stu.Name = "Tom";
stu.Score = 90;
```

🧠 **解析**：使用属性而不是字段，符合封装原则，可读可写。

---

### **8. 封装改进**

> 指出下列字段是否应为 `public`，并改进为推荐方式：

```csharp
class Car
{
    public string model;
}
```

✅ **改进代码**：

```csharp
public class Car
{
    public string Model { get; set; }
}
```

🧠 **解析**：字段 `model` 不应该公开暴露，改为属性 `Model` 更安全、更灵活。

---

### **9. 公共构造函数**

> 定义一个 `public` 构造函数，使下面的代码可以运行：

```csharp
Program p = new Program();
```

✅ **答案**：

```csharp
public class Program
{
    public Program()
    {
        Console.WriteLine("构造函数已调用");
    }
}
```

🧠 **解析**：构造函数要是 `public`，外部才能 `new Program()`。

---

### **10. 公共静态方法调用**

> 定义一个类 `Helper`，包含一个 `public static` 方法 `SayHi()`，输出 `"Hi there!"`。

✅ **答案**：

```csharp
public class Helper
{
    public static void SayHi()
    {
        Console.WriteLine("Hi there!");
    }
}

// 调用：
Helper.SayHi();
```

🧠 **解析**：`static` 方法属于类本身，`public` 修饰让它可被外部调用。

---

## ✅ 总结

| 类型   | 是否应加 `public` | 原因          |
| ---- | ------------- | ----------- |
| 类    | ✅             | 让其他项目/类可以访问 |
| 方法   | ✅（需要公开）       | 用于跨类访问      |
| 字段   | ❌（一般不加）       | 推荐用属性替代     |
| 属性   | ✅             | 公开读写        |
| 构造函数 | ✅（要能创建对象）     | 允许外部 `new`  |

---