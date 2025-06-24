---
noteId: "d42487b0460511f08a53dd9fb031ea51"
tags: []

---
## 练习:基础(24 道)

### 1.阶乘计算

**题目描述：**
声明一个能存储 5 个整数的数组，并把它们初始化为：`1, 2, 3, 4, 5`。

✅ **你的任务：**

1. 声明数组。
2. 初始化数组。
3. 对数组元素进行阶乘计算。
4. 把结果输出到控制台。

### 2.欢迎上台表演

**题目描述：**
声明一个字符串数组，存储 3 个名字：“Tom”，“Jerry”，“Spike”。

✅ **你的任务：**

1. 初始化数组。
2. 把最后一个数组元素的值修改为"Joe"。
3. 输出“ 欢迎TOM，Jerry和Joe上台表演。"

### 3.猜单词

**题目描述：**
声明一个字符数组，包含 6个字母：'O'，'S'，'A'，'E'，'W', 'E','M' 并输出它们拼成的字符串。

✅ **你的任务：**

1. 初始化数组
2. 使用上面的6个字母拼成一个英语单词，输出到控制台

### 4.取反数组元素

**题目描述：**
声明一个长度为 3 的布尔数组，初始值为：`true, false, true`，并输出每个元素的值。

✅ **你的任务：**

1. 初始化数组
2. 取反每个数组元素，并把所有数组元素输出到控制台。

### 5.求和

**题目描述：**
声明一个浮点型数组，包含：`3.14`、`2.71`、`1.41`，输出所有元素的总和。

### 6.求数组求平均值

**题目描述：**
声明一个能存储 4 个整数的数组，并把它们初始化为：`60, 80, 95, 78`。

✅ **你的任务：**

1. 声明数组。
2. 初始化数组。
3. 输出平均值。(注：Math.Round(浮点数,小数点后精确的位数)方法)
### 7.求平均值
请分别输入3个整数分数，存储在数组scores中，输出平均值（精确到小数点后2位）

### 8.求平均值
请一次性输入3个整数分数，存储在数组scores中，输出平均值（精确到小数点后2位）

### 9.打印数组元素
声明一个整数数组，包含 5 个元素并初始化为 {1, 2, 3, 4, 5}，打印所有元素。

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

## 答案:基础(24 道)

1.阶乘计算
```c#
using System;

class Program
{
    static void Main()
    {
        // 1. 声明并初始化数组
        int[] numbers = { 10, 20, 30, 40, 50 };

        // 2. 升序排序（虽然本例中已是升序）
        Array.Sort(numbers);

        // 3. 输出数组元素
        Console.WriteLine("升序排列后的数组是：");
        foreach (int num in numbers)
        {
            Console.WriteLine(num);
        }
    }
}
```
2.欢迎上台表演
```c#
using System;

class Program
{
    static void Main()
    {
        // 1. 初始化字符串数组
        string[] names = { "Tom", "Jerry", "Spike" };

        // 2. 修改最后一个元素为 "Joe"
        names[2] = "Joe";

        // 3. 输出指定格式的字符串（注意大小写和格式）
        Console.WriteLine($"欢迎{names[0]}，{names[1]}和{names[2]}上台表演。");
    }
}

```
3.猜单词
```c#
using System;
					
public class Program
{
	public static void Main()
	{
		char[] c = {'O','S','A','E','W','m' };
		

Console.WriteLine($"{c[2]}{c[4]}{c[1]}{c[0]}{c[5]}{c[3]}");
	}
}
```
4.取反数组元素
```c#
using System;

class Program
{
    static void Main()
    {
        // 1. 初始化布尔数组
        bool[] flags = { true, false, true };

        // 2. 取反每个元素
        for (int i = 0; i < flags.Length; i++)
        {
            flags[i] = !flags[i];
        }

        // 3. 输出所有元素
        Console.WriteLine("取反后的布尔数组元素：");
        foreach (bool flag in flags)
        {
            Console.WriteLine(flag);
        }
    }
}

```
5.求和
```c#
using System;

class Program
{
    static void Main()
    {
        // 声明并初始化浮点型数组
        double[] numbers = { 3.14, 2.71, 1.41 };

        // 计算总和
        double sum = 0;
        foreach (double num in numbers)
        {
            sum += num;
        }

        // 输出总和
        Console.WriteLine("数组元素的总和是：" + sum);
    }
}

```
6.求数组求平均值

```csharp
int[] scores = {60, 80, 95,78};
int sum = 0;
foreach (int score in scores)
{
    sum += score;
}
double avg = (double)sum / scores.Length;
Console.WriteLine("平均分：" + avg.ToString("F2"));
```
7.求平均值
请分别输入3个整数分数，存储在数组scores中，输出平均值（精确到小数点后2位）

```c#
//定义变量
double average = 0;
int sum = 0;
//new一个长度为3的数组
int[] scores = new int[3];
//分别输入语数外三门成绩
Console.WriteLine("语文成绩");
scores[0] = int.Parse(Console.ReadLine());
Console.WriteLine("数学成绩");
scores[1] = int.Parse(Console.ReadLine());
Console.WriteLine("英语成绩");
scores[2] = int.Parse(Console.ReadLine());
//计算总分
foreach(int score in scores)
{
    sum += score;
}
//平均分= 总分/3 
//Math.Round(小数,保留位数)
average = Math.Round((double)sum / scores.Length,2); //(double)显式转换数据类型
Console.WriteLine(average);
```
8.求平均值
请一次性输入3个整数分数，存储在数组scores中，输出平均值（精确到小数点后2位）
```csharp
//定义变量
double average = 0;
int sum = 0;
//new一个长度为3的数组
//输入一行，包括语数外三门成绩
Console.WriteLine("输入语数外三门成绩，空格隔开");
string str = Console.ReadLine();
//将str转数组
string[] scores = str.Split(' ');
for (int i=0; i<scores.Length; i++)
{
    sum += int.Parse(scores[i]);
}
average = Math.Round((double)sum / scores.Length,2); //(double)显式转换数据类型
Console.WriteLine(average);
```

9.打印数组元素
声明一个整数数组，包含 5 个元素并初始化为 {1, 2, 3, 4, 5}，打印所有元素。

方法1：string.Join()

```c#
int[] arrInt = {1,2,3,4,5};
string result = string.Join(" ", arrInt);
Console.WriteLine(result);
```

方法2：foreach

```c#
int[] arrInt = {1,2,3,4,5};
string result = '';
foreach(int num in arrInt){
    result = result + string.Parse(num);
}
Console.WriteLine(result);
```

方法3：

```c#

```
方法4：

```c#

```
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

## 练习:Array.Sort()（10道）

1. 将整数数组 `{9, 4, 2, 7, 1}` 使用 `Array.Sort()` 按升序排序。
2. 将字符串数组 `{ "banana", "apple", "cherry" }` 使用 `Array.Sort()` 按字典顺序排序。
3. 将数组 `{ 10, 2, 8, 5, 3 }` 使用 `Array.Sort()` 排序后，再使用 `Array.Reverse()` 实现降序排序。
4. 将数组 `{ 5, 9, 2, 7, 6, 1 }` 的第 2 个元素起连续 3 个元素（即 9, 2, 7）按升序排序。
5. 对数组 `{ 100, 50, 200, 30, 10 }` 的最后三个元素使用区间排序。
6. 对数组 `{ "dog", "cat", "apple", "zebra", "bat" }` 的中间 3 个元素排序后，再整体倒序输出。
7. 将浮点数组 `{3.1, 2.4, 5.6, 1.2}` 进行升序排序。
8. 将数组 `{ 5, 4, 3, 2, 1 }` 通过排序和反转的方式变为 `{1, 2, 3, 4, 5}`，再变为 `{5, 4, 3, 2, 1}`。
9. 给定数组 `{8, 3, 7, 9, 2, 6}`，只对下标 1 \~ 4 的元素进行排序，不影响其他位置。
10. 对字符串数组 `{ "Sun", "Earth", "Mars", "Venus" }` 使用 `Array.Sort()` 排序，再用 `Array.Reverse()` 实现降序排序。
## 答案:Array.Sort()（10道）

```c#
// 题 1：升序排序整数数组
int[] arr1 = { 9, 4, 2, 7, 1 };
Array.Sort(arr1);
Console.WriteLine("题1: " + string.Join(", ", arr1));

// 题 2：按字典顺序排序字符串数组
string[] arr2 = { "banana", "apple", "cherry" };
Array.Sort(arr2);
Console.WriteLine("题2: " + string.Join(", ", arr2));

// 题 3：升序后再倒序（降序）
int[] arr3 = { 10, 2, 8, 5, 3 };
Array.Sort(arr3);
Array.Reverse(arr3);
Console.WriteLine("题3: " + string.Join(", ", arr3));

// 题 4：区间排序部分数组
int[] arr4 = { 5, 9, 2, 7, 6, 1 };
Array.Sort(arr4, 1, 3); // 排序元素9,2,7
Console.WriteLine("题4: " + string.Join(", ", arr4));

// 题 5：最后三个元素排序
int[] arr5 = { 100, 50, 200, 30, 10 };
Array.Sort(arr5, 2, 3); // 200, 30, 10
Console.WriteLine("题5: " + string.Join(", ", arr5));

// 题 6：中间三个字符串排序+整体倒序
string[] arr6 = { "dog", "cat", "apple", "zebra", "bat" };
Array.Sort(arr6, 1, 3); // cat, apple, zebra
Array.Reverse(arr6);
Console.WriteLine("题6: " + string.Join(", ", arr6));

// 题 7：浮点数排序
double[] arr7 = { 3.1, 2.4, 5.6, 1.2 };
Array.Sort(arr7);
Console.WriteLine("题7: " + string.Join(", ", arr7));

// 题 8：先升序再降序
int[] arr8 = { 5, 4, 3, 2, 1 };
Array.Sort(arr8);
Console.WriteLine("题8-升序: " + string.Join(", ", arr8));
Array.Reverse(arr8);
Console.WriteLine("题8-降序: " + string.Join(", ", arr8));

// 题 9：仅对中间部分排序
int[] arr9 = { 8, 3, 7, 9, 2, 6 };
Array.Sort(arr9, 1, 4); // 3, 7, 9, 2 => 2,3,7,9
Console.WriteLine("题9: " + string.Join(", ", arr9));

// 题 10：字符串排序后倒序
string[] arr10 = { "Sun", "Earth", "Mars", "Venus" };
Array.Sort(arr10);
Array.Reverse(arr10);
Console.WriteLine("题10: " + string.Join(", ", arr10));
```

---

## 练习:中级题（15 道）

1. 对一个整数数组先升序排序（`Sort()`），再倒序（`Reverse()`），实现降序排列。
2. 给定一个数组 `[1, 3, 5, 3, 1]`，找出值为 `3` 的第一个和最后一个索引。
3.  用 `Find()` 找出数组 `[11, 22, 33, 44]` 中第一个能被 11 整除的元素。
4.  在数组 `[3, 6, 9, 12]` 中找出所有能被 6 整除的数（`FindAll()`）。
5.  判断数组 `[-2, -4, -6, -8]` 是否所有值都是负数（`TrueForAll()`）。
6.  给定字符串数组 `["apple", "banana", "cherry", "apricot"]`，找出所有以 "a" 开头的元素。
7.  写一段代码判断数组是否已按升序排列（提示：配合 `Sort()` 和 `SequenceEqual()`）。
8.  找出数组中第一个值为奇数且大于 10 的元素。
9.  编写一个方法，接受任意整数数组，返回所有偶数元素组成的新数组（使用 `FindAll()`）。
10. 给定数组 `[1, 2, 3, 4, 5]`，使用 `Reverse()` 和 `IndexOf()` 找出原来倒数第二个元素现在的新索引。
11. 查找数组 `[2, 4, 6, 8]` 中不存在的值 `7` 的索引，并处理结果避免错误输出。
12. 给定数组 `[100, 90, 80, 70, 60]`，不使用 `Sort()`，而是先 `Reverse()` 再判断是否降序排列。
13. 使用 `Exists()` 判断字符串数组中是否有空字符串 `""`。
14. 判断数组中是否所有字符串长度都大于 0（使用 `TrueForAll()`）。
15. 综合题：定义一个整数数组，输出其中所有能被 3 整除但不能被 5 整除的元素（使用 `FindAll()`）。

------

## 答案:中级题（15 道）

```c#
/// 1. Sort + Reverse (降序)
int[] arr1 = { 7, 2, 9 };
Array.Sort(arr1);
Array.Reverse(arr1);

// 2. IndexOf & LastIndexOf
int[] arr2 = { 1, 3, 5, 3, 1 };
int first3 = Array.IndexOf(arr2, 3);
int last3 = Array.LastIndexOf(arr2, 3);

// 3. Find divisible by 11
int[] arr3 = { 11, 22, 33, 44 };
int firstDiv11 = Array.Find(arr3, n => n % 11 == 0);

// 4. FindAll divisible by 6
int[] arr4 = { 3, 6, 9, 12 };
int[] div6 = Array.FindAll(arr4, n => n % 6 == 0);

// 5. All negative
int[] arr5 = { -2, -4, -6, -8 };
bool allNegative = Array.TrueForAll(arr5, n => n < 0);

// 6. FindAll starts with 'a'
string[] fruits = { "apple", "banana", "cherry", "apricot" };
string[] startsA = Array.FindAll(fruits, f => f.StartsWith("a"));

// 7. Check if sorted ascending
int[] arr6 = { 1, 2, 3, 4 };
int[] sorted = (int[])arr6.Clone();
Array.Sort(sorted);
bool isSorted = arr6.SequenceEqual(sorted);

// 8. Find odd > 10
int[] arr7 = { 3, 8, 11, 13 };
int res1 = Array.Find(arr7, x => x % 2 == 1 && x > 10);

// 9. Method return even numbers
int[] EvenOnly(int[] input) => Array.FindAll(input, n => n % 2 == 0);

// 10. Reverse and find original 2nd-last index
int[] arr8 = { 1, 2, 3, 4, 5 };
int original = arr8[arr8.Length - 2];
Array.Reverse(arr8);
int newIndex = Array.IndexOf(arr8, original);

// 1. Not found IndexOf
int[] arr9 = { 2, 4, 6, 8 };
int idx = Array.IndexOf(arr9, 7); // -1

// 12. Check descending after reverse
int[] arr10 = { 100, 90, 80, 70, 60 };
Array.Reverse(arr10);
bool isDesc = arr10.SequenceEqual(arr10.OrderByDescending(x => x).ToArray());

// 13. Exists empty string
string[] strArr = { "hello", "", "world" };
bool hasEmpty = Array.Exists(strArr, s => s == "");

// 14. All strings length > 0
bool allNonEmpty = Array.TrueForAll(strArr, s => s.Length > 0);

// 15. FindAll: %3==0 and %5!=0
int[] arr11 = { 3, 5, 6, 9, 10, 12, 15 };
int[] res2 = Array.FindAll(arr11, x => x % 3 == 0 && x % 5 != 0);
```
## 练习:基础
```csharp
// 示例：题1 - 打印固定数组

int[] arr1 = {1, 2, 3, 4, 5};

Console.WriteLine(string.Join(" ", arr1));

// 示例：题2 - 字符串数组访问

string[] cities = {"北京", "上海", "广州"};

Console.WriteLine(cities[0] + " " + cities[2]);

// 示例：题3 - 输入5个整数

int[] arr3 = new int[5];

for (int i = 0; i < 5; i++)

    arr3[i] = int.Parse(Console.ReadLine());

Console.WriteLine(string.Join(" ", arr3));

// 示例：题4 - 找最大值

int[] arr4 = {4, 1, 9, 3, 5};

Console.WriteLine(arr4.Max());

// 示例：题5 - 求平均值

int[] arr5 = {4, 6, 8, 10, 12};

Console.WriteLine(arr5.Average());

// 示例：题6 - 求和

int[] arr6 = {3, 5, 7, 2, 8};

Console.WriteLine(arr6.Sum());

// 示例：题7 - 所有元素乘2

int[] arr7 = arr6.Select(x => x * 2).ToArray();

Console.WriteLine(string.Join(" ", arr7));

// 示例：题8 - 查找元素

int find8 = 5;

Console.WriteLine(arr6.Contains(find8));

// 示例：题9 - 找第一个负数

int[] arr9 = {2, -3, 4, -1};

Console.WriteLine(arr9.First(x => x < 0));

// 示例：题10 - 统计正数

Console.WriteLine(arr9.Count(x => x > 0));

// 示例：题11 - 反转

Array.Reverse(arr9);

Console.WriteLine(string.Join(" ", arr9));

// 示例：题12 - 数组复制

int[] copy12 = new int[arr9.Length];

Array.Copy(arr9, copy12, arr9.Length);

Console.WriteLine(string.Join(" ", copy12));

// 示例：题13 - 判断是否为空

int[] arr13 = new int[0];

Console.WriteLine(arr13.Length == 0);

// 示例：题14 - 输出指定索引

int idx14 = 2;

Console.WriteLine(idx14 < arr6.Length ? arr6[idx14].ToString() : "索引越界");

// 示例：题15 - 打印大写字母

char[] arr15 = {'A','b','C','d'};

foreach (char c in arr15) if (char.IsUpper(c)) Console.Write(c + " ");
```
## 练习:进阶
```csharp
// 示例：题1 - 排序

Array.Sort(arr6);

Console.WriteLine(string.Join(" ", arr6));

// 示例：题2 - 反转

Array.Reverse(arr6);

Console.WriteLine(string.Join(" ", arr6));

// 示例：题3 - 输入10个数找最大最小

int[] arr18 = new int[10];

for (int i = 0; i < 10; i++) arr18[i] = int.Parse(Console.ReadLine());

Console.WriteLine($"Max: {arr18.Max()} Min: {arr18.Min()}");

// 示例：题4 - 全部偶数？

Console.WriteLine(Array.TrueForAll(arr6, x => x % 2 == 0));

// 示例：题5 - 提取偶数

int[] evens20 = Array.FindAll(arr6, x => x % 2 == 0);

Console.WriteLine(string.Join(" ", evens20));

// 示例：题6 - 合并数组

int[] arr21a = {1,2}, arr21b = {3,4};

int[] merged21 = arr21a.Concat(arr21b).ToArray();

Console.WriteLine(string.Join(" ", merged21));

// 示例：题7 - 删除元素（5）

int[] arr22 = {1,5,3,5,4};

arr22 = arr22.Where(x => x != 5).ToArray();

Console.WriteLine(string.Join(" ", arr22));

// 示例：题8 - 有重复元素？

int[] arr23 = {1,2,3,1};

Console.WriteLine(arr23.Length != arr23.Distinct().Count());

// 示例：题9 - 大于平均数

double avg24 = arr6.Average();

Console.WriteLine(string.Join(" ", arr6.Where(x => x > avg24)));

// 示例：题10 - Find第一个被3整除

Console.WriteLine(Array.Find(arr6, x => x % 3 == 0));

// 示例：题11 - FindAll被5整除

Console.WriteLine(string.Join(" ", Array.FindAll(arr6, x => x % 5 == 0)));

// 示例：题12 - IndexOf

Console.WriteLine(Array.IndexOf(arr6, 8));

// 示例：题13 - 负数替换为0

int[] arr28 = {-1,2,-3};

arr28 = arr28.Select(x => x < 0 ? 0 : x).ToArray();

Console.WriteLine(string.Join(" ", arr28));

// 示例：题14 - 元素次数统计

int[] arr29 = {1,2,1,3};

Console.WriteLine(arr29.Count(x => x == 1));

// 示例：题15 - 去重

int[] arr30 = {1,2,2,3,3};

Console.WriteLine(string.Join(" ", arr30.Distinct()));

// 示例：题16 - 比较数组是否相等

int[] a31 = {1,2,3}, b31 = {1,2,3};

Console.WriteLine(a31.SequenceEqual(b31));

// 示例：题17 - Copy部分

int[] copy32 = new int[3];

Array.Copy(a31, copy32, 3);

Console.WriteLine(string.Join(" ", copy32));

// 示例：题18 - 是否有相同元素

Console.WriteLine(a31.Intersect(b31).Any());

// 示例：题19 - 奇数索引上的元素

Console.WriteLine(string.Join(" ", a31.Where((x, i) => i % 2 == 1)));

// 示例：题20 - Resize

Array.Resize(ref a31, 5);

Console.WriteLine(string.Join(" ", a31));
```
## 练习:应用题

```csharp
// 示例：题1 - 成绩平均

int[] score36 = {80, 90, 85, 70, 95};

Console.WriteLine($"总分: {score36.Sum()}, 平均: {score36.Average()}");

// 示例：题2 - 彩票随机数

Random r = new Random();

int[] lottery = new int[7];

for (int i = 0; i < 7; i++) lottery[i] = r.Next(1, 31);

Console.WriteLine(string.Join(" ", lottery));

// 示例：题3 - 模拟菜单（略）

// 示例：题4 - IsSorted

bool isSorted = a31.SequenceEqual(a31.OrderBy(x => x));

Console.WriteLine("是否升序: " + isSorted);

// 示例：题5 - 回文

int[] pal = {1,2,3,2,1};

Console.WriteLine(pal.SequenceEqual(pal.Reverse()));

// 示例：题6 - MergeSorted略

// 示例：题7 - CountGreaterThan

int[] arr42 = {3, 8, 5};

int x42 = 4;

Console.WriteLine(arr42.Count(n => n > x42));

// 示例：题8 - 所有连续子数组

int[] arr43 = {1,2,3};

for (int i = 0; i < arr43.Length; i++)

    for (int j = i; j < arr43.Length; j++)

        Console.WriteLine(string.Join(" ", arr43[i..(j+1)]));

// 示例：题9 - 第二大

int[] arr44 = {4,5,1,3};

Console.WriteLine(arr44.Distinct().OrderByDescending(x => x).Skip(1).First());

// 示例：题10 - 是否逆序

int[] arr45a = {1,2,3}, arr45b = {3,2,1};

Console.WriteLine(arr45a.SequenceEqual(arr45b.Reverse()));

// 示例：题11 - 队列操作

int[] queue = {5,6,7};

queue = (new int[]{4}).Concat(queue).ToArray(); // 头部添加

queue = queue.Take(queue.Length - 1).ToArray(); // 尾部删除

Console.WriteLine(string.Join(" ", queue));

// 示例：题12 - 最高分学生编号

int[] scores47 = {78, 92, 85};

int maxIdx = Array.IndexOf(scores47, scores47.Max());

Console.WriteLine("编号: " + (maxIdx + 1));

// 示例：题13 - 二维数组按行输出

int[,] mat = { {1,2}, {3,4} };

for (int i = 0; i < 2; i++)

    for (int j = 0; j < 2; j++)

        Console.Write(mat[i,j] + " ");

// 示例：题14 - 斐波那契

int[] fib = new int[10]; fib[0]=0; fib[1]=1;

for (int i=2;i<10;i++) fib[i]=fib[i-1]+fib[i-2];

Console.WriteLine(string.Join(" ", fib));

// 示例：题15 - ReverseArray

int[] ReverseArray(int[] arr) => arr.Reverse().ToArray();

Console.WriteLine(string.Join(" ", ReverseArray(new int[]{1,2,3})));
```
