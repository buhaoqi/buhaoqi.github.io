---
# 这部分是关键！侧边栏显示名由这里决定
title: 四、接口  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 四、接口  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---
对于C#初学者，理解接口可以从以下几个简单直观的角度入手：

一、用生活中的例子理解接口

1. 电源插座比喻

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

2. USB接口比喻

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
二、接口的核心思想

简单理解：

"接口定义了一套规范或契约，规定类必须做什么，但不关心具体怎么做"

三、从抽象类到接口的演进

阶段1：使用抽象类（有限制）
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

阶段2：使用接口（更灵活）

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
四、接口的基本语法

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
五、接口的特点

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
六、实际应用场景

场景1：支付系统
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
场景2：数据访问层
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
七、接口与抽象类的区别







特性



接口



抽象类





实现



只有声明，没有实现



可以包含具体实现





继承



可实现多个接口



只能继承一个抽象类





字段



不能包含字段



可以包含字段





构造函数



没有构造函数



有构造函数





使用场景



定义行为契约



提供部分实现的基类

八、初学者实践建议

第一步：识别接口场景

问自己："这些类有共同的行为，但实现完全不同吗？"





不同的支付方式



不同的数据存储



不同的消息发送方式

第二步：定义接口
```csharp
public interface I消息发送器
{
    void 发送消息(string 消息, string 目标);
    bool 验证目标(string 目标);
}
```
第三步：实现接口
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
第四步：使用接口编程
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
```
// 使用时可以灵活切换不同的发送器
var 邮件服务 = new 通知服务(new 邮件发送器());
var 短信服务 = new 通知服务(new 短信发送器());

九、记住这个简单比喻

接口就像"职业标准"：





厨师标准：必须会切菜、炒菜、调味



程序员标准：必须会编码、调试、测试



司机标准：必须会驾驶、停车、交规

不同的人实现相同的职业标准，但具体工作方式不同！

接口让代码更灵活、更可扩展、更易于测试和维护！