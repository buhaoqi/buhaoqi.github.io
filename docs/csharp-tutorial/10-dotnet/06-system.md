---
noteId: "a5bcdcc0678311f0b0d6278e683d20b1"
tags: []

---


在 C# 中，**`System`** 是 .NET 的核心命名空间（Namespace），几乎每一个 C# 程序都会用到它。它包含了大量基础类，是 .NET 类库的“地基”。

---

## 🧱 一、什么是 `System`？

* `System` 是 .NET 类库中的 **根命名空间**，也是 **所有常用类型的起点**。
* 它是 `System.Console`、`System.String`、`System.Math` 等类型的“家”。
* 你在写 C# 时几乎总会看到：

  ```csharp
  using System;
  ```

---

## 📚 二、System 中常见的重要类

| 类名                   | 功能简述    | 示例                                    |
| -------------------- | ------- | ------------------------------------- |
| `System.Console`     | 控制台输入输出 | `Console.WriteLine("Hello");`         |
| `System.String`      | 字符串处理类  | `string s = "abc";`                   |
| `System.Math`        | 数学运算工具类 | `Math.Sqrt(16)`                       |
| `System.DateTime`    | 日期和时间   | `DateTime.Now`                        |
| `System.Random`      | 生成随机数   | `new Random().Next()`                 |
| `System.Array`       | 所有数组的基类 | `Array.Sort(arr)`                     |
| `System.Type`        | 类型的元数据类 | `typeof(int)`                         |
| `System.Object`      | 所有类的基类  | `ToString()` 来自 `Object`              |
| `System.Exception`   | 所有异常的基类 | `try { ... } catch (Exception e) { }` |
| `System.Collections` | 老版本集合类  | `ArrayList`、`Hashtable` 等             |

---

## 🧠 三、System 是命名空间，不是类！

### ✅ 正确认识：

```csharp
using System; // 引入 System 命名空间
```

* `System` 是“一个分类”，里面包含很多子命名空间和类。
* 你不能写 `new System()`，因为它不是类，而是“装类的地方”。

---

## 🧭 四、System 的常用子命名空间

| 子命名空间                        | 简要说明                                  |
| ---------------------------- | ------------------------------------- |
| `System.Collections`         | 非泛型集合类（如 `ArrayList`, `Stack`）        |
| `System.Collections.Generic` | 泛型集合类（如 `List<T>`, `Dictionary<K,V>`） |
| `System.IO`                  | 文件、流操作（如 `File`, `StreamReader`）      |
| `System.Text`                | 文本操作（如 `StringBuilder`, 编码类）          |
| `System.Linq`                | LINQ 查询支持                             |
| `System.Net`                 | 网络编程（如 `HttpClient`）                  |
| `System.Threading`           | 多线程操作                                 |
| `System.Reflection`          | 反射机制                                  |
| `System.Diagnostics`         | 调试和性能分析工具                             |
| `System.Timers`              | 计时器                                   |

---

## 🧩 五、图示理解 System 的结构（简化）

```
System
├── Console
├── String
├── Math
├── DateTime
├── Collections
│   └── Generic
├── IO
├── Net
├── Reflection
├── Threading
└── ...
```

---

## 📌 六、编程时的体会：

当你在 VS 中写：

```csharp
using System;
```

就等于你可以直接使用：

```csharp
Console.WriteLine();
String s = "abc";
DateTime.Now
```

否则你就要写全名：

```csharp
System.Console.WriteLine();
System.String s = "abc";
```

---

## ✅ 总结：

| 问题                       | 回答                                                     |
| ------------------------ | ------------------------------------------------------ |
| `System` 是什么？            | 是 .NET 类库的根命名空间，包含最基本的功能类。                             |
| 是类吗？可以实例化吗？              | 不是类，不能实例化。它是“类型仓库”。                                    |
| 为什么每个程序都 `using System`？ | 因为几乎所有常用类型都在这个命名空间下。                                   |
| 包含了哪些典型的类？               | Console、String、Math、DateTime、Array、Exception、Object 等。 |
| 有哪些常见子命名空间？              | Collections、IO、Text、Linq、Net、Threading 等等。             |

---