---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 操作文件示例   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 操作文件示例   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## 一、File类使用示例
### (一)File.Create()

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


### (二)File.Delete()

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


### (三)File.Move()

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

### (四)File.Copy()

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

### (五)File.Replace()

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
### (六)File.Replace()

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

### (七)File.Exists()
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
### File总结
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


## 二、FileInfo类使用示例

### (一)FileInfo.Create()
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
### (二)FileInfo.Delete()
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

### (三)FileInfo.MoveTo()
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

### (四)FileInfo.CopyTo()
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

### (五)FileInfo.Open()
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

### (六)FileInfo.Replace()
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
### (七)FileInfo.Replace()

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

### (八)FileInfo.Exists属性
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
###  FileInfo总结（核心关键点）
1. **FileInfo核心定位**：实例类，绑定单个文件路径，面向对象操作文件；
2. **创建语法**：`new FileInfo(文件路径)`，文件不存在也可创建对象；
3. **与File类的核心区别**：
   - File：静态类，单次操作传路径，多次操作重复查询文件系统；
   - FileInfo：实例类，绑定路径后反复操作，性能更优，代码更简洁；
4. **核心属性**：描述文件元数据（Length/Exists/CreationTime等）；
5. **核心方法**：执行文件操作（Create/CopyTo/MoveTo/Delete等），无需重复传路径；
6. **使用场景**：需多次操作同一个文件时优先用FileInfo，单次操作可用File类。


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


