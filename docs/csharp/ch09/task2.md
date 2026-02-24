---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 String 类  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 String 类  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  2  # 侧边栏中排在第1位
---

## 高考考点
Chars、Length，掌握String类的方法： Equals、Compare、Contains、Concat、Copy、Format、IndexOf、 Insert、Remove、Replace、IsNullOrEmpty、Join、Split、ToLower、ToUpper、ToCharArray、Trim、Substring

你希望我按照统一的结构化格式，详细总结C#中`String`类的`Chars、Length`属性，以及`Equals、Compare`等18个核心方法的**用途、语法格式、参数说明、注意事项**，并将示例集中放在表格后，方便你系统学习和查阅。

### 前置说明
`String`是C#中**不可变的引用类型**（字符串一旦创建就无法修改），所有字符串方法均不会改变原字符串，而是返回一个新的字符串对象；所有示例均需引入`using System;`。

---

## 一、String类核心属性
### 1. Chars（索引器）
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取字符串中指定索引位置的单个字符（只读，无法修改）                 |
| **语法**   | `string变量[索引值]`                                                 |
| **参数**   | 索引值：int类型，从0开始，范围`0 ~ Length-1`（超出抛`ArgumentOutOfRangeException`） |
| **注意事项** | 1. 字符串索引从0开始，最后一个字符索引为`Length-1`；<br />2. 不可通过索引器修改字符（如`str[0] = 'A'`编译报错）；<br />3. 空字符串（""）访问索引直接抛异常。 |

### 2. Length
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 获取字符串中字符的总数（只读属性）                                   |
| **语法**   | `string变量.Length`                                                  |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 空字符串（""）Length为0；<br />2. `null`字符串访问Length会抛`NullReferenceException`；<br />3. 中文字符/特殊字符均算1个字符（如"你好"Length=2）。 |

---

## 二、String类核心方法
### 1. Equals
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 比较两个字符串是否相等（可指定是否区分大小写）                       |
| **语法**   | 1. `string.Equals(string str1, string str2)`；<br />2. `str1.Equals(str2)`；<br />3. `str1.Equals(str2, StringComparison comparisonType)` |
| **参数**   | - str1/str2：待比较的字符串；<br />- comparisonType：比较规则（如`StringComparison.OrdinalIgnoreCase`不区分大小写） |
| **注意事项** | 1. 直接用`==`等价于`Equals`（引用+值比较）；<br />2. 默认区分大小写和文化（如`"A".Equals("a")`返回false）；<br />3. 比较`null`时：`string.Equals(null, null)`返回true，`"abc".Equals(null)`返回false。 |

### 2. Compare
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 比较两个字符串的大小（按Unicode编码值），返回整数表示比较结果         |
| **语法**   | 1. `string.Compare(string str1, string str2)`；<br />2. `string.Compare(string str1, string str2, bool ignoreCase)` |
| **参数**   | - str1/str2：待比较的字符串；<br />- ignoreCase：是否忽略大小写（bool） |
| **注意事项** | 1. 返回值规则：<br />  `-` 小于0：str1 `<` str2；<br />  - 等于0：str1 = str2；<br />  `-` 大于0：str1 `>` str2；<br />2. 区分大小写时，大写字母编码值小于小写（如"A"`<`"a"）；<br />3. `null`视为小于任何非空字符串。 |

### 3. Contains
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 判断字符串是否包含指定的子字符串                                   |
| **语法**   | `str.Contains(string value)`                                         |
| **参数**   | value：要查找的子字符串（不能为`null`，否则抛`ArgumentNullException`） |
| **注意事项** | 1. 区分大小写（如`"Abc".Contains("a")`返回false）；<br />2. 空字符串（""）作为参数时，始终返回true；<br />3. 需不区分大小写时，可先转小写/大写再判断。 |

### 4. Concat
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将多个字符串拼接成一个新字符串                                       |
| **语法**   | 1. `string.Concat(string str1, string str2)`；<br />2. `string.Concat(params string[] values)` |
| **参数**   | `-` str1/str2：待拼接的字符串；<br /> `-` values：字符串数组（支持任意数量字符串） |
| **注意事项** | 1. 拼接`null`时，会将`null`视为空字符串（""）；<br />2. 性能：大量拼接推荐用`StringBuilder`，Concat每次生成新字符串；<br />3. 等价于`str1 + str2`，但Concat支持更多参数。 |

### 5. Copy
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 创建指定字符串的副本（已过时，推荐直接赋值或`string str2 = str1`）   |
| **语法**   | `string.Copy(string str)`                                            |
| **参数**   | str：要复制的字符串（`null`则抛`ArgumentNullException`）             |
| **注意事项** | 1. .NET Core/.NET 5+中标记为过时（Obsolete）；<br />2. 字符串不可变，直接赋值`str2 = str1`即可，无需Copy；<br />3. 返回值是与原字符串内容相同的新字符串对象。 |

### 6. Format
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将指定的字符串、数字等格式化为一个新字符串（替代拼接，更易读）         |
| **语法**   | `string.Format(string format, params object[] args)`                 |
| **参数**   | `-` format：格式字符串（包含占位符`{0}、{1}`等）；<br /> `-` args：要格式化的对象数组 |
| **注意事项** | 1. 占位符索引需与args数组下标对应（如{0}对应args[0]）；<br />2. 支持格式规范（如`{0:N2}`保留2位小数）；<br />3. C# 6+推荐用字符串插值`$"xxx{变量}xxx"`替代Format。 |

### 7. IndexOf
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 查找子字符串/字符在字符串中**首次出现**的索引（找不到返回-1）         |
| **语法**   | 1. `str.IndexOf(char value)`；<br />2. `str.IndexOf(string value)`；<br />3. `str.IndexOf(string value, int startIndex)`（从指定索引开始查找） |
| **参数**   | - value：要查找的字符/子字符串；<br />- startIndex：起始查找位置（int） |
| **注意事项** | 1. 区分大小写（如`"Abc".IndexOf("a")`返回-1）；<br />2. 找不到返回-1，而非抛异常；<br />3. 查找空字符串返回0；<br />4. 有重载支持指定是否忽略大小写（`StringComparison`）。 |

### 8. Insert
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 在字符串的指定索引位置插入子字符串，返回新字符串                     |
| **语法**   | `str.Insert(int startIndex, string value)`                           |
| **参数**   | - startIndex：插入位置（0 `≤ `startIndex `≤` Length）；<br />- value：要插入的子字符串（`null`则抛异常） |
| **注意事项** | 1. startIndex超出范围（`<0或>Length`）抛`ArgumentOutOfRangeException`；<br />2. 插入位置为Length时，等价于拼接；<br />3. 原字符串不变，返回新字符串。 |

### 9. Remove
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 从字符串中移除指定数量的字符，返回新字符串                           |
| **语法**   | 1. `str.Remove(int startIndex)`（移除从startIndex到末尾的所有字符）；<br />2. `str.Remove(int startIndex, int count)`（移除指定数量字符） |
| **参数**   | - startIndex：起始移除位置；<br />- count：要移除的字符数量             |
| **注意事项** | 1. startIndex超出范围抛异常；<br />2. count超出剩余字符数时，仅移除到末尾；<br />3. 原字符串不变，返回新字符串。 |

### 10. Replace
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将字符串中的指定字符/子字符串替换为新的字符/子字符串，返回新字符串   |
| **语法**   | 1. `str.Replace(char oldChar, char newChar)`；<br />2. `str.Replace(string oldValue, string newValue)` |
| **参数**   | - oldChar/oldValue：要替换的字符/子字符串；<br />- newChar/newValue：替换后的字符/子字符串 |
| **注意事项** | 1. 替换所有匹配项（而非仅第一个）；<br />2. oldValue为`null`抛异常，newValue为`null`视为空字符串；<br />3. 区分大小写（如`"Abc".Replace("a", "A")`无变化）。 |

### 11. IsNullOrEmpty
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 静态方法，判断字符串是否为`null`或空字符串（""）                     |
| **语法**   | `string.IsNullOrEmpty(string value)`                                 |
| **参数**   | value：要判断的字符串                                               |
| **注意事项** | 1. 返回true的情况：value = `null` 或 value = ""；<br />2. 仅包含空格的字符串（如"   "）返回false；<br />3. 需判断“空/空格”用`string.IsNullOrWhiteSpace`。 |

### 12. Join
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将字符串数组（或集合）用指定的分隔符拼接成一个新字符串               |
| **语法**   | 1. `string.Join(string separator, string[] value)`；<br />2. `string.Join(string separator, IEnumerable<string> values)` |
| **参数**   | - separator：分隔符（可为空字符串）；<br />- value/values：待拼接的字符串数组/集合 |
| **注意事项** | 1. 数组中`null`元素视为空字符串；<br />2. 分隔符为`null`视为空字符串；<br />3. 空数组返回空字符串。 |

### 13. Split
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将字符串按指定的分隔符拆分为字符串数组                               |
| **语法**   | 1. `str.Split(char[] separator)`；<br />2. `str.Split(char[] separator, StringSplitOptions options)`（如去除空元素） |
| **参数**   | - separator：分隔符字符数组；<br />- options：拆分选项（如`StringSplitOptions.RemoveEmptyEntries`去除空元素） |
| **注意事项** | 1. 分隔符为`null`/空数组时，按空白字符（空格、换行、制表符）拆分；<br />2. 默认保留空元素（如`"a,,b".Split(',')`返回["a","","b"]）；<br />3. 区分大小写（无直接忽略大小写的重载）。 |

### 14. ToLower
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将字符串所有字符转换为小写，返回新字符串                             |
| **语法**   | 1. `str.ToLower()`；<br />2. `str.ToLower(CultureInfo culture)`（指定文化区域） |
| **参数**   | culture：文化区域（如`CultureInfo.InvariantCulture`，默认使用当前系统文化） |
| **注意事项** | 1. 原字符串不变，返回新字符串；<br />2. 特殊字符转换遵循文化规则（推荐用`ToLowerInvariant()`避免文化差异）；<br />3. 中文/数字无大小写，直接返回原字符。 |

### 15. ToUpper
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将字符串所有字符转换为大写，返回新字符串                             |
| **语法**   | 1. `str.ToUpper()`；<br />2. `str.ToUpper(CultureInfo culture)`（指定文化区域） |
| **参数**   | culture：文化区域（默认当前系统文化）                               |
| **注意事项** | 1. 原字符串不变，返回新字符串；<br />2. 推荐用`ToUpperInvariant()`避免文化差异；<br />3. 中文/数字无大小写，直接返回原字符。 |

### 16. ToCharArray
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 将字符串转换为字符数组（char[]）                                     |
| **语法**   | 1. `str.ToCharArray()`；<br />2. `str.ToCharArray(int startIndex, int length)`（转换指定范围） |
| **参数**   | - startIndex：起始索引；<br />- length：转换的字符数量                 |
| **注意事项** | 1. 字符数组可修改（与原字符串解耦）；<br />2. startIndex/length超出范围抛异常；<br />3. 空字符串返回空字符数组。 |

### 17. Trim
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 移除字符串开头和结尾的空白字符（或指定字符），返回新字符串           |
| **语法**   | 1. `str.Trim()`；<br />2. `str.Trim(char[] trimChars)`（移除指定字符） |
| **参数**   | trimChars：要移除的字符数组（`null`则移除空白字符：空格、`\t`、`\n`、`\r`等） |
| **注意事项** | 1. 仅移除开头和结尾，中间的字符保留；<br />2. `TrimStart()`仅移除开头，`TrimEnd()`仅移除结尾；<br />3. 空字符串/全空白字符串Trim后返回空字符串。 |

### 18. Substring
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 截取字符串的指定部分，返回新字符串                                   |
| **语法**   | 1. `str.Substring(int startIndex)`（从startIndex到末尾）；<br />2. `str.Substring(int startIndex, int length)`（截取指定长度） |
| **参数**   | - startIndex：起始索引；<br /> - length：截取的字符数量                 |
| **注意事项** | 1. startIndex超出范围（`<0或>Length`）抛异常；<br />2. length超出剩余字符数抛异常；<br />3. 截取到末尾用`Substring(startIndex)`更安全。 |

---

## 三、所有属性/方法示例代码
```csharp
using System;
using System.Globalization;

class StringDemo
{
    static void Main()
    {
        // 1. Chars & Length
        string str = "Hello World";
        Console.WriteLine("=== Chars & Length ===");
        Console.WriteLine($"字符串：{str}，长度：{str.Length}"); // 输出：11
        Console.WriteLine($"索引0的字符：{str[0]}"); // 输出：H
        // str[0] = 'h'; // 编译报错：不可修改

        // 2. Equals
        Console.WriteLine("\n=== Equals ===");
        string a = "Abc";
        string b = "abc";
        Console.WriteLine(a.Equals(b)); // false（区分大小写）
        Console.WriteLine(a.Equals(b, StringComparison.OrdinalIgnoreCase)); // true

        // 3. Compare
        Console.WriteLine("\n=== Compare ===");
        Console.WriteLine(string.Compare(a, b)); // -1（A<a）
        Console.WriteLine(string.Compare(a, b, true)); // 0（忽略大小写）

        // 4. Contains
        Console.WriteLine("\n=== Contains ===");
        Console.WriteLine(str.Contains("World")); // true
        Console.WriteLine(str.Contains("world")); // false

        // 5. Concat
        Console.WriteLine("\n=== Concat ===");
        string str1 = "Hello";
        string str2 = "C#";
        Console.WriteLine(string.Concat(str1, " ", str2)); // Hello C#
        Console.WriteLine(string.Concat(new[] { "a", "b", null, "c" })); // ab c

        // 6. Copy（已过时）
        Console.WriteLine("\n=== Copy ===");
        string copyStr = string.Copy(str);
        Console.WriteLine(copyStr); // Hello World

        // 7. Format
        Console.WriteLine("\n=== Format ===");
        int age = 18;
        Console.WriteLine(string.Format("年龄：{0}，身高：{1:N2}m", age, 1.75)); // 年龄：18，身高：1.75m
        Console.WriteLine($"年龄：{age}，身高：{1.75:N2}m"); // 字符串插值（等价）

        // 8. IndexOf
        Console.WriteLine("\n=== IndexOf ===");
        Console.WriteLine(str.IndexOf("o")); // 4（首次出现的索引）
        Console.WriteLine(str.IndexOf("o", 5)); // 7（从索引5开始找）
        Console.WriteLine(str.IndexOf("x")); // -1（找不到）

        // 9. Insert
        Console.WriteLine("\n=== Insert ===");
        string insertStr = str.Insert(5, ","); // 在索引5插入逗号
        Console.WriteLine(insertStr); // Hello, World

        // 10. Remove
        Console.WriteLine("\n=== Remove ===");
        string removeStr1 = str.Remove(5); // 从索引5移除到末尾
        Console.WriteLine(removeStr1); // Hello
        string removeStr2 = str.Remove(6, 5); // 从索引6移除5个字符
        Console.WriteLine(removeStr2); // Hello 

        // 11. Replace
        Console.WriteLine("\n=== Replace ===");
        string replaceStr = str.Replace("World", "CSharp");
        Console.WriteLine(replaceStr); // Hello CSharp

        // 12. IsNullOrEmpty
        Console.WriteLine("\n=== IsNullOrEmpty ===");
        string nullStr = null;
        string emptyStr = "";
        string spaceStr = "   ";
        Console.WriteLine(string.IsNullOrEmpty(nullStr)); // true
        Console.WriteLine(string.IsNullOrEmpty(emptyStr)); // true
        Console.WriteLine(string.IsNullOrEmpty(spaceStr)); // false

        // 13. Join
        Console.WriteLine("\n=== Join ===");
        string[] arr = { "张三", "李四", "王五" };
        Console.WriteLine(string.Join(",", arr)); // 张三,李四,王五

        // 14. Split
        Console.WriteLine("\n=== Split ===");
        string splitStr = "a,b,,c";
        string[] splitArr1 = splitStr.Split(',');
        Console.WriteLine(string.Join("|", splitArr1)); // a|b||c
        string[] splitArr2 = splitStr.Split(',', StringSplitOptions.RemoveEmptyEntries);
        Console.WriteLine(string.Join("|", splitArr2)); // a|b|c

        // 15. ToLower & ToUpper
        Console.WriteLine("\n=== ToLower & ToUpper ===");
        Console.WriteLine(str.ToLower()); // hello world
        Console.WriteLine(str.ToUpper()); // HELLO WORLD

        // 16. ToCharArray
        Console.WriteLine("\n=== ToCharArray ===");
        char[] charArr = str.ToCharArray();
        charArr[0] = 'h'; // 可修改
        Console.WriteLine(new string(charArr)); // hello World

        // 17. Trim
        Console.WriteLine("\n=== Trim ===");
        string trimStr = "   Hello C#   ";
        Console.WriteLine(trimStr.Trim()); // Hello C#
        string trimCharStr = "###Hello###";
        Console.WriteLine(trimCharStr.Trim('#')); // Hello

        // 18. Substring
        Console.WriteLine("\n=== Substring ===");
        Console.WriteLine(str.Substring(6)); // World
        Console.WriteLine(str.Substring(0, 5)); // Hello
    }
}
```

### 输出结果（关键片段）
```
=== Chars & Length ===
字符串：Hello World，长度：11
索引0的字符：H

=== Equals ===
False
True

=== Compare ===
-1
0

=== Contains ===
True
False

=== Concat ===
Hello C#
abc

=== Format ===
年龄：18，身高：1.75m
年龄：18，身高：1.75m

=== Split ===
a|b||c
a|b|c

=== Trim ===
Hello C#
Hello
```

---

### 总结（核心关键点）
1. **不可变性**：所有String方法均返回新字符串，原字符串始终不变；
2. **大小写**：默认方法（Equals/Contains/IndexOf等）均区分大小写，需忽略时显式指定规则；
3. **空值处理**：
   - `IsNullOrEmpty`判断`null`/""，`IsNullOrWhiteSpace`判断`null`/"" / 全空格；
   - 拼接/Join时`null`视为空字符串，直接访问`null`字符串的属性/方法会抛空引用异常；
4. **性能优化**：
   - 大量拼接用`StringBuilder`替代Concat/+；
   - 避免频繁调用Trim/Substring等生成新字符串；
5. **文化差异**：ToLower/ToUpper推荐用`InvariantCulture`版本，避免不同系统的转换差异。