---
# 这部分是关键！侧边栏显示名由这里决定
title: 三、多态  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 三、多态  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---
对于C#初学者，理解多态可以从以下几个简单直观的角度入手：

一、用生活中的例子理解多态

1. "说话"的多态性

// 不同的人说"你好"会有不同的表现
中国人说"你好" → "你好"
美国人说"你好" → "Hello"
日本人说"你好" → "こんにちは"
​
// 同一个指令，不同对象产生不同行为

2. "绘图"的多态性

// 说"画一个图形"
画圆形 → 画出⚪
画方形 → 画出◼
画三角 → 画出▲
​
// 同一个"画"的命令，不同图形有不同实现

二、多态的核心思想

简单理解：

"同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果"

三、从继承到多态的演进

阶段1：普通继承（没有多态）

```csharp
public class 动物
{
    public void 叫()
    {
        Console.WriteLine("动物发出声音");
    }
}
​
public class 狗 : 动物
{
    // 隐藏父类方法（不好！）
    public new void 叫()
    {
        Console.WriteLine("汪汪！");
    }
}
​
public class 猫 : 动物
{
    public new void 叫()
    {
        Console.WriteLine("喵喵！");
    }
}
​```
// 使用
狗 小黄 = new 狗();
猫 小花 = new 猫();
小黄.叫();  // 输出：汪汪！
小花.叫();  // 输出：喵喵！

阶段2：使用多态（正确方式）

public class 动物
{
    // virtual关键字：允许子类重写
    public virtual void 叫()
    {
        Console.WriteLine("动物发出声音");
    }
}
​
public class 狗 : 动物
{
    // override关键字：重写父类方法
    public override void 叫()
    {
        Console.WriteLine("汪汪！");
    }
}
​
public class 猫 : 动物
{
    public override void 叫()
    {
        Console.WriteLine("喵喵！");
    }
}
​
// 使用多态的魅力！
动物 我的宠物1 = new 狗();  // 动物引用指向狗对象
动物 我的宠物2 = new 猫();  // 动物引用指向猫对象
​
我的宠物1.叫();  // 输出：汪汪！（调用狗的版本）
我的宠物2.叫();  // 输出：喵喵！（调用猫的版本）

四、多态的两种实现方式

方式1：继承 + 虚方法（最常用）

public class 图形
{
    public virtual void 绘制()
    {
        Console.WriteLine("绘制基本图形");
    }
}
​
public class 圆形 : 图形
{
    public override void 绘制()
    {
        Console.WriteLine("绘制圆形⚪");
    }
}
​
public class 矩形 : 图形
{
    public override void 绘制()
    {
        Console.WriteLine("绘制矩形◼");
    }
}
​
// 使用
图形[] 所有图形 = new 图形[] { new 圆形(), new 矩形() };
​
foreach (图形 图 in 所有图形)
{
    图.绘制();  // 自动调用正确的版本！
}
// 输出：
// 绘制圆形⚪
// 绘制矩形◼

方式2：抽象类和抽象方法

// 抽象类：不能实例化，只能被继承
public abstract class 支付方式
{
    // 抽象方法：没有实现，子类必须重写
    public abstract void 支付(double 金额);
}
​
public class 支付宝 : 支付方式
{
    public override void 支付(double 金额)
    {
        Console.WriteLine($"支付宝支付：{金额}元");
    }
}
​
public class 微信支付 : 支付方式
{
    public override void 支付(double 金额)
    {
        Console.WriteLine($"微信支付：{金额}元");
    }
}
​
// 使用
支付方式 支付工具 = new 支付宝();
支付工具.支付(100);  // 输出：支付宝支付：100元
​
支付工具 = new 微信支付();
支付工具.支付(200);  // 输出：微信支付：200元

五、实际应用场景

场景1：计算器程序

public abstract class 运算
{
    public abstract double 计算(double a, double b);
}
​
public class 加法 : 运算
{
    public override double 计算(double a, double b)
    {
        return a + b;
    }
}
​
public class 乘法 : 运算
{
    public override double 计算(double a, double b)
    {
        return a * b;
    }
}
​
// 使用多态的计算器
运算 当前运算 = new 加法();
double 结果 = 当前运算.计算(5, 3);  // 8
​
当前运算 = new 乘法();
结果 = 当前运算.计算(5, 3);        // 15

场景2：游戏角色系统

public abstract class 游戏角色
{
    public string 名字;
    public abstract void 攻击();
}
​
public class 战士 : 游戏角色
{
    public override void 攻击()
    {
        Console.WriteLine($"{名字}用剑砍击！");
    }
}
​
public class 法师 : 游戏角色
{
    public override void 攻击()
    {
        Console.WriteLine($"{名字}发射火球！");
    }
}
​
public class 弓箭手 : 游戏角色
{
    public override void 攻击()
    {
        Console.WriteLine($"{名字}射出弓箭！");
    }
}
​
// 在游戏中使用
游戏角色[] 队伍 = new 游戏角色[] 
{
    new 战士() { 名字 = "勇者" },
    new 法师() { 名字 = "魔法师" },
    new 弓箭手() { 名字 = "神射手" }
};
​
foreach (游戏角色 角色 in 队伍)
{
    角色.攻击();  // 每个角色用自己的方式攻击
}

六、多态的关键字总结

必须记住的关键字：





virtual：在父类中声明"这个方法可以被子类重写"



override：在子类中声明"我要重写父类的这个方法"



abstract：在抽象类中声明"这个方法子类必须实现"

七、多态的好处（对初学者来说）

1. 代码更灵活

// 可以轻松添加新的图形，不需要修改现有代码
public class 三角形 : 图形
{
    public override void 绘制()
    {
        Console.WriteLine("绘制三角形▲");
    }
}

// 现有的循环代码自动支持新图形！

2. 代码更简洁

// 没有多态（繁琐）
if (图形 is 圆形)
    ((圆形)图形).绘制圆形();
else if (图形 is 矩形)
    ((矩形)图形).绘制矩形();
// ... 更多判断

// 使用多态（简洁）
图形.绘制();  // 自动调用正确的方法

3. 易于维护

添加新功能时，只需要创建新类，不需要修改现有代码。

八、初学者实践建议

第一步：识别多态场景

问自己："这些对象有共同的行为，但具体实现不同吗？"





不同支付方式的"支付"行为



不同文件格式的"保存"行为



不同通知方式的"发送"行为

第二步：设计基类

public abstract class 通知方式
{
    public abstract void 发送(string 消息);
}

第三步：实现具体类

public class 邮件通知 : 通知方式
{
    public override void 发送(string 消息)
    {
        Console.WriteLine($"发送邮件：{消息}");
    }
}
​
public class 短信通知 : 通知方式
{
    public override void 发送(string 消息)
    {
        Console.WriteLine($"发送短信：{消息}");
    }
}

第四步：使用多态

通知方式 通知工具 = new 邮件通知();
通知工具.发送("你好！");  // 发送邮件：你好！
​
通知工具 = new 短信通知();
通知工具.发送("你好！");  // 发送短信：你好！

九、记住这个简单比喻

多态就像"遥控器"：





你按"开机"按钮（同一个命令）



电视 → 打开屏幕



空调 → 启动压缩机



音响 → 播放音乐

同一个按钮，不同设备有不同反应！

多态让你的代码更智能、更灵活、更易于扩展！