---
noteId: "7d729830696911f0bb9b1f35beaaf3f9"
tags: []

---

《属性访问器的进阶用法》

当然可以！我们将通过 2\~3 个循序渐进的 C# 案例，完整讲解属性访问器的典型使用方法，重点讲解以下基础语法：

* 自动实现属性（auto-implemented property）
* 带有私有字段的完整属性写法
* 只读属性和只写属性（get-only / set-only）
* 属性访问器中的逻辑控制（如范围判断、只读转换等）

---

## ✅ 案例1：自动实现属性（最基础写法）

这是最简洁的一种属性写法，由编译器自动生成字段。

```csharp
class Person
{
    public string Name { get; set; }  // 自动实现属性
    public int Age { get; set; }
}

class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Alice";
        p.Age = 25;

        Console.WriteLine($"Name: {p.Name}, Age: {p.Age}");
    }
}
```

🔍 **解析：**

* `public string Name { get; set; }` 表示这个属性可以被外部读取和修改。
* 不需要显式定义字段，简洁方便。
* 适合数据模型类，但**不能添加逻辑限制**（比如年龄不能为负）。

---

## ✅ 案例2：带私有字段的完整属性写法 + 控制访问逻辑

当我们需要对赋值做限制、添加验证逻辑时，就不能用自动属性了。

```csharp
class Student
{
    private int score;  // 私有字段

    public int Score
    {
        get { return score; }
        set
        {
            if (value >= 0 && value <= 100)
            {
                score = value;
            }
            else
            {
                Console.WriteLine("Score must be between 0 and 100.");
            }
        }
    }
}
class Program
{
    static void Main()
    {
        Student s = new Student();
        s.Score = 95;          // 合法赋值
        Console.WriteLine(s.Score); // 输出：95

        s.Score = 120;         // 非法赋值
        Console.WriteLine(s.Score); // 仍然是95
    }
}
```

🔍 **解析：**

* 使用 `private int score` 作为真实数据存储。
* `get` 用于返回字段值；`set` 可添加逻辑验证。
* 好处是**可控制数据合法性**，提高健壮性。

---

## ✅ 案例3：只读属性 + 推导计算属性（get-only）

有时候我们希望某个属性只能读取，而不能被修改，或是基于其它值计算得到。

```csharp
class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }

    // 面积是只读属性，动态计算
    public double Area
    {
        get
        {
            return Width * Height;
        }
    }
}

class Program
{
    static void Main()
    {
        Rectangle rect = new Rectangle();
        rect.Width = 5;
        rect.Height = 3;

        Console.WriteLine($"Area: {rect.Area}"); // 输出：Area: 15
        // rect.Area = 20; // ❌编译错误，Area是只读属性
    }
}
```

🔍 **解析：**

* `Area` 是一个只读属性，只有 `get` 没有 `set`。
* 访问它时，会**实时计算** Width × Height。
* 适用于只读展示、派生属性、结果缓存等场景。

---

## 🧠 小结对比：

| 属性类型          | 写法简洁 | 可控性 | 用途            |
| ------------- | ---- | --- | ------------- |
| 自动属性          | ✅    | ❌   | 简单数据模型        |
| 完整 get/set 属性 | ❌    | ✅   | 验证、限制、封装逻辑    |
| 只读属性          | ✅    | ✅   | 派生信息、保护内部状态展示 |

---