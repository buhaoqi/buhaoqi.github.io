---
# 这部分是关键！侧边栏显示名由这里决定
title: 二、方法的参数  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 二、方法的参数  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## **一、方法参数是什么**

参数用于接收传入方法内部的外部数据。

```csharp
// 方法定义中的参数叫形式参数（形参）
public void DisplayMessage(string message, int count)
{
    for (int i = 0; i < count; i++)
    {
        Console.WriteLine(message);
    }
}

// 方法调用时传入的参数叫实际参数（实参）
DisplayMessage("Hello World", 3);
```

参数分为：

- 形参
- 实参

## **二、参数的语法格式**

参数的语法

```
返回类型 方法名(参数类型 参数名, 参数类型 参数名, ...)
{
    // 方法体
}
```

示例：

```
void Greet(string name, int age)
{
    Console.WriteLine($"大家好，我叫 {name}，今年 {age} 岁。");
}
```

调用：

```
Greet("小明", 18);
```

👉 `"小明"` 和 `18` 就是**实参**（实际传入的值）。 👉 `string name` 和 `int age` 是**形参**（方法定义里的占位符）。

## **三、主要参数类型**

### **1.值参数（默认）**

实参的值会被复制一份传入方法，不影响外部变量，可以直接修改外部变量。

```csharp
//示例1
void Change(int x)
{
    x = 100;
}
int a = 5;
Change(a);
Console.WriteLine(a); // 仍然是 5

//示例2
public void ValueParameterExample(int number)
{
    number = 100; // 修改不会影响原始值
    Console.WriteLine($"方法内: {number}");
}

// 使用
int originalValue = 50;
ValueParameterExample(originalValue);
Console.WriteLine($"方法外: {originalValue}"); // 仍然是50
```

### **2. 引用参数 （ref）**

`ref` 传入前必须初始化。把变量的引用传进去，

```csharp
//示例1
void Change(ref int x)
{
    x = 100;
}
int a = 5;
Change(ref a);
Console.WriteLine(a); // 100

//示例2
public void RefParameterExample(ref int number)
{
    number = 100; // 修改会影响原始值
    Console.WriteLine($"方法内: {number}");
}

// 使用
int originalValue = 50;
RefParameterExample(ref originalValue);
Console.WriteLine($"方法外: {originalValue}"); // 变为100
```

- **值传递（默认）**：把参数的值复制一份传进去
- **引用传递（ref/out）**：直接传变量的地址，可以改变原始变量

### **3.输出参数 (out)**

在 C# 中，`out` 修饰符的用途就是——**让方法可以通过参数“输出”多个结果**。一个方法通常只能 `return` 一个值，但有时候我们希望**返回多个结果**。 这时候 `out` 就派上用场了。

使用规则

- 在方法声明时，参数前加 `out`。
- 在方法内部，**必须给** `out` **参数赋值**。
- 在调用方法时，也要写 `out` 关键字。

基本语法

```csharp
// 方法定义
public void MethodName(out 数据类型 参数名)
{
    // 方法内部必须为out参数赋值
    参数名 = 值;
}

// 方法调用
MethodName(out 变量名);
```

示例：计算商和余数

```
class Program
{
    static void Divide(int a, int b, out int quotient, out int remainder)
    {
        quotient = a / b;   // 商
        remainder = a % b;  // 余数
    }

    static void Main()
    {
        int q, r;
        Divide(10, 3, out q, out r); // Divide 方法相当于一次返回了 两个值：商 和 余数。

        Console.WriteLine($"商 = {q}, 余数 = {r}");
    }
}
```

### **4. 参数数组 (params)**

params 用于可变参数，允许传入不确定数量的参数。

```csharp
//示例1
void PrintNumbers(params int[] numbers)
{
    foreach (int n in numbers)
        Console.Write(n + " ");
}
PrintNumbers(1, 2, 3, 4, 5); // 输出：1 2 3 4 5

//示例2
public void ParamsExample(params int[] numbers)
{
    Console.WriteLine($"共传入 {numbers.Length} 个数字:");
    foreach (int num in numbers)
    {
        Console.WriteLine(num);
    }
}

// 多种调用方式
ParamsExample(1, 2, 3);
ParamsExample(10, 20);
ParamsExample(); // 也可以不传参数
```

### **5. 可选参数（有默认值）**

因为可以设置默认值。

```
//示例1
void SayHello(string name = "游客")
{
    Console.WriteLine("Hello, " + name);
}
SayHello();         // Hello, 游客
SayHello("小红");   // Hello, 小红

//示例2
public void OptionalParameters(string name, int age = 18, string city = "北京")
{
    Console.WriteLine($"姓名: {name}, 年龄: {age}, 城市: {city}");
}

// 调用方式
OptionalParameters("张三");                    // 使用默认年龄和城市
OptionalParameters("李四", 25);               // 使用默认城市
OptionalParameters("王五", 30, "上海");       // 提供所有参数
```

### **6. 命名参数**

```
public void NamedParameters(string name, int age, string city)
{
    Console.WriteLine($"姓名: {name}, 年龄: {age}, 城市: {city}");
}

// 调用时指定参数名，顺序可以改变
NamedParameters(age: 25, city: "广州", name: "赵六");
NamedParameters(city: "深圳", name: "钱七", age: 28);
```



## **四、ref和out的区别**

两者都属于**引用参数（By Reference）**，意思是：传进去的不是值的副本，而是**变量本身的地址**，所以方法内部修改它，外部也会跟着变。但是——它们有几个关键区别：

对比总结表

| **特点**             | `ref`                  | `out`                         |
| -------------------- | ---------------------- | ----------------------------- |
| 调用前是否要赋值     | 必须赋值               | 不需要                        |
| 方法内部是否必须赋值 | 不要求                 | 必须赋值                      |
| 用途                 | 修改传入的值           | 输出额外的值                  |
| 常见场景             | 需要对已有变量进行修改 | 返回多个结果，例如 `TryParse` |

------

### **🎯 一句话记忆：**

- `ref` **是“进去有值，出来可能改了”**
- `out` **是“进去没值，出来一定有值”**



## **练习**



### **1. 计算器类示例**

```csharp
public class Calculator
{
    // 值参数示例
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    // 引用参数示例 - 交换两个值
    public void Swap(ref int x, ref int y)
    {
        int temp = x;
        x = y;
        y = temp;
    }
    
    // 输出参数示例 - 获取多个计算结果
    public void Calculate(int a, int b, out int sum, out int difference, out int product)
    {
        sum = a + b;
        difference = a - b;
        product = a * b;
    }
    
    // 参数数组示例 - 计算平均值
    public double Average(params double[] numbers)
    {
        if (numbers.Length == 0) return 0;
        
        double sum = 0;
        foreach (double num in numbers)
        {
            sum += num;
        }
        return sum / numbers.Length;
    }
}

// 使用示例
Calculator calc = new Calculator();

// 使用值参数
int result = calc.Add(5, 3);

// 使用引用参数
int x = 10, y = 20;
calc.Swap(ref x, ref y);

// 使用输出参数
int sum, diff, product;
calc.Calculate(8, 3, out sum, out diff, out product);

// 使用参数数组
double avg = calc.Average(1, 2, 3, 4, 5);
```

### **2 用户注册示例**

```csharp
public class UserService
{
    // 可选参数和命名参数的实际应用
    public bool RegisterUser(
        string username,
        string password,
        string email = "",
        string phone = "",
        bool isActive = true,
        DateTime? registrationDate = null)
    {
        // 注册逻辑
        Console.WriteLine($"注册用户: {username}");
        Console.WriteLine($"邮箱: {email}, 电话: {phone}");
        Console.WriteLine($"激活状态: {isActive}");
        
        return true;
    }
    
    // 验证用户信息并返回多个结果
    public bool ValidateUser(string username, string password, out string errorMessage)
    {
        if (string.IsNullOrEmpty(username))
        {
            errorMessage = "用户名不能为空";
            return false;
        }
        
        if (password.Length < 6)
        {
            errorMessage = "密码长度不能少于6位";
            return false;
        }
        
        errorMessage = "验证成功";
        return true;
    }
}

// 使用示例
UserService userService = new UserService();

// 使用可选参数
userService.RegisterUser("张三", "password123");
userService.RegisterUser("李四", "password123", "lisi@email.com");
userService.RegisterUser(
    username: "王五",
    password: "password123", 
    phone: "13800138000",
    isActive: false);

// 使用输出参数
string errorMsg;
bool isValid = userService.ValidateUser("testuser", "123", out errorMsg);
if (!isValid)
{
    Console.WriteLine($"验证失败: {errorMsg}");
}
```

1. 示例

```csharp
public class OutParameterDemo
{
    // 示例1: 简单的out参数使用
    public void GetUserInfo(out string userName, out int userAge)
    {
        userName = "张三";
        userAge = 25;
    }
    
    // 示例2: 方法执行状态+结果返回
    public bool TryParseNumber(string input, out int result)
    {
        if (int.TryParse(input, out result))
        {
            return true; // 解析成功
        }
        else
        {
            result = 0; // 即使失败也要赋值
            return false; // 解析失败
        }
    }
    
    // 示例3: 返回多个计算结果
    public void CalculateCircle(double radius, out double area, out double circumference)
    {
        area = Math.PI * radius * radius;
        circumference = 2 * Math.PI * radius;
    }
}

// 使用示例
OutParameterDemo demo = new OutParameterDemo();

// 使用示例1
string name;
int age;
demo.GetUserInfo(out name, out age);
Console.WriteLine($"姓名: {name}, 年龄: {age}");

// 使用示例2
string userInput = "123";
if (demo.TryParseNumber(userInput, out int number))
{
    Console.WriteLine($"解析成功: {number}");
}
else
{
    Console.WriteLine("解析失败");
}

// 使用示例3
double circleArea, circleCircumference;
demo.CalculateCircle(5.0, out circleArea, out circleCircumference);
Console.WriteLine($"面积: {circleArea:F2}, 周长: {circleCircumference:F2}");
```



## **一、方法重载的典型例子**

`Console.WriteLine()` 本身就是方法重载的典型例子：

```
Console.WriteLine("Hello");   // 输出字符串
Console.WriteLine(100);       // 输出整数
Console.WriteLine(3.14);      // 输出小数
```

虽然方法名相同，但参数不同，所以能打印不同类型的数据。

## **二、方法重载是什么？**

方法重载是指：在同一个类中，可以有多个以有多个同名不同参的方法定义。

注：编译器会根据你调用时传入的参数，自动选择合适的方法。

## **三、方法重载的规则**

- 方法名必须相同
- 参数的 **个数** 或 **类型** 必须不同。
- 返回值不同**不算重载**（必须参数不同才行）。

## **四、方法重载的好处**

- 让代码更简洁。
- 逻辑更清晰。
- 同一个功能，可以有多种调用方式。

## **五、示例：Add()**

写一个Add()方法，可以计算整数与浮点数，Add(int, int)`与Add(double, double)，同名不同参数

```
class Calculator
{
    // 加法：两个整数
    public int Add(int a, int b)
    {
        return a + b;
    }

    // 加法：三个整数
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    // 加法：两个小数
    public double Add(double a, double b)
    {
        return a + b;
    }
}

class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();

        Console.WriteLine(calc.Add(2, 3));       // 输出 5
        Console.WriteLine(calc.Add(2, 3, 4));   // 输出 9
        Console.WriteLine(calc.Add(2.5, 3.5));  // 输出 6.0
    }
}
```

## **六、示例：Print()方法**

要求：自己写一个 `Print` 方法，能打印整数、字符串、浮点数，

```

```

## **七、示例：反例**

参数一样但返回类型不同，**不算重载**。

```
int Add(int a, int b) { return a + b; }
double Add(int a, int b) { return a + b; }  // ❌ 会报错
```

------

## **八、总结**

- **重载 = 同名不同参**。
- 参数可以不同：**数量不同**、**类型不同**、**顺序不同**。
- 常用在：打印、数学计算、格式化输出等场景。

------

## **练习**

### **题目1：写一个** `SayHello()` **方法**

重载为：

- 无参数 → 输出“Hello!”
- 有一个 `string name` 参数 → 输出“Hello, name!”

### **题目2：写一个** `Max()` **方法**

重载为：

- 传入两个整数，返回最大值
- 传入两个小数，返回最大值
- 传入三个整数，返回最大值

### **题目3：写一个**`Print()`**方法**

*要求：写一个 `Print` 方法，支持打印整数、字符串和小数。**

- 定义三个重载方法：
  - `Print(int number)`
  - `Print(string text)`
  - `Print(double number)`
- 在 `Main` 方法里分别调用这三种方法。

```
Print(100);
Print("Hello C#");
Print(3.14);
```

### **题目4：写一个**`Area()`**方法**

**要求：能计算不同图形的面积。**

- `Area(int side)` —— 计算正方形面积
- `Area(int length, int width)` —— 计算矩形面积
- `Area(double radius)` —— 计算圆的面积（πr²，用 `3.14` 替代 π）

```
Console.WriteLine(Area(5));        // 正方形面积
Console.WriteLine(Area(5, 10));    // 矩形面积
Console.WriteLine(Area(2.5));      // 圆的面积
```

------

### **题目5：写一个** `Add` **方法\****

要求：支持两数相加、三数相加、以及两个小数相加。**

- `Add(int a, int b)`
- `Add(int a, int b, int c)`
- `Add(double a, double b)`

尝试调用：

```
Console.WriteLine(Add(2, 3));      
Console.WriteLine(Add(1, 2, 3));  
Console.WriteLine(Add(2.5, 3.5)); 
```

参考答案：

```
class Calculator
{
    // 加法（两个整数）
    public int Add(int a, int b)
    {
        return a + b;
    }

    // 加法（两个小数）
    public double Add(double a, double b)
    {
        return a + b;
    }

    // 加法（三个整数）
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}
```

### **题目6： 写一个** `Greet` **方法，**

**要求：**

- `Greet()` —— 输出 “你好！”
- `Greet(string name)` —— 输出 “你好，某某！”
- `Greet(string name, int age)` —— 输出 “你好，某某，你今年X岁了！”

👉 **提示**： 调用：

```
Greet();
Greet("小明");
Greet("小红", 18);
```

------

### **题目7：写一个** `Count` **方法，**

**要求：** 能统计不同类型数组的长度。

- `Count(int[] numbers)` —— 输出整数数组的元素个数
- `Count(string[] words)` —— 输出字符串数组的元素个数

👉 **提示**：

```
int[] nums = {1, 2, 3, 4};
string[] names = {"Tom", "Jerry"};

Console.WriteLine(Count(nums));    // 输出 4
Console.WriteLine(Count(names));   // 输出 2
```

------

练习总结

1. 方法重载的基本概念（同名不同参）。
2. 如何根据 **参数个数**、**参数类型** 来区分重载方法。
3. 在真实场景里，重载方法能让代码更直观。