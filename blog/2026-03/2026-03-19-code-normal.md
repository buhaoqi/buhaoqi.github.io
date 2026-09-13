---
slug: code-normal
title: C#程序的书写规范
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---



### **提高可读性**
```csharp
// 不好的写法
int a=10;int b=20;int c=a+b;Console.WriteLine(c);

// 好的写法
int a = 10;
int b = 20;
int c = a + b;
Console.WriteLine($"计算结果：{c}");
```

### **使用空行分组**
```csharp
// 输入部分
Console.Write("请输入姓名：");
string name = Console.ReadLine();

Console.Write("请输入年龄：");
int age = int.Parse(Console.ReadLine());

// 处理部分
string greeting = $"你好，{name}！";
string ageInfo = $"你今年{age}岁";

// 输出部分
Console.WriteLine(greeting);
Console.WriteLine(ageInfo);
```

### **添加注释说明**
```csharp
// 1. 初始化数据
double price = 99.99;
int quantity = 3;

// 2. 计算总价
double subtotal = price * quantity;
double tax = subtotal * 0.08;  // 8%税率
double total = subtotal + tax;

// 3. 显示结果
Console.WriteLine($"小计：{subtotal:C}");
Console.WriteLine($"税金：{tax:C}");
Console.WriteLine($"总计：{total:C}");
```

