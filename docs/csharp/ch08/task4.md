---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 接口  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 接口  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 接口是什么

接口（interface），本质是一种规范/契约，用于定义类或结构体“必须具备哪些行为（方法、属性等）”，但不提供任何行为的具体实现。接口只声明"做什么"，而不关心"怎么做"。

可以通俗理解为：接口是一份“协议”，只要某个类/结构体“签订”了这份协议（实现接口），就必须按照协议要求，完成所有规定的行为；至于如何完成这些行为（具体代码），接口不做限制，由实现类自己决定。

```csharp
// 接口定义：声明能力，不提供实现
public interface IFlyable
{
    void Fly();  // 只有方法签名，没有方法体
}
```

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

## 案例

### 案例1：接口的定义与实现

核心目标：

- 掌握「接口定义」「类实现接口」「调用接口方法」的基础流程
- 理解接口“规范方法名，不实现逻辑”的核心特点。

```csharp
using System;

// 1. 定义接口（规范：接口名前缀统一用I）
// 此处定义一个“说话”的接口，要求实现类必须有“说话”的方法
public interface ISpeakable
{
    // 接口中的方法：只有声明，没有方法体（无{}）
    void Speak();
}

// 2. 类实现接口（用冒号继承接口，必须实现接口中所有的抽象方法）
// 人类实现“说话”接口
public class Person : ISpeakable
{
    // 实现接口的方法（必须和接口中声明的方法名、参数、返回值完全一致）
    public void Speak()
    {
        Console.WriteLine("人类：你好，我会说话！");
    }
}

// 动物类实现“说话”接口
public class Animal : ISpeakable
{
    public void Speak()
    {
        Console.WriteLine("动物：汪汪/喵喵（动物的说话方式）！");
    }
}

// 3. 测试调用
class Program
{
    static void Main(string[] args)
    {
        // 用接口类型接收实现类对象（面向接口编程的基础）
        ISpeakable person = new Person();
        ISpeakable animal = new Animal();
        
        // 调用接口方法（实际执行的是实现类的方法）
        person.Speak();  // 输出：人类：你好，我会说话！
        animal.Speak();  // 输出：动物：汪汪/喵喵（动物的说话方式）！
    }
}

```
关键说明：

- 接口方法默认是public abstract（可省略不写），不能有访问修饰符（如private、protected）；
- 实现类必须“全部实现”接口中的所有方法，缺一不可，否则编译报错；
- 可以用「接口类型」接收「实现类对象」，这是面向接口编程的核心思想（解耦）。

### 案例2：接口的常用扩展

核心目标：
- 掌握「接口中定义属性」「一个类实现多个接口」
- 理解接口的“多规范约束”能力（C#类不能多继承，但可以多实现接口）。

```csharp
using System;

// 接口1：定义“说话”规范（包含方法+属性）
public interface ISpeakable
{
    // 接口中的属性（只有声明，无实现，本质是抽象属性）
    string Name { get; set; } // 要求实现类必须有Name属性（可读可写）
    
    void Speak(); // 方法规范
}

// 接口2：定义“吃饭”规范
public interface IEatable
{
    void Eat(); // 要求实现类必须有吃饭的方法
}

// 人类：同时实现2个接口（多实现，用逗号分隔）
// 必须同时实现ISpeakable和IEatable的所有方法/属性
public class Person : ISpeakable, IEatable
{
    // 实现ISpeakable的Name属性
    public string Name { get; set; }
    
    // 实现ISpeakable的Speak方法
    public void Speak()
    {
        Console.WriteLine($"我叫{Name}，我会用人类的语言交流！");
    }
    
    // 实现IEatable的Eat方法
    public void Eat()
    {
        Console.WriteLine($"{Name}：我会用筷子吃饭，爱吃米饭和蔬菜～");
    }
}

// 测试调用
class Program
{
    static void Main(string[] args)
    {
        // 创建人类对象，赋值属性
        Person person = new Person() { Name = "小明" };
        
        // 调用两个接口的方法
        person.Speak(); // 输出：我叫小明，我会用人类的语言交流！
        person.Eat();   // 输出：小明：我会用筷子吃饭，爱吃米饭和蔬菜～
        
        // 也可以分别用两个接口类型接收
        ISpeakable speakable = person;
        IEatable eatable = person;
        speakable.Speak(); // 同样能调用，本质还是Person的实现
        eatable.Eat();
    }
}
```

关键说明：

- 接口中可以定义属性、方法、索引器、事件，但不能定义字段（如int age; 会报错）；
- 一个类可以实现多个接口（用逗号分隔），解决了C#类“不能多继承”的限制；
- 接口属性的实现，需满足接口声明的访问权限（如接口中是`{get; set;}`，实现类也必须有get和set，不能只写get）。

### 案例3：接口继承与接口多态

核心目标：

- 掌握「接口继承接口」「接口多态的实际应用」
- 理解接口如何实现“规范的分层”，贴合真实开发中的“抽象分层”思想。

```csharp
using System;

// 基础接口：定义“生物体”的通用规范（最顶层抽象）
public interface IOrganism
{
    // 所有生物体都有“呼吸”和“生长”的行为
    void Breathe();
    void Grow();
}

// 接口继承接口（IAnimal继承IOrganism，拥有其所有规范，再扩展自身规范）
public interface IAnimal : IOrganism
{
    // 动物额外的规范：移动
    void Move();
}

// 接口继承接口（IPerson继承IAnimal，拥有IAnimal和IOrganism的所有规范）
public interface IPerson : IAnimal
{
    // 人类额外的规范：思考
    void Think();
}

// 人类实现IPerson接口（必须实现IPerson、IAnimal、IOrganism的所有方法）
public class Person : IPerson
{
    public void Breathe()
    {
        Console.WriteLine("人类：用鼻子呼吸空气");
    }
    
    public void Grow()
    {
        Console.WriteLine("人类：从婴儿长成成年人，慢慢变老");
    }
    
    public void Move()
    {
        Console.WriteLine("人类：用双腿走路、跑步");
    }
    
    public void Think()
    {
        Console.WriteLine("人类：会思考、会学习、会创造");
    }
}

// 小狗实现IAnimal接口（必须实现IAnimal和IOrganism的所有方法）
public class Dog : IAnimal
{
    public void Breathe()
    {
        Console.WriteLine("小狗：用鼻子呼吸空气");
    }
    
    public void Grow()
    {
        Console.WriteLine("小狗：从幼犬长成成年犬");
    }
    
    public void Move()
    {
        Console.WriteLine("小狗：用四条腿奔跑、跳跃");
    }
}

// 测试：接口多态的应用（用顶层接口接收所有实现类）
class Program
{
    static void Main(string[] args)
    {
        // 用顶层接口IOrganism接收不同的实现类（多态核心）
        IOrganism person = new Person();
        IOrganism dog = new Dog();
        
        // 统一调用顶层接口的方法（不管是人类还是小狗，都能统一处理）
        Console.WriteLine("=== 人类的行为 ===");
        person.Breathe();
        person.Grow();
        // 若要调用子类接口的方法，需要强制转换（前提是对象是对应类型）
        if (person is IPerson p)
        {
            p.Move();
            p.Think();
        }
        
        Console.WriteLine("\n=== 小狗的行为 ===");
        dog.Breathe();
        dog.Grow();
        if (dog is IAnimal d)
        {
            d.Move();
        }
    }
}
```

输出结果：

```
=== 人类的行为 ===
人类：用鼻子呼吸空气
人类：从婴儿长成成年人，慢慢变老
人类：用双腿走路、跑步
人类：会思考、会学习、会创造

=== 小狗的行为 ===
小狗：用鼻子呼吸空气
小狗：从幼犬长成成年犬
小狗：用四条腿奔跑、跳跃
```

关键说明：

- 接口可以继承接口（用冒号），继承后会拥有父接口的所有规范，可继续扩展自身规范；
- 接口继承不同于类继承，一个接口可以继承多个接口（如interface IA : IB, IC `{}`）；
- 接口多态：用顶层接口接收所有子类实现，统一调用通用方法，实现“统一管理”，这是真实开发中分层架构的核心（如Repository接口、Service接口）。

### 案例4：接口依赖注入

核心目标：

- 掌握「接口的实战应用场景」
- 理解接口如何实现“解耦”，贴合.NET开发中“依赖注入”的核心思想（简化代码、便于扩展和测试）。

场景：模拟一个“订单处理系统”，订单可以用“短信通知”或“邮件通知”，通过接口实现“通知方式的灵活切换”，无需修改核心代码。

```csharp
using System;

// 1. 定义通知接口（规范通知的方法，不关心具体是短信还是邮件）
public interface INotifier
{
    // 通知的规范：接收订单号，发送通知
    void SendNotification(string orderId);
}

// 2. 实现1：短信通知
public class SmsNotifier : INotifier
{
    public void SendNotification(string orderId)
    {
        Console.WriteLine($"【短信通知】您的订单{orderId}已提交成功，请注意查收！");
    }
}

// 3. 实现2：邮件通知
public class EmailNotifier : INotifier
{
    public void SendNotification(string orderId)
    {
        Console.WriteLine($"【邮件通知】订单{orderId}提交成功，详情已发送至您的注册邮箱，请注意查收！");
    }
}

// 4. 订单服务（核心业务类，依赖INotifier接口，不依赖具体实现）
// 此处不直接new SmsNotifier或EmailNotifier，而是通过构造函数接收接口对象（依赖注入）
public class OrderService
{
    // 依赖接口（而非具体实现）
    private readonly INotifier _notifier;
    
    // 构造函数注入：外部传入具体的通知实现
    public OrderService(INotifier notifier)
    {
        _notifier = notifier;
    }
    
    // 处理订单的核心方法
    public void ProcessOrder(string orderId)
    {
        Console.WriteLine($"正在处理订单：{orderId}");
        // 调用通知方法（具体是短信还是邮件，由外部传入决定）
        _notifier.SendNotification(orderId);
        Console.WriteLine($"订单{orderId}处理完成！\n");
    }
}

// 测试：灵活切换通知方式（无需修改OrderService核心代码）
class Program
{
    static void Main(string[] args)
    {
        // 方式1：用短信通知处理订单
        INotifier smsNotifier = new SmsNotifier();
        OrderService orderService1 = new OrderService(smsNotifier);
        orderService1.ProcessOrder("ORDER_001");
        
        // 方式2：用邮件通知处理订单（只需切换传入的实现类）
        INotifier emailNotifier = new EmailNotifier();
        OrderService orderService2 = new OrderService(emailNotifier);
        orderService2.ProcessOrder("ORDER_002");
    }
}
```


输出结果：
```
正在处理订单：ORDER_001
【短信通知】您的订单ORDER_001已提交成功，请注意查收！
订单ORDER_001处理完成！

正在处理订单：ORDER_002
【邮件通知】订单ORDER_002提交成功，详情已发送至您的注册邮箱，请注意查收！
订单ORDER_002处理完成！
```

关键说明（实战重点）：

- 核心价值：接口实现“解耦”——OrderService只关心“通知”这个行为，不关心具体是短信还是邮件，后续新增“微信通知”，只需新增一个实现INotifier的类，无需修改OrderService代码；
- 依赖注入：通过构造函数将接口的具体实现传入业务类，是.NET开发中最常用的解耦方式（后续会结合DI容器进一步简化）；
- 贴合真实开发：此案例模拟了真实项目中的“分层架构”（接口层、实现层、业务层），接口负责规范，实现类负责具体逻辑，业务层依赖接口，便于扩展和单元测试。

### 说话接口

用“说话”的场景，直观展示接口的定义、实现和调用：

```csharp
using System;

// 1. 定义接口（协议：凡是实现这个接口的，必须会“说话”）
public interface ISpeakable
{
    void Speak(); // 协议规定：必须有“说话”方法
}

// 2. 人类实现接口（签订协议，履行“说话”义务）
public class Person : ISpeakable
{
    // 实现接口的Speak方法（自己定义“说话”的具体逻辑）
    public void Speak()
    {
        Console.WriteLine("人类：你好，我会用语言交流！");
    }
}

// 3. 动物实现接口（签订协议，履行“说话”义务，逻辑和人类不同）
public class Animal : ISpeakable
{
    public void Speak()
    {
        Console.WriteLine("动物：汪汪/喵喵（动物的说话方式）！");
    }
}

// 测试调用
class Program
{
    static void Main(string[] args)
    {
        // 用接口类型接收实现类对象（面向规范编程，不依赖具体类）
        ISpeakable person = new Person();
        ISpeakable animal = new Animal();
        
        // 调用方法（实际执行的是实现类的逻辑）
        person.Speak();  // 输出：人类：你好，我会用语言交流！
        animal.Speak();  // 输出：动物：汪汪/喵喵（动物的说话方式）！
    }
}
```

### 定义接口
```csharp
// 飞行能力接口
public interface IFlyable
{
    void Fly();
    int MaxAltitude { get; set; }
}

// 游泳能力接口
public interface ISwimmable
{
    void Swim();
    int MaxDepth { get; set; }
}

// 奔跑能力接口
public interface IRunnable
{
    void Run();
    double Speed { get; set; }
}
```

### 实现接口
```csharp
// 鸭子：可以飞、游泳、奔跑
public class Duck : IFlyable, ISwimmable, IRunnable
{
    // 实现IFlyable
    public int MaxAltitude { get; set; } = 1000;
    public void Fly()
    {
        Console.WriteLine($"鸭子在{MaxAltitude}米高度飞翔");
    }
    
    // 实现ISwimmable
    public int MaxDepth { get; set; } = 5;
    public void Swim()
    {
        Console.WriteLine($"鸭子在{MaxDepth}米深的水中游泳");
    }
    
    // 实现IRunnable
    public double Speed { get; set; } = 10.5;
    public void Run()
    {
        Console.WriteLine($"鸭子以{Speed}公里/小时的速度奔跑");
    }
}

// 鱼：只能游泳
public class Fish : ISwimmable
{
    public int MaxDepth { get; set; } = 100;
    public void Swim()
    {
        Console.WriteLine($"鱼在{MaxDepth}米深的海里游泳");
    }
}

// 鹰：只能飞
public class Eagle : IFlyable
{
    public int MaxAltitude { get; set; } = 5000;
    public void Fly()
    {
        Console.WriteLine($"鹰在{MaxAltitude}米高空翱翔");
    }
}
```
### 场景1：定义可插拔的功能
```csharp
// 支付接口
public interface IPayment
{
    void Pay(decimal amount);
    void Refund(decimal amount);
}

// 多种支付方式实现同一接口
public class Alipay : IPayment { /* 实现 */ }
public class WeChatPay : IPayment { /* 实现 */ }
public class CreditCard : IPayment { /* 实现 */ }
```

### 场景2：依赖注入和解耦
```csharp
// 业务逻辑依赖于接口，而不是具体实现
public class OrderService
{
    private readonly IPayment _payment;
    private readonly ILogger _logger;
    
    public OrderService(IPayment payment, ILogger logger)
    {
        _payment = payment;
        _logger = logger;
    }
    
    public void ProcessOrder(decimal amount)
    {
        _logger.Log("开始处理订单");
        _payment.Pay(amount);
        _logger.Log("订单处理完成");
    }
}
```

### 场景3：定义通用集合操作
```csharp
// .NET 框架中的常用接口
public interface IEnumerable
{
    IEnumerator GetEnumerator();
}

public interface IComparable<T>
{
    int CompareTo(T other);
}

public interface IDisposable
{
    void Dispose();
}
```
### 案例：电源插座

```csharp
// 插座接口定义了一套规范
public interface I电源插座
{
    void 供电();  // 所有电器都要实现这个功能
}
​
// 不同电器实现相同的插座接口
public class 电视机 : I电源插座
{
    public void 供电()
    {
        Console.WriteLine("电视机获得电力，显示画面");
    }
}
​
public class 电冰箱 : I电源插座
{
    public void 供电()
    {
        Console.WriteLine("电冰箱获得电力，开始制冷");
    }
}
```
### 案例：USB接口

```csharp
// USB接口标准
public interface IUSB设备
{
    void 传输数据();  // 所有USB设备都要实现
    void 连接电脑();  // 统一的行为规范
}
​
public class U盘 : IUSB设备
{
    public void 传输数据()
    {
        Console.WriteLine("U盘读写文件数据");
    }
    
    public void 连接电脑()
    {
        Console.WriteLine("U盘通过USB接口连接");
    }
}
​
public class 鼠标 : IUSB设备
{
    public void 传输数据()
    {
        Console.WriteLine("鼠标传输移动和点击数据");
    }
    
    public void 连接电脑()
    {
        Console.WriteLine("鼠标通过USB接口连接");
    }
}
```


### 案例：会叫的动物接口

#### 阶段1：使用抽象类（有限制）

```csharp
public abstract class 动物
{
    public abstract void 叫();
    public void 呼吸()  // 可以有具体实现
    {
        Console.WriteLine("呼吸");
    }
}
​
// 问题：C#不支持多继承，一个类只能继承一个父类
```
#### 阶段2：使用接口（更灵活）

```csharp
// 接口只包含规范，不包含实现
public interface I会叫的动物
{
    void 叫();  // 只有声明，没有实现
}
​
public interface I会飞的动物
{
    void 飞();
}
​
public interface I会游泳的动物
{
    void 游泳();
}
​
// 一个类可以实现多个接口！
public class 鸭子 : I会叫的动物, I会飞的动物, I会游泳的动物
{
    public void 叫()
    {
        Console.WriteLine("嘎嘎！");
    }
    
    public void 飞()
    {
        Console.WriteLine("鸭子扑腾翅膀飞行");
    }
    
    public void 游泳()
    {
        Console.WriteLine("鸭子在水中游泳");
    }
}
```



### 场景1：支付系统
```csharp
public interface I支付方式
{
    bool 支付(decimal 金额);
    string 获取支付信息();
}

public class 支付宝 : I支付方式
{
    public bool 支付(decimal 金额)
    {
        Console.WriteLine($"支付宝支付{金额}元");
        return true;
    }
    
    public string 获取支付信息()
    {
        return "支付宝支付成功";
    }
}

public class 微信支付 : I支付方式
{
    public bool 支付(decimal 金額)
    {
        Console.WriteLine($"微信支付{金額}元");
        return true;
    }
    
    public string 获取支付信息()
    {
        return "微信支付成功";
    }
}

// 使用接口编写通用的支付处理代码
public class 订单处理器
{
    public void 处理支付(I支付方式 支付方式, decimal 金额)
    {
        if (支付方式.支付(金額))
        {
            Console.WriteLine(支付方式.获取支付信息());
        }
    }
}
```

### 场景2：数据访问层

```csharp
public interface I数据访问
{
    void 添加(object 实体);
    void 更新(object 实体);
    void 删除(int id);
    object 查询(int id);
}

public class SqlServer数据访问 : I数据访问
{
    public void 添加(object 实体)
    {
        Console.WriteLine("使用SQL Server添加数据");
    }
    
    public void 更新(object 实体)
    {
        Console.WriteLine("使用SQL Server更新数据");
    }
    
    public void 删除(int id)
    {
        Console.WriteLine("使用SQL Server删除数据");
    }
    
    public object 查询(int id)
    {
        Console.WriteLine("使用SQL Server查询数据");
        return new object();
    }
}

public class Oracle数据访问 : I数据访问
{
    public void 添加(object 实体)
    {
        Console.WriteLine("使用Oracle添加数据");
    }
    
    // ... 其他方法实现
}
```

## 接口的本质与作用

1. 本质：规范、契约、抽象层，隔离“规范”和“实现”，让代码更灵活、可扩展。

2. 核心作用：

- 统一规范：让不同的类，拥有相同的行为名称（如上面的 Speak 方法），便于统一调用和管理；
- 解耦代码：修改某个实现类的逻辑时，无需修改依赖接口的代码（如修改 Animal 的 Speak 方法，不影响 Program 中的调用）；
- 实现多规范：一个类可以实现多个接口，拥有多种不同的行为规范（如一个类既可以“说话”，也可以“吃饭”）。

## 接口和抽象类的核心区别

| 特性 | 接口 | 抽象类 |
|------|------|--------|
| **多重继承** | 支持（可实现多个接口） | 不支持（只能继承一个类） |
| **实现** | C# 8.0前只有声明 | 可以有抽象和具体方法 |
| **字段** | 不能包含 | 可以包含 |
| **构造函数** | 没有 | 有 |
| **访问修饰符** | 默认public，不能使用其他 | 可以使用各种修饰符 |
| **版本更新** | 添加新成员会破坏实现类 | 添加新成员相对安全 |

接口与抽象类的区别

| 特性 | 接口 | 抽象类 |
|------|------|--------|
| **实现** | 只有声明，没有实现 | 可以包含具体实现 |
| **继承** | 可实现多个接口 | 只能继承一个抽象类 |
| **字段** | 不能包含字段 | 可以包含字段 |
| **构造函数** | 没有构造函数 | 有构造函数 |
| **使用场景** | 定义行为契约 | 提供部分实现的基类 |

接口特点

- 所有成员默认是 `public`
- 可以包含方法、属性、事件、索引器的声明
- C# 8.0+ 开始支持默认实现方法

抽象类特点

- 可以包含访问修饰符
- 可以包含字段、属性、方法、构造函数等
- 可以有抽象成员（只有声明）和具体成员（有实现）

## 接口的多态性

```csharp
class Program
{
    static void Main()
    {
        // 接口作为类型使用
        IFlyable flyingAnimal1 = new Duck();
        IFlyable flyingAnimal2 = new Eagle();
        
        ISwimmable swimmingAnimal1 = new Duck();
        ISwimmable swimmingAnimal2 = new Fish();
        
        // 调用接口方法
        flyingAnimal1.Fly();   // 鸭子在1000米高度飞翔
        flyingAnimal2.Fly();   // 鹰在5000米高空翱翔
        
        swimmingAnimal1.Swim(); // 鸭子在5米深的水中游泳
        swimmingAnimal2.Swim(); // 鱼在100米深的海里游泳
        
        // 接口可以作为参数
        MakeAnimalFly(new Duck());
        MakeAnimalFly(new Eagle());
        
        MakeAnimalSwim(new Duck());
        MakeAnimalSwim(new Fish());
    }
    
    static void MakeAnimalFly(IFlyable flyable)
    {
        flyable.Fly();
    }
    
    static void MakeAnimalSwim(ISwimmable swimmable)
    {
        swimmable.Swim();
    }
}
```

## 接口的默认实现（C# 8.0+）

从C# 8.0开始，接口可以提供默认实现：

```csharp
public interface ILogger
{
    // 抽象方法（没有实现）
    void Log(string message);
    
    // 默认实现方法
    void LogError(string error)
    {
        Log($"[ERROR] {error}");
    }
    
    // 静态成员（C# 11+）
    static ILogger CreateDefault() => new ConsoleLogger();
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
    // 不需要实现LogError，使用默认实现
}
```


## 接口设计原则

1. **接口隔离原则**：接口应该小而专一
   ```csharp
   // ❌ 不好：胖接口
   public interface IAnimal
   {
       void Fly();
       void Swim();
       void Run();
   }
   
   // ✓ 好：细粒度接口
   public interface IFlyable { void Fly(); }
   public interface ISwimmable { void Swim(); }
   public interface IRunnable { void Run(); }
   ```

2. **明确命名**：接口名通常以"I"开头
   ```csharp
   public interface IRepository { }
   public interface IService { }
   public interface IFactory { }
   ```

## 八、初学者实践建议

### 第一步：识别接口场景

问自己："这些类有共同的行为，但实现完全不同吗？"

- 不同的支付方式
- 不同的数据存储
- 不同的消息发送方式

### 第二步：定义接口
```csharp
public interface I消息发送器
{
    void 发送消息(string 消息, string 目标);
    bool 验证目标(string 目标);
}
```
### 第三步：实现接口
```csharp
public class 邮件发送器 : I消息发送器
{
    public void 发送消息(string 消息, string 目标)
    {
        Console.WriteLine($"发送邮件到 {目标}: {消息}");
    }
    
    public bool 验证目标(string 目标)
    {
        return 目标.Contains("@");
    }
}

public class 短信发送器 : I消息发送器
{
    public void 发送消息(string 消息, string 目标)
    {
        Console.WriteLine($"发送短信到 {目标}: {消息}");
    }
    
    public bool 验证目标(string 目标)
    {
        return 目标.Length == 11; // 手机号验证
    }
}
```
### 第四步：使用接口编程
```csharp
public class 通知服务
{
    private I消息发送器 _发送器;
    
    public 通知服务(I消息发送器 发送器)
    {
        _发送器 = 发送器;
    }
    
    public void 发送通知(string 消息, string 目标)
    {
        if (_发送器.验证目标(目标))
        {
            _发送器.发送消息(消息, 目标);
        }
    }
}

// 使用时可以灵活切换不同的发送器
var 邮件服务 = new 通知服务(new 邮件发送器());
var 短信服务 = new 通知服务(new 短信发送器());
```


## 总结

**接口的本质**是：
- ✅ **契约**：定义类必须实现的功能
- ✅ **能力**：表示类"能够做什么"
- ✅ **解耦**：将"定义"与"实现"分离
- ✅ **多态**：不同类型的对象可以通过同一接口操作

简单来说，接口就像是**产品的规格说明书**，它规定了产品必须有什么功能，但具体怎么实现由各个厂家（类）自己决定。

接口就像"职业标准"：

- 厨师标准：必须会切菜、炒菜、调味
- 程序员标准：必须会编码、调试、测试
- 司机标准：必须会驾驶、停车、交规

不同的人实现相同的职业标准，但具体工作方式不同！

接口让代码更灵活、更可扩展、更易于测试和维护！

1. 接口的核心：规范（定义“必须做什么”，不定义“怎么做”）；
2. 核心用法：定义接口 → 类/结构体实现接口（全部实现方法） → 用接口类型接收实现类对象（面向接口编程）；
3. 进阶技巧：接口可以多实现、接口可以继承接口，核心是为了“规范分层”和“解耦”；
4. 实战意义：接口是依赖注入的基础，是.NET分层架构、微服务架构的核心，掌握接口才能写出可扩展、可维护的代码。