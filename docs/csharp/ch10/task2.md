---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 创建文件   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 创建文件   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## 一、File类是什么
`File`类是C#中用于操作文件的静态类（位于`System.IO`命名空间），所有方法均为静态调用；
- 使用前需引入命名空间：`using System.IO;`；
- 文件操作需注意**路径合法性**和**权限问题**（如写入系统目录需管理员权限）；
- 示例中均使用相对路径/临时路径，避免系统文件冲突。

## 二、File.Create()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 在指定路径创建新文件，若文件已存在则**覆盖**该文件（清空原有内容）；返回可读写的文件流，需手动关闭/释放。 |
| **语法**   | 1. `File.Create(string path)`<br />2. `File.Create(string path, int bufferSize)`<br />3. `File.Create(string path, int bufferSize, FileOptions options)` |
| **参数**   | - path：字符串，文件的完整/相对路径（如`"test.txt"`、`@"D:\files\demo.txt"`）；<br />- bufferSize：int，文件流的缓冲区大小（字节），默认4096；<br />- FileOptions：枚举，文件创建选项（如`FileOptions.WriteThrough`直接写入磁盘，跳过缓存）。 |
| **返回值** | `FileStream`：可读写的文件流对象，用于后续操作（如写入内容），使用后需调用`Close()`/`Dispose()`释放资源。 |

代码示例（File.Create()）

```csharp
using System;
using System.IO;
using System.Text;

class FileCreateDemo
{
    static void Main()
    {
        // 定义文件路径（当前目录下的test.txt）
        string filePath = "test.txt";

        // 1. 基础用法：创建文件并返回文件流
        using (FileStream fs = File.Create(filePath))
        {
            // 向创建的文件写入内容（通过文件流）
            string content = "Hello, File.Create()!";
            byte[] bytes = Encoding.UTF8.GetBytes(content);
            fs.Write(bytes, 0, bytes.Length);
        } // using块自动释放FileStream，无需手动Close()

        Console.WriteLine($"文件已创建：{Path.GetFullPath(filePath)}");

        // 2. 指定缓冲区大小创建文件
        string filePath2 = "test2.txt";
        using (FileStream fs2 = File.Create(filePath2, 8192))
        {
            byte[] bytes2 = Encoding.UTF8.GetBytes("指定缓冲区大小创建文件");
            fs2.Write(bytes2, 0, bytes2.Length);
        }
        Console.WriteLine($"文件2已创建：{Path.GetFullPath(filePath2)}");
    }
}
```
**输出结果**：
```
文件已创建：C:\当前项目路径\test.txt
文件2已创建：C:\当前项目路径\test2.txt
```

## 三、File.Delete()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 删除指定路径的文件；若文件不存在，方法**不会抛异常**（静默处理）；无法删除正在使用的文件（抛`IOException`）。 |
| **语法**   | `File.Delete(string path)`                                           |
| **参数**   | path：字符串，要删除的文件路径（支持相对/绝对路径）；若路径是目录（而非文件），方法无效果（不抛异常）。 |
| **返回值** | 无（void）。                                                         |

代码示例（File.Delete()）

```csharp
using System;
using System.IO;

class FileDeleteDemo
{
    static void Main()
    {
        // 定义要删除的文件路径
        string filePath = "test.txt";
        string nonExistFile = "non_exist.txt"; // 不存在的文件

        // 1. 删除存在的文件
        if (File.Exists(filePath)) // 先判断文件是否存在（可选）
        {
            File.Delete(filePath);
            Console.WriteLine($"已删除文件：{filePath}");
        }
        else
        {
            Console.WriteLine($"文件{filePath}不存在");
        }

        // 2. 删除不存在的文件（无异常）
        File.Delete(nonExistFile);
        Console.WriteLine($"尝试删除不存在的文件{nonExistFile}，无异常");

        // 3. 错误示例：删除正在使用的文件（抛异常）
        string usedFile = "used.txt";
        using (FileStream fs = File.Create(usedFile))
        {
            // File.Delete(usedFile); // 文件被占用，抛IOException
        }
    }
}
```
**输出结果**：
```
已删除文件：test.txt
尝试删除不存在的文件non_exist.txt，无异常
```
## 四、File.Move()

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将文件从源路径移动到目标路径；支持跨目录移动，若目标文件已存在则抛`IOException`；无法移动正在使用的文件。 |
| **语法**   | 1. `File.Move(string sourceFileName, string destFileName)`<br />2. `File.Move(string sourceFileName, string destFileName, bool overwrite)`（.NET 5+支持覆盖） |
| **参数**   | - sourceFileName：字符串，源文件路径（必须是文件，不能是目录）；<br />- destFileName：字符串，目标文件路径（包含文件名，如`@"D:\new\test.txt"`）；<br />- overwrite：bool（.NET 5+），是否覆盖已存在的目标文件（true=覆盖，false=不覆盖）。 |
| **返回值** | 无（void）。                                                         |

代码示例（File.Move()）

```csharp
using System;
using System.IO;

class FileMoveDemo
{
    static void Main()
    {
        // 准备源文件
        string sourcePath = "source.txt";
        File.WriteAllText(sourcePath, "移动测试内容"); // 快速创建并写入文件

        // 1. 基础用法：移动文件到当前目录的sub文件夹（需先创建目录）
        string destDir = "sub";
        if (!Directory.Exists(destDir))
        {
            Directory.CreateDirectory(destDir);
        }
        string destPath = Path.Combine(destDir, "moved.txt");

        // .NET Framework/.NET Core 3.x：目标文件存在则抛异常
        File.Move(sourcePath, destPath);
        Console.WriteLine($"文件已从{sourcePath}移动到{destPath}");

        // 2. .NET 5+：覆盖已存在的目标文件
        string sourcePath2 = "source2.txt";
        string destPath2 = Path.Combine(destDir, "moved.txt");
        File.WriteAllText(sourcePath2, "新内容");
        // File.Move(sourcePath2, destPath2, true); // 覆盖目标文件
        // Console.WriteLine($"覆盖移动完成：{destPath2}");
    }
}
```
**输出结果**：
```
文件已从source.txt移动到sub\moved.txt
```


## 五、File.Copy()

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将源文件复制到目标路径；支持覆盖已存在的目标文件，可指定是否复制文件属性（如只读、隐藏）。 |
| **语法**   | 1. `File.Copy(string sourceFileName, string destFileName)`<br />2. `File.Copy(string sourceFileName, string destFileName, bool overwrite)`<br />3. `File.Copy(string sourceFileName, string destFileName, bool overwrite, CopyOptions copyOptions)`（.NET 7+） |
| **参数**   | - sourceFileName：字符串，源文件路径（必须存在，否则抛`FileNotFoundException`）；<br />- destFileName：字符串，目标文件路径（包含文件名）；<br />- overwrite：bool，是否覆盖已存在的目标文件（true=覆盖，false=不覆盖，默认false）；<br />- copyOptions：枚举（.NET 7+），复制选项（如`CopyOptions.CopySymbolicLink`复制符号链接）。 |
| **返回值** | 无（void）。                                                         |

代码示例（File.Copy()）

```csharp
using System;
using System.IO;

class FileCopyDemo
{
    static void Main()
    {
        // 准备源文件
        string sourcePath = "original.txt";
        File.WriteAllText(sourcePath, "复制测试内容");

        // 1. 基础用法：复制文件（目标文件不存在）
        string destPath1 = "copy1.txt";
        File.Copy(sourcePath, destPath1);
        Console.WriteLine($"已复制文件到：{destPath1}");

        // 2. 覆盖已存在的目标文件
        string destPath2 = "copy1.txt";
        File.Copy(sourcePath, destPath2, true); // overwrite=true 覆盖
        Console.WriteLine($"已覆盖复制文件到：{destPath2}");

        // 3. 错误示例：目标文件已存在且overwrite=false（抛异常）
        // File.Copy(sourcePath, destPath2); // 抛IOException
    }
}
```
**输出结果**：
```
已复制文件到：copy1.txt
已覆盖复制文件到：copy1.txt
```


## 六、File.Replace()

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 用源文件替换目标文件，并将原目标文件备份到指定路径；若备份文件已存在，可选择覆盖。 |
| **语法**   | 1. `File.Replace(string sourceFileName, string destinationFileName, string destinationBackupFileName)`<br />2. `File.Replace(string sourceFileName, string destinationFileName, string destinationBackupFileName, bool ignoreMetadataErrors)` |
| **参数**   | - sourceFileName：字符串，源文件路径（替换用的文件，必须存在）；<br />- destinationFileName：字符串，被替换的目标文件路径（必须存在）；<br />- destinationBackupFileName：字符串，原目标文件的备份路径（可为null，null=不备份）；<br />- ignoreMetadataErrors：bool，是否忽略元数据（如文件属性）复制错误（true=忽略，false=不忽略）。 |
| **返回值** | 无（void）。                                                         |

代码示例（File.Replace()）

```csharp
using System;
using System.IO;

class FileReplaceDemo
{
    static void Main()
    {
        // 准备源文件、目标文件、备份文件
        string sourcePath = "new_content.txt";
        string destPath = "old_file.txt";
        string backupPath = "old_file_backup.txt";

        // 创建测试文件
        File.WriteAllText(sourcePath, "新内容");
        File.WriteAllText(destPath, "旧内容");

        // 1. 替换目标文件并备份原文件
        File.Replace(sourcePath, destPath, backupPath);
        Console.WriteLine($"已用{sourcePath}替换{destPath}，原文件备份到{backupPath}");

        // 验证结果
        string newContent = File.ReadAllText(destPath);
        string backupContent = File.ReadAllText(backupPath);
        Console.WriteLine($"替换后目标文件内容：{newContent}"); // 输出：新内容
        Console.WriteLine($"备份文件内容：{backupContent}");   // 输出：旧内容

        // 2. 替换不备份（backupPath=null）
        string sourcePath2 = "new2.txt";
        string destPath2 = "target2.txt";
        File.WriteAllText(sourcePath2, "无备份新内容");
        File.WriteAllText(destPath2, "无备份旧内容");
        File.Replace(sourcePath2, destPath2, null);
        Console.WriteLine($"替换{destPath2}且不备份");
    }
}
```
**输出结果**：
```
已用new_content.txt替换old_file.txt，原文件备份到old_file_backup.txt
替换后目标文件内容：新内容
备份文件内容：旧内容
替换target2.txt且不备份
```

**File.Replace 方法示例**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== File.Replace 方法示例 ===");
        
        // 定义文件路径
        string sourceFile = "source.txt";
        string destinationFile = "destination.txt";
        string backupFile = "backup.txt";
        
        try
        {
            // 创建测试文件
            File.WriteAllText(sourceFile, "这是源文件的新内容");
            File.WriteAllText(destinationFile, "这是目标文件的旧内容");
            
            Console.WriteLine("替换前:");
            Console.WriteLine($"源文件内容: {File.ReadAllText(sourceFile)}");
            Console.WriteLine($"目标文件内容: {File.ReadAllText(destinationFile)}");
            
            // 使用 File.Replace 方法
            // 将 sourceFile 的内容替换 destinationFile 的内容
            // 并将 destinationFile 的原始内容备份到 backupFile
            File.Replace(sourceFile, destinationFile, backupFile);
            
            Console.WriteLine("\n替换后:");
            Console.WriteLine($"源文件是否存在: {File.Exists(sourceFile)}");
            Console.WriteLine($"目标文件内容: {File.ReadAllText(destinationFile)}");
            Console.WriteLine($"备份文件内容: {File.ReadAllText(backupFile)}");
            
            // 清理测试文件
            File.Delete(destinationFile);
            File.Delete(backupFile);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"错误: {ex.Message}");
        }
    }
}
```

## 七、File.Exists()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 判断指定路径的文件是否存在；若路径是目录、权限不足、路径无效，均返回`false`（不抛异常）。 |
| **语法**   | `File.Exists(string path)`                                           |
| **参数**   | path：字符串，文件路径（支持相对/绝对路径）；可为null，返回`false`。  |
| **返回值** | `bool`：<br />- true：文件存在且路径是合法文件（非目录）；<br />- false：文件不存在/路径是目录/权限不足/路径无效。 |

代码示例（File.Exists()）
```csharp
using System;
using System.IO;

class FileExistsDemo
{
    static void Main()
    {
        // 1. 检查存在的文件
        string existFile = "existing.txt";
        File.WriteAllText(existFile, "测试");
        bool isExist = File.Exists(existFile);
        Console.WriteLine($"文件{existFile}是否存在：{isExist}"); // 输出：True

        // 2. 检查不存在的文件
        string nonExistFile = "non_exist.txt";
        Console.WriteLine($"文件{nonExistFile}是否存在：{File.Exists(nonExistFile)}"); // 输出：False

        // 3. 检查路径是目录（返回false）
        string dirPath = "sub";
        Directory.CreateDirectory(dirPath);
        Console.WriteLine($"目录{dirPath}被判断为文件：{File.Exists(dirPath)}"); // 输出：False

        // 4. 检查null路径（返回false）
        Console.WriteLine($"null路径是否存在文件：{File.Exists(null)}"); // 输出：False
    }
}
```
**输出结果**：
```
文件existing.txt是否存在：True
文件non_exist.txt是否存在：False
目录sub被判断为文件：False
null路径是否存在文件：False
```
## 总结（核心关键点）
1. **静态调用**：`File`类所有方法均为静态，调用格式为`File.方法名(参数)`，无需实例化；
2. **路径规则**：
   - 相对路径基于当前程序运行目录，绝对路径需用`@`转义（如`@"D:\file.txt"`）；
   - 目录路径需用`Directory`类处理，`File`类处理目录路径无效果/返回false；
3. **异常处理**：
   - `Delete/Exists`对不存在的文件/路径静默处理（不抛异常）；
   - `Create/Move/Copy/Replace`操作被占用的文件会抛`IOException`；
   - 权限不足会抛`UnauthorizedAccessException`；
4. **最佳实践**：
   - 操作文件前先用`File.Exists()`判断文件是否存在（可选但推荐）；
   - `Create`返回的`FileStream`需用`using`块释放资源；
   - .NET 5+的`Move`支持覆盖，旧版本需手动删除目标文件后再移动。


## 八、FileInfo类是什么？
`FileInfo`是C#中位于`System.IO`命名空间下的**实例类**，用于**描述和操作单个文件的属性与行为**（如文件大小、创建时间、复制/移动/删除文件等）。
- 核心定位：是文件的“实例化描述”——创建`FileInfo`对象时会绑定具体的文件路径，后续可通过该对象反复操作这个文件，无需重复传入路径；
- 底层逻辑：`FileInfo`封装了文件的元数据（属性）和操作方法，本质是对文件系统中单个文件的“面向对象封装”；
- 关键特点：属于值类型相关的实例类，创建对象时会读取一次文件元数据，后续重复访问属性时不会重复查询文件系统（性能更优）。

## 九、如何使用FileInfo类？
使用`FileInfo`的核心步骤是**“创建对象 → 调用属性/方法”**，具体流程如下：
#### 步骤1：引入命名空间
```csharp
using System.IO; // 必须引入，否则无法识别FileInfo
```
#### 步骤2：创建FileInfo对象（绑定目标文件）
```csharp
// 绑定到具体文件路径（无论文件是否存在）
FileInfo fileInfo = new FileInfo(@"D:\test.txt");
```
#### 步骤3：使用对象的属性/方法操作文件
```csharp
// 示例：获取文件属性
Console.WriteLine($"文件大小：{fileInfo.Length} 字节");
// 示例：执行文件操作
fileInfo.CopyTo(@"D:\test_copy.txt"); // 复制文件
```

## 十、创建FileInfo对象的语法是什么？
`FileInfo`有两个核心构造函数，最常用的是单参数构造函数：
| 构造函数语法 | 说明 |
|--------------|------|
| `new FileInfo(string filePath)` | 最常用：传入文件的相对/绝对路径，创建绑定该文件的`FileInfo`对象（文件不存在也可创建对象，仅后续操作会抛异常） |
| `new FileInfo(string filePath, FileShare share)` | 高级用法：指定文件共享模式（如`FileShare.Read`允许其他程序读取该文件），.NET 5+支持 |

示例：创建FileInfo对象
```csharp
// 示例1：绝对路径（推荐用@转义反斜杠）
FileInfo file1 = new FileInfo(@"C:\Users\test.txt");

// 示例2：相对路径（基于程序运行目录）
FileInfo file2 = new FileInfo("test.txt");

// 示例3：文件不存在也可创建对象（后续操作会验证）
FileInfo nonExistFile = new FileInfo("non_exist.txt");
Console.WriteLine(nonExistFile.Exists); // 输出：False（仅判断，不抛异常）
```

## 十一、FileInfo类与File类的区别是什么？
`FileInfo`和`File`都用于文件操作，但设计理念和使用场景完全不同，核心区别如下：

| 对比维度 | File类 | FileInfo类 |
|----------|--------|------------|
| 类类型 | 静态类（static） | 实例类（非static） |
| 调用方式 | 直接通过`File.方法名(路径)`调用（如`File.Copy("a.txt", "b.txt")`） | 先创建`FileInfo`对象（绑定路径），再调用`对象.方法名()`（如`new FileInfo("a.txt").CopyTo("b.txt")`） |
| 性能 | 每次调用方法都需传入路径，且会重复查询文件系统（如多次调用`File.GetLength("a.txt")`会多次读文件系统） | 创建对象时读取一次文件元数据，后续访问属性/方法复用数据（多次操作同一文件时性能更优） |
| 适用场景 | 单次/少量操作文件（如偶尔删除一个文件、复制一次文件） | 多次操作同一个文件（如同时获取文件大小、创建时间、修改时间，再复制/移动该文件） |
| 异常处理 | 方法参数错误（如无效路径）直接抛异常 | 创建对象时不抛异常（仅绑定路径），调用方法/访问属性时才抛异常（如文件不存在时调用`Length`抛异常） |
| 代码可读性 | 路径需重复传入，代码冗余（如多次操作同一文件需反复写路径） | 路径仅传入一次，代码更简洁（面向对象风格） |

示例：对比使用File和FileInfo操作同一文件

```csharp
// File类：多次操作需重复传路径，多次查询文件系统
long size1 = File.GetLength("test.txt");
DateTime createTime1 = File.GetCreationTime("test.txt");
File.Copy("test.txt", "test_file_copy.txt");

// FileInfo类：路径仅传一次，仅查询一次文件系统
FileInfo fi = new FileInfo("test.txt");
long size2 = fi.Length;
DateTime createTime2 = fi.CreationTime;
fi.CopyTo("test_fi_copy.txt");
```

## 十二、FileInfo类的主要属性有哪些？
`FileInfo`的属性用于获取文件的**元数据（静态信息）**，核心属性如下（均为只读/可写，视属性而定）：

| 属性名 | 说明 | 示例值 |
|--------|------|--------|
| `Name` | 获取文件名（含扩展名，不含路径） | "test.txt" |
| `FullName` | 获取文件的完整绝对路径（含路径+文件名） | @"C:\Users\test.txt" |
| `Extension` | 获取文件扩展名（含小数点） | ".txt" |
| `Length` | 获取文件大小（字节数），文件不存在时抛`FileNotFoundException` | 1024（1KB） |
| `Exists` | 判断文件是否存在（bool类型） | true/false |
| `CreationTime` | 获取/设置文件的创建时间 | 2026/02/25 10:30:00 |
| `LastWriteTime` | 获取/设置文件的最后修改时间 | 2026/02/25 11:45:00 |
| `LastAccessTime` | 获取/设置文件的最后访问时间 | 2026/02/25 12:00:00 |
| `IsReadOnly` | 获取/设置文件是否为只读属性（bool） | true/false |
| `DirectoryName` | 获取文件所在目录的完整路径 | @"C:\Users" |
| `Directory` | 获取文件所在目录的`DirectoryInfo`对象（可进一步操作目录） | `DirectoryInfo`实例 |

示例：访问FileInfo的核心属性

```csharp
FileInfo fi = new FileInfo(@"D:\test.txt");
// 确保文件存在（可选）
if (fi.Exists)
{
    Console.WriteLine($"文件名：{fi.Name}");
    Console.WriteLine($"完整路径：{fi.FullName}");
    Console.WriteLine($"扩展名：{fi.Extension}");
    Console.WriteLine($"文件大小：{fi.Length} 字节");
    Console.WriteLine($"创建时间：{fi.CreationTime}");
    Console.WriteLine($"是否只读：{fi.IsReadOnly}");
    Console.WriteLine($"所在目录：{fi.DirectoryName}");
}
else
{
    Console.WriteLine("文件不存在");
}
```
**输出示例**：
```
文件名：test.txt
完整路径：D:\test.txt
扩展名：.txt
文件大小：128 字节
创建时间：2026/2/25 10:30:00
是否只读：False
所在目录：D:\
```

## 十三、FileInfo类的主要方法有哪些？
`FileInfo`的方法用于对绑定的文件执行**操作行为**，核心方法与`File`类的方法功能类似，但无需重复传路径，主要方法如下：

| 方法名 | 用途 | 核心语法 |
|--------|------|----------|
| `Create()` | 创建绑定路径的文件，返回`FileStream`（可写入内容） | `fi.Create()` |
| `Delete()` | 删除绑定的文件，文件不存在时无异常 | `fi.Delete()` |
| `CopyTo()` | 复制文件到目标路径，支持覆盖 | `fi.CopyTo("target.txt")` / `fi.CopyTo("target.txt", true)`（覆盖） |
| `MoveTo()` | 移动文件到目标路径 | `fi.MoveTo(@"D:\new\test.txt")` |
| `Replace()` | 用当前文件替换目标文件，可备份原目标文件 | `fi.Replace("dest.txt", "backup.txt")` |
| `Refresh()` | 刷新文件元数据（重新读取文件系统中的属性，避免缓存过期） | `fi.Refresh()` |
| `Open()` | 以指定模式打开文件（如只读、读写），返回`FileStream` | `fi.Open(FileMode.Open, FileAccess.Read)` |
| `OpenRead()` | 以只读模式打开文件，返回`FileStream`（快捷方法） | `fi.OpenRead()` |
| `OpenWrite()` | 以只写模式打开文件，返回`FileStream`（快捷方法） | `fi.OpenWrite()` |
| `CreateText()` | 创建文件并返回`StreamWriter`（用于写入文本内容） | `fi.CreateText()` |
| `OpenText()` | 打开文件并返回`StreamReader`（用于读取文本内容） | `fi.OpenText()` |

示例：使用FileInfo的核心方法
```csharp
// 1. 创建FileInfo对象
FileInfo fi = new FileInfo("demo.txt");

// 2. 创建文件并写入内容
using (StreamWriter sw = fi.CreateText()) // 创建文件并获取写入器
{
    sw.WriteLine("Hello, FileInfo!");
}

// 3. 复制文件（覆盖已存在的目标文件）
fi.CopyTo("demo_copy.txt", true);

// 4. 修改文件为只读
fi.IsReadOnly = true;
Console.WriteLine($"文件是否只读：{fi.IsReadOnly}"); // 输出：True

// 5. 移动文件（先取消只读）
fi.IsReadOnly = false;
fi.MoveTo(@"sub\demo_moved.txt");

// 6. 刷新元数据（移动后刷新）
fi.Refresh();
Console.WriteLine($"移动后文件是否存在：{fi.Exists}"); // 输出：False（原路径已不存在）

// 7. 删除最终的文件
FileInfo movedFi = new FileInfo(@"sub\demo_moved.txt");
movedFi.Delete();
```

##  总结（核心关键点）
1. **FileInfo核心定位**：实例类，绑定单个文件路径，面向对象操作文件；
2. **创建语法**：`new FileInfo(文件路径)`，文件不存在也可创建对象；
3. **与File类的核心区别**：
   - File：静态类，单次操作传路径，多次操作重复查询文件系统；
   - FileInfo：实例类，绑定路径后反复操作，性能更优，代码更简洁；
4. **核心属性**：描述文件元数据（Length/Exists/CreationTime等）；
5. **核心方法**：执行文件操作（Create/CopyTo/MoveTo/Delete等），无需重复传路径；
6. **使用场景**：需多次操作同一个文件时优先用FileInfo，单次操作可用File类。


你希望我先补充`FileInfo.Create()`和`FileInfo.Delete()`的核心信息，再以独立表格形式总结`MoveTo、CopyTo`等6个`FileInfo`类方法的**用途、语法、参数、返回值**，并为每个方法配套可运行的代码示例，我会严格遵循C#官方规范，确保信息准确且符合实际开发场景。

## 十四、FileInfo 类是什么

- `FileInfo`是`System.IO`命名空间下的实例类，所有方法需先创建`FileInfo`对象再调用；
- 使用前需引入命名空间：`using System.IO;`；
- 示例中均使用相对路径，避免系统文件冲突，操作前建议先判断文件/目录是否存在。

---

## 十五、FileInfo.Create()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 创建`FileInfo`对象绑定路径对应的文件；若文件已存在则**覆盖**原有文件（清空内容），返回可读写的文件流用于后续操作。 |
| **语法**   | 1. `fileInfo对象.Create()`<br />2. `fileInfo对象.Create(int bufferSize)` |
| **参数**   | - bufferSize（可选）：int类型，文件流的缓冲区大小（字节），默认值4096，用于优化读写性能。 |
| **返回值** | `FileStream`：可读写的文件流对象，需手动通过`using`块/`Close()`释放资源，避免文件句柄泄漏。 |

代码示例（FileInfo.Create()）
```csharp
using System;
using System.IO;
using System.Text;

class FileInfoCreateDemo
{
    static void Main()
    {
        // 1. 创建FileInfo对象绑定目标文件
        FileInfo fi = new FileInfo("create_demo.txt");

        // 2. 基础用法：创建文件并获取文件流
        using (FileStream fs = fi.Create()) // using块自动释放FileStream
        {
            // 向文件写入内容
            string content = "FileInfo.Create() 创建的文件内容";
            byte[] bytes = Encoding.UTF8.GetBytes(content);
            fs.Write(bytes, 0, bytes.Length);
        }

        Console.WriteLine($"文件已创建：{fi.FullName}");
        Console.WriteLine($"文件大小：{fi.Length} 字节"); // 输出写入内容的字节数

        // 3. 指定缓冲区大小创建文件
        FileInfo fi2 = new FileInfo("create_demo2.txt");
        using (FileStream fs2 = fi2.Create(8192)) // 缓冲区8KB
        {
            byte[] bytes2 = Encoding.UTF8.GetBytes("指定缓冲区大小");
            fs2.Write(bytes2, 0, bytes2.Length);
        }
        Console.WriteLine($"文件2已创建：{fi2.FullName}");
    }
}
```
**输出结果**：
```
文件已创建：C:\当前项目路径\create_demo.txt
文件大小：36 字节
文件2已创建：C:\当前项目路径\create_demo2.txt
```

---

## 十六、FileInfo.Delete()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 删除`FileInfo`对象绑定路径的文件；若文件不存在/已被删除，方法**无任何操作且不抛异常**；无法删除正在被占用的文件（抛`IOException`）。 |
| **语法**   | `fileInfo对象.Delete()`                                              |
| **参数**   | 无                                                                   |
| **返回值** | 无（void）                                                           |

代码示例（FileInfo.Delete()）
```csharp
using System;
using System.IO;

class FileInfoDeleteDemo
{
    static void Main()
    {
        // 1. 创建测试文件
        FileInfo fi = new FileInfo("delete_demo.txt");
        fi.Create().Close(); // 创建文件并关闭流
        Console.WriteLine($"删除前文件是否存在：{fi.Exists}"); // 输出：True

        // 2. 删除文件
        fi.Delete();
        Console.WriteLine($"删除后文件是否存在：{fi.Exists}"); // 输出：False

        // 3. 删除不存在的文件（无异常）
        FileInfo nonExistFi = new FileInfo("non_exist.txt");
        nonExistFi.Delete(); // 无操作，不抛异常
        Console.WriteLine("尝试删除不存在的文件，无异常");

        // 4. 错误示例：删除正在占用的文件（抛IOException）
        FileInfo usedFi = new FileInfo("used_demo.txt");
        using (FileStream fs = usedFi.Create())
        {
            // usedFi.Delete(); // 文件被占用，抛IOException
        }
    }
}
```
**输出结果**：
```
删除前文件是否存在：True
删除后文件是否存在：False
尝试删除不存在的文件，无异常
```

---

## 十七、FileInfo.MoveTo()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将`FileInfo`对象绑定的源文件移动到指定目标路径；支持跨目录移动，若目标文件已存在则抛`IOException`；.NET 6+无直接覆盖参数，需手动删除目标文件后再移动。 |
| **语法**   | `fileInfo对象.MoveTo(string destFileName)`                           |
| **参数**   | destFileName：字符串，目标文件的完整路径（含文件名，如`@"sub\moved.txt"`）；若目标目录不存在，抛`DirectoryNotFoundException`。 |
| **返回值** | 无（void）                                                           |

代码示例（FileInfo.MoveTo()）
```csharp
using System;
using System.IO;

class FileInfoMoveToDemo
{
    static void Main()
    {
        // 1. 准备源文件
        FileInfo fi = new FileInfo("move_source.txt");
        fi.Create().Close(); // 创建源文件
        File.WriteAllText(fi.FullName, "移动测试内容");

        // 2. 确保目标目录存在
        string destDir = "move_target_dir";
        if (!Directory.Exists(destDir))
        {
            Directory.CreateDirectory(destDir);
        }

        // 3. 移动文件到目标目录
        string destPath = Path.Combine(destDir, "moved_file.txt");
        fi.MoveTo(destPath);
        Console.WriteLine($"文件已移动到：{destPath}");

        // 验证移动结果
        FileInfo movedFi = new FileInfo(destPath);
        Console.WriteLine($"目标路径文件是否存在：{movedFi.Exists}"); // 输出：True
        Console.WriteLine($"原路径文件是否存在：{fi.Exists}"); // 输出：False

        // 4. .NET 6+ 覆盖已存在的目标文件（需手动删除）
        string destPath2 = Path.Combine(destDir, "moved_file.txt");
        FileInfo fi2 = new FileInfo("move_source2.txt");
        fi2.Create().Close();
        if (File.Exists(destPath2))
        {
            File.Delete(destPath2); // 先删除目标文件
        }
        fi2.MoveTo(destPath2);
        Console.WriteLine($"覆盖移动完成：{destPath2}");
    }
}
```
**输出结果**：
```
文件已移动到：move_target_dir\moved_file.txt
目标路径文件是否存在：True
原路径文件是否存在：False
覆盖移动完成：move_target_dir\moved_file.txt
```

---

## 十八、FileInfo.CopyTo()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将`FileInfo`对象绑定的源文件复制到指定目标路径；支持覆盖已存在的目标文件，复制后源文件保持不变。 |
| **语法**   | 1. `fileInfo对象.CopyTo(string destFileName)`<br />2. `fileInfo对象.CopyTo(string destFileName, bool overwrite)` |
| **参数**   | - destFileName：字符串，目标文件完整路径（含文件名）；<br />- overwrite：bool，是否覆盖已存在的目标文件（true=覆盖，false=不覆盖，默认false）。 |
| **返回值** | `FileInfo`：指向目标文件的新`FileInfo`对象，可直接用于操作复制后的文件。 |

代码示例（FileInfo.CopyTo()）
```csharp
using System;
using System.IO;

class FileInfoCopyToDemo
{
    static void Main()
    {
        // 1. 准备源文件
        FileInfo fi = new FileInfo("copy_source.txt");
        fi.Create().Close();
        File.WriteAllText(fi.FullName, "复制测试内容");

        // 2. 基础复制（目标文件不存在）
        string destPath1 = "copy_target1.txt";
        FileInfo copiedFi1 = fi.CopyTo(destPath1);
        Console.WriteLine($"复制完成，目标文件路径：{copiedFi1.FullName}");
        Console.WriteLine($"目标文件内容：{File.ReadAllText(destPath1)}"); // 输出源文件内容

        // 3. 覆盖已存在的目标文件
        string destPath2 = "copy_target1.txt";
        FileInfo copiedFi2 = fi.CopyTo(destPath2, true); // overwrite=true 覆盖
        Console.WriteLine($"覆盖复制完成，目标文件大小：{copiedFi2.Length} 字节");

        // 4. 错误示例：目标文件已存在且overwrite=false（抛IOException）
        // fi.CopyTo(destPath2); // 抛IOException
    }
}
```
**输出结果**：
```
复制完成，目标文件路径：C:\当前项目路径\copy_target1.txt
目标文件内容：复制测试内容
覆盖复制完成，目标文件大小：7 字节
```

---

## 十九、FileInfo.Open()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 以指定的模式、访问权限和共享方式打开`FileInfo`对象绑定的文件，返回可读写的`FileStream`，用于灵活操作文件内容（如分段读写、追加内容）。 |
| **语法**   | 1. `fileInfo对象.Open(FileMode mode)`<br />2. `fileInfo对象.Open(FileMode mode, FileAccess access)`<br />3. `fileInfo对象.Open(FileMode mode, FileAccess access, FileShare share)` |
| **参数**   | - mode：`FileMode`枚举，文件打开模式（如`Open`=打开已存在文件、`Create`=创建新文件、`Append`=追加内容）；<br />- access：`FileAccess`枚举，文件访问权限（`Read`=只读、`Write`=只写、`ReadWrite`=读写）；<br />- share：`FileShare`枚举，文件共享模式（`None`=不共享、`Read`=允许其他程序只读）。 |
| **返回值** | `FileStream`：打开的文件流对象，需手动释放资源，避免文件句柄泄漏。     |

代码示例（FileInfo.Open()）
```csharp
using System;
using System.IO;
using System.Text;

class FileInfoOpenDemo
{
    static void Main()
    {
        FileInfo fi = new FileInfo("open_demo.txt");

        // 1. 创建并写入文件（FileMode.Create）
        using (FileStream fs = fi.Open(FileMode.Create, FileAccess.Write))
        {
            byte[] writeBytes = Encoding.UTF8.GetBytes("初始内容");
            fs.Write(writeBytes, 0, writeBytes.Length);
        }

        // 2. 追加内容（FileMode.Append）
        using (FileStream fs = fi.Open(FileMode.Append, FileAccess.Write))
        {
            byte[] appendBytes = Encoding.UTF8.GetBytes(" + 追加内容");
            fs.Write(appendBytes, 0, appendBytes.Length);
        }

        // 3. 只读模式打开并读取内容
        using (FileStream fs = fi.Open(FileMode.Open, FileAccess.Read))
        {
            byte[] readBytes = new byte[fs.Length];
            fs.Read(readBytes, 0, readBytes.Length);
            string content = Encoding.UTF8.GetString(readBytes);
            Console.WriteLine($"文件内容：{content}"); // 输出：初始内容 + 追加内容
        }

        // 4. 指定共享模式打开（允许其他程序只读）
        using (FileStream fs = fi.Open(FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
        {
            Console.WriteLine("文件已打开，允许其他程序只读访问");
        }
    }
}
```
**输出结果**：
```
文件内容：初始内容 + 追加内容
文件已打开，允许其他程序只读访问
```

---

## 二十、FileInfo.Replace()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 用`FileInfo`对象绑定的源文件替换指定的目标文件，并将原目标文件备份到指定路径；若备份路径为null，则不备份原目标文件。 |
| **语法**   | 1. `fileInfo对象.Replace(string destinationFileName, string destinationBackupFileName)`<br />2. `fileInfo对象.Replace(string destinationFileName, string destinationBackupFileName, bool ignoreMetadataErrors)` |
| **参数**   | - destinationFileName：字符串，被替换的目标文件路径（必须存在，否则抛`FileNotFoundException`）；<br />- destinationBackupFileName：字符串，原目标文件的备份路径（可为null，null=不备份）；<br />- ignoreMetadataErrors：bool，是否忽略文件元数据（如属性）复制错误（true=忽略，false=不忽略）。 |
| **返回值** | `FileInfo`：指向替换后的目标文件的新`FileInfo`对象。                 |

代码示例（FileInfo.Replace()）
```csharp
using System;
using System.IO;

class FileInfoReplaceDemo
{
    static void Main()
    {
        // 1. 准备源文件、目标文件、备份文件
        FileInfo sourceFi = new FileInfo("replace_source.txt");
        FileInfo destFi = new FileInfo("replace_target.txt");
        string backupPath = "replace_backup.txt";

        // 创建测试文件并写入内容
        sourceFi.Create().Close();
        File.WriteAllText(sourceFi.FullName, "新内容");
        destFi.Create().Close();
        File.WriteAllText(destFi.FullName, "旧内容");

        // 2. 替换目标文件并备份原文件
        FileInfo replacedFi = sourceFi.Replace(destFi.FullName, backupPath);
        Console.WriteLine($"替换完成，目标文件路径：{replacedFi.FullName}");

        // 验证结果
        string destContent = File.ReadAllText(destFi.FullName);
        string backupContent = File.ReadAllText(backupPath);
        Console.WriteLine($"替换后目标文件内容：{destContent}"); // 输出：新内容
        Console.WriteLine($"备份文件内容：{backupContent}");   // 输出：旧内容

        // 3. 替换不备份（backupPath=null）
        FileInfo sourceFi2 = new FileInfo("replace_source2.txt");
        FileInfo destFi2 = new FileInfo("replace_target2.txt");
        sourceFi2.Create().Close();
        File.WriteAllText(sourceFi2.FullName, "无备份新内容");
        destFi2.Create().Close();
        File.WriteAllText(destFi2.FullName, "无备份旧内容");
        
        sourceFi2.Replace(destFi2.FullName, null);
        Console.WriteLine($"替换{destFi2.FullName}且不备份，完成");
    }
}
```
**输出结果**：
```
替换完成，目标文件路径：C:\当前项目路径\replace_target.txt
替换后目标文件内容：新内容
备份文件内容：旧内容
替换replace_target2.txt且不备份，完成
```
FileInfo.Replace 方法示例

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== FileInfo.Replace 方法示例 ===");
        
        // 定义文件路径
        string sourcePath = "source_info.txt";
        string destinationPath = "destination_info.txt";
        string backupPath = "backup_info.txt";
        
        try
        {
            // 创建测试文件
            File.WriteAllText(sourcePath, "这是FileInfo源文件的新内容");
            File.WriteAllText(destinationPath, "这是FileInfo目标文件的旧内容");
            
            Console.WriteLine("替换前:");
            Console.WriteLine($"源文件内容: {File.ReadAllText(sourcePath)}");
            Console.WriteLine($"目标文件内容: {File.ReadAllText(destinationPath)}");
            
            // 创建 FileInfo 对象
            FileInfo sourceInfo = new FileInfo(sourcePath);
            FileInfo destinationInfo = new FileInfo(destinationPath);
            
            // 使用 FileInfo.Replace 方法
            // 将源文件替换目标文件，并创建备份
            sourceInfo.Replace(destinationPath, backupPath);
            
            Console.WriteLine("\n替换后:");
            Console.WriteLine($"源文件是否存在: {sourceInfo.Exists}");
            Console.WriteLine($"目标文件内容: {File.ReadAllText(destinationPath)}");
            Console.WriteLine($"备份文件内容: {File.ReadAllText(backupPath)}");
            
            // 清理测试文件
            File.Delete(destinationPath);
            File.Delete(backupPath);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"错误: {ex.Message}");
        }
    }
}
```

---

## 二十一、特别说明：FileInfo.Exists属性
> 重要修正：`Exists`是`FileInfo`的**属性**（不是方法），无参数、无返回值语法，此前表述有误，以下为正确信息：

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 判断`FileInfo`对象绑定的路径是否存在有效文件（非目录、非空路径）；若路径是目录/文件不存在/权限不足，均返回`false`（不抛异常）。 |
| **语法**   | `fileInfo对象.Exists`（属性访问，无括号）                            |
| **参数**   | 无（属性而非方法）                                                   |
| **返回值** | `bool`：<br />- true：路径存在且是合法文件（非目录）；<br />- false：文件不存在/路径是目录/权限不足/路径无效。 |

代码示例（FileInfo.Exists属性）
```csharp
using System;
using System.IO;

class FileInfoExistsDemo
{
    static void Main()
    {
        // 1. 检查存在的文件
        FileInfo existFi = new FileInfo("exists_demo.txt");
        existFi.Create().Close();
        Console.WriteLine($"文件{existFi.Name}是否存在：{existFi.Exists}"); // 输出：True

        // 2. 检查不存在的文件
        FileInfo nonExistFi = new FileInfo("non_exist.txt");
        Console.WriteLine($"文件{nonExistFi.Name}是否存在：{nonExistFi.Exists}"); // 输出：False

        // 3. 检查路径是目录（返回false）
        string dirPath = "test_dir";
        Directory.CreateDirectory(dirPath);
        FileInfo dirFi = new FileInfo(dirPath);
        Console.WriteLine($"目录{dirPath}被判断为文件：{dirFi.Exists}"); // 输出：False

        // 4. 检查null路径（创建对象时抛异常，而非Exists返回false）
        // FileInfo nullFi = new FileInfo(null); // 抛ArgumentNullException
        Console.WriteLine($"Exists属性仅判断文件是否存在，无异常风险");
    }
}
```
**输出结果**：
```
文件exists_demo.txt是否存在：True
文件non_exist.txt是否存在：False
目录test_dir被判断为文件：False
Exists属性仅判断文件是否存在，无异常风险
```

---

## 总结（核心关键点）
1. **调用规则**：`FileInfo`所有方法需先创建对象（`new FileInfo(路径)`），再通过`对象.方法名()`调用，无需重复传路径；
2. **返回值特性**：
   - `Create()`/`Open()`返回`FileStream`，需用`using`块释放；
   - `CopyTo()`/`Replace()`返回新的`FileInfo`对象，指向目标文件；
   - `Delete()`/`MoveTo()`无返回值（void）；
3. **Exists是属性**：需注意`FileInfo.Exists`是属性（无括号），而非方法；
4. **异常处理**：
   - `Delete()`对不存在的文件静默处理；
   - `MoveTo()`/`CopyTo()`目标文件已存在且未指定覆盖时抛`IOException`；
   - 操作被占用的文件均抛`IOException`；
5. **性能优势**：`FileInfo`创建对象时读取一次文件元数据，多次操作同一文件时比`File`类更高效。

## **二十二、FileInfo属性总览表**

| **属性名称**      | **数据类型**     | **读写性** | **说明**                     | **示例**                |
| ----------------- | ---------------- | ---------- | ---------------------------- | ----------------------- |
| **Name**          | `string`         | 只读       | 获取文件的名称（包含扩展名） | `"document.txt"`        |
| **Length**        | `long`           | 只读       | 获取文件的大小（字节）       | `1024`                  |
| **IsReadOnly**    | `bool`           | 读写       | 获取或设置文件是否只读       | `true` `/` `false`        |
| **FullName**      | `string`         | 只读       | 获取文件的完整路径           | `@"C:\Files\doc.txt"`   |
| **Exists**        | `bool`           | 只读       | 检查文件是否存在             | `true` `/` `false`        |
| **DirectoryName** | `string`         | 只读       | 获取文件所在目录的路径       | `@"C:\Files"`           |
| **CreationTime**  | `DateTime`       | 读写       | 获取或设置文件的创建时间     | `2024-01-15 10:30:00`   |
| **Attributes**    | `FileAttributes` | 读写       | 获取或设置文件的属性         | `FileAttributes.Normal` |
| **Extension**     | `string`         | 只读       | 获取文件的扩展名             | `".txt"`                |
| **LastWriteTime** | `DateTime`       | 读写       | 获取或设置文件的最后修改时间 | `2024-01-15 14:20:00`   |

### **1. Name - 文件名**

```csharp
FileInfo file = new FileInfo(@"C:\Files\document.txt");
Console.WriteLine(file.Name); // 输出: document.txt
```

- 只包含文件名和扩展名，不包含路径
- 常用于显示文件名给用户

### **2. Length - 文件大小**

```csharp
FileInfo file = new FileInfo("test.txt");
Console.WriteLine($"文件大小: {file.Length} 字节");
Console.WriteLine($"约 {file.Length / 1024} KB");
```

- 返回文件的字节数
- 文件不存在时会抛出异常，使用前要检查 `Exists`

### **3. IsReadOnly - 只读属性**

```csharp
FileInfo file = new FileInfo("readme.txt");
// 检查是否只读
if (file.IsReadOnly)
{
    Console.WriteLine("文件是只读的");
}

// 设置文件为只读
file.IsReadOnly = true;
```

- 可以读取和设置
- 设置为 `true` 时文件不能被修改

### **4. FullName - 完整路径**

```csharp
FileInfo file = new FileInfo("data.txt");
Console.WriteLine(file.FullName); 
// 输出完整路径，如: C:\Projects\data.txt
```

- 包含完整路径和文件名
- 适合用于需要完整路径的场景

### **5. Exists - 存在性检查**

```csharp
FileInfo file = new FileInfo("somefile.txt");
if (file.Exists)
{
    Console.WriteLine("文件存在");
    Console.WriteLine($"大小: {file.Length}");
}
else
{
    Console.WriteLine("文件不存在");
}
```

- **重要**：在访问其他属性前先检查此属性
- 避免文件不存在时出现异常

### **6. DirectoryName - 目录路径**

```csharp
FileInfo file = new FileInfo(@"C:\Users\Tom\file.txt");
Console.WriteLine(file.DirectoryName); // 输出: C:\Users\Tom
```

- 只返回目录路径，不包含文件名
- 与 `Name` 属性配合使用

### **7. CreationTime - 创建时间**

```csharp
FileInfo file = new FileInfo("log.txt");
// 读取创建时间
Console.WriteLine($"创建时间: {file.CreationTime}");

// 设置创建时间
file.CreationTime = new DateTime(2024, 1, 1, 10, 0, 0);
```

- 可以读取和设置
- 设置时间需要适当的权限

### **8. Attributes - 文件属性**

```csharp
FileInfo file = new FileInfo("config.ini");
// 读取属性
Console.WriteLine($"当前属性: {file.Attributes}");

// 设置为普通文件（可写）
file.Attributes = FileAttributes.Normal;

// 设置为隐藏文件
file.Attributes = FileAttributes.Hidden;
```

- `FileAttributes` 是枚举类型
- 常用值：`Normal`, `ReadOnly`, `Hidden`, `Archive`

### **9. Extension - 文件扩展名**

```csharp
FileInfo file1 = new FileInfo("photo.jpg");
FileInfo file2 = new FileInfo("document");
FileInfo file3 = new FileInfo("backup.");

Console.WriteLine(file1.Extension); // 输出: .jpg
Console.WriteLine(file2.Extension); // 输出: 空字符串
Console.WriteLine(file3.Extension); // 输出: .
```

- 总是包含点号（.）
- 没有扩展名时返回空字符串

### **10. LastWriteTime - 最后修改时间 ⭐（新增）**

```csharp
FileInfo file = new FileInfo("data.txt");
// 读取最后修改时间
Console.WriteLine($"最后修改: {file.LastWriteTime}");

// 设置最后修改时间
file.LastWriteTime = DateTime.Now;

// 比较创建时间和修改时间
if (file.CreationTime == file.LastWriteTime)
{
    Console.WriteLine("文件创建后未被修改");
}
else
{
    Console.WriteLine("文件已被修改过");
}
```

- 记录文件内容最后一次被修改的时间
- 常用于判断文件是否需要备份或同步

------

## 二十三、完整综合示例

### File 类方法综合示例 1
```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== File.Replace 和 FileInfo.Replace 完整示例 ===");
        
        // 测试文件路径
        string file1 = "test1.txt";
        string file2 = "test2.txt";
        string file3 = "test3.txt";
        string backup1 = "backup1.txt";
        string backup2 = "backup2.txt";
        
        try
        {
            // 准备测试数据
            PrepareTestFiles(file1, file2, file3);
            
            // 示例1: File.Replace 基础用法
            Console.WriteLine("\n--- File.Replace 示例 ---");
            DemonstrateFileReplace(file1, file2, backup1);
            
            // 示例2: FileInfo.Replace 基础用法
            Console.WriteLine("\n--- FileInfo.Replace 示例 ---");
            DemonstrateFileInfoReplace(file1, file3, backup2);
            
            // 示例3: 不创建备份的替换
            Console.WriteLine("\n--- 无备份替换示例 ---");
            DemonstrateReplaceWithoutBackup();
            
            // 清理
            CleanupFiles(file1, file2, file3, backup1, backup2);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"发生错误: {ex.Message}");
            CleanupFiles(file1, file2, file3, backup1, backup2);
        }
    }
    
    static void PrepareTestFiles(string file1, string file2, string file3)
    {
        File.WriteAllText(file1, "文件1的初始内容");
        File.WriteAllText(file2, "文件2的旧内容");
        File.WriteAllText(file3, "文件3的原始内容");
        Console.WriteLine("测试文件创建完成");
    }
    
    static void DemonstrateFileReplace(string source, string destination, string backup)
    {
        Console.WriteLine($"替换前 - 目标文件内容: {File.ReadAllText(destination)}");
        
        // File.Replace 方法
        File.Replace(source, destination, backup);
        
        Console.WriteLine($"替换后 - 目标文件内容: {File.ReadAllText(destination)}");
        Console.WriteLine($"备份文件内容: {File.ReadAllText(backup)}");
        Console.WriteLine($"源文件是否存在: {File.Exists(source)}");
    }
    
    static void DemonstrateFileInfoReplace(string source, string destination, string backup)
    {
        Console.WriteLine($"替换前 - 目标文件内容: {File.ReadAllText(destination)}");
        
        // FileInfo.Replace 方法
        FileInfo sourceFile = new FileInfo(source);
        sourceFile.Replace(destination, backup);
        
        Console.WriteLine($"替换后 - 目标文件内容: {File.ReadAllText(destination)}");
        Console.WriteLine($"备份文件内容: {File.ReadAllText(backup)}");
        Console.WriteLine($"源文件是否存在: {sourceFile.Exists}");
    }
    
    static void DemonstrateReplaceWithoutBackup()
    {
        string temp1 = "temp1.txt";
        string temp2 = "temp2.txt";
        
        File.WriteAllText(temp1, "临时文件1的内容");
        File.WriteAllText(temp2, "临时文件2的旧内容");
        
        Console.WriteLine($"替换前: {File.ReadAllText(temp2)}");
        
        // 不创建备份的替换
        File.Replace(temp1, temp2, null);
        
        Console.WriteLine($"替换后: {File.ReadAllText(temp2)}");
        
        File.Delete(temp1);
        File.Delete(temp2);
    }
    
    static void CleanupFiles(params string[] files)
    {
        foreach (string file in files)
        {
            if (File.Exists(file))
            {
                File.Delete(file);
            }
        }
        Console.WriteLine("清理完成");
    }
}
```
运行结果示例

```
=== File.Replace 和 FileInfo.Replace 完整示例 ===
测试文件创建完成

--- File.Replace 示例 ---
替换前 - 目标文件内容: 文件2的旧内容
替换后 - 目标文件内容: 文件1的初始内容
备份文件内容: 文件2的旧内容
源文件是否存在: False

--- FileInfo.Replace 示例 ---
替换前 - 目标文件内容: 文件3的原始内容
替换后 - 目标文件内容: 文件1的初始内容
备份文件内容: 文件3的原始内容
源文件是否存在: False

--- 无备份替换示例 ---
替换前: 临时文件2的旧内容
替换后: 临时文件1的内容

清理完成
```

### **File 类属性综合示例**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        FileInfo file = new FileInfo(@"C:\Test\example.txt");
        
        Console.WriteLine("=== 文件信息报告 ===");
        Console.WriteLine($"文件名: {file.Name}");
        Console.WriteLine($"扩展名: {file.Extension}");
        Console.WriteLine($"完整路径: {file.FullName}");
        Console.WriteLine($"所在目录: {file.DirectoryName}");
        
        if (file.Exists)
        {
            Console.WriteLine($"文件大小: {file.Length} 字节");
            Console.WriteLine($"是否只读: {file.IsReadOnly}");
            Console.WriteLine($"创建时间: {file.CreationTime}");
            Console.WriteLine($"修改时间: {file.LastWriteTime}");
            Console.WriteLine($"文件属性: {file.Attributes}");
        }
        else
        {
            Console.WriteLine("⚠️ 文件不存在");
        }
    }
}
```

### 注意事项

1. **先检查 Exists**：访问其他属性前先检查文件是否存在
2. **理解只读属性**：`Name`, `FullName` 等不能修改
3. **注意异常处理**：文件不存在时会抛出异常



## 练习题

根据以上10个属性，设计的5道简单的练习题，只使用FileInfo类的属性，不涉及复杂的方法调用，适合初学者巩固对FileInfo属性的理解！

### **练习题1：单个文件信息查看器**

**要求**：创建一个程序，让用户输入文件路径，显示该文件的所有基本信息：

- 文件名（Name）
- 文件大小（Length）
- 是否只读（IsReadOnly）
- 完整路径（FullName）
- 是否存在（Exists）
- 所在目录（DirectoryName）
- 创建时间（CreationTime）
- 文件属性（Attributes）
- 扩展名（Extension）

**示例输出**：

```csharp
文件名: test.txt
文件大小: 1024 字节
是否只读: False
完整路径: C:\test.txt
是否存在: True
所在目录: C:\
创建时间: 2024-01-15 10:30:00
文件属性: Archive
扩展名: .txt
```

### **练习题2：文件状态检查器**

**要求**：检查指定文件的状态并给出简单报告：

1. 使用 `Exists` 检查文件是否存在
2. 如果存在，使用 `IsReadOnly` 和 `Attributes` 判断文件状态
3. 使用 `Length` 显示文件大小
4. 使用 `CreationTime` 显示文件年龄

**提示**：如果文件不存在，显示"文件不存在"；如果存在，显示详细状态。

### **练习题3：只读属性切换器**

**要求**：创建一个程序，可以切换文件的只读状态：

1. 使用 `Exists` 检查文件是否存在
2. 显示当前的 `IsReadOnly` 状态
3. 切换只读状态（如果只读就改为可写，如果可写就改为只读）
4. 显示切换后的 `IsReadOnly` 状态和 `Attributes`

### **练习题4：文件基本信息对比**

**要求**：比较两个文件的基本信息：

- 使用 `Name` 和 `Extension` 比较文件名和类型
- 使用 `Length` 比较文件大小
- 使用 `CreationTime` 比较创建时间
- 使用 `IsReadOnly` 比较只读状态

**输出示例**：

```
文件1比文件2大：是
文件类型相同：是
文件1创建时间更早：否
都是只读文件：否
```

### **练习题5：文件属性分析器**

**要求**：分析一个文件的属性并给出简单描述：

1. 使用 `Exists` 验证文件存在
2. 使用 `Extension` 判断文件类型（.txt=文本文件，.jpg=图片等）
3. 使用 `Length` 判断文件大小级别（小文件`<`1MB，中文件1-10MB，大文件`>`10MB）
4. 使用 `IsReadOnly` 和 `Attributes` 描述文件保护状态
5. 使用 `CreationTime` 判断文件新旧程度

**示例输出**：

```csharp
这是一个文本文件(.txt)
属于小文件(256 字节)
文件可读写
创建于3天前
```

------

### **参考答案模板（练习题1示例）**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.Write("请输入文件路径: ");
        string filePath = Console.ReadLine();
        
        FileInfo file = new FileInfo(filePath);
        
        Console.WriteLine("=== 文件信息 ===");
        Console.WriteLine($"文件名: {file.Name}");
        Console.WriteLine($"扩展名: {file.Extension}");
        
        if (file.Exists)
        {
            Console.WriteLine($"文件大小: {file.Length} 字节");
            Console.WriteLine($"是否只读: {file.IsReadOnly}");
            Console.WriteLine($"完整路径: {file.FullName}");
            Console.WriteLine($"所在目录: {file.DirectoryName}");
            Console.WriteLine($"创建时间: {file.CreationTime}");
            Console.WriteLine($"文件属性: {file.Attributes}");
            Console.WriteLine($"是否存在: {file.Exists}");
        }
        else
        {
            Console.WriteLine("文件不存在！");
        }
    }
}
```

### **练习题2答案：文件状态检查器**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.Write("请输入文件路径: ");
        string filePath = Console.ReadLine();
        
        FileInfo file = new FileInfo(filePath);
        
        Console.WriteLine("=== 文件状态报告 ===");
        
        // 检查文件是否存在
        if (!file.Exists)
        {
            Console.WriteLine("❌ 文件不存在");
            return;
        }
        
        Console.WriteLine("✅ 文件存在");
        
        // 文件大小信息
        Console.WriteLine($"📁 文件大小: {file.Length} 字节");
        if (file.Length < 1024)
        {
            Console.WriteLine("   大小分类: 小文件");
        }
        else if (file.Length < 1024 * 1024)
        {
            Console.WriteLine("   大小分类: 中等文件");
        }
        else
        {
            Console.WriteLine("   大小分类: 大文件");
        }
        
        // 只读状态
        if (file.IsReadOnly)
        {
            Console.WriteLine("🔒 文件状态: 只读文件");
        }
        else
        {
            Console.WriteLine("✏️  文件状态: 可写文件");
        }
        
        // 文件属性
        Console.WriteLine($"🏷️  文件属性: {file.Attributes}");
        
        // 文件年龄
        DateTime now = DateTime.Now;
        TimeSpan age = now - file.CreationTime;
        Console.WriteLine($"📅 文件年龄: {age.Days} 天 {age.Hours} 小时");
        Console.WriteLine($"⏰ 创建时间: {file.CreationTime}");
    }
}
```

### **练习题3答案：只读属性切换器**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.Write("请输入文件路径: ");
        string filePath = Console.ReadLine();
        
        FileInfo file = new FileInfo(filePath);
        
        // 检查文件是否存在
        if (!file.Exists)
        {
            Console.WriteLine("文件不存在！");
            return;
        }
        
        Console.WriteLine("=== 只读属性切换器 ===");
        
        // 显示当前状态
        Console.WriteLine($"当前只读状态: {file.IsReadOnly}");
        Console.WriteLine($"当前文件属性: {file.Attributes}");
        
        // 切换只读状态
        if (file.IsReadOnly)
        {
            // 从只读改为可写
            file.IsReadOnly = false;
            Console.WriteLine("✅ 已从只读改为可写");
        }
        else
        {
            // 从可写改为只读
            file.IsReadOnly = true;
            Console.WriteLine("✅ 已从可写改为只读");
        }
        
        // 显示切换后状态
        Console.WriteLine($"切换后只读状态: {file.IsReadOnly}");
        Console.WriteLine($"切换后文件属性: {file.Attributes}");
        
        // 验证切换是否成功
        FileInfo checkFile = new FileInfo(filePath);
        Console.WriteLine($"验证只读状态: {checkFile.IsReadOnly}");
    }
}
```

### **练习题4答案：文件基本信息对比**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.Write("请输入第一个文件路径: ");
        string filePath1 = Console.ReadLine();
        
        Console.Write("请输入第二个文件路径: ");
        string filePath2 = Console.ReadLine();
        
        FileInfo file1 = new FileInfo(filePath1);
        FileInfo file2 = new FileInfo(filePath2);
        
        Console.WriteLine("=== 文件对比结果 ===");
        
        // 检查文件是否存在
        if (!file1.Exists || !file2.Exists)
        {
            Console.WriteLine("错误：有一个或两个文件不存在！");
            return;
        }
        
        // 比较文件大小
        bool file1Larger = file1.Length > file2.Length;
        Console.WriteLine($"文件1比文件2大: {file1Larger}");
        Console.WriteLine($"文件1大小: {file1.Length} 字节");
        Console.WriteLine($"文件2大小: {file2.Length} 字节");
        
        // 比较文件类型
        bool sameExtension = file1.Extension == file2.Extension;
        Console.WriteLine($"文件类型相同: {sameExtension}");
        Console.WriteLine($"文件1类型: {file1.Extension}");
        Console.WriteLine($"文件2类型: {file2.Extension}");
        
        // 比较文件名
        bool sameName = file1.Name == file2.Name;
        Console.WriteLine($"文件名相同: {sameName}");
        Console.WriteLine($"文件1名称: {file1.Name}");
        Console.WriteLine($"文件2名称: {file2.Name}");
        
        // 比较创建时间
        bool file1Older = file1.CreationTime < file2.CreationTime;
        Console.WriteLine($"文件1创建时间更早: {file1Older}");
        Console.WriteLine($"文件1创建时间: {file1.CreationTime}");
        Console.WriteLine($"文件2创建时间: {file2.CreationTime}");
        
        // 比较只读状态
        bool bothReadOnly = file1.IsReadOnly && file2.IsReadOnly;
        Console.WriteLine($"都是只读文件: {bothReadOnly}");
        Console.WriteLine($"文件1只读: {file1.IsReadOnly}");
        Console.WriteLine($"文件2只读: {file2.IsReadOnly}");
    }
}
```

### **练习题5答案：文件属性分析器**

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.Write("请输入文件路径: ");
        string filePath = Console.ReadLine();
        
        FileInfo file = new FileInfo(filePath);
        
        Console.WriteLine("=== 文件属性分析 ===");
        
        // 检查文件是否存在
        if (!file.Exists)
        {
            Console.WriteLine("❌ 文件不存在，无法分析");
            return;
        }
        
        // 分析文件类型
        string fileType = AnalyzeFileType(file.Extension);
        Console.WriteLine($"📄 文件类型: {fileType}({file.Extension})");
        
        // 分析文件大小
        string sizeCategory = AnalyzeFileSize(file.Length);
        Console.WriteLine($"📊 文件大小: {sizeCategory}({file.Length} 字节)");
        
        // 分析保护状态
        string protectionStatus = AnalyzeProtection(file.IsReadOnly, file.Attributes);
        Console.WriteLine($"🔐 保护状态: {protectionStatus}");
        
        // 分析文件新旧
        string ageStatus = AnalyzeFileAge(file.CreationTime);
        Console.WriteLine($"📅 文件新旧: {ageStatus}");
        Console.WriteLine($"⏰ 具体时间: {file.CreationTime}");
    }
    
    // 分析文件类型
    static string AnalyzeFileType(string extension)
    {
        switch (extension.ToLower())
        {
            case ".txt": return "文本文件";
            case ".jpg": case ".png": case ".gif": return "图片文件";
            case ".doc": case ".docx": return "Word文档";
            case ".pdf": return "PDF文档";
            case ".exe": return "可执行文件";
            default: return "其他文件";
        }
    }
    
    // 分析文件大小
    static string AnalyzeFileSize(long length)
    {
        if (length < 1024) // 小于1KB
            return "很小";
        else if (length < 1024 * 1024) // 小于1MB
            return "小文件";
        else if (length < 1024 * 1024 * 10) // 小于10MB
            return "中等文件";
        else
            return "大文件";
    }
    
    // 分析保护状态
    static string AnalyzeProtection(bool isReadOnly, FileAttributes attributes)
    {
        if (isReadOnly)
            return "受保护(只读)";
        else
            return "可读写";
    }
    
    // 分析文件新旧
    static string AnalyzeFileAge(DateTime creationTime)
    {
        TimeSpan age = DateTime.Now - creationTime;
        
        if (age.Days == 0)
            return "今天创建";
        else if (age.Days < 7)
            return "近期创建";
        else if (age.Days < 30)
            return "较新文件";
        else if (age.Days < 365)
            return "普通文件";
        else
            return "旧文件";
    }
}
```


## 知识点
1. 如何使用File类
2. File类的六种常用方法是什么，要求默写
3. File.Create()方法的用途、语法、参数、返回值是什么
4. File.Delete()方法的用途、语法、参数、返回值是什么
5. File.Move()方法的用途、语法、参数、返回值是什么
6. File.Copy()方法的用途、语法、参数、返回值是什么
7. File.Replace()方法的用途、语法、参数、返回值是什么
8. File.Exists()方法的用途、语法、参数、返回值是什么
- 使用File类的Create方法创建文件
- 使用File类的Copy方法复制文件
- 使用File类的Move方法移动文件
- 使用File类的Delete方法删除文件
- 使用File类的Replace方法替换文件

1.FileInfo类是什么

2.如何使用FileInfo类

3.创建FileInfo对象的语法是什么

4.FileInfo类与File类的区别是什么

5.FileInfo类的主要属性有哪些

6.FileInfo类的主要方法有哪些

7.fileInfo.Create()方法的用途、语法、参数、返回值是什么

8.fileInfo.Delete()方法的用途、语法、参数、返回值是什么

9.FileInfo.MoveTo()方法的用途、语法、参数、返回值是什么

10.FileInfo.CopyTo方法的用途、语法、参数、返回值是什么

11.FileInfo.Open()方法的用途、语法、参数、返回值是什么

12.FileInfo.Replace()方法的用途、语法、参数、返回值是什么

13.FileInfo.Exists()方法的用途、语法、参数、返回值是什么

### FileInfo类练习题

使用FileInfo类Create方法创建文件

使用FileInfo类的CopyTo方法复制文件

使用FileInfo类的MoveTo方法移动文件

使用FileInfo类的Delete方法删除文件

使用FileInfo类的Replace方法替换文件

如何判断文件是否存在