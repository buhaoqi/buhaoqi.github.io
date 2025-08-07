---
noteId: "1aaaf6c0674d11f0b0d6278e683d20b1"
tags: []

---


## 数组的由来

在学习数组之前，首先问你一个问题："如果计算2名同学的英语平均分，你会怎么做？"

很容易：声明2个变量把两名同学的成绩存起来

```c#
double score1 = 90, score2 = 85;
```

然后除以2，就得到了2人的平均分：

```c#
Console.WriteLine("两人的平均分是：" + (score1 + score2) / 2);
```

"但如果要统计全班30人的成绩呢？难道要声明30个变量？

比如 score1 到 score30？这显然太麻烦了！"

"这时候，数组（Array）就派上用场了！它就像一排连续的小格子，能一次性存储多个分数。"

使用数组，把30名同学的成绩存储在一个数组中，可以这样写：

```csharp linenums="1"
double[] scores = { 90, 85, 70, 100, 65,  96 };
double sum = 0;
foreach(int score in scores) // 遍历数组中的每个成绩
{
    sum += score; 
}
Console.WriteLine(sum / scores.Length);
```
暂时看不懂这些代码没关系，你只需知道：这是使用数组实现的。使用数组求平均值有三点好处：

- 代码简洁：7行搞定30人的计算。
- 高效管理：无需手动定义大量变量。
- 灵活扩展：无论30人还是300人，代码结构不变！


## 数组是什么？

数组（Array）就是：**一组相同类型的数据集合**。

它的作用是：**用一个变量，保存多个同类型的值。**

## 数组字面量

创建数组的语法是这样的：

```c#
数据类型[] 数组名 = {值1, 值2, 值3, ..., 值N};

```

这叫做字面量法创建数组。比如：

存储5个字符串：

```c#
string[] strArray = {"苹果","香蕉","梨","猕猴桃","哈密瓜"};
```
存储5个数值

```c#
int[] intArray = {54,80,1000,28,39,66};
```
存储5个双精度浮点数

```c#
double[] doubleArray = {9.99,58.00,32.99,99.9,102.50};
```

存储5个单精度浮点数

```c#
float[] floatArray = {9.99F,58.00F,32.99F,99.9F,102.50F};
```
存储3个布尔值

```c#
bool[] boolArray = {false,true,false};
```

---

## new关键字法

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