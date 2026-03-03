---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 接口  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 接口  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 一、接口是什么？
接口（Interface） 就像是一份契约或标准蓝图。

接口定义了一组方法、属性或事件的签名，但不提供具体的实现。

接口是对类提出的要求。

简单来说，接口告诉类“你应该做什么”，而不关心你“具体是怎么做的”。

## 定义接口的语法

```csharp
// 接口定义规范：接口名前缀统一用 I（约定俗成，便于区分）
public interface 接口名
{
    // 1. 方法（只有声明，没有方法体，无 {}）
    返回值类型 方法名(参数列表);
    
    // 2. 属性（只有声明，无实现，本质是抽象属性）
    属性类型 属性名 { get; set; } // get/set 表示属性的访问权限规范
    
    // 注意：接口中不能有字段（如 int age; 会报错）、不能有构造函数、不能有具体实现
}
```


1. 接口声明

```csharp
public interface I可绘制
{
    // 只有方法声明，没有实现
    void 绘制();
    string 获取颜色();
    
    // 属性也可以定义在接口中
    string 名称 { get; set; }
}

2. 接口实现

public class 圆形 : I可绘制
{
    public string 名称 { get; set; }
    
    public void 绘制()
    {
        Console.WriteLine($"绘制圆形: {名称}");
    }
    
    public string 获取颜色()
    {
        return "红色";
    }
}
​
public class 矩形 : I可绘制
{
    public string 名称 { get; set; }
    
    public void 绘制()
    {
        Console.WriteLine($"绘制矩形: {名称}");
    }
    
    public string 获取颜色()
    {
        return "蓝色";
    }
}
```

## 接口的特点

1. 抽象性（无实现）：接口中所有方法、属性只有“声明”，没有具体代码（无方法体{}），不能直接实例化（不能 new 接口对象，如 new ISpeakable(); 会报错）。

2. 强制性（契约约束）：类/结构体一旦实现接口，就必须全部实现接口中所有的方法、属性，缺一不可，否则编译报错（相当于“签了协议必须履行所有义务”）。

3. 解耦性（面向规范编程）：接口只关心“做什么”，不关心“怎么做”，实现类可以自由定义具体逻辑。同时解决C#类“不能多继承”的限制（一个类可以实现多个接口）。

1. 接口中只能定义**抽象成员**（方法、属性、索引器、事件），且默认是 `public`（不能加 `private`/`protected`）；
2. 类通过 `:` 实现接口，必须实现接口中所有成员；
3. 一个类可以实现**多个接口**（弥补 C# 单继承的不足）；
4. 接口不能被实例化，只能声明变量指向实现类的对象。

#### 对比你之前学的抽象类：
| 特性                | 抽象类                  | 接口                    |
|---------------------|-------------------------|-------------------------|
| 成员实现            | 可包含有实现的成员      | 所有成员都无实现        |
| 继承/实现           | 单继承                  | 多实现                  |
| 构造函数            | 可以有                  | 不能有                  |
| 访问修饰符          | 可自定义（public/private） | 只能public（默认）|

### 二、实战示例：用接口实现图形面积计算
我们定义一个 `IShape` 接口（接口名通常以 `I` 开头，是行业规范），约定「所有图形都必须实现计算面积的方法」，然后让 `Rectangle`、`Circle` 类实现这个接口。

#### 完整可运行代码
```csharp
using System;

// 定义接口：约定"计算面积"的行为规范
// 接口名以I开头，是C#的命名规范
interface IShape
{
    // 接口中只定义方法签名，无实现（甚至不需要abstract关键字）
    // 所有成员默认public，不能加修饰符
    double GetArea();
    
    // 可选：再定义一个获取图形名称的属性（补充规范）
    string Name { get; }
}

// 矩形类：实现IShape接口（必须实现接口的所有成员）
class Rectangle : IShape
{
    // 矩形特有字段
    private double _width;
    private double _height;
    
    // 构造函数：初始化矩形的宽和高
    public Rectangle(string name, double width, double height)
    {
        Name = name;
        // 简单校验：避免非法值
        if (width < 0 || height < 0)
            throw new ArgumentException("宽/高不能为负数");
        _width = width;
        _height = height;
    }
    
    // 实现接口的属性：图形名称
    public string Name { get; }
    
    // 实现接口的核心方法：计算矩形面积
    public double GetArea()
    {
        return _width * _height;
    }
}

// 圆形类：实现IShape接口
class Circle : IShape
{
    // 圆形特有字段
    private double _radius;
    
    // 构造函数
    public Circle(string name, double radius)
    {
        Name = name;
        if (radius < 0)
            throw new ArgumentException("半径不能为负数");
        _radius = radius;
    }
    
    // 实现接口的属性
    public string Name { get; }
    
    // 实现接口的核心方法：计算圆形面积
    public double GetArea()
    {
        return Math.PI * Math.Pow(_radius, 2);
    }
}

// 测试类
class Program
{
    static void Main()
    {
        // 接口变量指向实现类对象（多态特性）
        IShape rectangle = new Rectangle("长方形", 5, 3);
        IShape circle = new Circle("圆形", 4);
        
        // 调用接口约定的方法，自动执行子类的实现
        Console.WriteLine($"{rectangle.Name} 的面积：{rectangle.GetArea():F2}");
        Console.WriteLine($"{circle.Name} 的面积：{circle.GetArea():F2}");
        
        // 扩展：接口的多态优势——统一处理所有图形
        IShape[] shapes = { rectangle, circle, new Rectangle("正方形", 4, 4) };
        Console.WriteLine("\n批量计算面积：");
        foreach (var shape in shapes)
        {
            Console.WriteLine($"{shape.Name}：{shape.GetArea():F2}");
        }
        
        Console.ReadKey();
    }
}
```

### 三、代码关键部分解释
1. **接口 `IShape` 的设计**：
   - 只定义了两个「行为规范」：`GetArea()` 方法（计算面积）和 `Name` 属性（获取图形名称）；
   - 没有任何实现代码，只告诉所有实现类：“你必须有这两个成员”。

2. **子类实现接口的规则**：
   - `Rectangle` 和 `Circle` 都通过 `:` 实现 `IShape` 接口；
   - 必须**全部实现**接口中的成员（少一个都会编译报错）；
   - 实现的成员必须和接口签名完全一致（比如 `GetArea()` 必须返回 `double`，无参数）。

3. **接口的多态特性**：
   - 可以用接口类型的变量（`IShape`）指向任何实现类的对象（`Rectangle`/`Circle`）；
   - 调用 `rectangle.GetArea()` 时，会自动执行 `Rectangle` 类的实现；
   - 优势：可以统一处理所有实现了 `IShape` 的图形（比如示例中的数组遍历），新增图形（如三角形）只需实现 `IShape`，无需修改原有代码。

4. **运行结果**：
   ```
   长方形 的面积：15.00
   圆形 的面积：50.27

   批量计算面积：
   长方形：15.00
   圆形：50.27
   正方形：16.00
   ```

### 四、进阶：接口的多实现（弥补单继承）
接口的一大优势是支持多实现，比如我们新增一个 `IPerimeter` 接口（计算周长），让矩形同时实现 `IShape` 和 `IPerimeter`：
```csharp
// 新增：计算周长的接口
interface IPerimeter
{
    double CalculatePerimeter();
}

// 矩形同时实现两个接口
class Rectangle : IShape, IPerimeter
{
    // 原有代码不变...
    
    // 实现IPerimeter接口的方法：计算矩形周长
    public double CalculatePerimeter()
    {
        return 2 * (_width + _height);
    }
}

// 测试多接口
class Program
{
    static void Main()
    {
        Rectangle rect = new Rectangle("长方形", 5, 3);
        Console.WriteLine($"周长：{rect.CalculatePerimeter():F2}"); // 输出：16.00
    }
}
```

### 总结
1. **接口的本质**：是一份「行为契约」，只定义规则（成员签名），不实现逻辑，强制实现类遵循统一规范；
2. **核心优势**：支持多实现、解耦行为定义和实现、实现多态（接口变量统一处理不同实现类）；
3. **面积示例核心**：`IShape` 约定“所有图形要能算面积、能获取名称”，`Rectangle`/`Circle` 各自实现具体的计算逻辑，既统一了接口，又保留了个性化实现。

对比之前的抽象类，接口更纯粹地专注于「行为规范」，而抽象类更适合「既有通用实现，又有强制规范」的场景。在实际开发中，接口常用于定义功能标准（比如 `IDisposable`、`IEnumerable`），是实现代码解耦和扩展的重要手段。







### 1. **只声明，不实现**
```csharp
public interface IAnimal
{
    void MakeSound();      // 方法声明
    string Name { get; set; }  // 属性声明
    event EventHandler OnEat;  // 事件声明
    string this[int index] { get; set; }  // 索引器声明
}
```

### 2. **可以被多个类实现**（解决多重继承问题）
```csharp
public class Bird : IFlyable, IRunnable  // 实现多个接口
{
    public void Fly() 
    {
        Console.WriteLine("鸟儿飞翔");
    }
    
    public void Run() 
    {
        Console.WriteLine("鸟儿奔跑");
    }
}
```

### 3. **不能包含字段和构造函数**
```csharp
public interface IExample
{
    // ❌ 错误：接口不能包含字段
    // private int _age;
    
    // ❌ 错误：接口不能有构造函数
    // public IExample() { }
    
    // ✓ 正确：可以定义属性
    int Age { get; set; }
}
```
1. 纯规范，无实现
```csharp
public interface I可比较
{
    // 接口不能包含字段
    // 不能有：int x; 
    
    // 接口不能包含具体实现
    // 不能有：void 方法() { Console.WriteLine("实现"); }
    
    // 只能包含声明：
    int 比较(object 其他对象);
}
```
2. 多继承优势
```csharp
public interface I可序列化
{
    string 序列化();
}
​
public interface I可克隆
{
    object 克隆();
}
​
// 一个类可以实现多个接口
public class 文档 : I可序列化, I可克隆
{
    public string 序列化()
    {
        return "文档序列化数据";
    }
    
    public object 克隆()
    {
        return new 文档();
    }
}
```
3. 接口可以继承接口
```csharp
public interface I动物
{
    void 移动();
}

public interface I哺乳动物 : I动物  // 接口继承接口
{
    void 哺乳();
}

public class 狗 : I哺乳动物
{
    public void 移动()
    {
        Console.WriteLine("狗用四条腿跑");
    }
    
    public void 哺乳()
    {
        Console.WriteLine("狗妈妈喂奶");
    }
}
```
