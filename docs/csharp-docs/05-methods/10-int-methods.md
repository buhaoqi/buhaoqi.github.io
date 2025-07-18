---
noteId: "4f9e4fd050a011f0b69c3be6f8c40618"
tags: []

---


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


## 变量str.split()

用途：使用分隔符将指定字符串转为数组

语法

```c#
字符串.split(分隔符)
```

示例

```#
string st = "100 100 80";
str.split(' '); //["100","100","80"]
```

## 对象string.join()

用途：用于把数组元素连接成一个字符串。

语法

```c#
string.Join(连接符,数组)
```

示例

```c#
string[] arrStr = {"C#","IS","AWESOME"};
string str = string.Join('-',arrStr);
Console.WriteLine(str);
```

```c#
for(int i = 0;i<5;i++){
    
}
foreach:发起循环，告诉编译器我要做foreach循环
foreach遍历：使用foreach方法逐个访问数组的每一个元素。
foreach(string student in students){
    
}

```

## str.split() (分割字符串)

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
