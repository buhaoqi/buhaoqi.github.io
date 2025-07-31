---
noteId: "0ee3d15067dd11f09287057f7c37db9f"
tags: []

---


## 🔄 四、三元运算符（`?:`）

三元运算符：一种简洁的条件写法，适合动态判断赋值。

### 📌 语法：

```csharp
变量 = 条件 ? 值1 : 值2;
```

### ✅ 示例：

```csharp
int age = 20;
string result = (age >= 18) ? "成年人" : "未成年人";
Console.WriteLine(result);
```

---



### 1. 数字特性判断
```csharp
// 判断数字的奇偶性和正负
Console.Write("请输入一个整数：");
int number = Convert.ToInt32(Console.ReadLine());

string parity = (number % 2 == 0) ? "偶数" : "奇数";
string sign = (number >= 0) ? "正数" : "负数";

Console.WriteLine($"{number}是{parity}，也是{sign}");
```