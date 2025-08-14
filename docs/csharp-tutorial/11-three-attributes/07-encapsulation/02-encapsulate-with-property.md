---
noteId: "64798320695f11f0bb9b1f35beaaf3f9"
tags: []

---
# 🎬 《属性访问器入门》

> “在实际开发中，我们更推荐用【属性】替代 get/set 方法。” 
> 
> 
> 

## 属性访问器设计原则  

- 不应抛出频繁发生的异常  
- 不应执行耗时操作（> 1ms）  
- 不应修改对象重要状态  
- 不应依赖调用顺序

通过合理使用属性访问器，您可以创建健壮、可维护且符合 .NET 设计规范的 C# 代码。

## 属性访问器 vs 方法

| 特性               | 属性访问器                  | 方法                      |
|--------------------|----------------------------|--------------------------|
| **语法**           | `obj.Property`             | `obj.Method()`           |
| **参数**           | setter有隐式`value`参数    | 可定义任意参数           |
| **操作类型**       | 应轻量、无副作用           | 可执行任意操作           |
| **预期行为**       | 应快速返回                 | 可长时间运行             |
| **异常处理**       | 避免频繁抛出异常           | 可自由使用异常           |
| **数据绑定**       | 完全支持                   | 不支持                   |

> 原因如下：
>
> 1. C# 将属性作为一等公民，旨在提升面向对象编程的纯粹性
> 2. 平台集成需求：深度绑定 .NET 框架特性（数据绑定/序列化/反射）
> 3. 现代语法演进：从完整属性 → 自动属性 → 表达式体属性 → init-only 属性持续优化
> 4. 工程实践优势

---




> “这样，我们就把字段 price 封装起来，只有通过属性才能设置，能加校验，又方便使用。”


## 什么是属性访问器？

在 C# 中，**属性（Property）** 是一种用来访问类中字段的机制，它通常封装了一个私有字段，并通过 `get`（读取）和 `set`（写入）访问器控制其读写操作。

**属性访问器（Accessors）** 是属性的核心组成部分，定义了如何读取（get）和写入（set）属性值。它们提供了对字段的安全访问机制，是实现封装的关键。以下是属性访问器的全面详解：

示例

```csharp
private int age;

public int Age
{
    get { return age; }
    set
    {
        if (value >= 0)
            age = value;
    }
}
```

你可以这样理解：

> **属性访问器 = 封装字段的一种工具，用来“对外暴露字段的读写权限”。**

---


## 未封装的代码（不安全）

```csharp
public class Person
{
    public int Age;  // 任何地方都可以随意访问和修改
}
```

这个 `Age` 字段完全暴露，任何代码都能：

```csharp
person.Age = -999;  // 不合理
```

---

## 封装的代码

```csharp
public class Person
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0 && value <= 150)
                age = value;
        }
    }
}
```

这样一来：

* 外部不能直接操作字段 `age`
* `set` 中添加了判断逻辑，**保护了内部状态**
* 这就是 **封装的体现**，借助 **属性访问器实现了受控访问**

---


### 一、基础访问器类型
#### 1. `get` 访问器 - 读取属性值
```csharp
private string _name;

public string Name
{
    get { return _name; }  // 返回私有字段的值
}
```

#### 2. `set` 访问器 - 设置属性值
```csharp
private string _name;

public string Name
{
    set { _name = value; }  // value 是隐式参数，包含传入的值
}
```

#### 3. 完整属性（最常见）
```csharp
private string _name;

public string Name
{
    get { return _name; }
    set { _name = value; }
}
```

## 基础使用方式
### 1.简单字段封装
```csharp
public class Person
{
    private string _name;  // 私有字段
    
    // 属性访问器
    public string Name
    {
        get { return _name; }      // 读取
        set { _name = value; }     // 写入（value 是关键字）
    }
}

// 使用
var person = new Person();
person.Name = "Alice";          // 调用 set 访问器
Console.WriteLine(person.Name); // 调用 get 访问器
```

## 案例1:最基本的属性语法（封装字段）

```csharp
class Person
{
    private string name; // 私有字段

    public string Name   // 公共属性
    {
        get { return name; }
        set { name = value; }
    }
}
```

使用方法：

```csharp
Person p = new Person();
p.Name = "Alice";             // 自动调用 set 访问器
Console.WriteLine(p.Name);    // 自动调用 get 访问器
```

小结：

* `name` 是私有字段，对外不可见。
* `Name` 是属性，对外公开。
* 封装字段的好处：可以加入控制逻辑（见下一个案例）。

---
## 总结

> ✅ 封装是面向对象的思想
> ✅ 属性访问器是实现封装的语法工具（最常用的一种）
> ❌ 它们不是一回事，但属性访问器常用于实现封装思想


---
