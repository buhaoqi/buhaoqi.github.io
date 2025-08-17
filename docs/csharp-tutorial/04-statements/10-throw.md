---
noteId: "5f3ba630797311f096197f4ef3b2c3fb"
tags: []

---

在 C# 中，`throw` 是一个用于**主动抛出异常（Exception）**的关键字，它是 **异常处理机制中非常重要的一部分**。通过 `throw`，你可以在代码中**手动引发一个异常**，用于表示某个错误条件或非法状态，从而通知调用者出现了问题，应该进行适当的处理。

---

## 一、`throw` 的作用

| 功能 | 说明 |
|------|------|
| 🚨 **主动抛出异常** | 当程序逻辑检测到**非法状态、无效参数、错误条件等**时，可以使用 `throw` 主动抛出一个异常对象 |
| 🔁 **触发异常处理流程** | 抛出的异常会被上层的 `try-catch` 块捕获（如果有的话），否则会导致程序中断 |
| 🧩 **与 `try-catch` 配合使用** | 通常 `throw` 用于方法内部，而调用方用 `try-catch` 来处理可能抛出的异常 |
| ⚙️ **可抛出系统异常或自定义异常** | 可以抛出 .NET 提供的内置异常类（如 `ArgumentException`），也可以抛出自定义的异常类 |

---

## 二、`throw` 的基本语法

### 1. 抛出一个已有的异常对象

```csharp
throw 异常对象;
```

- 这里的异常对象通常是 `System.Exception` 类或其子类的一个实例，比如：
  - `ArgumentException`
  - `ArgumentNullException`
  - `InvalidOperationException`
  - `NullReferenceException`（一般不建议手动抛出）
  
### 2. 抛出一个新异常（常用）

```csharp
throw new 异常类型("错误信息");
```

---

## 三、`throw` 的常见用法与示例

---

### ✅ 示例 1：抛出一个异常（基础用法）

```csharp
void CheckAge(int age)
{
    if (age < 0)
    {
        throw new ArgumentException("年龄不能为负数！");
    }
    Console.WriteLine($"年龄是：{age}");
}

// 调用（会抛出异常）
CheckAge(-5);
```

🔴 **运行结果：程序抛出 `ArgumentException` 并中断（如果没有被捕获的话）**

> 如果此方法被其它代码调用，并且被 `try-catch` 包裹，则异常会被捕获处理。

---

### ✅ 示例 2：在方法中验证参数并抛出异常（推荐做法）

```csharp
void PrintName(string name)
{
    if (string.IsNullOrEmpty(name))
    {
        throw new ArgumentNullException(nameof(name), "姓名不能为空或 null");
    }

    Console.WriteLine($"你好，{name}！");
}

// 调用
PrintName(null); // 将抛出 ArgumentNullException
```

🔒 **说明：**
- 使用 `ArgumentNullException` 是一种**良好的编程实践**，它明确告诉调用者：“你传的参数有问题”。
- `nameof(name)` 是编译时安全的写法，避免硬编码字符串 `"name"`。

---

### ✅ 示例 3：重新抛出异常（保留原始异常信息）

有时你在捕获一个异常后，想**先记录日志或处理一部分逻辑，然后再次将异常抛出去**，让上层调用者知道发生了错误。

#### 方法 1：直接 `throw;`（推荐，保留堆栈信息）

```csharp
void ProcessData()
{
    try
    {
        int a = 10;
        int b = 0;
        int c = a / b; // 抛出 DivideByZeroException
    }
    catch (Exception ex)
    {
        Console.WriteLine($"内部捕获到异常：{ex.Message}");
        throw; // 重新抛出当前异常，保留原始调用堆栈
    }
}
```

> ✅ 使用 `throw;`（不带参数）可以重新抛出**当前异常对象**，而且**不会重置异常的堆栈跟踪信息（StackTrace）**，便于调试。

#### 方法 2：使用 `throw ex;`（不推荐，会重置堆栈信息）

```csharp
catch (Exception ex)
{
    Console.WriteLine("发生错误");
    throw ex; // ❌ 不推荐！会重置异常堆栈，丢失原始出错位置
}
```

> ⚠️ **注意：** `throw ex;` 会**重新设置异常的抛出位置为当前代码行**，导致调试时难以追踪真正的错误源。所以一般应避免使用，优先使用 `throw;`。

---

### ✅ 示例 4：抛出自定义异常（进阶用法）

你可以定义自己的异常类（继承自 `Exception`），然后在适当的时候抛出它，用于表示特定的业务逻辑错误。

#### 步骤 1：定义自定义异常类

```csharp
public class InvalidOperationExceptionCustom : Exception
{
    public InvalidOperationExceptionCustom(string message) 
        : base(message)
    {
    }

    public InvalidOperationExceptionCustom(string message, Exception inner)
        : base(message, inner)
    {
    }
}
```

#### 步骤 2：在代码中抛出自定义异常

```csharp
void StartEngine(bool isFuelAvailable)
{
    if (!isFuelAvailable)
    {
        throw new InvalidOperationExceptionCustom("引擎启动失败：没有燃油！");
    }
    Console.WriteLine("引擎已启动");
}

// 调用
try
{
    StartEngine(false);
}
catch (InvalidOperationExceptionCustom ex)
{
    Console.WriteLine($"自定义异常：{ex.Message}");
}
```

**输出：**
```
自定义异常：引擎启动失败：没有燃油！
```

> ✅ 自定义异常能更准确地表达业务语义，便于调用方针对特定错误类型进行处理。

---

## 四、`throw` 的常见使用场景

| 场景 | 说明 | 示例 |
|------|------|------|
| **参数验证失败** | 当传入的方法参数不合法时，抛出 `ArgumentNullException`、`ArgumentException` 等 | `if (value == null) throw new ArgumentNullException(...)` |
| **非法状态** | 对象处于不允许操作的状态时抛出异常，比如未初始化、已释放等 | `if (!_initialized) throw new InvalidOperationException(...)` |
| **业务规则不满足** | 比如余额不足、年龄不符合要求等 | `if (age < 18) throw new Exception("年龄必须大于18岁");`（推荐自定义异常） |
| **捕获后重新抛出** | 捕获异常、记录日志等操作后，再重新抛出异常 | `catch { log(); throw; }` |
| **表示程序错误或 Bug** | 比如在 Debug 模式下检测到不应该发生的情况 | `Debug.Assert(...); 或 throw new InvalidOperationException(...)` |

---

## 五、`throw` vs `throw ex`（重要区别）

| 表达式 | 是否推荐 | 堆栈跟踪信息 | 说明 |
|--------|----------|--------------|------|
| `throw;` | ✅ 推荐 | **保留原始堆栈信息**，可追踪到真正抛出异常的位置 | 重新抛出当前异常对象 |
| `throw ex;` | ❌ 不推荐 | **重置堆栈信息为当前行**，丢失原始错误位置，不利于调试 | 重新抛出的是一个新的异常副本 |

🔒 **最佳实践：**  
> 总是优先使用 `throw;` 来重新抛出异常，除非你有特殊需求并且明确知道后果。

---

## 六、总结表格

| 项目 | 说明 |
|------|------|
| **`throw` 的作用** | 主动抛出一个异常，通知调用方发生了错误或非法状态 |
| **语法** | `throw new ExceptionType("message");` 或 `throw;`（重新抛出） |
| **常用异常类型** | `ArgumentException`、`ArgumentNullException`、`InvalidOperationException`、自定义异常等 |
| **与 `try-catch` 配合** | 异常可被上层的 `try-catch` 捕获并处理 |
| **重新抛出异常** | 使用 `throw;` 保留原始堆栈信息；避免使用 `throw ex;` |
| **自定义异常** | 可通过继承 `Exception` 类定义业务相关的异常类型 |

---

## ✅ 总结一句话：

> **C# 中的 `throw` 语句用于主动抛出一个异常对象，是进行错误通知、参数校验、状态控制和异常处理的重要机制。合理使用 `throw`，配合 `try-catch` 和自定义异常，可以让你的程序更加健壮、清晰和易于维护。**

---

### 🧠 想继续深入学习？

- 如何定义和使用 **自定义异常类**
- `throw` 在 **异步方法（async/await）** 中的行为
- 如何在 **构造函数** 中抛出异常
- 异常处理的 **最佳实践与设计原则**

欢迎继续提问！我可以为你提供更深入的示例和指导。