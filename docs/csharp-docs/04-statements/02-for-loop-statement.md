---
noteId: "ca33f970460511f08a53dd9fb031ea51"
tags: []

---

循环语句用于控制语句的重复执行。C# 提供了多种循环语句以适应不同场景。掌握 `for` 循环后，可灵活处理大多数需要重复执行的逻辑！下面我将全面介绍 C# 中的各种循环语句及其应用。

- for 循环
- while 循环
- do-while 循环
- foreach 循环

## 一、定义
`for` 循环在已知循环次数的前提下，满足指定条件时重复执行代码块。它的语法清晰且灵活，适用于已知循环次数的场景。
## 二、语法
```csharp
for (初始化语句; 循环条件; 迭代语句)
{
    // 循环体
}
```
参数说明

- 初始化语句：在循环开始时执行一次（通常用于定义计数器变量）。
- 循环条件：每次循环前检查，若为 `true` 则执行循环体，否则退出。
- 迭代语句：每次循环后执行（通常用于更新计数器）。


执行流程

1. 在初始化语句中：定义变量，并初始化。
2. 在循环条件中检测，检测变量是否符合条件。
      - 符合条件 → 执行循环体内的代码。
      - 不符合条件 → 退出循环
3. 在迭代器中迭代变量的值。
4. 重复步骤 2-4，直到变量检测不符合条件时退出循环。

## 三、for循环用法
### 用法1:基础循环
```c#
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i); // 输出 0, 1, 2, 3, 4
}
```
执行流程

1. `int i = 0` → 初始化计数器 `i` 为 `0`。
2. `i < 5` → 检查条件，若 `true` 则进入循环体。
3. `Console.WriteLine(i)` → 执行循环代码。
4. `i++` → 计数器 `i` 自增 1。
5. 重复步骤 2-4，直到 `i >= 5` 时退出循环。

### 用法2:遍历数组
```c#
string[] fruits = { "Apple", "Banana", "Cherry" };
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruits[i]);
}
```

### 用法3:条件循环

1.输出特定元素
```c#
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)  // 判断是否为偶数
    {
        Console.WriteLine(i);  // 输出：2,4,6,8,10
    }
}
```

2.输出特定元素
```c#
string[] fruits = { "苹果", "香蕉", "橙子", "葡萄", "西瓜" };
string target = "橙子";
bool found = false;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i] == target)
    {
        found = true;
        Console.WriteLine($"找到'{target}'，索引位置：{i}");
        break;  // 找到后立即退出循环
    }
}

if (!found)
{
    Console.WriteLine($"未找到'{target}'");
}
```
3.分类输出
```c#
int[] scores = { 85, 92, 67, 54, 78, 43 };
for (int i = 0; i < scores.Length; i++)
{
    Console.Write($"学生{i+1}成绩{scores[i]}：");
    
    if (scores[i] >= 90)
        Console.WriteLine("优秀");
    else if (scores[i] >= 80)
        Console.WriteLine("良好");
    else if (scores[i] >= 60)
        Console.WriteLine("及格");
    else
        Console.WriteLine("不及格");
}
```

### 用法4:嵌套循环

```c#
for (int i = 1; i <= 9; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write($"{j}×{i}={i * j}\t");
    }
    Console.WriteLine(); // 换行
}
```
### 用法5:多变量循环
**示例：**
```csharp
// 多变量控制
for (int i = 0, j = 10; i < j; i++, j--)
{
    Console.WriteLine($"i={i}, j={j}");
}
```

### 用法6:循环控制
#### break语句

break 语句的用途：立即终止当前循环。常用于switch语句或循环中。
```c#
for (int i = 0; i < 10; i++)
{
    if (i == 5) break;
    Console.WriteLine(i); // 只输出0-4
}
```

#### continue语句
continue 语句的用途：跳过当前迭代，继续下一次循环。仅用于循环结构中。
```c#
for (int i = 0; i < 5; i++)
{
    if (i == 2) continue;
    Console.WriteLine(i); // 输出0,1,3,4
}
```
### 用法6:无限循环

```csharp
// 方式2
for (;;)
{
    // 需要break退出
}
```
## 四、特点

- 明确知道循环次数时最适用
- 初始化、条件和迭代三部分都可自定义
- 支持多变量控制

## 五、循环性能优化

1.**预先计算循环边界**
```csharp
int length = list.Count;
for (int i = 0; i < length; i++) { /*...*/ }
```

2.**减少循环内部计算**
```csharp
// 不佳
for (int i = 0; i < list.Count; i++) { /*...*/ }

// 优化
int count = list.Count;
for (int i = 0; i < count; i++) { /*...*/ }
```
3.**避免在循环中创建对象**
```csharp
StringBuilder sb = new StringBuilder(); // 循环外创建
for (int i = 0; i < 100; i++)
{
    sb.Append(i); // 复用对象
}
```

**4. 性能注意事项**
- **避免重复计算条件**：  
  例如，将 `for (int i = 0; i < list.Count; i++)` 改为：
  ```csharp
  int count = list.Count; // 预先计算
  for (int i = 0; i < count; i++)
  ```
- **优先使用 `foreach` 遍历集合**（除非需要索引）。

---
## 六、`for` 循环的变体
在 C# 中，`for` 循环的 **初始化语句**、**循环条件** 和 **迭代语句** 三个部分 **都可以省略**，但需要根据实际情况合理使用，否则可能导致逻辑错误或无限循环。以下是详细说明：


**初始化语句可以省略**

- **场景**：循环变量已在外部定义。需提前定义变量
- **示例**：
  ```csharp
  int i = 0; // 外部初始化
  for (; i < 5; i++) 
  {
      Console.WriteLine(i); // 输出 0, 1, 2, 3, 4
  }
  ```

**循环条件可以省略**

- **效果**：默认条件为 `true`，循环会无限执行，除非用 `break` 退出。
- **示例**：
  ```csharp
  for (int i = 0; ; i++) 
  {
      if (i >= 5) break; // 手动终止条件
      Console.WriteLine(i); // 输出 0, 1, 2, 3, 4
  }
  ```

**迭代语句可以省略**

- **场景**：在循环体内手动更新变量。需在循环体内更新变量
- **示例**：
  ```csharp
  for (int i = 0; i < 5; ) 
  {
      Console.WriteLine(i);
      i++; // 手动迭代
  }
  ```

**三个部分全部省略**

- **效果**：等同于 `while (true)`，形成无限循环。
- **示例**：
  ```csharp
  int i = 0;
  for (;;) 
  {
      if (i >= 5) break;
      Console.WriteLine(i); // 输出 0, 1, 2, 3, 4
      i++;
  }
  ```

**关键注意事项**

1. **避免无限循环**  
   如果省略 **循环条件** 且未在循环体内使用 `break`，循环将无限运行：
   ```csharp
   for (;;) 
   {
       Console.WriteLine("无限循环！"); // 需手动终止程序
   }
   ```

2. **作用域问题**  
   - 在 `for` 循环 **内部初始化** 的变量（如 `for (int i=0; ...)`），其作用域仅限于循环体内。
   - 若省略初始化并在外部定义变量，该变量在循环外仍有效：
     ```csharp
     int i; // 外部变量
     for (i = 0; i < 3; i++) { /* ... */ }
     Console.WriteLine(i); // 输出 3（变量仍可访问）
     ```

3. **代码可读性**  
   虽然语法允许省略，但过度省略可能降低代码清晰度。建议在明确需求时使用。

**示例：用户输入验证（省略迭代语句）**
```csharp
for (int attempts = 0; attempts < 3; ) 
{
    Console.Write("请输入密码：");
    string input = Console.ReadLine();
    if (input == "123456") 
    {
        Console.WriteLine("登录成功！");
        break;
    }
    attempts++; // 手动更新尝试次数
    Console.WriteLine($"剩余尝试次数：{3 - attempts}");
}
```
**总结**

- **可以省略**：`for` 循环的三个部分均可省略，但需确保逻辑正确。
- **慎用无限循环**：若省略条件，务必在循环体内添加退出机制（如 `break`）。
- **优先考虑可读性**：清晰的代码比简化的语法更重要。

---

## 七、`foreach` 与 `for` 对比
`for` 适用于 **索引访问**（如数组、列表）：
```csharp
int[] numbers = { 10, 20, 30 };
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]); // 通过索引访问
}
```
`foreach` 适用于 **遍历集合**（无需索引）：
```csharp
foreach (int num in numbers)
{
    Console.WriteLine(num); // 直接访问元素
}
```


## 八、**for对比其他循环结构**
| **循环类型**       | **适用场景**                         | **是否可省略条件**       |
|--------------------|--------------------------------------|--------------------------|
| `for`              | 已知循环次数或需要精确控制迭代       | 是（但需手动控制退出）   |
| `while`            | 条件满足时循环（可能零次执行）       | 否（必须显式写条件）     |
| `do-while`         | 至少执行一次，再检查条件             | 否（必须显式写条件）     |
