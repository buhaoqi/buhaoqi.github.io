---
noteId: "a25d04904f4811f0adaee17699ef0195"
tags: []

---


## split() (分割字符串)

用途

用于将字符串按指定的分隔符分割成一个字符串数组。

语法

```c#
string[] result = 字符串.Split('单字符分隔符');
```

示例

```csharp
string csv = "apple,banana,cherry";
string[] fruits = csv.Split(','); // ["apple", "banana", "cherry"]
```

### 练习

> 输入 3 个整数(0 - 100），存入数组中，并输出平均值。

代码

```c#

```

## string.Join( ) (连接字)

用途

用于将字符串数组按指定的分隔符连接成一个新的字符串。

语法

```c#
string.Join("字符串分隔符", 字符串数组);
```

示例

```csharp
string[] words = { "C#", "is", "awesome" };
string sentence = string.Join(" ", words); // "C# is awesome"
```

### 练习

>声明一个整数数组，包含 5 个元素并初始化为 {1, 2, 3, 4, 5}，打印所有元素。

方法1：

```c#

```

方法2：

```c#

```

方法3：

```c#

```
方法4：

```c#

```

## 创建数组的方法

语法

```C#
// 创建长度为length的整数数组
int[] 数组名 = new int[length];  
```

示例

```c#
// 创建长度为3的整数数组
int[] arrInt = new int[3];
arrInt[0] = 1;
arrInt[1] = 2;
arrInt[2] = 3;
Console.WriteLine(string.Join(' ',arrInt));
```

### 练习

> 输入 5 个整数，存入数组中，并按原顺序输出。

代码

```c#
string s = Console.ReadLine();
```





## 循环语句

循环是空值程序重复执行的语句。循环就是重复做。C#中的循环有四种

- for循环
- while循环
- do-while循环
- foreach循环

## for循环

for循环就是已知循环次数的前提下，进行的重复操作。

语法

```csharp
for (初始化; 条件; 迭代器)
{
    // 循环体
}
```

- 初始化：赋值表达式，循环的起点
- 条件：条件表达式，循环终止的条件
- 迭代器：赋值表达式，控制循环次数

示例：

```js
for ( int n = 0; n < 5; n++){
		Console.WriteLine(n);
}
```

- `let n = 0`  初始化变量 => 循环的起点
- `n < 5` 检测变量 => 循环的终点，控制是否执行循环体。
- `n++` 更新变量 => 控制循环迭代次数

变量`n`被称为“计数器变量”或"循环变量"。通常，循环都有一个计数器变量。

记住：循环变量的三个关键操作

- 初始化
- 检测
- 更新

计数器变量在：

- 循环开始前：计数器变量会被初始化

- 循环迭代前：会测试计数器变量的值
- 循环结束时：更新计数器变量

## 练习


## 参考答案

#### 1. 数字递增打印
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("1-20递增打印:");
        for (int i = 1; i <= 20; i++)
        {
            Console.Write(i + " ");
        }
    }
}
```

#### 2. 倒序打印数字
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("10-1倒序打印:");
        for (int i = 10; i >= 1; i--)
        {
            Console.Write(i + " ");
        }
    }
}
```

#### 3. 偶数求和
```csharp
using System;

class Program
{
    static void Main()
    {
        int sum = 0;
        for (int i = 2; i <= 100; i += 2)
        {
            sum += i;
        }
        Console.WriteLine($"1-100偶数和: {sum}");
    }
}
```

#### 4. 生成 5×5 星号矩阵的代码

```c#
// 定义矩阵的行数和列数
int rows = 5;
int cols = 5;

// 外层循环控制行数
for (int i = 0; i < rows; i++)
{
    // 内层循环控制每行的星号数量
    for (int j = 0; j < cols; j++)
    {
        Console.Write("*");
    }

// 每行结束后换行
Console.WriteLine();
}
```

5.C#生成直角三角形

```c#
*
**
***
****
*****
//静态
for(int i = 1; i <=5; i++){	
  for(int j = 1; j<=i;j++){
    Console.Write('*');
  }
  Console.WriteLine();
}
//动态
Console.Write("请输入三角形高度: ");
  int height = int.Parse(Console.ReadLine());

  for (int row = 1; row <= height; row++)
  {
      for (int col = 1; col <= row; col++)
      {
          Console.Write("*");
      }
      Console.WriteLine();
  }
```

6. 生成倒直角三角形

```c#
*****
****
***
**
*
for(int i = 1; i <=5; i++){
  for(int j = 5; j>=i;j--){
    Console.Write('*');
  }
  Console.WriteLine();
}
```

7. 右上角直角三角形

```c#
*****
 ****
  ***
   **
    *
for(int i = 1; i <=5; i++){
  for(int j = 1; j<=i;j++){
    Console.Write(' ');
  }
  for(int j = 5; j>=i;j--){
    Console.Write('*');
  }
  Console.WriteLine();
}  
空格数 = i
星号数 = 总行数 - i

具体步骤：
1. 外层循环控制行数，从0到4（共5行）
2. 内层第一个循环打印空格，空格数为当前行号（即i）
3. 内层第二个循环打印星号，星号数为5-i
注意：行号从0开始，则第一行空格0个，星号5个；第二行空格1个，星号4个；以此类推。
```

8.右下角直角三角形

```c#
    *
   **
  ***
 ****
*****
      
for(int i = 1; i <=5; i++){	
  for(int j = 4; j>=i;j--){ 
    Console.Write(' ');
  }
  for(int j = 1; j<=i;j++){
    Console.Write('*');
  }
  Console.WriteLine();
}
```

## 练习：分割字符串

> 输入 3 个整数(0 - 100），存入数组中，并输出平均值。


```c#
string s = Console.ReadLine();
string[] arrStr = s.Split(' ');
int sum = 0;
foreach(string n in arrStr){
  sum += int.Parse(n);
}
double d = Math.Round((double)sum / arrStr.Length,2);
Console.WriteLine(d);
```


## 练习：连接字符串

>声明一个整数数组，包含 5 个元素并初始化为 {1, 2, 3, 4, 5}，打印所有元素。

方法1：

```c#
int[] arrInt = {1,2,3,4,5};
foreach(int n in arrInt){
  Console.WriteLine(n);
}
```

方法2：

```c#
int[] arrInt = {1,2,3,4,5};
Console.WriteLine($"{arrInt[0]},{arrInt[1]},{arrInt[2]},{arrInt[3]},{arrInt[4]}");
```

方法3：

```c#
int[] arrInt = {1,2,3,4,5};
Console.WriteLine(string.Join(" ",arrInt));
```

方法4：

```c#
int[] arrInt = {1,2,3,4,5};
for(int i = 0; i < arrInt.Length; i++){
  Console.WriteLine(arrInt[i]);
}
```

## 练习：创建数组的方法

> 输入 5 个整数，存入数组中，并按原顺序输出。

代码

```c#
// 创建一个长度为5的整型数组
int[] numbers = new int[5];

Console.WriteLine("请输入5个整数：");

// 循环读取5个整数
for (int i = 0; i < 5; i++)
{
    Console.Write($"请输入第 {i + 1} 个整数: ");
    numbers[i] = int.Parse(Console.ReadLine());
}

Console.WriteLine("\n按原顺序输出的整数：");

// 循环输出数组中的整数（原顺序）
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"第 {i + 1} 个整数: {numbers[i]}");
}
```



## 九九乘法表

```c#
for (int i = 1; i <= 9; i++)
{
    // 内层循环控制每行的列数（1-i）
    for (int j = 1; j <= i; j++)
    {
        // 格式化输出乘法表达式，使用对齐保证整齐排版
        Console.Write($"{j} × {i} = {i * j}\t");
    }
    Console.WriteLine(); // 每行结束后换行
}
```