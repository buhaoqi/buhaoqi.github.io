---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 整数类型  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 整数类型  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

# 1月13日 星期二 

## 一、如何掌握字符类型

1. 概念：单字符、UNICODE字符集(对应整数值)、16位、
2. 定义

```c#
char c1 = 'A';
char c2 = '中';
char c3 = '@';
char c4 = '\u4e2d';
char c5 = (char)65;
char c6 = "Hello"[0];
char c7 = '\t';
char c8 = '\n';
char c9 = '\\';
char c10 = '\0';// 空字符
char c11 = '\'';
```

3. 用途：
   - 表示单字符
   - 参与运算
   - 比较大小
4. 应用场景：
   - 判断字母大小写
   - 判断是不是0-9之间的数字

## 二如何掌握布尔类型

1.定义：用于表示逻辑真或假的数据类型。

2.语法

```c#
bool b1 = true;
bool b2 = false;
System.Boolean b3 = !true;
```

3.用法

- 分支结构：条件判断
- 循环结构：作为开关使用
- 与逻辑运算符搭配使用

```c#
true && true
true && false
true || false
true || true
false || false
!true
```

4.注意事项

- 布尔类型不允许直接转换为int类型

```c#
int i1 = (2 < 3);// 错误
int i2 = (2 < 3) ? 1 : 0;
```

- 注意逻辑运算符的短路现象。

```c#
int a = 1;
false && (10 > 9) ? a = 2 : a =0;
true || (10 > 9) ? a = 2 : a =0;
```



## 三、数据类型的别名

所有的简单类型均为Sytem类的别名，特殊的名字

float => Sytem.Single

## 四、结构类型

1. 定义：数据包(多个 + 不同)
2. 语法（声明+使用）
   - 定义位置：命名空间、类中嵌套
   - 使用位置：Main()方法

## 五、枚举类型

一、定义

- 自定义数据类型（可以使用枚举定义变量）
- 允许使用符号表示数据
  - 符号：就是一个具有特定含义的标识符。
  - 数据：必须是整数常量。
- 枚举指一个变量具有一组特定的常量值。
  - 通过枚举可以给常量值起名字
  - 并且可以将常量值一一列举

```c#
//声明一个用户角色(UserRole)的枚举类型
enum UserRole
{
  Guest = 0, // 游客
  User = 1, // 普通会员
  VipUser = 2 // VIP会员
}
//使用枚举
class Program
{
  static void Main()
  {
    //声明枚举变量（枚举是自定义数据类型，就像int那样使用）
    UserRole ur1;
    //赋值
    ur1 = UserRole.User;
    //使用
    Console.WriteLine($"欢迎张三 | {ur1}")
    //比较
    if(ur1 == UserRole.User){
      Console.WriteLine("你是普通用户")
    }
    else if(ur1 == UserRole.VipUser)
    {
      Console.WriteLine("你是VIP用户")
    }
    else {
      Console.WriteLine("你是游客")
    }
  }
}
```

二、语法

定义枚举

```c#
enum 枚举名字
{
  枚举成员1 [= 0],
  枚举成员2 [= 1],
  枚举成员3 [= 2]
}
```

声明枚举变量并赋值

```c#
枚举名字 枚举变量名;

枚举变量名 = 枚举名.常量名;
```

三、用法

1. 做比较
2. 转换

四、注意事项

1. 枚举成员可以赋值，也可以不赋值
2. 如果赋值，必须是整数升序，可以跳跃

## 六、object类型

一、定义：object是所有类型的基类。

如何理解：object可以存储任何类型的值。

二、object是谁的别名

System.Object的别名

三、装箱是什么

装箱是将值类型隐式转换为object类型

```c#
int i = 10;
object o = i;
```

四、拆箱是什么

拆箱是将引用类型显式转换为值类型

```c#
int a = (int)obj;
```

## 七、string类型

- string是一个unicode字符序列

- 如何理解string类型：1.存储字符序列 2.操作字符序列

- string是引用类型。

  - 引用的值存在内存堆中

  - 引用的地址存在内存栈中

```c#
string  str1 = "aaa";
string str2 = str1;
Console.WriteLine(str1); //
```

- 字符串具有不可变性：一旦声明就不能修改

```c#
string str1 = "aaa";
str1 = str1 + "bbb";// 不是修改，而是创建新字符串
```

- 字符串的使用方式跟值类型相似，
  - 声明、赋值、读、写

## 八、类型转换

1. 类型转换是什么：从一个中类型转换为另一种类型
2. 转换的方式： 
   - 隐式：所有安全的转换都是隐式。大装小
     - 特点：安全、自动
   - 显式：括号强转、数据类型.Parse()方法、Convert.数据类型()
     - 特点：有风险、手动
3. 整数类型的隐式转换规则: byte > short > int > long 
4. 实数类型的隐式转换规则：float > double 
5. 整合：byte > short > int > long > float > double 

```c#
double d1 = 123.656; // 小类型装大类型
int i1 = (int)d1;// 123(丢弃小数部分)
int i2 = 100;
byte b1 = (byte)i2;
int i3 = -100;
uint ui1 = (uint)i3; //有符号和无符号之间的转换
```

6.常见的隐式数据类型转换

- 整数类型之间
- 整数类型 - 浮点数类型
- 字符 - 整数

```c#
char c1 = 'A';
int i1 = c1;
```

7.什么时候不能隐式转换

- 小装大
- 布尔值不能与任何数据类型转换(隐式)
- decimal和double、float之间不能转换

## 括号强转

一、语法

```c#
(类型标识符)表达式
```

- 类型标识符：就是转换的目标类型
- 表达式：可以是变量表达式、常量表达式

```c#
//变量表达式
int num1 = 100;
double d1 = (double)num1;

//常量表达式
double d2 = (double)100;
//常见转换：浮点数转整数
double d3 = 123.456;
int num2 = (int)d3; // 123
//常见转换：双精度 转 单精度
float f1 = (float)d3; //123.456f;
//常见转换: 字符转换  字符 > 整数
char c = 'A';
int num3 = (int)c; 
//常见转换：整数 > 字符
int num4 = 66;
char c2 = (char)num4;
//不允许字符串转换
string str1 = (string)123; // 报错
int num1 = (int)"123"; // 报错

if(1){
  
}
```

总结：扩号强转总是发生在数值之间。

##  Parse()方法

一、用途：将字符串类型转换为其他基本数据类型。

二、语法格式

```c#
目标数据类型.Parse(字符串);
```

三、什么时候可以转

```c#
//整数字符串
int  i1 = int.Parse("123"); // 123
int  i1 = int.Parse("-123"); // -123
//浮点数字符串
double d1 = double.Parse("123.456");// 123.456
double d1 = double.Parse("-123.456"); // -123.456
//布尔字符串
bool b1 = bool.Parse("true"); // true
bool b1 = bool.Parse("-true");// 错误：FormatException
//单字符字符串
char c1 = char.Parse("A");

```

四、什么时候不可以转

```c#
//1.非字符串不可以用Parse()方法
int i3 = int.Parse(123.456); 
//2.无效格式的字符串不可以用Parse()方法
int.Parse("abc"); // 格式错误：FormatException
int.Parse("123.456");  // 格式错误：FormatException
int.Parse("");//FormatException
//3.超出范围:溢出错误
byte.Parse("256"); // OverflowException 

```

## Convert类方法

一、用途：将一种基本数据类型转换为另一种基本数据类型

二、语法

```c#
Convert.目标数据类型(数据类型)
```

三、能转什么

```c#
//1.字符串 => 其他基本数据类型
Convert.ToInt32("123");
Convert.ToDouble("123.45");
Convert.ToBoolean("true");
Convert.ToChar("A");
//2.实数 => 整数 （四舍五入）
Convert.ToInt32(123.456); // 123
Convert.ToInt32(123.58); // 124 四舍五入
//3. 布尔值 => 整数
Convert.ToInt32(true); // 1
Convert.ToInt32(false); // 0
Convert.ToBoolean(1); // true
Convert.ToBoolean(0); //  false
//4.任意类型 => 字符串(万能转)
Convert.ToString(true); // "true"
Convert.ToString(3.124); // "3.14"
//5.特殊
Convert.ToInt32("");

```



四、不能转什么

```c#
Convert.ToInt32("123.45"); //格式错误
```



## 常量的知识点

一、常量的定义

二、常量的分类

- 直接常量: 直接出现在程序中的值(不变的大小)。
  - 不以变量形式出现
  - 又叫”直接量“或”字面量“
  - 默认类型是最小类型
  - 指定类型后缀：U、L、UL
  - 整型常量可以使用十六进制表示：前缀`0X`

```c#
//整型常量
Console.WriteLine(100);
//无符号整型常量
Console.WriteLine(100U);
//长整型常量
Console.WriteLine(100L);
//无符号长整型常量
Console.WriteLine(100UL);
//十六进制整型常量
Console.WriteLine(0x20);
//浮点型常量(小数)
Console.WriteLine(3.14);
//浮点型常量(科学计数法)
Console.WriteLine(3.14e2);
//单精度浮点型常量
Console.WriteLine(3.14F);
//双精度浮点型常量
Console.WriteLine(3.14D);
//固定精度浮点型常量
Console.WriteLine(3.14M);
//字符常量(单字符)
Console.WriteLine('A');
//字符常量(Unicode编码) 
Console.WriteLine('\U0032');
//字符串常量
Console.WriteLine("Hello");
//布尔值常量
Console.WriteLine(true);
```

- 符号常量：用特定标识符表示某一数据(值)。
  - 其值不能改变的变量。
  - 常量名：建议大写，比如 PI
  - 声明常量必须初始化
  - 常量一经声明，不可修改

```c#
//语法
const 数据类型 常量名 = 常量值;
//示例
const float PI = 3.14F;
```

## 变量的知识点

一、掌握变量的定义

- 变量是命名的内存空间(物理）。

- 变量是存储数据和处理数据的方式(逻辑)。
- 程序运行过程中可以改变的量。
- 变量是一个容器。

二、变量三要素：

- 变量类型：不同变量可以存储不同的数据
- 变量名
- 变量值：存储在变量中的数据

三、变量名的命名规则

- 注意：关键字前加上`@`符号可以作为变量名使用

四、掌握定义变量的语法

```c#
访问修饰符 数据类型 变量名 = 值;
```

五、掌握变量作用域的定义

指可以访问变量的区域。

六、变量的分类

- 成员变量：定义在类体中的变量，指的就是字段。
  - 实例变量(对象变量)：不加static关键字定义的变量，通过对象访问
  - 静态变量(类变量)：加上static关键字，通过类访问
- 局部变量：定义在类的方法体内的变量

七、作用域的分类

- 类级作用域(字段)
- 方法级作用域(局部变量)
- 块级作用域(if、for等语句块)

注：C# 中没有 “传统意义上的全局变量”。

## 运算符与表达式

一、表达式的概念

- 运算符：表示某种特定含义的符号
- 运算数：运算符操作的对象（数据)
- 括号：用于标识表达式和提升优先级

注意：

1.所有的表达式都必须计算出一个结果(值)

2. 优先级：运算符权重的大小（谁更重要，优先算谁）
3. 结合性：运算的方向

```c#
int a = 1 + 2 + 3;
```

二、小括号的作用

1. 括号运算符：转换数据类型
2. 方法中：调用方法和传递参数
3. 提升优先级
4. 表示表达式：显式明确的指明一个表达式

```c#
(a > b) ? "a大于b" : ((a > c) ? "a大于c" : "a最小");
```

三、如何掌握算数运算符

1. 成员：五个
2. 含义：每个运算符的含义
3. 用法：每个运算符的用法

4. 注意：
   - 加号有三种用法：加法、正、连接
   - 减号有两种用法：减法、负
   - 除号：注意整数类型的除法
   - 取余：允许实数取余

```c#
7 % 3.0
```

四、自增自减知识点

1. 含义：自增是自加1；自减是自减1；

```c#
a++  等价于 a = a + 1;  或 a+=1;
```

2. 自增自减分类：
   - 前置
   - 后置
3. 用法：关键看有没有"其他运算" + 后置
4. 优先级：最高优先级（属于单目运算符)

## 五、赋值运算符知识点

1. 左值和右值的含义
2. 多个赋值运算符：+=  -=

## 六、关系运算符知识点

1. 关系运算符的含义：用于比较大小的运算符
2. 返回值：布尔值
3. 优先级：关系运算符 VS 逻辑运算符

## 七、逻辑运算符知识点

1. 优先级：逻辑非 >  逻辑与  >  逻辑或
2. 短路

## 八、条件运算符知识点

1. 记住语法格式

2. 三目运算符
3. 优先级

## 九、结合性

左结合：从左向右

右结合：从右向左

```c#
"SuperMan".SubString(5,3);
//求平方根
Math.sqrt(2)
```







## 作业1：计算器（无限循环)





