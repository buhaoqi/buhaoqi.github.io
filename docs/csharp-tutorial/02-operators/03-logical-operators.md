---
noteId: "b942f800460511f08a53dd9fb031ea51"
tags: []

---


## **开场**  
 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第10课。

今天我们要探讨一个让程序“学会思考”的核心工具：逻辑运算符。

 生活中，我们常常用“因果”来理解逻辑：根据前因，判断后果。

比如你说：“如果明天不下雨，我就去。”

其实你是在设定一个条件：只有‘不下雨’成立，“去”才会发生。

再比如：“DeepSeek 既好用又免费，所以我喜欢用。”

这里有两个必须同时满足的条件：好用并且免费，“喜欢用”才会发生。

编程的本质，就是教程序按规则做判断。

而逻辑运算符，正是帮助我们组合条件，构建规则的关键工具。

接下来，我们一起解锁它的使用技巧。

## 逻辑运算符

- `&&` —— 逻辑与
- `||` —— 逻辑或
- `!` —— 逻辑非

### `&&` —— 逻辑与

逻辑与的含义是：两个条件都为真，结果才为真。

**短路特性：** 如果第一个条件是 `false`，后面的不会再计算，提高性能，避免错误。

示例：

```csharp
if (height > 180 && looks == "帅")
{
    Console.WriteLine("你是理想型！");
}
```

如果有一个条件不成立？抱歉，不是你。

---

### `||` —— 逻辑或

逻辑或的含义是：有一个为真，结果就为真。

**短路特性：** 如果第一个条件是 `true`，后面的不会再计算。

代码示例：

```csharp
if (height > 180 || looks == "帅")
{
    Console.WriteLine("你还挺有优势！");
}
```

🧠 只要有一个条件为真，就算你赢。

---

### `!` —— 逻辑非

逻辑非的含义是: 对结果取反。true 变 false，false 变 true 

代码示例：

```csharp
if (!isLazy)
{
    Console.WriteLine("加鸡腿！");
}
```

🧠 `!` 是个反骨仔，非要跟你唱反调。

---

## 逻辑运算符优先级（从高到低）

1. `!`（非）
2. `&&`（与）
3. `||`（或）

可以使用 `()` 改变运算顺序，例如：

```csharp
bool result = !(a && (b || c));
```

---


## 小彩蛋：组合使用更带感

```csharp
if ((score > 90 || hasExtraPoints) && !isCheating)
{
    Console.WriteLine("恭喜你，满分不是梦！");
}
```

逻辑运算符配合起来，就像三国演义——合纵连横，看你怎么玩！

---


## 总结
本节课我们主要学习了：


| 运算符  | 名称 | 作用说明        |   |             |
| ---- | -- | ----------- | - | ----------- |
| `&&` | 与  | 两个都为真，结果才为真 |   |             |
| \`   |    | \`          | 或 | 有一个为真，结果就为真 |
| `!`  | 非  | 结果取反        |   |             |


## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。感谢你的认真学习，你的支持是我更新最大的动力！我们下节课见！

下节预告：《》

慢慢学，一点点进步就很好！

欢迎你在评论区分享你的代码，让我们一起进步！

## 练习
### 示例 1：判断用户是否登录并有权限

```csharp
bool isLoggedIn = true;
bool isAdmin = false;

if (isLoggedIn && isAdmin)
{
    Console.WriteLine("欢迎管理员！");
}
else
{
    Console.WriteLine("无权访问。");
}
```

---

### 示例 2：输入合法性检查

```csharp
string input = Console.ReadLine();
if (!string.IsNullOrEmpty(input) && input.Length >= 3)
{
    Console.WriteLine("输入有效");
}
```

---

### 示例 3：使用 `||` 判断多个条件

```csharp
int score = 95;
if (score == 100 || score == 0)
{
    Console.WriteLine("极端分数！");
}
```

---


1. 使用 `&&` 判断两个变量是否都为真。
2. 使用 `||` 判断某变量是否为多个值之一。
3. 写一个程序，输入年龄，如果年龄小于 18 或大于 60，输出“非工作年龄段”。
4. 使用 `!` 来判断用户是否“未登录”。
5. 比较 `a && b` 与 `a & b` 在输出上的差异。

题目

```csharp
int score = 75;

if (score >= 60 && score < 90)
{
    Console.WriteLine("成绩良好");
}
```

> 📌 比较运算符通常配合 `if`、`while` 等条件语句使用。



### 1.简易登录系统
```csharp
// 验证用户名和密码
Console.Write("用户名：");
string username = Console.ReadLine();

Console.Write("密码：");
string password = Console.ReadLine();

if (username == "admin" && password == "123456") 
{
    Console.WriteLine("登录成功！");
}
else 
{
    Console.WriteLine("用户名或密码错误");
}
```