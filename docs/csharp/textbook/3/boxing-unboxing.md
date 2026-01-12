---
noteId: "1aeae030efa811f0b30487fa81af44a5"
tags: []

---


## `object`类型是什么

1. **object是所有类型的基类**：C#中所有类型都直接或间接继承自object
2. **object类型的万能性**：可以存储任何类型的值
3. **object关键字是别名**：实际上是System.Object的简化写法

## object是所有类型的基类
```csharp
// object是所有类型的基类
┌─────────────────┐
│    object       │ ← 基类 (System.Object)
│  (System.Object)│
└─────────────────┘
         ▲
         │ 继承
┌─────────────────┐
│  所有C#类型      │ ← 包括值类型和引用类型
└─────────────────┘
```

## object类型的万能性

```C#
```csharp
// 教程中的代码：
int x = 100;
object obj1;          // 声明object变量
obj1 = x;            // ✅ 可以赋整数值
object obj2 = "China"; // ✅ 可以赋字符串值

// object可以存储任何类型：
object anything;
anything = 100;                 // int
anything = 3.14;               // double  
anything = "Hello";            // string
anything = new List<int>();    // 引用类型
anything = DateTime.Now;       // 结构体（值类型）
```


## **object关键字的本质**
```csharp
// object是System.Object的别名
object obj = 100;              // 使用关键字
System.Object obj2 = "test";   // 使用完整类名

// 两种写法完全等价，编译后相同
Console.WriteLine(obj.GetType());      // System.Int32
Console.WriteLine(obj2.GetType());     // System.String
```

## 装箱和拆箱

装箱（Boxing）和拆箱（Unboxing）是object类型的重要特性。

```csharp
int x = 100;
object obj = x;  // ✅ 装箱：值类型→引用类型（自动）

int y = (int)obj; // ✅ 拆箱：引用类型→值类型（需要显式转换）
```


## **装箱 (Boxing) 概念**

将**值类型**隐式转换为**object类型**（或任何该值类型实现的接口类型）。

```csharp
int i = 10;           // 值类型，存储在栈(stack)上
object obj = i;       // 装箱：值类型→引用类型
// 或者显式转换：
object obj2 = (object)i;  // 显式装箱
```

## **装箱的内存过程**
```csharp
// 装箱前的内存布局：
栈(stack)：                堆(heap)：  
┌─────────┐                ┌─────────┐
│  i = 10 │                │         │
└─────────┘                └─────────┘

// 装箱后的内存布局：
栈(stack)：                堆(heap)：
┌─────────┐                ┌─────────┐
│ obj ──┐ │                │   10    │ ← 新分配的内存
└───────│─┘                └─────────┘
        └─────────→ 引用地址
```

## **拆箱的概念**

将**object类型**显式转换回原来的**值类型**。

```csharp
object obj = i;            // 先装箱
int j = (int)obj;          // 拆箱：引用类型→值类型
// 必须使用显式转换
```

## **拆箱的注意事项**
```csharp
object obj = 10;
// 正确的拆箱：
int j = (int)obj;          // ✅ 类型匹配

// 错误的拆箱：
// double d = (double)obj;  // ❌ InvalidCastException
// string s = (string)obj;  // ❌ InvalidCastException

// 应该先检查类型：
if (obj is int)
{
    int k = (int)obj;      // ✅ 安全拆箱
}
```


## **内存变化示意图**
```csharp
// 示例代码：
int original = 100;        // 1. 栈上分配int
object boxed = original;   // 2. 装箱：堆上分配新内存
int unboxed = (int)boxed;  // 3. 拆箱：从堆复制回栈

// 内存流程：
栈                       堆
──────                   ──────
original=100             (空)
        ↓ 装箱
boxed → [100]           新分配100
        ↓ 拆箱
unboxed=100              [100]
```

## 总结

### **1. 装箱是隐式的，拆箱是显式的**
```csharp
int i = 10;
object obj = i;           // ✅ 隐式装箱（自动）
// int j = obj;          // ❌ 不能隐式拆箱
int j = (int)obj;         // ✅ 必须显式拆箱
```

### **2. 类型必须完全匹配**
```csharp
object obj = 10;          // int装箱

// 正确的拆箱：
int a = (int)obj;         // ✅ 类型匹配

// 错误的拆箱：
// long b = (long)obj;    // ❌ 即使long能容纳int值也不行
// byte c = (byte)obj;    // ❌ 类型不匹配

// 可以先转换：
long b = (int)obj;        // ✅ 先拆箱为int，再隐式转long
```

### **3. 装箱会创建新对象**
```csharp
int x = 10;
object a = x;  // 装箱1
object b = x;  // 装箱2：创建另一个对象

Console.WriteLine(a == b);           // false（引用比较）
Console.WriteLine(a.Equals(b));      // true（值比较）
Console.WriteLine(ReferenceEquals(a, b)); // false（不是同一个对象）
```

## **重写ToString避免格式化时的装箱**
```csharp
int number = 42;
string str = $"数字是: {number}";  
// 这里会发生装箱，因为number被转换为object

// 避免装箱的方法：
string str2 = $"数字是: {number.ToString()}";  // 无装箱
string str3 = string.Format("数字是: {0}", number.ToString());


int value = 100;

// 这些会导致装箱：
Console.WriteLine(value);          // 装箱
string s1 = value + "text";        // 装箱
string s2 = $"{value}";           // 装箱

// 避免装箱：
Console.WriteLine(value.ToString());  // 无装箱
string s3 = value.ToString() + "text";
string s4 = $"{value.ToString()}";
```

## **装箱 vs 拆箱 对比**

| 特性 | 装箱 (Boxing) | 拆箱 (Unboxing) |
|------|---------------|-----------------|
| **方向** | 值类型 → 引用类型 | 引用类型 → 值类型 |
| **转换方式** | 隐式（自动） | 显式（必须强制转换） |
| **内存分配** | 在堆上分配新内存 | 从堆复制到栈 |
| **性能开销** | 较高（分配内存+复制） | 较高（类型检查+复制） |
| **类型安全** | 总是安全 | 需要类型匹配检查 |
| **示例** | `object obj = 10;` | `int i = (int)obj;` |

## **总结**

1. **装箱**：值类型→引用类型（隐式）
2. **拆箱**：引用类型→值类型（显式）
3. **内存机制**：栈上的值复制到堆，或从堆复制回栈
4. **类型原则**：拆箱必须类型完全匹配

**关键点**：装箱和拆箱是实现C#类型系统统一性的重要机制，但会带来性能开销。在现代C#开发中，应尽量使用泛型来避免不必要的装箱拆箱操作。

