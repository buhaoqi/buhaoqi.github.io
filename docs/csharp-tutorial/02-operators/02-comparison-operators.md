---
noteId: "b0fe6c10460511f08a53dd9fb031ea51"
tags: []

---

## **开场**  

> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第8课《运算符》。
> 
> 我是张杰。
>
> 

## 比较运算符是什么

比较运算符（也称为关系运算符）用于比较两个值之间的关系，比如：a和b之间的关系是等于还是不等于，是大于还是小于等等。

比较运算符有六个：

| 运算符  | 含义    | 示例代码     | 结果                |
| ---- | ----- | -------- | ----------------- |
| `==` | 等于    | `a == b` | `true` or `false` |
| `!=` | 不等于   | `a != b` | `true` or `false` |
| `>`  | 大于    | `a > b`  | `true` or `false` |
| `<`  | 小于    | `a < b`  | `true` or `false` |
| `>=` | 大于或等于 | `a >= b` | `true` or `false` |
| `<=` | 小于或等于 | `a <= b` | `true` or `false` |

- 比较运算符比较完之后，会返回一个布尔值（`true` 或 `false`）
- 这些运算符在条件判断、循环控制等场景中非常有用。

---

## 用法1:数字比较
```csharp
int a = 10, b = 20;

Console.WriteLine(a == b);  // false
Console.WriteLine(a != b);  // true
Console.WriteLine(a > b);   // false
Console.WriteLine(a < b);   // true
Console.WriteLine(a >= b);  // false
Console.WriteLine(a <= b);  // true
```


```csharp
int a = 5;
int b = 10;

bool result1 = a < b;   // true
bool result2 = a == b;  // false
bool result3 = a >= 5;  // true
```

> 📌 常用于判断大小、相等、是否及格、是否超标等。


示例一：判断两个数是否相等

```csharp
int a = 10;
int b = 20;
bool isEqual = a == b;
Console.WriteLine(isEqual);  // 输出：False
```

> 🎙️“`a == b` 表示判断 a 和 b 是否相等。结果是一个 `bool` 类型，要么是 `true`，要么是 `false`。”

---

示例二：判断大小关系

```csharp
int score = 85;
bool passed = score >= 60;
Console.WriteLine(passed);  // 输出：True
```

> 🎙️“这里我们判断分数是否及格，`score >= 60`，表示“分数是否大于等于 60”，返回布尔值。”

```csharp
int age = 18;

if (age >= 18)
{
    Console.WriteLine("成年人");
}
```

示例：比较成绩是否及格

```csharp
int score = 85;
bool passed = score >= 60;

Console.WriteLine("是否及格：" + passed);  // 输出：true
```

> 🎙️“我们用 `>=` 判断成绩是否大于等于 60 分，这个布尔值可以用于条件语句控制程序逻辑。”

## 用法2:字符比较

：基于 Unicode 编码（ASCII 码）

```csharp
char c1 = 'A';  // Unicode 编码 65
char c2 = 'B';  // Unicode 编码 66

bool result = c1 < c2;  // true，因为 'A' 的编码比 'B' 小
```

> 📌 注意：字符比较的是**编码值**，而不是“字母顺序”。
> 可用于判断某个字符是否在某个范围内，例如是否是大写字母：

```csharp
char input = 'G';
bool isUpper = input >= 'A' && input <= 'Z';  // true
```

```csharp
char c1 = 'A';
char c2 = 'B';
bool result = c1 < c2;  // true
```

> 🎙️“字符比较的是它们的编码值，就像 `A = 65`、`B = 66`。”

---

## 用法3:字符串比较

（== 和 !=）：比较“内容”是否相等

```csharp
string s1 = "apple";
string s2 = "apple";
string s3 = "banana";

bool result1 = s1 == s2;  // true
bool result2 = s1 != s3;  // true
```

> 📌 在 C# 中，字符串比较使用的是 **内容比较**，而不是引用地址（与 Java 不同）。

判断内容是否一致

```csharp
string name1 = "admin";
string name2 = "Admin";

bool isEqual = name1 == name2;  // false（区分大小写）
```

> 🎙️“C# 中字符串比较默认是区分大小写的，如果你希望忽略大小写，可以使用 `string.Equals` 方法。”


⚠️ 如果要进行“忽略大小写”的比较，建议使用：

```csharp
bool isSame = string.Equals(s1, s2, StringComparison.OrdinalIgnoreCase);
```

---




## 注意事项

> 🎙️“在使用比较运算符时，请注意以下几点：

1. 千万不要混淆 `=`（赋值） 和 `==`（比较）；
2. 比较运算符返回的是 `bool` 类型，不是数字；
3. 比较不同类型时，要注意类型转换是否安全，比如 `int` 和 `double`。”

---
## 小贴士：== 和 = 的区别

* `=` 是赋值运算符：`a = 5;`
* `==` 是比较运算符：`a == 5`

很多初学者会不小心写成：`if (a = 5)`，导致编译错误！


## 总结

> 🎙️“这节课，我们一起学习了 C# 中的运算符总览，并重点掌握了 **比较运算符的用法**。
> 你现在已经可以判断两个值是否相等、谁大谁小、是否达到某个条件，为接下来的条件语句打下坚实基础。”

---


下节预告

> 🎙️“下一节课，我们将正式学习 `if` 和 `else` 条件语句。
> 你将学会如何让程序根据判断结果，选择不同的执行路径。
> 这是构建智能程序的重要一步，不见不散！”

---