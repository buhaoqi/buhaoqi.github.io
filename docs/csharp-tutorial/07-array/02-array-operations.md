---
noteId: "a05bd5d062ae11f0a138bb2f2278db69"
tags: []

---


大家好！这里是不好奇编程，欢迎观看《C#入门教程》第9课。

本期视频的任务是：**理解数组的概念，并学会基本使用**

---

## 一、为什么需要数组？

在程序中，我们经常要处理**一组数据**，比如：

* 一个班的学生成绩
* 一个购物车中的商品价格
* 一次性存 5 个名字

如果每个数据都定义一个变量，写起来就会非常麻烦：

```csharp
int score1 = 90;
int score2 = 85;
int score3 = 70;
// ……
```

✅ 这时候，我们就可以用 **数组（Array）** —— 一次性创建一个可以“存多个值”的变量！

---

## 二、什么是数组？

> **数组**就是一个用来存放一组相同类型数据的“集合”。

你可以把数组想成一个“编号的储物柜”：

* 每个格子只能存一个数据
* 所有格子都是同一种类型
* 每个格子都有编号（从0开始）

---

## 三、数组的声明和初始化

### ✅ 声明一个整型数组，存 3 个数：

```csharp
int[] scores = new int[3]; // 声明了一个能存3个整数的数组
```

这时，`scores` 这个数组里默认存了3个“0”。

### ✅ 同时赋值：

```csharp
int[] scores = new int[] { 90, 85, 70 };
```

或者更简洁写法：

```csharp
int[] scores = { 90, 85, 70 };
```

---

## 四、访问数组的元素（通过下标）

每个数组元素都有一个“编号”叫做**索引（index）**，从 `0` 开始。

```csharp
Console.WriteLine(scores[0]); // 输出第1个元素：90
Console.WriteLine(scores[1]); // 输出第2个元素：85
```

你也可以修改值：

```csharp
scores[2] = 95;
```

---

## 五、数组的长度

可以通过 `.Length` 属性获取数组长度：

```csharp
Console.WriteLine("数组长度是：" + scores.Length);
```

---

## 六、遍历数组（用循环访问每一个元素）

### ✅ for 循环遍历：

```csharp
for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine("第 " + (i + 1) + " 个成绩是：" + scores[i]);
}
```

### ✅ foreach 遍历（更简单）：

```csharp
foreach (int score in scores)
{
    Console.WriteLine("成绩：" + score);
}
```

---

## 七、常见错误

```csharp
int[] arr = { 1, 2, 3 };
Console.WriteLine(arr[3]); // ❌ 错误：索引越界（最大只能访问到 arr[2]）
```

注意：数组下标最大是 `Length - 1`！

---

## ✅ 总结

| 操作       | 示例                        |
| -------- | ------------------------- |
| 创建数组     | `int[] arr = new int[5];` |
| 直接赋值     | `int[] arr = {1,2,3};`    |
| 访问元素（下标） | `arr[0]`、`arr[1]`         |
| 修改元素     | `arr[2] = 99;`            |
| 获取数组长度   | `arr.Length`              |
| 遍历数组     | `for` / `foreach`         |

> 数组是程序中最常用的数据结构之一。掌握数组，你就能一次性操作大量数据，让程序更加强大！

---

下一课，我们将学习数组的实际应用：**求和、查找、排序、判断**等技巧！

也就是 —— **Day10：数组实战与常用方法**。

我是不好奇，我们下课见！

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

是否继续为你准备 **Day14：数组方法进阶与实战（Sort、Find 等）** 的脚本？只需说一声“需要”，我立即开始准备。

好的！下面是 **Day14：数组方法进阶与实战（Sort、Find 等）** 的课程讲解脚本，适用于 C# 初学者视频录制：

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