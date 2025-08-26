---
noteId: "a9f7c2a07c5011f0ac5b8336029471d8"
tags: []

---




## 自动实现的属性（Auto-Property）

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