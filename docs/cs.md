---
noteId: "3eba664060d111f0a138bb2f2278db69"
tags: []

---

# 《村长讲C#》



## Day02 - 解决方案 VS 项目


## Day03 - 创建解决方案和项目

## Day04 - 文件模板




## Day05 - 变量与数据类型

## Day06 - Console输入输出


## 🎙️ Day07 - 条件判断 if / else


## 🎙️ Day08 - 循环语句 for / while



## 🎙️ Day09 - 数组（Array）：多个数据一起存！


## 🎙️Day10 - 数组实战与常用方法：玩转你的数据！


## 🎙️Day11 - 项目实战：学生成绩管理系统


下一节课，我们将开启 **方法进阶篇**：

> ✅ `ref`、`out`、`params` 等关键字怎么玩？
> ✅ 方法重载如何实现？

---

📌 想继续学习？
**Day12：方法的进阶玩法与技巧**

等你来战！

---

如需我为 **Day12：方法进阶玩法与技巧** 继续编写脚本，只说一句“需要”即可！

好的，我们继续！

下面是《C#入门教程》第 **Day12：字符串操作与实战** 的视频脚本：

---

## 🎙️ Day12 - 字符串操作与实战（String）


是否继续为你准备下一课 **Day13 - 数组初识与练习** 的讲解脚本？只要说“需要”，我就继续准备！
好的！以下是 **Day13 - 数组初识与练习（Array Basics & Practice）** 的课程讲解脚本，专为 C# 初学者录制使用：

---

## 🎙️ Day13 - 数组初识与练习（Array）

大家好，欢迎来到《C#入门教程》第13课。

本节课，我们将正式认识 C# 中的重要数据结构之一：**数组（Array）**，并进行简单练习！

---

## 一、什么是数组？

数组（Array）就是：**一组相同类型数据的集合**，它的作用是：**用一个变量，保存多个数据。**

比如你有 5 个学生的成绩：

```csharp
int score1 = 90;
int score2 = 85;
int score3 = 70;
int score4 = 100;
int score5 = 65;
```

这样写太麻烦了！我们可以用数组：

```csharp
int[] scores = { 90, 85, 70, 100, 65 };
```

---

## 二、数组的创建方式

### ✅ 方式一：直接赋值

```csharp
int[] nums = { 1, 2, 3, 4, 5 };
```

### ✅ 方式二：先声明，后赋值

```csharp
int[] ages = new int[3];
ages[0] = 18;
ages[1] = 20;
ages[2] = 22;
```

---

## 三、数组访问与修改

数组的索引从 **0 开始**！

```csharp
Console.WriteLine(ages[1]);   // 输出：20

ages[2] = 25;                 // 修改第3个元素为25
```

---

## 四、数组的长度

```csharp
int len = ages.Length;
Console.WriteLine("数组长度：" + len);
```

---

## 五、数组的遍历

### ✅ 使用 for 循环：

```csharp
for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine($"第{i + 1}个成绩是：{scores[i]}");
}
```

### ✅ 使用 foreach 循环（更简洁）：

```csharp
foreach (int s in scores)
{
    Console.WriteLine("成绩：" + s);
}
```

---

## 六、实战练习：求数组中所有元素的平均值

```csharp
int[] numbers = { 80, 90, 100, 70, 60 };
int sum = 0;

foreach (int n in numbers)
{
    sum += n;
}

double average = (double)sum / numbers.Length;
Console.WriteLine("平均成绩是：" + average);
```

---

## ✅ 总结

| 概念   | 内容                    |
| ---- | --------------------- |
| 声明数组 | `int[] arr = {1,2,3}` |
| 获取长度 | `arr.Length`          |
| 遍历数组 | `for` 或 `foreach`     |
| 索引访问 | `arr[0]`, `arr[1]`... |
| 修改值  | `arr[2] = 88;`        |

---

## 💡 小提示

数组的长度是固定的，一旦定义，不能增加或减少。如果你需要动态增删元素，后面会学到 `List`。

---

下一节，我们将深入了解数组的**常用方法（如排序、查找等）**，为项目实战打基础！

欢迎点赞、收藏并关注我，
我是不好奇，我们下课见！

---

是否继续为你准备 **Day14：数组方法进阶与实战（Sort、Find 等）** 的脚本？只需说一声“需要”，我立即开始准备。

好的！下面是 **Day14：数组方法进阶与实战（Sort、Find 等）** 的课程讲解脚本，适用于 C# 初学者视频录制：

---

## 🎙️ Day14 - 数组方法进阶与实战

大家好，欢迎来到《C#入门教程》第14课。

上一节我们学习了数组的基础用法，这一节我们继续升级，掌握数组的常用方法，并通过实战加深理解。

---

## 一、为什么需要数组方法？

在项目中，我们经常要对数组中的数据进行操作，比如：

* 排序（从小到大 / 从大到小）
* 查找某个元素
* 找出符合条件的所有元素
* 判断数组中是否存在某个值

这一切都可以借助 **数组方法** 轻松实现。

---

## 二、数组方法分类与用法

### ✅ 1. 排序：Array.Sort()

**升序排序**

```csharp
int[] nums = { 5, 2, 8, 1 };
Array.Sort(nums);  // 排序后：1, 2, 5, 8
```

**倒序排序**

```csharp
Array.Reverse(nums);  // 反转数组：8, 5, 2, 1
```

---

### ✅ 2. 查找：Array.IndexOf()

```csharp
int index = Array.IndexOf(nums, 5);  // 查找元素5的索引
Console.WriteLine("索引是：" + index);
```

若找不到，返回 `-1`。

---

### ✅ 3. 查找最后一个匹配项：Array.LastIndexOf()

```csharp
int[] nums = { 3, 7, 3, 9 };
int index = Array.LastIndexOf(nums, 3); // 返回 2
```

---

### ✅ 4. 是否存在某个元素：Array.Exists()

```csharp
bool hasBig = Array.Exists(nums, n => n > 6);
Console.WriteLine("有大于6的吗？" + hasBig);
```

---

### ✅ 5. 查找第一个满足条件的值：Array.Find()

```csharp
int firstEven = Array.Find(nums, n => n % 2 == 0);
Console.WriteLine("第一个偶数是：" + firstEven);
```

---

### ✅ 6. 查找所有满足条件的值：Array.FindAll()

```csharp
int[] evens = Array.FindAll(nums, n => n % 2 == 0);
Console.WriteLine("所有偶数有：" + string.Join(",", evens));
```

---

### ✅ 7. 判断是否所有元素都满足条件：Array.TrueForAll()

```csharp
bool allPositive = Array.TrueForAll(nums, n => n > 0);
Console.WriteLine("是否全部大于0？" + allPositive);
```

---

## 三、实战示例：考试分数分析

```csharp
int[] scores = { 45, 80, 65, 90, 100, 33, 55 };

// 1. 排序
Array.Sort(scores);
Console.WriteLine("升序排序：" + string.Join(",", scores));

// 2. 是否有不及格？
bool hasFail = Array.Exists(scores, s => s < 60);
Console.WriteLine("是否有不及格：" + hasFail);

// 3. 找出所有及格的分数
int[] pass = Array.FindAll(scores, s => s >= 60);
Console.WriteLine("及格的有：" + string.Join(",", pass));
```

---

## ✅ 总结

| 方法                    | 作用         |
| --------------------- | ---------- |
| Sort / Reverse        | 排序 / 反转数组  |
| IndexOf / LastIndexOf | 查找元素索引     |
| Exists                | 判断是否存在符合条件 |
| Find / FindAll        | 查找一个或多个元素  |
| TrueForAll            | 判断是否全部满足条件 |

---

## 💡 小提示

这些方法都来自 `System.Array` 类，不需要引入额外命名空间，直接使用即可！

---

下一节，我们将进入一个全新主题 —— **Day15：字符串与数组的结合应用（如分词、统计等）**，非常贴近实战！

想要继续课程脚本，请说一声“需要”，我马上继续为你准备 Day15 内容！

好的！以下是适用于初学者视频讲解的脚本：

---

## 🎙️Day15：字符串与数组的结合应用实战

大家好，欢迎来到《C#入门教程》第15课。

今天我们要讲一个非常实用的主题：**字符串与数组结合的使用技巧**。这些知识会频繁出现在项目、面试和考试中。

---

## 一、字符串与数组的连接点

字符串和数组是 C# 中两个非常重要的数据类型。它们之间的“桥梁”是什么？

答案是：**字符数组（char\[]）** 和 **字符串分割（Split）**。

---

## 二、字符串转字符数组

```csharp
string word = "hello";
char[] letters = word.ToCharArray();

foreach (char c in letters)
{
    Console.WriteLine(c);
}
```

> 输出每个字符：h e l l o

这个方法适用于：

* 遍历字符串
* 检查每个字符是否符合某种条件

---

## 三、字符串分割：Split()

最常用的方法之一！

### ✅ 示例：分割句子成单词

```csharp
string sentence = "I love C# programming";
string[] words = sentence.Split(' ');

foreach (string word in words)
{
    Console.WriteLine(word);
}
```

---

## 四、统计单词数量

```csharp
Console.WriteLine("请输入一句话：");
string input = Console.ReadLine();

string[] parts = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
Console.WriteLine("共有单词数：" + parts.Length);
```

---

## 五、从控制台输入多个数字，并求和

```csharp
Console.WriteLine("请输入一组整数，用空格分隔：");
string input = Console.ReadLine();  // 输入：10 20 30 40

string[] arr = input.Split(' ');
int sum = 0;

foreach (string s in arr)
{
    sum += int.Parse(s);
}

Console.WriteLine("总和是：" + sum);
```

> ✔️ 用途：输入数据批量处理、数据统计、报表分析等

---

## 六、使用 Join() 把数组变成字符串

```csharp
string[] fruits = { "apple", "banana", "orange" };
string result = string.Join(", ", fruits);

Console.WriteLine(result);
```

输出：`apple, banana, orange`

---

## 七、字符串反转（用数组方法实现）

```csharp
string s = "abcdef";
char[] arr = s.ToCharArray();
Array.Reverse(arr);

string reversed = new string(arr);
Console.WriteLine(reversed);  // 输出：fedcba
```

---

## ✅ 总结

| 技术点           | 功能说明        |
| ------------- | ----------- |
| ToCharArray   | 字符串转字符数组    |
| Split         | 字符串 → 字符串数组 |
| Join          | 字符串数组 → 字符串 |
| Array.Reverse | 字符数组倒序      |
| string.Length | 获取字符串长度     |

---

## 📌 小练习题（视频最后引导大家练习）

**题目：**
让用户输入一组用英文逗号隔开的数字，如 `10,20,30,5,8`，请计算它们的平均值。

> 你可以尝试用 Split + Parse + foreach 来完成！

---

## 预告：Day16

下一节我们将一起学习 C# 的一个重要结构：**列表 List<T>**，它比数组更灵活，适合处理动态数据集合。

如果你想继续脚本编写，请回复 **需要**，我会马上准备 **Day16：List 列表的使用与实战**！


好的！下面是 **Day16：List 列表的使用与实战** 的课程脚本草案，适合用于 C# 入门视频讲解：

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

## 🎙️Day17：Dictionary 字典的使用与实战

大家好，欢迎来到《C#入门教程》第17课。

今天我们要学习的是一个非常实用的集合类型：**Dictionary（字典）**。
它允许你通过“键”来快速查找“值”——就像查字典一样方便！

---

## 一、什么是 Dictionary？

Dictionary 是一种 **键值对（Key → Value）** 的集合。

* 键（Key）是唯一的；
* 值（Value）可以重复。

使用前，需引入命名空间：

```csharp
using System.Collections.Generic;
```

---

## 二、声明和初始化 Dictionary

```csharp
Dictionary<string, int> scores = new Dictionary<string, int>();
```

添加数据：

```csharp
scores.Add("小明", 90);
scores.Add("小红", 85);
scores.Add("小刚", 100);
```

---

## 三、常用方法一览

| 方法 / 属性                | 功能说明    |
| ---------------------- | ------- |
| `Add(key, value)`      | 添加键值对   |
| `Remove(key)`          | 删除某个键   |
| `ContainsKey(key)`     | 是否包含某个键 |
| `ContainsValue(value)` | 是否包含某个值 |
| `Count`                | 元素个数    |
| `Clear()`              | 清空全部元素  |

---

## 四、访问与遍历

访问单个元素：

```csharp
Console.WriteLine(scores["小刚"]);  // 输出 100
```

遍历所有键值对：

```csharp
foreach (KeyValuePair<string, int> pair in scores)
{
    Console.WriteLine(pair.Key + " 的成绩是 " + pair.Value);
}
```

或者使用解构写法：

```csharp
foreach (var (name, grade) in scores)
{
    Console.WriteLine(name + "：" + grade);
}
```

---

## 五、实战案例：学生成绩管理系统（简易版）

```csharp
Dictionary<string, int> grades = new Dictionary<string, int>();

while (true)
{
    Console.Write("请输入学生姓名（输入end结束）：");
    string name = Console.ReadLine();

    if (name == "end") break;

    Console.Write("请输入 " + name + " 的成绩：");
    int score = int.Parse(Console.ReadLine());

    grades[name] = score;  // 自动添加或更新
}

Console.WriteLine("\n成绩汇总：");
foreach (var (name, score) in grades)
{
    Console.WriteLine(name + "：" + score);
}
```

---

## 六、判断与删除

```csharp
if (grades.ContainsKey("小明"))
{
    grades.Remove("小明");
    Console.WriteLine("已删除小明的成绩");
}
```

---

## ✅ 小练习题（视频结尾引导）

**题目：**

1. 让用户输入 5 位同学的“姓名”和“成绩”；
2. 用户可输入一个姓名，查询该同学是否存在，并输出成绩；
3. 如果不存在，输出提示信息。

---

## 📌 总结

| 技术点                  | 功能说明         |
| -------------------- | ------------ |
| Dictionary\<k, v>    | 创建键值对集合      |
| Add / Remove / Count | 增删查基础操作      |
| ContainsKey / Value  | 判断是否存在       |
| 遍历字典                 | foreach 循环方式 |

---

## 🔮 预告：Day18

下一节我们将学习集合家族中另一个成员：**HashSet（集合）**，它专注于**去重**，非常适合处理唯一值的数据集。

---

如果你还需要继续准备 **Day18：HashSet 集合的使用与实战**，请回复 **需要**，我马上继续整理课程脚本！
