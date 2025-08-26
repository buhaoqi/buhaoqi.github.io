---
noteId: "5a0d22205ebf11f0a138bb2f2278db69"
tags: []

---

**什么时候该用 `static`（静态）**，是 C# 学习中的一个关键点。下面我会用**通俗易懂的方式**为你讲清楚：

---

## ✅ 一、什么是 `static`？

`static` 表示“静态”的，**属于类本身，不属于类的对象**。

* **类的静态成员**：不需要创建对象就能访问。
* **实例成员（非 static）**：必须通过对象来访问。

---

## ✅ 二、`static` 的使用场景总结

| 你想做什么          | 是否使用 `static` | 说明              |
| -------------- | ------------- | --------------- |
| 所有对象共用一个数据/方法  | ✅ 是           | 如工具类、全局计数器      |
| 方法只做功能处理，与对象无关 | ✅ 是           | 如 `Math.Sqrt()` |
| 每个对象有自己独立的状态   | ❌ 否           | 如学生的姓名、年龄等      |
| 方法操作某个对象的数据    | ❌ 否           | 因为需要访问实例字段      |

---

## ✅ 三、实际例子讲解

### 1. 静态方法（`static method`）🔧

**适合用于通用功能处理（工具函数）**

```csharp
class MathHelper
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}

// 调用方式：
int result = MathHelper.Add(2, 3);  // 不需要 new
```

---

### 2. 实例方法（非 static 方法）👤

**适合每个对象行为不一样的情况**

```csharp
class Student
{
    public string Name;

    public void SayHi()
    {
        Console.WriteLine("Hi, I'm " + Name);
    }
}

// 调用方式：
Student s = new Student();
s.Name = "Tom";
s.SayHi();  // 必须通过对象
```

---

### 3. 静态字段（`static field`）🌍

**适合所有对象共享的数据，比如总人数**

```csharp
class Student
{
    public static int TotalStudents = 0;
    public string Name;

    public Student(string name)
    {
        Name = name;
        TotalStudents++;
    }
}

// 使用方式：
Student s1 = new Student("Tom");
Student s2 = new Student("Jerry");
Console.WriteLine(Student.TotalStudents); // 输出 2
```

---

### 4. 静态类（`static class`）🧰

**整个类只用来提供功能，不创建对象**

```csharp
static class Utils
{
    public static void ShowMessage()
    {
        Console.WriteLine("Hello from Utils!");
    }
}

// 调用方式：
Utils.ShowMessage();  // 无法 new Utils()
```

---

## ✅ 四、什么时候不能用 static？

* 需要**保存对象独有的数据**（如学生姓名、图书编号）时 ❌不能用 static。
* 想要通过 `new` 创建多个不同的对象时 ❌不能用 static。
* 需要访问对象字段/属性的情况下，方法不能用 `static`。

---

## ✅ 五、一个口诀助记：

> 🔹**通用功能加 static，个体状态不用加。**
> 🔹**和对象无关，加 static；和对象有关，不加 static。**

---

## ✅ 六、重点回顾：

| 项目             | 使用 `static` | 示例                   |
| -------------- | ----------- | -------------------- |
| 工具类中的方法        | ✅ 是         | `Math.Sqrt()`        |
| 记录所有对象的数量      | ✅ 是         | `Student.TotalCount` |
| 操作某个对象的属性（如姓名） | ❌ 否         | `s.Name = "Tom"`     |
| 创建多个对象（如学生、车）  | ❌ 否         | `new Student()`      |

---

如果你想，我可以为你出几道题练习判断是否应该使用 `static`，你要不要试试看？
