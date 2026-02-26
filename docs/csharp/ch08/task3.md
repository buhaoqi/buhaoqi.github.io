---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 多态  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 多态  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 一、多态是什么

多态（Polymorphism）即多种姿态。简单说就是：同一个行为（方法），作用在不同的对象上，会产生不同的结果。

类比生活场景：

- 行为：“发出声音”；
- 不同对象：狗、猫、鸟；
- 不同结果：汪汪叫、喵喵叫、叽叽叫。

这就是多态 —— 行为相同，表现形式不同

多态的实现方式：

- 方法重写
- 方法重载
- 接口

## 二、多态的实现方式
### 方式1：`virtual + override`
#### 简介
- 特点：运行时多态。最常用
- 核心逻辑：父类用 `virtual`定义虚方法（有默认实现）→ 子类用 `override` 重写→ 父类引用指向子类实例，自动执行子类逻辑

#### virtual关键字

"虚"意味着：

- 这个方法现在只是一个占位符或模板
- 具体的实现是"虚"的，可以在子类中变成不同的"实"体

**作用**：允许子类重写该方法/属性，但父类提供默认实现。


#### override关键字

**作用**：重写父类的 `virtual` 或 `abstract` 方法/属性。

**规则**：

- 必须与父类方法签名相同(相同返回值类型和相同参数)
- 不能重写非虚方法和静态方法
- 重写方法的访问级别不能低于父类
- 字段不能是虚的，方法、属性、事件、索引器可以是虚的
- virtual 和 static、abstract、override 不能同时使用
- 子类可以通过 stealed 停止虚拟继承


```csharp
using System;

// 父类
public class Shape
{
    public string Name { get; set; }
    public Shape(string name) => Name = name;

    // 虚方法：定义通用行为，子类可以重写，但不是必须的
    public virtual double GetArea()
    {
        Console.WriteLine($"{Name} 无面积计算逻辑");
        return 0;
    }
}

// 子类1：重写虚方法（矩形）
public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public Rectangle(string name, double w, double h) : base(name)
    {
        Width = w;
        Height = h;
    }

    // 重写父类虚方法
    public override double GetArea()
    {
        double area = Width * Height;
        Console.WriteLine($"{Name} 面积：{area}");
        return area;
    }
}

// 子类2：重写虚方法（圆形）
public class Circle : Shape
{
    public double Radius { get; set; }
    public Circle(string name, double r) : base(name) => Radius = r;

    // 重写父类虚方法
    public override double GetArea()
    {
        double area = Math.PI * Radius * Radius;
        Console.WriteLine($"{Name} 面积：{area:F2}");
        return area;
    }
}

// 测试
class Program
{
    static void Main()
    {
        // 父类引用指向不同子类实例（多态核心）执行子类实例的逻辑
        Shape shape1 = new Rectangle("矩形", 5, 3);
        Shape shape2 = new Circle("圆形", 2);

        // 同一方法调用，执行不同逻辑
        shape1.GetArea(); // 输出：矩形 面积：15
        shape2.GetArea(); // 输出：圆形 面积：12.57
    }
}
```


### 方式2：接口实现（次常用，运行时多态）
- **依赖**：接口与类的实现（无继承关系也可）
- **核心逻辑**：接口定义方法签名→ 不同类实现接口，给出不同逻辑→ 接口引用指向实现类实例
适用于“多个无继承关系的类，需要统一行为规范”的场景（比如“可飞行”的规范，鸟类、飞机类都能实现）。

**核心规则**：接口定义方法签名（无实现），类用 `implements`（C# 中用 `:`）实现接口，不同类给出不同实现。

```csharp
using System;

// 接口：定义行为规范（无实现）
public interface IFlyable
{
    void Fly(); // 仅声明方法，无方法体
}

// 类1：实现接口（鸟）
public class Bird : IFlyable
{
    public string Name { get; set; }
    public Bird(string name) => Name = name;

    // 实现接口方法
    public void Fly()
    {
        Console.WriteLine($"{Name} 扇动翅膀飞行");
    }
}

// 类2：实现接口（飞机）
public class Plane : IFlyable
{
    public string Model { get; set; }
    public Plane(string model) => Model = model;

    // 实现接口方法
    public void Fly()
    {
        Console.WriteLine($"{Model} 依靠引擎飞行");
    }
}

// 测试
class Program
{
    static void Main()
    {
        // 接口引用指向不同实现类实例
        IFlyable flyable1 = new Bird("麻雀");
        IFlyable flyable2 = new Plane("波音747");

        // 同一方法调用，执行不同逻辑
        flyable1.Fly(); // 输出：麻雀 扇动翅膀飞行
        flyable2.Fly(); // 输出：波音747 依靠引擎飞行
    }
}
```

### 方式3：抽象类+`abstract`（特定场景，运行时多态）
- **依赖**：类的继承
- **核心逻辑**：抽象类定义抽象方法（无实现，必须重写）→ 子类强制实现→ 父类引用指向子类实例
- **区别于`virtual`**：抽象方法无默认实现，子类必须重写；虚方法有默认实现，子类可选重写

适用于“父类不需要实例化，仅定义必须实现的行为”的场景（比如“图形”父类，本身无面积计算逻辑，必须由子类实现）。

**核心规则**：抽象类用 `abstract` 标记，不能实例化；抽象方法无方法体，子类必须用 `override` 实现。

#### **`abstract` - 抽象**

**作用**：定义抽象类或抽象成员，没有实现，必须由子类实现。

```csharp
using System;

// 抽象类：不能实例化，仅定义规范
public abstract class Shape
{
    public string Name { get; set; }
    public Shape(string name) => Name = name;

    // 抽象方法：无方法体，子类必须实现
    public abstract double GetArea();
}

// 子类1：实现抽象方法（正方形）
public class Square : Shape
{
    public double Side { get; set; }
    public Square(string name, double side) : base(name) => Side = side;

    // 必须实现抽象方法
    public override double GetArea()
    {
        return Side * Side;
    }
}

// 测试
class Program
{
    static void Main()
    {
        // Shape shape = new Shape(); // 报错：抽象类不能实例化
        Shape square = new Square("正方形", 4);
        Console.WriteLine($"{square.Name} 面积：{square.GetArea()}"); // 输出：16
    }
}
```

### 方式4：方法重载（编译时多态，非面向对象核心）
- **依赖**：同一类内部
- **核心逻辑**：同名方法，参数列表（个数/类型/顺序）不同→ 编译时确定调用哪个方法
- **注意**：不属于“继承相关的多态”，仅为语法层面的多态

适用于“同一个类中，同名方法但参数不同”的场景（比如“计算面积”，支持矩形、圆形两种参数）。

**核心规则**：方法名相同，参数列表（个数/类型/顺序）不同，编译时就确定调用哪个方法（因此叫“编译时多态”）。

```csharp
using System;

public class Calculator
{
    // 重载1：计算矩形面积（两个参数）
    public double CalculateArea(double width, double height)
    {
        return width * height;
    }

    // 重载2：计算圆形面积（一个参数）
    public double CalculateArea(double radius)
    {
        return Math.PI * radius * radius;
    }
}

// 测试
class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();

        // 编译时根据参数个数，确定调用哪个方法
        double rectArea = calc.CalculateArea(5, 3); // 调用重载1，结果15
        double circleArea = calc.CalculateArea(2);  // 调用重载2，结果≈12.57

        Console.WriteLine($"矩形面积：{rectArea}，圆形面积：{circleArea:F2}");
    }
}
```
### 方式5:**`new` - 隐藏成员**

**作用**：隐藏父类的同名成员（不是重写），创建新的实现。

```csharp
public class Animal
{
    public void Eat()
    {
        Console.WriteLine("动物在吃东西");
    }
}

public class Dog : Animal
{
    // 隐藏父类的Eat方法
    public new void Eat()
    {
        Console.WriteLine("狗在啃骨头");
    }
}

// 使用示例
Animal animal = new Dog();
animal.Eat();  // 输出：动物在吃东西（调用父类方法）

Dog dog = new Dog();
dog.Eat();     // 输出：狗在啃骨头（调用子类新方法）
```


### 方式6:**`sealed` - 密封**

**作用**：阻止类被继承，或阻止虚方法被进一步重写。

```csharp
// 密封类：不能被继承
public sealed class FinalClass
{
    public void Method() { }
}
// 编译错误：不能从密封类派生
// public class DerivedClass : FinalClass { }

public class Animal
{
    public virtual void MakeSound() { }
}

public class Dog : Animal
{
    // 密封方法：不能再被子类重写
    public sealed override void MakeSound()
    {
        Console.WriteLine("汪汪！");
    }
}

public class Puppy : Dog
{
    // 编译错误：不能重写密封方法
    // public override void MakeSound() { }
}
```

---


## 三、继承 VS 多态

先明确：继承是“基础”，多态是“继承的高级特性”

| 核心概念 | 本质定义 | 核心目的 |
|----------|----------|----------|
| 继承     | 子类复用父类的非私有成员（属性/方法），并可扩展新功能 | 代码复用、建立类的层级关系 |
| 多态     | 同一行为（方法）作用在不同对象上，产生不同结果 | 灵活调用、统一接口不同实现 |

👉 关键关系：**多态依赖继承实现（除接口外），但继承不一定体现多态**（比如仅复用父类属性，不重写方法）。

## 四、关键字分类

哪些属于继承？哪些属于多态？

### 1. 纯“继承相关”关键字（与多态无关）
| 关键字 | 作用 | 使用场景 |
|--------|------|----------|
| `base` | 子类中访问父类的构造函数/方法/属性 | 子类构造函数调用父类构造、子类方法中调用父类原方法 |
| `this` | 本类中调用其他构造函数/区分参数与字段 | 构造函数重载、避免字段与参数重名 |
| `sealed`（修饰类） | 阻止类被继承 | 定义不可扩展的最终类 |

### 2. 多态核心关键字（依赖继承/接口）
| 关键字 | 作用 | 多态支持 | 核心场景 |
|--------|------|----------|----------|
| `virtual` | 父类标记方法“可被重写” | ✅（运行时多态） | 父类定义通用行为，子类可选重写 |
| `override` | 子类重写父类的`virtual/abstract`方法 | ✅（运行时多态） | 实现子类专属的方法逻辑 |
| `abstract` | 定义抽象类/抽象方法（无实现，子类必须重写） | ✅（运行时多态） | 强制子类实现核心行为，父类不实例化 |
| `interface` | 定义行为规范（无实现），类实现接口 | ✅（运行时多态） | 无继承关系的类统一行为 |

### 3. 易混关键字（继承但不支持多态）
| 关键字 | 作用 | 多态支持 | 为什么不支持？ |
|--------|------|----------|----------------|
| `new` | 子类隐藏父类同名方法 | ❌ | 父类引用指向子类实例时，仍调用父类方法 |
| `sealed`（修饰方法） | 阻止`override`的方法被进一步重写 | ❌ | 仅限制重写，不改变多态本质（已重写的仍生效） |

## 五、易混点对比（核心避坑）
### 1. `override` vs `new`（最易混淆）
| 维度 | `override` | `new` |
|------|------------|-------|
| 多态支持 | ✅ 运行时多态（父类引用调用子类逻辑） | ❌ 无多态（父类引用调用父类逻辑） |
| 父类方法要求 | 必须是`virtual/abstract/override` | 无要求（任意方法） |
| 本质 | 扩展/修改父类行为 | 隐藏父类行为（创建新方法） |
| 推荐度 | 高（符合多态设计） | 低（易混淆，优先重命名） |

### 2. `virtual` vs `abstract`
| 维度 | `virtual` | `abstract` |
|------|------------|------------|
| 方法体 | 有默认实现 | 无方法体（仅签名） |
| 子类要求 | 可选重写 | 必须重写 |
| 所在类 | 普通类 | 抽象类（不可实例化） |
| 适用场景 | 父类有通用逻辑，子类可选扩展 | 父类仅定义规范，子类强制实现 |

## 六、核心记忆点（3句话搞定）
1. **继承**：用`base/this`复用代码，`sealed`限制继承，`new`隐藏父类方法（无多态）；
2. **多态**：核心是`virtual+override`（继承）、`interface`（无继承）、`abstract`（强制实现），都是**运行时多态**；
3. **编译时多态**：仅方法重载，和继承无关，只是同名方法参数不同。

## 七、实战建议（新手优先掌握）
1. 优先用`virtual+override`实现多态（覆盖80%场景）；
2. 无继承关系的类统一行为，用接口；
3. 强制子类实现核心方法，用抽象类+抽象方法；
4. 杜绝滥用`new`，除非明确要隐藏父类方法（几乎不用）；
5. 用`sealed`修饰不需要扩展的类/方法（提升性能+设计安全）。

这份整理把“继承关键字”和“多态关键字”明确区分，把多态实现方式按优先级归类，同时突出易混点，你可以直接对照这份笔记梳理知识点，重点先掌握`virtual+override`和接口实现这两种核心多态方式，其他内容作为补充即可。


## 八、多态的关键字总结

必须记住的关键字：

virtual：在父类中声明"这个方法可以被子类重写"

override：在子类中声明"我要重写父类的这个方法"

abstract：在抽象类中声明"这个方法子类必须实现"


| 关键字         | 可修饰                       | 子类行为      | 多态支持 | 必须实现   | 调用方式       |
| -------------- | ---------------------------- | ------------- | -------- | ---------- | -------------- |
| **`virtual`**  | 方法、属性、索引器、事件     | 可重写        | ✓        | 否         | `obj.Method()` |
| **`override`** | 方法、属性、索引器、事件     | 重写父类      | ✓        | 取决于父类 | `obj.Method()` |
| **`abstract`** | 类、方法、属性、索引器、事件 | 必须实现      | ✓        | 是         | 只能通过子类   |
| **`sealed`**   | 类、方法、属性               | 不能继承/重写 | ✗        | 不适用     | 正常调用       |
| **`new`**      | 任何成员                     | 隐藏父类      | ✗        | 否         | 取决于引用类型 |
| **`base`**     | 构造函数、方法调用           | 访问父类      | -        | -          | `base.Member`  |
| **`this`**     | 构造函数、成员访问           | 访问本类      | -        | -          | `this.Member`  |



1. **默认使用 `virtual`**：除非确定方法不需要扩展
2. **慎用 `new`**：容易引起混淆，优先考虑重命名
3. **合理使用 `sealed`**：性能优化和设计安全性
4. **抽象类设计**：包含通用功能，定义接口契约
5. **构造函数链**：使用 `base` 和 `this` 避免代码重复


## 九、父类型示例 VS 子类型示例

### 1.先明确核心结论
| 写法类型                | 本质（引用类型 vs 实例类型） | 核心区别                                                                 |
|-------------------------|------------------------------|--------------------------------------------------------------------------|
| `Shape s1 = new Rectangle(...)` | 父类引用 → 子类实例          | 仅能访问**父类定义的成员**（属性/方法），但重写的方法会执行子类逻辑（多态） |
| `Rectangle s1 = new Rectangle(...)` | 子类引用 → 子类实例          | 能访问**子类所有成员**（包括继承自父类的+子类新增的），方法调用直接走子类逻辑 |

### 2.逐行对比：两种写法的具体差异

```csharp
using System;

public class Shape
{
    public string Name { get; set; }
    public Shape(string name) { Name = name; }
    public virtual double GetArea()
    {
        Console.WriteLine($"{Name}无面积计算逻辑");
        return 0;
    }
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public Rectangle(string name, double w, double h) : base(name)
    {
        Width = w;
        Height = h;
    }
    public override double GetArea()
    {
        double area = Width * Height;
        Console.WriteLine($"{Name}面积：{area:F2}");
        return area;
    }
    // 子类新增方法（关键：父类引用访问不到）
    public void ShowSize()
    {
        Console.WriteLine($"宽：{Width}，高：{Height}");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public Circle(string name, double r) : base(name) { Radius = r; }
    public override double GetArea()
    {
        double area = Math.PI * Radius * Radius;
        Console.WriteLine($"{Name}面积：{area:F2}");
        return area;
    }
}

class Program
{
    static void Main()
    {
        // 场景1：父类引用 → 子类实例（你的代码写法）
        Shape s1 = new Rectangle("矩形", 5, 3);
        Shape s2 = new Circle("圆形", 2);
        
        // 场景2：子类引用 → 子类实例（对比写法）
        Rectangle r1 = new Rectangle("矩形", 5, 3);
        Circle c1 = new Circle("圆形", 2);

        // ========== 差异1：可访问的成员 ==========
        s1.GetArea(); // ✅ 可以（父类定义了GetArea方法）
        // s1.ShowSize(); // ❌ 报错：Shape类型没有ShowSize方法（父类引用看不到子类新增成员）
        r1.GetArea();  // ✅ 可以
        r1.ShowSize(); // ✅ 可以（子类引用能访问自己新增的成员）
        
        // s1.Width; // ❌ 报错：Shape没有Width属性
        r1.Width;    // ✅ 可以
        
        // ========== 差异2：多态表现（重写方法） ==========
        s1.GetArea(); // ✅ 执行子类Rectangle的GetArea（多态核心）
        r1.GetArea(); // ✅ 也执行子类Rectangle的GetArea（直接调用）
        
        // ========== 差异3：类型转换 ==========
        // 父类引用想访问子类成员，必须强制转换
        if (s1 is Rectangle)
        {
            ((Rectangle)s1).ShowSize(); // ✅ 转换后可访问
        }
    }
}
```

### 3. 使用场景（什么时候用哪种写法）
| 写法                | 适用场景                                                                 |
|---------------------|--------------------------------------------------------------------------|
| 父类引用 → 子类实例 | 1. 需要**统一管理不同子类实例**（比如用 `Shape[]` 数组存矩形、圆形）；<br />2. 追求代码扩展性（新增 `Triangle` 子类，无需修改调用逻辑）；<br />3. 符合“面向接口/父类编程”的设计原则。 |
| 子类引用 → 子类实例 | 1. 需要访问**子类新增的成员**（比如 `Rectangle` 的 `Width`、`ShowSize`）；<br />2. 明确知道实例类型，无需多态的场景。 |

### 4.易混点（父类引用 vs 父类实例）
你可能会混淆“父类引用指向子类实例”和“纯父类实例”，这里额外说明：
```csharp
// 纯父类实例（和子类无关）
Shape s3 = new Shape("普通图形");
s3.GetArea(); // 执行父类的GetArea（输出：普通图形无面积计算逻辑）

// 父类引用指向子类实例（你的代码）
Shape s1 = new Rectangle("矩形",5,3);
s1.GetArea(); // 执行子类的GetArea（输出：矩形面积：15.00）
```

### 5.总结
1. **核心区别**：父类引用只能访问父类定义的成员（但重写方法执行子类逻辑），子类引用能访问子类所有成员；
2. **多态价值**：父类引用 + 子类实例是多态的核心写法，能统一管理不同子类、提升代码扩展性；
3. **使用原则**：
   - 想体现多态、统一调用 → 用父类引用；
   - 想访问子类专属成员 → 用子类引用；
   - 父类引用想访问子类成员，需先强制类型转换（`(Rectangle)s1`）。

简单记：**引用类型决定“能访问什么”，实例类型决定“执行什么逻辑”**（重写方法）。