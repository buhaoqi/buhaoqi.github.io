---
noteId: "c2957180460511f08a53dd9fb031ea51"
tags: []

---


## 一、if语句是什么
if语句是基于关系判断、逻辑判断的条件语句。

if语句支持单分支、双分支、多分支语句结构，但if语句不是为多分支语句而设计。

## **二、if语句的由来**  

到目前为止，我们写的代码都是按顺序自上而下一行接一行的执行。就像这样：

```csharp
Console.WriteLine("第一步");
Console.WriteLine("第二步");
Console.WriteLine("第三步");
```
这种执行方式虽然简单直接，但过于死板，不能根据情况灵活的进行选择性执行。

想象一下，如果红绿灯永远只显示绿色，或者天气APP永远只显示晴天——这样的程序显然无法应对真实世界的复杂性。

这就是为什么我们需要**条件语句**的原因！

条件语句能让程序根据不同的情况做出不同的反应。比如：

```csharp
if (下雨中)
{
    带伞出门();
}
else
{
    直接出门();
}
```
接下来，我们进入讲解。

---

## if条件的三种形式：

1. if语句 - 单分支
2. if/else语句 - 双分支
3. else if语句 - 多分支

### if单分支语句

if单分支语句是没有备用方案的条件语句。它的语法如下

语法

```c#
if ( 条件表达式 ) {
  语句1;
  语句2;
}
```

- 由关键词if引导
- 紧跟if是一组小括号
- 小括号内填写条件表达式，表达式的计算结果是true或false
- 小括号后跟着一组花括号包裹的语句。

特点

- 只判断一个条件
- 只有当条件为true时，才执行花括号包裹的语句；否则，就跳过，什么也不执行；

示例

```csharp
int score = 85;
if (score >= 60)
{
    Console.WriteLine("及格了！");
}
```

✅ 解读：

* 当分数为85时，条件表达式 为 **true**，就执行花括号内的代码；
* 如果分数为45，条件表达式为**false**，就跳过花括号，什么也不做。

---

### if else语句
if / else语句是只有一个备选方案的条件语句。它的语法如下

语法

```c#
if ( 条件表达式 ) {
    语句A;
} else {
    语句B;
}
```

特点：

- 也只有一个判断条件
- 即满足条件就执行语句A
- 不满足条件就执行语句B。

示例

```csharp
int score = 45;
if (score >= 60)
{
    Console.WriteLine("及格了");
}
else
{
    Console.WriteLine("不及格");
}
```
✅ 解读：

如果分数是85，则条件为true,程序就执行第一组花括号的内容；
如果分数是45，则条件为false,程序就执行第二组花括号的内容；

---

### else if

else if语句提供了多个备选方案。它的语法如下：

语法

```c#
if(表达式A){// 如果(a > b) 成立，那么执行后面的代码块A
    //代码块A
}else if(表达式B){//否则，如果(a>c)成立，那么执行后面的代码块B
    //代码块B
}else{//否则就执行代码块C 
    
    //代码块C
}
```

示例

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("优秀");
}
else if (score >= 70)
{
    Console.WriteLine("良好");
}
else
{
    Console.WriteLine("加油！");
}
```

程序会从上往下依次判断，一旦匹配，就不再往下走。

这就像考试打等级，从优秀到加油，总有一个“条件区间”能套得住你。

---

## 嵌套条件语句

条件语句可以嵌套使用，但不要太深，否则代码难读。

```csharp
int x = 5, y = 10;

if (x < y)
{
    if (x > 0)
    {
        Console.WriteLine("x 小于 y 且 x 大于 0");
    }
}
```


## 总结

今天我们学会了让程序“思考和选择”。

* `if` 是程序的“判断题”，成立就执行里面的内容；
* `if...else` 可以做“二选一”的判断；
* `else if` 可以做“多选一”的判断；

if 语句常用于用于关系判断和逻辑判断。

- 关系判断：就是比较两个值的大小，从而决定如何执行程序。
- 逻辑判断：就是从逻辑上，组合多个条件进行判断



---

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。

你的支持是我更新最大的动力！我们下节课见！

下节预告：《SWITCH条件语句》

慢慢学，一点点进步就很好！


## 练习

### 1.判断奇偶数

```csharp
int num = 7;
if (num % 2 == 0)
{
    Console.WriteLine("偶数");
}
else
{
    Console.WriteLine("奇数");
}
```

### 2.登录验证

```csharp
string user = "admin";
string pass = "123456";

if (user == "admin" && pass == "123456")
{
    Console.WriteLine("登录成功");
}
else
{
    Console.WriteLine("用户名或密码错误");
}
```

### 3.判断正负和零
1. 输入一个整数，判断它是正数、负数还是零。

### 4.考试成绩等级
2. 输入考试成绩，输出等级（90以上优秀，70以上良好，其余加油）。
### 5.用户登录
3. 输入用户名和密码，验证是否登录成功。

---





## 五、实战练习：简单登录验证系统

```csharp
Console.WriteLine("请输入用户名：");
string username = Console.ReadLine();

Console.WriteLine("请输入密码：");
string password = Console.ReadLine();

if (username == "admin" && password == "123456")
{
    Console.WriteLine("登录成功！");
}
else
{
    Console.WriteLine("用户名或密码错误！");
}
```

---