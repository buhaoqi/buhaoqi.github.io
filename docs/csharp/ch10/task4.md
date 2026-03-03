---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 读写文件(文本)  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 读写文件(文本)   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  3  # 侧边栏中排在第1位
---

## 核心前提（先记牢）
- `StreamReader`：专门将**字节流（FileStream）转换为字符流**（处理编码），用于读取文本文件；
- `StreamWriter`：专门将**字符流转换为字节流（FileStream）**（处理编码），用于写入文本文件；
- 两者必须绑定`FileStream`（或其他Stream子类）使用，核心作用是解决“字符↔字节”的编码转换问题（避免中文乱码）。

## 一、StreamWriter 用法（写入文本文件）
### 1. 核心定位
将字符串按指定编码转换为字节，通过底层`FileStream`写入文件，支持单行/多行/追加写入，是文本写入的首选工具。

### 2. 常用构造函数（考试重点）
| 构造函数（核心重载） | 说明 | 示例 |
|----------------------|------|------|
| `StreamWriter(Stream stream)` | 绑定底层流（如FileStream），使用默认编码（UTF8） | `new StreamWriter(fs)` |
| `StreamWriter(Stream stream, Encoding encoding)` | 绑定流 + 指定编码（推荐，避免乱码） | `new StreamWriter(fs, Encoding.UTF8)` |
| `StreamWriter(string path)` | 直接指定文件路径，默认编码+覆盖写入 | `new StreamWriter("test.txt")` |
| `StreamWriter(string path, bool append)` | 指定路径 + 是否追加（true=追加，false=覆盖） | `new StreamWriter("test.txt", true)` |
| `StreamWriter(string path, bool append, Encoding encoding)` | 指定路径 + 是否追加 + 指定编码（**最灵活、实际开发最常用**） | `new StreamWriter("test.txt", true, Encoding.UTF8)` |

### 3. 核心方法（考试高频）
| 方法 | 用途 | 示例 |
|------|------|------|
| `Write(string value)` | 写入字符串（无换行） | `sw.Write("Hello");` |
| `WriteLine(string value)` | 写入字符串 + 自动加换行符（\r\n） | `sw.WriteLine("World!");` |
| `Flush()` | 强制将缓冲区数据写入文件（无需等using释放） | `sw.Flush();` |
| `Close()` | 关闭流（using会自动调用，无需手动） | `sw.Close();` |

### 4. 完整使用示例（覆盖核心场景）
```csharp
using System;
using System.IO;
using System.Text;

class StreamWriterCompleteDemo
{
    static void Main()
    {
        string textPath = "test_write.txt";

        #region 场景1：覆盖写入文本（指定编码）
        using (FileStream fs = new FileStream(textPath, FileMode.Create, FileAccess.Write))
        using (StreamWriter sw = new StreamWriter(fs, Encoding.UTF8))
        {
            sw.WriteLine("第一行文本（自动换行）"); // 带换行
            sw.Write("第二行无换行"); // 无换行
            sw.Write(" → 中文测试"); // 拼接写入
            sw.WriteLine(); // 手动加换行
            sw.Write(12345); // 自动转换数值为字符串
        }
        Console.WriteLine("场景1：覆盖写入完成");
        #endregion

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

### 5. 关键注意事项（考试易错点）
- **编码必须指定**：优先用`Encoding.UTF8`，避免中文乱码（默认编码可能因系统不同而变化）；
- **追加写入**：构造函数中`append=true`才会追加，否则默认覆盖；
- **缓冲区机制**：`Write/WriteLine`会先写入内存缓冲区，`using`结束/调用`Flush()`/缓冲区满时，才真正写入文件；
- **资源释放**：必须用`using`语句（自动调用`Dispose()`，释放流+刷入缓冲区），否则可能丢失数据。

---

## 二、StreamReader 用法（读取文本文件）
### 1. 核心定位
从底层`FileStream`读取字节，按指定编码转换为字符串，支持逐行/全部/单个字符读取，是文本读取的首选工具。

### 2. 常用构造函数（考试重点）
| 构造函数（核心重载） | 说明 | 示例 |
|----------------------|------|------|
| `StreamReader(Stream stream)` | 绑定底层流，使用默认编码（UTF8） | `new StreamReader(fs)` |
| `StreamReader(Stream stream, Encoding encoding)` | 绑定流 + 指定编码（推荐） | `new StreamReader(fs, Encoding.UTF8)` |
| `StreamReader(string path)` | 直接指定文件路径，默认编码 | `new StreamReader("test.txt")` |
| `StreamReader(string path, Encoding encoding)` | 指定路径 + 编码 | `new StreamReader("test.txt", Encoding.UTF8)` |

### 3. 核心方法（考试高频）
| 方法 | 用途 | 返回值 | 示例 |
|------|------|--------|------|
| `ReadLine()` | 读取一行文本（直到换行符，不含换行符） | 字符串（行内容）/null（文件末尾） | `string line = sr.ReadLine();` |
| `ReadToEnd()` | 读取文件所有剩余文本 | 字符串（全部内容） | `string all = sr.ReadToEnd();` |
| `Read()` | 读取单个字符 | int（字符ASCII码/-1=末尾） | `int c = sr.Read();` |
| `Read(char[] buffer, int index, int count)` | 批量读取字符到数组 | 实际读取的字符数（0=末尾） | `sr.Read(buffer, 0, 1024);` |
| `Peek()` | 查看下一个字符（不移动流位置） | int（字符ASCII码/-1=末尾） | `int peek = sr.Peek();` |

### 4. 完整使用示例（覆盖核心场景）
```csharp
class StreamReaderCompleteDemo
{
    static void Main()
    {
        string textPath = "test_write.txt";

        #region 场景1：逐行读取（适合大文件）
        Console.WriteLine("=== 逐行读取 ===");
        using (FileStream fs = new FileStream(textPath, FileMode.Open, FileAccess.Read))
        using (StreamReader sr = new StreamReader(fs, Encoding.UTF8))
        {
            string line;
            // 循环读取，直到ReadLine()返回null（文件末尾）
            while ((line = sr.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
        #endregion

        #region 场景2：一次性读取全部内容（适合小文件）
        Console.WriteLine("\n=== 一次性读取全部内容 ===");
        using (StreamReader sr = new StreamReader(textPath, Encoding.UTF8))
        {
            string allContent = sr.ReadToEnd();
            Console.WriteLine(allContent);
        }
        #endregion

        #region 场景3：逐字符读取（了解即可）
        Console.WriteLine("\n=== 逐字符读取 ===");
        using (StreamReader sr = new StreamReader(textPath, Encoding.UTF8))
        {
            int charCode;
            // Read()返回字符ASCII码，-1表示末尾
            while ((charCode = sr.Read()) != -1)
            {
                Console.Write((char)charCode); // 转换为字符输出
            }
        }
        #endregion
    }
}
```

### 5. 关键注意事项（考试易错点）
- **编码匹配**：读取编码必须与写入编码一致（如写入用UTF8，读取也必须用UTF8），否则中文乱码；
- **逐行读取优势**：大文件（如1GB）用`ReadLine()`逐行读，不会占满内存；`ReadToEnd()`适合小文件；
- **Peek()的作用**：查看下一个字符但不读取，常用于判断文件是否到末尾（`sr.Peek() != -1`）；
- **文件不存在**：直接用`StreamReader(string path)`会抛出`FileNotFoundException`，需提前判断或用try-catch。

---

## 三、StreamReader & StreamWriter 核心对比（考试必记）
| 维度 | StreamWriter | StreamReader |
|------|--------------|--------------|
| 核心作用 | 字符→字节（写入文本） | 字节→字符（读取文本） |
| 核心方法 | Write()/WriteLine() | ReadLine()/ReadToEnd() |
| 编码关键 | 写入时指定编码（避免乱码） | 读取时编码需与写入一致 |
| 末尾判断 | 无（写入无需判断） | ReadLine()返回null / Read()返回-1 / Peek()返回-1 |
| 缓冲区 | 写入先存缓冲区，Flush()/using释放时刷入文件 | 读取时自动缓冲，无需手动处理 |

---

## 四、总结（考试核心记忆点）
### StreamWriter 核心
1. 核心方法：`Write()`（无换行）、`WriteLine()`（带换行）；
2. 关键参数：编码（Encoding.UTF8）、append（是否追加）；
3. 必须用`using`释放资源，否则缓冲区数据可能丢失。

### StreamReader 核心
1. 核心方法：大文件用`ReadLine()`，小文件用`ReadToEnd()`；
2. 末尾判断：`ReadLine() == null` 或 `Peek() == -1`；
3. 编码必须与写入一致，否则乱码。

### 通用考点
1. `StreamReader/StreamWriter`必须配合`FileStream`（或直接指定路径）使用；
2. 编码是文本读写的核心（UTF8是首选）；
3. `using`语句是释放资源的标配（必考）。

简单记：**写文本用StreamWriter，读文本用StreamReader；编码一致是关键，大文件逐行读，小文件一次性读**。


