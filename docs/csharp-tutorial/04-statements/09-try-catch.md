---
noteId: "3a059650797311f096197f4ef3b2c3fb"
tags: []

---

在 C# 中，`try-catch` 是用于**异常处理（Exception Handling）**的核心语句结构，它的主要作用是**捕获并处理程序运行时可能发生的错误或异常，防止程序因未处理的异常而崩溃，并允许开发者优雅地应对错误情况**。

---

## 一、什么是异常（Exception）？

在程序运行过程中，如果发生了某些**意外情况**（比如除以零、文件不存在、网络中断、空引用等），CLR（公共语言运行时）或代码本身就会抛出一个 **异常（Exception）对象**。如果没有捕获并处理这些异常，程序通常会**终止运行并显示错误信息**。

🔴 **未处理的异常会导致程序中断！**

---

## 二、`try-catch` 的作用

`try-catch` 的作用是：

| 功能 | 说明 |
|------|------|
| 🧩 **`try` 块** | 包含可能会抛出异常的代码 |
| 🛡️ **`catch` 块** | 捕获并处理 `try` 块中发生的指定异常，防止程序崩溃 |
| ✅ **目的** | 提高程序的**健壮性（Robustness）和容错能力**，让程序在出错时依然能优雅处理，而不是直接闪退 |

---

## 三、`try-catch` 的基本语法

```csharp
try
{
    // 可能会抛出异常的代码
}
catch (ExceptionType ex)  // 可选，指定要捕获的异常类型
{
    // 异常发生时执行的代码，可以记录日志、提示用户、恢复操作等
}
```

### 🔄 完整结构（还可包含 `finally`）

```csharp
try
{
    // 可能抛出异常的代码
}
catch (ExceptionType1 ex)
{
    // 处理 ExceptionType1 类型的异常
}
catch (ExceptionType2 ex)
{
    // 处理 ExceptionType2 类型的异常
}
catch (Exception ex)      // 捕获所有其他未处理的异常
{
    // 处理其他类型的异常
}
finally
{
    // 无论是否发生异常，都会执行的代码（如释放资源）
}
```

---

## 四、`try-catch` 的详细用法与示例

---

### ✅ 示例 1：基本 try-catch（捕获所有异常）

```csharp
try
{
    int a = 10;
    int b = 0;
    int result = a / b; // 抛出 DivideByZeroException
    Console.WriteLine(result);
}
catch
{
    Console.WriteLine("发生了某个错误，但不知道具体是什么。");
}
```

**输出：**
```
发生了某个错误，但不知道具体是什么。
```

> ⚠️ 这种写法捕获了所有异常，但没有指明异常类型，也不知道具体错误信息，一般不推荐在生产代码中这样使用。

---

### ✅ 示例 2：捕获特定异常（推荐）

```csharp
try
{
    int a = 10;
    int b = 0;
    int result = a / b; // 抛出 DivideByZeroException
    Console.WriteLine(result);
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"除零错误：{ex.Message}");
}
```

**输出：**
```
除零错误：Attempted to divide by zero.
```

> ✅ 捕获了具体的异常类型 `DivideByZeroException`，可以更准确地处理该类错误，并访问异常对象 `ex` 中的详细信息（如 `Message`、`StackTrace` 等）。

---

### ✅ 示例 3：捕获多个不同类型的异常

```csharp
try
{
    string str = null;
    Console.WriteLine(str.Length); // 抛出 NullReferenceException

    int a = 10;
    int b = 0;
    int c = a / b; // 不会执行到这里
}
catch (NullReferenceException ex)
{
    Console.WriteLine($"空引用异常：{ex.Message}");
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"除零异常：{ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"其他异常：{ex.Message}");
}
```

**输出：**
```
空引用异常：Object reference not set to an instance of an object.
```

> ✅ 可以按照优先级捕获多个不同类型的异常，**越具体的异常应该越靠前**，最通用的 `Exception` 放最后。

---

### ✅ 示例 4：使用 `finally` 执行清理操作

`finally` 块中的代码**无论是否发生异常都会执行**，常用于释放资源，如关闭文件、数据库连接等。

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("test.txt", FileMode.Open);
    // 读取文件等操作
    Console.WriteLine("文件已打开，进行操作...");
}
catch (FileNotFoundException ex)
{
    Console.WriteLine($"文件未找到：{ex.Message}");
}
finally
{
    if (fs != null)
    {
        fs.Close();
        Console.WriteLine("文件流已关闭。");
    }
}
```

> ✅ 即使发生异常或者没有异常，`finally` 中的代码都会执行，用于保证资源释放。

🔒 **提示：** 在实际开发中，推荐使用 `using` 语句来自动管理实现了 `IDisposable` 的资源（如 `FileStream`、`SqlConnection` 等），它会在代码块结束后自动调用 `Dispose()`，效果类似 `finally`，但更简洁安全。

---

## 五、`try-catch` 的关键组成部分详解

| 部分 | 是否必须 | 说明 |
|------|----------|------|
| `try` | ✅ 必须 | 包含可能抛出异常的代码块 |
| `catch` | ❌ 可选 | 捕获并处理异常，可以有多个，通常按异常类型从具体到通用排序 |
| `finally` | ❌ 可选 | 无论是否发生异常都会执行的代码块，常用于资源清理 |

---

## 六、异常对象（Exception 类）

当异常被抛出时，C# 会创建一个**异常对象**，它通常是 `System.Exception` 类型或其派生类（如 `DivideByZeroException`、`NullReferenceException`、`FileNotFoundException` 等）。

你可以在 `catch` 块中通过参数（通常命名为 `ex`）访问异常信息：

| 属性/方法 | 说明 |
|-----------|------|
| `ex.Message` | 异常的描述信息（最常用） |
| `ex.StackTrace` | 异常发生时的调用堆栈，用于调试 |
| `ex.InnerException` | 内部异常（如果有嵌套异常） |
| `ex.GetType()` | 获取异常的类型 |

🔍 示例：

```csharp
try
{
    int[] arr = new int[3];
    Console.WriteLine(arr[10]); // 越界访问，抛出 IndexOutOfRangeException
}
catch (IndexOutOfRangeException ex)
{
    Console.WriteLine($"发生数组越界：{ex.Message}");
    Console.WriteLine($"堆栈跟踪：{ex.StackTrace}");
}
```

---

## 七、常见异常类型（部分）

| 异常类 | 说明 |
|--------|------|
| `DivideByZeroException` | 除以零时抛出 |
| `NullReferenceException` | 访问 null 对象的成员时抛出 |
| `IndexOutOfRangeException` | 数组、集合下标越界时抛出 |
| `FileNotFoundException` | 文件未找到时抛出 |
| `ArgumentException` / `ArgumentNullException` | 参数无效或为 null |
| `FormatException` | 字符串格式不正确（如解析数字失败） |
| `IOException` | 输入输出操作失败（如读写文件错误） |

---

## 八、最佳实践与建议

| 建议 | 说明 |
|------|------|
| ✅ **只捕获你能够处理的异常** | 不要盲目地捕获所有异常而不做处理，这会隐藏问题 |
| ✅ **优先捕获具体的异常类型** | 比如 `FileNotFoundException` 而不是通用的 `Exception` |
| ✅ **把通用的 `catch (Exception)` 放在最后** | 确保更具体的异常不会被漏掉 |
| ✅ **记录异常信息（如日志）** | 在 `catch` 中记录异常详情，便于排查问题 |
| ✅ **避免空的 catch 块** | 如 `catch {}` 或 `catch (Exception) {}`，这会导致异常被静默吞噬 |
| ✅ **使用 `finally` 或 `using` 释放资源** | 比如关闭文件、数据库连接等 |
| ✅ **不要用异常来控制程序逻辑** | 异常处理开销较大，应该用条件判断来避免可预见的错误 |

---

## 九、完整示例代码

```csharp
using System;

class Program
{
    static void Main()
    {
        try
        {
            Console.WriteLine("请输入一个数字：");
            string input = Console.ReadLine();
            int number = int.Parse(input); // 可能抛出 FormatException 或 OverflowException

            int result = 100 / number;
            Console.WriteLine($"结果是：{result}");
        }
        catch (FormatException)
        {
            Console.WriteLine("输入的不是有效的数字格式！");
        }
        catch (OverflowException)
        {
            Console.WriteLine("数字太大或太小！");
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("不能除以零！");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"发生了未预料的错误：{ex.Message}");
        }
        finally
        {
            Console.WriteLine("程序执行完毕（无论是否异常）。");
        }
    }
}
```

---

## ✅ 总结一句话：

> **C# 中的 `try-catch` 语句用于捕获和处理程序运行时可能发生的异常，防止程序因错误而崩溃，提高代码的健壮性和用户体验。合理使用 `try`、`catch` 和 `finally`，可以让你的应用更加可靠、安全与易于维护。**

---

### 🧠 如果你想了解：

- `try-catch` 在 **异步方法（async/await）** 中的用法
- **自定义异常类** 如何定义与抛出
- **throw** 语句如何主动抛出异常
- `using` 语句与资源管理的关系

欢迎继续提问！我可以为你详细讲解这些进阶主题。