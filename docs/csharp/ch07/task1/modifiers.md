---
# 这部分是关键！侧边栏显示名由这里决定
title: 子任务二 修饰符  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 子任务二 修饰符  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## 一、基本概念

### 1.程序集是什么
每个项目（Project）编译后生成的可执行文件或库文件（后缀.exe、.dll），通俗理解：相当于每个 “子工程” 编译后产出的一个 “成品文件”。
```csharp
解决方案
↓
项目
↓
程序集(编译生成)
```
## 二、访问修饰符

### 1.访问修饰符是什么

访问修饰符是控制顶级类型（如class、struct、interface、enum）和类成员（如类、字段、属性、方法、构造函数等）的可访问性的关键字。

### 2.访问修饰符的分类
|修饰符|	顶级类型（如顶级 class/struct）|	类成员（字段 / 方法 / 嵌套类等）	|备注|
|---|---|---|---|
|public|	✅ 支持|	✅ 支持	|无限制，让顶级类型对所有程序集可见|
|private|	❌ 不支持|	✅ 支持	|表示类是内部的，只有当前项目内可访问;类成员默认就是private|
|protected|	❌ 不支持|	✅ 支持	|protected是 “子类可见”，顶级类型无父类，因此不适用|
|internal|	✅ 支持（默认）|	✅ 支持	|让顶级类型仅对当前程序集可见|
|protectedinternal| 	❌ 不支持| 	✅ 支持	|组合修饰符仅适用于类成员|
|private protected	| ❌ 不支持	| ✅ 支持	|组合修饰符仅适用于类成员（C# 7.2+）|


### 3.访问修饰符的语法

```csharp
[访问修饰符] class 类名
{
    // 声明字段
    [访问修饰符]  数据类型 字段名;
}
```
### 示例1:顶级和成员类修饰符

```csharp
public class Person
{
  // 字段
  private string name;
  private int age;

  // 属性
  public string Name { get; set; }
  public int Age { get; set; }

  // 构造函数
  public Person()
  {
      Name = "未知";
      Age = 0;
      Console.WriteLine("一个人诞生了");
  }

  //方法，打印信息
   public void DisplayInfo()
  {
      Console.WriteLine($"姓名: {Name}");
      Console.WriteLine($"年龄: {Age}");
  }
}
```
### 示例2：顶级类和嵌套类修饰符

```csharp
class Bird
{
    public string birdName;
    public int birdAge;
}

class Program
{
    //private是嵌套类修饰符，不能用于顶级
    private class Person
    {
        public string personName;
        public int personAge;
    }
    
    static void Main(string[] args)
    {
        Person p1 = new Person();
        p1.personName = "张三";
        p1.personAge = 10;
        
        Bird bird1 = new Bird();
    }
}
```

### **示例3: public修饰符的用法**


#### Lesson1（需引入Lesson2）

```csharp
using Lesson2;

class Program
{
    static void Main(string[] args)
    {
        Bird bird2 = new Bird();
    }
}
```

#### Lesson2

```csharp
public class Bird
{
    public string _birdName;
    public int _birdAge;
}

class Program
{
    static void Main(string[] args)
    {
        Bird bird1 = new Bird();
    }
}
```

## 二、特性修饰符

## 三、行为修饰符

## 四、字段约束

## 五、特殊场景