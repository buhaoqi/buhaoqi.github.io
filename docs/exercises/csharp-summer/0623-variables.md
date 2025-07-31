---
noteId: "9763f4404f7a11f0adaee17699ef0195"
tags: []

---

今日作业：

1. 《变量与常量》测试题：[https://wj.qq.com/s2/22908897/0d8c/](https://wj.qq.com/s2/22908897/0d8c/)
2. 变量名中遇到不会的英文单词，动手查，别犯懒。常见的英语单词务必记住：
   ```
   登录：login
   平均: average
   分数: score
   完成: complete
   产品: product
   价格: price
   ```
3. 阅读变量与常量知识点：[http://buhaoqi.com/csharp/01-get-started/05-variable-constant/](http://buhaoqi.com/csharp/01-get-started/05-variable-constant/)

## 练习



### 单选题（10道）

**1. 下列哪个是合法的变量名？**

A. `int`

B. `my-variable`

C. `_count1`

D. `123name`

---

**2. 下列哪个字符可用在变量名开头？**

A. -
B. $
C. &
D. _

---

**3. 以下哪个是正确的命名常量的方式？**

A. `const int MAXVALUE = 100;`

B. `Const Int maxValue = 100;`

C. `const int max-value = 100;`

D. `const int 1maxValue = 100;`

---

**4. 在 C# 中，变量名可以包含哪些字符？**

A. 字母、数字、下划线

B. 空格

C. 运算符如 `+ - * /`

D. 标点符号


---

**5. 以下哪个变量名违反了命名规则？**

A. `price2025`

B. `float`

C. `totalSum`

D. `user_Name`


---

**6. 变量名中不能包含什么？**

A. 数字

B. 下划线

C. 空格

D. 大写字母

---

**7. 变量命名推荐使用哪种命名风格？**

A. 全大写

B. 小写字母加下划线分隔

C. 驼峰式命名（camelCase）

D. 随意命名

---

**8. 下列哪一个是 Pascal 命名法的例子？**

A. `studentAge`

B. `StudentAge`

C. `student_age`

D. `studentage`

---

**9. 关于变量命名的说法，正确的是？**

A. 变量名必须使用中文

B. 变量名必须以数字开头

C. 变量名区分大小写

D. 变量名可以和类名一样


---

**10. 微软官方推荐使用什么风格命名常量？**

A. camelCase

B. PascalCase

C. 全小写

D. 全大写加下划线分隔


---

### 操作题(10道)

说明：不需写完整代码，只写变量名或常量名

**1. 命名一个表示“学生年龄”的变量。**

**2. 命名一个常量，表示“最大登录次数”（使用微软官方推荐法）。**

**3. 命名一个变量表示商品价格。**

**4. 命名一个变量表示用户姓名。**

**5. 命名一个表示程序是否已完成的布尔变量（以 is/has 开头）。**

**6. 命名一个变量表示图书的 ISBN 编号。**

**7. 命名一个表示平均成绩的变量。**

**8. 命名一个常量表示“圆周率”。**

**9. 命名一个变量表示用户是否在线。**

**10. 命名一个变量表示应用程序当前版本号。**

---

## 参考答案

单选题

```bash
1-5 CDAAB
6-10 CCBCB
```

操作题

1. 命名一个表示“学生年龄”的变量（使用 camelCase）	studentAge
2. 命名一个常量，表示“最大登录次数”	MaxLoginAttempts
3. 命名一个变量表示商品价格	productPrice
4. 命名一个变量表示用户姓名	userName
5. 命名一个布尔变量，表示程序是否已完成	isCompleted
6. 命名一个变量表示图书的 ISBN 编号	bookIsbn
7. 命名一个变量表示平均成绩	averageScore
8. 命名一个常量表示“圆周率”	Pi
9. 命名一个变量表示用户是否在线	isOnline
10. 命名一个变量表示应用程序当前版本号	appVersion



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