---
title: 任务三 读/写文件
description: 算法与程序设计《C#》项目十 C#文件操作 任务三 读/写文件 知识点总结。掌握FileStream类读写二进制流、StreamReader和StreamWriter类读写文本流、BinaryReader和BinaryWriter类读写二进制文件的方法。
keywords: [C#, 文件操作, 文件流, FileStream, StreamReader, StreamWriter, BinaryReader, BinaryWriter, 对口升学]
sidebar_label: 任务三 读/写文件
sidebar_position: 3
slug: /csharp/proj10/task3-read-write-files
tags: [C#, 项目十, 任务三, 对口升学]
---

## 知识点

### 1. 流的概念

在日常生活中，不仅需要对文件进行复制、移动、删除等操作，有时还需要对文件的内容进行读取、写入、修改等操作。对文件内容的操作表现为流，流又称为数据流，它提供了一种向后备存储写入字节和从后备存储读取字节的方式。

### 2. 文本流与二进制流的区别

#### 文本流（Text Stream）

文本流是指在流中流动的数据是以字符的形式出现的，流中的每一个字符对应一个字节，用于存放对应的ASCII码值，因此文本流中的数据可以显示和打印出来，都是用户可以读懂的信息。文本流是一行一行的字符，换行符表示一行的结束。

#### 二进制流（Binary Stream）

二进制流中的数据是按照二进制编码的方式来存放文件的。二进制数据也可在屏幕上显示，但其内容无法读懂。二进制流是由与外部设备中的内容一一对应的系统字节组成的。使用二进制流时没有字符翻译过程，而且所读写的字节也与外部设备中的相同。

### 3. 使用FileStream类读/写流文件

文件流是对物理文件的封装，如一个文件的内容可能分散在磁盘的多个地方，但通过FileStream对象仍可以进行连续的字节流读写，从字节流到物理存储的映射细节由FileStream对象隐藏。使用FileStream对象来读写字节，可以实现对文件的读、写、打开、关闭等操作。

#### （1）写文件

使用FileStream类读写文件前必须实例化一个对象即打开文件。如果是写文件，必须使用第二种构造函数格式，FileMode可用除Open方式外的所有方式，FileAccess采用 `Write` 或 `ReadWrite`。打开文件后，使用 `WriteByte` 或 `Write` 方法向文件中写入二进制数据。

##### WriteByte方法

格式：`FileStream对象名.WriteByte(byte value)`

说明：向文件中写入一个字节。

示例：将0~9十个数字写入D盘Test文件夹下的test1.TXT文件中。
```csharp
FileStream fs1 = new FileStream(@"D:\Test\test1.TXT", FileMode.Create, FileAccess.Write);
for (byte x = 0; x <= 9; x++)
{
    fs1.WriteByte(x);
}
fs1.Close();
```

##### Write方法

格式：`FileStream对象名.Write(byte[] array, int offset, int count)`

说明：
- 第一个参数：二进制数组名
- 第二个参数：写入文件的字节数组的起始位置，一般从第零个元素写入
- 第三个参数：写入的字节数或写入的二进制数组元素的个数

示例：向D盘Test文件夹下的Test2.TXT文件中写入26个英文字母。
```csharp
FileStream fs1 = new FileStream(@"D:\Test\test2.txt", FileMode.Create, FileAccess.Write);
byte[] ByteArray = new byte[26];
for (int i = 0; i < 26; i++)
{
    ByteArray[i] = (byte)(65 + i);  // 给二进制数组赋值
}
fs1.Write(ByteArray, 0, 26);  // 将二进制数组中的数组写入文件
fs1.Close();
```

#### （2）读文件

使用FileStream类从文件中读取数据前，先用FileStream构造函数打开文件。FileMode参数为Open方式或OpenOrCreate方式；FileAccess参数可以省略，也可以使用Read或ReadWrite方式。打开文件后使用 `ReadByte` 方法或 `Read` 方法来读取文件中的二进制数据。

##### ReadByte方法

格式：`FileStream对象名.ReadByte()`

说明：该方法没有参数，从文件中读取一个字节并将读取位置提升一个字节。

示例：从D盘Test文件夹下的Test1.TXT文件中读取所有数据并显示在控制台输出窗口。
```csharp
FileStream fs1 = new FileStream(@"D:\Test\test1.txt", FileMode.OpenOrCreate, FileAccess.Read);
for (int i = 0; i < fs1.Length; i++)
{
    Console.Write(fs1.ReadByte());
}
fs1.Close();
Console.ReadLine();
```

##### Read方法

格式：`FileStream对象名.Read(byte[] array, int offset, int count)`

说明：
- 第一个参数：二进制数组名
- 第二个参数：字节数组中开始写入数据的位置，通常为0
- 第三个参数：读取数据的字节数

示例：将D盘Test文件夹下的Test2.TXT文件中的数据读到二进制数组ByteArray中，并在控制台显示窗口将其以ASCII码形式显示。
```csharp
byte[] ByteArray = new byte[26];
FileStream fs1 = new FileStream(@"D:\Test\test2.txt", FileMode.Open, FileAccess.Read);
fs1.Read(ByteArray, 0, 26);  // 从文件中读取数据到二进制数组ByteArray中
for (int i = 0; i < fs1.Length; i++)
{
    Console.Write(Convert.ToChar(ByteArray[i]));  // 以文本格式显示数组中的数据
}
Console.ReadLine();
fs1.Close();
```

> **注意**：在读取或写入文件后要用 `Close` 方法关闭文件，保证文件的完整性。

### 4. 使用StreamReader类和StreamWriter类读写文本文件

FileStream类只能处理原始字节，这使得它可以用来处理任何数据文件。但不能使用FileStream类将数据直接读写到字符串中，而必须将字符串转为字节数组，或者进行相反的操作。StreamReader和StreamWriter类提供了按文本模式读写数据的方式，这两个类不同于Stream的派生类，它们分别继承自抽象类 `TextReader` 和 `TextWriter` 类，使用它们提供的方法可以根据内容自动检测出停止读取文件的位置。

例如：
- `StreamReader.ReadLine()` 方法可以一次读取一行文本
- `StreamReader.WriteLine()` 方法可以一次向文本文件中写入一行文本
- 在读取文件时，流能够自动确定下一个回车符的位置，并在该处停止读取
- 在写入文件时，流会自动把回车符和换行符添加到文本的尾部

#### （1）StreamReader构造函数

```csharp
public StreamReader(string path)
public StreamReader(Stream stream)
public StreamReader(string path, bool detectEncoding)
public StreamReader(string path, Encoding encoding)
```

说明：
- `string path`：一个指定的可以包含完整路径的文件名的字符串，用于创建StreamReader类的新实例
- `Stream stream`：一个打开的流，一般为FileStream类的对象名
- `bool detectEncoding`：指示是否由StreamReader自动检测文件中使用的编码方式，默认为自动检测
- `Encoding encoding`：指定需要的编码方案

#### 常见编码格式及占用空间

| 编码方案 | 英文字母 | 中文汉字 | 说明 |
|---|---|---|---|
| ASCII | 1字节 | 2字节 | 不支持中文 |
| UTF-8 | 1字节 | 3字节 | 默认值 |
| Unicode | 1字节 | 2字节 | 符号：英文标点1字节，中文标点2字节 |
| UTF-16 | 2字节 | 2字节（扩展区汉字4字节） | 统一2字节或4字节 |
| UTF-32 | 4字节 | 4字节 | 世界上任何字符都占4字节 |

#### StreamReader读取方法

##### Read方法

格式1：`StreamReader对象名.Read()`

说明：在文本流中读取下一个文本字符，并将读取点下移一个字符。默认的 `Read()` 方法可以把返回的字符转为一个整数，当到达流的末尾时返回-1。

格式2：`StreamReader对象名.Read(char[] buffer, int index, int count)`

说明：将文本流中从index开始的最多count个字符读到字符数组中。

示例：使用StreamReader类将D盘Test文件夹下的文本文件test1.TXT读到变量num中并显示在控制台显示窗口。
```csharp
StreamReader fsr = new StreamReader("D:\\test\\test1.txt", Encoding.ASCII);
int num;
num = fsr.Read();  // 从文本流中读一个字符到整型变量中
while (num != -1)  // 如果没有读到文本文件的尾部则执行循环
{
    Console.WriteLine(num);
    num = fsr.Read();
}
fsr.Close();
Console.ReadLine();
```

##### ReadLine方法

格式：`StreamReader对象名.ReadLine()`

说明：该方法从文本流中读取一行，并以字符串变量的形式返回，其中不包含标记该行结束的回车换行符。

示例：使用StreamReader类将D盘Test文件夹下的中文文件test2.TXT的内容逐行显示在控制台显示窗口。
```csharp
StreamReader fsr = new StreamReader("D:\\test\\test2.txt", Encoding.UTF8);
string str1;
do
{
    str1 = fsr.ReadLine();
    Console.WriteLine(str1);
} while (str1 != null);
fsr.Close();
Console.ReadLine();
```

##### ReadToEnd方法

格式：`字符串型变量 = StreamReader对象名.ReadToEnd()`

说明：把流中从当前位置到结尾的部分一次性读入到一个字符串型变量中。

> **注意**：无论使用哪种读取方法，最后使用 `Close()` 方法将文件关闭以便其他对象访问该文件。

#### （2）StreamWriter构造函数

```csharp
public StreamWriter(string path)
public StreamWriter(Stream stream)
public StreamWriter(string path, bool append)
public StreamWriter(string path, bool append, Encoding encoding)
```

说明：`append` 若设置为 `true`，则把数据追加到文件末尾；若设置为 `false`，则覆盖原内容从文件头开始写。

StreamWriter构造函数最简单的只带一个文件名参数，也可以使用encoding参数指定文件的编码，如果省略则默认编码为UTF-8格式。使用StreamWriter也可以关联到一个文件流上，以获得打开文件的更多控制选项。

示例：使用StreamWriter关联到FileStream定义的文件流fs上。
```csharp
FileStream fs = new FileStream(@"d:\MyFile\Test.txt", FileMode.CreateNew, FileAccess.Write);
StreamWriter sw = new StreamWriter(fs);
```

#### StreamWriter常用方法

| 方法 | 说明 |
|---|---|
| Close() | 关闭StreamWriter和内在的流 |
| Flush() | 清除缓冲区，使所有缓冲数据写入数据源 |
| Write() | 向流中写入文本 |
| WriteLine() | 向流中写入一行文本，并自动追加一个换行符 |

Write()方法有多种重载形式：

示例1：写入一个字符
```csharp
char chr1 = 'A';
sw.Write(chr1);
```

示例2：写入一个字符串
```csharp
string str1 = "Welcome to HeBei";
sw.Write(str1);
```

示例3：写入一个字符数组
```csharp
char[] charray = new char[10];
for (int i = 1; i < 10; i++)
    charray[i] = char.Parse(i.ToString());
sw.Write(charray);
```

示例4：写入字符数组的一部分
```csharp
sw.Write(charray, 4, 5);  // 写入从第4个元素开始的5个数据
```

### 5. 使用BinaryReader和BinaryWriter类读写二进制文件

FileStream类主要用于二进制文件的读写，但在读写这些数据前需要将非二进制数据转为二进制数组才能进行读写。为了更方便读写二进制文件，C#.NET引入了 `BinaryReader` 类和 `BinaryWriter` 类。与StreamReader类和StreamWriter类不同，BinaryReader类和BinaryWriter类创建对象时不能使用文件而是使用文件流，即在FileStream的基础上才能创建对象。

示例：
```csharp
FileStream fs = new FileStream("D:\\Test\\test.txt", FileMode.Create);
BinaryReader br = new BinaryReader(fs);
// 或
BinaryWriter bw = new BinaryWriter(fs);
```

#### （1）使用BinaryWriter类写二进制文件

创建了BinaryWriter对象后，就可以使用BinaryWriter类的方法 `Write()` 将各类数据直接写入二进制文件而不需要进行数据类型的转化。常用的Write()方法见表10-3。

表10-3 常用的Write()方法及说明

| 方法 | 说明 |
|---|---|
| `Write(char[], int, int)` | 将字符数组部分写入当前流，并根据所使用的Encoding，提升流的当前位置 |
| `Write(byte[], int, int)` | 将字节数组区域写入当前流 |
| `Write(uint)` | 将4字节无符号整数写入当前流，并将流的位置提升4个字节 |
| `Write(string)` | 将有长度前缀的字符串按BinaryWriter的当前编码写入此流 |
| `Write(float)` | 将4字节浮点值写入当前流，并将流的位置提升4个字节 |
| `Write(char[])` | 将字符数组写入当前流 |
| `Write(double)` | 将8字节浮点值写入当前流，并将流的位置提升8个字节 |
| `Write(bool)` | 将单字节Boolean值写入当前流，其中0表示false，1表示true |

示例：使用BinaryWriter类的Write()方法将一个字符串写入D盘Test文件夹下的testbw.txt文件中。
```csharp
FileStream fs = new FileStream("D:\\test\\testbw.txt", FileMode.CreateNew, FileAccess.Write);
BinaryWriter bw = new BinaryWriter(fs);
string str1 = "we are students";
bw.Write(str1);
bw.Close();
fs.Close();
```

#### Seek方法

为了在指定位置写入指定的字节或数据，还可以使用Seek方法进行定位。

格式：`public virtual long Seek(int offset, SeekOrigin origin)`

说明：
- `offset`：相对于origin的偏移量
- `origin`：指示获取新位置所依据的参考点
  - `SeekOrigin.Begin`：相对文件流的开始
  - `SeekOrigin.Current`：当前位置
  - `SeekOrigin.End`：相对于文件流的末尾

可以使用 `Position` 属性来获取流中的读写位置。

#### （2）使用BinaryReader类读取二进制文件

BinaryReader用特定的编码将基本数据类型读作二进制值。在创建了BinaryReader对象后，可以使用其方法来读取不同类型的数据，其常用方法及说明见表10-4。

表10-4 BinaryReader类常用方法及说明

| 方法 | 说明 |
|---|---|
| PeekChar | 返回下一个可用的字符，并且不提升字节或字符的位置 |
| Read | 从基础流中读取字符，并使该流的当前位置提升一个字节 |
| ReadBoolean | 从当前流中读取Boolean值，并使该流的当前位置提升一个字节 |
| ReadByte | 从当前流中读取下一个字节，并使该流的当前位置提升一个字节 |
| ReadBytes | 从当前流中将count个字节读入字节数组，并使当前位置提升count个字节 |
| ReadChar | 从当前流中读取下一个字符 |
| ReadChars | 从当前流中读取count个字符，以字符数组的形式返回数据 |
| ReadInt32 | 从当前流中读取4个字节（有符号整数），并使该流的当前位置提升4个字节 |
| ReadString | 从当前流中读取一个字符串 |

示例：使用BinaryReader类中的ReadChar()方法将D盘Test文件夹下的testbw.txt文件中的内容读出来并显示到控制台显示窗口。
```csharp
FileStream fs = new FileStream("D:\\test\\testbw.txt", FileMode.Open, FileAccess.Read);
BinaryReader br = new BinaryReader(fs);
string str1;
char chr1;
chr1 = br.ReadChar();
str1 = chr1.ToString();
for (int i = 1; i < fs.Length; i++)
{
    chr1 = br.ReadChar();
    str1 += chr1.ToString();
}
Console.Write(str1);
Console.ReadLine();
br.Close();
fs.Close();
```

使用BinaryReader类没有Seek方法，但BinaryReader类根植于FileStream类，可以使用FileStream类中的Seek方法来定位读取位置从而实现随机读取文件的效果。无论读取文件流还是写入文件流，在使用完毕后都要使用Close方法关闭文件流。

### 6. 文件读写综合示例（FileReadAndWrite项目）

启动Microsoft Visual Studio 2010并创建一个Windows窗体应用程序，项目名称为"FileReadAndWrite.sln"。设计一个包含一个文本框、四个命令按钮、一个打开对话框和一个另存为对话框的窗体。四个按钮分别为：写文件、读文件、打开文件、另存为。

完整代码：
```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.IO;

namespace WindowsFormsApplication6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        // button1：写二进制文件
        private void button1_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == String.Empty)
            {
                MessageBox.Show("要写入的文件内容不能为空");
            }
            else
            {
                saveFileDialog1.Filter = "二进制文件 (*.dat)|*.dat";
                if (saveFileDialog1.ShowDialog() == DialogResult.OK)
                {
                    // 使用"另存为"对话框中选择的文件名实例化FileStream对象
                    FileStream myStream = new FileStream(saveFileDialog1.FileName, FileMode.OpenOrCreate, FileAccess.ReadWrite);
                    // 使用FileStream对象实例化BinaryWriter二进制写入流对象
                    BinaryWriter myWrite = new BinaryWriter(myStream);
                    myWrite.Write(textBox1.Text);  // 以二进制方式创建的文件中写入内容
                    myWrite.Close();  // 关闭二进制写入流
                    myStream.Close();  // 关闭当前文件流
                    textBox1.Text = String.Empty;
                }
            }
        }

        // button2：读二进制文件
        private void button2_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "二进制文件 (*.dat)|*.dat";  // 设置打开文件的格式
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                textBox1.Text = String.Empty;
                // 使用"打开"对话框中选择的文件名实例化FileStream对象
                FileStream myStream = new FileStream(openFileDialog1.FileName, FileMode.Open, FileAccess.Read);
                // 使用FileStream对象实例化BinaryReader二进制读取流对象
                BinaryReader myRead = new BinaryReader(myStream);
                myStream.Seek(0, SeekOrigin.Begin);
                string st;
                string st2;
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < myStream.Length; i++)
                {
                    st = myRead.ReadChar().ToString();
                    sb.Append(st);
                }
                st2 = sb.ToString();
                textBox1.Text = st2;
                myRead.Close();
                myStream.Close();
            }
        }

        // button3：写文本文件
        private void button3_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == String.Empty)
            {
                MessageBox.Show("要写入的文件内容不能为空");
            }
            else
            {
                saveFileDialog1.Filter = "文本文件 (*.txt)|*.txt";
                if (saveFileDialog1.ShowDialog() == DialogResult.OK)
                {
                    FileStream fs = new FileStream(saveFileDialog1.FileName, FileMode.Create, FileAccess.Write);
                    StreamWriter txtwrite = new StreamWriter(fs, Encoding.UTF8);
                    string str1 = textBox1.Text;
                    txtwrite.Write(str1);
                    txtwrite.Close();
                    fs.Close();
                    textBox1.Text = string.Empty;
                }
            }
        }

        // button4：读文本文件
        private void button4_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "文本文件 (*.txt)|*.txt";  // 设置打开文件的格式
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                StreamReader txtread = new StreamReader(openFileDialog1.FileName, Encoding.UTF8);
                string str1;
                do
                {
                    str1 = txtread.ReadLine();
                    textBox1.Text += str1;
                } while (str1 != null);
                txtread.Close();
            }
        }
    }
}
```

### 7. 各类读写方式总结

| 类 | 使用场景 | 读写单位 | 是否需要文件流 |
|---|---|---|---|
| FileStream | 二进制文件读写 | 字节 | 否（自身就是流） |
| StreamReader | 文本文件读取 | 字符/行 | 可直接传文件名或FileStream |
| StreamWriter | 文本文件写入 | 字符/行 | 可直接传文件名或FileStream |
| BinaryReader | 二进制文件读取 | 基本数据类型 | 需要FileStream |
| BinaryWriter | 二进制文件写入 | 基本数据类型 | 需要FileStream |
