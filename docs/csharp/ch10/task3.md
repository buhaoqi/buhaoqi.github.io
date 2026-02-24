---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 读写文件   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 读写文件   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---

## 一、“流”是什么
**流（Stream）** 就是**数据在程序和外部设备之间传输的通道**。
- 可以把流想象成**“水管”**：
  - 数据 = 水
  - 程序 = 水池
  - 文件/网络/硬盘 = 另一个水池
- 流的作用：**读数据、写数据、传输数据**。
- 本质：**连续的字节序列**。


## 二、“流”的分类
1. **按方向分**
   - 输入流：从外部 → 程序（读）
   - 输出流：从程序 → 外部（写）

2. **按操作对象分**
   - 文件流（FileStream）：操作文件
   - 内存流（MemoryStream）：操作内存
   - 网络流（NetworkStream）：操作网络

3. **按数据类型分**
   - 字节流：以**字节**为单位（FileStream）
   - 字符流：以**字符**为单位（StreamReader/StreamWriter）


## 三、FileStream 类是什么
FileStream 是 C# 中**以字节为单位操作文件的流类**，位于 `System.IO`。

作用：
- 读取文件字节
- 写入文件字节
- 对文件进行**低级、底层**的读写（图片、视频、文本都能用）

特点：
- **字节流**
- 操作大文件、二进制文件最常用
- 需要手动控制字节数组、缓冲区

想象一下，你要用一个水管给花园浇水。

- **文件**就是你的**水桶**（数据存储的地方）。
- **FileStream**就是那根**水管**。
- **数据**就是**水**。

`FileStream` 就是一个“数据流”，它负责在你的程序（内存）和硬盘上的文件之间建立一条通道，让数据可以像水流一样持续地、顺序地读写。

- `FileStream`是`System.IO`命名空间下的字节流类，用于以字节为单位读写文件；
- 使用前需引入命名空间：`using System.IO;`；
- 所有示例均使用`using`块管理`FileStream`资源，避免文件句柄泄漏；
- 字节操作需注意编码（如UTF-8），文本内容需转换为字节数组后读写。


## 四、如何使用 FileStream 类
### 1. 引用命名空间
```csharp
using System.IO;
```

### 2. 创建 FileStream 对象（打开/创建文件）
```csharp
FileStream fs = new FileStream("文件路径", FileMode, FileAccess);
```

### 3. 读 / 写数据
- 读：`fs.Read(byte数组, 偏移, 长度)`
- 写：`fs.Write(byte数组, 偏移, 长度)`

### 4. 关闭并释放流
```csharp
fs.Close();
```
或用 `using` 自动释放（推荐）：
```csharp
using (FileStream fs = new FileStream(...))
{
    // 读写操作
}
```

## 五、FileMode 是什么
**FileMode 是枚举，用来指定文件打开/创建的方式。**

常用值：
- **Create**：创建新文件，存在则覆盖
- **CreateNew**：创建新文件，存在则报错
- **Open**：打开已存在文件，不存在报错
- **OpenOrCreate**：存在打开，不存在创建
- **Append**：打开文件并在末尾追加内容
- **Truncate**：打开文件并清空内容

## 六、FileAccess 是什么
**FileAccess 是枚举，指定对流的访问权限。**

三个值：
- **Read**：只读
- **Write**：只写
- **ReadWrite**：可读可写

## 总结

1. **流 = 数据传输通道**
2. 流分：输入/输出、字节/字符、文件/内存/网络
3. **FileStream = 字节操作文件的流**
4. 使用四步：引命名空间 → 创建对象 → 读写 → 关闭
5. **FileMode：怎么打开文件**
6. **FileAccess：对文件有什么权限（读/写/读写）**

## 构造函数

### **path + FileMode**

这是最基础、最常用的构造函数。

#### **语法：**

```csharp
FileStream(string path, FileMode mode)
// FileAccess.ReadWrite(默认值)
```

**参数解释：**

1. `string path`:

   - **是什么**：文件在磁盘上的位置，可以是绝对路径（如 `C:\MyFiles\test.txt`）或相对路径（如 `data.txt`，表示在程序运行目录下）。

   - **注意**：路径中的反斜杠`\`在C#字符串中是转义字符，所以要写两个`\\`或者使用`@`前缀。推荐使用`@`。

     ```csharp
     string goodPath1 = "C:\\MyFiles\\test.txt";
     string goodPath2 = @"C:\MyFiles\test.txt"; // 更清晰
     ```

2. `FileMode mode` **(这是一个枚举类型)**:

   - **是什么**：它告诉操作系统你**打算如何打开**这个文件。这是最关键的参数！
   - **常见选项**：
     - `FileMode.Create`：**创建新文件**。如果文件已存在，它会被**覆盖**（旧内容清空）。**“不管有没有，给我一个新的！”**
     - `FileMode.Open`：**打开已存在的文件**。如果文件不存在，则抛出 `FileNotFoundException` 异常。**“把那个已有的文件给我打开。”**
     - `FileMode.CreateNew`：**创建新文件**。如果文件已存在，则抛出异常。**“我要创建一个全新的，不能有重名的！”**
     - `FileMode.Append`：**打开文件并移动到末尾**，准备添加数据。如果文件不存在，会**创建**一个新文件。**“我要在文件后面接着写。”**

#### 示例：写入0-9

```csharp
FileStream fs = new FileStream("/users/buhaoqi/aaa/fs2.txt",FileMode.Create,FileAccess.Write);

for(byte i = 0; i < 10; i++){
  fs.WriteByte((byte)(i + 48));
}
fs.Close();

// (byte)0 = 数值零 = 空字符 = 看不见
// (byte)'0' = 字符零 = ASCII 48 = 看得见的'0'

FileStream fs = new FileStream("/users/buhaoqi/aaa/fs2.txt",FileMode.Create,FileAccess.Write);
        
for(int i = 0; i < 10; i++){
    fs.WriteByte((byte)('0' +i));
}
fs.Close();
```

#### 示例：写入26个字母

```csharp
FileStream fs = new FileStream("/users/buhaoqi/aaa/fs1.txt",FileMode.Create);

Byte[] byteArray = new Byte[26];
for(int i = 0; i < 26; i++)
{
    byteArray[i] = (byte) (65 + i);
}
//数据写入内存缓冲区
fs.Write(byteArray,0,26);
//缓冲区数据强制写入磁盘 
fs.Close();
```

#### 用法示例 1：创建并写入新文件

```csharp
using System;
using System.IO;
using System.Text;

class Program
{
    static void Main()
    {
        string filePath = @"C:\Temp\myfile.txt";

        // 使用 using 语句非常重要！它能确保流被正确关闭和释放资源。
        FileStream fs = new FileStream(filePath, FileMode.Create);
        
        string text = "Hello, FileStream World!";
        // 将字符串转换为字节数组
        byte[] data = Encoding.UTF8.GetBytes(text);
        // 将字节数组写入文件流
        fs.Write(data, 0, data.Length);
        Console.WriteLine("文件已创建并写入！");
        
      	fs.Close();

        Console.ReadLine();
    }
}
```

#### 用法示例 2：打开并读取已存在文件

```csharp
using System;
using System.IO;
using System.Text;

class Program
{
    static void Main()
    {
        string filePath = @"C:\Temp\myfile.txt";

        // 检查文件是否存在，避免 FileNotFoundException
        if (File.Exists(filePath))
        {
            using (FileStream fs = new FileStream(filePath, FileMode.Open))
            {
                // 准备一个字节数组来存放从文件读取的数据
                byte[] data = new byte[fs.Length]; // fs.Length 是文件的总字节数
                // 从流中读取数据，放入 data 数组
                int bytesRead = fs.Read(data, 0, data.Length);
                // 将字节数组转换回字符串
                string text = Encoding.UTF8.GetString(data, 0, bytesRead);
                Console.WriteLine($"文件内容是：{text}");
            }
        }
        else
        {
            Console.WriteLine("文件不存在！");
        }

        Console.ReadLine();
    }
}
```
### FileMode + FileAccess

指定路径、模式和访问方式 

这个构造函数在第一个的基础上增加了更精细的控制：**你不仅可以决定如何打开文件，还能决定用这个文件来做什么（只读、只写、读写）。**

**语法：**

```csharp
FileStream(string path, FileMode mode, FileAccess access)
```

**新增参数解释：**

- `FileAccess access` **(这是一个枚举类型)**:
  - **是什么**：它规定了你的程序对文件的**访问权限**。在多线程或需要安全控制的场景下非常有用。
  - **常见选项**：
    - `FileAccess.Read`：**只读**。你可以读取文件，但不能修改它。
    - `FileAccess.Write`：**只写**。你可以向文件写入数据，但不能读取它。
    - `FileAccess.ReadWrite`：**可读可写**。这是最灵活的选项。

#### 用法示例：以只读方式打开文件

这个例子在你只想读取文件并防止意外修改时非常有用。

```csharp
using System;
using System.IO;
using System.Text;

class Program
{
    static void Main()
    {
        string filePath = @"C:\Temp\myfile.txt";

        if (File.Exists(filePath))
        {
            // 明确指定以只读方式打开
            using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, data.Length);
                string text = Encoding.UTF8.GetString(data);
                Console.WriteLine($"文件内容是：{text}");

                // 如果你尝试在这里写入，编译器会报错！
                // fs.Write(...); // 这行代码会编译失败
            }
        }
        else
        {
            Console.WriteLine("文件不存在！");
        }

        Console.ReadLine();
    }
}
```

------

### **关键要点与最佳实践**

1. **务必使用** `using` **语句**：
   - `FileStream` 使用了非托管资源（如文件句柄）。`using` 语句能确保即使在发生异常的情况下，流也能被正确关闭和释放，避免资源泄漏。这是**极其重要**的习惯！
2. **理解组合效果**：
   - 不同的 `FileMode` 和 `FileAccess` 组合有不同的效果。例如：
     - `FileMode.Open` + `FileAccess.Write`：打开一个已存在的文件准备修改。
     - `FileMode.Create` + `FileAccess.Read`：这没什么意义，因为你创建了一个新文件却只想读它（内容是空的）。
3. **处理异常**：
   - 文件操作很容易出错（文件不存在、没有权限等）。一定要使用 `try-catch` 块来捕获和处理可能的异常（如 `FileNotFoundException`, `UnauthorizedAccessException`）。
4. **对于简单任务，有更简单的工具**：
   - 如果你只是读写一些文本，`File.WriteAllText` 和 `File.ReadAllText` 等方法更简单。
   - 但 `FileStream` 给你提供了最根本、最强大的控制能力，适用于处理大文件、二进制文件或需要特定读写模式的场景。

### **总结对比表**

| **构造函数**                     | **特点**               | **适用场景**                                         |
| :------------------------------- | :--------------------- | :--------------------------------------------------- |
| `FileStream(path, mode)`         | 基础，自动获得读写权限 | 大多数简单的文件创建、覆盖、读取场景                 |
| `FileStream(path, mode, access)` | 精细控制访问权限       | 需要明确限制为只读或只写，提高代码安全性和意图清晰度 |

**给初学者的练习建议：**

1. 创建一个控制台程序。
2. 分别使用 `FileMode.Create` 和 `FileMode.Append` 向同一个文件写入文字，观察区别。
3. 尝试用 `FileMode.Open` 和 `FileAccess.Read` 去打开一个不存在的文件，看看会发生什么，然后学会用 `File.Exists` 或 `try-catch` 来处理它。

通过以上讲解和练习，你一定能牢固掌握这两种最常见的 `FileStream` 构造函数的用法！


## FileStream.WriteByte()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 向`FileStream`当前位置写入**单个字节**的数据；写入后流的位置自动后移1个字节；若流为只读模式，抛`NotSupportedException`。 |
| **语法**   | `fs.WriteByte(byte value)`（`fs`为`FileStream`实例）                  |
| **参数**   | value：`byte`类型，要写入的单个字节（取值范围0~255）。                |
| **返回值** | 无（void）。                                                         |

代码示例（FileStream.WriteByte()）
```csharp
using System;
using System.IO;

class FileStreamWriteByteDemo
{
    static void Main()
    {
        // 1. 创建FileStream（可写模式打开/创建文件）
        string filePath = "writebyte_demo.txt";
        using (FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
        {
            // 2. 逐个写入字节（对应ASCII码：H(72)、e(101)、l(108)、l(108)、o(111)）
            fs.WriteByte(72);   // H
            fs.WriteByte(101);  // e
            fs.WriteByte(108);  // l
            fs.WriteByte(108);  // l
            fs.WriteByte(111);  // o

            Console.WriteLine("单个字节写入完成");
        }

        // 验证写入结果（读取文件内容）
        string content = File.ReadAllText(filePath);
        Console.WriteLine($"文件内容：{content}"); // 输出：Hello
    }
}
```
**输出结果**：
```
单个字节写入完成
文件内容：Hello
```

---

##  `FileStream.Write()`
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 向`FileStream`当前位置写入**字节数组的指定片段**；写入后流位置自动后移写入的字节数；是最常用的批量写方法。 |
| **语法**   | `fs.Write(byte[] buffer, int offset, int count)`                     |
| **参数**   | - buffer：`byte[]`类型，要写入的字节数组；<br />- offset：`int`类型，从buffer的第几个字节开始读取（起始索引，0开始）；<br />- count：`int`类型，要写入的字节数。 |
| **返回值** | 无（void）。                                                         |

代码示例（FileStream.Write()）
```csharp
using System;
using System.IO;
using System.Text;

class FileStreamWriteDemo
{
    static void Main()
    {
        string filePath = "write_demo.txt";
        // 1. 准备要写入的文本内容（转换为UTF-8字节数组）
        string content = "FileStream.Write() 批量写入测试";
        byte[] buffer = Encoding.UTF8.GetBytes(content);

        // 2. 写入字节数组（批量写）
        using (FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
        {
            // 从buffer索引0开始，写入全部字节
            fs.Write(buffer, 0, buffer.Length);
            Console.WriteLine("批量字节写入完成");
        }

        // 验证结果
        string readContent = File.ReadAllText(filePath, Encoding.UTF8);
        Console.WriteLine($"文件内容：{readContent}"); // 输出：FileStream.Write() 批量写入测试
    }
}
```
**输出结果**：
```
批量字节写入完成
文件内容：FileStream.Write() 批量写入测试
```

---

##  FileStream.ReadByte()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 从`FileStream`当前位置读取**单个字节**；读取后流位置自动后移1个字节；若已到文件末尾，返回`-1`；若流为只写模式，抛`NotSupportedException`。 |
| **语法**   | `fs.ReadByte()`（返回值需接收为`int`类型）                           |
| **参数**   | 无。                                                                 |
| **返回值** | `int`类型：<br />- 成功：读取到的字节值（0~255）；<br />- 失败（文件末尾）：-1。 |

代码示例（FileStream.ReadByte()）
```csharp
using System;
using System.IO;

class FileStreamReadByteDemo
{
    static void Main()
    {
        // 1. 先创建测试文件
        string filePath = "readbyte_demo.txt";
        File.WriteAllText(filePath, "ABC"); // 对应ASCII码：A(65)、B(66)、C(67)

        // 2. 逐个读取字节
        using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
        {
            int byteValue;
            Console.WriteLine("逐个读取字节：");
            // 循环读取，直到返回-1（文件末尾）
            while ((byteValue = fs.ReadByte()) != -1)
            {
                Console.WriteLine($"字节值：{byteValue}，对应字符：{(char)byteValue}");
            }
        }
    }
}
```
**输出结果**：
```
逐个读取字节：
字节值：65，对应字符：A
字节值：66，对应字符：B
字节值：67，对应字符：C
```

---

##  FileStream.Read()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 从`FileStream`当前位置读取**批量字节**到指定的字节数组中；读取后流位置自动后移实际读取的字节数；是最常用的批量读方法。 |
| **语法**   | `fs.Read(byte[] buffer, int offset, int count)`                     |
| **参数**   | - buffer：`byte[]`类型，用于存储读取到的字节的数组；<br />- offset：`int`类型，从buffer的第几个索引开始存储（0开始）；<br />- count：`int`类型，期望读取的最大字节数。 |
| **返回值** | `int`类型：<br />- 成功：实际读取到的字节数；<br />- 失败（文件末尾）：0。 |

代码示例（FileStream.Read()）
```csharp
using System;
using System.IO;
using System.Text;

class FileStreamReadDemo
{
    static void Main()
    {
        // 1. 先创建测试文件（写入中文内容）
        string filePath = "read_demo.txt";
        string content = "FileStream.Read() 读取中文测试：你好";
        File.WriteAllText(filePath, content, Encoding.UTF8);

        // 2. 批量读取字节
        using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
        {
            // 定义缓冲区（大小1024字节，足够存储文件内容）
            byte[] buffer = new byte[1024];
            // 从buffer索引0开始，最多读取1024字节
            int readBytes = fs.Read(buffer, 0, buffer.Length);

            // 3. 将字节数组转换为字符串（UTF-8编码）
            string readContent = Encoding.UTF8.GetString(buffer, 0, readBytes);
            Console.WriteLine($"实际读取字节数：{readBytes}");
            Console.WriteLine($"读取的内容：{readContent}");
        }
    }
}
```
**输出结果**：
```
实际读取字节数：43
读取的内容：FileStream.Read() 读取中文测试：你好
```


## 总结（核心关键点）
1. **单字节 vs 多字节**：
   - `WriteByte()`/`ReadByte()`：操作单个字节，适合逐字节处理（如二进制文件）；
   - `Write()`/`Read()`：批量操作字节数组，适合文本/大文件（效率更高）；
2. **返回值规则**：
   - `ReadByte()`返回`int`（0~255或-1），需判断-1表示文件末尾；
   - `Read()`返回实际读取字节数，0表示文件末尾；
3. **流位置**：读写操作后流的位置自动后移，可通过`fs.Position`手动调整位置；
4. **编码注意**：文本内容读写需统一编码（如UTF-8），避免乱码；
5. **资源释放**：必须通过`using`块/`Close()`释放`FileStream`，否则文件会被占用。





非常好！我们来补充这两个重要的 `FileMode` 枚举成员，并且按照您的要求不使用 `using` 语句。

## **补充知识点：FileMode.OpenOrCreate 和 FileMode.Truncate**

### **重要提醒：不使用 using 时的资源管理**

当不使用 `using` 语句时，**必须手动管理 FileStream 的资源**，否则会导致资源泄漏。最佳实践是在 `finally` 块中或使用 `try-catch-finally` 来确保流被关闭。

------

### **知识点一：FileMode.OpenOrCreate - "安全的打开方式"**

**核心概念**：文件存在就打开，不存在就创建。

#### 基本用法：

```csharp
string filePath = @"C:\Temp\test.txt";
FileStream fs = null;

try
{
    // 创建或打开文件
    fs = new FileStream(filePath, FileMode.OpenOrCreate);
    
    // 检查文件是否为新创建的
    if (fs.Length == 0)
    {
        Console.WriteLine("创建了新文件");
        string content = "这是新文件的初始内容";
        byte[] data = Encoding.UTF8.GetBytes(content);
        fs.Write(data, 0, data.Length);
    }
    else
    {
        Console.WriteLine("打开了已存在的文件");
        // 读取现有内容
        byte[] buffer = new byte[fs.Length];
        fs.Read(buffer, 0, buffer.Length);
        string existingContent = Encoding.UTF8.GetString(buffer);
        Console.WriteLine($"现有内容：{existingContent}");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"操作失败：{ex.Message}");
}
finally
{
    // 手动关闭流
    if (fs != null)
    {
        fs.Close();
        fs.Dispose(); // 显式释放资源
        Console.WriteLine("文件流已关闭");
    }
}
```

#### 追加内容到文件的例子：

```csharp
FileStream fs = null;
try
{
    fs = new FileStream(@"C:\Temp\log.txt", FileMode.OpenOrCreate);
    
    // 移动到文件末尾
    fs.Seek(0, SeekOrigin.End);
    
    string logEntry = $"[{DateTime.Now}] 用户登录\n";
    byte[] data = Encoding.UTF8.GetBytes(logEntry);
    fs.Write(data, 0, data.Length);
    
    Console.WriteLine("日志条目已追加");
}
catch (IOException ioEx)
{
    Console.WriteLine($"IO错误：{ioEx.Message}");
}
catch (UnauthorizedAccessException authEx)
{
    Console.WriteLine($"权限错误：{authEx.Message}");
}
finally
{
    if (fs != null)
    {
        fs.Close();
    }
}
```

------

### **知识点二：FileMode.Truncate - "清空重来"**

**核心概念**：打开现有文件并立即清空所有内容（截断为0字节）。

#### 基本用法：

```csharp
string filePath = @"C:\Temp\data.bin";
FileStream fs = null;

try
{
    // 只有在文件存在时才使用 Truncate
    if (File.Exists(filePath))
    {
        fs = new FileStream(filePath, FileMode.Truncate);
        Console.WriteLine("文件已清空，准备写入新内容");
        
        // 写入新数据
        byte[] newData = { 0x01, 0x02, 0x03, 0x04 };
        fs.Write(newData, 0, newData.Length);
        Console.WriteLine("新数据已写入");
    }
    else
    {
        Console.WriteLine("文件不存在，无法使用 Truncate");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"错误：{ex.Message}");
}
finally
{
    if (fs != null)
    {
        fs.Close();
    }
}
```

#### 更安全的 Truncate 用法：

```csharp
FileStream fs = null;
try
{
    string path = @"C:\Temp\important.txt";
    
    // 安全措施：确认后再清空重要文件
    if (File.Exists(path))
    {
        FileInfo fileInfo = new FileInfo(path);
        Console.WriteLine($"即将清空文件：{fileInfo.Name}，大小：{fileInfo.Length} 字节");
        
        Console.Write("确认清空吗？(y/n): ");
        string confirmation = Console.ReadLine();
        
        if (confirmation?.ToLower() == "y")
        {
            fs = new FileStream(path, FileMode.Truncate);
            Console.WriteLine("文件已清空");
            
            // 可以立即写入新内容
            string newContent = "文件已被重置\n";
            byte[] data = Encoding.UTF8.GetBytes(newContent);
            fs.Write(data, 0, data.Length);
        }
        else
        {
            Console.WriteLine("操作已取消");
        }
    }
}
finally
{
    if (fs != null)
    {
        fs.Close();
        Console.WriteLine("资源已释放");
    }
}
```

------

### **关键要点总结**

#### FileMode.OpenOrCreate 特点：

- ✅ **最安全**：永远不会因文件不存在而抛出异常
- ✅ **保持内容**：如果文件存在，原有内容保留
- 📍 **文件位置**：默认在文件开头，可用 `Seek()` 移动到末尾

#### FileMode.Truncate 特点：

- ⚠️ **文件必须存在**：否则会抛出 `FileNotFoundException`
- 🗑️ **立即清空**：打开时文件大小立即变为0字节
- 🔄 **重新开始**：适合需要完全重置文件的场景

#### 手动资源管理要点：

1. **总是关闭流**：在 `finally` 块中调用 `Close()`
2. **显式释放资源**：调用 `Dispose()` 确保资源完全释放
3. **异常处理**：使用 `try-catch` 处理可能的IO异常
4. **空值检查**：在关闭前检查流是否为 `null`

这种手动管理的方式虽然更繁琐，但能帮助初学者更好地理解资源管理的原理！


```csharp
string fileName = "/users/buhaoqi/aaa/aaaaaaa.txt";
FileInfo myFile = new FileInfo(fileName);
FileStream fs = myFile.Create(); 
从用途上，myFile和fs的区别是什么
```



从用途上来说，`myFile` 和 `fs` 有本质的区别：

## **FileInfo 对象 (myFile)**

- **用途**：文件**信息**的容器，用于获取和操作文件的**元数据**
- **功能**：
  - 获取文件属性（创建时间、修改时间、大小等）
  - 检查文件是否存在、是只读还是隐藏等
  - 管理文件（移动、删除、重命名）
  - 创建文件流，但不包含文件内容本身

```csharp
// myFile 主要用于获取文件信息
Console.WriteLine($"文件大小: {myFile.Length} 字节");
Console.WriteLine($"创建时间: {myFile.CreationTime}");
Console.WriteLine($"文件路径: {myFile.FullName}");
Console.WriteLine($"是否只读: {myFile.IsReadOnly}");
```

## **FileStream 对象 (fs)**

- **用途**：文件**内容**的通道，用于读写文件的**实际数据**
- **功能**：
  - 读取文件内容
  - 写入数据到文件
  - 控制文件访问方式（读、写、追加等）
  - 管理文件指针位置

```csharp
// fs 主要用于读写文件内容
string content = "Hello World";
byte[] data = Encoding.UTF8.GetBytes(content);
fs.Write(data, 0, data.Length);  // 写入实际内容
fs.Close();  // 必须关闭流
```

## **实际应用场景对比：**

```csharp
string fileName = "/users/buhaoqi/aaa/aaaaaaa.txt";
FileInfo myFile = new FileInfo(fileName);

// 场景1：只需要文件信息（使用 myFile）
if (myFile.Exists)
{
    Console.WriteLine($"文件大小: {myFile.Length}");
    Console.WriteLine($"最后修改: {myFile.LastWriteTime}");
    // 这里不需要 fs
}

// 场景2：需要读写文件内容（使用 fs）
FileStream fs = myFile.Create();  // 创建文件并获取流
// 或者
FileStream fs = myFile.OpenRead();  // 打开文件用于读取
// 或者  
FileStream fs = myFile.OpenWrite(); // 打开文件用于写入
```

## **重要提醒：**

在你的代码中，调用 `myFile.Create()` 会**创建或覆盖**文件，并返回 FileStream。创建后**必须记得关闭流**：

```csharp
FileStream fs = myFile.Create();
// ... 操作文件内容 ...
fs.Close();  // 重要！释放文件锁
// 或者使用 using 语句自动关闭
using (FileStream fs = myFile.Create())
{
    // ... 操作文件内容 ...
}  // 这里自动关闭流
```

**总结**：`myFile` 是文件的"身份证"，`fs` 是文件的"操作通道"。


## 通过简单示例介绍 FileStream 的 ReadByte 和 Read 方法。

## **📝 ReadByte 方法**

### **语法：**

```csharp
int ReadByte()
```

### **示例1：读取单个字节**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("test.txt", FileMode.Open);
    
    // 读取第一个字节
    int firstByte = fs.ReadByte();
    Console.WriteLine($"第一个字节: {firstByte} (字符: {(char)firstByte})");
    
    // 读取第二个字节
    int secondByte = fs.ReadByte();
    Console.WriteLine($"第二个字节: {secondByte} (字符: {(char)secondByte})");
}
finally
{
    if (fs != null) fs.Close();
}
```

### **示例2：读取整个文件（逐个字节）**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("data.txt", FileMode.Open);
    
    int byteValue;
    int position = 0;
    
    Console.WriteLine("文件内容:");
    // ReadByte() 到达文件末尾时返回 -1
    while ((byteValue = fs.ReadByte()) != -1)
    {
        Console.WriteLine($"位置{position}: 字节值={byteValue}, 字符={(char)byteValue}");
        position++;
    }
}
finally
{
    if (fs != null) fs.Close();
}
```

## **📝 Read 方法**

### **语法：**

```csharp
int Read(byte[] buffer, int offset, int count)
```

### **示例3：读取固定大小的数据块**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("file.txt", FileMode.Open);
    
    // 创建缓冲区（5个字节）
    byte[] buffer = new byte[5];
    
    // 读取数据：从buffer索引0开始，最多读取5个字节
    int bytesRead = fs.Read(buffer, 0, 5);
    
    Console.WriteLine($"实际读取了 {bytesRead} 个字节");
    Console.WriteLine($"内容: {System.Text.Encoding.UTF8.GetString(buffer, 0, bytesRead)}");
}
finally
{
    if (fs != null) fs.Close();
}
```

### **示例4：循环读取大文件**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("largefile.txt", FileMode.Open);
    
    byte[] buffer = new byte[1024];  // 1KB 缓冲区
    int totalBytesRead = 0;
    int chunkCount = 0;
    
    int bytesRead;
    while ((bytesRead = fs.Read(buffer, 0, buffer.Length)) > 0)
    {
        chunkCount++;
        totalBytesRead += bytesRead;
        
        string chunkContent = System.Text.Encoding.UTF8.GetString(buffer, 0, bytesRead);
        Console.WriteLine($"块{chunkCount}: 读取{bytesRead}字节, 内容: {chunkContent}");
    }
    
    Console.WriteLine($"总共读取: {totalBytesRead} 字节, {chunkCount} 个数据块");
}
finally
{
    if (fs != null) fs.Close();
}
```

### **示例5：读取到缓冲区的指定位置**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("data.bin", FileMode.Open);
    
    byte[] buffer = new byte[10];  // 10字节缓冲区
    
    // 先填充一些初始数据
    buffer[0] = (byte)'X';
    buffer[1] = (byte)'Y';
    
    // 从缓冲区的索引2开始读取（保留前2个字节）
    int bytesRead = fs.Read(buffer, 2, 5);
    
    Console.WriteLine("缓冲区内容:");
    for (int i = 0; i < buffer.Length; i++)
    {
        Console.WriteLine($"  [{i}] = {buffer[i]} ({(char)buffer[i]})");
    }
}
finally
{
    if (fs != null) fs.Close();
}
```

## **🔄 对比练习**

### **示例6：ReadByte vs Read 性能对比**

```csharp
FileStream fs1 = null;
FileStream fs2 = null;
try
{
    // 准备测试文件
    FileStream fsWrite = new FileStream("test_data.txt", FileMode.Create);
    byte[] testData = new byte[100];
    for (int i = 0; i < 100; i++) testData[i] = (byte)('A' + (i % 26));
    fsWrite.Write(testData, 0, testData.Length);
    fsWrite.Close();
    
    // 方法1：使用 ReadByte（逐个读取）
    fs1 = new FileStream("test_data.txt", FileMode.Open);
    System.Diagnostics.Stopwatch sw1 = new System.Diagnostics.Stopwatch();
    sw1.Start();
    
    int byteValue;
    while ((byteValue = fs1.ReadByte()) != -1)
    {
        // 逐个处理字节
    }
    sw1.Stop();
    
    // 方法2：使用 Read（批量读取）
    fs2 = new FileStream("test_data.txt", FileMode.Open);
    System.Diagnostics.Stopwatch sw2 = new System.Diagnostics.Stopwatch();
    sw2.Start();
    
    byte[] buffer = new byte[100];
    int bytesRead;
    while ((bytesRead = fs2.Read(buffer, 0, buffer.Length)) > 0)
    {
        // 批量处理字节
    }
    sw2.Stop();
    
    Console.WriteLine($"ReadByte 耗时: {sw1.ElapsedMilliseconds}ms");
    Console.WriteLine($"Read 耗时: {sw2.ElapsedMilliseconds}ms");
}
finally
{
    if (fs1 != null) fs1.Close();
    if (fs2 != null) fs2.Close();
}
```

### **示例7：文件复制功能**

```csharp
FileStream sourceFs = null;
FileStream destFs = null;
try
{
    sourceFs = new FileStream("source.txt", FileMode.Open);
    destFs = new FileStream("copy.txt", FileMode.Create);
    
    byte[] buffer = new byte[4096];  // 4KB 缓冲区
    int bytesRead;
    int totalCopied = 0;
    
    while ((bytesRead = sourceFs.Read(buffer, 0, buffer.Length)) > 0)
    {
        destFs.Write(buffer, 0, bytesRead);
        totalCopied += bytesRead;
        Console.WriteLine($"已复制 {bytesRead} 字节，总计 {totalCopied} 字节");
    }
    
    Console.WriteLine("文件复制完成！");
}
finally
{
    if (sourceFs != null) sourceFs.Close();
    if (destFs != null) destFs.Close();
}
```

## **🎯 方法总结**

| **方法**     | **返回值**              | **适用场景** | **特点**         |
| ------------ | ----------------------- | ------------ | ---------------- |
| **ReadByte** | `int`（字节值或-1）     | 逐个字节读取 | 简单，适合小文件 |
| **Read**     | `int`（实际读取字节数） | 批量读取     | 高效，适合大文件 |

## **💡 重要注意事项**

1. **ReadByte 返回值**：成功返回 0-255，文件末尾返回 -1
2. **Read 返回值**：返回实际读取的字节数，可能小于请求的数量
3. **文件位置**：每次读取后文件指针会自动移动
4. **异常处理**：文件不存在时会抛出异常

## **🔧 错误处理示例**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("nonexistent.txt", FileMode.Open);
    // 读取操作...
}
catch (System.IO.FileNotFoundException)
{
    Console.WriteLine("文件不存在！");
}
catch (System.Exception ex)
{
    Console.WriteLine($"读取错误: {ex.Message}");
}
finally
{
    if (fs != null) fs.Close();
}
```

这些示例展示了 FileStream 读取操作的基本用法，您可以根据实际需求选择合适的方法！

# FileStream.ReadByte() 简单示例

### `ReadByte()`

- **返回值**：`int`（读取的字节值，0-255，或 -1 表示文件结束）
- **用途**：读取单个字节
- **特点**：返回 `int` 而不是 `byte`，以便用 -1 表示文件结束

## **示例1：创建并读取一个简单文件**

```csharp
// 示例：创建文件
FileStream fs1 = new FileStream("simple.txt", FileMode.Create);

// 写入一些字节到文件
for (byte i = 65; i < 75; i++) // A-J 的ASCII码
{
    fs1.WriteByte(i);
}
fs1.Close();

// 现在读取这些字节
FileStream fs2 = new FileStream("simple.txt", FileMode.Open);

Console.WriteLine("文件内容：");
int b;
while ((b = fs2.ReadByte()) != -1)
{
    Console.Write($"{(char)b} "); // 显示为字符
}

fs2.Close();
```

## **示例2：统计文件中字母'A'出现的次数**

```csharp
FileStream fs = new FileStream("document.txt", FileMode.Open);

int countA = 0;
int currentByte;

while ((currentByte = fs.ReadByte()) != -1)
{
    // 检查是否是字母'A'（ASCII值65）
    if (currentByte == 65)
    {
        countA++;
    }
}

fs.Close();

Console.WriteLine($"文件中字母'A'出现了 {countA} 次");
```

## **关键点说明**

1. **ReadByte() 返回值**：

   - 返回 0-255：表示读取的字节值
   - 返回 -1：表示已到达文件末尾

2. **基本模式**：

   ```csharp
   int byteValue;
   while ((byteValue = fs.ReadByte()) != -1)
   {
       // 处理每个字节
   }
   ```

3. **重要提醒**：

   - 必须手动调用 `Close()` 方法关闭文件流
   - 使用 `try-catch-finally` 确保资源被正确释放
   - 对于文本文件，字节需要转换为字符才能正确显示

这些示例展示了 `ReadByte()` 的基本用法，适合初学者理解如何逐个字节读取文件内容。



# Read()方法

### `Read(byte[] buffer, int offset, int count)`

- **返回值**：`int`（实际读取的字节数）
- **用途**：读取多个字节到缓冲区
- **特点**：批量读取，效率更高

# FileStream.Read() 方法语法详解

## **基本语法**

```csharp
public override int Read(byte[] array, int offset, int count)
```

## **参数说明**

| **参数** | **类型** | **描述**                                                  |
| -------- | -------- | --------------------------------------------------------- |
| `array`  | `byte[]` | **字节数组** - 用于存储从文件流中读取的数据的缓冲区       |
| `offset` | `int`    | **偏移量** - 从缓冲区中的哪个位置开始存储数据（数组索引） |
| `count`  | `int`    | **数量** - 最多要读取的字节数                             |

## **返回值**

- **类型**: `int`
- **含义**: 实际读取到缓冲区中的字节数
- **特殊情况**:
  - 返回 `0` 表示已到达文件末尾
  - 返回 `n` (`0 < n < count`) 表示读取了部分数据
  - 返回 `count` 表示成功读取了请求数量的字节

## **语法结构图示**

```csharp
fs.Read(byte[] buffer, int startIndex, int maxBytesToRead)
      ↓         ↓           ↓             ↓
     方法     缓冲区     存储起始位置    最大读取字节数
```

## **基础用法示例**

```csharp
// 创建文件流
FileStream fs = new FileStream("example.txt", FileMode.Open);

// 创建缓冲区（大小为100字节）
byte[] buffer = new byte[100];

// 调用Read方法
int bytesRead = fs.Read(buffer, 0, buffer.Length);
// ↑           ↑     ↑      ↑     ↑     ↑
// 返回值     方法  缓冲区  偏移量  起始位置  读取长度

// 处理结果
if (bytesRead > 0)
{
    Console.WriteLine($"成功读取了 {bytesRead} 个字节");
    
    // 只处理实际读取的字节（0 到 bytesRead-1）
    for (int i = 0; i < bytesRead; i++)
    {
        Console.Write($"{(char)buffer[i]}");
    }
}

fs.Close();
```

## **示例**

```csharp
// 定义文件路径
string filePath = @"C:\aaa\a1.txt";

// 创建FileStream对象（打开文件，只读模式）
FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read);


// 定义字节数组作为缓冲区（每次最多读取1024字节）
byte[] buffer = new byte[1024];

// 存储实际读取的字节数
int bytesRead;

// 循环读取文件内容，直到Read()返回0（文件末尾）
while ((bytesRead = fs.Read(buffer, 0, buffer.Length)) > 0)
{
    // 将读取的字节转换为字符串（使用UTF8编码）
    string content = System.Text.Encoding.UTF8.GetString(buffer, 0, bytesRead);
    Console.WriteLine("读取到的内容：" + content);
}

// 手动关闭流（因为没使用using，必须确保释放资源）
if (fs != null)
    fs.Close();
```





## **参数详细解释**

### **1. array 参数（缓冲区）**

```csharp
// 创建不同大小的缓冲区
byte[] smallBuffer = new byte[10];   // 每次读取10字节
byte[] mediumBuffer = new byte[1024]; // 每次读取1KB
byte[] largeBuffer = new byte[4096];  // 每次读取4KB

// 使用缓冲区读取
int result = fs.Read(smallBuffer, 0, smallBuffer.Length);
```

### **2. offset 参数（偏移量）**

```csharp
byte[] buffer = new byte[100];

// 从缓冲区开头开始存储（索引0）
fs.Read(buffer, 0, 50);  // 读取50字节，存到buffer[0]到buffer[49]

// 从缓冲区中间开始存储
fs.Read(buffer, 10, 30); // 读取30字节，存到buffer[10]到buffer[39]

// 从缓冲区末尾开始存储
fs.Read(buffer, 50, 50); // 读取50字节，存到buffer[50]到buffer[99]
```

### **3. count 参数（读取数量）**

```csharp
byte[] buffer = new byte[100];

// 读取少于缓冲区大小的数据
fs.Read(buffer, 0, 25);  // 只读取25字节

// 读取等于缓冲区大小的数据
fs.Read(buffer, 0, 100); // 尝试读取100字节

// 读取超过缓冲区大小的数据（错误！）
// fs.Read(buffer, 0, 150); // 这会抛出ArgumentException
```

## **常见错误用法**

### **错误1：忽略返回值**

```csharp
// 错误：假设总是读取了完整的缓冲区
byte[] buffer = new byte[100];
fs.Read(buffer, 0, buffer.Length); // 可能只读取了部分数据

// 错误地处理整个缓冲区
foreach (byte b in buffer) // 可能包含无效数据！
{
    Console.Write((char)b);
}
```

### **错误2：偏移量超出范围**

```csharp
byte[] buffer = new byte[50];

// 错误：偏移量+数量超出缓冲区大小
fs.Read(buffer, 40, 20); // 40+20=60 > 50，会抛出异常
```

### **错误3：错误的循环条件**

```csharp
// 错误：可能无限循环
byte[] buffer = new byte[100];
int bytesRead;

// 错误：没有检查返回值是否为0
while (fs.Read(buffer, 0, buffer.Length) >= 0) // 应该检查 > 0
{
    // ...
}
```

## **正确用法总结**

1. **总是检查返回值** - 知道实际读取了多少字节
2. **正确处理偏移量** - 确保不超出缓冲区范围
3. **使用循环读取完整文件** - 直到返回0为止
4. **只处理有效数据** - 基于返回值的范围处理缓冲区内容

```csharp
// 正确用法模板
byte[] buffer = new byte[4096];
int bytesRead;

while ((bytesRead = fs.Read(buffer, 0, buffer.Length)) > 0)
{
    // 处理 buffer[0] 到 buffer[bytesRead-1] 的数据
    ProcessData(buffer, bytesRead);
}
```

这个方法提供了高效的文件读取能力，特别适合处理大文件，因为它可以分块读取数据，避免一次性加载整个文件到内存中。

通过简单示例来介绍 FileStream 的 WriteByte 和 Write 方法。

## **📝 WriteByte 方法**

### **语法：**

```csharp
void WriteByte(byte value)
```

### **示例1：写入单个字节**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("single_byte.txt", FileMode.Create);
    
    // 写入单个字节
    fs.WriteByte(65);  // 写入 'A' 的 ASCII 码
    fs.WriteByte(66);  // 写入 'B'
    fs.WriteByte(67);  // 写入 'C'
    
    Console.WriteLine("三个字节写入完成");
}
finally
{
    if (fs != null) fs.Close();
}
// 文件内容：ABC
```

### **示例2：写入数字字符**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("numbers.txt", FileMode.Create);
    
    // 写入数字字符 '0' 到 '9'
    for (int i = 0; i < 10; i++)
    {
        fs.WriteByte((byte)('0' + i));  // 写入 48,49,...,57
    }
}
finally
{
    if (fs != null) fs.Close();
}
// 文件内容：0123456789
```

## **📝 Write 方法**

### **语法：**

```csharp
void Write(byte[] array, int offset, int count)
```

### **示例3：写入整个字节数组**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("full_array.txt", FileMode.Create);
    
    byte[] data = { 72, 101, 108, 108, 111 };  // Hello 的 ASCII 码
    
    // 写入整个数组：从索引0开始，写入全部5个字节
    fs.Write(data, 0, data.Length);
}
finally
{
    if (fs != null) fs.Close();
}
// 文件内容：Hello
```

### **示例4：写入数组的一部分**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("partial.txt", FileMode.Create);
    
    byte[] data = { 65, 66, 67, 68, 69, 70 };  // A,B,C,D,E,F
    
    // 只写入中间部分：从索引1开始，写入3个字节
    fs.Write(data, 1, 3);  // 写入 B,C,D
}
finally
{
    if (fs != null) fs.Close();
}
// 文件内容：BCD
```

### **示例5：字符串转换为字节数组写入**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("string_data.txt", FileMode.Create);
    
    string text = "Hello FileStream!";
    byte[] data = System.Text.Encoding.UTF8.GetBytes(text);
    
    // 写入整个字节数组
    fs.Write(data, 0, data.Length);
}
finally
{
    if (fs != null) fs.Close();
}
// 文件内容：Hello FileStream!
```

## **🔄 对比练习**

### **示例6：WriteByte vs Write 对比**

```csharp
FileStream fs1 = null;
FileStream fs2 = null;
try
{
    // 方法1：使用 WriteByte（逐个写入）
    fs1 = new FileStream("method1.txt", FileMode.Create);
    for (int i = 65; i <= 70; i++)  // A-F
    {
        fs1.WriteByte((byte)i);
    }
    
    // 方法2：使用 Write（批量写入）
    fs2 = new FileStream("method2.txt", FileMode.Create);
    byte[] data = { 65, 66, 67, 68, 69, 70 };  // A-F
    fs2.Write(data, 0, data.Length);
    
    Console.WriteLine("两种方法都完成了写入");
}
finally
{
    if (fs1 != null) fs1.Close();
    if (fs2 != null) fs2.Close();
}
// 两个文件内容都是：ABCDEF
```

### **示例7：混合使用两种方法**

```csharp
FileStream fs = null;
try
{
    fs = new FileStream("mixed.txt", FileMode.Create);
    
    // 先用 Write 写入数组
    byte[] header = { 83, 84, 65, 82, 84 };  // START
    fs.Write(header, 0, header.Length);
    
    // 再用 WriteByte 写入分隔符
    fs.WriteByte(124);  // | 符号
    
    // 再用 Write 写入另一个数组
    byte[] footer = { 69, 78, 68 };  // END
    fs.Write(footer, 0, footer.Length);
}
finally
{
    if (fs != null) fs.Close();
}
// 文件内容：START|END
```

## **🎯 方法总结**

| **方法**      | **参数**                              | **适用场景** | **性能**           |
| ------------- | ------------------------------------- | ------------ | ------------------ |
| **WriteByte** | `byte value`                          | 写入单个字节 | 较慢（多次IO操作） |
| **Write**     | `byte[] array, int offset, int count` | 写入多个字节 | 较快（批量IO操作） |

## **💡 使用建议**

1. **少量数据**：用 WriteByte
2. **大量数据**：用 Write（更高效）
3. **字符串**：先转换为字节数组，再用 Write
4. **记得关闭**：一定要调用 Close()！

这些示例展示了基本的文件写入操作，您可以根据需要组合使用这两种方法。


## 五、读写文件

### FileStream类

1.“流”是什么

2.“流”分为几种类型

3.FileStream类是什么

4.如何使用FileStream类

5.FileMode是什么

6.FileAccess是什么

7.FileStream有哪几个方法

8.fs.WriteByte()方法的用途、语法、参数、返回值是什么

9.fs.WriteByte()方法的用途、语法、参数、返回值是什么

10.fs.ReadByte()方法的用途、语法、参数、返回值是什么

11.fs.Read()方法的用途、语法、参数、返回值是什么

### FileStream类练习题

[操作]使用FileStream类在D盘创建一个file2.txt文件

[操作]使用File类创建a.txt,使用FileInfo类创建b.txt，使用FileStream类创建c.txt文件

[操作]将0 ～ 9十个数字写入D盘Test文件夹下的test1.txt文件中

[操作]向D盘Test文件夹下的test2.txt文件中写入26个英文字母

[操作]从D盘Test文件夹下的test1.txt文件中读取所有数据并显示在控制台

[操作]将D盘Test文件夹下的Test2.txt文件中的数据读到二进制数组ByteArray中

### StreamReader类

1.文本流是什么

2.二进制流是什么

3.SteamReader类的用途是什么

4.如何使用SteamReader类？

5.SteamReader构造函数的语法是什么

6.sr.Read()方法的用途、语法、参数、返回值是什么

7.sr.ReadLine()方法的用途、语法、参数、返回值是什么

### StreamWriter类

1.SteamWriter类的用途是什么

2.如何使用SteamWriter类？

3.SteamWriter构造函数的语法是什么

4.sw.Writer()方法的用途、语法、参数、返回值是什么

5.sw.WriteLine()方法的用途、语法、参数、返回值是什么

6.sw.Close()方法的用途、语法、参数、返回值是什么

7.sw.Flush()方法的用途、语法、参数、返回值是什么

### BinaryReader类

1.BinaryReader类的用途是什么

2.如何使用BinaryReader类？

3.BinaryReader构造函数的语法是什么

4.br.PeekChar()方法的用途、语法、参数、返回值是什么

5.br.Read()方法的用途、语法、参数、返回值是什么

6.br.ReadBlooean()方法的用途、语法、参数、返回值是什么

7.br.ReadByte()方法的用途、语法、参数、返回值是什么

8.br.ReadBytes()方法的用途、语法、参数、返回值是什么

9.br.ReadChar()方法的用途、语法、参数、返回值是什么

10.br.ReadChars()方法的用途、语法、参数、返回值是什么

11.br.ReadInt32()方法的用途、语法、参数、返回值是什么

12.br.ReadString()方法的用途、语法、参数、返回值是什么

### Binary.Writer类

1.BinaryWriter类的用途是什么

2.如何使用BinaryWriter类？

3.BinaryWriter构造函数的语法是什么

4.bw.Write()方法的用途、语法、参数、返回值是什么

我给你用**最清晰、最适合考试/复习**的方式，一次性总结好这 6 个 C# 知识点，语言通俗、结构整齐，直接背就能用。

---
