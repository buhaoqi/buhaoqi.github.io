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

## 字符串的属性与方法

### 1.Length
用途：获取字符串的长度(也就是字符数量)。

语法

```csharp
字符串.Length;
```
示例

```csharp
string text = "Hello";
Console.WriteLine(text.Length); // 输出：5
```

返回值

- 正整数：表示字符串的字符数量
- 0： 表示空字符串

### 2.ToUpper() | ToLower()

用途

- ToUpper()将字符串中的英文字符转为大写形式。
- ToLower()将字符串中的英文字符转为小写形式。

语法

```csharp
 字符串.ToUpper();
 字符串.ToLower();
```
示例

```csharp
string str = "Hello World!";
Console.Write(str.ToUpper());//"HELLO WORLD"
Console.Write(str.ToUpper());//"hello world"
```

返回值

- 转换成功：返回转换后的新字符串
- 转换失败：返回原始字符串

### 3.Contains()

用途：检测字符串是否包含指定字符。

语法
```csharp
字符串.Contains("指定字符");
```
示例

```csharp
bool str = "Hello World"; 
Console.Write(str.Contains("World"));// true
```
返回值

- True: 检测成功时返回True
- False: 检测失败是返回False

### 4.IndexOf() | LastIndexOf()

用途：

- `IndexOf()`:查询指定字符在字符串中首次出现的位置。
- `LastIndexOf()`:查询指定字符在字符串中最后一次出现的位置。

语法

```csharp
"原始字符串".IndexOf("指定字符");
"原始字符串".LastIndexOf("指定字符");
```
示例

```csharp
string str = "Hello";
Console.Write(str.IndexOf('l'));//2
Console.Write(str.IndexOf('lo'));//3
Console.Write(str.LastIndexOf('l'));//3
```

返回值

- 下标：表示查询到的字符的下标(index)。
- -1 ： 表示未查询到

### 5.StartsWith() | EndsWith()

用途

- StartsWith()用于检测字符串是否以指定字符开头。
- EndsWith()用于检测字符串是否以指定字符结尾。

语法
```csharp
"原始字符串".StartsWith("指定字符")
"原始字符串".EndsWith("指定字符")
```

示例

```csharp
string  str = "file.txt";
Console.WriteLine(str.StartsWith("file"));//true
Console.WriteLine(str.EndsWith(".txt")); //true
```
返回值

- True：检测到指定字符
- False：检测不到指定字符

### 6.Substring()

用途：从字符串的指定位置提取子字符串

语法

```csharp
"原始字符串".Substring(下标,长度)；
```

- 下标：表示提取字符串的起始位置；
- 长度：表示提取字符串的长度；

示例

```csharp
string  str = "Hello";
Console.WriteLine(str.Substring(1, 3));//"ell"
Console.WriteLine(str.Substring(1)); //"ello"
```

返回值

- 子字符串：提取成功
- 空：当提取字符串的起始位置 = 字符串的长度时
- 报错：当企图字符串的起始位置 > 字符串的长度时

### 7.Replace()

用途：替换字符串，即使用"新字符"替换字符串中的"旧字符"。

语法
```csharp
"原始字符串".Replace("旧字符串","新字符串")；
```

示例

```csharp
string newStr = "abc".Replace('a', 'A'); // "Abc"
string replaced = "1,2,3".Replace(",", "|"); // "1|2|3"
```

返回值

- 新字符串：当替换成功时
- 原始字符串：当替换失败时

### 8.Trim()|TrimStart()|TrimEnd()

用途

- Trim()从字符串的开头和末尾双向移除字符
- TrimStart()从字符串开头移除字符
- TrimEnd()从字符串末尾移除字符

语法
```csharp
"原始字符串".Trim("单字符") //注意：必须是char类型的单字符
"原始字符串".Trim() //不指定参数表示移除空格
```

示例：移除空格

```csharp
string str = "  te xt  ";
Console.Write(str.Trim()); // "te xt"
Console.Write(str.TrimStart()); // "te xt   "
Console.Write(str.TrimEnd()); // "   te xt"
```

示例：移除指定字符

```csharp
Console.Write("abcd".Trim('a')); // bcd
Console.Write("1999-05-11".Trim('1')); // 999-05-
Console.Write("1999-05-11".TrimStart('1')); // 999-05-11
Console.Write("1999-05-11".TrimEnd('1')); // 1999-05-
```

返回值

- 新字符串：移除成功
- 原始字符串：移除失败

### 9.Insert()

用途：在指定位置前插入字符。

语法
```csharp
"原始字符串".Insert(index, "新字符");
```

- index: 下标，指定插入字符的位置
- "新字符": 要插入的字符

示例

```csharp
Console.WriteLine("abcd".Insert(1, "123")); //a123bcd
Console.WriteLine("abcd".Insert(3, "123")); //abc123d
Console.WriteLine("abcd".Insert(4, "123")); //abcd123
```
返回值

- 新字符串：插入成功后的新字符串

### 10.Remove()

用途：删除指定位置后的字符串

语法
```csharp
"原始字符串".Remove(index,length);
```

- index: 指定删除位置（含）
- length：指定删除字符的长度

示例

```csharp
string partialRemove = "Hello".Remove(1, 2); // "Hlo"
string removed = "Hello".Remove(2); // "He"
```

返回值

- 新字符串：删除成功后的新字符串






