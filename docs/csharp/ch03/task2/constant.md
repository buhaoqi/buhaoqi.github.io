---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 常量 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 常量  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

**简答题**

1. 常量是什么

2. 常量分为哪两种形式

3. 直接常量是什么

4. 哪些常量是直接常量？

5. 常见的转义字符有哪些？

5. 符号常量是什么？

6. 定义符号常量的语法格式是什么？

7. 符号常量的优势是什么

## 常量是什么？

**常量（Constant）** 就是在程序运行期间**其值永远不会改变**的量。一旦被初始化，就不能再被修改。

比如，下面这些都是常量

```c#

18

0x1F

127L

127U

3.14

3.14f

2.718m

'A'

'\n'

"Hello"

true 和 false

const double PI = 3.14159;

const int MAX_CLASS_SIZE = 50;

const int STATUS_ACTIVE = 1;

const int STATUS_INACTIVE = 2;

```

---

## 常量分为哪两种形式

常量可以分为两种形式：

- 直接常量

- 符号常量

---

## 直接常量是什么

**直接常量**就是直接在代码中出现的具体值，可以是数值或文本。比如

```csharp

// 数值直接常量

int age = 18;               // 18 是直接常量

```

**特点：**

- 没有名字，直接使用值本身

- 也称为"字面量"（Literal）

- 在代码中直接出现

## 哪些常量是直接常量？

直接常量的分类包括：

1. **整型常量**：十进制（18）、十六进制（0x1F）、带后缀（127L, 127U）

2. **浮点型常量**：默认double（3.14）、float（3.14f）、decimal（2.718m）

3. **字符常量**：用单引号括起（'A', '\n'）

4. **字符串常量**：用双引号括起（"Hello"）

5. **布尔常量**：true 和 false

**示例：整型常量**

对于一个整数值，就是数值直接常量

```csharp

int age = 18;               // 18 是直接常量

```

整型后缀：可以在常量后加上后缀来指明数据类型，也属于整型常量。

```c#

18L  //long类型的常量，

127U  //uint整型

127UL //ulong类型

```

十六进制数：整型常量可以使用十六进制表示。

```c#

0x20   //十六进制20 相当于十进制32

0x1F  //十六进制1F，相当于十进制31

```

注意：十六进制在数值前0x前缀。

**示例：浮点型常量**

一般带小数点的数或用科学计数法表示的数都被认为是浮点型常量。

```c#

double price = 99.9;        // 99.9 是直接常量

decimal salary = 5000.50m;  // 5000.50m 是直接常量

3.14

3.14e2  //3.14*10的2次幂

2.718E-2  //2.718 * 10的-2次幂

3.14f,  2.718f    //float类型常量

3.14D,2.718d   //double类型常量

3.14M,2.718m  //decimal类型常量

```

**示例: 字符常量**

单字符：使用单引号包裹的单个字符就是字符常量。（单字符占16位）

```#

char grade = 'A';           // 'A' 是直接常量

```

十六进制字符\X\x开头的4位十六进制数序列也属于字符串常量

```c#

'\X0032'

```

Unicode字符\U\u开头的4位十六进制数序列也属于字符串常量

```c#

'\U0032'

```

显示转换整数字符

```c#

(char)67

```

**示例: 字符串常量**

字符串常量表示若干个Unicode字符组成的字符序列，使用双引号标记。例如：

```#

"12"

"abc"

"C#"

string name = "张三";       // "张三" 是直接常量

```

字符串常量可以包括转义字符

```c#

"Hello\n"

"C:\\Program Files\\Microsoft Visual Studio"

```

**示例:布尔值常量**

```

// 布尔直接常量

bool isActive = true;       // true 是直接常量

bool isCompleted = false;   // false 是直接常量

```

## 常见的转义字符有哪些

常见的C#转义字符包括：

|转义字符|含义|

|---|---|

\n |换行符|

\t |水平制表符|

\v |垂直制表符|

\r |回车|

\b |退格|

\' |单引号|

\" |双引号|

\\ |反斜线|

\a |警报（响铃）|

\f |换页|

| \0 |空字符|

## 符号常量是什么

**符号常量**是使用标识符表示值。简单说就是给常量值起一个名字，通过这个名字来使用。

符号常量通常定义在程序的开始处。

##  定义符号常量语法是什么

```c#

const 数据类型 常量名 = 常量值;

```

- const : C#中定义符号常量的关键字

- PI： 符号常量名，命名应遵循标识符规则，建议符号常量名尽量用大写字母。

- 符号常量一经定义，不得修改。

- 定义常量时，只允许出现常量和常数，不能有变量。

示例

```c#

const float PI = 3.14f;

const double PI = 3.14159;

const int MAX_STUDENTS = 50;

const string SCHOOL_NAME = "某某职业技术学校";

```

**特点：**

- 有明确的标识符名称

- 使用 const 或 readonly 关键字定义

- 提高代码可读性和可维护性

---

## 使用符号常量的优势是什么？

1. **提高可读性**const double PI = 3.14; 比直接写 3.14 更有意义

2. **避免魔法数字**：消除代码中难以理解的直接数值（如 if(status == 2)）

3. **保证数据安全**：防止重要的值被意外修改

4. **便于维护**：只需修改一处定义，所有使用的地方都会自动更新

| 特性 | 直接常量 | 符号常量 |

|------|----------|----------|

| **名称** | 无名称，直接使用值 | 有明确的名称标识符 |

| **可读性** | 差（魔法数字） | 好（意义明确） |

| **可维护性** | 差（修改需要找所有地方） | 好（只需修改一处） |

| **内存占用** | 每次使用都占用内存 | 只占用一次内存 |

| **使用场景** | 临时、一次性使用的值 | 需要重复使用的重要值 |

| **示例** | 3.14, "hello", 100 | PI, MaxValue, WelcomeMessage |

---

**示例1：提高可读性**

```csharp

// ❌ 难以理解

if (temperature > 100) { ... }

// ✅ 清晰明了

const int BOILING_POINT = 100;

if (temperature > BOILING_POINT) { ... }

```

```csharp

public class Geometry

{

    public const double PI = 3.1415926535;

    public const double GoldenRatio = 1.6180339887;

}

double CalculateCircleCircumference(double radius)

{

    return 2  Geometry.PI  radius;

}

```

**示例2：避免魔法数字**

```csharp

// ❌ 不好的写法（魔法数字）

if (user.Status == 2) 

{

    // 2 是什么意思？看不懂！

}

// ✅ 好的写法

public class UserStatus

{

    public const int Active = 1;

    public const int Inactive = 2;

    public const int Suspended = 3;

}

if (user.Status == UserStatus.Inactive) 

{

    // 清晰明了！

}

```

```csharp

// 难以理解的"魔法数字"

double area = 3.14  radius  radius;

if (studentCount > 50) {

    Console.WriteLine("班级已满");

}

if (status == 2) {

    // 2 代表什么？看不懂！

}

```

```csharp

// 定义符号常量

const double PI = 3.14159;

const int MAX_CLASS_SIZE = 50;

const int STATUS_ACTIVE = 1;

const int STATUS_INACTIVE = 2;

// 使用符号常量

double area = PI  radius  radius;

if (studentCount > MAX_CLASS_SIZE) {

    Console.WriteLine("班级已满");

}

if (status == STATUS_INACTIVE) {

    Console.WriteLine("账号已停用");

}

```

示例3：保证数据安全

```csharp

// ❌ 容易写错数字

double area1 = 3.14  r  r;    // 有人用 3.14

double area2 = 3.14159  r  r; // 有人用 3.14159

// ✅ 统一使用常量，保证一致性

const double PI = 3.1415926535;

double area1 = PI  r  r;

double area2 = PI  r  r;

```

**示例4：便于维护**

```csharp

// 如果学校名称改了，只需要修改这一处

const string SCHOOL_NAME = "某某职业技术学校";

// 在多个地方使用

Console.WriteLine("欢迎来到" + SCHOOL_NAME);

PrintReport(SCHOOL_NAME);

SaveToDatabase(SCHOOL_NAME);

```

---

## 使用常量的原则

1. **命名规范**：常量名全部大写，单词间用下划线分隔

   ```csharp

   public const int MAX_RETRY_COUNT = 3;

   public const string DEFAULT_FILE_PATH = @"C:\Temp\";

   ```

2. **组织常量**：将相关的常量放在同一个类中

   ```csharp

   public class ErrorCodes

   {

       public const int SUCCESS = 0;

       public const int FILE_NOT_FOUND = 1;

       public const int PERMISSION_DENIED = 2;

   }

   ```

3. **优先使用 const**：除非需要在运行时确定值，否则用 const

4. **不要过度使用**：只有真正不会改变的值才定义为常量

---

## 常见错误

1. const必须在声明时赋值

```csharp

// ❌ 错误：const必须在声明时赋值

const int MyConstant;

```

2.const值必须是编译时常量

```c#

// ❌ 错误：const值必须是编译时常量

const DateTime CurrentTime = DateTime.Now;

```

3.尝试修改常量

```c#

// ❌ 错误：尝试修改常量

const int Count = 5;

Count = 10; // 编译错误！

// ✅ 正确：使用readonly处理运行时值

readonly DateTime AppStartTime = DateTime.Now;

```

## 总结

1. **记住原则**：给重要的、重复使用的值起名字

2. **识别魔法数字**：看到代码中的数字，问问自己"这个数字代表什么？"

3. **创建常量类**：将相关的常量组织在一起

   ```csharp

   public class AppConstants

   {

       public const int MAX_USERS = 100;

       public const int TIMEOUT_SECONDS = 30;

       public const string DEFAULT_LANGUAGE = "zh-CN";

   }

   ```

4. **逐步改进**：在写代码时，有意识地用符号常量替换直接常量

记住这个简单的规则：**如果你需要解释一个数字的含义，就应该把它变成符号常量！**

## 作业

**选择题**

**1. 关于C#中的直接常量，以下说法正确的是：**

A. 直接常量必须使用const关键字定义

B. 直接常量就是直接在代码中写出的具体数值或文本

C. 直接常量需要有明确的标识符名称

D. 直接常量可以在程序运行时修改其值

**2. 在C#中，以下哪个是符号常量的正确定义？**

A. int MAX_VALUE = 100;

B. const int MAX_VALUE = 100;

C. var MAX_VALUE = 100;

D. dynamic MAX_VALUE = 100;

**3. 以下关于十六进制常量的表示中，正确的是：**

A. 0x20G

B. #1F

C. 0x1F

D. 16#1F

**4. 要定义一个float类型的常量3.14，正确的写法是：**

A. const float pi = 3.14;

B. const float pi = 3.14f;

C. const float pi = 3.14F;

D. const float pi = 3.14d;

**5. 使用符号常量的主要优点不包括：**

A. 提高代码的可读性

B. 允许在运行时修改常量的值

C. 避免魔法数字的出现

D. 便于代码的维护和修改

**6. 以下哪种情况最适合使用符号常量？**

A. 临时的一次性使用的数值

B. 需要重复使用且意义明确的重要数值

C. 需要在程序运行时动态改变的数值

D. 只在单个方法内部使用的临时变量

**7. 关于const关键字，以下说法错误的是：**

A. const常量必须在声明时赋值

B. const常量的值必须是编译时就能确定的

C. const常量可以在程序运行时被重新赋值

D. const常量可以使用其他常量进行初始化

**8. 在C#中，十进制数31的十六进制表示是：**

A. 0x1E

B. 0x1F

C. 0x20

D. 0x21

**9. 以下代码中，存在错误的是：**

```csharp

const int MAX_VALUE;

MAX_VALUE = 100;

```

错误的原因是：

A. 常量名应该全部大写

B. const常量必须在声明时赋值

C. 常量值100不是有效的整数

D. 缺少访问修饰符

**10. 为了表示decimal类型的常量，应该在数值后添加的后缀是：**

A. f 或 F

B. d 或 D

C. m 或 M

D. l 或 L

**11. 在C#字符串中，要表示换行符，应该使用的转义字符是：**

A. \t

B. \n

C. \r

D. \\

**12. 如果想要在字符串中包含反斜杠字符本身，应该使用哪个转义序列？**

A. \/

B. \\

C. \*

D. \#

**13. 以下哪个转义字符用于表示制表符（Tab键）？**

A. \a

B. \b

C. \t

D. \v

**14. 在C#中，以下关于直接常量分类的说法，正确的是：**

A. 直接常量只包括数值常量，不包括文本常量

B. 直接常量分为整型常量、浮点型常量、字符常量、字符串常量和布尔常量

C. 直接常量必须使用const关键字定义，否则不是常量

D. 十六进制表示的数字不属于直接常量，而是符号常量

**15. 观察以下C#代码片段：**

```csharp

int age = 18;

double price = 99.9;

char grade = 'A';

string name = "张三";

bool isActive = true;

decimal salary = 5000.50m;

```

这段代码中包含了几种类型的直接常量？

A. 3种

B. 4种

C. 5种

D. 6种

---

答案及解析

1. **B** - 直接常量就是直接在代码中写出的具体数值或文本，没有名字

2. **B** - 符号常量使用const关键字定义：const int MAX_VALUE = 100;

3. **C** - 十六进制常量在数值前加0x前缀：0x1F

4. **B**或**C** - float类型常量需要在数值后加f或F后缀：3.14f 或 3.14F

5. **B** - 符号常量的值不能被修改，这是它的特点而不是优点

6. **B** - 需要重复使用且意义明确的重要数值最适合使用符号常量

7. **C** - const常量的值一旦设定就不能被修改，包括在运行时

8. **B** - 十进制31的十六进制是0x1F（1*16 + 15 = 31）

9. **B** - const常量必须在声明时赋值，不能先声明后赋值

10. **C** - decimal类型常量使用m或M后缀：5000.50m 或 5000.50M

11. **B** - \n 表示换行符（New Line）

12. **B** - \\ 表示反斜杠字符本身

13. **C** - \t 表示制表符（Tab）

14. 答案：B

**解析：** 直接常量确实分为以下几类：

- 整型常量（如：18, 0x1F, 127U）

- 浮点型常量（如：3.14, 3.14f, 2.718m）

- 字符常量（如：'A', '1', '\n'）

- 字符串常量（如："张三", "Hello"）

- 布尔常量（如：true, false）

选项A错误，因为直接常量包括文本常量（字符和字符串）；选项C错误，因为直接常量不需要const关键字定义；选项D错误，因为十六进制表示的数字（如0x1F）属于整型直接常量。

**15. 答案：D**

**解析：** 代码中包含6种类型的直接常量：

1. 18 - 整型直接常量

2. 99.9 - 双精度浮点型直接常量（默认double类型）

3. 'A' - 字符直接常量

4. "张三" - 字符串直接常量

5. true - 布尔直接常量

6. 5000.50m - decimal类型直接常量（使用m后缀）

---

