---
noteId: "a8e51ed07b0b11f09e8c4908c81f2975"
tags: []

---


## 🎙️Day16：List 列表的使用与实战

大家好，欢迎来到《C#入门教程》第16课。

今天我们要学习的主题是：**List 列表的使用与实战**。

这是一个比数组更灵活、更常用的数据结构，非常适合处理不定数量的数据。

---

## 一、什么是 List？

在 C# 中，数组的长度是固定的；而 **List<T>** 是一种**动态集合**，可以随时添加、删除元素。

要使用它，我们需要在文件开头加上这句：

```csharp
using System.Collections.Generic;
```

---

## 二、声明和初始化 List

```csharp
List<int> scores = new List<int>();  // 创建一个整数列表
scores.Add(90);
scores.Add(85);
scores.Add(100);
```

> `Add()` 用于向列表中添加元素。

---

## 三、常用操作方法

| 方法             | 作用         |
| -------------- | ---------- |
| `Add(item)`    | 添加元素       |
| `Remove(item)` | 删除指定元素     |
| `Count`        | 获取元素数量     |
| `Clear()`      | 清空列表       |
| `Contains()`   | 判断是否包含某个元素 |
| `Sort()`       | 排序         |

---

## 四、遍历 List

```csharp
foreach (int score in scores)
{
    Console.WriteLine(score);
}
```

---

## 五、实战：录入学生成绩，求平均分

```csharp
List<int> grades = new List<int>();

Console.WriteLine("请输入5个学生成绩：");

for (int i = 0; i < 5; i++)
{
    Console.Write("第 " + (i + 1) + " 个成绩：");
    int grade = int.Parse(Console.ReadLine());
    grades.Add(grade);
}

int sum = 0;
foreach (int g in grades)
{
    sum += g;
}

Console.WriteLine("平均成绩为：" + (sum / grades.Count));
```

---

## 六、List 的排序和查找

```csharp
grades.Sort();  // 正序排序
Console.WriteLine("最高分：" + grades[grades.Count - 1]);
Console.WriteLine("最低分：" + grades[0]);
```

```csharp
if (grades.Contains(100))
{
    Console.WriteLine("有人考了满分！");
}
```

---

## 七、List 与字符串结合：拆分数字字符串

```csharp
string input = "12,45,78,3";
string[] arr = input.Split(',');

List<int> numbers = new List<int>();
foreach (string s in arr)
{
    numbers.Add(int.Parse(s));
}

Console.WriteLine("共有数字：" + numbers.Count);
```

---

## ✅ 小练习题（视频结尾引导）

**题目：**

* 让用户不断输入名字，直到输入 “end” 停止。
* 然后输出所有名字，并显示一共有多少人。

提示：使用 `List<string>` + `while` + `Add`。

---

## 📌 总结

| 技术点          | 功能说明      |
| ------------ | --------- |
| List<T>      | 动态数据集合    |
| Add / Remove | 增删元素      |
| Count        | 获取元素数量    |
| Sort         | 排序        |
| Contains     | 判断是否存在某元素 |

---

## 🔮 预告：Day17

下一节我们将学习更强大的集合类型：**Dictionary（字典）**，它可以让你用“键值对”来保存数据，例如：“姓名 → 成绩”。

---

如果你还需要继续准备 **Day17：字典 Dictionary 的使用与实战**，请回复 **需要**，我会立刻帮你整理脚本！

好的！下面是 **Day17：Dictionary 字典的使用与实战** 的 C# 入门教学脚本草案，适用于课程视频讲解：

---

# C# List 用法详解

List 是 C# 中最常用的泛型集合之一，它提供了动态数组的功能，可以存储任何类型的元素，并且支持各种操作如添加、删除、查找、排序等。

## 一、List 的基本特性

1. **动态大小**：与数组不同，List 的大小可以动态增长
2. **类型安全**：泛型特性确保类型安全
3. **丰富的方法**：提供多种便捷的操作方法
4. **实现接口**：实现了 `IList<T>`, `ICollection<T>`, `IEnumerable<T>` 等接口

## 二、List 的声明和初始化

### 1. 基本声明

```csharp
// 声明一个整数类型的List
List<int> numbers = new List<int>();

// 声明并初始化字符串List
List<string> names = new List<string>() { "Alice", "Bob", "Charlie" };
```

### 2. 使用容量初始化

```csharp
// 指定初始容量(提高性能，减少重新分配内存的次数)
List<double> values = new List<double>(100);
```

## 三、常用操作方法

### 1. 添加元素

```csharp
List<string> fruits = new List<string>();

// 添加单个元素
fruits.Add("Apple");
fruits.Add("Banana");

// 添加多个元素
fruits.AddRange(new[] { "Orange", "Grape" });

// 插入元素到指定位置
fruits.Insert(1, "Mango"); // 在索引1处插入
```

### 2. 访问元素

```csharp
List<int> numbers = new List<int> { 10, 20, 30, 40 };

// 通过索引访问
int first = numbers[0]; // 10

// 遍历List
foreach (int num in numbers)
{
    Console.WriteLine(num);
}

// 使用for循环
for (int i = 0; i < numbers.Count; i++)
{
    Console.WriteLine(numbers[i]);
}
```

### 3. 删除元素

```csharp
List<string> colors = new List<string> { "Red", "Green", "Blue", "Yellow" };

// 按值删除
colors.Remove("Green");

// 按索引删除
colors.RemoveAt(0); // 删除第一个元素

// 删除所有符合条件的元素
colors.RemoveAll(c => c.StartsWith("B")); // 删除所有以B开头的元素

// 清空List
colors.Clear();
```

### 4. 查找元素

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

// 查找元素是否存在
bool hasThree = numbers.Contains(3); // true

// 查找第一个匹配的元素
int firstEven = numbers.Find(n => n % 2 == 0); // 2

// 查找所有匹配的元素
List<int> allEvens = numbers.FindAll(n => n % 2 == 0); // [2, 4, 6]

// 查找元素的索引
int index = numbers.IndexOf(4); // 3
int lastIndex = numbers.LastIndexOf(2); // 从后往前找
```

### 5. 排序和反转

```csharp
List<int> numbers = new List<int> { 3, 1, 4, 2 };

// 升序排序
numbers.Sort(); // [1, 2, 3, 4]

// 降序排序
numbers.Sort((a, b) => b.CompareTo(a)); // [4, 3, 2, 1]

// 自定义排序
List<string> words = new List<string> { "apple", "banana", "cherry" };
words.Sort((a, b) => a.Length.CompareTo(b.Length)); // 按长度排序

// 反转列表
numbers.Reverse(); // [2, 4, 1, 3]
```

### 6. 其他常用操作

```csharp
List<int> list = new List<int> { 1, 2, 3, 4 };

// 获取元素数量
int count = list.Count; // 4

// 检查是否为空
bool isEmpty = list.Count == 0; // 或 list.Any()

// 转换为数组
int[] array = list.ToArray();

// 转换为只读集合
IReadOnlyList<int> readOnly = list.AsReadOnly();

// 批量操作
list.ForEach(item => Console.WriteLine(item));

// 条件检查
bool allPositive = list.TrueForAll(x => x > 0); // 是否所有元素都大于0
```

## 四、List 的性能考虑

1. **添加元素**：
   - `Add()` 平均 O(1) 操作，但当容量不足时需要重新分配内存
   - 如果知道大概元素数量，预先设置容量可以提高性能

2. **插入元素**：
   - `Insert()` 是 O(n) 操作，因为需要移动后续元素

3. **查找元素**：
   - `Contains()` 是 O(n) 操作
   - 如果需要频繁查找，考虑使用 `HashSet<T>`

4. **访问元素**：
   - 通过索引访问是 O(1) 操作

## 五、List 的高级用法

### 1. 使用 LINQ 查询

```csharp
List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 25 },
    new Person { Name = "Bob", Age = 30 },
    new Person { Name = "Charlie", Age = 20 }
};

// 筛选
var youngPeople = people.Where(p => p.Age < 30).ToList();

// 排序
var orderedByName = people.OrderBy(p => p.Name).ToList();

// 投影
var names = people.Select(p => p.Name).ToList();

// 聚合
int totalAge = people.Sum(p => p.Age);
```

### 2. 自定义类型的 List

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

List<Product> products = new List<Product>
{
    new Product { Id = 1, Name = "Laptop", Price = 999.99m },
    new Product { Id = 2, Name = "Mouse", Price = 19.99m }
};

// 自定义排序
products.Sort((p1, p2) => p1.Price.CompareTo(p2.Price));
```

### 3. 列表的列表

```csharp
List<List<int>> matrix = new List<List<int>>
{
    new List<int> { 1, 2, 3 },
    new List<int> { 4, 5, 6 },
    new List<int> { 7, 8, 9 }
};

// 访问元素
int value = matrix[1][2]; // 6
```

## 六、List 的常见陷阱

1. **修改集合时遍历**：
   ```csharp
   // 错误示例 - 在foreach中修改集合会抛出异常
   foreach (var item in list)
   {
       if (item == 3)
           list.Remove(item); // 抛出InvalidOperationException
   }
   
   // 正确做法 - 使用for循环从后往前遍历
   for (int i = list.Count - 1; i >= 0; i--)
   {
       if (list[i] == 3)
           list.RemoveAt(i);
   }
   ```

2. **性能问题**：
   - 避免频繁的插入/删除操作，特别是大型List
   - 考虑使用 `LinkedList<T>` 如果需要频繁在中间插入/删除

3. **浅拷贝问题**：
   ```csharp
   List<Person> original = new List<Person> { new Person { Name = "Test" } };
   List<Person> copy = new List<Person>(original); // 浅拷贝
   copy[0].Name = "Changed";
   Console.WriteLine(original[0].Name); // 输出"Changed" - 因为引用相同
   ```

List 是 C# 中最灵活和常用的集合类型之一，掌握它的各种用法可以大大提高开发效率。根据具体场景选择合适的操作方法，并注意性能和线程安全等问题。

在 C# 中，**`List<T>`** 是一个极其重要且常用的**泛型集合类**，位于命名空间 https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic 中。

它提供了一种**动态大小、类型安全、功能丰富**的集合，用于存储一组相同类型的对象，是传统数组的更强大、更灵活的替代品。

---

## 一、🔹 什么是 `List<T>`？

- **`List<T>` 是一个泛型类**，可以存储任意类型的对象（通过类型参数 `T` 指定，比如 `List<int>`、`List<string>`、`List<Person>` 等）。
- 它实现了 `IList<T>`、`ICollection<T>`、`IEnumerable<T>` 等接口，功能非常强大。
- 与数组不同，**`List<T>` 的大小是动态可变的**，不需要提前指定大小，会根据需要自动扩容。
- 提供了丰富的方法来添加、删除、查找、排序、遍历元素等。

---

## 二、🔹 为什么使用 `List<T>`？

| 对比项 | 数组 (`T[]`) | `List<T>` |
|--------|--------------|-----------|
| **大小是否固定** | 是，声明时固定 | 否，动态增长 |
| **是否需要手动扩容** | 是 | 否，自动处理 |
| **添加/删除元素** | 不灵活（除非用新数组） | 非常方便（`Add`, `Remove`, `Insert` 等） |
| **功能丰富度** | 基本 | 非常丰富（排序、查找、批量操作等） |
| **类型安全** | 是（使用泛型或明确类型） | 是（泛型） |
| **性能** | 访问稍快（连续内存） | 稍慢（但有优化，通常可忽略） |

> ✅ **推荐：当你不知道元素数量，或者需要频繁增删改查时，优先使用 `List<T>`。**

---

## 三、🔹 基本用法

### 1. 引入命名空间

```csharp
using System;
using System.Collections.Generic; // 必须引入此命名空间才能使用 List<T>
```

---

### 2. 创建一个 `List<T>`

#### 示例：创建一个存储整数的列表

```csharp
List<int> numbers = new List<int>();
```

你也可以在创建时指定初始容量（可选，优化性能）：

```csharp
List<int> numbers = new List<int>(capacity: 100); // 初始内部容量为100，但大小仍为0
```

或者用集合初始化器快速创建并填充：

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
```

---

### 3. 添加元素

#### 添加单个元素：

```csharp
numbers.Add(10);
numbers.Add(20);
```

#### 添加多个元素（使用另一个集合）：

```csharp
List<int> moreNumbers = new List<int> { 30, 40, 50 };
numbers.AddRange(moreNumbers);
```

---

### 4. 访问元素

和数组一样，通过 **索引** 访问：

```csharp
int first = numbers[0]; // 获取第一个元素
Console.WriteLine(first); // 输出：1
```

⚠️ 注意：如果索引超出范围（比如 `numbers[100]`），会抛出 `ArgumentOutOfRangeException` 异常。

---

### 5. 获取列表信息

| 方法/属性 | 说明 |
|-----------|------|
| `Count` | 获取列表中实际包含的元素个数 |
| `Capacity` | 获取当前分配的内部存储容量（可自动增长） |
| `IsEmpty`（需手动判断 `Count == 0`） | 判断是否为空 |

```csharp
Console.WriteLine(numbers.Count);     // 元素个数
Console.WriteLine(numbers.Capacity);  // 当前容量
```

---

## 四、🔹 常用方法详解

### 1. 添加元素

| 方法 | 说明 |
|------|------|
| `Add(T item)` | 在列表末尾添加一个元素 |
| `AddRange(IEnumerable<T> collection)` | 添加多个元素（来自另一个集合） |

```csharp
numbers.Add(100);
numbers.AddRange(new int[] { 200, 300 });
```

---

### 2. 插入元素

| 方法 | 说明 |
|------|------|
| `Insert(int index, T item)` | 在指定索引位置插入一个元素 |

```csharp
numbers.Insert(1, 999); // 在索引1的位置插入 999
```

---

### 3. 删除元素

| 方法 | 说明 |
|------|------|
| `Remove(T item)` | 删除**第一个匹配**的指定值，返回是否成功 |
| `RemoveAt(int index)` | 删除**指定索引**位置的元素 |
| `RemoveAll(Predicate<T> match)` | 删除所有满足条件的元素 |
| `Clear()` | 清空整个列表 |

```csharp
numbers.Remove(999);     // 删除值为 999 的第一个元素
numbers.RemoveAt(0);     // 删除索引为 0 的元素
numbers.RemoveAll(x => x > 100); // 删除所有大于 100 的元素
numbers.Clear();         // 清空列表
```

---

### 4. 查找元素

| 方法 | 说明 |
|------|------|
| `Contains(T item)` | 判断列表是否包含某个值 |
| `IndexOf(T item)` | 返回某个值的**第一个匹配项的索引**，未找到返回 -1 |
| `LastIndexOf(T item)` | 返回某个值的**最后一个匹配项的索引** |
| `Find(Predicate<T> match)` | 查找第一个满足条件的元素 |
| `FindAll(Predicate<T> match)` | 查找所有满足条件的元素（返回新列表） |
| `Exists(Predicate<T> match)` | 判断是否存在满足条件的元素 |

```csharp
bool has = numbers.Contains(10);
int idx = numbers.IndexOf(20);
var result = numbers.Find(x => x > 50); // 找到第一个大于50的值
var allBig = numbers.FindAll(x => x > 50); // 所有大于50的元素
bool exists = numbers.Exists(x => x == 99);
```

---

### 5. 排序与反转

| 方法 | 说明 |
|------|------|
| `Sort()` | 对列表进行升序排序（元素需实现 `IComparable`） |
| `Sort(Comparison<T> comparison)` | 使用自定义比较器排序 |
| `Reverse()` | 反转列表中元素的顺序 |

```csharp
numbers.Sort(); // 升序排序
numbers.Reverse(); // 反转顺序
```

> 如果列表元素是自定义类型，需要让类型实现 `IComparable<T>` 或传入自定义的 `Comparison<T>` 委托。

---

### 6. 遍历 List

可以使用以下方式遍历：

#### for 循环（通过索引）：

```csharp
for (int i = 0; i < numbers.Count; i++)
{
    Console.WriteLine(numbers[i]);
}
```

#### foreach 循环（推荐，简洁）：

```csharp
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

#### 使用 `ToList()` 转为其他形式（如数组）：

```csharp
int[] arr = numbers.ToArray(); // 转为数组
```

---

## 五、🔹 完整示例代码

下面是一个完整的控制台示例，展示 `List<T>` 的常见用法：

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // 创建并初始化 List
        List<string> names = new List<string> { "Alice", "Bob", "Charlie" };

        // 添加元素
        names.Add("David");
        names.AddRange(new string[] { "Eve", "Frank" });

        // 插入元素
        names.Insert(1, "Anna");

        // 遍历
        Console.WriteLine("所有名字：");
        foreach (string name in names)
        {
            Console.WriteLine(name);
        }

        // 查找
        Console.WriteLine("\n包含 'Bob' 吗？ " + names.Contains("Bob"));
        int index = names.IndexOf("Charlie");
        Console.WriteLine($"'Charlie' 的索引是：{index}");

        // 删除
        names.Remove("Bob");           // 删除第一个匹配值
        names.RemoveAt(0);             // 删除索引为 0 的元素
        names.RemoveAll(n => n.StartsWith("A")); // 删除所有以 A 开头的

        // 排序
        names.Sort();

        // 最终结果
        Console.WriteLine("\n最终名单：");
        foreach (var name in names)
        {
            Console.WriteLine(name);
        }

        Console.WriteLine($"\n总人数：{names.Count}");
    }
}
```

---

## 六、🔹 补充知识点

### 1. `List<T>` 是引用类型

- `List<T>` 本身是一个**类（引用类型）**，所以当你将它作为参数传递给方法时，传递的是**引用的副本**，方法内修改列表内容会影响原列表。
- 如果你不想让方法修改原列表，可以传递它的副本：`var copy = new List<T>(originalList);`

### 2. 性能考虑

- `List<T>` 内部使用数组实现，当元素数量超出当前容量时，会自动分配一个更大的数组并拷贝元素（扩容策略通常是 **翻倍**）。
- 如果你预先知道大概的元素数量，建议在创建时指定初始容量以减少多次扩容带来的性能损耗：

```csharp
List<int> list = new List<int>(capacity: 1000); // 预分配空间
```

---

## 七、🔹 总结：List<T> 的核心要点

| 特性 | 说明 |
|------|------|
| **类型** | 泛型类，类型安全，支持任意类型 `T` |
| **动态大小** | 可根据需要自动扩容，无需手动管理大小 |
| **功能丰富** | 提供添加、插入、删除、查找、排序、遍历等方法 |
| **常用操作** | `Add`, `Remove`, `Insert`, `Contains`, `Sort`, `ForEach` 等 |
| **底层结构** | 基于数组，内存连续，访问效率高 |
| **适用场景** | 大多数需要动态集合的场景，如用户列表、商品列表、数据缓存等 |

---

## ✅ 推荐使用场景

- 当你需要一个**可变大小的集合**，并且元素类型一致
- 当你要频繁进行**增删改查操作**
- 当你想利用丰富的 API（如排序、查找、批量操作）
- 当你不想手动处理数组大小和拷贝逻辑

---

📌 **如果你有更具体的需求，比如：**

- 如何对 `List<T>` 自定义排序？
- 如何将 `List<T>` 转为数组或其他集合？
- 如何实现一个高性能的筛选/查询？
- 如何在方法间传递并避免修改原 List？

欢迎继续提问，我可以为你提供更深入的示例代码！