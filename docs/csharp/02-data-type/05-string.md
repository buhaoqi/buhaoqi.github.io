---
noteId: "3dddfe403eca11f081f2eb75db5e372e"
tags: []

---

# 6月6日：字符串类型

## 字符串是什么

- **字符串是使用双引号包裹的字符序列。**
- 字符串是一种基本数据类型，用于存储文本数据，使用`string`表示。

## 字符串的特点

**不可改变**

`string`是不可变对象，字符串一旦创建，就不能改变。其所有修改操作都会以新字符串返回。

**有序性**

字符串中的每个字符都有固定位置，使用整数表示，称其为下标。自左至右依次是：0、1、2...

## 创建字符串类型
语法
```c#
string 变量名; //声明字符串变量
string 变量名 = "值"; //声明并初始化字符串变量(必须双引号包裹)
```
示例

```c#
// 声明字符串变量
string userName;

//声明字符串并初始化
string userName = "JAMES";

//向控制台输出变量
Console.WriteLine(userName); // JAMES

//修改变量
userName = "KOBE"

//向控制台输出变量
Console.WriteLine(userName); // KOBE
```

## 字符串的用法

### 用法1：字符串可转义

**转义：**

- 就是让一个字符失去其当前的含义，转变为其他含义。
- 转义的方法：在字符前添加反斜杠`\`即可实现转义。
- 转义发生在某些特定字符上，不是所有字符。
  
**示例1：输出双引号**

转义前：双引号`"` 在C#中的含义是：定义字符的起点和终点。

```csharp
Console.WriteLine("Hello World"); // 输出: Hello World
```

转义后：双引号`"` 失去其定义字符串起点和终点的含义，转变为：普通双引号

```csharp
Console.WriteLine("\"Hello World\""); //输出: "Hello World"
```

**示例2：输出双引号** `\"`
```csharp
string str1 = "他的外号叫\"胖子\"。";
Console.WriteLine(str1); \\输出: 他的外号叫"胖子"。
```

**示例3：输出反斜杠** `\\`

转义前: 无法输出带有反斜杠的字符串，比如路径

```csharp
Console.Write("C:\Folder\file.txt"); \\输出: 不能识别的转义字符
```
转义后: 让路径中的反斜杠`\`失去其当前的含义，转为普通字符反斜杠`\`

```csharp
Console.Write("C:\\Folder\\file.txt"); \\输出: C:\Folder\file.txt
```

**示例4：换行符** `\n`

转义前：字符`n` 表示普通字母
```csharp
Console.Write("锄禾日当午，n汗滴禾下土。");
```
转义后：字符`\n` 表示换行符
```csharp
Console.Write("锄禾日当午，\n汗滴禾下土。");
```

**示例5：制表符** `\t`

转义前：字符`t` 表示普通字母
```csharp
Console.Write("锄禾t日当午");
```
转义后：字符`\t` 表示换行符
```csharp
Console.Write("锄禾\t日当午");
```
### 用法2：字符串可索引

- 字符串中的每一个字符都有其固定的位置。
- 位置使用整数表示，我们称其为下标。
- 自左至右，第一个字符具有索引0，第二个字符具有索引1，以此类推，最后一个字符具有索引`length - 1`。

示例：abcd的每一个字符分别对应：0123

```bash
 字符： a    b    c    d
 索引： 0    1    2    3
 特殊点：索引4：字符串结尾
```

语法: 通过下标访问字符串中的字符

```csharp
'字符串'[index];
```

示例：使用字面量访问下标

```csharp
Console.WriteLine("Hello"[1]); // 'e'
```
示例: 使用变量访问下标
```csharp
string text = "Hello";
Console.WriteLine(text[1]); // 'e'
```

### 用法3：字符串可连接
方法一：使用`+`运算符连接字符串
```csharp
// + 运算符
string x = "10";
string y = "20";
string z = x + y;
Console.Write(z);// 1020
```
方法二：使用string对象的Concat()方法

语法

```c#
string.Concat(字符串1,字符串2,字符串3,...字符串N);
```
示例:输出C#

```csharp
// String.Concat
Console.Write(string.Concat("C", "#")); // C#
```

### 用法4： 字符串可插值

插值字符串：向字符串引号内插入变量。

语法

```csharp
string str = $"字符字符字符{变量名1}字符字符{变量名2}"
```

- `$` ：定义插值字符串
- `{变量}`: 引入变量

示例

```csharp
string userName = "张三";
int age = 18;
string str = "大家好！我叫{userName},我今年{age}岁。"
Console.Write(str); //大家好！我叫张三,我今年18岁。
```





