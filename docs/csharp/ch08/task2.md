---
# 这部分是关键！侧边栏显示名由这里决定
title: 二、类的继承 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 二、类的继承  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---
对于C#初学者来说，理解类的继承可以从以下几个简单直观的角度入手：

## **一、用生活中的例子理解继承**

### **1. 父子关系类比**

```
// 父亲（基类）
public class 父亲
{
    public string 姓氏 = "张";
    public void 走路() { }
    public void 说话() { }
}

// 儿子（派生类）
public class 儿子 : 父亲
{
    // 自动拥有父亲的姓氏、走路、说话能力
    public void 玩游戏() { } // 自己特有的能力
}
```

### **2. 交通工具层次**

```
// 基类：所有交通工具的共性
public class 交通工具
{
    public string 品牌;
    public int 速度;
    
    public void 启动() 
    {
        Console.WriteLine("交通工具启动");
    }
}

// 派生类：具体的交通工具
public class 汽车 : 交通工具
{
    public int 轮子数量 = 4;
    
    public void 鸣笛()
    {
        Console.WriteLine("滴滴！");
    }
}

public class 自行车 : 交通工具
{
    public void 蹬踏板()
    {
        Console.WriteLine("用力蹬踏板");
    }
}
```

## **二、继承的核心要点（简单版）**

### **1. 什么能被继承？**

- ✅ **能继承**：公共(public)和受保护(protected)的方法、属性、字段
- ❌ **不能继承**：私有(private)成员、构造函数

### **2. 基本语法**

```
// 子类 : 父类
public class 学生 : 人
{
    // 学生类自动拥有"人"类的所有公共和受保护成员
    public string 学号; // 自己特有的属性
}
```

## **三、实际代码演示**

### **示例1：简单的继承**

```
// 基类
public class 动物
{
    public string 名字;
    
    public void 吃()
    {
        Console.WriteLine(名字 + "在吃东西");
    }
    
    public void 睡()
    {
        Console.WriteLine(名字 + "在睡觉");
    }
}

// 派生类
public class 狗 : 动物
{
    public void 叫()
    {
        Console.WriteLine("汪汪！");
    }
}

// 使用
class Program
{
    static void Main()
    {
        狗 我的狗 = new 狗();
        我的狗.名字 = "小白";    // 继承自动物类
        我的狗.吃();           // 继承自动物类
        我的狗.叫();           // 狗类自己的方法
    }
}
```

### **示例2：添加特有功能**

```
public class 图形
{
    public string 颜色;
    
    public virtual void 绘制()  // virtual允许子类重写
    {
        Console.WriteLine("绘制图形");
    }
}

public class 圆形 : 图形
{
    public double 半径;
    
    public override void 绘制()  // 重写父类方法
    {
        Console.WriteLine("绘制圆形，半径：" + 半径);
    }
    
    public double 计算面积()
    {
        return 3.14 * 半径 * 半径;  // 圆形特有的方法
    }
}
```

## **四、理解继承的好处**

### **1. 代码重用**

不用重复写相同的代码：

```
// 没有继承（重复代码）
class 学生
{
    public string 姓名;
    public int 年龄;
    public void 吃饭() { }
}

class 老师
{
    public string 姓名;      // 重复！
    public int 年龄;        // 重复！
    public void 吃饭() { }  // 重复！
}

// 有继承（消除重复）
class 人
{
    public string 姓名;
    public int 年龄;
    public void 吃饭() { }
}

class 学生 : 人 { }  // 自动拥有姓名、年龄、吃饭()
class 老师 : 人 { }  // 自动拥有姓名、年龄、吃饭()
```

### **2. 扩展功能**

在继承的基础上添加新功能：

```
class 人
{
    public string 姓名;
    public void 基本功能() { }
}

class 程序员 : 人
{
    public void 写代码()    // 扩展新功能
    {
        Console.WriteLine(姓名 + "在写代码");
    }
}
```

## **五、初学者常见问题解答**

### **Q: 什么时候应该使用继承？**

A: 当两个类之间有"是一种"的关系时：

- 狗 **是一种** 动物 ✅
- 汽车 **是一种** 交通工具 ✅
- 学生 **是一种** 人 ✅

### **Q: 继承后能访问父类的私有成员吗？**

A: 不能！就像你不能查看父母的私人日记一样：

```
class 父亲
{
    private string 银行卡密码;  // 子类无法访问
    public string 姓氏;         // 子类可以访问
}
```

## **六、学习建议**

1. **从简单例子开始**：先用生活中的例子理解概念
2. **多动手实践**：自己写一些简单的继承关系
3. **循序渐进**：先掌握基本继承，再学习重写、多态等高级特性
4. **思考设计**：在设计类时思考"这个类是不是那种类的特殊类型？"

记住：**继承的核心思想就是"子承父业"** - 子类自动获得父类的特征和能力，同时还可以发展自己的特长。