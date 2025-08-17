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