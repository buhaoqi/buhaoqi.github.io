---
noteId: "2bea34207cd611f0a8a2a3fb634546e4"
tags: []

---

知识点：

一、数组的来历

二、数组是什么

三、字面量法

四、new关键字法

五、访问数组元素的方法

---

## 一、数组的来历

首先让我们来看一个问题："如果计算2名同学的英语平均分，你会怎么做？"

很容易：声明2个变量把两名同学的成绩存起来

```c#
double score1 = 90, score2 = 85;
```

然后把两个变量相加之后，除以2，就得到了2人的平均分：

```c#
Console.WriteLine("两人的平均分是：" + (score1 + score2) / 2);
```

是的，很简单。

但是"如果要统计的不是2人，而是全班30人的成绩，要声明30个变量吗？这听上去就很麻烦。

问题：

- 变量多了很难管理
- 不能用循环统一处理

你肯定猜到了，是的！使用数组就可以了。

使用数组声明一个变量，可以存储全部30名同学的成绩。

你可以这样写：

```csharp linenums="1"
//声明一个double变量，它的值是大括号包括的分数列表。
double[] scores = { 90, 85, 70, 100, 65,  96 };
double sum = 0;
foreach(int score in scores) // 遍历数组中的每个成绩
{
    sum += score; 
}
Console.WriteLine(sum / scores.Length);
```

这样，我们就求得了全班30人的平均分。

现在看不懂这些代码没关系，你只需知道：

- 变量是一个容器，可以存储一个值。
- 数组也是一个容器，可以存储一组值。数组可以让我们的代码变得更简洁和高效。



## 二、数组是什么
数组（Array）就是：**一组相同类型的数据的有序集合**。数组元素的类型必须是相同类型。

数组（Array） 是一种固定长度的相同类型元素的集合，并且这些数据在内存中是连续存放的，通过索引来访问。数组是System.Array类的实例。

这些数据在内存中连续存放。数据可以是字符串，也可以是整数或浮点数。通过索引，既可以对数组元素进行度操作，也可以进行写操作，这是数组最基本也是最常用的功能之一。但数组的长度是固定的，不能通过索引添加或删除元素。​

```c#
索引:   0     1     2     3
值:   10    20    30    40
```

## 三、数组的基本语法

### 1.声明数组的语法

声明了一个可以存放 int 的数组变量

```c#
int[] arr;
```

### 2.创建数组

```c#
int[] arr = new int[5];
```
说明：

- 创建一个 长度为 5 的数组
- 默认值都是 0


### 3.声明并初始化数组

```c#
int[] arr = { 1, 2, 3, 4, 5 };
```
等价于

```c#
int[] arr = new int[] { 1, 2, 3, 4, 5 };

```

### 4.字面量法

“字面量法”就是在声明一个数组的同时，必须进行初始化，否则编译器不会放过你的，直接报错。字面量法创建数组的语法如下：

```c#
数据类型[] 数组名 = {元素1, 元素2, 元素3, ..., 元素N};

```

- 首先声明数组中存储的数据的类型，所有数据必须是同一类型。
- 方括号用于告诉编译器：这是一个数组类型，不是单个变量。
- 数组名就是一个普通的变量名，用来引用数组。
- 等号右边花括号是数组初始化器，包裹的是数组的值列表。数组中的每一个值，我们称之为“数组元素”。多个元素之间使用英文的分号隔开，最后一个数组元素后面不要加逗号

比如，存储二班全部同学的姓名，可以创建一个字符串数组：

```c#
string[] studentNames = {"张三","李四","王五","杨老五","老六"};
```

存储学生的年龄，可以创建一个整数型数据

```c#
int[] studentAges = {18,17,16,17,16};
```

存储全班同学的身高，我们可以创建一个单精度浮点数数组：

```c#
float[] studentHeights = {1.75F,1.80F,1.65F,1.73F,1.82F};
```

### 5.new关键字法

new关键字法就是使用关键字new显式的在内存里开辟一块空间存放数组元素。它的语法如下：

```c#
数据类型[] 数组名 = new 数据类型[长度];
```

在这里：

- new关键字标识在内存里开辟一块空间
- 长度表示数组元素的个数，这个整数必须在创建时确定，并且一旦创建就不能改变。

正因如此，通常，new关键字法适合不确定数组元素的值，比如我们希望创建一个字符串数组，存储班级前三名同学名字，但是我们并不知道这三名同学是谁。

这时可以使用new关键字法

```c#
string[] top3 = new string[3];
```

这样就在内存中创建了一个数组长度为3的数组，数组元素会被自动填充为默认值null。

## 四、数组的访问

### 1.数组索引

数组每个元素都有一个“编号”叫做**索引（index）**。索引用于标识数组元素在数组中的位置。

索引从 0 开始​​，也就是说：

- 第 1 个元素的索引是 0
- 第 2 个元素的索引是 1
- 第 3 个元素的索引是 2
  …
- 第 n 个元素的索引是 n - 1


### 2. 读取数组元素


通过数组的索引，可以读取数组中的元素，它的语法如下

```c#
数组名[索引];
```

```c#
int[] arr = { 10, 20, 30 };

Console.WriteLine(arr[0]); // 10
Console.WriteLine(arr[1]); // 20
Console.WriteLine(arr[2]); // 30
```

比如，我们要获取数组中第一个同学的名字、年龄和身高，可以这样写：

```c#
Console.WriteLine($"姓名:{studentNames[0]}, 年龄:{studentAges[0]}, 身高:{studentHeights[0]*100}cm");
```

### 3.修改数组元素

通过索引，也可以修改数组中的元素。​它的语法如下

```c#
数组名[索引] = 新值;
```

```c#
studentAges[1] = 19; //将第2个元素的值从 10 修改为 100
Console.WriteLine(studentAges[1]); // 19
```

## 五、数组的长度

使用Length属性

```c#
Console.WriteLine(arr.Length);

```
👉 返回数组中元素的个数


## 六、遍历数组

使用 for 循环遍历数组

```c#
int[] arr = { 10, 20, 30, 40 };

for (int i = 0; i < arr.Length; i++)
{
    Console.WriteLine(arr[i]);
}
```

使用 foreach（更简单）

```C#
foreach (int item in arr)
{
    Console.WriteLine(item);
}
```
---

## 七、数组的特点

✅ 优点

访问速度快（通过索引）

结构简单，效率高

❌ 缺点

长度固定，不能动态增减

只能存同一种类型的数据


### 10.升序排序
定义一个整数数组，使用 `Array.Sort()` 对其进行升序排序。
### 11.倒序排序
定义一个字符串数组，使用 `Array.Reverse()` 将其倒序排列。
### 12.查询位置
使用 `Array.IndexOf()` 找出元素 `10` 在数组 `[3, 5, 10, 7, 10]` 中的第一个位置。
### 13.查询位置
使用 `Array.LastIndexOf()` 查找元素 `10` 在数组中的最后一次出现位置。
### 14.元素是否存在
给定数组 `[2, 4, 6, 8]`，使用 `Array.Exists()` 判断是否存在大于 5 的元素。
### 15.查询元素
在数组 `[1, 3, 5, 7, 9]` 中，使用 `Array.Find()` 找出第一个大于 4 的数。
### 16.查询元素
使用 `Array.FindAll()` 找出 `[10, 20, 30, 25, 15]` 中所有大于等于 20 的元素。
### 17.查询元素
使用 `Array.TrueForAll()` 判断 `[2, 4, 6, 8]` 中是否所有元素都是偶数。
### 18.查询索引
使用 `Array.IndexOf()` 查找不存在的值（比如查找 99），观察结果。
### 19.反转数组
定义一个数组 `[1, 2, 3, 4, 5]`，使用 `Array.Reverse()` 然后输出结果。
### 20.排序数组
用 `Array.Sort()` 排序一个乱序的数组 `[5, 2, 9, 1, 3]` 并输出。
### 21.查询元素
判断 `[1, 3, 5, 7]` 中是否存在偶数（`Array.Exists()`）。
### 22.查询元素
找出字符串数组中第一个长度大于 5 的字符串（使用 `Array.Find()`）。
### 23.查询元素 
找出 `["dog", "cat", "elephant", "ant"]` 中所有以字母 `a` 开头的字符串（`FindAll()`）。
### 24.查询元素
判断 `[10, 20, 30, 40]` 是否所有元素都能被 5 整除（使用 `TrueForAll()`）。

---




10.
```csharp
// 1. Sort
int[] arr1 = { 4, 2, 9, 1 };
Array.Sort(arr1);
```
11.
```csharp
// 2. Reverse
string[] arr2 = { "apple", "banana", "cherry" };
Array.Reverse(arr2);
```
12.
```csharp
// 3. IndexOf
int[] arr3 = { 3, 5, 10, 7, 10 };
int idx1 = Array.IndexOf(arr3, 10);
```
13.
```csharp
// 4. LastIndexOf
int idx2 = Array.LastIndexOf(arr3, 10);
```
14.
```csharp
// 5. Exists
int[] arr4 = { 2, 4, 6, 8 };
bool exists1 = Array.Exists(arr4, n => n > 5);
```
15.
```csharp
// 6. Find
int[] arr5 = { 1, 3, 5, 7, 9 };
int firstGreater4 = Array.Find(arr5, n => n > 4);
```
16.
```csharp
// 7. FindAll
int[] arr6 = { 10, 20, 30, 25, 15 };
int[] filtered = Array.FindAll(arr6, n => n >= 20);
```
17.
```csharp
// 8. TrueForAll
bool allEven = Array.TrueForAll(arr4, n => n % 2 == 0);
```
18.
```csharp
// 9. IndexOf not found
int idx3 = Array.IndexOf(arr5, 99); // -1
```
19.
```csharp
// 10. Reverse array
int[] arr7 = { 1, 2, 3, 4, 5 };
Array.Reverse(arr7);
```
20.
```csharp
// 11. Sort array
int[] arr8 = { 5, 2, 9, 1, 3 };
Array.Sort(arr8);
```
21.
```csharp
// 12. Exists even
bool hasEven = Array.Exists(arr5, n => n % 2 == 0);
```
21.
```csharp
// 13. Find string length > 5
string[] words = { "hi", "banana", "code", "carpet" };
string longWord = Array.Find(words, s => s.Length > 5);
```
22.
```csharp
// 14. FindAll startsWith 'a'
string[] animals = { "dog", "cat", "elephant", "ant" };
string[] aAnimals = Array.FindAll(animals, s => s.StartsWith("a"));
```
23.
```csharp
// 15. TrueForAll divisible by 5
int[] arr9 = { 10, 20, 30, 40 };
bool allDiv5 = Array.TrueForAll(arr9, n => n % 5 == 0);
```



---

