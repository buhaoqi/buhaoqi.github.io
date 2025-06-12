---
noteId: "d42487b0460511f08a53dd9fb031ea51"
tags: []

---

## 数组是什么？

数组(Array)是一组相同类型值的有序集合。

特点：

1. 同类型：每个值的数据类型必须相同。值的类型可以是整型、浮点型、字符串型、布尔型、字符型等。
2. 有序性：数组中的每个值都有固定位置。第一个元素的下标是0，第2个元素的下标是1，依次类推，最后一个数组元素的下标是数组长度-1。
3. 固定性：数组的长度是固定的。一旦创建，长度不能更改，你不能添加或删除数组元素。

## 相关术语

- 元素：数组的每一个值被称为“元素”。
- 下标：数组的每一个值的位置使用一个整数表示，称为“下标”。

## 创建数组

### 数组初始化法

定义：声明数组时直接初始化(赋值)

创建整型数组（int, long, short, byte ）：

```csharp
int[] arrNum = {1, 2, 3, 4, 5};
```
语法结构说明

- int[]
- arrNum
- `=` :
- 花括号包裹
- 逗号分隔多个值。(注意：最后一个值后面不需要逗号)

创建浮点数类型的数组（float, double）：

```csharp
double[] grades = {90.5, 87.0, 100.0};
```
创建字符类型的数组（char）：

```csharp
char[] letters = {'A', 'B', 'C'};
```
创建字符串类型的数组（string）：

```csharp
string[] names = {"Alice", "Bob", "Charlie"};
```

创建布尔值类型的数组（bool）：

```csharp
bool[] flags = {true, false, true};
```
### new关键字法
定义：声明数组类型并指定长度。

语法
```C#
int[] 数组名 = new int[length]; //创建长度为length的空数组
数组名[index] = 值1; //修改数组元素
数组名[index] = 值2; 
```

- `new` : 用于创建类的实例
- `new int[]` 创建`int[]`类的实例
- `int[]`：具体的整型数组类，继承自System.Array
- `length`:指定数组的长度。

示例

```c#
int[] numbers = new int[5];
numbers[0] = 1;
numbers[2] = 2;
```

数组类型关系图

```c#
System.Object
    ↑
System.Array (抽象类)
    ↑
System.Int32[] (具体数组类型)
    ↑
int[] (C# 别名)
```

## 课堂练习

1. 声明一个字符型数组，存储：abcd
2. 声明一个整型数组，存储：123
3. 声明一个字符串数组，存储：张三、李四、王二
4. 声明一个浮点数组，存储：9.99，5.8，12.6
5. 声明一个布尔数组，存储：True False True

## 访问数组元素的语法

通过下标访问数组元素。

语法
```c#
数组名[下标];
```
示例
```csharp
int[] nums = {10, 20, 30};

Console.WriteLine(nums[0]); // 输出10
Console.WriteLine(nums[2]); // 输出30
```
## 修改数组元素的语法
语法
```c#
数组名[下标] = 新值;
```
示例
```c#
int[] nums = {10, 20, 30};
nums[1] = 40;
Console.WriteLine(nums[1]); // 输出40
```
## 获取数组长度

语法

```c#
数组名.Length; //返回数组长度
```
示例
```csharp
int[] nums = {1, 2, 3, 4, 5};
Console.WriteLine(nums.Length); // 输出 5
```
## 遍历数组

定义：逐个访问数组中的每一个元素。

方法1: for循环遍历


方法2：foreach方法遍历

语法（`foreach` 遍历）

```csharp
foreach (类型 变量名 in 集合)
{
    // 使用变量名访问当前元素，执行操作
}
```
`foreach` 会依次访问集合中的每个元素，直到遍历完所有元素。


示例

```csharp
int[] numbers = {1, 2, 3};
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

输出：

```
1
2
3
```

注意

* `foreach` 循环中，**不能修改集合元素的值**（元素是只读的）。
* 适合读取集合元素，避免使用传统 `for` 循环时的索引错误。

方法3：插值字符串遍历

---
## 常见操作小结：

| 操作       | 示例                    |
| ---------- | ----------------------- |
| 声明数组   | `int[] a;`              |
| 创建数组   | `int[] a = new int[3];` |
| 初始化数组 | `int[] a = {1, 2, 3};`  |
| 获取长度   | `a.Length`              |
| 访问元素   | `a[0]`                  |
| 修改元素   | `a[1] = 100;`           |
| 遍历数组   | `for` / `foreach`       |

## 数组常见错误（要避免）

| 错误                             | 示例                    |
| -------------------------------- | ----------------------- |
| 越界访问数组                     | `a[5]`（如果长度是 5）  |
| 忘记初始化数组                   | `int[] a; a[0] = 1;`    |
| 不同类型放入数组（类型必须一致） | `int[] a = {1, "abc"};` |

---

## 数组练习题

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
3. 输出平均值。（注：Math.Round(浮点数,小数点后精确的位数)方法)
---

## 参考答案

### 1.阶乘计算
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
### 2.欢迎上台表演
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
### 3.猜单词
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
### 4.取反数组元素
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
### 5.求和
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
### 6.求数组求平均值

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