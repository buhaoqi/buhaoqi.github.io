---
noteId: "14382ed0686411f0b38abb3f8df447a5"
tags: []

---

当然可以！以下是《C# 类的属性》的视频教学脚本草稿，适合初学者课程第 10 课左右。风格通俗易懂，结构清晰，适合录制 8～12 分钟的讲解视频。

---

## 🎬 C# 初学者实例教程：第10课《类的属性》

---

### 🎙️【开场动画建议】

（背景浮现：“Person、Age、get set” 等关键词，逐渐聚焦一个“类”图标）

🎙️讲解人旁白：

> “大家好，欢迎回到《C# 初学者实例教程》。今天，我们来学习一个 C# 中非常重要的知识点 —— 类的属性（Property）。”

---

### 🎯【学习目标】

> “本课学习完，你将掌握：
>
> 1. 什么是属性；
> 2. 如何用 get 和 set 创建属性；
> 3. 如何使用自动属性；
> 4. 如何封装字段并保护数据安全。”

---

## 🧱 第一部分：为什么需要属性？

🎙️

> “在上一课我们学过如何定义类和字段。但问题来了，字段通常是私有的，外部访问不到。那我们该怎么办呢？”

（画面示例代码）：

```csharp
public class Person
{
    private string name;
}
```

🎙️

> “我们希望类外部也能读写 name，但又不想让它完全暴露。这时，属性（Property）就派上用场了！”

---

## 🧩 第二部分：手动定义属性（get 和 set）

🎙️

> “来看一个例子，我们通过属性来封装字段：”

```csharp
public class Person
{
    private string name;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}
```

🎙️

> “这样，外部就可以这样使用了：”

```csharp
Person p = new Person();
p.Name = "Tom";         // 调用 set
Console.WriteLine(p.Name);  // 调用 get
```

📌 小提示动画：

> “属性不是函数，但长得像函数；它其实是变量的安全门。”

---

## 🚀 第三部分：自动实现的属性（Auto-Property）

🎙️

> “有时候我们不需要写 get 和 set 的逻辑，只要默认行为。这时候，可以用更简单的写法：”

```csharp
public class Student
{
    public int Age { get; set; }
}
```

🎙️

> “这段代码和手写 get/set 效果一样，C# 会在背后帮你生成一个隐藏的字段。”

---

## 🔐 第四部分：只读属性、只写属性和权限控制

🎙️

> “我们还可以灵活控制读取或写入权限。”

### ✅ 只读属性：

```csharp
public double Radius { get; set; }

public double Area
{
    get { return Math.PI * Radius * Radius; }
}
```

### ✅ 私有 set：

```csharp
public string Title { get; private set; }

public Book(string title)
{
    Title = title;
}
```

🎙️

> “这表示：类的外部只能读取，不能更改；而构造函数内部可以设定初值。”

---

## 🛡️ 第五部分：属性中添加验证逻辑

🎙️

> “属性最大的好处是：可以在 set 中加入判断逻辑。”

```csharp
private decimal price;
public decimal Price
{
    get { return price; }
    set
    {
        if (value < 0)
            throw new ArgumentException("价格不能为负数！");
        price = value;
    }
}
```

📌 动画提示：

> “好习惯：别直接暴露字段，建议通过属性控制数据。”

---

## 🧠 巩固练习建议（课后题）

🎙️

> “试试自己写一个类 `Car`，包含以下属性：
>
> * 品牌 `Brand`（只读）
> * 价格 `Price`（不能为负）
> * 车龄 `Age`（可读可写）”

---

## 🧾 本课小结

✅ 属性是 C# 中字段和方法之间的桥梁；
✅ get 读取值，set 设置值；
✅ 可以自动实现、也可以手动添加逻辑；
✅ 属性是封装和安全的体现。

---

## 🎬 下节预告

🎙️

> “下一节课，我们将继续学习 类方法（Method），也就是类中可以执行操作的代码块。敬请期待！”

---

如果你需要 PPT、大纲图、讲解插图或配套练习题，我也可以为你补充！是否需要我继续为此课制作教学PPT或练习题呢？


## 练习

好的，以下是为你精心设计的 **10道 C# 类的属性巩固练习题**，每题都聚焦一个关键知识点，包括：

* 私有字段封装
* get/set 基本用法
* 自动属性
* 属性中的数据校验
* 只读/只写属性
* 带访问修饰符的属性

---

## ✅ C# 类的属性巩固练习题（10题）

---

### 🚩练习1：封装字段

定义一个 `Person` 类，包含一个私有字段 `name`，请通过属性 `Name` 封装该字段，实现基本的 get/set 访问。

---

### 🚩练习2：自动实现属性

定义一个 `Student` 类，包含 `Id`、`Name`、`Age` 三个属性，使用自动属性语法。

---

### 🚩练习3：只读属性

定义一个 `Circle` 类，包含 `Radius` 属性，并添加只读属性 `Area`，返回圆的面积（公式：πr²）。

---

### 🚩练习4：只写属性

定义一个 `Logger` 类，包含一个只写属性 `Message`，当给 `Message` 赋值时，输出 `Console.WriteLine("日志：" + 值)`。

---

### 🚩练习5：带验证逻辑的 set

定义一个 `Product` 类，包含属性 `Price`，要求：

* 不能小于 0；
* 如果小于 0，抛出异常 `ArgumentException`。

---

### 🚩练习6：构造函数初始化只读属性

定义一个 `Book` 类，包含 `Title` 属性，只能在构造函数中赋值，外部只能读取。

---

### 🚩练习7：属性中返回组合信息

定义一个 `User` 类，包含属性 `FirstName` 和 `LastName`，再添加一个只读属性 `FullName`，格式为 `"LastName, FirstName"`。

---

### 🚩练习8：属性中限制写入范围

定义一个 `Student` 类，包含属性 `Score`，要求只能在 0 到 100 之间设置分数，超过范围自动设为 0。

---

### 🚩练习9：只读自动属性（C# 6.0+）

定义一个 `Car` 类，使用只读自动属性语法，设置 `Brand` 属性，并通过构造函数赋值。

---

### 🚩练习10：私有 set 用于保护属性

定义一个 `Account` 类，包含属性 `Balance`，只能被类内部方法修改，外部只能读取。

要求添加方法：

```csharp
public void Deposit(decimal amount)
```

当调用该方法时，增加账户余额。

---

## 🧩 补充建议

* 每题可写一个小测试类（Main 方法中实例化并测试）
* 鼓励学生使用 `Console.WriteLine` 输出测试结果
* 第3、5、7、8、10题适合做进阶练习或项目实战引导

---

需要我为这些题目提供【参考答案】或打包成【教学文档】吗？我可以帮你制作成 Word/PDF 或导入 VS 项目格式。
