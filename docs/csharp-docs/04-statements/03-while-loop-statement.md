---
noteId: "bce131d04f2311f0adaee17699ef0195"
tags: []

---
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
