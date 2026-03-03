---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务五 读写文件示例   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务五 读写文件示例   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---
## 一、FileStream实例方法
### (一)FileStream.WriteByte()
示例1：写入字母"A"

```csharp
using System;
using System.IO;

internal class Program
{
    public static void Main(string[] args)
    {
        FileStream fs = new FileStream("/Users/jay/aaa/fs1.txt",FileMode.Create,FileAccess.Write);
        fs.WriteByte(65);
        fs.Close();
    }
}
```

输出: fs1.txt

```
A
```

示例 2：写入数字0 ~ 9

```csharp
FileStream fs = new FileStream("/users/buhaoqi/aaa/fs2.txt",FileMode.Create,FileAccess.Write);

for(byte i = 0; i < 10; i++){
  fs.WriteByte((byte)(i + 48));
  // fs.WriteByte((byte)('0' + i));
}
fs.Close();
```

说明:

- (byte)0 = 数值零 = 空字符 = 看不见
- (byte)'0' = 字符零 = ASCII 48 = 看得见的'0'

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

### (二)FileStream.Write()

写入26个字母

```csharp
FileStream fs = new FileStream("/Users/jay/aaa/fs2.txt",FileMode.Create);

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

### (三)FileStream.ReadByte()
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

### (四)FileStream.Read()
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

## 二、构造函数的参数用法示例
### (一)创建并写入新文件

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

### (二)打开并读取已存在文件

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
### (三)以只读方式打开文件

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


## 三、StreamReader|StreamWriter类


## 四、StringReader|StringWriter类


## 五、BinaryReader|BinaryWriter类

## 七、BinaryReader示例

```csharp
using (FileStream fs = new FileStream("test.dat", FileMode.Open, FileAccess.Read))
{
    using (BinaryReader br = new BinaryReader(fs))
    {
        int num = br.ReadInt32();   // 读取int类型       
        string str = br.ReadString(); // 读取字符串
    }
}
```

你需要为`BinaryReader`的每个核心方法（PeekChar()、Read()、ReadBoolean()等）单独编写基础示例，我会基于同一个二进制文件的读写场景，为每个方法设计**极简、可运行、贴合考试考点**的示例，所有示例共用一个测试文件，逻辑连贯且注释清晰。

### 前置准备：先写入测试用的二进制文件

所有读取方法的示例，都基于这个提前写入的二进制文件（包含多种类型数据），确保示例可直接验证：
```csharp
using System;
using System.IO;
using System.Text;

// 第一步：写入测试数据（供后续读取方法测试）
public static void WriteTestBinaryFile()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
    using (BinaryWriter bw = new BinaryWriter(fs, Encoding.UTF8))
    {
        // 写入测试数据（覆盖所有读取方法的类型）
        bw.Write(true);          // bool类型
        bw.Write((byte)65);      // byte类型（ASCII 'A'）
        bw.Write(new byte[] { 66, 67, 68 }); // byte数组（B/C/D）
        bw.Write('E');           // char类型
        bw.Write(new char[] { 'F', 'G', 'H' }); // char数组
        bw.Write(12345);         // int32类型
        bw.Write("测试字符串");   // string类型
        bw.Write((byte)0);       // 末尾标记（用于PeekChar判断）
    }
    Console.WriteLine("测试二进制文件写入完成！");
}
```

---

### 1. PeekChar() 方法示例
#### 用途：查看下一个字符（不移动流位置），判断是否到文件末尾
```csharp
public static void TestPeekChar()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("=== PeekChar() 示例 ===");
        // 查看第一个字符（不读取，流位置不变）
        int peekResult = br.PeekChar();
        Console.WriteLine($"查看下一个字符的ASCII码：{peekResult}"); // 输出：1（true对应的字节值）
        
        // 读取第一个bool后，再次查看
        br.ReadBoolean();
        peekResult = br.PeekChar();
        Console.WriteLine($"读取bool后，下一个字符ASCII码：{peekResult}"); // 输出：65（byte 65）
        
        // 循环查看直到末尾
        while (br.PeekChar() != -1)
        {
            br.ReadByte(); // 逐字节读取，仅用于演示
        }
        Console.WriteLine("已到达文件末尾，PeekChar()返回：" + br.PeekChar()); // 输出：-1
    }
}
```

---

### 2. Read() 方法示例（两种语法）
#### 用途：读取单个字节 / 批量读取字节到数组
```csharp
public static void TestRead()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== Read() 示例 ===");
        // 语法1：读取单个字节（返回int）
        int singleByte = br.Read();
        Console.WriteLine($"Read()读取单个字节：{singleByte}"); // 输出：1（true对应的字节）
        
        // 语法2：批量读取字节到数组
        byte[] buffer = new byte[5]; // 准备存储5个字节
        int actualRead = br.Read(buffer, 0, 5); // 从索引0开始，读取5个字节
        Console.WriteLine($"实际读取字节数：{actualRead}"); // 输出：5
        Console.WriteLine($"读取的字节数组：{string.Join(",", buffer)}"); // 输出：65,66,67,68,69
    }
}
```

---

### 3. ReadBoolean() 方法示例
#### 用途：读取bool类型（1个字节，0=false，非0=true）
```csharp
public static void TestReadBoolean()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadBoolean() 示例 ===");
        bool boolValue = br.ReadBoolean();
        Console.WriteLine($"读取的bool值：{boolValue}"); // 输出：True
    }
}
```

---

### 4. ReadByte() 方法示例
#### 用途：读取单个byte类型（0~255）
```csharp
public static void TestReadByte()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadByte() 示例 ===");
        br.ReadBoolean(); // 跳过前面的bool值
        byte byteValue = br.ReadByte();
        Console.WriteLine($"读取的byte值：{byteValue}（对应字符：{(char)byteValue}）"); // 输出：65（A）
    }
}
```

---

### 5. ReadBytes() 方法示例
#### 用途：批量读取指定数量的字节，返回字节数组
```csharp
public static void TestReadBytes()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadBytes() 示例 ===");
        br.ReadBoolean(); // 跳过bool
        br.ReadByte();    // 跳过单个byte
        byte[] byteArray = br.ReadBytes(3); // 读取3个字节
        Console.WriteLine($"读取的3个字节：{string.Join(",", byteArray)}"); // 输出：66,67,68（B/C/D）
    }
}
```

---

### 6. ReadChar() 方法示例
#### 用途：读取单个char类型（默认2字节UTF16编码）
```csharp
public static void TestReadChar()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadChar() 示例 ===");
        // 跳过前面的bool+byte+3个字节
        br.ReadBoolean();
        br.ReadBytes(4); 
        char charValue = br.ReadChar();
        Console.WriteLine($"读取的char值：{charValue}"); // 输出：E
    }
}
```

---

### 7. ReadChars() 方法示例
#### 用途：批量读取指定数量的字符，返回字符数组
```csharp
public static void TestReadChars()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadChars() 示例 ===");
        // 跳过前面的bool+byte+3字节+1char
        br.ReadBoolean();
        br.ReadBytes(4);
        br.ReadChar();
        char[] charArray = br.ReadChars(3); // 读取3个字符
        Console.WriteLine($"读取的3个字符：{string.Join("", charArray)}"); // 输出：FGH
    }
}
```

---

### 8. ReadInt32() 方法示例
#### 用途：读取4个字节的int32类型（最常用考点）
```csharp
public static void TestReadInt32()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadInt32() 示例 ===");
        // 跳过前面的bool+byte+3字节+1char+3char
        br.ReadBoolean();
        br.ReadBytes(4);
        br.ReadChars(4);
        int intValue = br.ReadInt32();
        Console.WriteLine($"读取的int32值：{intValue}"); // 输出：12345
    }
}
```

---

### 9. ReadString() 方法示例
#### 用途：读取BinaryWriter写入的长度前缀字符串
```csharp
public static void TestReadString()
{
    string filePath = "TestBinary.dat";
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
    using (BinaryReader br = new BinaryReader(fs, Encoding.UTF8))
    {
        Console.WriteLine("\n=== ReadString() 示例 ===");
        // 跳过前面的bool+byte+3字节+1char+3char+int
        br.ReadBoolean();
        br.ReadBytes(4);
        br.ReadChars(4);
        br.ReadInt32();
        string strValue = br.ReadString();
        Console.WriteLine($"读取的字符串：{strValue}"); // 输出：测试字符串
    }
}
```

### 完整调用入口（一键运行所有示例）
```csharp
class BinaryReaderAllMethodsDemo
{
    static void Main()
    {
        // 1. 先写入测试文件
        WriteTestBinaryFile();
        
        // 2. 依次运行所有方法示例
        TestPeekChar();
        TestRead();
        TestReadBoolean();
        TestReadByte();
        TestReadBytes();
        TestReadChar();
        TestReadChars();
        TestReadInt32();
        TestReadString();
    }
    
    // 粘贴上面所有方法（WriteTestBinaryFile + TestXXX）
}
```

#### 运行结果（核心片段）
```
测试二进制文件写入完成！
=== PeekChar() 示例 ===
查看下一个字符的ASCII码：1
读取bool后，下一个字符ASCII码：65
已到达文件末尾，PeekChar()返回：-1

=== Read() 示例 ===
Read()读取单个字节：1
实际读取字节数：5
读取的字节数组：65,66,67,68,69

=== ReadBoolean() 示例 ===
读取的bool值：True

...（后续方法输出略）
```