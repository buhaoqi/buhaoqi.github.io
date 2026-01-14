---
noteId: "af558640efa711f0b30487fa81af44a5"
tags: []

---


- string是一个unicode字符序列

- 如何理解string类型：1.存储字符序列 2.操作字符序列

- string是引用类型。

  - 引用的值存在内存堆中

  - 引用的地址存在内存栈中

```c#
string  str1 = "aaa";
string str2 = str1;
Console.WriteLine(str1); //
```

- 字符串具有不可变性：一旦声明就不能修改

```c#
string str1 = "aaa";
str1 = str1 + "bbb";// 不是修改，而是创建新字符串
```

- 字符串的使用方式跟值类型相似，
  - 声明、赋值、读、写



## **string是引用类型**

```csharp
// string确实是引用类型
string str1 = "Hello";
string str2 = str1;  // 复制的是引用，不是值
```

## **string内容存储在堆内存中**
```csharp
// 字符串的实际内容（字符数据）存储在堆上
string s = "Hello World";  // "Hello World"这个字符序列在堆上
```

## **string有特殊的存储优化**
```csharp
// 字符串字面量有特殊的存储方式（字符串驻留）
string a = "hello";
string b = "hello";
// a和b指向堆中同一个"hello"字符串实例
```

## **内存结构示例：**
```csharp
string name = "张三";
```
```
栈内存：                       堆内存：
+----------+                  +-------------------+
| name     | ---指向--->      | "张三" (char数组) |
| (引用)   |                  | +---+---+---+     |
| 0x1234   |                  | | 张 | 三 | \0 |   |
+----------+                  | +---+---+---+     |
                              +-------------------+
```

## **string的特殊性：**
```csharp
public class StringFeatures
{
    public static void Demonstrate()
    {
        // 1. 不可变性（Immutable）
        string s1 = "Hello";
        s1 = s1 + " World";  // 不是修改，而是创建新字符串
        
        // 2. 字符串驻留（Interning）
        string a = "abc";
        string b = "abc";
        bool sameReference = object.ReferenceEquals(a, b);  // true
        
        // 3. 编译时常量
        const string constantString = "常量";  // 编译时确定
        
        // 4. 堆栈边界情况
        string stackAllocated = new string('*', 10);  // 仍然在堆上
    }
}
```

## **string与其他引用类型的区别：**

| 特性 | string | 普通class |
|------|--------|-----------|
| 存储位置 | 堆 | 堆 |
| 不可变性 | ✅ 不可变 | ❌ 可变 |
| 值类型语义 | ✅ 有 | ❌ 无 |
| 字符串驻留 | ✅ 有 | ❌ 无 |
| 编译时常量 | ✅ 可声明const | ❌ 不能 |

## **常见的误解澄清：**

### **误解1：string有时在栈上**
```csharp
// ❌ 错误理解：方法内的string在栈上
// ✅ 正确：所有string内容都在堆上，只是引用可能在栈上

void MyMethod()
{
    string local = "局部变量";  // 引用在栈上，内容在堆上
}
```

## **误解2：string是值类型**
```csharp
// string具有值类型的一些行为，但本质是引用类型

string s1 = "test";
string s2 = s1;      // 复制引用
s2 = "changed";      // s1不受影响（因为string不可变）

// 对比真正的引用类型
StringBuilder sb1 = new StringBuilder("test");
StringBuilder sb2 = sb1;  // 复制引用
sb2.Append("!");         // sb1也被修改了
```

## **实际内存分析：**

```csharp
using System;

class MemoryDemo
{
    static void Main()
    {
        // 示例1：字符串驻留
        string literal1 = "Hello";
        string literal2 = "Hello";
        Console.WriteLine($"相同字面量引用相等: {ReferenceEquals(literal1, literal2)}"); // True
        
        // 示例2：运行时创建的字符串
        string runtime1 = new string('H', 5);
        string runtime2 = new string('H', 5);
        Console.WriteLine($"运行时创建引用相等: {ReferenceEquals(runtime1, runtime2)}"); // False
        
        // 示例3：字符串驻留API
        string notInterned = new string('A', 3);
        string interned = string.Intern(notInterned);
        Console.WriteLine($"驻留后引用相等: {ReferenceEquals(notInterned, interned)}"); // False
        
        // 示例4：大字符串的内存
        string bigString = new string('X', 1000000);  // 约2MB堆内存
        // GC会自动回收不再使用的字符串
    }
}
```

## **总结要点：**

1. **✅ string是引用类型** - 继承自System.Object
2. **✅ string内容存储在堆上** - 字符数组在托管堆中
3. **✅ string变量存储的是引用** - 变量本身在栈上（局部变量）或堆上（类字段）
4. **⚠️ string具有不可变性** - 任何修改都创建新对象
5. **⚠️ 字符串驻留优化** - 相同字面量共享实例
6. **⚠️ 特殊的语法支持** - 可以直接赋值字面量

## 💡 **最佳实践建议：**

```csharp
// 正确使用string
public class StringBestPractices
{
    // 1. 使用字符串字面量（享受驻留优化）
    string good = "直接使用字面量";
    
    // 2. 大量拼接时使用StringBuilder
    void BuildString()
    {
        var sb = new StringBuilder();
        for (int i = 0; i < 1000; i++)
        {
            sb.Append(i.ToString());
        }
        string result = sb.ToString();  // 只分配一次内存
    }
    
    // 3. 注意字符串比较
    void CompareStrings()
    {
        string a = "test";
        string b = "TEST";
        
        // 比较内容
        bool equal1 = a.Equals(b, StringComparison.OrdinalIgnoreCase);  // 推荐
        
        // 比较引用
        bool equal2 = (a == b);  // C#重载了==运算符，比较内容
        bool equal3 = object.ReferenceEquals(a, b);  // 比较引用
    }
}
```

**string存储在堆内存中"是正确的，但需要补充说明：string的引用可能在栈上（局部变量）或堆上（类字段），而string的实际内容（字符数据）总是在托管堆上。**