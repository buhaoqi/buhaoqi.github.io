---
noteId: "8f5a29f0683d11f0b38abb3f8df447a5"
tags: []

---

## 方法只有调用时才会执行

方法写完不会自动执行，要你**显式调用**它：

```csharp
SayHello();  // 调用方法
```
## 方法可以接受多个参数

我们刚才写的 `Greet(string name)` 中，`string name` 就是**参数**。调用时传值进去，方法就能“变聪明”地输出不同内容。

也可以定义多个参数：

```csharp
static void Add(int a, int b)
{
    Console.WriteLine(a + b);
}
```

调用方式：

```csharp
Add(3, 5); // 输出8
```

---

## 有返回值的方法

有时你不只是想“做事”，还想“得到结果”，就要用**返回值**：

```csharp
static int Square(int x)
{
    return x * x;
}
```

这个方法会返回一个整数，用法如下：

```csharp
int result = Square(4);  // result = 16
Console.WriteLine(result);
```

🧠 记住：`void` 表示“无返回值”，`int` 表示返回一个整数。

---

## 定义方法的语法

```csharp
[访问修饰符] [返回类型] 方法名([参数列表])
{
    // 方法体
    return;
}
```

比如：

```csharp
static string GetWelcome(string name)
{
    return $"你好，{name}！";
}
```

---

## 方法的命名规范

* 动词开头，比如：`PrintReport()`、`CalculateSum()`
* 使用驼峰命名法，比如：`getStudentInfo()`
* 名字越具体越好，别叫 `DoThing()` 啥的 😅

---

## 总结

* 方法是把代码打包的工具，**写一次，用多次**
* 可传参数，也可返回值，灵活又强大
* 提高代码可读性和维护效率，是编程的重要基石！

---

## 结尾

今天的内容就到这里。

别再复制粘贴重复代码啦，用方法装起来，随叫随到！

我是张杰，这里是不·好·奇·编程。

下一课我们来讲——**方法重载：一个方法名，多种玩法！**

让你的代码更智能，咱们下课见！



--------

C# 中有函数的概念，但在语法和术语上，C# 中通常把“函数”称为方法（Method）。

---

## **一、方法是什么？**
**方法（Method）** 是一个具有名字的代码块。

>代码块：代码块是使用花括号包裹的指令的集合。代码块是一个由一条或多条语句组成的单元。

## 二、方法的特点
* 复用：方法是一段可以重复执行的代码块；
* 功能：用来完成特定的功能
* 携带数据：可以有参数、返回值
1. 名字调用：可使用名字调用代码块。
2. 参数调用: 调用方法时可以传入参数。
3. 重复调用：可重复调用代码块。
4. 特定任务：方法用于执行特定任务。
5. 返回值：方法执行完毕后必须要有返回值。
6. 方法必须写在类中，C# 是面向对象语言，不能像 Python 那样写在类外。
---

## 三、语法结构

```csharp
[访问修饰符] [返回类型] 方法名([参数列表])
{
    // 方法体
    [return 值;]
}
```

组成部分详解

| 部分   | 说明                 | 示例                                |
| ---- | ------------------ | --------------------------------- |
| [修饰符]  | 用于控制谁可以调用此方法   | `public`、`private`、`static` 等     |
| 返回类型 | 定义方法返回的数据类型 | `int`、`void`、`string` 等           |
| 方法名  | 方法的名称，遵循驼峰命名法   | `PrintInfo`、`AddNumbers` 等        |
| [参数列表] | 方法可以接收的输入值，多个用逗号分隔 | `(int a, int b)`                  |
| 方法体  | 方法执行的语句            | `{ Console.WriteLine("Hello"); }` |
|[return 值;]|可以有返回值，也可以没有返回值。||

---


## 四、定义方法示例

### 1.无参数无返回值的方法

```csharp
public void SayHello()
{
    Console.WriteLine("Hello!");
}
```

### 2.有参数无返回值的方法

```csharp
public void Greet(string name)
{
    Console.WriteLine("Hello, " + name);
}
```

### 3.有参数有返回值的方法

```csharp
public int Add(int a, int b)
{
    return a + b;
}
```

### 4.static 方法（静态）

```csharp
public static int Square(int n)
{
    return n * n;
}
```

### 5.带默认值参数的方法

```csharp
public void Print(string msg = "Hello")
{
    Console.WriteLine(msg);
}
```
### 6.完整类中包含方法的结构

```csharp linenums="1"
using System;

class Program
{
    static void Main()
    {
        SayHello();
        int result = Add(3, 5);
        Console.WriteLine("结果是: " + result);
    }

    static void SayHello()
    {
        Console.WriteLine("你好！");
    }

    static int Add(int x, int y)
    {
        return x + y;
    }
}
```
### 7.有返回值的方法

- 方法体里必须通过 return 返回该类型的值。

```csharp
public int Add(int a, int b)
{
    return a + b;
}
```

### 8.无返回值的方法

- 使用 void 作为返回类型
- 方法执行完毕后直接结束

```csharp linenums="1"
public void PrintHello()
{
    Console.WriteLine("Hello!");
    // 不需要 return 值，return; 可写可不写
}
```

### 9.定义并调用方法

```csharp
class Program
{
    static void Main(string[] args)
    {
        int result = Multiply(3, 4);
        Console.WriteLine(result);  // 输出 12
    }

    static int Multiply(int a, int b)
    {
        return a * b;
    }
}
```

## 五、方法的分类

| 类型           | 说明          | 示例                  |
| ------------ | ----------- | ------------------- |
| 静态方法（static） | 不依赖对象，可直接调用 | `static int Add()`  |
| 实例方法         | 需要通过对象调用    | `car.Start()`|
| 返回值方法        | 返回某种类型的值    | `int GetAge()`|
| void 方法      | 不返回任何值      | `void Print()`      |
| 带参数方法        | 接收输入数据      | `Sum(int x, int y)` |

### 1. **无参无返回值方法**
```csharp
void SayHello() 
{
    Console.WriteLine("你好，世界！");
}
```

### 2. **带参数的方法**
```csharp
void Greet(string name) 
{
    Console.WriteLine($"你好，{name}！");
}
```

### 3. **带返回值的方法**
```csharp
int Multiply(int x, int y) 
{
    return x * y;
}
```

### 4. **方法重载（Overload）**
> 同名不同参的方法
```csharp
int Add(int a, int b) => a + b;
double Add(double a, double b) => a + b; // 重载：参数类型不同
```

### 5. **可选参数方法**
> 使用默认值简化调用
```csharp
void CreateUser(string name, int age = 18) 
{
    Console.WriteLine($"{name}, 年龄: {age}");
}
// 调用：CreateUser("小明"); // age自动用18
```

### 6. **Lambda表达式（简洁方法）**
> 适用于简单逻辑
```csharp
Func<int, int> square = x => x * x; 
Console.WriteLine(square(5)); // 输出25
```

---

## 进阶指南
### **关键进阶概念**
| **概念**         | **说明**  | **代码示例**                          |
|------------------|------------------------------|--------------------------|
| **递归方法**     | 方法调用自身| `int Factorial(int n) { ... }`        |
| **ref/out参数**  | 按引用传递（修改原值） | `void Modify(ref int x) { x++; }`     |
| **params参数**   | 传递可变数量参数  | `int Sum(params int[] nums) { ... }`  |
| **扩展方法**     | 为现有类添加新方法（不需继承） | `static class StringExtensions { ... }` |

### **高效学习路径**
1. **基础阶段**  
   - 练习创建/调用各种参数类型的方法
   - 掌握`return`和`void`的区别
   - 尝试方法重载（同名不同参）

2. **项目实践**  
   ```csharp
   // 实战案例：温度转换器
   static double CelsiusToFahrenheit(double celsius) 
       => (celsius * 9/5) + 32;
   
   static void Main() 
   {
       Console.Write("输入摄氏温度：");
       double c = double.Parse(Console.ReadLine());
       Console.WriteLine($"华氏温度：{CelsiusToFahrenheit(c)}");
   }
   ```

3. **进阶训练**  
   - 实现递归算法（如斐波那契数列）
   - 用`ref`交换两个变量的值
   - 为`string`类创建扩展方法（如`"abc".ReverseString()`）

---

### **避坑指南**
- ⚠️ **递归陷阱**：忘记设置终止条件 → 导致栈溢出
- ⚠️ **命名冲突**：避免方法与变量同名
- ⚠️ **参数顺序**：传参时类型/顺序必须匹配
- ⚠️ **Null引用**：调用对象方法前检查是否为`null`

---

### **学习资源推荐**
1. **交互式教程**  
   - [Microsoft Learn C#路径](https://learn.microsoft.com/zh-cn/dotnet/csharp/)（官方免费）
   - [Codecademy C#课程](https://www.codecademy.com/learn/learn-c-sharp)（实践导向）

2. **工具推荐**  
   - 使用[LINQPad](https://www.linqpad.net/)快速测试代码片段
   - 在[.NET Fiddle](https://dotnetfiddle.net/)在线编写C#

3. **书籍参考**  
   - 《C#入门经典》 - 适合零基础
   - 《C#本质论》 - 深入理解核心机制

---

> **重要提示**：学习编程的核心原则是 **“写代码 > 看代码”** ！每学一个概念后，立即动手实现以下练习：
> 1. 写方法计算圆的面积（参数：半径）
> 2. 重载该方法使其支持输入直径计算
> 3. 用递归实现阶乘计算（5! = 120）

坚持每天写代码，你会快速掌握C#方法体系。遇到问题随时来问，祝你学习顺利！ 