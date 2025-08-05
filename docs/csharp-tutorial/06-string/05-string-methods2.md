---
noteId: "3d6519c0665311f0a3469bc4f2844c38"
tags: []

---


序列的意思是有序排列。字符串中的每个字符都有固定位置，自左至右依次是：0、1、2...，我们称它为下标。
1.基本字符串

📌【二、字符串的常见操作】

🎬 “字符串就像一条链子，我们可以剪它、查它、拼它，常用操作有这些：”

---

### 1. **获取字符串长度**

```csharp
string word = "Hello";
Console.WriteLine(word.Length); // 输出 5
```

🧠 “`.Length` 表示字符串的长度，也就是字符的个数。”

---

### 2. **取子串 Substring()**

```csharp
string text = "HelloWorld";
string part = text.Substring(0, 5);
Console.WriteLine(part); // 输出 Hello
```

✂️ “`Substring(起始位置, 长度)` 用来剪下一部分字符串。”

---

### 3. **替换 Replace()**

```csharp
string str = "I love Java";
string result = str.Replace("Java", "C#");
Console.WriteLine(result); // 输出 I love C#
```

🔄 “`.Replace()` 就像替换拼图，可以把字符串中的某部分换掉。”

---

### 4. **查找字符串 IndexOf()**

```csharp
string str = "programming";
int pos = str.IndexOf("gram");
Console.WriteLine(pos); // 输出 3
```

🔍 “`.IndexOf()` 用来查某个子串第一次出现的位置，找不到就返回 -1。”

---

📌【三、字符串拼接：+ 和插值】

💡 “还记得我们前面学的插值字符串吗？用 `$"{变量}"` 就可以优雅地拼接：”

```csharp
string name = "Tom";
Console.WriteLine($"Hello, {name}!");
```

---

📌【四、字符串不可变特性】

🚫 “注意：字符串是‘不可变’的，像 `Replace()` 或 `Substring()` 并不会改原字符串，而是返回一个新的。”

---

📌【五、总结】

🎓 “今天，我们学会了字符串的基本操作方法，包括：”

* `Length` 获取长度
* `Substring()` 剪字符串
* `Replace()` 替换
* `IndexOf()` 查找
* `+` 和 `$""` 拼接字符串

🌱 “这些操作看似简单，但在实际开发中会频繁用到，是每个初学者都必须掌握的技能。”

---

📢【结尾】

📺 “我是‘不好奇编程’，我们下节课继续学习更强大的字符串方法库，一起进阶！”

---

🧠 如需配套练习题、图示建议，或制作PPT文字内容，我也可以继续帮你完成。需要吗？


## 二、字符串拼接

### ✅ 使用 + 号拼接：

```csharp
string firstName = "张";
string lastName = "三";
string fullName = firstName + lastName;
```

### ✅ 使用 string.Format：

```csharp
string msg = string.Format("你好，{0}！今天是 {1}", "小明", "星期一");
```

### ✅ 使用插值字符串（推荐）：

```csharp
string name = "小明";
int age = 18;
string info = $"你好，我是{name}，今年{age}岁";
```

---

## 三、字符串常用方法

```csharp
string text = " Hello, World! ";
```

| 方法                            | 功能                |
| ----------------------------- | ----------------- |
| `text.Length`                 | 获取长度（字符个数）        |
| `text.ToUpper()`              | 转大写               |
| `text.ToLower()`              | 转小写               |
| `text.Trim()`                 | 去除首尾空格            |
| `text.Contains("World")`      | 是否包含某子串           |
| `text.Replace("Hello", "Hi")` | 替换子串              |
| `text.Substring(0, 5)`        | 截取子串，从索引 0 开始，长度5 |

---

## 四、字符串转数字 & 数字转字符串

```csharp
string str = "123";
int num = int.Parse(str);         // 转成整数
string s2 = num.ToString();       // 数字转字符串
```

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

## ✅ 总结

| 功能       | 方法                                     |
| -------- | -------------------------------------- |
| 拼接字符串    | `+`、`$""`、`string.Format()`            |
| 改大小写     | `ToUpper()`、`ToLower()`                |
| 删除空格     | `Trim()`                               |
| 查找/替换/截取 | `Contains()`、`Replace()`、`Substring()` |
| 转换数据类型   | `int.Parse()`、`ToString()`             |

---

📌【二、字符串的常见操作】

🎬 “字符串就像一条链子，我们可以剪它、查它、拼它，常用操作有这些：”

---

### 1. **获取字符串长度**

```csharp
string word = "Hello";
Console.WriteLine(word.Length); // 输出 5
```

🧠 “`.Length` 表示字符串的长度，也就是字符的个数。”

---

### 2. **取子串 Substring()**

```csharp
string text = "HelloWorld";
string part = text.Substring(0, 5);
Console.WriteLine(part); // 输出 Hello
```

✂️ “`Substring(起始位置, 长度)` 用来剪下一部分字符串。”

---

### 3. **替换 Replace()**

```csharp
string str = "I love Java";
string result = str.Replace("Java", "C#");
Console.WriteLine(result); // 输出 I love C#
```

🔄 “`.Replace()` 就像替换拼图，可以把字符串中的某部分换掉。”

---

### 4. **查找字符串 IndexOf()**

```csharp
string str = "programming";
int pos = str.IndexOf("gram");
Console.WriteLine(pos); // 输出 3
```

🔍 “`.IndexOf()` 用来查某个子串第一次出现的位置，找不到就返回 -1。”

---

📌【三、字符串拼接：+ 和插值】

💡 “还记得我们前面学的插值字符串吗？用 `$"{变量}"` 就可以优雅地拼接：”

```csharp
string name = "Tom";
Console.WriteLine($"Hello, {name}!");
```

---

📌【四、字符串不可变特性】

🚫 “注意：字符串是‘不可变’的，像 `Replace()` 或 `Substring()` 并不会改原字符串，而是返回一个新的。”

---

📌【五、总结】

🎓 “今天，我们学会了字符串的基本操作方法，包括：”

* `Length` 获取长度
* `Substring()` 剪字符串
* `Replace()` 替换
* `IndexOf()` 查找
* `+` 和 `$""` 拼接字符串

🌱 “这些操作看似简单，但在实际开发中会频繁用到，是每个初学者都必须掌握的技能。”
