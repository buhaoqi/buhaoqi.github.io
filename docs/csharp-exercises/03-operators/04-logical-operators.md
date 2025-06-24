---
noteId: "b942f800460511f08a53dd9fb031ea51"
tags: []

---

在 C# 中，**逻辑运算符（Logical Operators）** 用于对布尔表达式进行逻辑运算。常用于 `if`、`while`、`for`、`switch` 等控制语句中，帮助判断多个条件是否同时满足或是否互斥。

下面是 C# 中常用的逻辑运算符详解：

---

## ✅ 一、逻辑运算符列表

| 运算符  | 名称    | 示例      | 说明           |  
| ------ | ------- | -------- | ------------- |
| `&&`   | 逻辑与（AND） | `a && b` | 两个条件都为 true，结果才为 true   |
| `|| `       | 逻辑或（OR）                        | `a||b` | 只要有一个为 true，结果就是 true |
<!-- | `!`  | 逻辑非（NOT） | `!a`     | 取反操作，true 变 false，false 变 true |   -->


---

## ✅ 二、常用逻辑运算符详解

### 1. `&&`（逻辑与）

```csharp
bool a = true;
bool b = false;
bool result = a && b;  // false
```

**含义：** 如果 a 和 b 都为 `true`，结果才为 `true`。

**短路特性：** 如果第一个条件是 `false`，后面的不会再计算，提高性能，避免错误。

---

### 2. `||`（逻辑或）

```csharp
bool a = true;
bool b = false;
bool result = a || b;  // true
```

**含义：** 只要有一个条件为 `true`，结果就为 `true`。

**短路特性：** 如果第一个条件是 `true`，后面的不会再计算。

---

### 3. `!`（逻辑非）

```csharp
bool a = false;
bool result = !a;  // true
```

**含义：** 取反操作，把 `true` 变成 `false`，把 `false` 变成 `true`。

---

### 4. `&` 与 `&&` 的区别

```csharp
bool a = false;
bool b = GetBool();  // 假设这个方法会打印或执行一些操作

bool result1 = a && b;  // b 不会被调用（短路）
bool result2 = a & b;   // b 一定会被调用（不短路）
```

| 运算符  | 短路性 | 推荐用途         |
| ---- | --- | ------------ |
| `&&` | 是   | 条件判断         |
| `&`  | 否   | 位运算、精确控制顺序执行 |

---

## ✅ 三、逻辑运算符优先级（从高到低）

1. `!`（非）
2. `&&`（与）
3. `||`（或）

可以使用 `()` 改变运算顺序，例如：

```csharp
bool result = !(a && (b || c));
```

---

## ✅ 四、实际应用示例

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

## ✅ 五、练习题推荐

1. 使用 `&&` 判断两个变量是否都为真。
2. 使用 `||` 判断某变量是否为多个值之一。
3. 写一个程序，输入年龄，如果年龄小于 18 或大于 60，输出“非工作年龄段”。
4. 使用 `!` 来判断用户是否“未登录”。
5. 比较 `a && b` 与 `a & b` 在输出上的差异。

---

如需我出几道相关的练习题或生成练习文档，也可以告诉我。需要我继续吗？
