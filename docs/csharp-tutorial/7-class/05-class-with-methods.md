---
noteId: "2ccfd200697611f0bb9b1f35beaaf3f9"
tags: []

---


## **开场**  

> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第25课《方法的基础知识》。
> 
> 我是张杰。
> 
> 今天我的学习目标：掌握方法的定义、参数传递和调用，理解为什么要“封装代码块”。今天我们要学习的是方法的基本结构与调用。

---

## 需要提前讲的知识点

- static静态方法
- 类中代码的位置
- 类中代码的工作机制

## 方法的由来

案例：求一个整数的平方

```c# linenums="1"
int a = 5;
int result = a * a;
Console.WriteLine(result);

a = 6;
result = a * a;
Console.WriteLine(result);

a = 7;
result = a * a;
Console.WriteLine(result);
```

这段代码存在三个问题：

1. 代码逻辑重复了三遍
2. 维护困难，如果要修改输出格式，需要修改多处
3. 可读性差：代码意图被重复的细节淹没

## 改造代码

### 第一步：方法体

使用花括号把重复的代码包裹起来，形成一个代码块，称之为“方法体”。我们希望方法体可以重复调用。

```c# linenums="1"
{
    int a = 5;
    int result = a * a;
    Console.WriteLine(result);
}
```

### 第二步：方法名

为了调用方法体，需要为“方法体”起个名字，我们起名叫Square。这个名字就叫“方法名"。

```c# linenums="1"
Square{
    int a = 5;
    int result = a * a;
    Console.WriteLine(result);
}
```
在方法名`Square()`后面紧跟着写一组小括号，小括号在这里表示”执行“。当调用“方法名和小括号”时就可以执行方法体内的代码：

```c# linenums="1"
Square()
```
### 第三步：参数

删掉变量a的初始化值5。我们不需要初始化，我们需要每次向方法体内传入不同的值。可以这样做：在方法名Square后面再添加一组小括号,然后把`int a`移动到小括号内，记得去掉分号。小括号里定义的变量叫参数，用于接收外部传入的值。

```c# linenums="1"
Square(int a){
    int result = a * a;
    Console.WriteLine(result);
}
```

### 第四步：返回值

所有的方法必须设置返回值，在这里，返回值就是result。所以我们在代码底部，添加一行代码：`return result;`;同时必须在方法名的前面指定返回值的类型是int。 最后可以把`Console.WriteLine(result)`删掉。

```c# linenums="1"
Square(int a){
    int result = a * a;
    return result;
}
```


```c# linenums="1"
static void Main(){
    Console.WriteLine(Square(6));
}
```
这是代码会报错：因为Main是一个静态方法，在静态方法内只能调用静态方法，所以修改代码：

```c# linenums="1"
Static int Square(int a){
    int result = a * a;
    //Console.WriteLine(result);
    return result;
}
```

## 方法是什么

方法是**一段可以被重复调用的代码块**，由以下四部分组成：

- 方法体
- 方法名
- 参数
- 返回值

来一个简单的例子：

```csharp
static void SayHello()
{
    Console.WriteLine("你好，欢迎学习C#！");
}
```


## 定义方法的语法格式

```c#
[修饰符] 返回类型 方法名(参数列表)
{
    // 方法体：要执行的代码
    return 返回值; // 如果有返回值
}
```

---

