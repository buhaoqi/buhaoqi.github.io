---
noteId: "d8a9b240647011f0b3be856b16b937e6"
tags: []

---


## 练习:基础题 (40道)

1. 将唐诗 《咏柳》输出到控制台，要求：使用Write()方法输出，分行显示。
2. 获取字符串 `"Programming"` 的长度
3. 使用索引获取字符串 `"C#"` 中的字符 `'#'`
4. 将两个字符串"Hello"和"World"拼接成"Hello World"
5. 使用字符串插值将变量 `name = "Alice"` 和 `age = 25` 组合成 `"Name: Alice, Age: 25"`
6. 将字符串 `"EXAMPLE"` 转换为全小写
7. 将"c# programming"首字母大写（其他小写）
8. 检查字符串 `"apple"` 是否包含子串 `"pp"`
9. 在字符串 `"banana"` 中查找子串 `"na"` 第一次出现的索引位置
10. 在字符串 `"banana"` 中查找字符 `'a'` 最后一次出现的索引位置
11. 从字符串 `"Hello World"` 中提取索引 6 开始的子串
12. 将字符串 `"C# is great"` 中的 `"great"` 替换为 `"awesome"`
13. 去除字符串 `"   text   "` 两端的空格
14. 去除字符串 `"   text   "` 开头的空格
15. 去除字符串 `"   text   "` 结尾的空格
16. 检查字符串 `"example.txt"` 是否以 `"example"` 开头
17. 检查字符串 `"example.txt"` 是否以 `".txt"` 结尾
18. 在字符串 `"Hello"` 的索引 5 处插入 `" World"`
19. 从字符串 `"Hello World"` 中删除索引 5 之后的所有字符
20. 从字符串 `"Hello World"` 中删除索引 5 开始的 3 个字符
21. 将字符串 `"  test  "` 执行 `Trim()` 后的结果写出来
22. 使用`string.Concat`连接三个字符串"a", "b", "c"
23. 使用插值字符串将变量`name="Alice"`和`age=30`组合成"Alice is 30 years old"
24. 在"Hello World"中查找"World"的起始位置
25. 从"123456789"截取第3-5位字符（"345"）
26. 从文件路径"C:\Folder\file.txt"中提取文件名"file.txt"
27. 27.将"banana"中的'a'替换为'*'
28. 将"Hello Java"中的"Java"替换为"C#"
29. 移除"   text   "两端的空格
30. 移除"###temp###"两端的'#'字符
31. 检查"hello.cs"是否以".cs"结尾
32. 检查"https://site.com"是否以"https://"开头
33. ~~检查字符串是否为空或空白~~
34. 将用户输入的首尾空格移除并转为大写
35. 从email中提取用户名（"user@domain.com" → "user"）
36. 验证文件名是否以".txt"结尾（忽略大小写）
37. 移除字符串中所有空格
38. 检查字符串是否包含数字"123"
39. 从全路径中获取文件扩展名
40. 将"John Doe"格式化为"Doe, John"

## 练习:提升题 (9 道)
1. 给定 `"C# Programming Language"`，使用 `Substring` 提取 `"Programming"`（需计算索引）
1. ~~将 `"a,b,c"` 用逗号分割后，再用分号连接成 `"a;b;c"`~~
1. 将 `"The quick brown fox"` 中的 `"quick"` 替换为 `"slow"`，然后转换为大写
1. 检查 `"Hello World"` 是否以 `"world"` 结尾（忽略大小写）
1. 在 `"abc"` 的索引 1 处插入 `"123"`，然后在索引 4 处插入 `"456"`
1. 从 `"Remove some words"` 中删除 `" some"`（需先找到索引）
1. 对 `"   Trim me   "` 执行 `Trim()`，然后检查是否以 `"Trim"` 开头
1. 从 `"file1.txt, file2.txt, file3.txt"` 中提取最后一个文件名（使用 `LastIndexOf`）
1. 将 `"Mixed Case"` 转大写再转小写，检查结果是否包含 `"case"`

---

## 答案:基础题

1. `Console.Write("第一句\n 第二句\n 第三句\n 第四句\n");`
2. `"Programming".Length // 11`
3. `"C#"[1] // '#'`
4. `"Hello" + " " + "World" // "Hello World"`
5. `$"Name: {name}, Age: {age}"`
6. `"EXAMPLE".ToLower() // "example"`
7. `string title = "c# programming".Substring(0,1).ToUpper() + "c#      programming".Substring(1).ToLower();`
8. `"apple".Contains("pp") // true`
9. `"banana".IndexOf("na") // 2`
10.` "banana".LastIndexOf('a') // 5`
11. `"Hello World".Substring(6) // "World"`
12. `"C# is great".Replace("great", "awesome")`
13. `"   text   ".Trim() // "text"`
14. `"   text   ".TrimStart() // "text   "`
15. `"   text   ".TrimEnd() // "   text"`
16. `"example.txt".StartsWith("example") // true`
17. `"example.txt".EndsWith(".txt") // true`
18. `"Hello".Insert(5, " World") // "Hello World"`
19. "Hello World".Remove(5) // "Hello"
20. "Hello World".Remove(5, 3) // "He World"
21. "test"
22. string combined = string.Concat("a", "b", "c");
23. string info = $"{name} is {age} years old";

24.在"Hello World"中查找"World"的起始位置

```csharp
int pos = "Hello World".IndexOf("World");
```

25.从"123456789"截取第3-5位字符（"345"）

```csharp
string sub = "123456789".Substring(2, 3);
```

26.从文件路径"C:\Folder\file.txt"中提取文件名"file.txt"

```csharp
string path = @"C:\Folder\file.txt";
string filename = path.Substring(path.LastIndexOf('\\') + 1);
```

27.将"banana"中的'a'替换为'*'

```csharp
string replaced = "banana".Replace('a', '*');
```

28.将"Hello Java"中的"Java"替换为"C#"

```csharp
string newStr = "Hello Java".Replace("Java", "C#");
```

29.移除"   text   "两端的空格

```csharp
string trimmed = "   text   ".Trim();
```

30.移除"###temp###"两端的'#'字符

```csharp
string clean = "###temp###".Trim('#');
```

31.检查"hello.cs"是否以".cs"结尾

```csharp
bool isCsFile = "hello.cs".EndsWith(".cs");
```

32.检查"https://site.com"是否以"https://"开头

```csharp
bool isSecure = "https://site.com".StartsWith("https://");
```

33.检查字符串是否为空或空白

```csharp
string input = "   ";
bool isEmpty = string.IsNullOrWhiteSpace(input);
```

34.将用户输入的首尾空格移除并转为大写

```csharp
string userInput = "  some text  ";
string processed = userInput.Trim().ToUpper();
```

35.从email中提取用户名（"user@domain.com" → "user"）

```csharp
string email = "user@domain.com";
string username = email.Substring(0, email.IndexOf('@'));
```

36.验证文件名是否以".txt"结尾（忽略大小写）

```csharp
string filename = "DATA.TXT";
bool isValid = filename.ToLower().EndsWith(".txt");
```

37.移除字符串中所有空格

```csharp
string withSpaces = "a b c d";
string noSpaces = withSpaces.Replace(" ", "");
```

38.检查字符串是否包含数字"123"

```csharp
string data = "abc123xyz";
bool contains = data.IndexOf("123") >= 0;
```

39.从全路径中获取文件扩展名

```csharp
string file = @"C:\docs\report.pdf";
string ext = file.Substring(file.LastIndexOf('.'));
```

40.将"John Doe"格式化为"Doe, John"

```csharp
string fullName = "John Doe";
int spaceIndex = fullName.IndexOf(' ');
string lastName = fullName.Substring(spaceIndex + 1);
string firstName = fullName.Substring(0, spaceIndex);
string formatted = $"{lastName}, {firstName}";
```


## 答案:提升题
```csharp
1."C# Programming Language".Substring(3, 11) // "Programming"
2.string.Join(";", "a,b,c".Split(',')) // "a;b;c"
3. "The quick brown fox".Replace("quick", "slow").ToUpper()
4."Hello World".ToLower().EndsWith("world") // true
5."abc".Insert(1, "123").Insert(4, "456") // "a123456bc"
6. 
   int index = "Remove some words".IndexOf(" some");
   "Remove some words".Remove(index, 5) // "Remove words"
7. 
   string trimmed = "   Trim me   ".Trim();
   trimmed.StartsWith("Trim") // true
8.
   int lastIndex = str.LastIndexOf(',');
   str.Substring(lastIndex + 2) // "file3.txt"
9.
   string lower = "Mixed Case".ToUpper().ToLower();
   lower.Contains("case") // true
```
