---
# 这部分是关键！侧边栏显示名由这里决定
title: 一、类的封装  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 一、类的封装  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---
对于C#初学者，理解类的封装可以从以下几个简单直观的角度入手：

## **一、用生活中的例子理解封装**

### **1. 电视机的比喻**

```
// 电视机内部很复杂，但对外只提供简单接口
public class 电视机
{
    private 复杂的电路板;  // 隐藏内部细节
    private 显像管技术;    // 用户不需要知道
    
    // 对外提供的简单接口
    public void 开机() { /* 内部复杂操作 */ }
    public void 换台(int 频道) { /* 内部复杂操作 */ }
    public void 调节音量(int 大小) { /* 内部复杂操作 */ }
}
```

### **2. 银行账户的比喻**

```
public class 银行账户
{
    private decimal 余额;          // 私有的，不能直接查看
    private string 账户密码;       // 完全隐藏
    
    // 通过公共方法安全地访问
    public decimal 查询余额()
    {
        return 余额;
    }
    
    public bool 取款(decimal 金额)
    {
        if(金额 <= 余额)
        {
            余额 -= 金额;
            return true;
        }
        return false;
    }
}
```

## **二、封装的核心思想**

### **1. 隐藏实现细节**

- 把复杂的内部实现藏起来
- 只暴露简单的使用接口

### **2. 保护数据安全**

- 防止外部代码随意修改重要数据
- 通过方法控制数据的访问和修改

## **三、从字段到属性的演进**

### **阶段1：直接使用字段（不好）**

```
public class 学生
{
    public int 年龄;  // 危险！外部可以随意修改
}

// 使用
学生 小明 = new 学生();
小明.年龄 = -10;  // 不合逻辑的年龄！但没有限制
```

### **阶段2：使用方法控制（较好）**

```
public class 学生
{
    private int _年龄;  // 私有字段
    
    public void 设置年龄(int 新年龄)
    {
        if(新年龄 > 0 && 新年龄 < 150)
        {
            _年龄 = 新年龄;
        }
    }
    
    public int 获取年龄()
    {
        return _年龄;
    }
}
```

### **阶段3：使用属性（最好）**

```
public class 学生
{
    private int _年龄;
    
    public int 年龄
    {
        get { return _年龄; }
        set 
        { 
            if(value > 0 && value < 150)  // 数据验证
            {
                _年龄 = value; 
            }
        }
    }
}

// 使用起来就像字段一样简单
学生 小明 = new 学生();
小明.年龄 = 18;    // 自动调用set访问器
Console.WriteLine(小明.年龄);  // 自动调用get访问器
```

## **四、实际代码演示**

### **示例1：简单的温度控制**

```
public class 温度计
{
    private double _当前温度;
    
    public double 温度
    {
        get { return _当前温度; }
        set 
        {
            // 封装验证逻辑
            if(value >= -273.15)  // 绝对零度
            {
                _当前温度 = value;
            }
        }
    }
    
    public string 温度描述
    {
        get
        {
            if(_当前温度 < 0) return "寒冷";
            if(_当前温度 < 20) return "凉爽";
            if(_当前温度 < 30) return "温暖";
            return "炎热";
        }
    }
}
```

### **示例2：用户登录系统**

```
public class 用户账户
{
    private string _用户名;
    private string _密码;
    private int _登录尝试次数;
    
    public string 用户名
    {
        get { return _用户名; }
        set { _用户名 = value?.Trim(); }  // 自动去除空格
    }
    
    // 密码只能设置，不能读取
    public string 密码
    {
        set 
        { 
            if(value.Length >= 6)
            {
                _密码 = value;
            }
        }
    }
    
    public bool 登录(string 输入密码)
    {
        if(_登录尝试次数 >= 3)
        {
            Console.WriteLine("账户已锁定！");
            return false;
        }
        
        if(输入密码 == _密码)
        {
            _登录尝试次数 = 0;
            return true;
        }
        else
        {
            _登录尝试次数++;
            return false;
        }
    }
}
```

## **五、封装的好处（对初学者来说）**

### **1. 安全性**

```
// 没有封装 - 危险！
学生.年龄 = -100;  // 可以设置非法值

// 有封装 - 安全！
学生.年龄 = -100;  // 会被属性拒绝，保持原值
```

### **2. 易于使用**

```
// 使用者不需要知道内部实现
温度计.温度 = 25;        // 简单！
string 描述 = 温度计.温度描述;  // 自动计算！
```

### **3. 易于修改**

```
public class 学生
{
    private DateTime _生日;  // 内部改用生日存储
    
    public int 年龄
    {
        get 
        { 
            // 计算年龄的逻辑可以随时修改
            return DateTime.Now.Year - _生日.Year;
        }
    }
}
// 外部代码完全不需要修改！
```

## **六、初学者实践建议**

### **第一步：识别需要封装的数据**

```
// 问自己：这些数据需要保护吗？
- 银行账户余额
- 用户密码
- 学生成绩
- 产品库存数量
```

### **第二步：设计属性**

```
public class 产品
{
    private int _库存;
    private decimal _价格;
    
    public int 库存
    {
        get { return _库存; }
        set 
        { 
            if(value >= 0) 
                _库存 = value; 
        }
    }
    
    public decimal 价格
    {
        get { return _价格; }
        set 
        { 
            if(value > 0) 
                _价格 = value; 
        }
    }
}
```

### **第三步：添加业务方法**

```
public class 产品
{
    // ... 属性 ...
    
    public bool 出售(int 数量)
    {
        if(数量 <= _库存)
        {
            _库存 -= 数量;
            return true;
        }
        return false;
    }
}
```

## **七、记住这个简单原则**

**"把数据藏起来，把方法露出来"**

- 🔒 **私有字段**：`private string _密码;`
- 🔓 **公共属性**：`public string 姓名 { get; set; }`
- 🎯 **业务方法**：`public bool 验证密码()`

就像ATM机：你看不到里面的现金（私有字段），但可以通过按钮（公共方法）安全地取钱。

封装让你的代码更安全、更健壮、更易于维护！