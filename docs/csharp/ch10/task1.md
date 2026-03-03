---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 操作文件   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 操作文件   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 高考考点
C#的文件访问

1. 掌握文件、文件流FileStream的概念；
2. 掌握FileStream对文本文件和二进制文件的读写。


## 一、文件是什么

### (一) 定义

文件是保存在存储介质上的一组相关信息的集合。

文件是以计算机存储设备为载体存储在计算机上的信息的集合。

文件可以是：文本文件、数据文件、图片文件、程序文件等。

### (二)文件管理是什么

文件管理是指对文件的存储、读取、修改、复制、移动、删除等操作。

### (三)文件分类

#### 1.根据数据性质
- 程序文件
- 数据文件

#### 2.根据文件的存取方式
- 顺序文件
- 随机文件
- 二进制文件


## 二、System.IO是什么

### (一)定义
System.IO是一个管理文件和流的命名空间，

### (二)System.IO的常用类

#### 1.文件操作类

```csharp
//文件操作
File(静), FileInfo //文件创建、删除、复制、移动等
​
//目录操作
Directory(静), DirectoryInfo  //目录创建、删除、遍历等
DriveInfo  //驱动器信息
  
//路径操作
Path(静)
```

#### 2.数据流操作类

```csharp
//基础流
Stream
FileStream //文件流
MemoryStream //内存流
  
//文本数据读写
StreamReader, StreamWriter //文本文件读写
StringReader, StringWriter // 字符串读写
  
//二进制数据读写
BinaryReader, BinaryWriter

```

## 三、File类
### (一)File类是什么
`File`类是C#中用于操作文件的静态类（位于`System.IO`命名空间），所有方法均为静态调用；
- 使用前需引入命名空间：`using System.IO;`；
- 文件操作需注意**路径合法性**和**权限问题**（如写入系统目录需管理员权限）；
- 示例中均使用相对路径/临时路径，避免系统文件冲突。

### (二)File.Create()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 在指定路径创建新文件，若文件已存在则**覆盖**该文件（清空原有内容）；返回可读写的文件流，需手动关闭/释放。 |
| **语法**   | 1. `File.Create(string path)`<br />2. `File.Create(string path, int bufferSize)`<br />3. `File.Create(string path, int bufferSize, FileOptions options)` |
| **参数**   | - path：字符串，文件的完整/相对路径（如`"test.txt"`、`@"D:\files\demo.txt"`）；<br />- bufferSize：int，文件流的缓冲区大小（字节），默认4096；<br />- FileOptions：枚举，文件创建选项（如`FileOptions.WriteThrough`直接写入磁盘，跳过缓存）。 |
| **返回值** | `FileStream`：可读写的文件流对象，用于后续操作（如写入内容），使用后需调用`Close()`/`Dispose()`释放资源。 |

### (三)File.Delete()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 删除指定路径的文件；若文件不存在，方法**不会抛异常**（静默处理）；无法删除正在使用的文件（抛`IOException`）。 |
| **语法**   | `File.Delete(string path)`                                           |
| **参数**   | path：字符串，要删除的文件路径（支持相对/绝对路径）；若路径是目录（而非文件），方法无效果（不抛异常）。 |
| **返回值** | 无（void）。                                                         |

### (四)File.Move()

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将文件从源路径移动到目标路径；支持跨目录移动，若目标文件已存在则抛`IOException`；无法移动正在使用的文件。 |
| **语法**   | 1. `File.Move(string sourceFileName, string destFileName)`<br />2. `File.Move(string sourceFileName, string destFileName, bool overwrite)`（.NET 5+支持覆盖） |
| **参数**   | - sourceFileName：字符串，源文件路径（必须是文件，不能是目录）；<br />- destFileName：字符串，目标文件路径（包含文件名，如`@"D:\new\test.txt"`）；<br />- overwrite：bool（.NET 5+），是否覆盖已存在的目标文件（true=覆盖，false=不覆盖）。 |
| **返回值** | 无（void）。                                                         |

### (五)File.Copy()

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将源文件复制到目标路径；支持覆盖已存在的目标文件，可指定是否复制文件属性（如只读、隐藏）。 |
| **语法**   | 1. `File.Copy(string sourceFileName, string destFileName)`<br />2. `File.Copy(string sourceFileName, string destFileName, bool overwrite)`<br />3. `File.Copy(string sourceFileName, string destFileName, bool overwrite, CopyOptions copyOptions)`（.NET 7+） |
| **参数**   | - sourceFileName：字符串，源文件路径（必须存在，否则抛`FileNotFoundException`）；<br />- destFileName：字符串，目标文件路径（包含文件名）；<br />- overwrite：bool，是否覆盖已存在的目标文件（true=覆盖，false=不覆盖，默认false）；<br />- copyOptions：枚举（.NET 7+），复制选项（如`CopyOptions.CopySymbolicLink`复制符号链接）。 |
| **返回值** | 无（void）。                                                         |

### (六)File.Replace()

| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 用源文件替换目标文件，并将原目标文件备份到指定路径；若备份文件已存在，可选择覆盖。 |
| **语法**   | 1. `File.Replace(string sourceFileName, string destinationFileName, string destinationBackupFileName)`<br />2. `File.Replace(string sourceFileName, string destinationFileName, string destinationBackupFileName, bool ignoreMetadataErrors)` |
| **参数**   | - sourceFileName：字符串，源文件路径（替换用的文件，必须存在）；<br />- destinationFileName：字符串，被替换的目标文件路径（必须存在）；<br />- destinationBackupFileName：字符串，原目标文件的备份路径（可为null，null=不备份）；<br />- ignoreMetadataErrors：bool，是否忽略元数据（如文件属性）复制错误（true=忽略，false=不忽略）。 |
| **返回值** | 无（void）。                                                         |

### (七)File.Exists()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 判断指定路径的文件是否存在；若路径是目录、权限不足、路径无效，均返回`false`（不抛异常）。 |
| **语法**   | `File.Exists(string path)`                                           |
| **参数**   | path：字符串，文件路径（支持相对/绝对路径）；可为null，返回`false`。  |
| **返回值** | `bool`：<br />- true：文件存在且路径是合法文件（非目录）；<br />- false：文件不存在/路径是目录/权限不足/路径无效。 |


## 四、FileInfo类

### (一)FileInfo类是什么？
`FileInfo`是C#中位于`System.IO`命名空间下的**实例类**，用于**描述和操作单个文件的属性与行为**（如文件大小、创建时间、复制/移动/删除文件等）。
- 核心定位：是文件的“实例化描述”——创建`FileInfo`对象时会绑定具体的文件路径，后续可通过该对象反复操作这个文件，无需重复传入路径；
- 底层逻辑：`FileInfo`封装了文件的元数据（属性）和操作方法，本质是对文件系统中单个文件的“面向对象封装”；
- 关键特点：属于值类型相关的实例类，创建对象时会读取一次文件元数据，后续重复访问属性时不会重复查询文件系统（性能更优）。

- `FileInfo`是`System.IO`命名空间下的实例类，所有方法需先创建`FileInfo`对象再调用；
- 使用前需引入命名空间：`using System.IO;`；
- 示例中均使用相对路径，避免系统文件冲突，操作前建议先判断文件/目录是否存在。

### (二)如何使用FileInfo类？
使用`FileInfo`的核心步骤是 **“创建对象 → 调用方法/属性”**，具体流程如下：

创建对象的语法

| 构造函数语法 | 说明 |
|--------------|------|
| `new FileInfo(string filePath)` | 传入文件的相对/绝对路径，创建绑定该文件的`FileInfo`对象（文件不存在也可创建对象，仅后续操作会抛异常） |
| `new FileInfo(string filePath, FileShare share)` | 高级用法：指定文件共享模式（如`FileShare.Read`允许其他程序读取该文件） |


示例：创建FileInfo对象

```csharp
// 步骤1：引入命名空间
using System.IO; // 必须引入，否则无法识别FileInfo

// 步骤2：创建File1对象（绝对路径）
FileInfo file1 = new FileInfo(@"D:\test.txt");// 绑定到具体文件路径（无论文件是否存在）（推荐用@转义反斜杠）

// 步骤2：创建FileInfo对象（相对路径）
FileInfo file2 = new FileInfo("test.txt");

// 步骤3：使用对象的属性/方法操作文件
Console.WriteLine($"文件大小：{file1.Length} 字节"); // 获取文件属性
file1.CopyTo(@"D:\test_copy.txt"); // 复制文件
```

### (三)FileInfo类与File类的区别
`FileInfo`和`File`都用于文件操作，但设计理念和使用场景完全不同，核心区别如下：

| 对比维度 | File类 | FileInfo类 |
|----------|--------|------------|
| 类类型 | 静态类（static） | 实例类（非static） |
| 调用方式 | 通过`File.方法名(路径)`调用（如`File.Copy("a.txt", "b.txt")`） | 先创建`FileInfo`对象（绑定路径），再调用`对象.方法名()`（如`new FileInfo("a.txt").CopyTo("b.txt")`） |
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

### (四)FileInfo类的主要属性有哪些？
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
## 五、FileInfo类的方法
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

### (一)FileInfo.Create()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 创建`FileInfo`对象绑定路径对应的文件；若文件已存在则**覆盖**原有文件（清空内容），返回可读写的文件流用于后续操作。 |
| **语法**   | 1. `fileInfo对象.Create()`<br />2. `fileInfo对象.Create(int bufferSize)` |
| **参数**   | - bufferSize（可选）：int类型，文件流的缓冲区大小（字节），默认值4096，用于优化读写性能。 |
| **返回值** | `FileStream`：可读写的文件流对象，需手动通过`using`块/`Close()`释放资源，避免文件句柄泄漏。 |

### (二)FileInfo.MoveTo()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将`FileInfo`对象绑定的源文件移动到指定目标路径；支持跨目录移动，若目标文件已存在则抛`IOException`；.NET 6+无直接覆盖参数，需手动删除目标文件后再移动。 |
| **语法**   | `fileInfo对象.MoveTo(string destFileName)`                           |
| **参数**   | destFileName：字符串，目标文件的完整路径（含文件名，如`@"sub\moved.txt"`）；若目标目录不存在，抛`DirectoryNotFoundException`。 |
| **返回值** | 无（void）                                                           |

### (三)FileInfo.CopyTo()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将`FileInfo`对象绑定的源文件复制到指定目标路径；支持覆盖已存在的目标文件，复制后源文件保持不变。 |
| **语法**   | 1. `fileInfo对象.CopyTo(string destFileName)`<br />2. `fileInfo对象.CopyTo(string destFileName, bool overwrite)` |
| **参数**   | - destFileName：字符串，目标文件完整路径（含文件名）；<br />- overwrite：bool，是否覆盖已存在的目标文件（true=覆盖，false=不覆盖，默认false）。 |
| **返回值** | `FileInfo`：指向目标文件的新`FileInfo`对象，可直接用于操作复制后的文件。 |

### (四)FileInfo.Open()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 以指定的模式、访问权限和共享方式打开`FileInfo`对象绑定的文件，返回可读写的`FileStream`，用于灵活操作文件内容（如分段读写、追加内容）。 |
| **语法**   | 1. `fileInfo对象.Open(FileMode mode)`<br />2. `fileInfo对象.Open(FileMode mode, FileAccess access)`<br />3. `fileInfo对象.Open(FileMode mode, FileAccess access, FileShare share)` |
| **参数**   | - mode：`FileMode`枚举，文件打开模式（如`Open`=打开已存在文件、`Create`=创建新文件、`Append`=追加内容）；<br />- access：`FileAccess`枚举，文件访问权限（`Read`=只读、`Write`=只写、`ReadWrite`=读写）；<br />- share：`FileShare`枚举，文件共享模式（`None`=不共享、`Read`=允许其他程序只读）。 |
| **返回值** | `FileStream`：打开的文件流对象，需手动释放资源，避免文件句柄泄漏。     |

### (五)FileInfo.Replace()
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 用`FileInfo`对象绑定的源文件替换指定的目标文件，并将原目标文件备份到指定路径；若备份路径为null，则不备份原目标文件。 |
| **语法**   | 1. `fileInfo对象.Replace(string destinationFileName, string destinationBackupFileName)`<br />2. `fileInfo对象.Replace(string destinationFileName, string destinationBackupFileName, bool ignoreMetadataErrors)` |
| **参数**   | - destinationFileName：字符串，被替换的目标文件路径（必须存在，否则抛`FileNotFoundException`）；<br />- destinationBackupFileName：字符串，原目标文件的备份路径（可为null，null=不备份）；<br />- ignoreMetadataErrors：bool，是否忽略文件元数据（如属性）复制错误（true=忽略，false=不忽略）。 |
| **返回值** | `FileInfo`：指向替换后的目标文件的新`FileInfo`对象。                 |


## 六、FileInfo属性总览

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


### (一)**Name - 文件名**

```csharp
FileInfo file = new FileInfo(@"C:\Files\document.txt");
Console.WriteLine(file.Name); // 输出: document.txt
```

- 只包含文件名和扩展名，不包含路径
- 常用于显示文件名给用户

### (二)**Length - 文件大小**

```csharp
FileInfo file = new FileInfo("test.txt");
Console.WriteLine($"文件大小: {file.Length} 字节");
Console.WriteLine($"约 {file.Length / 1024} KB");
```

- 返回文件的字节数
- 文件不存在时会抛出异常，使用前要检查 `Exists`

### (三)**IsReadOnly - 只读属性**

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

### (四)FullName - 完整路径

```csharp
FileInfo file = new FileInfo("data.txt");
Console.WriteLine(file.FullName); 
// 输出完整路径，如: C:\Projects\data.txt
```

- 包含完整路径和文件名
- 适合用于需要完整路径的场景

### (五)Exists - 存在性检查


| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 判断`FileInfo`对象绑定的路径是否存在有效文件（非目录、非空路径）；若路径是目录/文件不存在/权限不足，均返回`false`（不抛异常）。 |
| **语法**   | `fileInfo对象.Exists`（属性访问，无括号）                            |
| **参数**   | 无（属性而非方法）                                                   |
| **返回值** | `bool`：<br />- true：路径存在且是合法文件（非目录）；<br />- false：文件不存在/路径是目录/权限不足/路径无效。 |


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

### (六)DirectoryName - 目录路径

```csharp
FileInfo file = new FileInfo(@"C:\Users\Tom\file.txt");
Console.WriteLine(file.DirectoryName); // 输出: C:\Users\Tom
```

- 只返回目录路径，不包含文件名
- 与 `Name` 属性配合使用

### (七)CreationTime - 创建时间

```csharp
FileInfo file = new FileInfo("log.txt");
// 读取创建时间
Console.WriteLine($"创建时间: {file.CreationTime}");

// 设置创建时间
file.CreationTime = new DateTime(2024, 1, 1, 10, 0, 0);
```

- 可以读取和设置
- 设置时间需要适当的权限

### (八)Attributes - 文件属性

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

### (九) Extension - 文件扩展名

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

### (十)LastWriteTime - 最后修改时间

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

