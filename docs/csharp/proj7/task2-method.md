---
title: 任务二 方法
description: 算法与程序设计《C#》项目七 面向对象基础 任务二 方法知识点总结。介绍方法的概念、方法声明语法、方法命名规范、四种参数类型（值参数/引用参数ref/输出参数out/数组参数params）、static关键字（静态字段/静态属性/静态方法）、静态成员与实例成员的区别，含完整代码示例和运行结果。
keywords: [C#, 方法, 方法声明, 参数, 值参数, ref, 引用参数, out, 输出参数, params, 数组参数, static, 静态成员, 实例成员, 对口升学]
sidebar_label: 任务二 方法
sidebar_position: 2
slug: /csharp/proj7/task2-method
tags: [C#, 项目七, 任务二, 对口升学]
---

## 知识点

### 子任务一 方法的声明

### 1.什么是方法？

方法是C#中的代码块，用于执行特定的操作或功能。它们是类的成员，用于定义类的行为。例如，人是一个类，那么人的说话行为、唱歌行为、吃饭行为都是一个方法。

方法的作用：
1. 方法是类的行为，描述了类的操作和行为。
2. 方法用于执行代码，包含一组语句，可以执行各种任务。

### 2.方法的声明语法是什么？

```csharp
访问修饰符 返回类型 方法名(参数列表)
{
    // 方法主体
    // 可选：return 返回值; （只适用于非void返回类型的方法）
}
```

说明：
1. **访问修饰符**：指定方法的可见性（public、private、protected等）。
2. **返回类型**：指定方法执行后返回的数据类型。如果方法不返回值，返回类型为 `void`。
3. **方法名**：按照帕斯卡命名法，首字母大写。
4. **参数列表**：方法接受的参数，用于向方法传递数据，可以为空。
5. **方法体**：包含方法的操作语句。

### 3.方法声明示例

```csharp
public int Add(int a, int b)
{
    // 方法体：计算两个整数的和
    return a + b;
}
```

`Add` 方法接受两个整数参数 `a` 和 `b`，计算它们的和，并返回整数类型的结果。

---

### 子任务二 方法的参数

### 4.方法的参数有哪些类型？

调用方法时可以给方法传递值，传给方法的值叫作**实参**，在方法内部接收实参的变量叫作**形参**。C#支持四种类型的方法参数：

| 参数类型 | 关键字 | 说明 |
|---|---|---|
| 值参数 | 无 | 按值传递，形参不影响原始值 |
| 引用参数 | ref | 按引用传递，形参的修改反映到原始变量 |
| 输出参数 | out | 用于返回多个值，调用前不需要赋值 |
| 数组参数 | params | 参数数目可变，适用于多个相同类型参数 |

### 5.值参数的特点是什么？

值参数是指在声明时不加修饰的参数，表明实参与形参之间按值传递。调用方法时会为形参分配存储单元，将实参的值复制到形参中，形参的值**不会影响原始值**。

### 6.ref引用参数的特点是什么？

`ref` 关键字使参数按引用传递。在方法中对参数所做的任何更改都将反映在原始变量中。

注意事项：
1. `ref` 关键字只对跟在它后面的参数有效。
2. 实参和形参数据类型必须完全匹配。
3. 实参只能是变量，不能是常量或表达式。
4. `ref` 参数在调用之前**必须进行赋值**。

### 7.out输出参数的特点是什么？

`out` 关键字用于定义输出参数，返回多个值。参数通过引用传递，初始值不重要，不用初始化即可使用。

注意事项：
1. `out` 关键字只对跟在它后面的参数有效。
2. 实参和形参数据类型必须完全匹配。
3. 实参只能是变量，不能是常量或表达式。
4. `out` 参数在调用前**可以不用赋值**。
5. 使用 `out` 参数可以同时返回多个值。

### 8.params数组参数的特点是什么？

`params` 参数传递参数的值给方法，不影响原始值，用于指定参数数目可变时的方法参数，适用于多个相同类型的参数。

注意事项：
1. 只能在**一维数组**上使用 `params` 参数。
2. 不允许使用 `ref` 或 `out` 修饰 `params` 参数。
3. 一个方法只能有**一个** `params` 参数。

### 9.四种参数类型完整示例

```csharp
class Program
{
    // 值参数
    private int Add(int x, int y)
    {
        x = x + y;
        return x;
    }

    // ref引用参数
    private int Add(ref int x, int y)
    {
        x = x + y;
        return x;
    }

    // out输出参数
    private int Add(int x, int y, out int z)
    {
        z = x + y;
        return z;
    }

    // params数组参数
    private int Add(params int[] x)
    {
        int result = 0;
        for (int i = 0; i < x.Length; i++)
        {
            result += x[i];
        }
        return result;
    }

    static void Main(string[] args)
    {
        Program pro = new Program();
        int x = 10;
        int y = 20;
        int z;

        Console.WriteLine("值参数: " + pro.Add(x, y));
        Console.WriteLine("值参数实参x的值: " + x);
        Console.WriteLine("ref参数: " + pro.Add(ref x, y));
        Console.WriteLine("ref参数实参x的值: " + x);
        Console.WriteLine("out参数: " + pro.Add(x, y, out z));
        Console.WriteLine("params参数: " + pro.Add(10, 20, 30, 40, 50));
        Console.ReadLine();
    }
}
```

**运行结果：**

```
值参数: 30
值参数实参x的值: 10
ref参数: 30
ref参数实参x的值: 30
out参数: 50
params参数: 150
```

> 注意：值参数调用后实参x仍为10（不变），ref参数调用后实参x变为30（被修改）。

---

### 子任务三 static关键字

### 10.静态成员有哪些类型？

| 静态成员类型 | 说明 | 声明示例 |
|---|---|---|
| 静态字段 | 类级别的字段，在所有实例之间共享相同的值 | `public static int myStaticField;` |
| 静态属性 | 获取或设置类级别的数据，封装静态字段 | `public static int MyStaticProperty { get; set; }` |
| 静态方法 | 属于类而不是实例的方法，不对特定实例操作 | `public static void MyStaticMethod();` |

### 11.静态成员与实例成员的区别是什么？

| 特性 | 静态成员 | 实例成员 |
|---|---|---|
| 归属 | 属于类 | 属于类的实例（对象） |
| 数量 | 整个应用程序只有一个实例 | 每个对象有自己的副本 |
| 访问方式 | 通过类名访问 | 通过对象实例访问 |
| 用途 | 表示全局或共享数据 | 表示对象特定的数据 |

### 12.静态成员使用示例

```csharp
public class MyClass
{
    public static int MyStaticField;    // 静态字段
    private static int myStaticProperty;

    // 静态属性
    public static int MyStaticProperty
    {
        get { return myStaticProperty; }
        set { myStaticProperty = value; }
    }

    // 静态方法
    public static void MyStaticMethod()
    {
        Console.WriteLine("This is a static method.");
    }
}
```

> 注意：静态成员通过类名直接访问，如 `MyClass.MyStaticField`，不需要创建对象实例。
