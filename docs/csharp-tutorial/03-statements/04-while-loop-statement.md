---
noteId: "bce131d04f2311f0adaee17699ef0195"
tags: []

---

当然可以！下面是对 **C# 中 `while` 循环**的详细讲解，适合初学者理解和掌握。

---

## 🌀 一、什么是 `while` 循环？

`while` 是 C# 中最基本的循环结构之一。

> 它的含义是：**“只要某个条件为真，就一直重复执行某段代码。”**

---

## 🧱 二、基本语法结构

```csharp
while (条件表达式)
{
    // 循环体代码：反复执行的内容
}
```

### 📌 执行逻辑：

1. 先判断“条件表达式”
2. 如果为 `true`，就执行 `{}` 中的循环体
3. 执行完一次后，再回到第1步判断
4. 如果条件为 `false`，循环终止，跳出循环体

---

## 🧪 三、简单示例：输出1到5

```csharp
int i = 1;
while (i <= 5)
{
    Console.WriteLine(i);
    i++;
}
```

🔍 输出结果：

```
1
2
3
4
5
```

### 📌 说明：

* 初始值：`i = 1`
* 条件：`i <= 5`，为真则执行
* 每轮循环后：`i++`，控制循环结束

---

## ⚠️ 四、常见问题

### ❗ 忘记更新变量，造成死循环

```csharp
int i = 1;
while (i <= 5)
{
    Console.WriteLine(i);
    // 没有 i++，永远 i == 1
}
```

🔁 结果：死循环，程序一直打印 `1`

---

## 🧠 五、while 与 for 的区别

| 项目   | `while`    | `for`          |
| ---- | ---------- | -------------- |
| 结构位置 | 只写条件       | 初始化、条件、更新都写在一行 |
| 适合场景 | 条件未知、等待类操作 | 计数器控制的明确循环     |
| 可读性  | 更灵活但不够集中   | 更紧凑，适合控制次数的循环  |

---

## 🧩 六、一个典型练习题：让用户输入密码，直到正确为止

```csharp
string password = "";
while (password != "123456")
{
    Console.Write("请输入密码：");
    password = Console.ReadLine();
}
Console.WriteLine("密码正确，欢迎进入系统！");
```

---

## 🚧 七、跳出和继续：`break` 和 `continue`

* `break`：立即跳出整个循环
* `continue`：跳过当前这次，进入下一轮

```csharp
int i = 0;
while (i < 10)
{
    i++;
    if (i == 5) continue; // 跳过5
    if (i == 8) break;    // 到8就跳出
    Console.WriteLine(i);
}
```

输出：

```
1
2
3
4
6
7
```

---

## ✅ 八、小结

* `while` 是判断先行的循环，**只要条件为真就会一直执行**
* 一定要注意变量的更新，避免死循环
* 常用于**循环次数不确定、等待某种条件满足时**

---

需要我为你画一个“while 循环执行流程图”或者设计几道巩固练习题吗？只要说一声就好！



当然可以，以下是 **C# 中 `while` 循环的几种常见用法总结**，适合初学者快速掌握和复习：

---

## ✅ `while` 循环的 5 种常见用法

| 用法类型                     | 说明                   | 示例场景         |
| ------------------------ | -------------------- | ------------ |
| ① **固定次数循环**             | 用计数变量控制循环次数          | 输出 1\~100    |
| ② **直到满足条件为止**           | 条件未知，直到用户输入/事件发生     | 登录验证、输入合法性检查 |
| ③ **死循环（无限循环）**          | 一直执行，通常配合 `break` 跳出 | 游戏主循环、服务器监听  |
| ④ **等待某种状态变化**           | 等待标志位、状态值变化          | 等待外部资源准备就绪   |
| ⑤ **过滤+跳过（配合 continue）** | 条件不满足时跳过本次           | 输出偶数、跳过特定元素  |

---

## 🧪 示例说明

### ① 固定次数循环（等价于 for）

```csharp
int i = 1;
while (i <= 5)
{
    Console.WriteLine(i);
    i++;
}
```

📌 输出 1 到 5。

---

### ② 直到满足条件为止（常用于输入验证）

```csharp
string input;
while (true)
{
    Console.Write("请输入yes继续：");
    input = Console.ReadLine();
    if (input == "yes")
        break;
}
```

📌 一直循环直到输入 "yes"。

---

### ③ 死循环（无限运行，配合 `break` 控制退出）

```csharp
while (true)
{
    string cmd = Console.ReadLine();
    if (cmd == "exit")
        break;
    Console.WriteLine("你输入了：" + cmd);
}
```

📌 控制台程序主循环。

---

### ④ 等待状态变化（状态轮询）

```csharp
bool isReady = false;
while (!isReady)
{
    Console.WriteLine("等待系统就绪...");
    Thread.Sleep(1000); // 暂停1秒
    isReady = CheckSystemStatus(); // 假设这是你自己写的函数
}
```

📌 适合网络连接、进度加载等场景。

---

### ⑤ 跳过特定条件（使用 continue）

```csharp
int i = 0;
while (i < 10)
{
    i++;
    if (i % 2 == 0) continue; // 跳过偶数
    Console.WriteLine(i);     // 只打印奇数
}
```

📌 跳过某些不需要处理的情况。

---

## 🎯 小结口诀：

> `while` 用得好，控制条件要记牢；
> 固定次数靠变量，输入判断能验证；
> 无限循环配 `break`，状态轮询别太快；
> 过滤条件用 `continue`，逻辑清晰不出错。

---

如果你想，我可以把这些用法制作成一张图表/图解，或者提供几道巩固练习题，是否需要？



# while 循环

while 循环在未知循环次数的前提下，满足指定条件时重复执行代码块。下面将介绍 while 循环的语法、用法和实际应用场景。

## 一、基本语法

```csharp
while (条件表达式)
{
    // 循环体代码
}
```
**执行流程**：

1. 计算条件表达式
2. 如果结果为 `true`，执行循环体
3. 重复步骤1-2，直到条件为 `false`

**特点：**

- 先判断条件再执行循环
- 适合不确定循环次数的情况
- 条件为true时继续循环


## 二、基本用法

### 用法1:基础循环(计数器)

```csharp
int count = 0;
while (count < 5)
{
    Console.WriteLine($"当前计数: {count}");
    count++;
}
```
### 用法2:遍历集合(替代foreach)

```csharp
List<string> names = new List<string> { "Alice", "Bob", "Charlie" };
int index = 0;
while (index < names.Count)
{
    Console.WriteLine(names[index]);
    index++;
}
```
### 用法3:嵌套 while 循环

```csharp
int i = 1;
while (i <= 3)
{
    int j = 1;
    while (j <= i)
    {
        Console.Write(j + " ");
        j++;
    }
    Console.WriteLine();
    i++;
}
```
### 用法4:循环控制

与 break/continue 配合使用

```csharp
int num = 0;
while (num < 10)
{
    num++;
    if (num % 3 == 0)
        continue; // 跳过3的倍数
    
    if (num == 8)
        break; // 提前终止循环
    
    Console.WriteLine(num);
}
```

### 用法5:无限循环

```csharp
while (true)
{
    // 需要配合break语句退出
    Console.WriteLine("持续运行...");
    if (DateTime.Now.Second == 30)
        break;
}
```

## 三、While与for循环对比

| 特性        | while 循环                  | for 循环                      |
|------------|----------------------------|------------------------------|
| **初始化**  | 在循环外部进行              | 在循环语句内部进行            |
| **条件**    | 仅包含条件表达式            | 包含初始化、条件和迭代三部分  |
| **迭代**    | 在循环体内手动控制          | 在循环语句内部自动控制        |
| **适用场景**| 不确定循环次数的情况        | 已知或可计算循环次数的情况    |


## 四、实际应用场景

### 1. 游戏主循环

```csharp
bool gameRunning = true;
while (gameRunning)
{
    // 处理输入
    // 更新游戏状态
    // 渲染画面
    
    if (player.Health <= 0)
        gameRunning = false;
}
```

### 2. 文件读取

```csharp
using (StreamReader reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}
```

### 3. 网络请求处理

```csharp
bool waitingForResponse = true;
while (waitingForResponse)
{
    if (CheckNetworkResponse())
    {
        ProcessResponse();
        waitingForResponse = false;
    }
    else
    {
        Thread.Sleep(1000); // 等待1秒再检查
    }
}
```

## 五、注意事项

1. **避免无限循环**：确保循环条件最终会变为 false
2. **性能考虑**：循环体内的操作应尽可能高效
3. **可读性**：复杂的循环条件应考虑拆分为多个简单条件
4. **资源释放**：确保在循环中正确释放资源（如文件句柄、数据库连接等）

## 六、最佳实践

1. **优先使用 foreach**：当遍历集合时，foreach 通常更安全简洁
2. **明确退出条件**：确保循环有明确的终止条件
3. **限制循环次数**：对于可能无限循环的情况，添加安全计数器
   ```csharp
   int safetyCounter = 0;
   while (condition && safetyCounter++ < 1000)
   {
       // 循环体
   }
   ```

## 七、性能优化技巧

1. **将不变的计算移到循环外**：
   ```csharp
   int length = list.Count; // 预先计算
   while (index < length)
   {
       // ...
   }
   ```

2. **减少循环内的对象创建**：
   ```csharp
   StringBuilder sb = new StringBuilder(); // 循环外创建
   while (condition)
   {
       sb.Append(data); // 复用对象
   }
   ```

3. **避免在循环中调用昂贵的方法**：
   ```csharp
   // 不佳
   while (condition)
   {
       var result = ExpensiveOperation();
   }
   
   // 优化
   var precomputed = PrecomputeValues();
   while (condition)
   {
       var result = precomputed.GetValue();
   }
   ```
