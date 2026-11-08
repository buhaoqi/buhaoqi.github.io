---
title: 任务三 简单C#程序实例
description: 算法与程序设计《C#》项目二 C#概述 任务三 简单C#程序实例知识点总结。介绍C#项目创建与分类、命名空间namespace、类class、关键字、标识符命名规则、Main方法、注释语句、输入输出方法Console.ReadLine/WriteLine及格式化输出，含控制台应用程序、Windows窗体应用程序和Web应用程序三个完整实例。
keywords: [C#, 控制台应用程序, Windows窗体应用程序, Web应用程序, 命名空间, namespace, using, 类, 关键字, 标识符, Main方法, 注释, Console.WriteLine, Console.ReadLine, 格式化输出, 对口升学]
sidebar_label: 任务三 简单C#程序实例
sidebar_position: 3
slug: /csharp/proj2/task3-simple-csharp-program
tags: [C#, 项目二, 任务三, 对口升学]
---

## 知识点

### 子任务一 C#项目的创建与分类

### 1.如何创建C#项目？

启动Visual Studio 2010开发环境，选择起始页左侧的"新建项目"命令，或选择"文件"→"新建"→"项目"选项，弹出"新建项目"对话框。选择需要创建的项目类型，在"模板"栏中选择模板类型，在"名称"栏中输入项目名称，在"位置"栏中输入保存路径，在"解决方案名称"栏中输入解决方案名称，单击"确定"按钮即可进入项目开发工作区。

### 2.C#中的主要项目类型有哪些？

- 控制台应用程序
- Windows窗体应用程序
- Web应用程序

> 在默认情况下，解决方案名称与项目名称相同，保存项目和解决方案的文件夹名就是项目名称。

### 子任务二 控制台应用程序实例

### 3.什么是命名空间（namespace）？

namespace是命名空间，是可以由用户命名的作用域，用来处理程序中常见的同名冲突问题。

使用using语句可以引用其他的命名空间，在后面的程序中可以直接使用该命名空间中的成员。例如，`using System` 表示使用using关键字自动导入由.NET Framework提供的名为System的命名空间。

命名空间的语法：

```csharp
namespace 命名空间名
```

using指令的基本形式：

```csharp
using 命名空间名
```

### 4.什么是类（class）？

程序中出现的class为类的关键字，C#中的每个对象都属于一个类。系统自动生成的类（如Program）为用户提供了一个入口方法`Main()`，程序从`Main()`方法开始启动。

### 5.什么是关键字？C#中有哪些常用关键字？

关键字是C#语言中已经被赋予特定意义的一些单词，开发程序时不可以把这些关键字作为命名空间、类、方法或者属性等来使用。例如：`using`、`namespace`、`class`、`static`、`void`等都是关键字。

**表2-1 C#常用关键字：**

| | | | | |
|---|---|---|---|---|
| abstract | as | base | bool | break |
| byte | case | catch | char | checked |
| class | const | continue | decimal | default |
| delegate | do | double | else | enum |
| event | explicit | extern | false | finally |
| fixed | float | for | foreach | goto |
| if | implicit | in | int | interface |
| internal | is | lock | long | namespace |
| new | null | object | operator | out |
| override | params | private | protected | public |
| readonly | ref | return | sbyte | sealed |
| short | sizeof | stackalloc | static | string |
| struct | switch | this | throw | true |
| try | typeof | uint | ulong | unchecked |
| unsafe | ushort | using | virtual | void |
| volatile | while | | | |

### 6.什么是标识符？命名规则是什么？

标识符可以简单地理解为一个名字，主要用来标识类名、变量名、方法名、属性名、数组名等各种成员。

**命名规则：**
- 由任意顺序的字母、下划线和数字组成
- 第一个字符不能是数字
- 不能是C#中的保留关键字

**合法标识符示例：** `_dd`、`name3`、`user_age`

**非法标识符示例：** `4word`（以数字开头）、`if`（是C#关键字）

### 7.Main方法有哪些要求？

每一个C#程序中都必须包含一个Main方法，它是类体中的主方法，也叫入口方法，是激活整个程序的开关。Main方法从 `{` 开始，至 `}` 结束。

注意事项：
1. Main方法在类或结构内声明，必须是**静态（static）**的，而且不应该是公用（public）的
2. Main的返回类型有两种：**void** 或 **int**
3. Main方法可以包含命令行参数 `string[] args`，也可以不包括
4. Main方法**区分大小写**（必须大写M）

### 8.C#中的注释有哪些？

**（1）行注释**：以 `//` 开头，后面跟注释内容

```csharp
Console.WriteLine("C#程序设计欢迎你!");  //调用控制台的WriteLine方法输出内容
Console.ReadLine();  //调用控制台的ReadLine方法使程序暂停查看输出内容
```

**（2）块注释**：以 `/*` 开始，以 `*/` 结束，注释内容放在它们之间

### 9.Console类的输入方法是什么？

`Console.ReadLine()` 方法用于获取从键盘输入的一行字符串（若只获取一个字符，可用 `Console.Read()` 方法）。ReadLine()方法只能输入字符串，若要输入数值，需将输入的字符串转换成相应的数值。Read()和ReadLine()两个方法都在按Enter键时终止。

### 10.Console类的输出方法是什么？如何格式化输出？

`Console.WriteLine()` 方法将数据输出到屏幕并加上一个回车换行符（若不加回车换行符，可用 `Console.Write()` 方法）。

格式化输出采用 `{N[,M][:格式化字符串]}` 的形式：

- **花括号 `{}`**：用来在输出字符串中插入变量的值
- **N**：输出变量的序号，从0开始
- **[,M]**：可选项，M表示输出的变量所占的字符个数。负数为左对齐，正数为右对齐
- **[:格式化字符串]**：可选项，指定输出字符串的格式

**表2-2 常用的格式字符：**

| 格式字符 | 含义 | 示例 | 输出结果 |
|---|---|---|---|
| C或c | 货币格式 | `Console.WriteLine("{0,5:c}", 123.456);` | ￥123.46 |
| D或d | 整数数据类型格式 | `Console.WriteLine("{0:D4}", 123);` | 0123 |
| E或e | 科学记数法格式 | `Console.WriteLine("{0:E4}", 123.456);` | 1.2346E+002 |
| F或f | 浮点数据类型格式 | `Console.WriteLine("{0:f4}", 123.456);` | 123.4560 |
| G或g | 通用格式 | `Console.WriteLine("{0:g}", 123.456);` | 123.456 |
| N或n | 自然数据格式 | `Console.WriteLine("{0:n}", 123.456);` | 123.46 |
| X或x | 十六进制数据格式 | `Console.WriteLine("{0:x}", 12345);` | 3039 |

> 注意：在一个Write/WriteLine方法中，序号N是连续的，且从0开始。

### 11.C#语句的书写规则有哪些？

- 每条语句以分号 `;` 结束
- 可以在一行书写多条语句：`int a; float b; double c;`
- 也可以将一条语句写在不同行，只要末尾有分号即可
- C#语言对大小写敏感，如 `ReadLine()` 与 `readline()` 不是一回事
- 尽量使用缩进表示程序的层次结构

### 12.控制台应用程序实例：输出"C#程序设计欢迎你！"

**步骤：**
1. 选择"文件"→"新建"→"项目"，选择"控制台应用程序"，名称为proj2_1
2. 在Main方法中输入代码

**完整代码：**

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace proj2_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("C#程序设计欢迎你!");  //调用控制台的WriteLine方法输出内容
            Console.ReadLine();  //调用控制台的ReadLine方法使程序暂停查看输出内容
        }
    }
}
```

3. 按F5键运行，屏幕输出"C#程序设计欢迎你!"

### 子任务三 Windows窗体程序实例

### 13.Windows窗体应用程序实例

**任务：** 单击窗体上的"输出"按钮，在窗体上显示"C#程序设计欢迎你！"文字。

**预备知识：** Text属性是字符串型，用来定义控件显示的文本，初始值为空。

**步骤：**
1. 新建"Windows窗体应用程序"，项目名称proj2_2
2. 从工具箱拖入Button控件和Label控件，默认名为button1和label1
3. 设置属性：button1的Text属性设为"显示"，label1的Text属性设为空
4. 双击button1，在Click事件中添加代码

**核心代码：**

```csharp
label1.Text = "C#程序设计欢迎你!";
```

**完整代码：**

```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace proj2_2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            label1.Text = "C#程序设计欢迎你!";
        }
    }
}
```

> 程序分析：System.Windows.Forms命名空间包含了用于创建基于Windows的应用程序类，以供用户实现丰富的Windows界面。

### 子任务四 Web应用程序实例

### 14.Web应用程序实例

**步骤：**
1. 选择"文件"→"新建"→"网站"，选择"ASP.NET Web应用程序"，名称proj2_3
2. ASP.NET为每个页面提供三种编辑视图：**设计视图**（所见即所得）、**源视图**（源代码）、**拆分视图**（同时显示设计和源）
3. 在页面上添加一个Button和一个Label，清空Label的Text属性
4. 双击Button按钮，输入代码

**核心代码：**

```csharp
Label1.Text = "C#程序设计欢迎你!";
```

**完整代码：**

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace proj2_3
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Label1.Text = "C#程序设计欢迎你!";
        }
    }
}
```

5. 右键单击"Default.aspx"，选择"在浏览器中查看"即可运行
