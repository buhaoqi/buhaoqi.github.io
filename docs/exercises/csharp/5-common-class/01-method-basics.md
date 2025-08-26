---
noteId: "b88f7d605de911f0a1a33da03f8ebbc2"
tags: []

---

以下是 **10 道 C# 方法的基础应用题**，适合初学者练习理解方法的定义、调用、参数传递、返回值等基本概念。

---

## 1：定义一个无参无返回值的方法

**要求**：定义一个方法 `SayHello()`，调用它时输出：`Hello, C#`。

---

## 2：定义一个带一个参数的方法

**要求**：定义一个方法 `Greet(string name)`，调用它时输出：`Hello, name`，如：`Hello, Tom`。

---

## 3：定义一个返回整数的加法方法

**要求**：定义一个方法 `Add(int a, int b)`，返回 `a + b` 的结果。

---

## 4：定义一个判断偶数的方法

**要求**：定义一个方法 `IsEven(int number)`，返回 `true` 如果是偶数，否则返回 `false`。

---

## 5：定义一个方法计算数组中所有元素的和

**要求**：定义方法 `SumArray(int[] arr)`，返回数组所有元素的和。

---

## 6：定义一个方法输出指定次数的字符串

**要求**：定义方法 `RepeatPrint(string msg, int times)`，在控制台重复输出字符串 `msg` 共 `times` 次。

---

## 7：定义一个返回最大值的方法

**要求**：定义方法 `Max(int a, int b)`，返回较大的数。

---

## 8：定义一个带默认参数的方法

**要求**：定义方法 `PrintMessage(string message = "Welcome")`，调用时如果没传入参数，就输出默认信息。

---

## 9：交换两个变量的值（使用 ref）

**要求**：定义方法 `Swap(ref int a, ref int b)`，实现 a 和 b 的值交换。

---

## 10：判断一个数是否为质数

**要求**：定义方法 `IsPrime(int n)`，如果是质数返回 true，否则返回 false。

---

## 参考答案
以下是前面 10 道 **C# 方法基础应用题的参考答案与讲解**，非常适合初学者练习：

---

### 1：定义一个无参无返回值的方法

**题目**：定义一个方法 `SayHello()`，调用它时输出：`Hello, C#`。
**答案**：

```csharp
void SayHello()
{
    Console.WriteLine("Hello, C#");
}
```

**调用示例**：

```csharp
SayHello();
```

---

### 2：定义一个带一个参数的方法

**题目**：定义一个方法 `Greet(string name)`，调用它时输出：`Hello, name`。
**答案**：

```csharp
void Greet(string name)
{
    Console.WriteLine("Hello, " + name);
}
```

**调用示例**：

```csharp
Greet("Tom");
```

---

### 3：返回整数加法的方法

**题目**：定义一个方法 `Add(int a, int b)`，返回 `a + b` 的结果。
**答案**：

```csharp
int Add(int a, int b)
{
    return a + b;
}
```

**调用示例**：

```csharp
int result = Add(5, 3);
Console.WriteLine(result); // 输出 8
```

---

### 4：判断是否为偶数的方法

**题目**：定义一个方法 `IsEven(int number)`，返回是否为偶数。
**答案**：

```csharp
bool IsEven(int number)
{
    return number % 2 == 0;
}
```

**调用示例**：

```csharp
Console.WriteLine(IsEven(6));  // 输出 True
Console.WriteLine(IsEven(5));  // 输出 False
```

---

### 5：计算数组中所有元素的和

**题目**：定义方法 `SumArray(int[] arr)`，返回数组所有元素之和。
**答案**：

```csharp
int SumArray(int[] arr)
{
    int sum = 0;
    foreach (int num in arr)
    {
        sum += num;
    }
    return sum;
}
```

**调用示例**：

```csharp
int[] nums = { 1, 2, 3, 4 };
Console.WriteLine(SumArray(nums));  // 输出 10
```

---

### 6：重复输出字符串

**题目**：定义方法 `RepeatPrint(string msg, int times)`，重复输出指定字符串。
**答案**：

```csharp
void RepeatPrint(string msg, int times)
{
    for (int i = 0; i < times; i++)
    {
        Console.WriteLine(msg);
    }
}
```

**调用示例**：

```csharp
RepeatPrint("Hello", 3); // 输出三次 Hello
```

---

### 7：返回最大值的方法

**题目**：定义方法 `Max(int a, int b)`，返回较大者。
**答案**：

```csharp
int Max(int a, int b)
{
    return (a > b) ? a : b;
}
```

**调用示例**：

```csharp
Console.WriteLine(Max(10, 7)); // 输出 10
```

---

### 8：默认参数的方法

**题目**：定义方法 `PrintMessage(string message = "Welcome")`。
**答案**：

```csharp
void PrintMessage(string message = "Welcome")
{
    Console.WriteLine(message);
}
```

**调用示例**：

```csharp
PrintMessage();           // 输出 Welcome
PrintMessage("Hi!");      // 输出 Hi!
```

---

### 9：交换两个变量的值（使用 ref）

**题目**：定义方法 `Swap(ref int a, ref int b)`，交换两个变量的值。
**答案**：

```csharp
void Swap(ref int a, ref int b)
{
    int temp = a;
    a = b;
    b = temp;
}
```

**调用示例**：

```csharp
int x = 3, y = 5;
Swap(ref x, ref y);
Console.WriteLine($"x = {x}, y = {y}"); // x = 5, y = 3
```

---

### 10：判断一个数是否是质数

**题目**：定义方法 `IsPrime(int n)`，判断一个整数是否为质数。
**答案**：

```csharp
bool IsPrime(int n)
{
    if (n <= 1) return false;
    for (int i = 2; i <= Math.Sqrt(n); i++)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}
```

**调用示例**：

```csharp
Console.WriteLine(IsPrime(7)); // 输出 True
Console.WriteLine(IsPrime(10)); // 输出 False
```

---

