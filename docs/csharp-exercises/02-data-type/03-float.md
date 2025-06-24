---
noteId: "6cf657603f8111f081f2eb75db5e372e"
tags: []

---
## 浮点数类型练习

### 1.计算总金额
```
使用变量，向控制台输出总金额(total)。
- 数量(quantity): 3
- 单价(unit price): 29.99
```
### 2.计算圆面积
```
使用变量，向控制台输出圆面积(area)。

- 圆周率(PI): 3.14159
- 半径(radius): 5
```
### 3.银行账户余额（分单位）
```
使用变量存储银行账户余额（以分单位，最大100亿元）
```
### 4.金字塔侧面面积
```
金字塔的侧面是由四个大小相同的等腰三角形构成的。给出三角形的底：90m和高100m，输出其中一个侧面的面积。
```

### 5.梯形面积
```
在梯形中阴影部分面积是150平方厘米，求梯形面积。 上底边：15 下底边25
```

### 6.人民币支付

【题目描述】
```
给定一个金额（以元为单位，如 345），现在想知道支付该金额的各种面额的人民币数量，显示 100 元，50 元，20 元，10 元，5 元，1 元各多少张，要求尽量使用大面额的钞票。
```
【输入】
```
一个小于 1000 的正整数。
```
【输出】
```
输出分行，每行显示一个整数，从上到下分别表示 100 元，50 元，20元，10 元，5 元，1 元人民币的张数。
```
【输入样例】

```
735
```

【输出样例】

```
7
0 
1 
1 
1 
0
```

### 7.成绩
【题目描述】
```
牛牛最近学习了 C#入门课程，这门课程的总成绩计算方法是：

总成绩 = 作业成绩×20%+小测成绩×30%+期末考试成绩×50%

牛牛想知道，这门课程自己最终能得到多少分。
```
【输入】
```
只有 1 行，包含三个非负整数A、B、C，分别表示牛牛的作业成绩、小测成绩和期末考试成绩。相邻两个数之间用一个空格隔开，三项成绩满分都是 100 分。0≤A、B、C≤100且 A、B、C 都是 10 的整数倍。
```
【输出】
```
只有 1 行，包含一个整数，即牛牛这门课程的总成绩，满分也是100 分。
```
【输入样例】

```
100 100 80
```

【输出样例】

```
90
```

### 8.计算球的体积

【题目描述】
```
球是一种很常见的模型，我们都知道它的体积计算公式：

对于半径为 r 的球，其体积的计算公式为 V=43×π×r3(r的立方)  ，这里取π=3.14。

现给定 r，求 V。
```
【输入】
```
输入为一个不超过 100的非负实数，即球半径。
```
【输出】
```
输出一个实数，即球的体积，保留到小数点后 2 位。
```
【输入样例】

```
4
```

【输出样例】

```
267.95
```

### 9.尼克和强盗

【题目描述】
```
有一天一个强盗来到尼克家门口，记下了他家的门牌号——62号，准备晚上再动手。刚好尼克看到了就把门牌号上的十位数字与个位数字调换一下，变成了26号躲过了一劫。试编一程序，输入一个两位数，交换十位与个位并输出。
```
【输入】
```
一个数字门牌号。
```
【输出】
```
变换后的门牌号。
```
【输入样例】

```
67
```

【输出样例】

```
76
```

### 10.完成习题

【题目描述】
```
总共有 xx 道习题，如果今天的目标是完成总数的 30% 的习题，问要完成几道习题。
```
【输入】
```
输入只有一行，一个正整数 xx(0<x<2000)，x 是 10 的倍数。
```
【输出】
```
目标完成的习题数。
```
【输入样例】

```
100
```

【输出样例】

```
30
```

### 11.计算分数的浮点数值

【题目描述】
```
两个整数a和b分别作为分子和分母，即分数ab ，求它的浮点数值(双精度浮点数，保留小数点后9位)。
```
【输入】
```
输入仅一行，包括两个整数a和b。
```
【输出】
```
输出也仅一行，分数ab 的浮点数值（双精度浮点数，保留小数点后9位）。
```
【输入样例】

```
5 7
```

【输出样例】

```
0.714285714
```

题目7：带余除法

【题目描述】

给定被除数和除数，求整数商及余数。此题中请使用默认的整除和取余运算，无需对结果进行任何特殊处理。

【输入】

一行，包含两个整数，依次为被除数和除数（除数非零），中间用一个空格隔开。

【输出】

一行，包含两个整数，依次为整数商和余数，中间用一个空格隔开。

【输入样例】

```
10 3
```

【输出样例】

```
3 1
```
## 答案

```c#
// 1. 计算总金额
int quantity = 3;
double unitPrice = 29.99;
double total = quantity * unitPrice;
Console.WriteLine("1. Total amount: " + total.ToString("0.00"));
```
```c#
// 2. 计算圆面积
double radius = 5;
double pi = 3.14159;
double circleArea = pi * radius * radius;
Console.WriteLine("2. Circle area: " + circleArea.ToString("0.00"));
```
```c#
// 3. 银行账户余额（分单位）
decimal balance = 1000000000000m; // 100亿元=1万亿分
Console.WriteLine("3. Account balance: " + balance + " cents");
```
```c#
//4.金字塔侧面面积
int a = 90,h=100;
float s;
s=a*h/2.0
console.WriteLine(s)
```

```c#
//5.梯形面积
double h,s
  h = 150*2/15
  s = (15+25)*h/2
```

6.人民币支付

```c#                   
Console.WriteLine("输入一个整数");
string s = Console.ReadLine();
int n = int.Parse(s);
Console.WriteLine(n/100);
n%=100;
Console.WriteLine(n/50);
n%=50;
Console.WriteLine(n/20);
n%=20;
Console.WriteLine(n/10);
n%=10;
Console.WriteLine(n/5);
n%=5;
Console.WriteLine(n);

```

7.成绩

```c#
Console.WriteLine("请输入作业成绩、小测成绩、期末考试成绩（空格隔开）：");
string s = Console.ReadLine();

int score1 = int.Parse(s.Substring(0,2));
int score2 = int.Parse(s.Substring(3,2));
int score3 = int.Parse(s.Substring(6,2));

double total = score1 * 0.2 + score2 * 0.3 + score3 * 0.5;
Console.WriteLine(total);
```

8.计算球的体积(F2)

```c#
// 提示输入
Console.WriteLine("请输入球的半径：");

// 读取输入并转换为 double
double r = double.Parse(Console.ReadLine());

// π 取 3.14
double pi = 3.14;

// 计算体积 V = 4/3 * π * r^3
double volume = 4.0 / 3.0 * pi * Math.Pow(r, 3);

// 输出体积，保留2位小数
Console.WriteLine(volume.ToString("F2"));
```

9.尼克和强盗
```c#
// 读取输入
Console.WriteLine("请输入一个两位整数：");
int number = int.Parse(Console.ReadLine());

// 提取十位和个位
int tens = number / 10;      // 十位
int ones = number % 10;      // 个位

// 交换后组成新数
int swapped = ones * 10 + tens;

// 输出结果
Console.WriteLine(swapped);
```

10.完成习题
```c#
// 读取输入（习题总数）
int x = int.Parse(Console.ReadLine());

// 计算目标题数（30%）
int target = x * 30 / 100;

// 输出结果
Console.WriteLine(target);
```

11.计算分数的浮点数值
```c#
// 读取一行输入，并拆分为两个整数
string[] input = Console.ReadLine().Split();
int a = int.Parse(input[0]);
int b = int.Parse(input[1]);

// 计算结果（转为 double 类型）
double result = (double)a / b;

// 输出结果，保留9位小数
Console.WriteLine(result.ToString("F9"));
```

12.带余除法


```c#
// 读取一行输入
string[] inputs = Console.ReadLine().Split();

// 将输入字符串转换为整数
int dividend = int.Parse(inputs[0]);
int divisor = int.Parse(inputs[1]);

// 计算整数商和余数
int quotient = dividend / divisor;
int remainder = dividend % divisor;

// 输出结果
Console.WriteLine($"{quotient} {remainder}");

```