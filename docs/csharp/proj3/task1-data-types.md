---
title: 任务一 数据类型
description: 算法与程序设计《C#》项目三 C#的语言基础 任务一 数据类型知识点总结。介绍C#值类型（整数类型8种、实数类型3种、字符类型、布尔类型、结构类型、枚举类型）和引用类型（object、string），以及类型转换（隐式转换、显式转换、Parse方法、Convert类、装箱与拆箱）。
keywords: [C#, 数据类型, 值类型, 引用类型, 整数类型, sbyte, byte, short, int, long, float, double, decimal, char, bool, 结构类型, struct, 枚举类型, enum, object, string, 类型转换, 隐式转换, 显式转换, Parse, Convert, 装箱, 拆箱, 对口升学]
sidebar_label: 任务一 数据类型
sidebar_position: 1
slug: /csharp/proj3/task1-data-types
tags: [C#, 项目三, 任务一, 对口升学]
---

## 知识点

### 1.C#中的数据类型如何分类？

C#中的数据类型分为引用类型和值类型，其划分依据是数据类型中的存储内容。值类型是直接存储值，引用类型存储的是对值的引用。

```
C# 数据类型
├── 值类型
│   ├── 简单类型
│   │   ├── 整数类型
│   │   ├── 实数类型
│   │   ├── 字符类型
│   │   └── 布尔类型
│   └── 复杂类型
│       ├── 结构类型
│       └── 枚举类型
└── 引用类型
    ├── 类（对象类型、字符串类型）
    ├── 接口
    ├── 委托
    └── 数组
```

### 子任务一 值类型

### 2.整数类型有哪8种？

| 类型标识符 | 说明 | 占用位数 | 取值范围 |
|---|---|---|---|
| sbyte | 带符号字节型 | 8 | `-2^7` ~ `2^7-1` |
| byte | 无符号字节型 | 8 | `0` ~ `2^8-1` |
| short | 带符号短型 | 16 | `-2^15` ~ `2^15-1` |
| ushort | 无符号短型 | 16 | `0` ~ `2^16-1` |
| int | 带符号整型 | 32 | `-2^31` ~ `2^31-1` |
| uint | 无符号整型 | 32 | `0` ~ `2^32-1` |
| long | 带符号长整型 | 64 | `-2^63` ~ `2^63-1` |
| ulong | 无符号长整型 | 64 | `0` ~ `2^64-1` |

> 所占的二进制位数越多，表示的数值的取值范围越大。

### 3.实数类型有哪3种？

| 类型标识符 | 说明 | 占用位数 | 精度 | 取值范围 |
|---|---|---|---|---|
| float | 单精度浮点数 | 32 | 6~7位数字 | `±(1.5×10^-45 ~ 3.4×10^38)` |
| double | 双精度浮点数 | 64 | 15~16位数字 | `±(5.0×10^-324 ~ 1.7×10^308)` |
| decimal | 固定精度的浮点数 | 128 | 28~29位数字 | `±(1.0×10^-28 ~ 7.9×10^28)` |

- 一般情况下，包含小数点的数值默认为double类型
- 数值后添加 `f` 或 `F` 强制指定为float类型
- 数值后添加 `m` 或 `M` 强制指定为decimal类型

```csharp
float theMySum = 9.27f;
decimal myMoney = 1.12m;
```

> decimal类型非常适合金融和货币方面的计算。

### 4.字符类型是什么？

字符类型主要用来存储单个字符，采用Unicode字符集表示形式，占用16位（两字节）内存空间。标识符是char。

```csharp
char ch1 = 'a';
```

> 注意：`'a'` 表示一个字符，`"a"` 表示一个字符串（虽然只有一个字符，但由于使用双引号，所以是字符串而不是字符）。

### 5.布尔类型是什么？

布尔类型数据用于表示逻辑真和逻辑假，标识符是bool。只有两个值：`true`（真）和 `false`（假）。

> 注意：在C#中，bool类型不能直接转换为int类型。例如 `int a = (2 < 3)` 在C#中是不允许的。

### 6.简单类型对应的.NET Framework系统类型别名是什么？

| C#类型 | .NET Framework类型 | C#类型 | .NET Framework类型 |
|---|---|---|---|
| bool | System.Boolean | uint | System.UInt32 |
| byte | System.Byte | long | System.Int64 |
| sbyte | System.SByte | ulong | System.UInt64 |
| decimal | System.Decimal | object | System.Object |
| double | System.Double | short | System.Int16 |
| float | System.Single | ushort | System.UInt16 |
| int | System.Int32 | string | System.String |

### 7.什么是结构类型？如何声明和使用？

结构类型是一种自定义类型，可以存储多个不同类型的数据。它是值类型，变量的值保存在栈内存区域。

**声明格式：**

```csharp
struct 结构类型名称
{
    [字段访问修饰符] 数据类型 字段1;
    [字段访问修饰符] 数据类型 字段2;
    ...
    [字段访问修饰符] 数据类型 字段n;
}
```

**示例：**

```csharp
struct Student
{
    public int xh;       //学号
    public string xm;    //姓名
    public char xb;      //性别
    public int nl;       //年龄
    public double cj;    //成绩
}
```

**定义变量：** `Student stu1;`

**访问字段：** `stu1.xh`（结构变量.字段名）

**【例3-1】结构类型应用：**

```csharp
namespace proj2_1
{
    class Program
    {
        struct student    //结构类型的定义应放在Main函数的外面
        {
            public int xh;       //学号
            public string xm;    //姓名
            public char xb;      //性别
            public int nl;       //年龄
            public double cj;    //成绩
        }
        static void Main(string[] args)
        {
            student stu1;
            stu1.xh = 202200101;
            stu1.xm = "李雷";
            stu1.xb = '男';
            stu1.nl = 17;
            stu1.cj = 375.5;
            Console.WriteLine("学号为：{0} 姓名为：{1} 性别为：{2} 年龄为：{3} 成绩为：{4}",
                stu1.xh, stu1.xm, stu1.xb, stu1.nl, stu1.cj);
            Console.ReadLine();
        }
    }
}
```

运行结果：`202200101 姓名为：李雷 性别为：男 年龄为：17 成绩为：375.5`

### 8.什么是枚举类型？如何声明和使用？

枚举类型是一种自定义数据类型，允许用符号代表数据。使用enum关键字声明。

**声明格式：**

```csharp
enum 枚举名
{
    枚举成员1,
    枚举成员2,
    ...
}
```

**示例：** `enum season { spring, summer, autumn, winter }`

> 默认情况下，第1个枚举成员的值取0，后面的每一个按1递增。

**定义变量：** `season jj1;`

**赋值：** `jj1 = season.spring;`

**【例3-2】枚举类型应用：**

```csharp
namespace proj2_2
{
    class Program
    {
        enum season    //枚举类型的定义应放在Main函数的外面
        {
            spring,
            summer,
            autumn,
            winter
        }
        static void Main(string[] args)
        {
            season cj1, xj2, qj3, dj4;
            cj1 = season.spring;
            xj2 = season.summer;
            qj3 = season.autumn;
            dj4 = season.winter;
            Console.WriteLine("春季为：{0}  夏季为：{1}  秋季为：{2}  冬季为：{3}",
                cj1, xj2, qj3, dj4);
            Console.ReadLine();
        }
    }
}
```

运行结果：`春季为: spring  夏季为: summer  秋季为: autumn  冬季为: winter`

### 子任务二 引用类型

### 9.object类型是什么？

object是C#中所有类型（包括所有的值类型和引用类型）的基类，C#中的所有类型都直接或间接地从object类中继承而来。对于一个object类型的变量可以赋任何类型的值。

```csharp
int x = 100;
object obj1;        //定义obj1对象
obj1 = x;
object obj2 = "China";  //定义obj2对象并赋初值
```

> object关键字是System.Object类的别名。

### 10.string类型是什么？

string类型表示一个Unicode字符序列，专门用于对字符串进行操作。string是System.String类的别名，在C#中string和String类型是等同的。

### 子任务三 值类型与引用类型的区别

### 11.值类型与引用类型有什么区别？

- **值类型**：直接存储其值，在栈中操作，编译时分配内存空间，占用预定长的字节数，访问速度快
- **引用类型**：存储对值的引用，在堆中分配存储单元，程序运行中动态分配内存，内存开销大、访问速度稍慢

> 引用类型类似于银行账户的钱在银行里，住户手中持有存折，要想取钱，需要凭借存折在银行支取。

### 子任务四 类型转换

### 12.什么是隐式转换？

隐式转换是系统默认的不需要加以声明就可以进行的转换。编译器不需要对转换进行详细的检查就能安全地执行转换。

**规则：** 任何一个源类型A，只要取值范围包含在目标类型B中，就可以隐式转化为类型B。

**C#中支持的隐式转换（表3-4）：**

| 源类型 | 目标类型 |
|---|---|
| sbyte | short、int、long、float、double、decimal |
| byte | short、ushort、int、uint、long、ulong、float、double、decimal |
| short | int、long、float、double、decimal |
| ushort | int、uint、long、ulong、float、double、decimal |
| int | long、float、double、decimal |
| uint | long、ulong、float、double、decimal |
| long | float、double、decimal |
| ulong | float、double、decimal |
| char | ushort、int、uint、long、ulong、float、double、decimal |
| float | double |

```csharp
int i = 5;
long j = i;        //隐式转换
double d1 = 12.5f; //隐式转换
```

### 13.什么是显式转换（强制转换）？

显式转换需要用户明确地指定要转换的类型。

**格式：** `(类型标识符)表达式`

```csharp
(int)1.23;     //把double类型的1.23转换成int类型，结果为1
(int)2.58m;    //结果为2
```

> 注意：从float、double、decimal到整数的转换将通过舍入得到最接近的整型值，如果超出目标类型范围则出现转换异常。例如 `(int)2e10f` 将产生溢出错误。

### 14.Parse方法如何使用？

Parse方法可以将特定格式的字符串转换为数值型。

**格式：** `数值类型名称.Parse(字符串表达式)`

```csharp
int k = int.Parse("200");
float x = float.Parse("200.0");
```

> 注意：`int.Parse("200.0")` 会报错，因为"200.0"的格式不符合int类型。

### 15.Convert类的方法如何使用？

Convert类提供了一些方法，将一种基本数据类型转换为另一种基本数据类型。

```csharp
int k;
k = Convert.ToInt32("97");
char c1 = Convert.ToChar(k);
float f = Convert.ToSingle(k);
```

> Convert类支持的转换类型几乎涵盖C#中所有的基础类型：Boolean、Char、SByte、Byte、Int16、Int32、Int64、UInt16、UInt32、UInt64、Single、Double、Decimal、DateTime和String。

### 16.什么是装箱和拆箱？

**（1）装箱转换：** 将一个值类型的数据隐式地转换成一个对象类型的数据。就是创建一个object类型的实例，并把该值类型的值复制给这个object实例。

```csharp
int i = 10;
object obj = i;        //装箱（隐式）
object obj2 = (object)i; //装箱（显式）
```

**（2）拆箱转换：** 将一个引用类型的数据显式地转换成一个值类型数据。

```csharp
int i = 10;
object obj = i;        //装箱
int j = (int)obj;      //拆箱（必须显式转换）
```

> 拆箱转换必须执行显式转换，这是它与装箱转换的不同之处，并且在执行拆箱操作时，要符合类型一致的原则。
