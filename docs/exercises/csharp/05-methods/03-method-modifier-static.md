---
noteId: "9c0773305df511f0a1a33da03f8ebbc2"
tags: []

---

请判断下列成员是否 **应该使用 `static`**，并说明理由。

---

## 1. Max(int a, int b)

工具类中的方法 `int Max(int a, int b)`，用于返回较大值。是否应该使用 `static`？为什么？

---

## 2. string Name

学生类中的字段 `string Name`，表示学生的名字。是否应该使用 `static`？为什么？

---

## 3. int TotalBooks

图书馆类中的字段 `int TotalBooks`，表示全馆图书总数，所有图书共享。是否应该使用 `static`？为什么？

---

## 4. void PrintInfo()

一个类中有方法 `void PrintInfo()`，用于输出某个员工的工号、姓名。是否应该使用 `static`？为什么？

---

## 5. void ShowCurrentTime()

系统工具类中的方法 `void ShowCurrentTime()`，打印当前时间。是否应该使用 `static`？为什么？

---

## 6. Add(int a, int b)

定义一个 `Utils` 工具类，写一个方法 `Add(int a, int b)`，返回加法结果，**不需要创建对象就能调用**。是否加 `static`？怎么写？

---

## 7. Student 类

定义一个 `Student` 类，每当创建一个新学生对象时，学生总人数加 1。提供一个方法获取总人数。哪些成员要加 `static`？怎么写？

---

## 8. Car 类

你写了一个 `Car` 类，每辆车有自己的颜色和速度属性。这些字段要不要加 `static`？为什么？

---

## 9. TimeHelper 类

定义一个 `TimeHelper` 类，提供一个方法 `GetCurrentHour()`，返回当前小时。是否需要 static？怎么调用这个方法？

---

## 10. Person 类

创建一个 `Person` 类，定义一个 `Greet()` 方法，打印：“Hi，我是某某”。`Greet()` 是否应该加 static？为什么？

---

如果你愿意，也可以尝试先写出答案，我再为你逐题解析并评分 ✅。需要我直接提供参考答案和解析吗？


好的，下面是这 **10 道关于 C# 中 `static` 的练习题的参考答案与详细解析**，帮你真正搞懂 `static` 的适用场景。

---

## 参考答案

---

**题 1**：`int Max(int a, int b)` 工具类方法

👉 **是否加 `static`？✔️ 是**

**解析**：
这个方法只处理数据，不依赖任何对象状态，适合做为工具方法。建议定义为 `static`。

```csharp
public static int Max(int a, int b)
{
    return (a > b) ? a : b;
}
```

---

**题 2**：`string Name` 字段表示学生的姓名

👉 **是否加 `static`？❌ 否**

**解析**：
每个学生的名字不同，属于“每个对象自己的状态”，不能共享，**不应该是静态的**。

```csharp
public string Name;
```

---

**题 3**：`int TotalBooks` 图书馆中的总书数量

👉 **是否加 `static`？✔️ 是**

**解析**：
所有图书共享一本总数，属于整个类的共同属性，适合用静态字段。

```csharp
public static int TotalBooks;
```

---

**题 4**：方法 `PrintInfo()`，打印员工信息（编号、姓名）

👉 **是否加 `static`？❌ 否**

**解析**：
员工的信息是“每个对象”的状态，需要通过对象调用，不能是静态方法。

```csharp
public void PrintInfo()
{
    Console.WriteLine($"ID: {Id}, Name: {Name}");
}
```

---

**题 5**：`ShowCurrentTime()` 打印当前时间的方法

👉 **是否加 `static`？✔️ 是**

**解析**：
这个方法不依赖对象状态，只是系统功能，适合定义为静态方法。

```csharp
public static void ShowCurrentTime()
{
    Console.WriteLine(DateTime.Now);
}
```

---

**题 6**：工具类 `Utils.Add(int a, int b)`，不创建对象调用

👉 **加 `static` ✔️**

```csharp
public static class Utils
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}

// 调用：
int result = Utils.Add(2, 3);
```

---

**题 7**：`Student` 类统计总人数

👉 `TotalCount` 字段 + `GetTotalCount()` 方法都要加 `static` ✔️

```csharp
class Student
{
    public string Name;
    private static int totalCount = 0;

    public Student(string name)
    {
        Name = name;
        totalCount++;
    }

    public static int GetTotalCount()
    {
        return totalCount;
    }
}

// 使用：
Student s1 = new Student("Tom");
Student s2 = new Student("Lily");
Console.WriteLine(Student.GetTotalCount()); // 输出 2
```

---

**题 8**：每辆车有颜色和速度

👉 **不加 `static` ❌**

**解析**：颜色和速度是每辆车自己独有的状态，不应被共享。

```csharp
public class Car
{
    public string Color;
    public int Speed;
}
```

---

**题 9**：`TimeHelper.GetCurrentHour()` 返回当前小时

👉 **应加 `static` ✔️**

```csharp
public static class TimeHelper
{
    public static int GetCurrentHour()
    {
        return DateTime.Now.Hour;
    }
}

// 使用：
int hour = TimeHelper.GetCurrentHour();
```

---

**题 10**：`Person.Greet()` 打招呼

👉 **不加 `static` ❌**

**解析**：打招呼时要用到对象的名字，需要对象参与，不应为静态。

```csharp
public class Person
{
    public string Name;

    public void Greet()
    {
        Console.WriteLine($"Hi，我是 {Name}");
    }
}
```

---

**总结口诀复习：**

| 适用情景      | 是否用 static |
| --------- | ---------- |
| 跟对象状态无关   | ✅ 用        |
| 所有对象共享的字段 | ✅ 用        |
| 每个对象状态独立  | ❌ 不用       |
| 需要访问实例成员  | ❌ 不用       |

---

如果你希望把这些题整理成一个 **可打印的 PDF/Word 文档** 或想继续做 “static 与面向对象结合”的进阶题，也可以告诉我，我可以帮你生成！
