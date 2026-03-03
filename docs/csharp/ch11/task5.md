---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务五 同步训练   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务五 同步训练   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  5  # 侧边栏中排在第1位
---

## 示例1: FileStream.WriteByte 写入单字母

```csharp
using System;
using System.IO;

internal class Program
{
  public static void Main(string[] args)
  {
		// FielMode.Create: 创建新文件；若文件已存在，覆盖原有文件
    // FileAccess.Write：仅赋予“写入”权限，无法读取文件内容
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

## 示例 2：FileStream写入+读取 "Hello"

```csharp
using System;
using System.IO;

class FileStreamWriteByteDemo
{
    static void Main()
    {
        // 1. 创建FileStream（可写模式打开/创建文件）
        string filePath = "/users/jay/aaa/fs2.txt";
        FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write);

        // 2. 逐个写入字节（对应ASCII码：H(72)、e(101)、l(108)、l(108)、o(111)）
        fs.WriteByte(72);   // H
        fs.WriteByte(101);  // e
        fs.WriteByte(108);  // l
        fs.WriteByte(108);  // l
        fs.WriteByte(111);  // o

        // 关键：强制刷新缓冲区（去掉using后必须手动刷，否则数据停留在内存）
        fs.Flush();

        Console.WriteLine("单个字节写入完成");
        fs.Close();    // 关闭流（内部会再次刷新缓冲区）
        fs.Dispose();  // 释放流占用的系统资源（文件句柄）

        // 验证写入结果（读取文件内容）
        // 验证写入结果：用ReadByte()逐字节读取文件
        Console.WriteLine("============= 用ReadByte()读取文件内容 ================");
        FileStream fsRead = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        int readByteValue = fsRead.ReadByte(); // ReadByte()返回int类型（字节值/-1表示末尾）
        
        string content = ""; // 拼接读取到的字符

        // 循环读取：直到ReadByte()返回-1（文件末尾）
        // while ((readByteValue = fsRead.ReadByte()) != -1)
        while (readByteValue != -1)
        {
            // readByteValue = fsRead.ReadByte();
            // 将读取到的字节值转换为对应字符（如72→'H'）
            char ch = (char)readByteValue;
            content += ch; // 拼接成完整字符串
            
            // 读取下一个字节，更新变量（关键！）
            readByteValue = fsRead.ReadByte();
            
            // 可选：打印每一步读取的字节值和对应字符（便于理解）
            Console.WriteLine($"读取到字节值：{readByteValue} → 对应字符：{ch}");
        }

        // 释放读取流资源
        fsRead.Close();
        fsRead.Dispose();

        // 输出最终拼接的内容
        Console.WriteLine($"文件内容：{content}"); // 输出：Hello
    }
}
```

输出: fs2.txt

```
Hello
```

## 示例 3：FileStream.WriteByte写入 26个字母

```csharp
using System;
using System.IO;

internal class Program
{
    public static void Main(string[] args)
    {
        // FielMode默认值: OpenOrCreate 
        // FileAccess默认值：ReadWrite
        FileStream fs = new FileStream("/Users/jay/aaa/fs3.txt",FileMode.Create);

        for(int i = 0; i < 26; i++)
        {
            byte singleByte = (byte)(65 + i); // 计算单个字节（A=65，B=66...Z=90）
            fs.WriteByte(singleByte); // 替换Write为WriteByte，逐字节写入
        }
        //缓冲区数据强制写入磁盘 
        fs.Close();
    }
}
```

输出: fs3.txt

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

## 示例 4：fs.WriteByte写入数字 0~9

```csharp
using System;
using System.IO;

internal class Program
{
  public static void Main(string[] args)
  {
    string path = "/users/jay/aaa/fs4.txt";
    FileStream fs = new FileStream(path,FileMode.Create,FileAccess.Write);

    for(byte i = 0; i < 10; i++){
        fs.WriteByte((byte)(i + 48));
        // fs.WriteByte((byte)('0' + i));
    }
    fs.Close();
  }
}
```

输出: fs4.txt

```
0123456789
```

说明:

- (byte)0 = 数值零 = 空字符 = 看不见
- (byte)'0' = 字符零 = ASCII 48 = 看得见的'0'

## 示例 5：fs.Write写入 26个字母

```csharp
using System;
using System.IO;

internal class Program
{
    public static void Main(string[] args)
    {
        // FielMode默认值: OpenOrCreate 
        // FileAccess默认值：ReadWrite
        FileStream fs = new FileStream("/Users/jay/aaa/fs3.txt",FileMode.Create);

        Byte[] byteArray = new Byte[26];
        for(int i = 0; i < 26; i++)
        {
            byteArray[i] = (byte) (65 + i);
        }
        //数据写入内存缓冲区
        fs.Write(byteArray,0,26);
        //缓冲区数据强制写入磁盘 
        fs.Close();
    }
}
```

输出: fs3.txt

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

## 示例 6：fs.Write: 写入一句中文

```csharp
using System;
using System.IO;
using System.Text;

class FileStreamWriteDemo
{
    static void Main()
    {
        string filePath = "/Users/jay/aaa/fs6.txt";
        // 要写入的文本内容
        string content = "FileStream.Write() 批量写入测试";
        // Encoding.UTF8.GetBytes()：将字符串按照UTF-8编码规则，转换为字节数组
        // Encoding:编码类  Encoding.UTF8：获取 UTF-8 编码的实例  GetBytes()： 获取字节数组
        byte[] buffer = Encoding.UTF8.GetBytes(content);

        // 2. 写入字节数组（批量写）
        // using (FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
        FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite);
        // 从buffer索引0开始，写入全部字节
        fs.Write(buffer, 0, buffer.Length);
        Console.WriteLine("批量字节写入完成");
        fs.Flush(); // 强制刷新缓冲区（可选，Close内部会自动Flush）
        fs.Close(); // 关闭流，释放资源

        // 验证结果
        string readContent = File.ReadAllText(filePath, Encoding.UTF8);
        Console.WriteLine($"文件内容：{readContent}"); // 输出：FileStream.Write() 批量写入测试
    }
}
```

输出: fs6.txt

```
批量字节写入完成
文件内容：FileStream.Write() 批量写入测试
```

## 示例 7：fs.ReadByte()写入 + 读取

```csharp
using System;
using System.IO;
using System.Text;

class FileStreamReadByteDemo
{
    static void Main()
    {
        // 1. 先创建测试文件
        string filePath = "/Users/jay/aaa/fs7.txt";
        
        // File.WriteAllText(filePath, "ABC"); // 对应ASCII码：A(65)、B(66)、C(67)
        // 上面一行代码等价于：
        byte[] buffer = Encoding.UTF8.GetBytes("ABC"); // 转字节：65、66、67
        FileStream fs1 = new FileStream(filePath, FileMode.Create, FileAccess.Write);
        fs1.Write(buffer, 0, buffer.Length); // 批量写入字节数组
        fs1.Close();

        // 2. 逐个读取字节
        FileStream fs2 = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        int byteValue = fs2.ReadByte();
        Console.WriteLine("逐个读取字节：");
        // 循环读取，直到返回-1（文件末尾）
        while (byteValue != -1)
        {
            Console.WriteLine($"字节值：{byteValue}，对应字符：{(char)byteValue}");
            byteValue = fs2.ReadByte();
        }
        
        
        // using (FileStream fs2 = new FileStream(filePath, FileMode.Open, FileAccess.Read))
        // {
        //     int byteValue;
        //     Console.WriteLine("逐个读取字节：");
        //     // 循环读取，直到返回-1（文件末尾）
        //     while ((byteValue = fs2.ReadByte()) != -1)
        //     {
        //         Console.WriteLine($"字节值：{byteValue}，对应字符：{(char)byteValue}");
        //     }
        // }
    }
}
```

输出: fs7.txt

```
逐个读取字节：
字节值：65，对应字符：A
字节值：66，对应字符：B
字节值：67，对应字符：C
```

## 示例 8：fs.Read() 写入+读取

```csharp
using System;
using System.IO;
using System.Text;

class FileStreamReadDemo
{
    static void Main()
    {
        // 1. 先创建测试文件（写入中文内容）
        string filePath = "/Users/jay/aaa/fs8.txt";
        string content = "FileStream.Read() 读取中文测试：你好";
        
        // File.WriteAllText(filePath, content, Encoding.UTF8);
        // 上面一行代码等价于：
        byte[] buffer1 = Encoding.UTF8.GetBytes(content); // 转字节：65、66、67
        FileStream fs1 = new FileStream(filePath, FileMode.Create, FileAccess.Write);
        fs1.Write(buffer1, 0, buffer1.Length); // 批量写入字节数组
        fs1.Close();
        fs1.Dispose();
        
        // 2. 批量读取字节
        FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        // 定义缓冲区（大小1024字节，足够存储文件内容）
        byte[] buffer2 = new byte[1024];
        // 从buffer索引0开始，最多读取1024字节
        int readBytes = fs.Read(buffer2, 0, buffer2.Length);

        // 3. 将字节数组转换为字符串（UTF-8编码）
        string readContent = Encoding.UTF8.GetString(buffer2, 0, readBytes);
        Console.WriteLine($"实际读取字节数：{readBytes}");
        Console.WriteLine($"读取的内容：{readContent}");
       
        
        // using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
        // {
        //     // 定义缓冲区（大小1024字节，足够存储文件内容）
        //     byte[] buffer2 = new byte[1024];
        //     // 从buffer索引0开始，最多读取1024字节
        //     int readBytes = fs.Read(buffer2, 0, buffer2.Length);
        //
        //     // 3. 将字节数组转换为字符串（UTF-8编码）
        //     string readContent = Encoding.UTF8.GetString(buffer2, 0, readBytes);
        //     Console.WriteLine($"实际读取字节数：{readBytes}");
        //     Console.WriteLine($"读取的内容：{readContent}");
        // }
    }
}
```

输出: fs8.txt

```
实际读取字节数：45
读取的内容：FileStream.Read() 读取中文测试：你好
```

## 示例 9：StreamWriter写入字符串

```csharp
using System;
using System.IO;
using System.Text;

class StreamWriterCompleteDemo
{
    static void Main()
    {
        string textPath = "/Users/jay/aaa/fs9.txt";
        #region 场景1：覆盖写入文本（指定编码）

        FileStream fs = new FileStream(textPath, FileMode.Create, FileAccess.Write);
        StreamWriter sw1 = new StreamWriter(fs, Encoding.UTF8);
        sw1.WriteLine("第一行文本（自动换行）"); // 带换行
        sw1.Write("第二行无换行"); // 无换行
        sw1.Write(" → 中文测试"); // 拼接写入
        sw1.WriteLine(); // 手动加换行
        sw1.Write(12345); // 自动转换数值为字符串
        sw1.Flush();
        sw1.Close();
        Console.WriteLine("场景1：覆盖写入完成");
        #endregion
        
        // #region 场景1：覆盖写入文本（指定编码）
        // using (FileStream fs = new FileStream(textPath, FileMode.Create, FileAccess.Write))
        // using (StreamWriter sw = new StreamWriter(fs, Encoding.UTF8))
        // {
        //     sw.WriteLine("第一行文本（自动换行）"); // 带换行
        //     sw.Write("第二行无换行"); // 无换行
        //     sw.Write(" → 中文测试"); // 拼接写入
        //     sw.WriteLine(); // 手动加换行
        //     sw.Write(12345); // 自动转换数值为字符串
        // }
        // Console.WriteLine("场景1：覆盖写入完成");
        // #endregion

        #region 场景2：追加写入文本（直接指定路径）
        // append=true 表示追加到文件末尾，false=覆盖
        using (StreamWriter sw = new StreamWriter(textPath, true, Encoding.UTF8))
        {
            sw.WriteLine("=== 追加的内容 ===");
            sw.WriteLine("追加行1");
            sw.WriteLine("追加行2");
        }
        Console.WriteLine("场景2：追加写入完成");
        #endregion
    }
}
```

输出: fs9.txt

```
第一行文本（自动换行）
第二行无换行 → 中文测试
12345=== 追加的内容 ===
追加行1
追加行2
```

## 示例 10：StreamReader读取字符串

```csharp
using System;
using System.IO;
using System.Text;
class StreamReaderCompleteDemo
{
    static void Main()
    {
        string textPath = "/Users/jay/aaa/fs10.txt";

        #region 场景1：逐行读取（适合大文件）
        Console.WriteLine("=== 逐行读取 ===");

        FileStream fs = new FileStream(textPath, FileMode.Open, FileAccess.Read);
        StreamReader sr1 = new StreamReader(fs, Encoding.UTF8);
        string line = sr1.ReadLine();
        // 循环读取，直到ReadLine()返回null（文件末尾）
        while (line  != null)
        {
            Console.WriteLine(line);
            line = sr1.ReadLine();
        }
        fs.Close();
        
        // using (FileStream fs = new FileStream(textPath, FileMode.Open, FileAccess.Read))
        // using (StreamReader sr = new StreamReader(fs, Encoding.UTF8))
        // {
        //     string line;
        //     // 循环读取，直到ReadLine()返回null（文件末尾）
        //     while ((line = sr.ReadLine()) != null)
        //     {
        //         Console.WriteLine(line);
        //     }
        // }
        #endregion

        #region 场景2：一次性读取全部内容（适合小文件）
        Console.WriteLine("\n=== 一次性读取全部内容 ===");
        StreamReader sr2 = new StreamReader(textPath, Encoding.UTF8);
        string allContent = sr2.ReadToEnd();
        Console.WriteLine(allContent);
        
        
        // using (StreamReader sr2 = new StreamReader(textPath, Encoding.UTF8))
        // {
        //     string allContent = sr2.ReadToEnd();
        //     Console.WriteLine(allContent);
        // }
        #endregion

        #region 场景3：逐字符读取（了解即可）
        Console.WriteLine("\n=== 逐字符读取 ===");
        using (StreamReader sr3 = new StreamReader(textPath, Encoding.UTF8))
        {
            int charCode;
            // Read()返回字符ASCII码，-1表示末尾
            while ((charCode = sr3.Read()) != -1)
            {
                Console.Write((char)charCode); // 转换为字符输出
            }
        }
        #endregion
    }
}
```

输出: fs2.txt

```
=== 逐行读取 ===
第一行文本（自动换行）
第二行无换行 → 中文测试
12345=== 追加的内容 ===
追加行1
追加行2

=== 一次性读取全部内容 ===
第一行文本（自动换行）
第二行无换行 → 中文测试
12345=== 追加的内容 ===
追加行1
追加行2


=== 逐字符读取 ===
第一行文本（自动换行）
第二行无换行 → 中文测试
12345=== 追加的内容 ===
追加行1
追加行2
```

