---
noteId: "2691a0a03f3511f081f2eb75db5e372e"
tags: []

---


## 一、选择题(4道)
1.在C#中声明一个整数变量并初始化为10。( )

```c#
______ age = 10;
```

A. float

B. double

C. char

D. int

2.判断下列变量名哪些是合法的。( )

A.int 3dPoint;    
B.string user_name;  
C.double public;  
D.float totalAmount;

3.C#中常量的推荐命名风格是：  
A. 驼峰命名法  
B. 帕斯卡命名法  
C. 全大写命名  
D. 蛇形命名法

4.以下声明方式是否正确？
```csharp
int a, b, c = 10;
```
A. 正确，三个变量都初始化为10  
B. 错误，只有c被初始化  
C. 正确，但需要显式指定类型  

## 二、代码分析题(7道)
1.以下代码有什么问题？
```csharp
int count;
Console.WriteLine(count);
```
2.执行以下代码后，`value`的值是______：
```csharp
int value = 5;
value = 10;
value = value + 3;
```
3..以下代码运行的结果是？  
```csharp
int number = 5;
number = "five";
```
4.以下代码运行的结果是？ 
```csharp
const int MAX_SIZE = 100;
MAX_SIZE = 150;
```
5.这段代码的问题是什么？
```csharp
int a;
int b = 10;
int c = a + b;
Console.WriteLine(c);
```
6.为什么这里使用常量比变量更合适？
```csharp
const double TAX_RATE = 0.08;
double price = 100.0;
double tax = price * TAX_RATE;
double total = price + tax;
```
答案：税率是固定值，使用常量防止意外修改

7.改进以下变量声明：
```csharp
int a = 25;
float b = 3.14;
string c = "John";
```

## 三、填空(3道)
1..声明一个表示圆周率的常量：

```c#  
______ PI = 3.14159;
```
2. 补全缺失的代码。
```csharp
//声明产品数量的变量
______ quantity = 3;
//声明产品价格的常量
______ double UNIT_PRICE = 29.99;
// 计算总价
double total = ______
```

3.补全缺失的代码。
```csharp
// 声明圆周率常量
______ PI = 3.14159;

// 声明半径变量并初始化
double ______ = 5.0;

// 计算圆面积
double area = ________________________
Console.WriteLine(area);
```